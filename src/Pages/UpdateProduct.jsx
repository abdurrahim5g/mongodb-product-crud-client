const UpdateProduct = () => {
  return (
    <div className="UpdateProduct-page">
      <h2 className="text-2xl font-semibold my-5">Update Product</h2>
      <hr className="mb-8" />

      <div className="product-add-form">
        <form className="grid gap-3">
          <div className="single-input grid-rows-1">
            <input
              type="text"
              name="name"
              placeholder="Product name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="single-input grid-rows-1">
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="single-input grid-rows-1">
            <input
              type="text"
              name="quentity"
              placeholder="Quentity"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="single-input grid-rows-1">
            <input
              type="url"
              name="image_url"
              placeholder="Image URL"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="single-input grid-rows-1">
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
