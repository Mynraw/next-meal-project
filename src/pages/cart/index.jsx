import {useSelector} from "react-redux";
import Title from "@/components/ui/Title";
import Image from "next/image";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    return (
        <div
            className="mx-auto xs:flex sm:grid items-center grid-cols-7 bg-alternative overflow-y-auto py-36 w-full h-full">
            <div
                className="sm:col-span-7 md:col-span-7 lg:col-span-5 max-h-[50vh] grid place-items-center overflow-x-auto bg-secondary p-10">
                <table className="bg-[#354257] text-gray-200 font-extralight w-full">
                    <thead>
                    <tr className="uppercase border border-secondary">
                        <th className="p-5">product</th>
                        <th className="p-5">extras</th>
                        <th className="p-5">price</th>
                        <th className="p-5">quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cart['products'].map((meal) => (
                        <tr className="bg-alternative hover:bg-[#f9b420] text-center border border-secondary hover:text-black transition-none"
                            key={meal.id}>
                            <td className="p-5">
                                <div className="relative w-auto h-auto flex justify-center items-center gap-2">
                                    <Image
                                        src={`/images/f${meal.id}.png`}
                                        alt="meal"
                                        width={40}
                                        height={40}
                                    />
                                    <span className="capitalize">{meal.name}</span>
                                </div>
                            </td>
                            <td className="p-5">{meal.extras.map((extra) => extra.name)}</td>
                            <td className="p-5">${meal.price}</td>
                            <td className="p-5">{meal.quantity}</td>
                        </tr>))}

                    </tbody>
                </table>
            </div>
            <div
                className="sm:py-16 lg:py-0 xs:col-span-7 sm:col-span-7 md:col-span-7 lg:col-span-2 mx-auto flex flex-col gap-5 text-gray-200">
                <Title addClass={"text-5xl"}>cart total</Title>
                <div className="capitalize">
                    <p>
                        subtotal: <span>$20</span>
                    </p>
                    <p>
                        discount: <span>$0.00</span>
                    </p>
                    <p>
                        total: <span>$20</span>
                    </p>
                </div>
                <button className="btn-primary uppercase">checkout now!</button>
            </div>
        </div>
    );
};

export default Cart;
