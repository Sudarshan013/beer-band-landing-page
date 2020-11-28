import React, { useEffect, useState } from 'react'

import { apiGet } from '../utils/api'
import { BEER_IMGS_URL, BEER_ITEMS_URL } from '../utils/uri'
import SearchInput from './shared/SearchInput'
import BeerList from "./BeerList"
import "../styles/beerList.scss"
import Pagination from './shared/Pagination'

export default function BeerListContainer() {
 
  const [beerItems, setBeerItems] = useState([])
  const [beerImgs, setBeerImgs] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  
  const fetchBeerItems = async () => {
    setLoading(true)
    const beerItemsData = await apiGet(BEER_ITEMS_URL)
    const beerImages = await apiGet(BEER_IMGS_URL)
    setBeerImgs(beerImages)
    setBeerItems(beerItemsData)
    setLoading(false)
  }

  const handleChangeInSearchQuery = (evt) => {
    setSearchQuery(evt.target.value) 
  }
 
  useEffect(() => {
    fetchBeerItems()
  }, [])

  const indexOfLastBrand = currentPage * postsPerPage;
  const indexOfFirstBrand = indexOfLastBrand - postsPerPage;
  const currentBeerBrands = beerItems.slice(indexOfFirstBrand, indexOfLastBrand);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="beer-list-container">
      <h1>
        Beer Brands
      </h1>
      <SearchInput
        searchQuery={searchQuery}
        handleChangeInSearchQuery={handleChangeInSearchQuery}
      />
      <BeerList
        searchQuery={searchQuery}
        items={currentBeerBrands}
        loading={loading}
        beerImgs={beerImgs}
      />
      <Pagination
        itemsPerPage={postsPerPage}
        totalItems={beerItems.length}
        paginate={paginate}
      />
      
    </div>
  )
}
