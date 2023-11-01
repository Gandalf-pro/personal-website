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
} from "./ui/Tooltip";

export interface TechnologiesProps {
  disableHeader?: boolean;
}

const Technologies = ({ disableHeader }: TechnologiesProps) => {
  const [isDetailedView, setIsDetailedView] = useState(false);
  const techComponent = technologiesData.map((tech) => (
    <TechnologiesShowcase text={tech.name} key={tech.name} />
  ));

  return (
    <div className="container mx-auto mt-6">
      {disableHeader !== true && (
        <h3 className="mb-5 inline-flex w-full max-w-full items-center gap-3 px-2 text-3xl font-semibold sm:px-0">
          Technologies / Skills
          <TooltipProvider delayDuration={250}>
            <Tooltip>
              <TooltipTrigger
                onClick={() => setIsDetailedView(!isDetailedView)}
              >
                <IconInfoCircle
                  size="0.75em"
                  className="hover:text-pink-600 hover:opacity-80 hover:shadow-sm"
                />
              </TooltipTrigger>
              <TooltipContent className="">
                <p className="text-lg text-white">See in them categorized</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h3>
      )}
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
