/* eslint-disable react/prop-types */
import styles from './Avattar.module.css'

export function Avattar({src, hasBorder = true}) {  

  return(
    <img 
      className={hasBorder ? styles.avattarWithBorder : styles.avattar} 
      src={src}
    />
  )
}