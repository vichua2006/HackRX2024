import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode;
}

function PrescriptionTable({ heading, children }: Props) {
  return (
    <>
      <h1 className="h1 text-center">{heading}</h1>
      <hr />
      <div className="d-flex justify-content-center row">{children}</div>
    </>
  );
}

export default PrescriptionTable;
