import shopfloor from "../../assets/shopfloor.png";
import {shopfloorMachineStatus} from "../../mock/MockData.ts";
import {useState} from "react";

const ShopfloorOverview = () => {
    const [machineStatus] = useState(shopfloorMachineStatus);
    const getBackgroundColor = (status: number) => {
        switch(status) {
            case 1:
                return "var(--color-safe)";
            case 0:
                return "var(--color-gray-700)";
            case -1:
                return "var(--color-error)";
            default:
                return "var(--color-gray-700)";
        }
    }
    return (
        <div className={"panel flex justify-center"}>
            <div className={"w-11/12 relative flex flex-col justify-center items-center shopfloor-wrapper"}>
                <div>
                    <img src={shopfloor} alt="Shopfloor Overview" />
                </div>

                {
                    machineStatus && machineStatus.map((item, index) =>
                        <>
                            <div key={index} className={"absolute shopfloor-label"}
                                 style={{
                                     top: `${item.top}%`,
                                     left:`${item.left}%`,
                                     background: `${getBackgroundColor(item.status)}`
                            }}>{item.name}</div>
                        </>
                    )
                }
                <ul className={"shopfloor-legend"}>
                    <li><span className={"legend success"}></span>&nbsp;Operating</li>
                    <li><span className={"legend idle"}></span> &nbsp;Idle</li>
                    <li><span className={"legend error"}></span> &nbsp;Error</li>
                </ul>
            </div>
            {/*<div className={"w-1/2"}>*/}
            {/*    <img src={shopfloor} alt="Shopfloor Overview" />*/}
            {/*</div>*/}
        </div>
    );
};

export default ShopfloorOverview;