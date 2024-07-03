import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../firebase";

function AdminCreateCourse() {
  const [image, setImage] = useState(undefined);
  const [imageProgress, setImageProgress] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});

  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  // --------------------
  // ** Upload File **
  // --------------------

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageProgress(Math.floor(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, uploadFile: downloadURL })
        );
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/study/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res_data = await response.json();
      console.log(res_data);

      if (response.ok) {
        setData({ title: "", content: "" });
        toast.success("Create SuccessFully!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Create Course</h1>
      </div>

      <section className="section-user-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Title</label>
            <input
              className="bg-gray-700 text-white p-4 rounded w-full mb-4"
              type="text"
              name="title"
              id="title"
              autoComplete="off"
              value={data.title}
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <label htmlFor="content">content</label>
            <textarea
              className="bg-gray-700 text-white p-4 rounded w-full mb-4"
              cols={50}
              rows={5}
              type="content"
              name="content"
              id="content"
              autoComplete="off"
              value={data.content}
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <p className="text-sm self-center font-bold mb-4">
            {imageError ? (
              <span className="text-red-600">
                Error uploading Image (file size must be less than 2 MB)
              </span>
            ) : imageProgress > 0 && imageProgress < 100 ? (
              <span className="text-white font-bold text-3xl">{`Uploading ${imageProgress} %`}</span>
            ) : imageProgress === 100 ? (
              <span className="text-green-600 font-bold text-3xl ">
                Image upload Successfully
              </span>
            ) : (
              ""
            )}
          </p>

          <div>
            <button type="submit">Create</button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default AdminCreateCourse;
