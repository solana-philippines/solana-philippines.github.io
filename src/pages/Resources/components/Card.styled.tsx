import styled from "styled-components";
import { Colors } from "../../../constants";

const StyledCard = styled.a`
  text-decoration: none;
  color: ${Colors.WHITE};

  padding: 2em;

  border-radius: 1em;

  background: rgb(252, 209, 22);
  background: linear-gradient(
    45deg,
    rgba(252, 209, 22, 1) 0%,
    rgba(0, 56, 168, 1) 50%,
    rgba(206, 17, 38, 1) 100%
  );

  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: translateY(-2em) scale(1.1);
  }
`;

const StyledCardDetails = styled.span`
  h1 {
    font-size: 1.5em;
    font-family: Lato Bold;
    margin: 0.5em 0;
  }
`;

const StyledCardTags = styled.h6`
  text-align: center;
  box-sizing: border-box;
  padding: 1em 2em;
  border-radius: 1em;
  color: ${Colors.BLACK};
  background-color: ${Colors.WHITE};
  font-family: Lato Regular;
  margin-bottom: 1em;
`;

const StyledCardImgHolder = styled.div`
  margin-top: 1em;
  img {
    border-radius: 0.5em;
    width: 100%;
  }
`;

export { StyledCard, StyledCardDetails, StyledCardImgHolder, StyledCardTags };
