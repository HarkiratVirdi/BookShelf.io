import {
  Card,
  Group,
  Text,
  Menu,
  ActionIcon,
  Image,
  SimpleGrid,
  rem,
} from '@mantine/core';
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';
import { IBook } from '../../interfaces/Book.interface';

const Product = (props: IBook) => {
  const { name, price, author, seller, genre, images } = props;

  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Text weight={500}>
            {name} | {author} | {price} | {genre}
          </Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon>
                <IconDots size="1rem" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<IconFileZip size={rem(14)} />}>
                Add to Cart
              </Menu.Item>
              <Menu.Item icon={<IconEye size={rem(14)} />}>Favorites</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>

      <Card.Section mt="sm">
        <Image src="https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
      </Card.Section>

      <Card.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={2}>
          {images.map((image) => (
            <Image src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </Card.Section>
    </Card>
  );
};

export default Product;
