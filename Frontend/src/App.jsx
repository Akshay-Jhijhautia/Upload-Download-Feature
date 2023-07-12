import { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { CSVLink } from "react-csv";

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

  const data = customerData.data;
  const headers = [
    { label: "Id", key: "id" },
    { label: "Customer Name", key: "Customer_Name" },
    { label: "Relationship Manager Name", key: "Relationship_Manager_Name" },
    { label: "Loan Amount", key: "Loan_Amount" },
    { label: "Documents Submitted", key: "Documents_Submitted" },
    { label: "Documents Reviewed", key: "Documents_Reviewed" },
    { label: "Loan Disbursed", key: "Loan_Disbursed" },
  ];
  const csvLink = {
    filename: "loan-data.csv",
    headers: headers,
    data: customerData.length === 0 ? "" : data,
  };

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

      <CSVLink {...csvLink}>
        <Button
          style={{ marginLeft: "1%" }}
          variant="contained"
          color="primary"
        >
          Download File
        </Button>
      </CSVLink>
    </>
  );
}

export default App;
