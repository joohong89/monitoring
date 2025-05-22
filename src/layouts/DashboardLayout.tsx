import {Outlet} from "react-router-dom";
import PopMenu from "../components/PopMenu.tsx";


const DashboardLayout = () => {
    return (
        <div className={"w-full p-10 h-dvh"}>
            <div className={"flex justify-end"}>
                <PopMenu></PopMenu>
            </div>
            <main className="p-4">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;