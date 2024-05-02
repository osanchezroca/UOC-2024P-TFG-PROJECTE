import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function MenuAppBar() {
    return (
        <div className="flex justify-between items-center bg-slate-700 px-3">
            <p className="text-slate-200 text-2xl py-3">TFG</p>
            <div>
            <Link href={'/home'} className="text-slate-300 hover:text-slate-500"><FontAwesomeIcon icon={faHome}/></Link>
            </div>
        </div>
    );
}