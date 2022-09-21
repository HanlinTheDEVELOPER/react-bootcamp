import React, { useContext } from "react";

import { Context } from "../Context";
import useHover from "../hooks/useHover";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(Context);
  const [hovered, ref] = useHover();

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
  return (
    <div className="cart-item">
      <i
        ref={ref}
        className={iconClassName}
        onClick={() => removeFromCart(item.id)}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
};

export default CartItem;
