import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/**
 * Component to render a Link Button
 * @param text - string to add the button label
 * @param to - string to add the font color -var sass-
 * @param color -(optional) string to add color. This color is the same for the hover and active state in the Link underline 
 */

export interface LinkButtonProps {
  text: string;
  to: string;
  color?: string;
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
  cursor: pointer;

  &:hover{
    border-bottom: 2px solid ${({color}) => (color ? color : "#5DA552")};
  }
  &:active{
    border-bottom: 2px solid ${({color}) => (color ? color : "#5DA552")};
  }
`;

const LinkButton: React.FC<LinkButtonProps> = ({ to, text, color }) => {
  return <StyledLinkButton color={color} to={to}>{text}</StyledLinkButton>;
};

export default LinkButton;
