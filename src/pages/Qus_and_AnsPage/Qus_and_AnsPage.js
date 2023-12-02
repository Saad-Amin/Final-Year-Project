import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { id } from "date-fns/locale";

const LoadingIndicator = styled.div`
  display: ${(props) => (props.loading ? "block" : "none")};
  margin-top: 20px;
`;

const AppContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const QuestionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const QuestionItem = styled.li`
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.03);
  }
`;

const QuestionText = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
`;

const AnswerTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 12px;
  box-sizing: border-box;
  resize: vertical;
  border: 1px solid #dddddd;
  border-radius: 8px;
  font-size: 16px;
  color: #555555;
  background-color: #f4f4f4;

  &:focus {
    outline: none;
    border-color: #2196f3;
    background-color: #ffffff;
  }
`;
const SubmitButton = styled.button`
  background-color: #3498db;
  color: #ffffff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
`;

function Qus_and_AnsPage() {
  const [qaList, setQaList] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/getqa")
      .then((response) => {
        const questions = response.data.questions;
        const initialQaList = questions.map((question, index) => ({
          id: index,
          question,
          answer: "",
        }));
        setQaList(initialQaList);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleAnswerChange = (id, answer) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[id] = answer !== null && answer !== undefined ? answer : "";
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    // Replace undefined or null values with empty strings
    const cleanedAnswers = userAnswers.map((answer) =>
      answer !== null && answer !== undefined ? answer : ""
    );

    // console.log("User Answers:", cleanedAnswers);
    axios
      .post("http://127.0.0.1:5000/getscore", {
        cleanedAnswers,
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Your Score is : " + response.data.user_score);
        }
      })
      .catch(function (error) {
        console.log(error, "error");
        if (error.response.status === 401) {
          alert("Invalid Email or Password");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AppContainer>
      <h1 style={{ color: "#3498db" }}>Online Test Question-Answer </h1>
      <QuestionList>
        {qaList.map((qa) => (
          <QuestionItem key={qa.id}>
            <QuestionText>{qa.question}</QuestionText>
            <AnswerTextarea
              onChange={(e) => handleAnswerChange(qa.id, e.target.value)}
              placeholder="Write your answer..."
            />
          </QuestionItem>
        ))}
      </QuestionList>
      <SubmitButton onClick={handleSubmit}>Submit Answers</SubmitButton>
      <LoadingIndicator loading={loading}>Submitting...</LoadingIndicator>
    </AppContainer>
  );
}

export default Qus_and_AnsPage;