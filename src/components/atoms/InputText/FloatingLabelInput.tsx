import React, { useState } from "react";
import styled, { css } from "styled-components";

/**
 * Floating Label Input component
 * @param labelText - string with label text
 * @param placeholderText - string with placeholder text
 */


type FloatingLabelInputProps = {
  labelText: string;
  placeholderText: string;
};

const FloatingLabelInputContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const Input = styled.input<{ isError: boolean }>`
  width: 100%;
  height: 3.5rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  background: #f0f0f0;
  color: rgba(0, 0, 0, 0.54);
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  margin-top: 0.5rem;
  padding: 1.5rem 0.5rem 0.5rem 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-bottom-width: 2px;
    border-bottom-color: ${({ isError }) => (isError ? "red" : "#2979FF")};
  }

  &:not(:placeholder-shown) + label {
    transform: translateY(-130%) scale(0.75);
    color: ${({ isError }) => (isError ? "red" : "#2979FF")};
  }

  ${({ isError }) =>
    isError &&
    css`
      border-color: red;
    `}
`;

const Label = styled.label`
  position: absolute;
  top: 0.8rem;
  left: 1rem;
  color: #2979ff;
  font-family: Roboto;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.875rem;
  transition: 0.3s ease-out;
  transform-origin: top left;
`;

const ErrorMessage = styled.span`
  color: red;
  font-family: Roboto;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.875rem;
`;

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  labelText,
  placeholderText,
}) => {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [textError, setTextError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (isError) {
      setIsError(false);
    }
  };

  const handleInputBlur = () => {
    handleInputValidation();
  };

  const handleInputValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.trim() === "") {
      setIsError(true);
      setTextError("El campo no puede estar vacío");
    } else if (!emailRegex.test(value.trim())) {
      setIsError(true);
      setTextError("Formato de Email incorrecto");
    } else {
      setIsError(false);
    }
  };

  return (
    <FloatingLabelInputContainer>
      <Input
        type="email"
        value={value}
        isError={isError}
        placeholder={placeholderText}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <Label>{labelText}</Label>
      {isError && <ErrorMessage>{textError}</ErrorMessage>}
    </FloatingLabelInputContainer>
  );
};

export default FloatingLabelInput;
