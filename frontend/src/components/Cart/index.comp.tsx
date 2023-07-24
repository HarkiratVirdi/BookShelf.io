import React from "react";
import { Title, Grid } from "@mantine/core";
import ProductCard from "../Product/index.comp";
import { Card, Text, Button } from "@mantine/core";
import { IBook } from "../../interfaces/Book.interface";

const sampleProduct: IBook = {
  _id: "1",
  title: "Harry Potter",
  author: "JK rowling",
  price: 100,
  image:
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  category: "Horror",
  description: "Harry potter 2000",
};

const Cart = () => {
  const cartBooks = [{ sampleProduct }, { sampleProduct }, { sampleProduct }];

  let totalPrice: number = 0;

  if (cartBooks.length !== 0) {
    for (const c of cartBooks) {
      totalPrice += c.sampleProduct.price;
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card shadow="md" style={{ padding: "20px", width: "800px" }}>
        <Text weight={700} fz="xl">
          Shopping Cart
        </Text>
        {cartBooks.length === 0 ? (
          <Text weight={700}>Cart is currently empty</Text>
        ) : (
          <ul style={{ listStyle: "none", padding: 5 }}>
            {cartBooks.map((i, index) => (
              <li
                key={i.sampleProduct._id}
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
                  <Text weight={700}>{index + 1}</Text>
                  <img
                    src={i.sampleProduct.image}
                    alt={i.sampleProduct.title}
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
                  <Text weight={700}>{i.sampleProduct.title}</Text> by{" "}
                  {i.sampleProduct.author}
                </div>
                <div>
                  ${i.sampleProduct.price}
                  <Button color="red" compact style={{ marginLeft: "10px" }}>
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div>
            <Text weight={700}>Subtotal ({cartBooks.length} items)</Text>$
            {totalPrice.toFixed(2)}
          </div>
          <Button mt={"md"} size="lg">
            Checkout
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Cart;
