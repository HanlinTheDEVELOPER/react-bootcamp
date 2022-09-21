import React, { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllPhotos(data);
      });
  }, []);

  const toggleFav = (id) => {
    setAllPhotos((prev) =>
      prev.map((each) => {
        return each.id === id
          ? { ...each, isFavorite: !each.isFavorite }
          : each;
      })
    );
  };

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((each) => each.id !== id));
  };

  const emptyCart = () => {
    setCartItems([]);
  };
  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFav,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
