'use client'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
    onUpload: (image: string) => any
}
const UploadCareButton = ({onUpload}: Props) => {
    const router = useRouter()
    const handleUpload = async(e : any) => {
        const file = await onUpload(e.cdnUrl);
        if(file) router.refresh()
    }
    return (
        <div>
            <FileUploaderRegular 
            sourceList="local, url, camera, dropbox"
            classNameUploader="uc-light"
            pubkey="98fe48962477abe38d8f"
            onFileUploadSuccess={handleUpload}
            />
        </div>
    )
}
export default UploadCareButton