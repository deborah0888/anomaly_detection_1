import { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image!");

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return alert("Only JPG, PNG, and WEBP images are allowed!");
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImageURL(`http://localhost:5000/image/${res.data.file.filename}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="upload-container">
      <h1>Anomaly Detection</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {imageURL && <img src={imageURL} alt="Uploaded" style={{ width: "300px", marginTop: "20px" }} />}
    </div>
  );
};

export default Upload;
