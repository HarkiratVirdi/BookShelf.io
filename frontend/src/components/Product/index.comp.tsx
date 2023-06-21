import React from 'react';
import { IBook } from '../../interfaces/Book.interface';

const Product = ({ name, author, image, genre, price, seller }: IBook) => {
  return (
    <div className="">
      <img style={{ width: '20rem' }} src={image} alt={name} />
      <div className="flex">
        <span>{name}</span> | <span> {author}</span>
      </div>
      <p>{genre}</p>
      <div>
        <span>price: {price}</span> | <span>Sold By: {seller}</span>
      </div>
    </div>
  );
};

export default Product;
