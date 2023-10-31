import dynamic from "next/dynamic";

const BlogEditor = dynamic(() => import("~/components/BlogEditor"), {
  ssr: false,
});

const BlogEditOrCreatePage = () => {
  return <BlogEditor />;
};

export default BlogEditOrCreatePage;
