import React from 'react'
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'

function card(props) {
    const {image, name, id, comments, category, newPrice, oldPrice} = props.data
    const navigate = useNavigate();
    function handleNavigate(){
        navigate(`/details/${id}`)
    }

  return (
    <div className={styles.card} onClick={handleNavigate}>
        <img src={image} alt="" />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.comment}>comments: ({comments})</p>
        <span>
            <h3 className={styles.newPrice}>{newPrice / 1000}₽</h3>
            <h3 className={styles.oldPrice}>{oldPrice / 1000}₽</h3>
        </span>
    </div>
  )
}

export default card