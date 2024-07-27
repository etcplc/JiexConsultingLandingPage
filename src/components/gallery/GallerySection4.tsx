import { galleryData4 } from "@/data/Data";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const GallerySection4 = () => {
  return (
    <section className="rv-9-gallery">
      <DivAnimateYAxis position={30} visible>
        <div className="row justify-content-center row-cols-lg-5 row-cols-sm-3 row-cols-2 rv-inner-gallery-row">
          {galleryData4.map((img, index) => (
            <div className="col" key={index}>
              <div className="rv-9-gallery__img">
                <img src={img} alt={`Gallery-${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </DivAnimateYAxis>
      <div className="rv-9-gallery__sticker">
        <h4 className="title">Instagram</h4>
        <h6 className="sub-title">Follow Us on</h6>
      </div>
    </section>
  );
};

export default GallerySection4;
