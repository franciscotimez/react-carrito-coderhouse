import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

export const Item = ({data}) => {
    let { id, title, description, category, price, rating, image } = data

    const navidateTo = useNavigate();
    const handleDetail = () => {
      navidateTo(`/detail/${id}`)
    }
  return (
    <div className="itemCard" onClick={handleDetail}>
        <h2>{title}</h2>
        <h3>Precio: {price}</h3>
        <h4>{category}</h4>
        {/* <p>{description}</p> */}
        <img src={image} alt={description} />
    </div>
  )
}
