import React from 'react'
import  styles from './styleSheet/first.module.css'

export default function first() {
  return (
    
      <div className={styles.container}>
       <img className={styles.img} src="https://s3-alpha-sig.figma.com/img/c2ff/3354/2bbabce30cc9a3bf8774f83b4b45661e?Expires=1691366400&Signature=CGdfI16iHHdxIqMrdPPbh4HnE0w7-E4QaKDAHFf1ApicVieK0MBK51jU8WlZ-LaZ5fI~RT1ECTHPX6WYf1IvHXvGPdc1pvtPl~7Va1BdBrgwAs5ns6Lk3tx2zE-tVwZztR~0VOcBTTDlwsqwi62ag4UVr1ILlq6mb0E9Y-KrI4v0s0mrcY-0gCLz90VQqklYJI0q6HchIoTn8umlYU-9Mh4FhL2B3rzULPnj~Tyrwlx2YYFoQsQhXNBn0Z6PBvIX61yYzCZsb-rGSkKqmnVWoYPoRxlMWrcncHtmjTtCbiDIseomkuzCOemFkjS~tO9C5rJ25CP8tOnULoEAU206qQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Star wars" />
       <p className={styles.heading}>Welcome to Star Wars <br /> Dashboard</p>
       
       <p className={styles.para}>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>   
    </div>
   
  )
}
