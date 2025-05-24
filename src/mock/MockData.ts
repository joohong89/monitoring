export const runAndDowntimeMockData = [
    {
        name: 'Dehumidifier',
        series1: 100,
        series2: 9000,
    },
    {
        name: 'Injection Moulding',
        series1: 850,
        series2: 5000,
    },
    {
        name: 'Mould Cooling',
        series1: 980,
        series2: 9800,
    },
    {
        name: 'Manual Trimming',
        series1: 100,
        series2: 8000,
    },
    {
        name: 'Plasma Treater',
        series1: 9000,
        series2: 4800,
    },
    {
        name: 'Ultrasonic Welder',
        series1: 1000,
        series2: 3800,
    },
    {
        name: 'Assembly',
        series1: 300,
        series2: 4300,
    },
];
export const defectsByMachinesMockData = [
    {
        name: 'Material Issues',
        series1: 120,
    },
    {
        name: 'Machine Speed Error',
        series1: 110,
    },
    {
        name: 'Worn Machine',
        series1: 65,
    },
    {
        name: 'Overheating',
        series1: 33,
    },
    {
        name: 'Downstream',
        series1: 21,
    },
    {
        name: 'Measurement Error',
        series1: 12,
    },
    {
        name: 'Wrong Settings',
        series1: 3,
    },
];
export const shopfloorMachineStatus = [
    {
        name: 'Dehumidifier',
        status: 1,
        top: 35, left: 10
    },
    {
        name: 'Injection Moulding',
        status: 1,
        top: 35, left:32.5
    },
    {
        name: 'Mould Cooling',
        status: 1,
        top:38, left:58
    },
    {
        name: 'Manual Trimming',
        status: 1,
        top: 10, left:79
    },
    {
        name: 'Plasma Treater',
        status: -1,
        top:76, left: 80.5
    },
    {
        name: 'Ultrasonic Welder',
        status: 0,
        top: 76, left:58.5
    },
    {
        name: 'Inspection',
        status: 0,
        top: 74, left:39
    },
    {
        name: 'Assembly',
        status: 0,
        top: 76, left: 15
    },
];

export const actualVsOutputMockData = [
    {
        name: '08:00',
        actual: 3000,
        target: 3100,
    },
    {
        name: '09:00',
        actual: 2800,
        target: 2900,
    },
    {
        name: '10:00',
        actual: 2700,
        target: 2500,
    },
    {
        name: '11:00',
        actual: 2000,
        target: 1800,
    },
    {
        name: '12:00',
        actual: 0,
        target: 0,
    },
    {
        name: '13:00',
        actual: 1800,
        target: 600,
    },
    {
        name: '14:00',
        actual: 2300,
        target: 3000,
    },
    {
        name: '15:00',
        actual: 1800,
        target: 3000,
    },
    {
        name: '`16:00',
        actual: 2000,
        target: 2500,
    },
    {
        name: '17:00',
        actual: 1000,
        target: 2500,
    }
];