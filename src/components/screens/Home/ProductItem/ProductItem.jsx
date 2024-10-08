import React from 'react'
import { useState } from "react"
import { easings, useSpring, a } from '@react-spring/web'
import styles from './ProductItem.module.css'

function ProductItem({ product }) {

  const [isActive, setIsActive] = useState(false)

  const extendCompAnimation = useSpring({
    maxHeight: isActive ? 100 : 0,
    opacity: isActive ? 1 : 0,
    marginTop: isActive ? 39 : 0,
    config: { easing: easings.easeInOutBack, duration: 650 },
  })

  const showCompButtonAnimation = useSpring({
    marginBottom: isActive ? 16 : 0,
    paddingTop: isActive ? 14 : 0,
    paddingBottom: isActive ? 14 : 0,
    maxHeight: isActive ? 100 : 0,
    opacity: isActive ? 1 : 0,
    config: { easing: easings.easeInOutBack, duration: 650 },
  })
 

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
    <>
      <div className={`${styles.bigContainer} ${isActive ? styles.bigContainerActive : ''}`}>
        <div onClick={() => setIsActive(!isActive)}>
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

        <a.div style={extendCompAnimation} className={styles.changeRow}>
          <div className={styles.inputContainer}>
            <input type="text" defaultValue={0} maxLength={5} className={styles.input} />
          </div>
          <button className={styles.addButton}>Добавить</button>
        </a.div>

      </div>

        <a.div style={showCompButtonAnimation} className={styles.showCompContainer}>
          <p className={styles.showCompText}>Показать компоненты</p>
        </a.div>

    </>
  )
}

export default ProductItem