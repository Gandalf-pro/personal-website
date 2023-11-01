import { type PropsWithChildren } from "react";
import { type RouterOutputs } from "~/utils/api";
import AppWrapper from "./AppWrapper";
import BlogInfoTop from "./BlogInfoTop";

export interface BlogPageWrapperProps extends PropsWithChildren {
  blog: RouterOutputs["blogs"]["getSingleBlog"]["blog"];
}

const BlogPageWrapper = ({ blog, children }: BlogPageWrapperProps) => {
  return (
    <AppWrapper>
      <BlogInfoTop blog={blog} />
      <section className="container mx-auto mt-8 px-2 text-justify sm:px-0">
        <article
          className="prose prose-xl mt-6 max-w-none dark:prose-invert focus:outline-none"
          dangerouslySetInnerHTML={{
            __html: blog.body,
          }}
        ></article>
        {children}
      </section>
    </AppWrapper>
  );
};

export default BlogPageWrapper;
