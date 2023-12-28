import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkButtonProps {
  text: string;
  to: string;
  color?: string;
  variant?: "default" | "hover"
}

const StyledLinkButton = styled(Link)<{ color?: string }>`
  color: ${({color}) => (color ? color : "#5DA552")};
  font-family: "Open Sans", sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  text-decoration: none;
  transition: border-bottom 0.3s ease-in-out;

  &:hover{
    border-bottom: 2px solid #5DA552;
  }
`;

const LinkButton: React.FC<LinkButtonProps> = ({ to, text, color }) => {
  return <StyledLinkButton color={color} to={to}>{text}</StyledLinkButton>;
};

export default LinkButton;
