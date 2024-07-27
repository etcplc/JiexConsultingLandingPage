import { addToCart } from "@/redux/features/cartSlice";
import { addToWishlist } from "@/redux/features/wishlistSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ShopItem } from "@/types";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
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

const ShopListCard = ({
  img,
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
    <div className="rv-7-product rv-inner-product list-product-container">
      <div className="row w-100 row-gap-sm-0 row-gap-3">
        <div className="col-md-3 col-sm-4">
          <div className="rv-3-product__img rv-7-product__img list-view-img">
            <Link href={`/shop/${slug}`}>
              <img src={img} alt="Product Image" />
            </Link>
            {discount && (
              <span className="rv-3-product__tag rv-7-product__tag">-20%</span>
            )}
          </div>
        </div>
        <div className="col-md-9 col-sm-8">
          <div className="list-view-text-container">
            <div className="rv-3-product__actions">
              <button className="add-to-wishlist" onClick={handleAddToWishlist}>
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
            <div className="rv-7-product__txt">
              <div className="left-text-container">
                <h5 className="rv-3-product__title">
                  Name: <Link href={`/shop/${slug}`}>{name}</Link>
                </h5>
                <span className="rv-3-product__price">
                  Price: <span className="prev-price">${prevPrice}.00</span>
                  <span className="current-price">${price}.00</span>
                </span>
                <div className="rv-3-product__rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
              </div>
              <div className="right-text-container">
                <div className="product-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    excepturi, provident quae?
                  </p>
                </div>
                <div className="rv-3-product__bottom">
                  <button
                    className="rv-3-product__cart-btn"
                    onClick={handleAddToCart}
                  >
                    <i className="fa-regular fa-bag-shopping"></i> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopListCard;
