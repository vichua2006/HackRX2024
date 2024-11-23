import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode;
}

function PrescriptionTable({ heading, children }: Props) {
  return (
    <>
      <h1 className="h1 display-6 text-center">{heading}</h1>
      <hr />
      <div>{children}</div>
    </>
  );
}

export default PrescriptionTable;
