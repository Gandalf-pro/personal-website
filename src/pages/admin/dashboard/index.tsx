import React from "react";
import DashboardBlogsListCard from "~/components/DashboardBlogsListCard";
import DashboardWrapper from "~/components/DashboardWrapper";
import { api } from "~/utils/api";

const AdminDashboard = () => {
  const blogs = api.blogs.getListOfBlogs.useQuery();

  return (
    <DashboardWrapper className="container mx-auto" title="Dashboard">
      <div className="mt-12 grid sm:grid-cols-2 grid-cols-1 gap-3">
        {blogs.data?.blogs.map((blog) => (
          <DashboardBlogsListCard key={blog.id} blog={blog} />
        ))}
      </div>
    </DashboardWrapper>
  );
};

export default AdminDashboard;
