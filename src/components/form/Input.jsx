const Input = () => {
  return (
    <div className="w-full">
      <label className="relative block">
        <input
          type="text"
          className="w-full h-14 p-4 outline-none border-2 border-primary rounded-lg peer"
          required
        />
        <span className="absolute left-3 top-3.5 text-lg opacity-50 capitalize transition-all peer-focus:top-0.5 peer-focus:left-4 peer-focus:text-sm peer-focus:transition-all peer-valid:top-0.5 peer-valid:left-4 peer-valid:text-sm peer-valid:transition-all">
          your name
        </span>
      </label>
      <input type={"text"} placeholder="Phone number" />
      <input type={"text"} placeholder="Your E-Mail" />
      <select>
        <option value={"1"}>1</option>
        <option value={"2"}>2</option>
        <option value={"3"}>3</option>
        <option value={"4"}>4</option>
        <option value={"5"}>5</option>
        <option value={"6"}>6</option>
        <option value={"7"}>7</option>
        <option value={"8"}>8</option>
      </select>
      <input type={"date"} />
    </div>
  );
};

export default Input;
