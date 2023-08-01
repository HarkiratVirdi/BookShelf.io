import React, { useEffect, useRef, useState } from 'react';
import { Title, Grid, TextInput, Select } from '@mantine/core';
import ProductCard from '../Product/index.comp';
import { Card, Text, Button, Divider } from '@mantine/core';
import { IBook } from '../../interfaces/Book.interface';
import Layout from '../Layout/index.comp';
import Counter from '../Counter/index.comp';

const sampleProduct: IBook = {
    _id: '1',
    title: 'Harry Potter',
    author: 'JK rowling',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    genre: ['Horror'],
    description: 'Harry potter 2000',
    user: '',
  };

const sampleAddress = {
    addressLine1: "100 Testing St",
    city: "Toronto",
    province: "ON",
    postalCode: "M3H1P2",
    country: "Canada"
}

const sampleCustomer =  {
    _id: '1',
    firstName: 'first',
    lastName: 'last',
    email: 'test@gmail.com',
    address: sampleAddress.addressLine1,
    city: sampleAddress.city,
    province: sampleAddress.province,
    country: sampleAddress.country
}

const Checkout = () => {
    const sampleProducts = [{sampleProduct}, {sampleProduct}];

    return (
    <Layout>
      <Grid gutter="md">
        <Card shadow="sm" padding="md">
          <h3>Review Items</h3>
          {sampleProducts.map((product) => (
            <div key={product.sampleProduct._id}>
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
              <p>{product.sampleProduct.title}</p>
              <p>{product.sampleProduct.price}</p>
            </div>
          ))}
        </Card>
        <Card shadow="sm" padding="md">
          <h3>Shipping Information</h3>
          <p>Name: {sampleCustomer.firstName} {" "} {sampleCustomer.lastName}</p>
          <p>Address: {sampleCustomer.address}</p>
          <p>City: {sampleCustomer.city}</p>
          <p>Province: {sampleCustomer.province}</p>
          <p>Email: {sampleCustomer.email}</p>         
        </Card>
      <Grid.Col span={12} sm={6}>
          <Card shadow="sm" padding="md" style={{ height: "100%" }}>
            <h3>Payment Information</h3>
            <TextInput label="Coupon Code" placeholder="Enter coupon code" />
            <Select
              label="Payment Type"
              placeholder="Select payment type"
              data={[
                { value: "credit_card", label: "Credit Card" },
                { value: "paypal", label: "PayPal" },
                { value: "bank_transfer", label: "Bank Transfer" },
              ]}
            />
            <TextInput label="Email Address" placeholder="Enter email address" />
            <TextInput label="Card Holder Name" placeholder="Enter card holder name" />
          </Card>
        </Grid.Col>
      </Grid>
    </Layout>
    )
}

export default Checkout;