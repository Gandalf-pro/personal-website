import React from "react";

export interface TechnologiesShowcaseProps {
  text: string;
}

const TechnologiesShowcase = (props: TechnologiesShowcaseProps) => {
  return (
    <div className="rounded-3xl bg-slate-700  bg-opacity-60 px-4 py-2 text-lg font-medium drop-shadow transition-all hover:bg-opacity-40 hover:text-pink-600">
      {props.text}
    </div>
  );
};

export default TechnologiesShowcase;
