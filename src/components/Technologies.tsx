"use client";

import { IconInfoCircle } from "@tabler/icons-react";
import { useState } from "react";
import technologiesData from "~/data/technologiesData";
import TechnologiesDetailedView from "./TechnologiesDetailedView";
import TechnologiesShowcase from "./TechnologiesShowcase";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

const Technologies = () => {
  const [isDetailedView, setIsDetailedView] = useState(false);
  const techComponent = technologiesData.map((tech) => (
    <TechnologiesShowcase text={tech.name} key={tech.name} />
  ));

  return (
    <div className="container mx-auto mt-6 h-96">
      <h3 className="mb-5 inline-flex items-center gap-3 text-5xl font-bold">
        Technologies
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button onClick={() => setIsDetailedView(!isDetailedView)}>
                <IconInfoCircle
                  size="0.75em"
                  className="hover:text-pink-600 hover:opacity-80 hover:shadow-sm"
                />
              </button>
            </TooltipTrigger>
            <TooltipContent className="">
              <p className="text-lg text-white">See in them categorized</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h3>
      {!isDetailedView && (
        <div className="overflow-x-clip">
          <div className="flex-container flex flex-row gap-4">
            {techComponent}
            {techComponent}
            {techComponent}
            {techComponent}
            {techComponent}
          </div>
        </div>
      )}
      {isDetailedView && <TechnologiesDetailedView />}
    </div>
  );
};

export default Technologies;
