"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
// import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import {
  Command,
  // CommandEmpty,
  CommandGroup,
  // CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const volumes = [
  {
    value: "$1,000 - $10,000",
    label: "$1,000 - $10,000",
  },
  {
    value: "$10,001 - $50,000",
    label: "$10,001 - $50,000",
  },
];

export function Volumebox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[238px] h-12 justify-between rounded-2xl border-none text-[#B4B4B4] bg-[#FAFAFB] focus:outline placeholder:text-[#B4B4B4]"
        >
          {value
            ? volumes.find((volume) => volume.value === value)?.label
            : "Select Volume"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search volume..." /> */}
          <CommandList>
            {/* <CommandEmpty>No volume found.</CommandEmpty> */}
            <CommandGroup className=" bg-black text-white">
              {volumes.map((volume) => (
                <CommandItem
                  key={volume.value}
                  value={volume.value}
                  onSelect={(currentValue: React.SetStateAction<string>) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {/* <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === volume.value ? "opacity-100" : "opacity-0"
                    )}
                  /> */}
                  {volume.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
