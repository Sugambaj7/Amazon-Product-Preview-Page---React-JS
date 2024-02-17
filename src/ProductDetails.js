import React from "react";
import ProductData from "./ProductData";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  return (
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
      <p className={classes.ProductDescription}>{ProductData.description}</p>
      <h3 className={classes.SectionHeading}>Select Color</h3>
      <div>
        <img
          className={[classes.ProductImage, classes.SelectedProductImage].join(
            " "
          )}
          src="https://imgur.com/iOeUBV7.png"
          alt="Black Colored Watch"
          srcset=""
        />
        <img
          className={classes.ProductImage}
          src="https://imgur.com/PTgQlim.png"
          alt="Red Colored Watch"
          srcset=""
        />
        <img
          className={classes.ProductImage}
          src="https://imgur.com/Mplj1YR.png"
          alt="Blue Colored Watch"
          srcset=""
        />
        <img
          className={classes.ProductImage}
          src="https://imgur.com/xSIK4M8.png"
          alt="Purple Colored Watch"
          srcset=""
        />
      </div>
      <h3 className={classes.SectionHeading}>Features</h3>
      <div>
        <button
          className={[classes.FeatureItem, classes.SelectedFeatureItem].join(
            " "
          )}
        >
          Time
        </button>
        <button className={classes.FeatureItem}>Heart Rate</button>
      </div>
      <button className={classes.PrimaryButton}>Buy Now</button>
    </div>
  );
};
export default ProductDetails;
