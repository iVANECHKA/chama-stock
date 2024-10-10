import React from 'react'
import { useState } from "react"
import { easings, useSpring, a } from '@react-spring/web'
import ProductComps from './ProductComps/ProductComps'
import styles from './ProductItem.module.css'

function ProductItem({ product, comps }) {

  const [isActive, setIsActive] = useState(false)
  const [isCompActive, setIsCompActive] = useState(false)

  const extendProductAnimation = useSpring({
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
  // Раскрывает карточку и закрывает список компонентов
  function divOpener() {
    setIsActive(!isActive);
    setIsCompActive(false);
  }


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

  const [value, setValue] = useState('')

  const buttonValid = (event) => {
    setValue(event.target.value)
  }

  function buttonCheck() {
    if (value > 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>

      <div className={`${styles.bigContainer} ${isActive ? styles.bigContainerActive : ''} ${isCompActive ? styles.bigContainerActive2 : ''}`}>
        <div onClick={divOpener}>
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
        <a.div style={extendProductAnimation} className={styles.changeRow}>
          <input onChange={buttonValid} type="text" defaultValue={0} maxLength={5} className={styles.input} />
          <button className={`${styles.addButton} ${buttonCheck() ? styles.addButtonActive : ''}`}>Добавить</button>
        </a.div>
      </div>
      {comps.slice(0, 3).map(comp => (
        <ProductComps comp={comp} key={comp.id} isCompActive={isCompActive} />
      ))}
      <a.div onClick={() => setIsCompActive(!isCompActive)} style={showCompButtonAnimation} className={`${styles.showCompContainer} ${isCompActive ? styles.showCompContainerActive : ''}`}>
        <p className={`${styles.showCompText} ${isCompActive ? styles.showCompTextActive : ''}`}>Показать компоненты</p>
      </a.div>

    </>
  )
}

export default ProductItem