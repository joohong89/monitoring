import CustomBarChart from "../../components/CustomBarChart.tsx";
import {runAndDowntimeMockData} from "../../mock/MockData.ts";

const ProductionAndDowntimeL1 = () => {


    const data = runAndDowntimeMockData;

    const seriesName =[
        {name: "Downtime", color: "var(--color-error)", activeColor: "var(--color-error)"},
        {name: "Runtime", color: "var(--color-safe)", activeColor: "var(--color-safe)"},
    ]


    return (
        <div className={"panel"}>
            <CustomBarChart data={data} seriesName={seriesName}></CustomBarChart>
        </div>
    );
};

export default ProductionAndDowntimeL1;