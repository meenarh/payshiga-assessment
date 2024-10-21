"use client";

import * as React from "react";
import { ChevronsUpDown, Globe } from "lucide-react";
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
import nigeria from "@/assets/NavBar/nigeria.png";

interface LocationboxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const countries = [
  {
    value: "Nigeria",
    label: (
      <div className="flex gap-2">
        <img src={nigeria} width={20} height={20} alt="" />
        Nigeria
      </div>
    ),
  },
  {
    value: "other countries",
    label: (
      <div className="flex gap-2">
        <Globe /> Other Countries
      </div>
    ),
  },
];

export const Locationbox: React.FC<LocationboxProps> = ({ onChange }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[500px] h-12 font-serif justify-between rounded-2xl border-none text-[#B4B4B4] bg-[#FAFAFB] focus:outline placeholder:text-[#B4B4B4]"
        >
          {value
            ? countries.find((country) => country.value === value)?.label
            : "Select Location"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[430px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search country..." /> */}
          <CommandList>
            {/* <CommandEmpty>No country found.</CommandEmpty> */}
            <CommandGroup className=" bg-black text-white">
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onchange={onChange}
                  onSelect={(currentValue: React.SetStateAction<string>) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {/* <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === country.value ? "opacity-100" : "opacity-0"
                    )}
                  /> */}
                  {country.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
