import { ResponsiveContainer, Bar,BarChart, XAxis, YAxis, Tooltip } from "recharts";

const Array = [
  { year: 2013, value: 40 },
  { year: 2014, value: 20 },
  { year: 2015, value: 40 },
  { year: 2016, value: 60 },
  { year: 2017, value: 80 },
  { year: 2018, value: 100 },
  { year: 2019, value: 40 },
  { year: 2020, value: 60 },
  { year: 2021, value: 80 },
  { year: 2022, value: 20 },
  { year: 2023, value: 100 },
  { year: 2024, value: 60 },
];
  

const CalendarYear  = () => {


  return (
    <div className="flex flex-col w-full rounded-xl  justify-start items-start bg-white p-4">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">Calendar Year </h1>
    
        <ResponsiveContainer width='100%' aspect={3}>
      <BarChart data={Array} width={400} height={400}>
      <XAxis dataKey='year'/>
      <YAxis  domain={[7, 100]} // Set the Y-axis domain
            ticks={[7,7, 20, 40, 60, 80, 100]} // Custom tick values
            tickFormatter={(value) => `${value} Cr`} />
      <Tooltip/>
        <Bar 
          dataKey="value" fill="#9BDFC4" 
        />
      </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default CalendarYear ;


 































