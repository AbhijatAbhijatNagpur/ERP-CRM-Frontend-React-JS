import { ResponsiveContainer, Bar,BarChart, XAxis, YAxis, Tooltip } from "recharts";

const Array = [
    { month: "JAN", value: 40 },
    { month: "FEB", value: 20 },
    { month: "MAR", value: 40 },
    { month: "APR", value: 60 },
    { month: "MAY", value: 80 },
    { month: "JUN", value: 100 },
    { month: "JUL", value: 40 },
    { month: "AUG", value: 60 },
    { month: "SEP", value: 80 },
    { month: "OCT", value: 20 },
    { month: "NOV", value: 100 },
    { month: "DEC", value: 60 },
  ];
  

const FinancialYear = () => {


  return (
    <div className="flex flex-col w-full rounded-xl  justify-start items-start bg-white p-4">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">Financial Year</h1>
    
        <ResponsiveContainer width='100%' aspect={3}>
      <BarChart data={Array} width={400} height={400}>
      <XAxis dataKey='month'/>
      <YAxis  domain={[7, 100]} // Set the Y-axis domain
            ticks={[7,7, 20, 40, 60, 80, 100]} // Custom tick values
            tickFormatter={(value) => `${value} Cr`} />
      <Tooltip/>
        <Bar 
          dataKey="value" fill="#62B2FD" 
        />
      </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default FinancialYear


 































