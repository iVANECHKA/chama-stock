import React from 'react'
import styles from './ProductItem.module.css'

function ProductItem({ product, removeProducts }) {

  const color = () => {
    if (product.shop == 'Any') {
      return styles.whiteColor
    } else if (product.shop == 'Zavarka') {
      return styles.blueColor
    } else if (product.shop == 'Reborn') {
      return styles.orangeColor
    } else if (product.shop == 'D&G') {
      return styles.yellowColor
    } else {
      return styles.redColor
    }
  }

    return (
      <div className={styles.bigContainer}>
        <div className={styles.highRow}>
          <div className={styles.shopInfo}>
            <div className={`${styles.circle} ${color()}`}></div>
            <span className={styles.shop}>{product.shop}</span>
            <span className={styles.shopQuantity}>210</span>
          </div>
          <div className={styles.edit}></div>
        </div>
        <div className={styles.lowRow}>
          <p className={styles.name}>{product.name}</p>
          <div className={styles.quantity}>{product.quantity}</div>
        </div>
      </div>
    )
  }

  export default ProductItem