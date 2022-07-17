import { FC, useState, useEffect, useRef } from "react";
import Icon from "./Icon";

import {
  StyledMenu,
  StyledNav,
  StyledLeft,
  StyledRight,
  StyledLink,
  StyledMobileNav,
  StyledMNDisplay,
  StyledMDDropdown,
  StyledMobileLink,
} from "./modules/Navbar.styled";

type Props = {
  text: string;
  url: string;
};

const Navlink = ({ text, url }: Props) => (
  <StyledLink className="body-text-size" to={url}>
    {text}
  </StyledLink>
);

const MobileNavlink = ({ text, url }: Props) => (
  <StyledMobileLink className="body-text-size" to={url}>
    {text}
  </StyledMobileLink>
);

const Navbar = () => {
  const [mobileNavState, setMobileNavState] = useState(false);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileDropdownRef.current) {
      mobileDropdownRef.current.classList.toggle("mobile-dropdown-open");
    }
  }, [mobileNavState]);

  const toggleMobile = () => {
    if (mobileDropdownRef.current) {
      mobileDropdownRef.current.classList.toggle("mobile-dropdown-open");
    }
  };

  return (
    <>
      <StyledNav>
        <StyledLeft id="left">
          <img
            src="/assets/images/solana-philippines-cropped.jpg"
            alt="Solana Philippines Logo"
          />
          <h3>Solana Philippines</h3>
        </StyledLeft>
        <StyledRight id="right">
          <Navlink text="Home" url="/" />
          <Navlink text="Projects" url="/projects" />
          <Navlink text="Roadmap" url="/roadmap" />
          <Navlink text="Resources" url="/resources" />
        </StyledRight>
      </StyledNav>
      <StyledMobileNav>
        <StyledMNDisplay>
          <img
            src="/assets/images/solana-philippines-cropped.jpg"
            alt="Solana Philippines Logo"
          />
          <StyledMenu onClick={toggleMobile}>
            <Icon symbol="menu" size={1.5} />
          </StyledMenu>
        </StyledMNDisplay>
        <StyledMDDropdown ref={mobileDropdownRef}>
          <MobileNavlink text="Home" url="/" />
          <MobileNavlink text="Projects" url="/projects" />
          <MobileNavlink text="Roadmap" url="/roadmap" />
          <MobileNavlink text="Resources" url="/resources" />
        </StyledMDDropdown>
      </StyledMobileNav>
    </>
  );
};

export default Navbar;
