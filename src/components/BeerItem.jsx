import React, { memo } from 'react'
import styled from "styled-components"

const Card = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  width: 250px;
  .card-title{
    display: flex;
    align-items: center;
    h2{
      margin-left: 5px;
      font-size: 19px;
      font-weight: 400;
    }
    img{
      height: 70px;
      width: 70px;
      object-fit: contain;
    }
  }
  .card-body{
    margin-top: 5px;
    div{
      display: flex;
      padding: 5px 0px;
      justify-content: space-between;
    }
  }
  margin-bottom: 10px;
`

export default memo(function BeerItem(props) {
  const {item, beerImg} = props
  const {
    abv,
    ibu,
    id,
    name,
    style,
    ounces
  } = item
  console.log(item)
  return (
    <Card key={id}>
      <div className="card-title">
        <img src={beerImg.image}/>
        <div className="title">
          <h2 className="ml-5">{name}</h2>
        </div>
      </div>
      <div className="card-body">
        <div>
          <span>
            Ounces:  
          </span>
          <span>
            {ounces}<i className="fas fa-glass-whiskey"></i> 
          </span>
        </div>
        <div>
          <span>
            Style:  
          </span>
          <span>
            {style} 
          </span>
        </div>
        <div>
          <span>
            A/V:  
          </span>
          <span>
           {abv} 
          </span>
        </div>
      </div>
    </Card>
  )
})
