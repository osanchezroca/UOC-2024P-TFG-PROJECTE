'use client'
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MediaUpload() {

    return (
        <div className="flex items-baseline space-x-3 bg-slate-300 rounded-lg border-dashed border-4 border-slate-400 p-3 cursor-pointer">
            <FontAwesomeIcon icon={faFile} size="lg" />
            <p>FILE FROP ZONE</p>
        </div>
    );
}