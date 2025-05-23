import {Link} from "react-router-dom";
import {useState} from "react";
import {CgMenuGridR} from "react-icons/cg";
import type {IconType} from "react-icons";

type UpdateTitle = (string: string) => void;
type MenuItem = {url: string, title: string, icon: IconType};

const PopMenu = ({updateTitle, menuItems} :{updateTitle: UpdateTitle, menuItems: MenuItem[]}) => {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <button
                className="text-text-primary hover:text-text-secondary hover:cursor-pointer font-bold text-2xl ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <CgMenuGridR/>
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <div className="relative my-6 mx-auto max-w-6xl w-4/5 h-4/5">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-panel outline-none focus:outline-none">
                                {/*body*/}
                                <nav className="h-full grid grid-cols-3 grid-rows-3 pop-menu">
                                    {
                                        menuItems && menuItems.map((item, index) =>
                                            <div className={"pop-menu-items"} key={index}  onClick={() => updateTitle(item.title)}>
                                                <item.icon className={"pop-menu-icons"}  />
                                                <Link to={item.url}>{item.title}</Link>
                                            </div>)
                                    }
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-85 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default PopMenu;