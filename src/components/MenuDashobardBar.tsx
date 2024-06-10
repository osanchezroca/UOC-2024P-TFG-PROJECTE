import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TenantContext } from "@src/contexts/TenantContext"
import { useContext } from "react"
import Button from "./Button"

export default function MenuDashboardBar() {
    const tenant = useContext(TenantContext)

    const handleLogOut = () => tenant.logOut()

    return <div className="flex items-center justify-between bg-blue-900 text-white p-2 border-b shadow">
        <div className="flex items-center gap-2">
            <h1>{tenant?.name}</h1>
            <Button href={`/${tenant.code}/dashboard`} size="sm" color='blue'>Revisió</Button>
            <Button href={`/${tenant.code}/dashboard/settings`} size="sm" color='blue'>Configuració</Button>
        </div>
        <Button onClick={handleLogOut} size="sm" color='red' className="flex items-center gap-2">
            <FontAwesomeIcon icon={faTimes} /><p>Tancar</p>
        </Button>
    </div>
}