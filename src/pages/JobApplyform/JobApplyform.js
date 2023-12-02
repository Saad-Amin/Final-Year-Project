import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
//import "../../stylesheets/jobPostingform.css";

function JobApplyform() {
  const [file, setFile] = useState(null);
  const email = "muneeb@gmail.com";
  const name = "Muneeb Farrukh";
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Check if the selected file is a PDF
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      // Display a message or take appropriate action for invalid file type
      alert("Please select a PDF file.");
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (file) {
      // console.log("Sending File Name : ", file.name);
      const formData = new FormData();
      formData.append("cv", file);
      formData.append("filename", file.name);

      try {
        const response = await axios.post(
          "http://127.0.0.1:5000//upload-cv",
          formData
        );
        // console.log(response)
        const cvMatchScore = response.data.CV_match_score;
        // console.log(file.name);
        // console.log(response.status);
        // console.log(cvMatchScore);
        if (response.status === 200) {
          if(cvMatchScore > 60){
            alert("Your CV match "+cvMatchScore+"% with Job Description You can apply for this job");
            navigate('/qpage');
          }
          else{
            alert("Your CV match "+cvMatchScore+"% with Job Description You can't apply for this job");
          }
          
        } 
        // Check if the response indicates a successful upload
        if (response.status === 200) {
          console.log("CV uploaded successfully:", response.data);
        } else {
          console.error(
            "Error uploading CV:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error uploading CV:", error.message);
      }
    } else {
      console.log("No file selected");
    }
  };
  return (
    <>
      <Form
        style={{
          width: "50%",
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            textAlign: "left",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          Apply Now
        </h3>
        <Form.Group className="mb-3">
          <Form.Control
            value={name}
            readOnly={true}
            type="text"
            placeholder="Enter Full Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={email}
            readOnly={true}
            type="email"
            placeholder="Enter Email Address"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control onChange={handleFileChange} type="file" accept=".pdf" />
        </Form.Group>
        <Button onClick={handleUpload}>Apply Now</Button>
      </Form>
    </>
  );
}

export default JobApplyform;
