import React, { useEffect, useRef, useState } from "react";
import { Title, Grid, TextInput, Select, Radio } from "@mantine/core";
import { Card, Text, Button, Divider } from "@mantine/core";
import { IBook } from "../../interfaces/Book.interface";
import Layout from "../Layout/index.comp";
import Counter from "../Counter/index.comp";
import { FaCcPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { Link } from "react-router-dom";

const sampleProduct: IBook = {
  _id: "1",
  title: "Harry Potter",
  author: "JK rowling",
  price: 100,
  image:
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  genre: ["Horror"],
  description: "Harry potter 2000",
  user: "",
};

const sampleAddress = {
  addressLine1: "100 Testing St",
  city: "Toronto",
  province: "ON",
  postalCode: "M3H1P2",
  country: "Canada",
};

const sampleCustomer = {
  _id: "1",
  firstName: "first",
  lastName: "last",
  email: "test@gmail.com",
  address: sampleAddress.addressLine1,
  city: sampleAddress.city,
  province: sampleAddress.province,
  country: sampleAddress.country,
};

const Checkout = () => {
  const cartBooks = [{ sampleProduct }, { sampleProduct }];
  let totalPrice: number = 0;

  if (cartBooks.length > 0) {
    for (const c of cartBooks) {
      totalPrice += c.sampleProduct.price;
    }
  }

  return (
    <Layout>
      <Text weight={700} fz="xl">
        Checkout
      </Text>
      <Grid gutter="md">
        <Grid.Col
          span={12}
          sm={6}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Card shadow="sm" padding="md" style={{ flex: 1, overflowY: "auto" }}>
            <Text weight={700} fz="lg">
              Review Items
            </Text>
            {cartBooks.map((product) => (
              <div
                key={product.sampleProduct._id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={product.sampleProduct.image}
                  alt={product.sampleProduct.title}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10%",
                    objectFit: "cover",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                />
                <div style={{ flex: 1, marginRight: "10px" }}>
                  <Text weight={700}>{product.sampleProduct.title} </Text> by{" "}
                  {product.sampleProduct.author}
                </div>
                <p style={{ margin: "0" }}>
                  ${product.sampleProduct.price.toFixed(2)}
                </p>
              </div>
            ))}
            <div style={{ marginTop: "16px" }}>
              <Text weight={700}>Subtotal ({cartBooks.length} items)</Text>$
              {totalPrice}
              <Link to="/cart">
              <Text weight={700}
              style={{
                position: "absolute",
                bottom: "16px",
                right: "16px",
                color: "#007bff", 
                cursor: "pointer",
              }}
            >
              Return to Cart
            </Text>
            </Link>
            </div>

          </Card>
          <div style={{ margin: "16px 0" }}></div>
          <Card shadow="sm" padding="md" style={{ flex: 1 }}>
            <Text weight={700} fz="lg">
              Shipping Information
            </Text>
            <Text>
              <strong>Name:</strong> {sampleCustomer.firstName}{" "}
              {sampleCustomer.lastName}
            </Text>

            <Text>
              <strong>Address:</strong> {sampleCustomer.address}
            </Text>
            <Text>
              <strong>City:</strong> {sampleCustomer.city}
            </Text>
            <Text>
              <strong>Province: </strong>
              {sampleCustomer.province}
            </Text>
            <Text>
              <strong>Email: </strong>
              {sampleCustomer.email}
            </Text>

            <Button
              mt={"md"}
              size="md"
              style={{ position: "absolute", bottom: "16px", right: "16px" }}
            >
              Edit
            </Button>
          </Card>
        </Grid.Col>

        <Grid.Col span={12} sm={6}>
          <Card shadow="sm" padding="md" style={{ height: "100%" }}>
            <Text weight={700} fz="lg">
              Payment Information
            </Text>

            <TextInput
              label={
                <Text weight={700} fz="md">
                  Coupon Code
                </Text>
              }
              placeholder="Enter coupon code"
            />

            <Radio.Group
              label={<Text weight={700}>Payment Type</Text>}
              defaultValue="paypal"
              onChange={() => {}}
              size="md"
            >
              <Text
                fz="sm"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <Radio
                  value="paypal"
                  style={{ alignItems: "center", marginRight: "10px" }}
                />
                PayPal
              </Text>
              <Text
                fz="sm"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <Radio value="visa" style={{ marginRight: "8px" }} />
                Visa
              </Text>
              <Text
                fz="sm"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <Radio value="mastercard" style={{ marginRight: "8px" }} />
                Mastercard
              </Text>
            </Radio.Group>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              <FaCcPaypal style={{ fontSize: "24px", margin: "0 8px" }} />
              <FaCcVisa style={{ fontSize: "24px", margin: "0 8px" }} />
              <FaCcMastercard style={{ fontSize: "24px", margin: "0 8px" }} />
            </div>
            <div style={{ marginTop: "16px" }}>
              <Text td="underline" weight={700}>
                Final total: ${totalPrice}
              </Text>
            </div>
            <TextInput
              label="Email Address"
              placeholder="Enter email address"
            />
            <TextInput
              label="Card Holder Name"
              placeholder="Enter card holder name"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <Link to="/">
                <Button mt={"md"} size="lg" color="red">
                  Cancel
                </Button>
              </Link>
              <Button mt={"md"} size="lg">
                Complete
              </Button>
            </div>
          </Card>
        </Grid.Col>
      </Grid>
    </Layout>
  );
};

export default Checkout;
