import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.css'

export const Item = ({data}) => {
    let { id, title, description, category, price, rating, image } = data

    const navidateTo = useNavigate();
    const handleDetail = () => {
      navidateTo(`/detail/${id}`)
    }
  return (
    <div className="itemCard" onClick={handleDetail}>
        <div>
          <h4>{category}</h4>
          <h3>Price: {price}$</h3>
        </div>
        {/* <p>{description}</p> */}
        <div>
          <img src={image} alt={description} />
        </div>
        <h2>{title}</h2>
    </div>
  )
}
