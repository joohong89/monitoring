import CustomBarChart from "../../components/CustomBarChart.tsx";
import {defectsByMachinesMockData} from "../../mock/MockData.ts";

const DefectsByMachines = () => {
    const data = defectsByMachinesMockData;



    const seriesName =[
        {name: "Defects", color: "var(--color-error)", activeColor: "var(--color-error)"},
    ]


    return (
        <div>
            <div className={"panel"}>
                <CustomBarChart data={data} seriesName={seriesName} yAxisLabel={"Occurrences"}></CustomBarChart>
            </div>
        </div>
    );
};

export default DefectsByMachines;