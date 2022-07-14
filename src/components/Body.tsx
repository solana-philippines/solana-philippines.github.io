import { ReactChild } from "react";

type Props = {
  children?: ReactChild;
};

export default function Body({ children }: Props) {
  return <div>{children}</div>;
}
