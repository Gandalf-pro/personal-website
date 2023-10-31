import { type RouterOutputs } from "~/utils/api";

export interface DashboardBlogsListCardProps {
  blog: RouterOutputs["blogs"]["getListOfBlogs"]["blogs"][number];
}

const DashboardBlogsListCard = ({ blog }: DashboardBlogsListCardProps) => {
  return <div>{blog.title}</div>;
};

export default DashboardBlogsListCard;
