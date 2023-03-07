export const crudReducer = (products, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...products,
        {
          id: action.id,
          name: action.name,
        },
      ];
    }
    case "deleted": {
      return products.filter((product) => product.id !== action.id);
    }
    default: {
      throw Error("Unknown action. " + action.type);
    }
  }
};
