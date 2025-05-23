import {Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

type ChartData =  {name: string, series1?: number, series2?: number, series3?: number, series4?: number, series5?: number };
type series = {name: string, color: string, activeColor: string};
const CustomBarChart = ({data, seriesName}: {data: Array<ChartData>, seriesName: Array<series>}) => {
    return (
        <ResponsiveContainer aspect={2.75}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 40,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"  stroke={"var(--color-text-primary)"} />
                <XAxis fontSize={12} dataKey="name" stroke={"var(--color-text-primary)"} />
                <YAxis fill={"green"} label={{fill:"var(--color-text-primary)", value: 'Time (mins)', angle: -90, position: 'left', offset: 30}} stroke={"var(--color-text-primary)"} />
                <Tooltip cursor={{ fill: "var(--color-highlight)" }} contentStyle={{backgroundColor: "var(--color-highlight)", borderColor: "var(--color-background)"}} />
                <Legend />
                {seriesName.map((item, index) =>
                    <Bar dataKey={`series${index+1}`} name={item.name} fill={item.color} activeBar={<Rectangle fill={item.activeColor} stroke="none" />} />
                )}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBarChart;