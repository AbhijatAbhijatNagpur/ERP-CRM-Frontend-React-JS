/* eslint-disable react/prop-types */

// SmallCard component for individual small card display
const SmallCard = ({ imgSrc, amount, percentage, total, bgColor }) => (
    <div className="relative flex flex-col justify-center items-center p-4 border rounded-lg bg-card shadow-sm h-40">
      {/* Image in the top-right corner with dynamic background color */}
      <div
        className="absolute top-2 right-2 w-10 h-10 rounded-full"
        style={{ backgroundColor: bgColor }}
      >
        <img
          src={imgSrc}
          alt="Icon"
          className="m-auto mt-2 w-6 h-6 object-cover rounded-full"
        />
      </div>
      <div className="mt-6">
        <div className="font-bold text-lg">{amount}</div>
        <div className="text-lg">{total}</div>
        <div className="text-sky-500">{percentage}% from yesterday</div>
      </div>
    </div>
  );
  
  // SalesOverview component
  const SalesOverview = ({ cardsData }) => (
    <div className="">
      <div className="p-4 border rounded-lg bg-white" style={{ height: '300px' }}>
        <h3 className="text-lg font-semibold">Sales Overview</h3>
        <h3 className="mb-6 text-gray-500">Sales Summary</h3>
        <div className="flex space-x-4">
          {cardsData.map((card, index) => (
            <SmallCard
              key={index}
              imgSrc={card.imgSrc}
              amount={card.amount}
              total={card.total}
              percentage={card.percentage}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
  
  export default SalesOverview;
  