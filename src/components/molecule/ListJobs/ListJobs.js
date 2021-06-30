import React from 'react'
import Container from "../../atom/Container";
import ItemList from "../ItemList/ItemList"

function ListJobs({list}) {
  return (
    <Container className='flex column' style={{padding: '0 30px', overflow:'auto'}}>
        {list.map((item, i) => (<ItemList item={item} key={item.id} />))}
    </Container>
  )
}

export default ListJobs
