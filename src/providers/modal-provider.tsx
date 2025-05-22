'use client'
import {createContext, useContext, useEffect, useState} from 'react'

interface ModalProviderProps {
    children: React.ReactNode
}
export type ModalData = {}

type ModalContextType = {
    data: ModalData
    isOpen: boolean
    setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void
    setClose: () => void
}

export const ModalContext = createContext<ModalContextType>({     
    data: {},
    isOpen: false,
    setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => {},
    setClose: () => {},
})
//createContext creates the Context having the states - data and isOpen and functions - setOpen and setClose

//ModalProvider wraps all the components in the layout.tsx of the root folder.
const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState<ModalData>({})
    const [showingModal, setShowingModal] = useState<React.ReactNode>(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const setOpen = async(
        modal: React.ReactNode,
        fetchData?: () => Promise<any>
    ) => {
        if(modal){
            if(fetchData){
                setData({...data, ...(await fetchData()) } || {})
            }
            setShowingModal(modal)
            setIsOpen(true)
        }
    }

    const setClose = () => {
        setIsOpen(false)
        setData({})
    }

    if(!isMounted) return null

    return (
        <ModalContext.Provider value={{ data, setOpen, setClose, isOpen }}>
            {children}
            {showingModal}    
        </ModalContext.Provider>
    )
    // It wraps the components so that they can use the states in the ModalContext
    // showindModal renders the Drawer actually 
}

export const useModal = () => {
    const context = useContext(ModalContext)      // consumes the context value where ModalContext is the Context
    if(!context){
        throw new Error('useModal must be use within the modal provider')
    }
    return context;
}
export default ModalProvider
