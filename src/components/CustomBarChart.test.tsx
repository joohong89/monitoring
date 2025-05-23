import { render } from '@testing-library/react'
import CustomBarChart from "./CustomBarChart.tsx";
import {runAndDowntimeMockData} from "../mock/MockData.ts";

test('if chart is rendered', () => {
    const mockData = runAndDowntimeMockData;
    const seriesName =[
        {name: "Downtime", color: "var(--color-error)", activeColor: "var(--color-error)"},
        {name: "Runtime", color: "var(--color-safe)", activeColor: "var(--color-safe)"},
    ]
    const {container} = render(
        <div  style={{ width: 500, height: 300, minWidth: 500, minHeight: 300 }}>
            <CustomBarChart data={mockData} seriesName={seriesName}/>
        </div>

    );
    const wrapper  = container.querySelector('.recharts-wrapper')
    expect(wrapper).toBeInTheDocument()
})