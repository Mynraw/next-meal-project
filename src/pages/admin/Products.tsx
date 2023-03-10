import { meals } from "../../data/meals";
import Image from "next/image";

const Products = () => {
  return (
    <div className="my-10">
      <div className="overflow-x-auto max-h-72 shadow-xl">
        <table className="bg-alternative text-gray-400 rounded-t-lg font-extralight w-full text-center">
          <thead className="bg-[#354257] rounded-lg">
            <tr className="uppercase font-medium rounded-lg">
              <td className="py-2 px-3 rounded-tl-lg">image</td>
              <td className="py-2 px-3">id</td>
              <td className="py-2 px-3">title</td>
              <td className="py-2 px-3">price</td>
              <td className="py-2 px-3 rounded-tr-lg">action</td>
            </tr>
          </thead>
          <tbody>
            {meals.map((meal) => (
              <tr
                key={meal.mealId}
                className="hover:bg-[#f9b420] hover:text-white transition-all text-center border-b"
              >
                <td className="p-3 whitespace-nowrap border-gray-400">
                  <div className="relative">
                    <Image
                      src={`/images/f${meal.mealId}.png`}
                      width={45}
                      height={45}
                      alt={meal.title}
                    />
                  </div>
                </td>
                <td className="p-3 whitespace-nowrap border-gray-400">
                  {meal.mealId}
                </td>
                <td className="p-3 whitespace-nowrap border-gray-400">
                  {meal.title}
                </td>
                <td className="p-3 whitespace-nowrap border-gray-400">
                  {meal.price}
                </td>
                <td className="p-3 whitespace-nowrap border-gray-400 text-white">
                  <button className="py-1 px-3 capitalize mr-1 bg-blue-400 rounded-xl">
                    edit
                  </button>
                  <button className="py-1 px-3 capitalize ml-1 bg-red-700 rounded-xl">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
