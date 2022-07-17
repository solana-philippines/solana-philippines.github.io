import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../constants";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10vh;
  box-sizing; border-box;
  padding: 0 3em;
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 1em;
    width: 3em;
  }

  h3 {
    color: ${Colors.WHITE};
    font-family: Lato Bold;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledMenu = styled.span`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 0.5em;

  &:hover {
    cursor: pointer;
    background: rgb(252, 209, 22);
    background: linear-gradient(
      45deg,
      rgba(252, 209, 22, 1) 0%,
      rgba(0, 56, 168, 1) 50%,
      rgba(206, 17, 38, 1) 100%
    );
  }

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.WHITE};
  margin-left: 2em;

  font-family: Lato Bold;

  &:hover {
    text-decoration: underline;
  }
`;

export { StyledMenu, StyledNav, StyledLeft, StyledRight, StyledLink };
