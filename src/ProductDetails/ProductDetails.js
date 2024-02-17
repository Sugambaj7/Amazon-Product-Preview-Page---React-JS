import React from "react";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductImage];
    const SelectedProductImagePos = props.currentPreviewImagePos;
    if (pos === SelectedProductImagePos) {
      classArr.push(classes.SelectedProductImage);
    }
    return (
      <img
        key={pos}
        className={classArr.join(" ")}
        src={item.imageUrl}
        alt={item.styleName}
        onClick={() => props.onColorOptionClick(pos)}
      />
    );
  });

  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = [classes.FeatureItem];
    const SelectedFeatureItemPos = props.showHeartBeatSection ? 1 : 0;
    if (pos === SelectedFeatureItemPos) {
      classArr.push(classes.SelectedFeatureItem);
    }
    return (
      <button
        key={pos}
        className={classArr.join(" ")}
        onClick={() => props.onFeatureItemClick(pos)}
      >
        {item}
      </button>
    );
  });

  return (
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{props.data.title}</h1>
      <p className={classes.ProductDescription}>{props.data.description}</p>
      <h3 className={classes.SectionHeading}>Select Color</h3>
      <div>{colorOptions}</div>
      <h3 className={classes.SectionHeading}>Features</h3>
      <div>{featureList}</div>
      <button className={classes.PrimaryButton}>Buy Now</button>
    </div>
  );
};
export default ProductDetails;
