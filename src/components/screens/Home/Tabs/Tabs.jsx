import React from 'react'
import styles from './Tabs.module.css'
const Tabs = () => {
  return (
    <div className={styles.container}>
        <div className={`${styles.tab} ${styles.active}`}>Товары</div>
        <div className={`${styles.tab}`}>Поставка</div>
    </div>
  )
}

export default Tabs