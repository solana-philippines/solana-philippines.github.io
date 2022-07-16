import styled from "styled-components";

import Body from "../../components/Body";
import Navbar from "../../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <Body>
        <StyledMain>
          <StyledHeader className="subheader-text-size">
            Page Not Found
          </StyledHeader>
          <StyledSubheader className="section-text-size">
            Uh-oh! Page not found
          </StyledSubheader>
        </StyledMain>
      </Body>
    </>
  );
}

const StyledMain = styled.main`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.header`
  font-family: Lato Black;
  background: #fcd116;
  background: linear-gradient(to right, #fcd116 0%, #0038a8 51%, #ce1126 66%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (max-width: 768px) {
    margin-top: 0.5em;
    font-size: 4em;
  }
`;

const StyledSubheader = styled.header`
  font-family: Lato Regular;
`;
