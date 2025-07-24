import { Outlet } from "react-router-dom"
import { MainHeader } from "../components/MainHeader"

export const RouterLayout = () => {
    return <>
        <MainHeader />
        <Outlet />
    </>
}