import { useEffect, useState } from 'react';

const TopProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        { name: 'App Development', popularity: 80, sales: 45, project: 45 },
        { name: 'Web Development', popularity: 70, sales: 50, project: 22 },
        { name: 'Game Development', popularity: 60, sales: 60, project: 11 },
        { name: 'Data Science', popularity: 90, sales: 65, project: 33 },
        { name: 'UI/UX Designer', popularity: 85, sales: 40, project: 60 },
      ];

      setProducts(data);
    };

    fetchProducts();
  }, []);

  const getPopularityColor = (popularity) => {
    if (popularity >= 80) return 'bg-green-500';
    if (popularity >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getShadowColor = (popularity) => {
    if (popularity >= 80) return 'bg-green-200';
    if (popularity >= 50) return 'bg-yellow-200';
    return 'bg-red-200';
  };

  return (
    <div className="bg-white p-4 max-w-4xl mx-auto rounded-lg ">
      <h1 className="text-xl font-semibold mb-4">Top Products</h1>

      <div className="grid grid-cols-5 gap-8 font-semibold  p-2 rounded-t-md">
        <div>#</div>
        <div>Name</div>
        <div>Popularity</div>
        <div>Sales</div>
        <div>Project</div>
      </div>

      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="grid grid-cols-5 p-2  ">
            <div>0{index +1}</div>
            <div>{product.name}</div>
            <div className="flex items-center">
              <div className={`w-full ${getShadowColor (product.popularity)} rounded h-2 relative`}>
                <div
                  className={`h-full ${getPopularityColor(product.popularity)} rounded`}
                  style={{ width: `${product.popularity}%` }}
                ></div>
                <div
                  className={`h-full ${getPopularityColor(product.popularity)} rounded absolute top-0 left-0`}
                  style={{ width: `${100 - product.popularity}%` }}
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-center text-gray-700">
              <span className={`px-2 py-1 border border-gray-300 rounded ${product.sales > 50 ? 'text-green-500' : 'text-red-500'}`}>
                {product.sales}%
              </span>
              
            </div>
            <div className="flex items-center justify-center text-gray-700">
            <span >
                {product.project}+
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="p-4 text-center">Loading products...</p>
      )}
    </div>
  );
};

export default TopProducts;
