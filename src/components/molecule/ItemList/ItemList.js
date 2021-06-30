import React from 'react'
import Container from "../../atom/Container";
import Text from "../../atom/Text";
import parseDate from '../../../utils/parseDate';
import LinkA from '../../atom/LinkA';

import './ItemList.css'

function ItemList({item}) {
  return (
    <LinkA url={`/job/${item.id}`}>
      <Container className='flex column item-container' >
        <Text type='h4'>{item.title}</Text>
        <Text style={{paddingLeft: 20}}>{item.description}</Text>
        <Text style={{ marginTop: 10}}>Update at: {parseDate(item.updatedAt)}</Text>
      </Container>
    </LinkA>
    
  )
}

export default ItemList