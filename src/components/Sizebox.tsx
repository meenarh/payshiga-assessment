"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
//   CommandEmpty,
  CommandGroup,
//   CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const sizes = [
  {
    value: "1-100",
    label: "1-100",
  },
  {
    value: "101-200",
    label: "101-200",
  },
]

export function Sizebox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

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
            ? sizes.find((size) => size.value === value)?.label
            : "Select a Size"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          {/* <CommandInput placeholder="Search size..." /> */}
          <CommandList>
            {/* <CommandEmpty>No size found.</CommandEmpty> */}
            <CommandGroup className=" bg-black text-white">
              {sizes.map((size) => (
                <CommandItem
                  key={size.value}
                  value={size.value}
                  onSelect={(currentValue: React.SetStateAction<string>) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === size.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {size.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
