import styled from "styled-components";

/**
 * Standard prototype that represents the Subtitle with a specific font size and line height and weight and text provided as properties.
 * @param text - the text content
 * @param color - (optional) text color content
 */

type SubtitleProps = {
  text: string;
  color?: string;
};

const SubtitleStyleComponent = styled.div<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : "#646565")};
  /* font-family: "Open Sans", sans-serif; */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem; 
`;

const Subtitle: React.FC<SubtitleProps> = ({ text, color }) => {
  return <SubtitleStyleComponent color={color}>{text}</SubtitleStyleComponent>;
};

export default Subtitle;
