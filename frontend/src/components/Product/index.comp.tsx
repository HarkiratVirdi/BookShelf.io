import React from 'react';
import { Carousel } from '@mantine/carousel';
import { IBook } from '../../interfaces/Book.interface';

const Product = ({ name, author, images, genre, price, seller }: IBook) => {
  return (
    <div className="">
      <Carousel
        maw={320}
        mx="auto"
        withIndicators
        height={200}
        dragFree
        slideGap="md"
        align="start"
      >
        {images?.map((img: any, index: number) => (
          <Carousel.Slide>
            <img src={img} alt={`${name} ${index}`} />
          </Carousel.Slide>
        ))}
      </Carousel>
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
