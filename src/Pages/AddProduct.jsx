import { useState } from "react";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const [product, setProduct] = useState({});

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Product added sucessfuly 😍");
          e.target.reset();
        }
      });
    // console.log(product);
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newProduct = { ...product };
    newProduct[name] = value;
    setProduct(newProduct);
    // console.log(product);
  };
  return (
    <div className="AddProduct-page">
      <h2 className="text-2xl font-semibold my-5">Add Product</h2>
      <hr className="mb-8" />

      <div className="product-add-form">
        <form className="grid gap-3" onSubmit={handleSubmit}>
          <div className="single-input grid-rows-1">
            <input
              onChange={handleOnChange}
              type="text"
              name="name"
              placeholder="Product name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="single-input grid-rows-1">
            <input
              onChange={handleOnChange}
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="single-input grid-rows-1">
            <input
              onChange={handleOnChange}
              type="text"
              name="quentity"
              placeholder="Quentity"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="single-input grid-rows-1">
            <input
              onChange={handleOnChange}
              type="url"
              name="image"
              placeholder="Image URL"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="single-input grid-rows-1">
            <input
              type="submit"
              value={"Add Product"}
              className="border py-3 px-10 rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
