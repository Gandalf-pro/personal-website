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
import { Switch } from "./Switch";

const BlogEditor = () => {
  const apiContext = api.useUtils();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [active, setActive] = useState(true);
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
    async onSuccess() {
      await apiContext.blogs.invalidate();
      if (isNewBlog) {
        await router.replace(`/admin/dashboard`);
      } else {
        await router.push(`/admin/dashboard`);
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
    setActive(blog.data.blog.active);
    setInitialLoadDone(true);
  }, [blog.data, initialLoadDone, editor]);

  return (
    <DashboardWrapper className="container mx-auto flex" title="Blog Edit">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const body = editor?.getHTML();
          if (!body) {
            return;
          }
          upsertBlogMutation.mutate({
            id: isNewBlog ? undefined : id,
            active,
            title,
            body,
          });
        }}
        className="flex flex-1 flex-col gap-4 pb-12 pt-6"
      >
        <div className="inline-flex w-full items-center bg-black/30 pr-4">
          <input
            placeholder="Title *"
            type="text"
            className="w-full flex-1 rounded bg-transparent p-4 text-4xl font-extrabold focus:outline-none"
            value={title}
            onChange={(event) => {
              setTitle(event.currentTarget.value);
            }}
          />
          <Switch onCheckedChange={setActive} checked={active} />
        </div>
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
        <Button
          className="bg-green-600 px-4 py-6 text-3xl font-bold text-secondary-foreground hover:bg-green-600/80"
          disabled={upsertBlogMutation.isLoading}
        >
          {isNewBlog ? "Create" : "Save"}
        </Button>
      </form>
    </DashboardWrapper>
  );
};

export default BlogEditor;
