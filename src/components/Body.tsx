import { ReactChild } from "react";

import styled from "styled-components";

type Props = {
  children?: ReactChild;
};

export default function Body({ children }: Props) {
  return <div>{children}</div>;
}
