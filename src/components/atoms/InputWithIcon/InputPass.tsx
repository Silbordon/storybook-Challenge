import React, { useState } from "react";
import styled, { css } from "styled-components";

/**
 * Input Password componente with eye icon
 * @param placeholderText - string with placeholder text
 * @param hasValue - boolean
 */

type LabelInputProps = {
  placeholderText: string;
};

type InputProps = {
  isError?: boolean;
};

const InputPassContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Input = styled.input<InputProps>`
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
  padding: 1rem 3rem 1rem 1rem;
  box-sizing: border-box;
  transition: border-color 0.3s ease-in-out;
  position: relative;

  &:focus {
    outline: none;
    border-bottom-width: 2px;
    border-bottom-color: ${({ isError }) => (isError ? "red" : "#2979FF")};
  }

  ${({ isError }) =>
    isError &&
    css`
      + label {
        transform: translateY(-130%) scale(0.75);
        color: red;
        border-color: red;
      }
    `}
`;

const ErrorMessage = styled.span`
  color: red;
  font-family: Roboto;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.875rem;
`;

const EyeIcon = styled.img<InputProps>`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;

  &.error {
    top: 40%;
  }
`;

const InputPass: React.FC<LabelInputProps> = ({ placeholderText }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [eyeIconSrc, setEyeIconSrc] = useState("/assets/icons/eye2.svg");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (isError) {
      setIsError(false);
    }
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    handleInputValidation();
  };

  const handleInputValidation = () => {
    if (value.trim() === "") {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const togglePassVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setEyeIconSrc((prevIconSrc) =>
      prevIconSrc === "/assets/icons/eye2.svg"
        ? "/assets/icons/eyewithslash.svg"
        : "/assets/icons/eye2.svg"
    );
  };

  return (
    <InputPassContainer>
      <Input
        type={showPassword ? "text" : "password"}
        value={value}
        isError={isError}
        placeholder={isFocused ? "" : placeholderText}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <EyeIcon
        src={eyeIconSrc}
        alt="Toggle Password Visibility"
        onClick={togglePassVisibility}
        className={isError ? "error" : ""}
      />
      {isError && <ErrorMessage>El campo no puede estar vacío</ErrorMessage>}
    </InputPassContainer>
  );
};

export default InputPass;
