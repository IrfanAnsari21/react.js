import React from 'react'
import pic from '../assets/images/Banner1.jpg'

export default function ImageExample() {
  return (
    <>
        <h1>Image Example</h1>
        <img src={pic} height={333} width={500} alt="Image" />
        <img src="/images/Banner2.jpg" height={333} width={500} alt="Image" />
        <img src="/images/Banner3.jpg" height={333} width={500} alt="Image" />
        <img src="/images/Banner4.jpg" height={333} width={500} alt="Image" />
    </>
  )
}
