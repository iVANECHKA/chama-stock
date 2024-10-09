import React from 'react'
import { easings, useSpring, a } from '@react-spring/web'
import styles from './ProductComps.module.css'

const ProductComps = ({ comp, isCompActive }) => {

    const extendCompAnimation = useSpring({
        display: isCompActive ? 'block' : 'none',
        maxHeight: isCompActive ? 'auto' : '',
        opacity: isCompActive ? 1 : 0,
        config: { easing: easings.easeInOutBack, duration: 650 },
      })

    return (
        <a.div style={extendCompAnimation} className={styles.bigContainer}>
            <div className={styles.line}></div>
            <div className={styles.container}>
                <div className={styles.highRow}>
                    <div className={styles.infoContainer}>
                        <div className={styles.uiIcon}></div>
                        <span className={styles.infoName}>Компонент товара</span>
                    </div>
                    <div className={styles.editIcon}></div>
                </div>
                <div className={styles.lowRow}>
                    <h3 className={styles.compName}>{comp.name}</h3>
                    <div className={styles.quantityContainer}>
                        <span className={styles.compQuantity}>{comp.quantity}</span>
                    </div>
                </div>
            </div>
        </a.div>
    )
}

export default ProductComps