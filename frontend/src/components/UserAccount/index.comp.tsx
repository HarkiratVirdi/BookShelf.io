import React, { useEffect, useRef, useState } from "react";
import { Title, Grid, TextInput, Textarea, FileInput } from "@mantine/core";
import ProductCard from "../Product/index.comp";
import { Card, Text, Button, Divider } from "@mantine/core";
import { IBook } from "../../interfaces/Book.interface";
import Layout from "../Layout/index.comp";
import Counter from "../Counter/index.comp";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserAccount = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode((prevEditMode) => !prevEditMode);
  };
  return (
    <Layout>
      <Text weight={700} fz="lg">
        Account Information
      </Text>
      <Text weight={700} fz="md">
        General
      </Text>
      <Grid gutter="md">
        <Grid.Col span={6}>
          {isEditMode ? (
            <TextInput label="First Name" placeholder="First" />
          ) : (
            <TextInput label="First Name" value="First" disabled />
          )}
        </Grid.Col>
        <Grid.Col span={6}>
          {isEditMode ? (
            <TextInput label="Last Name" placeholder="Last" />
          ) : (
            <TextInput label="Last Name" value="Last" disabled />
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          {isEditMode ? (
            <TextInput
              label="Email"
              type="email"
              placeholder="firstlast@gmail.com"
            />
          ) : (
            <TextInput label="Email" value="firstlast@gmail.com" disabled />
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          {isEditMode ? (
            <TextInput label="Password" type="password" />
          ) : (
            <TextInput label="Password" placeholder="********" disabled />
          )}
        </Grid.Col>
      </Grid>

      <Text weight={700} fz="md">
        Address
      </Text>
      <Grid gutter="md">
        <Grid.Col span={12}>
          {isEditMode ? (
            <TextInput label="Address Line 1" placeholder="1 Yonge St" />
          ) : (
            <TextInput label="Address Line 1" value="1 Yonge St" disabled />
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          {isEditMode ? (
            <TextInput label="Address Line 2" placeholder="2 Main St" />
          ) : (
            <TextInput label="Address Line 2" value="2 Main St" disabled />
          )}
        </Grid.Col>
        <Grid.Col span={4}>
          {isEditMode ? (
            <TextInput label="City" value="Toronto" />
          ) : (
            <TextInput label="City" placeholder="Toronto" disabled />
          )}
        </Grid.Col>

        <Grid.Col span={4}>
          {isEditMode ? (
            <TextInput label="Province" value="ON" />
          ) : (
            <TextInput label="Province" placeholder="ON" disabled />
          )}
        </Grid.Col>
        <Grid.Col span={4}>
          {isEditMode ? (
            <TextInput label="Postal Code" value="M1M2N2" />
          ) : (
            <TextInput label="Postal Code" placeholder="M1M2N2" disabled />
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          {isEditMode ? (
            <TextInput label="Country" value="Canada" />
          ) : (
            <TextInput label="Country" placeholder="Canada" disabled />
          )}
        </Grid.Col>
      </Grid>

      {isEditMode ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button mt={"md"} size="md" color="red" onClick={toggleEditMode}>
            Cancel
          </Button>
          <Button mt={"md"} size="md">
            Save
          </Button>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button mt={"md"} size="md" onClick={toggleEditMode}>
            Edit
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default UserAccount;
