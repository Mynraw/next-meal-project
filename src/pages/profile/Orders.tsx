import { orders } from "../../data/orders"

const Orders = () => {
  return (
    <div className="my-10">
      <div className="overflow-x-auto max-h-72 shadow-xl">
        <table className="bg-alternative text-gray-400 font-extralight w-full rounded-lg">
          <thead className="bg-[#354257] rounded-lg">
            <tr className="uppercase font-medium rounded-lg">
              <td className="py-2 px-3 rounded-tl-lg">id</td>
              <td className="py-2 px-3">address</td>
              <td className="py-2 px-3">date</td>
              <td className="py-2 px-3">total</td>
              <td className="py-2 px-3 rounded-tr-lg">status</td>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-[#f9b420] hover:text-white transition-all"
              >
                <td className="p-3 whitespace-nowrap">{order.id}</td>
                <td className="p-3 whitespace-nowrap">{order.address}</td>
                <td className="p-3 whitespace-nowrap">{order.date}</td>
                <td className="p-3 whitespace-nowrap">${order.total}</td>
                <td className="p-3 whitespace-nowrap">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
