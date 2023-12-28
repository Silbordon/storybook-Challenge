import styled from "styled-components";

/**
 * Standard prototype that represents the title with a specific font size and line height and weight and text provided as properties.
 * @param text - the text content
 * @param color - (optional) text color content
 */

type TitleProps = {
  text: string;
  color?: string;
}

const TitleStyleComponent = styled.div<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#646565")};
  /* font-family: "Open Sans", sans-serif; */
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

const Title: React.FC<TitleProps> = ({ text, color }) => {
  return <TitleStyleComponent color={color}>{text}</TitleStyleComponent>;
};

export default Title;
