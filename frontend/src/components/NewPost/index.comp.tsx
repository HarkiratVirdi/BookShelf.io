import React, { useEffect, useRef, useState } from "react";
import { Title, Grid, TextInput, Textarea, FileInput } from "@mantine/core";
import { Text, Button } from "@mantine/core";
import Layout from "../Layout/index.comp";
import Counter from "../Counter/index.comp";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <Layout>
      <Text weight={700} fz="lg">
        New Post
      </Text>
      <Grid gutter="md">
        <Grid.Col span={6}>
          <TextInput
            label="Title"
            placeholder="Harry Potter"
            value={formData.title}
            onChange={(event) => handleChange("name", event.target.value)}
            required
          />
          <TextInput
            label="Author"
            placeholder="J. K. Rowling"
            value={formData.author}
            onChange={(event) => handleChange("author", event.target.value)}
            required
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            label="Genre(s)"
            placeholder="Fiction, Fantasy"
            value={formData.genre}
            onChange={(event) => handleChange("genre", event.target.value)}
            required
          />
          <TextInput
            label="Price ($)"
            placeholder="20.00"
            type="number"
            value={formData.price}
            onChange={(event) => handleChange("price", event.target.value)}
            required
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
            label="Description"
            placeholder="Enter book description here"
            value={formData.description}
            onChange={(event) =>
              handleChange("description", event.target.value)
            }
          />
        </Grid.Col>
        <Grid.Col span={2}>          
          <FileInput placeholder="Click to Upload File" label="Image" />         
        </Grid.Col>
        
        <Grid.Col span={12}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/">
              <Button mt={"md"} size="md" color="red">
                Cancel
              </Button>
            </Link>
            <Button mt={"md"} size="md" type="submit">
              Post
            </Button>
          </div>
        </Grid.Col>
      </Grid>
    </Layout>
  );
};

export default NewPost;
