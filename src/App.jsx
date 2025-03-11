import React, { useRef, useState } from "react";
import "./App.css";
import { FiUploadCloud } from "react-icons/fi"; // Import upload icon

function App() {
  console.log("Anomaly Detection Page Loaded!");

  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(URL.createObjectURL(file));
    } else {
      alert("Please upload an image file!");
    }
  };

  return (
    <div className="app-container">
      <h1 className="heading">Upload here</h1>

      <div className="upload-container" onClick={handleBrowseClick}>
        <FiUploadCloud className="upload-icon" size={60} />
        <p>
          {selectedFile ? `Selected: ${selectedFile}` : "Drag & Drop or "}
          <span className="browse">Browse</span>
        </p>
        <input
          type="file"
          ref={fileInputRef}
          className="file-input"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      {/* Image Preview */}
      {selectedFile && (
        <div className="preview-container">
          <h3>Preview</h3>
          <img src={selectedFile} alt="Preview" className="preview-image" />
        </div>
      )}
    </div>
  );
}

export default App;
