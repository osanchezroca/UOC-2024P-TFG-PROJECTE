import { TenantContext } from "@src/contexts/TenantContext"
import { useContext } from "react"
import Button from "./Button"

export default function MenuDashboardBar() {
    const tenant = useContext(TenantContext)

    const handleLogOut = () => tenant.logOut()

    return <div className="flex items-center justify-between bg-slate-500 text-white p-2">
        <h1>{tenant?.name}</h1>
        <Button onClick={handleLogOut}>Logout</Button>
    </div>
}