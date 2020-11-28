import React, { useEffect, useState } from 'react'

import { apiGet } from '../utils/api'
import { BEER_IMGS_URL, BEER_ITEMS_URL } from '../utils/uri'
import SearchInput from './shared/SearchInput'
import BeerList from "./BeerList"

export default function BeerListContainer() {
 
  const [beerItems, setBeerItems] = useState([])

  const fetchBeerItems = async () => {
    const data = await apiGet(BEER_ITEMS_URL)
    setBeerItems(data)
  }
 
  useEffect(() => {
    fetchBeerItems()
  }, [])

  return (
    <div>
      <SearchInput />
      <BeerList items = {beerItems}  />
    </div>
  )
}
