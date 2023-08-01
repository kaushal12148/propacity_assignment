import React from 'react'

export default function Display({data}) {
  return (
    <div>
      <div className={styles.display}>
        {/* <Welcome/> */}
        <Films data={data}/>
    </div>
    </div>
  )
}
