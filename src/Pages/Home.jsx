const Home = () => {
  const products = [0, 1, 3, 4, 6, 7];
  return (
    <div className="Home-page">
      <h2 className="text-2xl font-semibold my-5">All Products</h2>
      <hr className="mb-8" />
      <div className="product-grid grid grid-cols-3 gap-8">
        {products?.map((p, index) => (
          <div className="card w-full bg-base-100 shadow-xl" key={index}>
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Product name</h2>
              <p className="text-left my-3">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className="flex justify-between font-semibold">
                <span>Price: $20</span>
                <span>Quentity: 20</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
