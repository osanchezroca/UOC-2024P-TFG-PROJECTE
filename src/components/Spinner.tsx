import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Spinner (){
    return (
        <div className="flex justify-center items-center h-full">
            <div className="animate-spin">
                <FontAwesomeIcon icon={faSpinner}/>
            </div>
        </div>
    );
}