import { IconH3 } from "@tabler/icons-react";
import { type Editor } from "@tiptap/react";
import { Toggle } from "../ui/Toggle";

export interface Heading3ButtonProps {
  editor: Editor | null;
}

const Heading3Button = ({ editor }: Heading3ButtonProps) => {
  const isActive = editor?.isActive("heading", { level: 3 });
  return (
    <Toggle
      variant="outline"
      size="sm"
      pressed={isActive}
      onClick={() => {
        editor?.commands.toggleHeading({ level: 3 });
      }}
    >
      <IconH3 />
    </Toggle>
  );
};

export default Heading3Button;
