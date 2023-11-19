import { ReactNode } from "react";

type Props = {
  mode: "hint" | "warning";
  children: ReactNode;
};

const InfoBox = ({ mode, children }: Props) => {
  if (mode === "hint") {
    return (
      <aside className="rounded-md border-2 border-accent-light-50 p-6 ">
        <p className="text-center text-slate-50">{children}</p>
      </aside>
    );
  }
  return (
    <aside className="rounded-md border-4 border-red-900 p-6 ">
      <p className="text-center text-red-900">{children}</p>
    </aside>
  );
};

export default InfoBox;
