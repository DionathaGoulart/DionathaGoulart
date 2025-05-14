import { ReactNode } from "react";
import { colors } from "../../../types";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div
      className="flex flex-col min-h-screen justify-center items-center"
      style={{ backgroundColor: colors.base }}
    >
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
    </div>
  );
}

export default Container;
