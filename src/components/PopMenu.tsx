import {Link} from "react-router-dom";
import {useState} from "react";
import {CgMenuGridR} from "react-icons/cg";
import {GiBackwardTime, GiFactory} from "react-icons/gi";
import {GrVirtualMachine} from "react-icons/gr";
import {MdCompare} from "react-icons/md";
import {FaBoxesPacking, FaPeopleRoof} from "react-icons/fa6";
import {TiWarning} from "react-icons/ti";
import {RiDeleteBin3Fill} from "react-icons/ri";
import {FaThermometer} from "react-icons/fa";

const PopMenu = () => {
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
                                    <div className={"pop-menu-items"}>
                                        <GiFactory className={"pop-menu-icons"}  />
                                        <Link to="/">Production & Downtime</Link>
                                    </div>
                                    <div className={"pop-menu-items"}>
                                        <GiBackwardTime className={"pop-menu-icons"} />
                                        <Link to="/">Cycle Time Analysis</Link>
                                    </div>
                                    <div className={"pop-menu-items"}>
                                        <GrVirtualMachine className={"pop-menu-icons"} />
                                        <Link to="/">OEE</Link>
                                    </div>
                                    <div className={"pop-menu-items"}>
                                        <MdCompare className={"pop-menu-icons"} />
                                        <Link to="/">Target vs Actual</Link>
                                    </div>
                                    <div className={"pop-menu-items"}>
                                        <FaBoxesPacking className={"pop-menu-icons"} />
                                        <Link to="/">Efficiency & Reject Rate</Link>
                                    </div>
                                    <div className={"pop-menu-items"}>
                                        <TiWarning className={"pop-menu-icons"} />
                                        <Link to="/">Machine Status</Link>
                                    </div>
                                    <div className={"pop-menu-items"}>
                                        <RiDeleteBin3Fill className={"pop-menu-icons"} />
                                        <Link to="/">Throughput & Scrap</Link>
                                    </div>
                                    <div className={"pop-menu-items"}>
                                        <FaThermometer className={"pop-menu-icons"} />
                                        <Link to="/">Environmental Condition</Link>
                                    </div>
                                    <div className={"pop-menu-items"}>
                                        <FaPeopleRoof className={"pop-menu-icons"} />
                                        <Link to="/">Labor Utilization</Link>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default PopMenu;