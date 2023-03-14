import { adminOrders } from "../../data/adminOrders";

const Orders = () => {
  return (
    <div className="my-10">
      <div className="overflow-x-auto max-h-72 shadow-xl">
        <table className="bg-alternative text-gray-400 rounded-t-lg font-extralight w-full text-center">
          <thead className="bg-[#354257] rounded-lg">
            <tr className="uppercase font-medium rounded-lg">
              <td className="py-2 px-3 rounded-tl-lg">product id</td>
              <td className="py-2 px-3">customer id</td>
              <td className="py-2 px-3">total</td>
              <td className="py-2 px-3">payment</td>
              <td className="py-2 px-3">status</td>
              <td className="py-2 px-3 rounded-tr-lg">action</td>
            </tr>
          </thead>
          <tbody>
            {adminOrders.map((order, index) => (
              <tr
                key={index}
                className="hover:bg-[#f9b420] hover:text-white transition-all text-center border-b"
              >
                <td className="p-3 whitespace-nowrap border-gray-400">
                  {order.productId}
                </td>
                <td className="p-3 whitespace-nowrap border-gray-400">
                  {order.customerId}
                </td>
                <td className="p-3 whitespace-nowrap border-gray-400">
                  {order.total}
                </td>
                <td className="p-3 whitespace-nowrap border-gray-400">
                  {order.payment}
                </td>
                <td className="p-3 whitespace-nowrap border-gray-400">
                  {order.status}
                </td>
                <td className="p-3 whitespace-nowrap border-gray-400 text-white">
                  <button className="py-1 px-3 capitalize mr-1 bg-blue-400 rounded-xl">
                    more
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

export default Orders;
