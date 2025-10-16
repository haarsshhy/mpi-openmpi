import React, { useState } from "react";
import { Dropbox } from "dropbox";

function App() {
  const [file, setFile] = useState(null);

  // Initialize Dropbox
  const dbx = new Dropbox({ accessToken: process.env.REACT_APP_DROPBOX_ACCESS_TOKEN });

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Upload file to Dropbox
  const handleUpload = async () => {
    if (!file) return alert("Please select a file!");

    try {
      const response = await dbx.filesUpload({
        path: "/" + file.name,
        contents: file,
      });
      alert("File uploaded: " + response.result.name);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Dropbox Demo</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        Upload
      </button>
    </div>
  );
}

export default App;
