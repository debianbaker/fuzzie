'use client'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

type Props = {
    onUpload? : any,
}
const UploadCareButton = () => {
    return (
        <div>
            <FileUploaderRegular 
            sourceList="local, url, camera, dropbox"
            classNameUploader="uc-light"
            pubkey="98fe48962477abe38d8f"
            />
        </div>
    )
}
export default UploadCareButton