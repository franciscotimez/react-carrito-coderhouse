import React from 'react'
import { Item } from '../Item';
import './styles.css'

export const ItemList = ({items}) => {
  return (
    <div className="itemContainer">
        {items.map( item => {
            return <Item data={item} key={item.id} />
        })}
    </div>
  )
}
