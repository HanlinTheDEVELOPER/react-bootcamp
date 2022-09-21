import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../Context";
const Header = () => {
  const { cartItems } = useContext(Context);
  const iconClassName =
    cartItems.length > 0
      ? "ri-shopping-cart-fill ri-fw ri-2x"
      : "ri-shopping-cart-line ri-fw ri-2x";
  return (
    <header>
      <Link to="/">
        <h2>PicSome</h2>
      </Link>
      <Link to="/cart">
        <i className={iconClassName}></i>
      </Link>
    </header>
  );
};

export default Header;
