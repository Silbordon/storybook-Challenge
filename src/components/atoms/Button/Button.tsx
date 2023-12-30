import { FC } from "react";
import styled from "styled-components";

/**
 * Button component.
 * @param text - string with label button
 * @param onClick - function
 */

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const StyledButton = styled.button`
  width: 8.8125rem;
  height: 2.5rem;
  background-color: #5da552;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #fff;
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  border: none;
  cursor: pointer;
  outline: none;
  transition: background-color 0.5s, color 0.5s, border-color 0.5s;

  &:hover {
    background-color: #fff;
    color: #5da552;
    border: 1px solid #5da552;
  }

  &:active {
    background-color: #fff;
    color: #5da552;
    border: 1px solid #5da552;
  }
`;

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
