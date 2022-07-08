import React from "react";
import { useRef } from "react";
import { useState } from "react";

import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  padding: 1rem;
  width: 300px;
  outline: none;
  font-size: 1.5rem;
  font-family: "Poppins";
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  border: 2px solid #9f9d9d;
  border-radius: 5px;

  &:hover {
    border: 2px solid #5d5c5c;
  }

  &:focus {
    border: 2px solid #00a6ff;
  }

  &:focus ~ label {
    top: -0.9rem;
    font-size: small;
    background-color: white;
    color: #00a6ff;
    font-weight: bold;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: calc(1.1rem - 4px);
  top: ${(props) => (props.text?.length > 0 ? "-0.9rem" : "1.1rem")};
  font-size: ${(props) => (props.text?.length > 0 ? "small" : "1.5rem")};
  font-family: "Poppins";
  background-color: ${(props) =>
    props.text?.length > 0 ? "white" : "transparent"};
  transition: all 0.2s ease-in-out;
  padding: 0 5px;
  font-weight: ${(props) => (props.text.length > 0 ? "bold" : "normal")};
  color: #5a5858;
  cursor: text;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-family: Poppins, sans-serif;
  margin-bottom: 1rem;
  text-align: center;
`;

const Text = () => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  return (
    <Container>
      <Heading>Text-Field</Heading>
      <InputContainer>
        <Input
          type="text"
          placeholder=""
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="text-field"
        />
        <Label text={text}>Name</Label>
      </InputContainer>
    </Container>
  );
};

export default Text;
