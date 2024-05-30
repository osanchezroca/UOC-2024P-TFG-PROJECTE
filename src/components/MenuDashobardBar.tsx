import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TenantContext } from "@src/contexts/TenantContext"
import { useContext } from "react"
import Button from "./Button"

export default function MenuDashboardBar() {
    const tenant = useContext(TenantContext)

    const handleLogOut = () => tenant.logOut()

    return <div className="flex items-center justify-between bg-slate-500 text-white p-2">
        <div className="flex items-center gap-2">
            <h1>{tenant?.name}</h1>
            <Button href={`/${tenant.code}/dashboard`} size="sm" className="bg-slate-400 border border-slate-600">Revisió</Button>
            <Button href={`/${tenant.code}/dashboard/settings`} size="sm" className="bg-slate-400 border border-slate-600">Configuració</Button>
        </div>
        <Button onClick={handleLogOut} size="sm" className="bg-slate-400 border border-slate-600 flex items-center gap-2">
            <FontAwesomeIcon icon={faTimes} /><p>Tancar</p>
        </Button>
    </div>
}