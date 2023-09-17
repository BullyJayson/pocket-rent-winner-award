import { ReactNode } from "react";
import NaviBar from "./NaviBar";

interface Props {
  children: ReactNode;
}

const LayOut = ({ children }: Props) => {
  return (
    <>
      <NaviBar />
      {children}
    </>
  );
};

export default LayOut;
