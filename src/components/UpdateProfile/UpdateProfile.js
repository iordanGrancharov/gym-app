import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import styles from "./UpdateProfile.module.css";
import { storage } from "../../firebase/firebaseAuthentication";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [imageUploadState, setImageUploadState] = useState(null);
  const [formData, setFormData] = useState({
    ...user,
  });
  const [image, setImage] = useState(null);

  const uploadFile = async () => {
    if (image === null) {
      return;
    }

    const storageRef = ref(
      storage,
      `/files/avatars/${image.name}${new Date().valueOf()}`
    );
    const snapshot = await uploadBytes(storageRef, image);
    // Get the download URL for the uploaded file
    const url = await getDownloadURL(snapshot.ref);

    return url;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      personalInfo: { ...formData.personalInfo, [name]: value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fileUrl = await uploadFile();

    console.log(fileUrl);
    const data = {
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        avatar: imageUploadState ? formData.personalInfo.avatar : fileUrl,
      },
    };
    console.log(data);
  };

  return (
    <section className={styles["container"]}>
      <div className={styles["section-one"]}>
        <h4>Welcome, {user.email}</h4>
        <p>Provide additional information to complete your profile</p>
        <p>You can skip this step and do it later</p>
      </div>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <h3>Additional Information</h3>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={formData.personalInfo.username}
        />
        <div className={styles["image-container"]}>
          <div className={styles["btn-container"]}>
            <button type="button" onClick={() => setImageUploadState(true)}>
              imageUrl
            </button>
            <button type="button" onClick={() => setImageUploadState(false)}>
              Upload
            </button>
          </div>
          {imageUploadState ? (
            <input
              type="text"
              placeholder="Profile picture url"
              name="avatar"
              onChange={handleChange}
              value={formData.personalInfo.avatar}
            />
          ) : (
            <label htmlFor="inputImage">
              <input
                type="file"
                id="inputImage"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
              Upload File
            </label>
          )}
        </div>
        <select
          name="gymType"
          onChange={handleChange}
          value={formData.personalInfo.gymType}
        >
          <option value="Newbie">Newbie</option>
          <option value="Average Person">Average Person</option>
          <option value="Calistenics">Calistenics</option>
          <option value="Crossfitter">Crossfitter</option>
          <option value="Powerlifter">Powerlifter</option>
          <option value="Strongman">Strongman</option>
          <option value="Bodybuilder">Bodybuilder</option>
        </select>
        <input
          type="number"
          placeholder="Enter your age"
          name="age"
          min={14}
          onChange={handleChange}
          value={formData.personalInfo.age}
        />
        <input
          type="text"
          placeholder="Gym Experience"
          name="experience"
          onChange={handleChange}
          value={formData.personalInfo.experience}
        />
        <div className={styles["weight-height"]}>
          <input
            type="number"
            name="height"
            placeholder="Enter your height in cm"
            onChange={handleChange}
            value={formData.personalInfo.height}
          />
          <input
            type="number"
            name="weight"
            placeholder="Enter your weight in kg"
            onChange={handleChange}
            value={formData.personalInfo.weight}
          />
        </div>

        <input type="submit" value="Submit" className={styles["submit"]} />
      </form>
    </section>
  );
};

export default UpdateProfile;
