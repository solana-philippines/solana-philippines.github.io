import styled from "styled-components";

import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import Paragraph from "../../components/Paragraph";
import Spacer from "../../components/Spacer";

import { Colors } from "../../constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <Body>
        <Spacer size={5} />

        <a href="https://github.com/solana-philippines">
          <StyledGithub src="/assets/logos/github.svg" alt="Github Logo" />
        </a>

        <StyledHeader>Built by Filipinos, for Everyone</StyledHeader>

        <Section columns={1}>
          <Section columns={1}>
            <Header text="About" size={4} />
            <Paragraph
              lineHeight={2}
              text="Solana Philippines is the official Github organization for the Solana Philippines community."
            />
          </Section>

          <Section columns={1}>
            <Header text="Vision" size={4} />
            <Paragraph
              lineHeight={2}
              text="A decentralized future where Filipinos are empowered to build and innovate on tools, decentralized applications, or scripts that will help everyone build with Solana."
            />
          </Section>

          <Section columns={1}>
            <Header text="Mission" size={4} />
            <Paragraph
              lineHeight={2}
              text="The mission is to open a space of respect and positive collaboration to facilitate the curious pursuit of knowledge in building with Solana. By empowering Filipinos with collaborative development experience we can nurture leading developers with the mindset of learning and problem-solving."
            />
          </Section>
        </Section>
      </Body>
      <Footer />
    </>
  );
}

const StyledHeader = styled.header`
  margin-top: 1em;
  font-family: Lato Black;
  font-size: 5em;
  background: #fcd116;
  background: linear-gradient(to right, #fcd116 0%, #0038a8 51%, #ce1126 66%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (max-width: 768px) {
    margin-top: 0.5em;
    font-size: 4em;
  }
`;

const StyledGithub = styled.img`
  width: 7em;
  filter: invert(87%) sepia(100%) saturate(29%) hue-rotate(129deg) brightness(108%) contrast(106%);
    }

  @media only screen and (max-width: 768px) {
    width: 5em;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 100px;
`;
