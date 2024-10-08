import React, { useState } from 'react'
import styles from './SearchField.module.css'

const SearchField = ({handleInputChange, searchItem}) => {


  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <svg className={styles.icon} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.1084 17.8333L10.325 11.05C9.78335 11.5111 9.16043 11.868 8.45627 12.1208C7.7521 12.3736 7.04446 12.5 6.33334 12.5C4.5982 12.5 3.1297 11.8994 1.92783 10.6982C0.725943 9.49695 0.125 8.02924 0.125 6.29504C0.125 4.56084 0.725609 3.092 1.92683 1.88853C3.12804 0.68505 4.59575 0.083313 6.32995 0.083313C8.06417 0.083313 9.53301 0.684247 10.7365 1.88612C11.9399 3.08798 12.5417 4.5565 12.5417 6.29165C12.5417 7.04443 12.4083 7.77289 12.1417 8.47706C11.875 9.18123 11.525 9.78332 11.0917 10.2833L17.875 17.0666L17.1084 17.8333ZM6.33334 11.4167C7.77085 11.4167 8.98439 10.9219 9.97396 9.93228C10.9636 8.94269 11.4583 7.72915 11.4583 6.29165C11.4583 4.85416 10.9636 3.64062 9.97396 2.65103C8.98439 1.66144 7.77085 1.16665 6.33334 1.16665C4.89585 1.16665 3.68231 1.66144 2.69272 2.65103C1.70315 3.64062 1.20836 4.85416 1.20836 6.29165C1.20836 7.72915 1.70315 8.94269 2.69272 9.93228C3.68231 10.9219 4.89585 11.4167 6.33334 11.4167Z" fill="white" />
        </svg>
        <input className={styles.input} type="text" placeholder="Поиск..." value={searchItem} onChange={handleInputChange} />
      </div>
      <div className={styles.button}><div className={styles.cross}></div></div>
    </div>

  )
}

export default SearchField