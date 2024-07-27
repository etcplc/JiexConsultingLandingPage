import { shopData } from "@/data/Data";
import React from "react";
import ShopGridCard from "./ShopGridCard";

const RelatedProducts = () => {
  return (
    <section className="rv-related-prod rv-section-spacing">
      <div className="container">
        <div className="rv-3-section-heading rv-related-prod-heading">
          <div className="rv-3-section-heading__left">
            <h6 className="rv-7-section__sub-title">New Collection</h6>
            <h2 className="rv-related-prod__title">Featured Products</h2>
          </div>

          <div className="rv-3-section-heading__right">
            <a href="#" className="rv-3-def-btn rv-12-banner__btn">
              Shop all Collections
            </a>
          </div>
        </div>

        <div className="row rv-related-prod-row g-30 justify-content-center">
          {shopData.slice(0, 4).map((item) => (
            <div className="col-xl-3 col-md-4 col-6 col-xxs-12" key={item.id}>
              {item.hoverImg && (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
