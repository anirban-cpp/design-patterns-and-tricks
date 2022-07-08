import axios from "axios";
import React from "react";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  // const worker = new Worker(new URL("./Upload-web-worker.js", import.meta.url));

  const uploadImage = () => {
    // worker.postMessage(selectedImage);
    // worker.onerror = (err) => console.log(err);
    // worker.onmessage = (e) => {
    //   console.log(e);
    // };

    const formData = new FormData();
    setLoading(true);
    Array.from(selectedImage).forEach(async (file, i) => {
      formData.append("file", file);
      formData.append("upload_preset", "cstzrfqa");
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/djmqtevix/image/upload",
          formData
        );
        if (response && response.status === 200) {
          setImageUrls(prev => [...prev,response.data.secure_url]);
          if (i === selectedImage.length - 1) {
            setSuccess(true);
            setLoading(false);
            alert("Uploaded all images");
          }
        }
      } catch (err) {
        setLoading(false);
        alert("Upload Failed");
        console.log(err);
      }
    });
  };

  if (loading) return <CircularProgress color="info" />;

  return (
    <div className="file-upload">
      <input
        type="file"
        multiple
        onChange={(e) => setSelectedImage(e.target.files)}
      />
      <button className="fibonacci-button" onClick={uploadImage}>
        Upload Images
      </button>
      {success &&
        !loading &&
        imageUrls.length > 0 &&
        imageUrls.map((url, i) => <img src={url} alt="upload" key={i} />)}
    </div>
  );
};

export default Upload;
