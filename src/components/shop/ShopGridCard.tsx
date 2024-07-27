"use client";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import { addToCart } from "@/redux/features/cartSlice";
import { addToWishlist } from "@/redux/features/wishlistSlice";
import { ShopItem } from "@/types";
type Props = {
  img: string;
  hoverImg: string;
  name: string;
  prevPrice: number;
  price: number;
  discount?: boolean;
  slug: string;
  product: ShopItem;
};

const ShopGridCard = ({
  img,
  hoverImg,
  name,
  prevPrice,
  price,
  discount,
  slug,
  product,
}: Props) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Item added to cart!");
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    toast.success("Item added to wishlist!");
  };

  return (
    <div className="rv-7-product rv-inner-product">
      <div className="rv-3-product__img rv-7-product__img">
        <img src={img} alt="Product Image" />
      </div>

      <div className="rv-inner-product__hover-img">
        <Link href={`/shop/${slug}`}>
          <img src={hoverImg} alt="Hover image" />
        </Link>
      </div>
      {discount && (
        <span className="rv-3-product__tag rv-7-product__tag">-20%</span>
      )}
      <div className="rv-3-product__actions">
        <button className="add-to-wishlist" onClick={handleAddToWishlist}>
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>

      <div className="rv-7-product__txt">
        <div className="rv-3-product__rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <h5 className="rv-3-product__title">
          <Link href={`/shop/${slug}`}>{name}</Link>
        </h5>
        <span className="rv-3-product__price">
          <span className="prev-price">${prevPrice}.00</span>
          <span className="current-price">${price}.00</span>
        </span>

        <div className="rv-3-product__bottom">
          <button className="rv-3-product__cart-btn" onClick={handleAddToCart}>
            <i className="fa-regular fa-bag-shopping"></i> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopGridCard;
