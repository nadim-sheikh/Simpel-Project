import React from 'react';
import { LineChart, Line, XAxis,YAxis, Tooltip } from 'recharts';

const AssignmentMark = () => {
    const data = [
        {
          name: 'Assignment Mark',
          marks: 4000,
          quiz: 2400,
        },
        {
          name: 'Assignment Mark',
          marks: 3000,
          quiz: 1398,
        },
        {
          name: 'Assignment Mark',
          marks: 2000,
          quiz: 9800,
        },
        {
          name: 'Assignment Mark',
          marks: 2780,
          quiz: 3908,
        },
        {
          name: 'Assignment Mark',
          marks: 1890,
          quiz: 4800,
        },
        {
          name: 'Assignment Mark',
          marks: 2390,
          quiz: 3800,
        },
        {
          name: 'Assignment Mark',
          marks: 3490,
          quiz: 4300,
        },
      ];
    return (
        <div>
            <LineChart width={500} height={400} data={data}>
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
            <Line type="monotone" dataKey="marks" stroke="#6d28d9" />
            </LineChart>
        </div>
    );
};

export default AssignmentMark;