import './UploadBtn.scss';
import uploadIcon from '../../assets/icons/Icon-upload.svg';

function UploadBtn() {
    return (
        <button type="submit" className="upload-btn">
            <img src={uploadIcon} alt="Upload Icon" className="upload-btn__icon" />
            Upload
        </button>
    )
}

export default UploadBtn;