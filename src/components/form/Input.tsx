const Input = (props) => {
  const { type, placeholder, errormessage, touched, addClass, ...rest } = props;
  return (
    <div className={`w-full ${addClass}`}>
      {type !== "select" && (
        <label className="relative block">
          <input
            type={type}
            className={`w-full h-14 p-4 outline-none border-[1.5px] rounded-md border-[1.5px]rounded-md peer
              ${errormessage && touched ? "border-red-500" : "border-primary"}`}
            required
            {...rest}
          />
          <span className="absolute left-3 top-3.5 text-lg opacity-50 capitalize transition-all peer-focus:top-0.5 peer-focus:left-4 peer-focus:text-sm peer-focus:transition-all peer-valid:top-0.5 peer-valid:left-4 peer-valid:text-sm peer-valid:transition-all">
            {placeholder}
          </span>
          {errormessage && touched ? (
            <span className="text-red-500 font-light">{errormessage}</span>
          ) : null}
        </label>
      )}
      {type === "select" && (
        <label className="relative block">
          <select
            className={`w-full select-arrow h-14 p-4 outline-none border-[1.5px] rounded-md border-[1.5px]rounded-md peer
                        ${
                          errormessage && touched
                            ? "border-red-500"
                            : "border-primary"
                        }`}
            required
            {...rest}
          >
            <option disabled value={""}>
              How many persons?
            </option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
            <option value={"4"}>4</option>
            <option value={"5"}>5</option>
            <option value={"6"}>6</option>
            <option value={"7"}>7</option>
            <option value={"8"}>8</option>
          </select>
          {errormessage && touched ? (
            <span className="text-red-500">{errormessage}</span>
          ) : null}
        </label>
      )}
    </div>
  );
};

export default Input;
