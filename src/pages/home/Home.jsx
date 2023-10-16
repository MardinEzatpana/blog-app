import React from 'react'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/categories/Categories'
import ProductSection from '../../components/ProductSection/ProductSection'

export default function Home() {
  return (
    <div>
      <Slider />
      <Categories />
      <ProductSection />
    </div>
  )
}
