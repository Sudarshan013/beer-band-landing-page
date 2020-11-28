import React, { memo } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  border: 0; 
  padding: 7px 0; 
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
`


export default memo(function SearchInput({
  searchQuery,
  handleChangeInSearchQuery
}) {
  return (
    <div className="center m-10">
      <Input
        className="search-input"
        placeholder="Search Beer Brand"
        value={searchQuery}
        onChange={handleChangeInSearchQuery}
      />
    </div>
  )
})
