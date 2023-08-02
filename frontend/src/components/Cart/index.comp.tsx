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

const Cart = () => {
  const { items: cartBooks } = useSelector(cartState);
  let totalPrice: number = 0;

  if (cartBooks.length > 0) {
    for (const c of cartBooks) {
      totalPrice += c.price;
    }
  }

  return (
    <Layout>
      <div>
        <Text weight={700} fz="xl">
          Shopping Cart
        </Text>
        {cartBooks.length === 0 ? (
          <Text weight={700}>Cart is currently empty</Text>
        ) : (
          <ul style={{ listStyle: "none", padding: 5 }}>
            {cartBooks.map((product, index) => (
              <div key={product._id}>
                <CartProduct product={product} index={index} />
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
        >
          <div>
            <Text weight={700}>Subtotal ({cartBooks.length} items)</Text>$
            {totalPrice}
          </div>

          {cartBooks.length === 0 ? (
            <Button disabled mt={"md"} size="lg">
              Checkout
            </Button>
          ) : (
            <Link to="/checkout">
              <Button mt={"md"} size="lg">
                Checkout
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
};

const CartProduct = ({ product, index }) => {
  const itemQuantity = useRef(null);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(
    product?.quantity ? product?.quantity : 1
  );

  useEffect(() => {
    const productWithQuantity = {
      ...product,
      quantity: Number(itemQuantity.current.value),
    };

    dispatch(changeCartQuantity(productWithQuantity));
  }, [counter]);

  const removeCartItem = (product) => {
    dispatch(deleteCartItems(product));
  };

  return (
    <li
      key={product._id}
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
          src={product.image}
          alt={product.title}
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
        <Text weight={700}>{product.title}</Text> by {product.author}
      </div>
      <div className="flex items-center">
        <span className="mr-2">${product.price}</span>
        <div className="w-36">
          <Counter
            setCounter={setCounter}
            counter={counter}
            ref={itemQuantity}
          />
        </div>

        <Button onClick={() => removeCartItem(product)} ml={"sm"} color="red">
          Remove
        </Button>
      </div>
    </li>
  );
};

export default Cart;
