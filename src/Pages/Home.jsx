import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const storedProducts = useLoaderData();
  const [products, setProducts] = useState(storedProducts);

  // handle delete operation
  const handleDelete = (id) => {
    const agree = confirm(`Are you sure you want to delete this product`);
    if (agree) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Product delete successfuly");
            const remainingProducts = products.filter((p) => p._id !== id);
            setProducts(remainingProducts);
          }
        });
    }
    console.log(agree);
  };

  return (
    <div className="Home-page pb-10">
      <h2 className="text-2xl font-semibold my-5 ">
        All Products{" "}
        <span className="float-right">Total Product: {products?.length}</span>
      </h2>
      <hr className="mb-8" />
      <div className="product-grid grid grid-cols-3 gap-8">
        {products?.map((p, index) => (
          <div className="card w-full bg-base-100 shadow-xl" key={index}>
            <figure>
              <img src={p.image} alt="Shoes" className="w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.name}</h2>
              <p className="text-left my-3">
                If a dog chews shoes whose shoes does he choose?
              </p>
              <div className="flex justify-between font-semibold">
                <span>Price: ${p.price}</span>
                <span>Quentity: {p.quentity}</span>
              </div>
              <div className="mt-4 flex justify-between font-semibold">
                <button
                  className="btn btn-outline btn-error"
                  onClick={() => handleDelete(p._id)}
                >
                  Delete
                </button>
                <Link
                  className="btn btn-outline btn-accent"
                  to={`/update-product/${p._id}`}
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
