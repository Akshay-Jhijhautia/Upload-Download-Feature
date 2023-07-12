import { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";

import Navbar from "./components/Navbar";
import apiClient from "./services/api-client";
import CustomerDetails from "./components/CustomerDetails";

function App() {
  const [customerData, setCustomerData] = useState([]);
  const [value, setValue] = useState(false);
  const hiddenInputValue = useRef(null);

  useEffect(() => {
    apiClient
      .get("details")
      .then((res) => setCustomerData(res.data))
      .catch((error) => console.log(error.message));
  }, [value]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      apiClient
        .post("upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setValue(!value);
          console.log(res.data);
        })
        .catch((err) => console.log(err.message));
    }
  };

  function handleUpload() {
    hiddenInputValue.current.click();
  }

  return (
    <>
      <Navbar />
      <CustomerDetails customerData={customerData} />
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={hiddenInputValue}
      />
      <Button
        style={{ marginLeft: "10%" }}
        variant="contained"
        color="primary"
        onClick={handleUpload}
      >
        Upload File
      </Button>
      <Button
        style={{ marginLeft: "1%" }}
        variant="contained"
        color="primary"
        onClick={() => console.log("Download Button clicked")}
      >
        Download File
      </Button>
    </>
  );
}

export default App;
