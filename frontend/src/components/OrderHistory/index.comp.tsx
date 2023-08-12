import React, { useEffect, useRef, useState } from "react";
import { Title, Grid } from "@mantine/core";
import ProductCard from "../Product/index.comp";
import { Card, Text, Button, Divider } from "@mantine/core";
import { IBook } from "../../interfaces/Book.interface";
import Layout from "../Layout/index.comp";
import Counter from "../Counter/index.comp";
import { useDispatch, useSelector } from "react-redux";
import {
  cartSlice,
  changeCartQuantity,
  deleteCartItems,
} from "../../store/Cart/cart.reducer";
import { cartState } from "../../store/Cart/cart.selector";
import { Link } from "react-router-dom";
import { extractPrice } from "../../utils";

const sampleProduct1: IBook = {
  _id: "1",
  title: "Harry Potter",
  author: "JK rowling",
  price: "100",
  image:
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  genre: ["Horror"],
  description: "Harry potter 2000",
  user: "dghaghfeyiwgk2j2342234",
};

const sampleProduct2: IBook = {
  _id: "2",
  title: "Lord of the Rings",
  author: "J R Tolkien",
  price: "50",
  image:
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  genre: ["Fantasy"],
  description: "Lord of the Ringe - 1990",
  user: "dghaghfeyiwgk2j2342234",
};

const Orderhistory = () => {
  const orderHistory = [
    { _id: 1, items: [{ sampleProduct1 }, { sampleProduct1 }, { sampleProduct1 }] },
    { _id: 2, items: [{ sampleProduct2 }, { sampleProduct2 }] },
  ];

  return (
    <div>
      <Text weight={700} fz="xl">
        Order History
      </Text>
      {orderHistory.length === 0 ? (
        <Text weight={700}>Order history is currently empty</Text>
      ) : (
        <ul style={{ listStyle: "none", padding: 5 }}>
          {orderHistory.map((order, index) => (
            <div key={order._id}>
              <OrderHistoryOrder order={order} index={index} />
              <Divider />
            </div>
          ))}
        </ul>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
};

const OrderHistoryOrder = ({ order, index }) => {
  return (
    <ul style={{ listStyle: "none", padding: 5 }}>
      {order.map((item) => (
          <li
            key={item.}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              padding: "20px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "10%",
                  objectFit: "cover",
                  marginRight: "10px",
                  marginLeft: "10px",
                }}
              />
            </div>

            <div>
              <Text weight={700}>{item.title}</Text> by{" "}
              {item.author}
            </div>
            <div className="flex items-center">
            <span className="mr-2"> Quantity: 3</span>
              <span className="mr-2">${item.price}</span>
              <div className="w-36">
                <Link to={`/product/${item._id}`}>
                  <Button ml={"sm"}>Go to Product</Button>
                </Link>
              </div>
            </div>
          </li>
      ))}
    </ul>
  );
};

export default Orderhistory;
