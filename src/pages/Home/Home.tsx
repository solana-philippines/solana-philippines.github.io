import Body from "../../components/Body";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Paragraph from "../../components/Paragraph";
import Spacer from "../../components/Spacer";

export default function Home() {
  return (
    <Body>
      <Spacer size={5} />
      <Header text="HEADER" size={1} />
      <Spacer size={5} />
      <Section columns={2}>
        <Section columns={1}>
          <Header text="HEADER" size={2} />
          <Paragraph
            lineHeight={1}
            text="The quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog I am in love with you but i am not in the s bue"
          />
          <Paragraph text="HOtodg" />
        </Section>
        <Paragraph text="HOtodg" />
        <Paragraph
          lineHeight={1}
          text="The quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog I am in love with you but i am not in the s bue"
        />
        <Paragraph
          lineHeight={1}
          text="The quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog I am in love with you but i am not in the s bue"
        />
      </Section>
    </Body>
  );
}
