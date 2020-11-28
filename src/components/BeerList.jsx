import React, { memo } from 'react'
import BeerItem from './BeerItem'

export default memo(function BeerList({ items }) {
  if (items.length === 0) {
    return (
      <div>
        Loading ...
      </div>
    )
  }
  return (
    <div>
      {items.map((item) => {
        return (<BeerItem
          key={item.id}
          item={item}
        />)
      })}
    </div>
  )
})
