import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
  rem,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useGetBooksQuery } from '../../apis/bookApi';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { authSlice } from '../../store/Auth/auth.reducer';
import { authState } from '../../store/Auth/auth.selector';
import UserAccountIcon from './UserAccountIcon.comp';
import { BsCart2 } from 'react-icons/bs';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    overflow: 'hidden',
  },

  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string }[];
}

const linksCategories = [{ label: 'Categories', link: '/categories' }];
const linksLogin = [{ label: 'Login', link: '/login' }];

const HeaderSearch = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const { data, isLoading, isError } = useGetBooksQuery();
  const [autoCompleteValue, setAutoCompleteValue] = useState('');
  const loginSlice = useSelector(authState);
  const searchData = data?.books?.map((book) => book?.title);

  const onChangeAutoComplete = (e) => {
    setAutoCompleteValue(e);
  };

  const items = (arrLinks) =>
    arrLinks.map((link) => (
      <Link to={link.link} className={classes.link}>
        {link.label}
      </Link>
    ));

  return (
    <Header height={56} className={classes.header} mb={12}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" />
          <Link to="/">
            <Title color="darkBlue" order={3}>
              Bookshelf.io
            </Title>
          </Link>
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items(linksCategories)}
          </Group>
          {!isLoading && (
            <Autocomplete
              className={classes.search}
              placeholder="Search"
              icon={<IconSearch size="1rem" stroke={1.5} />}
              value={autoCompleteValue}
              onChange={onChangeAutoComplete}
              data={searchData}
            />
          )}
          {!loginSlice.token ? (
            items(linksLogin)
          ) : (
            <div>
              <UserAccountIcon />
            </div>
          )}
          <Link to="/cart">
            <BsCart2 size={'20px'} />
          </Link>
        </Group>
      </div>
    </Header>
  );
};

export default HeaderSearch;
