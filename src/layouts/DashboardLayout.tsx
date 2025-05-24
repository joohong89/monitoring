import {Outlet} from "react-router-dom";
import PopMenu from "../components/PopMenu.tsx";
import {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import {GiBackwardTime, GiFactory} from "react-icons/gi";
import {GrVirtualMachine} from "react-icons/gr";
import {MdBrokenImage, MdCompare} from "react-icons/md";
import {FaPeopleRoof} from "react-icons/fa6";
import {TiWarning} from "react-icons/ti";
import {RiDeleteBin3Fill} from "react-icons/ri";


const DashboardLayout = () => {

    const [title, setTitle] = useState("Runtime vs Downtime")
    const location = useLocation();

    const [menuItems] = useState([
        {url: '/cycle', title: "Cycle Time Analysis",  icon: GiBackwardTime},
        {url: '/oee', title: "OEE",  icon: GrVirtualMachine},
        {url: '/throughput', title: "Throughput & Scrap",  icon: RiDeleteBin3Fill},
        {url: '/defects', title: "Defects & Issues",  icon: MdBrokenImage },
        {url: '/machine-status', title: "Machine Status",  icon: TiWarning},
        {url: '/plan-vs-actual', title: "Target vs Actual",  icon: MdCompare},
        {url: '/', title: "Runtime & Downtime", icon: GiFactory},
        {url: '/shopfloor', title: "Shopfloor",  icon: GiFactory},
        {url: '/labour', title: "Labor Utilization",  icon: FaPeopleRoof},
    ]);

    useEffect(()=> {
        const path = location.pathname;
        const menuitem= menuItems.find(item => item.url === path);

        if(menuitem) {
            setTitle(menuitem.title);
        }
    })

    const updateTitle = (newTitle: string) => {
        setTitle(newTitle);
    }

    return (
        <div className={"w-full p-10 h-dvh"}>
            <div className={"flex justify-between"}>
                <h1 className={"panel-title"}>{title}</h1>
                <PopMenu updateTitle={updateTitle} menuItems={menuItems}></PopMenu>
            </div>
            <main className="p-4">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;