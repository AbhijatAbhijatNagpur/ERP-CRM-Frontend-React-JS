import { PieChart, Pie, Cell, Tooltip, Sector } from 'recharts';

// Data for the pie chart
const data = [
  { name: 'App Design', value: 96000, color: '#007bff' },
  { name: 'Web Design', value: 36000, color: '#28a745' },
  { name: 'Game Design', value: 45000, color: '#dc3545' },
];

// Custom active shape for the pie chart
const CustomActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  // eslint-disable-next-line react/prop-types
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, percent, value } = props;
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
      <text x={ex + (cos >= 0 ? 1 : -1) * 8} y={ey} textAnchor={textAnchor} fill="#333">{`₹${value.toLocaleString()}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 8} y={ey} dy={14} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const Earnings = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">Earnings By Item</h2>

      {/* Pie Chart */}
      <div className="flex justify-center items-center">
        <PieChart width={180} height={180}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            innerRadius={40}
            fill="#8884d8"
            activeShape={CustomActiveShape} // Set custom active shape
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
        </PieChart>
      </div>

      {/* Color Dots with Design Names */}
      <div className="flex flex-col items-center mt-3 w-full max-w-xs">
        <div className="flex justify-between w-full">
          {data.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full mb-1`} style={{ backgroundColor: item.color }}></div>
              <p className="text-xs" style={{ color: item.color }}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Earnings;
