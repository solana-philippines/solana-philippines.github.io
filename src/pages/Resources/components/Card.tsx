import React from "react";

import Paragraph from "../../../components/Paragraph";

import {
  StyledCard,
  StyledCardDetails,
  StyledCardImgHolder,
  StyledCardTags,
} from "./Card.styled";

type Props = {
  title: string;
  tags: string[];
  description: string;
  imgSrc: string;
  externalUrl: string;
};

const Card: React.FC<Props> = ({
  title,
  tags,
  description,
  imgSrc,
  externalUrl,
}) => (
  <>
    <StyledCard href={externalUrl}>
      <StyledCardDetails>
        <h1>{title}</h1>

        <StyledCardTags className="secondary-text-size">
          {tags.join(", ")}
        </StyledCardTags>
      </StyledCardDetails>

      <Paragraph lineHeight={1.5} text={description} />

      <StyledCardImgHolder>
        <img src={imgSrc} alt={`${title} Thumbnail`} />
      </StyledCardImgHolder>
    </StyledCard>
  </>
);

export default Card;
