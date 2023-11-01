import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import BlogPageWrapper from "~/components/BlogPageWrapper";
import { api } from "~/utils/api";
import { helpers } from "~/utils/createServerSideHelpers";

const BlogSingle = ({
  slug,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const blogQuery = api.blogs.getSingleBlog.useQuery({
    slug,
  });

  if (blogQuery.status !== "success") {
    // won't happen since the query has been prefetched
    return <>Loading...</>;
  }

  const blog = blogQuery.data.blog;

  return <BlogPageWrapper blog={blog}></BlogPageWrapper>;
};

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ slug: string }>,
) {
  const slug = context.params?.slug;
  if (!slug) {
    throw new Error("Need slug");
  }
  /*
   * Prefetching the `post.byId` query.
   * `prefetch` does not return the result and never throws - if you need that behavior, use `fetch` instead.
   */
  await helpers.blogs.getSingleBlog.prefetch({
    slug,
  });

  // Make sure to return { props: { trpcState: helpers.dehydrate() } }
  return {
    props: {
      trpcState: helpers.dehydrate(),
      slug,
    },
  };
}
export default BlogSingle;
