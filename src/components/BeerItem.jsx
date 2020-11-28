import React, { memo } from 'react'

export default memo(function BeerItem(props) {
  const {
    abv,
    ibu,
    id,
    name,
    style,
    ounces
  } = props.item
  return (
    <div key={id}>
      <label>{name}</label>
      <span>abv: {abv}</span>
      <span>ibu: {ibu}</span>
      <span>Style: {style}</span>
      <span>Ounces: {ounces}</span>
    </div>
  )
})
