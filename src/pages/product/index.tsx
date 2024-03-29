import {useState} from "react";
import {addProduct} from "../../redux/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import Title from "../../components/ui/Title";

const style: object = {
    objectFit: "contain",
};

const extras = [
    {
        id: 1,
        name: "Extra cheese",
        price: 3,
    },
    {
        id: 2,
        name: "SJW Sauce",
        price: 2,
    },
    {
        id: 3,
        name: "Double trouble",
        price: 7,
    },
];

const dummyMeal = [{
    id: 1,
    name: "SJWPizza",
    price: 10,
    desc: "Karen's finest.",
    extras: extras,
}]

const Index = () => {
    const [prices, setPrices] = useState([10, 20, 30]);
    const [totalPrice, setTotalPrice] = useState(prices[0]);
    const [mealSize, setMealSize] = useState(0);
    const [ingredients, setIngredients] = useState(extras);
    const [additions, setAdditions] = useState([]);

    const cart = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();

    // console.log(cart);

    const handleProductSize = (size: number) => {
        const priceDiffer = prices[size] - prices[mealSize];
        setMealSize(size);
        setTotalPrice((prevTotal) => (prevTotal += priceDiffer));
    };

    const handleIngredients = (extra: any, item: any) => {
        const isChecked = extra.target.checked;

        if (isChecked) {
            setTotalPrice((prevTotal) => (prevTotal += item.price));
            setAdditions([...additions, item]);
        } else {
            setTotalPrice((prevTotal) => (prevTotal -= item.price));
            setAdditions(additions.filter((addition) => addition.id !== item.id))
        }
    };

    const handleAddToCart = () => {
        dispatch(addProduct({...dummyMeal[0], additions, totalPrice, quantity: 1}))
    }

    return (
        <div className="grid place-items-center">
            <div
                className="container h-screen w-screen grid grid-cols-1 md:grid-cols-2 items-start md:items-center gap-x-28 mt-28 md:mt-0">
                <div className="relative h-[100%] w-[100%]">
                    <Image src="/images/f1.png" alt="piz" fill style={style}/>
                </div>
                <div className="relative flex flex-col gap-y-6 items-center md:items-start">
                    <Title addClass="text-4xl">item</Title>
                    <span className="text-primary underline underline-offset-4 text-xl">
            $ {totalPrice}
          </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                        molestias eum libero, reprehenderit suscipit ratione iure sunt esse?
                        Omnis, voluptatem.
                    </p>
                    <div>
                        <strong className="block text-2xl mb-1">Choose the size</strong>
                        <div className="flex items-center gap-10">
                            <button className="relative" onClick={() => handleProductSize(0)}>
                                <Image src="/images/size.png" alt="" width={60} height={60}/>
                                <span
                                    className="bg-primary text-black text-sm rounded-lg px-3 absolute left-5 bottom-12 overflow-hidden">
                  Small
                </span>
                            </button>
                            <button className="relative" onClick={() => handleProductSize(1)}>
                                <Image src="/images/size.png" alt="" width={80} height={80}/>
                                <span
                                    className="bg-primary text-black text-sm rounded-lg px-3 absolute left-7 bottom-16 overflow-hidden">
                  Medium
                </span>
                            </button>
                            <button className="relative" onClick={() => handleProductSize(2)}>
                                <Image src="/images/size.png" alt="" width={100} height={100}/>
                                <span
                                    className="bg-primary text-black text-sm rounded-lg px-3 absolute left-10 bottom-20 overflow-hidden">
                  Large
                </span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <strong className="block text-2xl mb-2">
                            Choose additional ingredients
                        </strong>
                        <div className="flex">
                            {ingredients.map((ingredient) => (
                                <div
                                    key={ingredient.id}
                                    className="flex items-center justify-center md:justify-start gap-x-1 mb-1"
                                >
                                    <input
                                        className="w-5 h-5 accent-primary"
                                        id={(ingredient.id).toString()}
                                        type={"checkbox"}
                                        onChange={(e) => handleIngredients(e, ingredient)}
                                    />
                                    <label className="mr-3" htmlFor={(ingredient.id).toString()}>
                                        {ingredient.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="btn-primary max-w-[150px]" onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Index;
