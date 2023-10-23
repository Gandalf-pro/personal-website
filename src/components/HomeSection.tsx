import type { PropsWithChildren } from "react";

export interface HomeSectionProps extends PropsWithChildren {
  title: string;
  id: string;
}

const HomeSection = ({ children, title, id }: HomeSectionProps) => {
  return (
    <section className="container mx-auto mt-24 px-2 sm:px-0" id={id}>
      <h2 className="text-5xl font-extrabold">{title}</h2>
      <div className="mb-5 mt-2  h-[2px] w-3/4 rounded-full bg-gradient-to-r from-red-600 to-pink-600 shadow-sm shadow-pink-600/25" />
      {children}
    </section>
  );
};

export default HomeSection;
