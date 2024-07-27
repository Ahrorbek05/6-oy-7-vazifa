import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import Loader from '../../components/Loader';

function Details () {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://cars-pagination.onrender.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error));
  }, [id]);

  if (!product) {
    return <Loader/>;
  }

  function handleCanel(){
    navigate('/')
  }

  return (
    <div className={styles.details}>
      <img src={product.image} alt="" />
      <div className={styles.wrap}>
      <h1>{product.name}</h1>
      <p className={styles.comment}>comments({product.comments})</p>
      <span>
      <p className={styles.new}>{product.newPrice / 1000}₽</p>
      <p className={styles.price}>{product.oldPrice / 1000}₽</p>
      </span>
      <h3>{product.category}</h3>
      </div>
      <button className={styles.canel} onClick={handleCanel}>Back</button>
    </div>
  );
};

export default Details;
