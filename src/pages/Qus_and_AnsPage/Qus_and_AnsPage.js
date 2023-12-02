import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [qaList, setQAList] = useState([
    { id: 1, question: 'What is your favorite programming language?', answer: '' },
    { id: 2, question: 'What project are you currently working on?', answer: '' },
    { id: 3, question: 'What project are you currently working on?', answer: '' },
    { id: 4, question: 'What project are you currently working on?', answer: '' },
    { id: 5, question: 'What project are you currently working on?', answer: '' },
    { id: 6, question: 'What project are you currently working on?', answer: '' },
    { id: 7, question: 'What project are you currently working on?', answer: '' },
    { id: 8, question: 'What project are you currently working on?', answer: '' },
    { id: 9, question: 'What project are you currently working on?', answer: '' },
    { id: 10, question: 'What project are you currently working on?', answer: '' },

    // Add more questions as needed
  ]);

  const handleAnswerChange = (id, answer) => {
    setQAList((prevQAList) =>
      prevQAList.map((qa) => (qa.id === id ? { ...qa, answer } : qa))
    );
  };
  const handleFormSubmit = () => {
    // Customize the submit functionality here, e.g., log answers to the console
    console.log('Submitted Answers:', qaList);
  };

  return (
    <AppContainer>
      <h1 style={{ color: '#3498db' }}>Online Test Question-Answer </h1>
      <QuestionList>
        {qaList.map((qa) => (
          <QuestionItem key={qa.id}>
            <QuestionText>{qa.question}</QuestionText>
            <AnswerTextarea
              value={qa.answer}
              onChange={(e) => handleAnswerChange(qa.id, e.target.value)}
              placeholder="Write your answer..."
            />
          </QuestionItem>
        ))}
      </QuestionList>
      <SubmitButton onClick={handleFormSubmit}>Submit Answers</SubmitButton>

    </AppContainer>
  );
}

export default Qus_and_AnsPage;
