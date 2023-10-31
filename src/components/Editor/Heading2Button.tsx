import { IconH2 } from "@tabler/icons-react";
import { type Editor } from "@tiptap/react";
import { Toggle } from "../Toggle";

export interface Heading2ButtonProps {
  editor: Editor | null;
}

const Heading2Button = ({ editor }: Heading2ButtonProps) => {
  const isActive = editor?.isActive("heading", { level: 2 });
  return (
    <Toggle
      variant="outline"
      size="sm"
      pressed={isActive}
      onClick={() => {
        editor?.commands.toggleHeading({ level: 2 });
      }}
    >
      <IconH2 />
    </Toggle>
  );
};

export default Heading2Button;
