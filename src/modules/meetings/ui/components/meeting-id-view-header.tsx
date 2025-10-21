import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon, MoreVerticalIcon, PencilIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

interface AgentIdViewHeaderProps {
    meetingId: string;
    meetingName: string;
    onEdit: () => void;
    onRemove: () => void;
}

const MeetingIdViewHeader = ({ 
    meetingId, 
    meetingName, 
    onEdit, 
    onRemove 
}: AgentIdViewHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild className="font-medium text-xl">
                        <Link href="/meetings">
                            My Meetings
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-foreground text-xl font-medium [&>svg]:size-4">
                    <ChevronRightIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild className="font-medium text-xl text-foreground">
                        <Link href={`/meetings/${meetingId}`}>
                            {meetingName}
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    <MoreVerticalIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border rounded-md p-3">
                <DropdownMenuItem onClick={onEdit}>
                    <Button variant="ghost">
                        <PencilIcon className="size-4 text-black" />
                        Edit
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onRemove} className="flex items-center gap-2">
                    <Button variant="ghost">
                        <TrashIcon className="size-4 text-black" />
                        Delete
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default MeetingIdViewHeader