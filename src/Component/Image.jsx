import React, { useContext } from "react";

import PropTypes from "prop-types";

import { Context } from "../Context";
import useHover from "../hooks/useHover";

const Image = ({ className, img }) => {
  const [hovered, ref] = useHover();
  const { toggleFav, addToCart, cartItems, removeFromCart } =
    useContext(Context);

  const heartIcon = () => {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFav(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFav(img.id)}
        ></i>
      );
    }
  };

  const cartIcon = () => {
    const added = cartItems.some((item) => item.id === img.id);
    if (added) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        />
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  };

  return (
    <div className={`image-container ${className}`} ref={ref}>
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
