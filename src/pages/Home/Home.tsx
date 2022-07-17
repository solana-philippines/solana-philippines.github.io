import React from "react";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import GradientHeader from "../../components/GradientHeader";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import Paragraph from "../../components/Paragraph";
import Spacer from "../../components/Spacer";

import { StyledGradient, StyledGithub } from "./modules/Home.styled";

const SECTIONS = {
  About:
    "Solana Philippines is the official Github organization for the Solana Philippines community.",
  Vision:
    "A decentralized future where Filipinos are empowered to build and innovate on tools, decentralized applications, or scripts that will help everyone build with Solana.",
  Mission:
    "The mission is to open a space of respect and positive collaboration to facilitate the curious pursuit of knowledge in building with Solana. By empowering Filipinos with collaborative development experience we can nurture leading developers with the mindset of learning and problem-solving.",
};

type SectionsKey = keyof typeof SECTIONS;

const Home: React.FC = () => (
  <>
    <Navbar />
    <Body>
      <Spacer size={5} />

      <a href="https://github.com/solana-philippines">
        <StyledGithub src="/assets/logos/github.svg" alt="Github Logo" />
      </a>

      <GradientHeader text="Built by Filipinos, for Everyone" size={2} />

      <Section>
        {Object.keys(SECTIONS).map((e) => (
          <Section>
            <Header text={e} size={4} />
            <Paragraph lineHeight={2} text={SECTIONS[e as SectionsKey]} />
          </Section>
        ))}
      </Section>
    </Body>
    <Section>
      <StyledGradient>
        <Section columns={2}>
          <Header text="How to reach us?" size={3} />
          <a href="https://github.com/solana-philippines">
            <StyledGithub src="/assets/logos/github.svg" alt="Github Logo" />
          </a>
        </Section>
      </StyledGradient>
    </Section>
    <Footer />
  </>
);

export default Home;
