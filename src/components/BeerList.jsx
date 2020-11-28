import React, { memo } from 'react'
import BeerItem from './BeerItem'

export default memo(function BeerList({
  items,
  loading,
  beerImgs,
  searchQuery
}) {
  if (loading) {
    return (
      <div>
        Loading ...
      </div>
    )
  }
  return (
    <div className="beer-list">
      {items.map((item, index) => {
        const beerImgIndex = index % beerImgs.length
        const query = searchQuery.toLowerCase()
        if (item.name.toLowerCase().indexOf(query) >= 0) {
          return (<BeerItem
            key={item.id}
            item={item}
            beerImg={beerImgs[beerImgIndex]}
          />)
        }
        return null
      })}
    </div>
  )
})
