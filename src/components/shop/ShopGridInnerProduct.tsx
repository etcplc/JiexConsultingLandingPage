import React from "react";
import ShopGridCard from "./ShopGridCard";
import ShopListCard from "./ShopListCard";
import { ShopItem } from "@/types";
type Props = {
  currentItems: ShopItem[];
  isGridView: boolean;
};
const ShopGridInnerProduct = ({ currentItems, isGridView }: Props) => {
  return (
    <div className="rv-inner-products-container">
      <div className="row g-30">
        {currentItems.map((item) => (
          <div
            className={
              isGridView ? "col-xl-3 col-md-4 col-6 col-xxs-12" : "col-12"
            }
            key={item.id}
          >
            {" "}
            {isGridView
              ? item.hoverImg && (
                  <ShopGridCard
                    img={item.img}
                    hoverImg={item.hoverImg}
                    name={item.name}
                    prevPrice={item.prevPrice}
                    price={item.price}
                    discount={item.discount}
                    slug={item.slug}
                    product={item}
                  />
                )
              : item.hoverImg && (
                  <ShopListCard
                    img={item.img}
                    hoverImg={item.hoverImg}
                    name={item.name}
                    prevPrice={item.prevPrice}
                    price={item.price}
                    discount={item.discount}
                    slug={item.slug}
                    product={item}
                  />
                )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopGridInnerProduct;
