import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { useModal } from "@/providers/modal-provider"
import { Button } from "../ui/button"

type Props = {
    title: string,
    subheading: string, 
    children: React.ReactNode
    defaultOpen?: boolean
}

const CustomModal = ({ children, subheading, title, defaultOpen}: Props) => {
    const { isOpen, setClose } = useModal()      
    const handleClose = () => setClose()

    return (
        // The actual component is the Drawer that has props to handle open and close
        <Drawer                
            open={isOpen}
            onClose={handleClose}
        >
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="text-center">{title}</DrawerTitle>
                    <DrawerDescription className='text-center flex flex-col items-center gap-4 h-96
                    overflow-scroll'>
                        {subheading}
                        {children}
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="flex flex-col gap-4 b-background border-t-[1px]
                border-t-muted">
                    <DrawerClose>
                        <Button
                            variant="ghost"
                            className="w-full"
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CustomModal  