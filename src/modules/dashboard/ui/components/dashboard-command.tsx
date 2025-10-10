import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Dispatch, SetStateAction } from "react";

interface DashboardCommandProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}

const DashboardCommand = ({ open, setOpen }: DashboardCommandProps) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Find a meeting or agent" />
        <CommandList>
            <CommandItem>
                Test
            </CommandItem>
        </CommandList>
    </CommandDialog>
  )
}

export default DashboardCommand