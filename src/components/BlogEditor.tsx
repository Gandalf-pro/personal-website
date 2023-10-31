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
import { Button } from "./Button";

const BlogEditor = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [initialLoadDone, setInitialLoadDone] = useState(false);

  const id = router.query.id as string;
  const isNewBlog = id === "new" || !id;

  const blog = api.blogs.getSingleBlog.useQuery(
    {
      id,
    },
    {
      enabled: !isNewBlog,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: true,
    },
  );

  const upsertBlogMutation = api.blogs.upsertBlog.useMutation({
    onSuccess(data) {
      if (isNewBlog) {
        void router.replace(`/admin/dashboard`);
      } else {
        void router.push(`/admin/dashboard`);
      }
    },
  });

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
    content: "<p>Hello World! 🌎️</p>",
  });

  useEffect(() => {
    if (!blog.data?.blog || initialLoadDone || !editor) {
      return;
    }
    editor.commands.setContent(blog.data.blog.body);
    setTitle(blog.data.blog.title);
    setInitialLoadDone(true);
  }, [blog.data, initialLoadDone, editor]);

  return (
    <DashboardWrapper className="container mx-auto flex" title="Blog Edit">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const body = editor?.getText();
          if (!body) {
            return;
          }
          upsertBlogMutation.mutate({
            title,
            body,
            id: isNewBlog ? undefined : id,
          });
        }}
        className="flex flex-1 flex-col gap-4 pb-12 pt-6"
      >
        <input
          placeholder="Title *"
          type="text"
          className="w-full rounded bg-black/30 p-4 text-4xl font-extrabold focus:outline-none"
          value={title}
          onChange={(event) => {
            setTitle(event.currentTarget.value);
          }}
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
        <Button className="bg-green-600 px-4 py-2 text-3xl font-bold text-secondary-foreground hover:bg-green-600/80">
          {isNewBlog ? "Create" : "Save"}
        </Button>
      </form>
    </DashboardWrapper>
  );
};

export default BlogEditor;
