import React from 'react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
  Title,
  Grid,
} from '@mantine/core';
import { IBook } from '../../interfaces/Book.interface';
import { useGetBooksQuery } from '../../apis/bookApi';
import { Link } from 'react-router-dom';

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
  const { data, isLoading, isError } = useGetBooksQuery()

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <Title order={2} mb={'md'}>
        My Books
      </Title>
      <Grid gutter="xl">
        {data?.books?.map((book) => (
          <Grid.Col span={3}>
            <UserProductCard {...book} />
          </Grid.Col>
        ))}
      </Grid>
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

  const features = genre?.map((gen) => (
    <Badge color={theme.colorScheme === 'dark' ? 'dark' : 'gray'} key={gen}>
      {gen}
    </Badge>
  ));

  console.log('features', features, genre);

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

      <Group mt="xs">
        <Link to={`/product/${_id}`}>
        <Button mt={"sm"} size="sm" color="red" >
              Remove Post
            </Button>
        </Link>
      </Group>
    </Card>
  );
};

export default UserBooks;

