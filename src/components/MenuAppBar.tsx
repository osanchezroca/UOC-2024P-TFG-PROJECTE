'use client'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TenantContext } from "@src/contexts/TenantContext";
import Link from "next/link";
import { useContext } from "react";

export default function MenuAppBar() {
    const tenant = useContext(TenantContext);
    return (
        <div className="flex justify-start items-center px-3 gap-3">
            <div>
                <Link href={`/${tenant.code}`} className="hover:text-slate-500"><FontAwesomeIcon icon={faHome} /></Link>
            </div>
            <p className="text-xl py-2">{tenant.name}</p>
        </div>
    );
}