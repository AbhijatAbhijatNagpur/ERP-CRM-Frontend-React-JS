const AdditionalUiSection = () => {
  return (
    <div>
      <div className="flex  items-center  p-3 ">
        <div className="flex items-center space-x-5">
          <button className="px-2 py-2 bg-white rounded-lg border text-md hover:bg-gray-100 shadow-lg">
            <img className="h-[11px] w-[80px] text-black text-6xl font-bold" src="/icon.png" alt="icon" />
          </button>
          <button className="bg-white border px-3 py-1 rounded-lg hover:bg-gray-100 text-sm shadow-lg font-semibold">
            Prev
          </button>
          <button className="bg-blue-200 px-4 py-1 rounded-lg hover:bg-blue-300 text-sm shadow-lg font-semibold">
            Next
          </button>
          <span className="text-sm font-semibold">Page:</span>
          <select className="border px-2 py-1 rounded-lg text-sm shadow-lg font-semibold">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <span className="text-sm font-semibold">of 10</span>
          <select className="border px-2 py-1 rounded-lg text-sm shadow-lg font-semibold">
            <option>15</option>
            <option>30</option>
            <option>50</option>
          </select>
        </div>

        <div className="space-x-12 flex ml-5 ">
          <button className="items-center  ">
            <img
              className="ml-2 h-8 "
              src="/material-share.png"
              alt="material-download"
            />
          </button>

          <button className="bg-pink-200 px-4 py-1 rounded-lg flex items-center text-sm hover:bg-pink-300 shadow-lg font-semibold">
            PDF
            <span >
              <img src="/material-download.png" alt="print" className="ml-2 h-6 " />
            </span>
          </button>
          <button className="bg-green-200 px-4 py-1 rounded-lg flex items-center text-sm hover:bg-green-300 shadow-lg font-semibold">
            EXCEL
            <span>
            
              <img src="/material-download.png" alt="excel"  className="ml-2 h-6 "/>
            </span>
          </button>
        </div>

        <button className="bg-green-200 px-4 py-1 rounded-lg flex ml-3 hover:bg-green-300 shadow-lg font-semibold">
          Print <span className="ml-4">🖨️</span>
        </button>
      </div>
    </div>
  );
};

export default AdditionalUiSection;
