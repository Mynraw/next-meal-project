export const crudReducer = (products, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...products,
        {
          id: action._id,
          name: action.name,
        },
      ];
    }
    case "deleted": {
      return products.filter((product) => product._id !== action._id);
    }
    default: {
      throw Error("Unknown action. " + action.type);
    }
  }
};
