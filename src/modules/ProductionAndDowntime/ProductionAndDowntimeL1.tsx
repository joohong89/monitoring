import {Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const ProductionAndDowntimeL1 = () => {


    const data = [
        {
            name: 'Dehumidifier',
            uv: 9000,
            pv: 100,
        },
        {
            name: 'Injection Moulding',
            uv: 8500,
            pv: 300,
        },
        {
            name: 'Mould Cooling',
            uv: 9800,
            pv: 2000,
        },
        {
            name: 'Manual Trimming',
            uv: 8000,
            pv: 1000,
        },
        {
            name: 'Plasma Treater',
            uv: 2000,
            pv: 4800,
        },
        {
            name: 'Ultrasonic Welder',
            uv: 1000,
            pv: 3800,
        },
        {
            name: 'Assembly',
            uv: 300,
            pv: 4300,
        },
    ];


    return (
        <div className={"panel"}>
            <ResponsiveContainer  aspect={2.75}>

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
                    <Bar dataKey="pv" name={"Downtime"} fill="var(--color-error)" activeBar={<Rectangle fill="var(--color-error)" stroke="none" />} />
                    <Bar dataKey="uv" name={"Runtime"} fill="var(--color-safe)" activeBar={<Rectangle fill="var(--color-safe)" stroke="none" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ProductionAndDowntimeL1;