import { IconItalic } from "@tabler/icons-react";
import { type Editor } from "@tiptap/react";
import { Toggle } from "../Toggle";

export interface ItalicButtonProps {
  editor: Editor | null;
}

const ItalicButton = ({ editor }: ItalicButtonProps) => {
  const isActive = editor?.isActive("italic");
  return (
    <Toggle
      variant="outline"
      size="sm"
      pressed={isActive}
      onClick={() => {
        editor?.commands.toggleItalic();
      }}
    >
      <IconItalic />
    </Toggle>
  );
};

export default ItalicButton;
