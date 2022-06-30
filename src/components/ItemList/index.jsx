import React from 'react'
import { Item } from '../Item';

export const ItemList = ({items}) => {
  return (
    <div>
        {items.map( item => {
            return <Item data={item} key={item.id} />
        })}
    </div>
  )
}
