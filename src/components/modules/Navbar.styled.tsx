import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../constants";

// Desktop Navbar

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10vh;
  box-sizing; border-box;
  padding: 0 2em;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 1em;
    height: 2em;
  }

  h3 {
    color: ${Colors.WHITE};
    font-family: Lato Bold;
  }
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
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

// Mobile Navbar

const StyledMobileNav = styled.nav`
  display: none;

  img {
    height: 2em;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }

  .mobile-dropdown-open {
    max-height: 100vh;
  }
`;

const StyledMenu = styled.span`
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  box-sizing: border-box;
  border-radius: 0.5em;

  background: rgb(252, 209, 22);
  background: linear-gradient(
    45deg,
    rgba(252, 209, 22, 1) 0%,
    rgba(0, 56, 168, 1) 50%,
    rgba(206, 17, 38, 1) 100%
  );

  transition: transform 0.1s ease-in-out;
  display: flex;

  &:hover {
    cursor: pointer;
    transform: translateY(-0.1em) scale(1.1);
  }
`;

const StyledMNDisplay = styled.div`
  box-sizing: border-box;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledMDDropdown = styled.div`
  box-sizing: border-box;
  max-height: 0px;
  transition: max-height 0.2s ease-out;
  overflow: hidden;
`;

const StyledMobileLink = styled(Link)`
  box-sizing: border-box;
  padding: 1em;
  display: block;
  width: 100%;
  font-family: Lato Bold;
  color: ${Colors.WHITE};
  text-align: center;
  text-decoration: none;
`;

export {
  StyledMenu,
  StyledNav,
  StyledLeft,
  StyledRight,
  StyledLink,
  StyledMobileNav,
  StyledMNDisplay,
  StyledMDDropdown,
  StyledMobileLink,
};
