import technologiesData from "~/data/technologiesData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { useMemo } from "react";
import TechnologiesShowcase from "./TechnologiesShowcase";

export interface TechnologiesDetailedViewProps {
  className?: string;
}

const TechnologiesDetailedView = ({
  className,
}: TechnologiesDetailedViewProps) => {
  const data = useMemo(() => {
    return {
      backend: technologiesData
        .filter((val) => val.category.includes("backend"))
        .map((tech) => (
          <TechnologiesShowcase text={tech.name} key={tech.name} />
        )),
      devops: technologiesData
        .filter((val) => val.category.includes("devops"))
        .map((tech) => (
          <TechnologiesShowcase text={tech.name} key={tech.name} />
        )),
      frontend: technologiesData
        .filter((val) => val.category.includes("frontend"))
        .map((tech) => (
          <TechnologiesShowcase text={tech.name} key={tech.name} />
        )),
      mobile: technologiesData
        .filter((val) => val.category.includes("mobile"))
        .map((tech) => (
          <TechnologiesShowcase text={tech.name} key={tech.name} />
        )),
      misc: technologiesData
        .filter((val) => val.category.includes("misc"))
        .map((tech) => (
          <TechnologiesShowcase text={tech.name} key={tech.name} />
        )),
    };
  }, []);

  return (
    <div className={className}>
      <Tabs defaultValue="backend" className="w-full">
        <TabsList className="mb-3 flex h-auto w-full flex-wrap sm:h-12 sm:flex-nowrap">
          <TabsTrigger
            className="w-auto text-xl font-semibold sm:w-full"
            value="backend"
          >
            Backend
          </TabsTrigger>
          <TabsTrigger
            className="w-auto text-xl font-semibold sm:w-full"
            value="devops"
          >
            Devops
          </TabsTrigger>
          <TabsTrigger
            className="w-auto text-xl font-semibold sm:w-full"
            value="frontend"
          >
            Frontend
          </TabsTrigger>
          <TabsTrigger
            className="w-auto text-xl font-semibold sm:w-full"
            value="mobile"
          >
            Mobile
          </TabsTrigger>
          <TabsTrigger
            className="w-auto text-xl font-semibold sm:w-full"
            value="misc"
          >
            Misc
          </TabsTrigger>
        </TabsList>
        <TabsContent className="flex flex-row flex-wrap gap-4" value="backend">
          {data.backend}
        </TabsContent>
        <TabsContent className="flex flex-row flex-wrap gap-4" value="devops">
          {data.devops}
        </TabsContent>
        <TabsContent className="flex flex-row flex-wrap gap-4" value="frontend">
          {data.frontend}
        </TabsContent>
        <TabsContent className="flex flex-row flex-wrap gap-4" value="mobile">
          {data.mobile}
        </TabsContent>
        <TabsContent className="flex flex-row flex-wrap gap-4" value="misc">
          {data.misc}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TechnologiesDetailedView;
