import styled from "styled-components";

import { Colors } from "../constants";

type Props = {
  text: string;
  url: string;
};

export default function TextLink({ text, url }: Props) {
  return <StyledLink href={url}>{text}</StyledLink>;
}

const StyledLink = styled.a`
  text-decoration: none;
  color: ${Colors.WHITE};
  margin-left: 2em;

  font-family: Lato Regular;

  &:hover {
    text-decoration: underline;
  }
`;
