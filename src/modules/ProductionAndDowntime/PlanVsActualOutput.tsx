import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {actualVsOutputMockData} from "../../mock/MockData.ts";



const PlanVsActualOutput = () => {
    return (
        <div className={"panel"}>
            <ResponsiveContainer aspect={2.75}>
                <LineChart
                    width={500}
                    height={300}
                    data={actualVsOutputMockData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke={"var(--color-text-primary)"}/>
                    <XAxis dataKey="name" stroke={"var(--color-text-primary)"}/>
                    <YAxis label={{fill:"var(--color-text-primary)", value:'units', angle: -90, position: 'insideLeft', offset: -10}} stroke={"var(--color-text-primary)"} />
                    <Tooltip  cursor={{ fill: "var(--color-highlight)" }} contentStyle={{backgroundColor: "var(--color-highlight)", borderColor: "var(--color-background)"}} />
                    <Legend />
                    <Line type="monotone" name={"Actual"} dataKey="actual" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone"  name={"Target"} dataKey="target" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PlanVsActualOutput;