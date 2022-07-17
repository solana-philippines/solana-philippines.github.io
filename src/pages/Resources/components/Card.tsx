import { FC } from "react";

import Paragraph from "../../../components/Paragraph";

import { StyledCard, StyledCardDetails, StyledCardTags } from "./Card.styled";

type Props = {
  title: string;
  tags: string[];
  description: string;
  externalUrl: string;
};

const Card: FC<Props> = ({ title, tags, description, externalUrl }) => (
  <>
    <StyledCard href={externalUrl} target="_blank" rel="noopener noreferrer">
      <StyledCardDetails>
        {tags.map((t, idx) => (
          <StyledCardTags key={idx} className="secondary-text-size">
            {t}
          </StyledCardTags>
        ))}

        <h1>{title}</h1>
      </StyledCardDetails>

      <Paragraph lineHeight={1.5} text={description} />
    </StyledCard>
  </>
);

export default Card;
