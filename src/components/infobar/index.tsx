import { Search, Headphones, Book } from "lucide-react"
import { Input } from "../ui/input"
import { TooltipProvider, TooltipTrigger, TooltipContent, Tooltip } from "../ui/tooltip"
import { UserButton } from "@clerk/nextjs"

const InfoBar = () => {
    return <div>
        <div className="flex flex-row justify-end gap-6 items-center
        px-4 py-4 w-full dark:bg-black">
            <span className="flex items-center bg-muted px-4 rounded-full">
                <Search/>
                <Input 
                placeholder="Quick Search"
                className="border-none bg-transparent focus-visible:ring-0"
                />
            </span>
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                        <Headphones/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Contact Support</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                        <Book/>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Guide</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <UserButton/>

        </div>
    </div>
}
export default InfoBar