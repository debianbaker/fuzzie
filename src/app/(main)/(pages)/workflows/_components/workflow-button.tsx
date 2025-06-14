'use client'

import Workflowform from "@/components/forms/workflow-form"
import CustomModal from "@/components/global/custom-modal"
import { Button } from "@/components/ui/button"
import { useModal } from "@/providers/modal-provider"
import { Plus } from "lucide-react"

type Props = {}

const WorkflowButton = (props: Props) => {
    
    const {setOpen, setClose} = useModal()
    const handleClick = () => {
        setOpen(
            <CustomModal
                title="Create a Workflow Automation"
                subheading="Workflows are a powerful tool that help you automate tasks."
            >
                 <Workflowform/>
            </CustomModal>
        )
    }
    return (
        <Button 
            className={'icon'} 
            onClick={handleClick}>
            <Plus/>
        </Button>
    )
}
export default WorkflowButton