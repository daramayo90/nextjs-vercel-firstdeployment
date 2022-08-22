import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

/** FC: Functional Component */
export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
