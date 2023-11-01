import { IconBold } from "@tabler/icons-react";
import { type Editor } from "@tiptap/react";
import { Toggle } from "../ui/Toggle";

export interface BoldButtonProps {
  editor: Editor | null;
}

const BoldButton = ({ editor }: BoldButtonProps) => {
  const isActive = editor?.isActive("bold");
  return (
    <Toggle
      variant="outline"
      size="sm"
      pressed={isActive}
      onClick={() => {
        editor?.commands.toggleBold();
      }}
    >
      <IconBold />
    </Toggle>
  );
};

export default BoldButton;
