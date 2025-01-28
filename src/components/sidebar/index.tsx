'use client'
import Link from 'next/link';
import { usePathname } from "next/navigation"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { menuOptions } from '@/lib/constants';
import clsx from 'clsx';
  
type props = {}

const MenuOptions = () => {
    const pathName = usePathname(); 
    return <div> 
        <nav className="dark:bg-black h-screen overflow-scroll justify-between flex
        items-center flex-col gap-10 py-6 px-2">
            <div className="flex items-center justify-center flex-col gap-8">
                <Link
                    className="flex font-bold flex-row"
                    href ='/'
                >
                    fuzzie
                </Link>
                <TooltipProvider>
                    {menuOptions.map((menuItem) => (
                        <ul key={menuItem.name}> 
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    <li>
                                        <Link
                                            href = {menuItem.href}
                                            className={clsx(
                                                `group h-8 w-8 flex items-center justify-center 
                                                scale-[1.5] rounded-lg p-[3px] cursor-pointer`,
                                                {
                                                    'dark:bg-[#006b24] bg-[#fff6e0]':
                                                    pathName === menuItem.href,
                                                }
                                            )}
                                        >
                                            <menuItem.Component
                                                selected={pathName === menuItem.href}
                                            />
                                        </Link>
                                    </li>
                                </TooltipTrigger>
                            </Tooltip>
                        </ul>
                    ))}
                </TooltipProvider>
            </div>
        </nav>
    </div>
}
export default MenuOptions