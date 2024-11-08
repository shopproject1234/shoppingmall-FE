import "./ImageInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from '@fortawesome/free-solid-svg-icons'

const ImageInput = () => {

    return (
        <>
            <label className="itemUpload-itemImg-label" htmlFor="itemImg">
                <div className="uploadImg">
                    <FontAwesomeIcon className="icon" icon={faCamera} color="#595959" />
                </div>
            </label>
            <input type="file" accept="image/jpg" id="itemImg" />
        </>
    )
}

export default ImageInput;