import { useEffect, useState } from "react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import DashboardWrapper from "./DashboardWrapper";
import BoldButton from "./Editor/BoldButton";
import Heading2Button from "./Editor/Heading2Button";
import Heading3Button from "./Editor/Heading3Button";
import ItalicButton from "./Editor/ItalicButton";

const BlogEditor = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const id = router.query.id as string;
  const isNewBlog = id === "new" || !id;

  const blog = api.blogs.getSingleBlog.useQuery(
    {
      id,
    },
    {
      enabled: !isNewBlog,
    },
  );

  const createBlogMutation = api.blogs.createBlog.useMutation();
  const updateBlogMutation = api.blogs.updateBlog.useMutation();

  const [initialContent, setInitialContent] = useState(
    "<p>Hello World! 🌎️</p>",
  );

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose max-w-none dark:prose-invert prose-sm prose-base m-5 focus:outline-none",
      },
    },
    content: initialContent,
  });

  useEffect(() => {
    if (!blog.data?.blog) {
      return;
    }
    // editor.setOptions({ content: blog.data.blog.body });
    setInitialContent(blog.data.blog.body);
  }, [blog]);

  return (
    <DashboardWrapper className="container mx-auto flex" title="Blog Edit">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-1 flex-col gap-4 pb-12 pt-6"
      >
        <input
          placeholder="Title"
          className="w-full rounded bg-black/30 p-4 text-5xl font-extrabold focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <div className="flex flex-1 flex-col">
          <div className="flex gap-1 rounded-t bg-slate-600/30 px-1 py-1">
            <BoldButton editor={editor} />
            <ItalicButton editor={editor} />
            <Heading2Button editor={editor} />
            <Heading3Button editor={editor} />
          </div>
          <EditorContent
            editor={editor}
            className="flex-1 rounded-b bg-black/30"
          />
        </div>
        <button className="w-full rounded bg-green-600 px-4 py-2 text-3xl font-bold">
          Save
        </button>
      </form>
    </DashboardWrapper>
  );
};

export default BlogEditor;
