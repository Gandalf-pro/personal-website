import React, { useMemo, useState } from "react";
import DashboardBlogsListCard from "~/components/DashboardBlogsListCard";
import DashboardWrapper from "~/components/DashboardWrapper";
import { api } from "~/utils/api";

const AdminDashboard = () => {
  const blogs = api.blogs.getListOfBlogsPrivate.useQuery();
  const [searchText, setSearchText] = useState("");

  const filteredBlogs = useMemo(() => {
    const searchTextLowerCased = searchText.toLowerCase();
    return (
      blogs.data?.blogs.filter((val) => {
        return (
          val.title.toLowerCase().includes(searchTextLowerCased) ||
          val.author.name.toLowerCase().includes(searchTextLowerCased)
        );
      }) ?? []
    );
  }, [searchText, blogs.data]);

  return (
    <DashboardWrapper
      className="container mx-auto px-2 sm:px-0"
      title="Dashboard"
    >
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
        placeholder="Search by title or author..."
        className="mt-12 w-full rounded bg-black/60 px-6 py-4 focus:outline-none"
      />
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {filteredBlogs.map((blog) => (
          <DashboardBlogsListCard key={blog.id} blog={blog} />
        ))}
      </div>
    </DashboardWrapper>
  );
};

export default AdminDashboard;
