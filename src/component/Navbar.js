import React from 'react'
import {Link} from "react-router-dom"
import styles from "./styleSheet/navbar.module.css"

export default function Navbar() {
  return (
    <>
      <div class={styles.navbar}>
        <Link to='/'>
        <div>
          <img height={"36"} width={"72"} src="https://s3-alpha-sig.figma.com/img/1a0f/1be0/90e0b249ddf438f34c5850744747b61a?Expires=1691366400&Signature=RcA4DUHqFwts-sq~~RTPvqCr8GEmEtysiKQs8P5cc7Rz1tAnCxZfLQ6xvlZ2hqwGzVGS9N6eXpPPNqQcCSjeUwjsqcoPHOJUQKBuDeE-0KPwIAUHfDtRV6VAE8KCwGreqWmv263cMh2HhLzh2ua8cBWJVI57Stctauqm0qpvtvnEYh1~gQtkQgv58rMF06tV4mzWxK61SoWLK3TxNJ~DXz7o8g4eJXGmEOBMRgATG918uil3ifc~izIPXHS-1CesVRs7B3HWJR3dgooTdAV96c984fAEtIYuyjl3usmAhjSRc-NtTCAyX470FrHqQOXYSMW~61-b1aYl8GlmXTTEZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="logo" />
        </div>
        </Link>
       
        <div className={styles.fieldGroup}>
            <input className={styles.inputField} type="text" placeholder='Search'/>
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                 < path d="M16.6267 15.5129L20 18.8861L18.8861 20L15.5129 16.6267C14.3 17.5971 12.7618 18.1776 11.0888 18.1776C7.17579 18.1776 4 15.0018 4 11.0888C4 7.17579 7.17579 4 11.0888 4C15.0018 4 18.1776 7.17579 18.1776 11.0888C18.1776 12.7618 17.5971 14.3 16.6267 15.5129ZM15.0465 14.9284C16.0096 13.9358 16.6023 12.5819 16.6023 11.0888C16.6023 8.04259 14.135 5.57529 11.0888 5.57529C8.04259 5.57529 5.57529 8.04259 5.57529 11.0888C5.57529 14.135 8.04259 16.6023 11.0888 16.6023C12.5819 16.6023 13.9358 16.0096 14.9284 15.0465L15.0465 14.9284Z" fill="#696974"/>
                </svg>
            </div>
            
        </div>
      </div>
    </>
  )
}
