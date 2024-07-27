import React from "react";
import ShopListCard from "./ShopListCard";
import ShopGridCard from "./ShopGridCard";
import { ShopItem } from "@/types";
type Props = {
  isGridView: boolean;
  currentItems: ShopItem[];
};
const ShopSidebarInnerProducts = ({ isGridView, currentItems }: Props) => {
  return (
    <div className="rv-inner-products-container">
      <div
        className={`row g-30 ${
          isGridView
            ? "row-cols-xl-3 row-cols-md-2 row-cols-2 row-cols-xxs-1"
            : ""
        }`}
      >
        {currentItems.map((item) => (
          <div className={isGridView ? "col" : "col-12"} key={item.id}>
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

export default ShopSidebarInnerProducts;
