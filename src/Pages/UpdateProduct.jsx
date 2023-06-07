import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const oldProduct = useLoaderData();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(oldProduct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   console.log(oldProduct);

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged & (data.matchedCount === 1)) {
          toast.success("Product updated successfuly");
        }
        console.log(data);
      });
    // console.log(product);
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newProduct = { ...product };
    newProduct[name] = value;
    setProduct(newProduct);
    console.log(product);
  };

  return (
    <div className="UpdateProduct-page">
      <h2 className="text-2xl font-semibold my-5">Update Product</h2>
      <hr className="mb-8" />

      <div className="product-add-form">
        <form className="grid gap-3" onSubmit={handleSubmit}>
          <div className="single-input ">
            <label htmlFor="">Title: </label>
            <input
              defaultValue={oldProduct.name}
              onChange={handleOnChange}
              type="text"
              name="name"
              placeholder="Product name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="single-input ">
            <label htmlFor="">Price: </label>
            <input
              defaultValue={oldProduct.price}
              onChange={handleOnChange}
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="single-input ">
            <label htmlFor="">Quentity: </label>
            <input
              defaultValue={oldProduct.quentity}
              onChange={handleOnChange}
              type="text"
              name="quentity"
              placeholder="Quentity"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="single-input ">
            <label htmlFor="">Image URL: </label>
            <input
              defaultValue={oldProduct.image}
              onChange={handleOnChange}
              type="url"
              name="image"
              placeholder="Image URL"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="single-input ">
            <input
              type="submit"
              value={"Update Product"}
              className="border py-3 px-10 rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
