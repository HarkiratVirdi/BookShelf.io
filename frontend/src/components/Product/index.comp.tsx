import { IconHeart } from '@tabler/icons-react';
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
} from '@mantine/core';
import { IBook } from '../../interfaces/Book.interface';
import { Link } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';

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
  },
}));

const ProductCard = (props: IBook) => {
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
          styles={{ image: { objectFit: 'contain' } }}
          src={image}
          alt={title}
          height={180}
        />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm">{author}</Badge>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          {description}
        </Text>
        {features?.length > 0 && (
          <>
            <Text mt="md" className={classes.label} c="dimmed">
              Perfect if you like
            </Text>
            <Group spacing={7} mt={5}>
              {features}
            </Group>
          </>
        )}
      </Card.Section>

      <Group mt="xs">
        <Link to={`/product/${_id}`}>
          <Button radius="md" style={{ flex: 1 }}>
            Go the product page
          </Button>
        </Link>
        <ActionIcon variant="default" radius="md" size={36}>
          <BsCartPlus />
        </ActionIcon>
      </Group>
    </Card>
  );
};

export default ProductCard;
