import { useState, useReducer } from "react";
import Input from "@/components/form/Input";
import { crudReducer } from "@/store/crudReducer";

let nextProductId = 4;
const initialProducts = [
  {
    id: 1,
    name: "pizza",
  },
  {
    id: 2,
    name: "hamburger",
  },
  {
    id: 3,
    name: "pasta",
  },
];

const Categories = () => {
  const [products, dispatch] = useReducer(crudReducer, initialProducts);

  const handleAddProduct = (name) => {
    name.preventDefault();
    const { productName } = name.target;

    dispatch({
      type: "added",
      id: nextProductId++,
      name: productName.value,
    });
    productName.value = "";
  };

  const handleDeleteProduct = (productId) => {
    dispatch({
      type: "deleted",
      id: productId,
    });
  };

  return (
    <div className="my-10">
      <form onSubmit={(e) => handleAddProduct(e)}>
        <div className="flex gap-4 items-center">
          <Input
            type="text"
            placeholder="add a new category"
            id="productName"
          />
          <button className="btn-primary capitalize" type="submit">
            add
          </button>
        </div>
      </form>
      <div className="border border-primary mt-5 w-full rounded-xl p-3 max-h-72 overflow-auto">
        {products.map((product) => (
          <div
            className="flex justify-between items-center my-3"
            key={product.id}
          >
            <div>
              <span className="font-bold text-xl capitalize bg-white">
                {product.name}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                className="py-1 px-2 bg-red-900 text-white rounded-lg capitalize"
                onClick={() => handleDeleteProduct(product.id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
