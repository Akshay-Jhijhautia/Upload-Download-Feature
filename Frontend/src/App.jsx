import { useState, useEffect } from "react";
import { Button } from "@mui/material";

import Navbar from "./components/Navbar";
import apiClient from "./services/api-client";
import CustomerDetails from "./components/CustomerDetails";

function App() {
  const [customerData, setCustomerData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [value, setValue] = useState(false);

  useEffect(() => {
    apiClient
      .get("details")
      .then((res) => setCustomerData(res.data))
      .catch((error) => console.log(error.message));
  }, [value]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    apiClient
      .post("upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setSelectedFile(null);
        setValue(!value);
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Navbar />
      <CustomerDetails customerData={customerData} />
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="upload-file"
        />
        <label htmlFor="upload-file">
          <Button
            style={{ marginLeft: "10%" }}
            component="span"
            variant="contained"
            color="primary"
          >
            SELECT FILE
          </Button>
        </label>
        <Button
          style={{ marginLeft: "1%" }}
          type="submit"
          variant="contained"
          color="primary"
          disabled={!selectedFile}
        >
          Upload
        </Button>
        <Button
          style={{ marginLeft: "1%" }}
          variant="contained"
          color="primary"
          onClick={() => console.log("Download button clicked")}
        >
          Download
        </Button>
      </form>
    </>
  );
}

export default App;
