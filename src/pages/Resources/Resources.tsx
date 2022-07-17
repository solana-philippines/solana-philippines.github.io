import { FC } from "react";

import Header from "../../components/Header";
import GradientHeader from "../../components/GradientHeader";
import Body from "../../components/Body";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Spacer from "../../components/Spacer";
import Paragraph from "../../components/Paragraph";
import Section from "../../components/Section";

import Card from "./components/Card";

import {
  BEGINNER_RESOURCES,
  INTERMEDIATE_RESOURCES,
  ADVANCE_RESOURCES,
} from "./constants";

const Resources: FC = () => (
  <>
    <Navbar />
    <Body>
      <Spacer size={5} />
      <GradientHeader text="Resources" size={2} />
      <Spacer size={3} />
      <Header text={"Beginner? Start Here."} size={4} />
      <Paragraph lineHeight={2} text="Grassroots for Solana knowledge." />
      <Section columns={2}>
        {BEGINNER_RESOURCES.map((resource, idx) => (
          <Card
            key={idx}
            title={resource.title}
            description={resource.description}
            externalUrl={resource.externalUrl}
            tags={resource.tags}
          />
        ))}
      </Section>

      <Spacer size={3} />
      <Header text={"Feeling confident? Get This."} size={4} />
      <Paragraph
        lineHeight={2}
        text="Knowledge for the self-motivated learner."
      />
      <Section columns={2}>
        {INTERMEDIATE_RESOURCES.map((resource, idx) => (
          <Card
            key={idx}
            title={resource.title}
            description={resource.description}
            externalUrl={resource.externalUrl}
            tags={resource.tags}
          />
        ))}
      </Section>

      <Spacer size={3} />
      <Header text={"You're all grown up!"} size={4} />
      <Paragraph lineHeight={2} text="Time to go on that adventure yourself!" />
      <Section columns={2}>
        {ADVANCE_RESOURCES.map((resource, idx) => (
          <Card
            key={idx}
            title={resource.title}
            description={resource.description}
            externalUrl={resource.externalUrl}
            tags={resource.tags}
          />
        ))}
      </Section>
    </Body>
    <Footer />
  </>
);

export default Resources;
