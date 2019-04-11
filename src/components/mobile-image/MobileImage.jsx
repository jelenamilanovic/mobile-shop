import React, { Component } from 'react'
import './MobileImage.css'

export default function MobileImage({selectedImage}) {
  return (
    <div className="mobile-image">
      <img src={selectedImage} alt="iphone"/>
    </div>
  )
}
