import React, { useState } from 'react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  FileInput,
  Textarea,
  createStyles,
  rem,
  Title,
  Grid,
  Modal,
  TextInput,
} from '@mantine/core';
import { IBook } from '../../interfaces/Book.interface';
import {
  useCreateBookMutation,
  useDeleteBookMutation,
  useGetBooksQuery,
} from '../../apis/bookApi';
import { Link } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';

const sampleProduct: IBook = {
  _id: '1',
  title: 'Harry Potter',
  author: 'JK rowling',
  price: '$100',
  image:
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  genre: ['Horror'],
  description: 'Harry potter 2000',
  user: '',
};

const UserBooks = () => {
  const { data, isLoading, isError } = useGetBooksQuery();
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    price: '',
    description: '',
    image: null,
  });

  const [createBook] = useCreateBookMutation();

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  const closeModal = () => {
    setModalOpen(false);
  };

  const openAddBookModal = () => {
    setModalOpen(true);
  };

  const postNewBook = async () => {
    const data: any = await createBook(formData);

    if (data?.data?.status === 'ok') {
      alert('book posted');
    }
  };

  return (
    <div>
      <Title order={2} mb={'md'}>
        My Books
      </Title>
      <Button onClick={openAddBookModal} mb={'xl'} leftIcon={<BiPlus />}>
        Add Books
      </Button>

      <Grid gutter="xl">
        {data?.books?.map((book) => (
          <Grid.Col span={3}>
            <UserProductCard {...book} />
          </Grid.Col>
        ))}
      </Grid>

      <Modal opened={modalOpen} onClose={closeModal} title="Add New Book">
        <Grid gutter="md">
          <Grid.Col span={6}>
            <TextInput
              label="Title"
              placeholder="Harry Potter"
              value={formData.title}
              onChange={(event) => handleChange('title', event.target.value)}
              required
            />
            <TextInput
              label="Author"
              placeholder="J. K. Rowling"
              value={formData.author}
              onChange={(event) => handleChange('author', event.target.value)}
              required
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Genre(s)"
              placeholder="Fiction, Fantasy"
              value={formData.genre}
              onChange={(event) => handleChange('genre', event.target.value)}
              required
            />
            <TextInput
              label="Price ($)"
              placeholder="20.00"
              type="number"
              value={formData.price}
              onChange={(event) => handleChange('price', event.target.value)}
              required
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Textarea
              label="Description"
              placeholder="Enter book description here"
              value={formData.description}
              onChange={(event) =>
                handleChange('description', event.target.value)
              }
            />
            <FileInput placeholder="Click to Upload File" label="Image" />
          </Grid.Col>

          <Grid.Col span={12}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link to="/">
                <Button mt={'md'} size="md" color="red">
                  Cancel
                </Button>
              </Link>
              <Button onClick={postNewBook} mt={'md'} size="md" type="submit">
                Post
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Modal>
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
    height: 40,
  },
}));

const UserProductCard = (props: IBook) => {
  const { classes, theme } = useStyles();
  const { _id, image, title, author, description, genre, price } = props;
  const [deleteBook] = useDeleteBookMutation();

  const features = genre?.map((gen) => (
    <Badge color={theme.colorScheme === 'dark' ? 'dark' : 'gray'} key={gen}>
      {gen}
    </Badge>
  ));

  const removeBook = async (id) => {
    const data: any = await deleteBook(id);

    console.log('data', data);

    if (data?.data?.status === 'ok') {
      alert('deleted book');
    }
  };

  // console.log('features', features, genre);

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image
          styles={{ image: { objectFit: 'cover' } }}
          src={image}
          alt={title}
          height={180}
        />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text lineClamp={1} fz="lg" fw={500}>
            {title}
          </Text>
        </Group>
        <Badge size="sm">{author}</Badge>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text lineClamp={2} mt="md" className={classes.label} c="dimmed">
          {description}
        </Text>
        {features?.length > 0 && (
          <>
            <Group spacing={7} mt={5}>
              {features}
            </Group>
          </>
        )}
      </Card.Section>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={`/product/${_id}`}>
          <Button mt={'sm'} size="sm">
            Go to Post
          </Button>
        </Link>
        <Button onClick={() => removeBook(_id)} mt={'sm'} size="sm" color="red">
          Remove Post
        </Button>
      </div>
    </Card>
  );
};

export default UserBooks;
