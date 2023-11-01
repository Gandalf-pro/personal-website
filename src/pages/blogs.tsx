import type { NextPage } from "next";
import AppWrapper from "~/components/AppWrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import { api } from "~/utils/api";
import { useMemo, useState } from "react";
import BlogsListCard from "~/components/BlogsListCard";

const Blogs: NextPage = () => {
  const blogs = api.blogs.getListOfBlogs.useQuery();
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
    <AppWrapper>
      <motion.section
        initial={{ y: "-50%", opacity: 0.6 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="container mx-auto mt-8 px-2 sm:px-0"
      >
        <h1 className="text-5xl font-extrabold">📚 Blogs</h1>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.currentTarget.value)}
          placeholder="Search by title..."
          className="mt-7 w-full rounded bg-black/60 px-6 py-4 focus:outline-none"
        />
      </motion.section>
      <section className="container mx-auto mt-8 grid grid-cols-1 gap-3 px-2 sm:grid-cols-2 sm:px-0">
        {filteredBlogs.map((val, i) => (
          <motion.div
            key={val.slug}
            initial={{ x: `${i % 2 === 0 ? "-" : ""}50%`, opacity: 0.6 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75, delay: i / 50 }}
          >
            <BlogsListCard blog={val} />
          </motion.div>
        ))}
      </section>
    </AppWrapper>
  );
};

export default Blogs;
