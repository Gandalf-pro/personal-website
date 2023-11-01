import { useMemo, type Dispatch, type SetStateAction, useState } from "react";
import { api } from "~/utils/api";

import { cn } from "~/utils/cn";
import { Button } from "~/components/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/Popover";
import { IconCheck, IconChevronsDown, IconX } from "@tabler/icons-react";
import { ScrollArea } from "./ui/ScrollArea";

export interface SkillSelectorProps {
  selectedIds: {
    value: string;
    label: string;
  }[];
  setSelectedIds: Dispatch<
    SetStateAction<
      {
        value: string;
        label: string;
      }[]
    >
  >;
}

const SkillSelector = ({ selectedIds, setSelectedIds }: SkillSelectorProps) => {
  const [open, setOpen] = useState(false);
  const skillsQuery = api.skills.getSKills.useQuery();

  const skillsValues = useMemo(() => {
    return skillsQuery.data?.skills.map((val) => ({
      value: val.id,
      label: val.name,
    }));
  }, [skillsQuery.data]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-fit w-full justify-between bg-black/30 hover:shadow-md"
        >
          {selectedIds.length === 0 ? (
            "Select skills..."
          ) : (
            <div className="flex flex-wrap gap-1">
              {selectedIds.map((val) => (
                <div
                  key={val.value}
                  className="rounded-3xl bg-white/10 px-2 text-sm"
                >
                  {val.label}
                </div>
              ))}
            </div>
          )}
          <IconChevronsDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command>
          <CommandInput placeholder="Search skills..." />
          <CommandEmpty>No skills found.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-[360px]">
              {skillsValues?.map((val) => {
                const isSelected = selectedIds.includes(val);

                return (
                  <CommandItem
                    key={val.value}
                    value={val.value}
                    onSelect={() => {
                      if (isSelected) {
                        setSelectedIds(
                          selectedIds.filter((tmp) => tmp.value !== val.value),
                        );
                      } else {
                        setSelectedIds([val, ...selectedIds]);
                      }
                      // setOpen(false);
                    }}
                  >
                    <IconCheck
                      className={cn(
                        "mr-2 h-4 w-4",
                        isSelected ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {val.label}
                  </CommandItem>
                );
              })}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SkillSelector;
