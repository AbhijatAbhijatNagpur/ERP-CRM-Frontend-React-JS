/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, Tooltip, Sector, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

// Updated Data for the pie chart
const data = [
  { name: 'Pellet Machine', value: 60000, color: '#FF6384' },
  { name: 'Drone for Agri', value: 45000, color: '#36A2EB' },
  { name: 'Safe Water', value: 30000, color: '#FFCE56' },
  { name: 'STP & ETP', value: 25000, color: '#4BC0C0' },
];

// Custom active shape for the pie chart
const CustomActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 6) * cos;
  const sy = cy + (outerRadius + 6) * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 15;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={outerRadius + 4}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} />
      <text x={ex + (cos >= 0 ? 1 : -1) * 8} y={ey} textAnchor={textAnchor} fill="#333">
        {`₹${value.toLocaleString()}`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 8} y={ey} dy={14} textAnchor={textAnchor} fill="#999">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const Earnings = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">Earnings By Item</h2>

      {/* Pie Chart */}
      <div className="flex justify-center items-center">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={70}
              fill="#8884d8"
              activeIndex={activeIndex}
              activeShape={CustomActiveShape}
              onMouseEnter={onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Color Dots with Design Names */}
      <div className="flex flex-wrap justify-center mt-3 w-full max-w-md">
        {data.map((item) => (
          <div key={item.name} className="flex items-center m-2 w-1/2 sm:w-1/4">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: item.color }}
            ></div>
            <p className="text-xs truncate" style={{ color: item.color }}>
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Earnings;
