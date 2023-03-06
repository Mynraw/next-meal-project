import { useState } from "react";
import Input from "@/components/form/Input";

const Categories = () => {
  const [input, setInput] = useState("input");
  // initial categories
  const [categories, setCategories] = useState([
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
  ]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addCategories = () => {
    setCategories((prevVal) => [
      ...prevVal,
      { id: Math.random(0, 200) * 50, name: input },
    ]);
    setInput("");
  };

  return (
    <div className="my-10">
      <div className="flex gap-4 items-center">
        <Input
          type="text"
          placeholder="add a new category"
          onChange={(e) => handleInput(e)}
          value={input === "input" ? "" : input}
        />
        <button className="btn-primary capitalize" onClick={addCategories}>
          add
        </button>
      </div>
      <div className="border border-primary mt-5 w-full rounded-xl p-3 max-h-72 overflow-auto">
        {categories.map((category) => (
          <div
            className="flex justify-between items-center my-3"
            key={category.id}
          >
            <div>
              <span className="font-bold text-xl capitalize">
                {category.name}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="py-1 px-2 bg-blue-400 text-white rounded-lg capitalize">
                edit
              </button>
              <button className="py-1 px-2 bg-red-900 text-white rounded-lg capitalize">
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
