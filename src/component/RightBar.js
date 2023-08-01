import React, {useEffect} from 'react'
import styles from "./styleSheet/rightbar.module.css"

export default function rightBar() {
  return (
    <div>
        <a id={`${styles.menuToggle}`} href="#" className={`btn btn-primary btn-lg toggle ${styles.toggle}`}><i className={`glyphicon glyphicon-bookmark`}></i></a>
    </div>
  )
}
