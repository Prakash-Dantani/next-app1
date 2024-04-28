import React from "react";
import AddCartButton from "./AddCartButton";
import styles from "./ProductCard.module.css";

const ProductCart = () => {
  return (
    <div className={styles.cardContainer}>
      <AddCartButton />
    </div>
  );
};

export default ProductCart;
