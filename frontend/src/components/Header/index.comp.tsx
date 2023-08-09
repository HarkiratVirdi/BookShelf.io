import {
  createStyles,
  Header,
  Group,
  Burger,
  rem,
  Title,
  Autocomplete,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';
import { useGetBooksQuery } from '../../apis/bookApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { authSlice } from '../../store/Auth/auth.reducer';
import { authState } from '../../store/Auth/auth.selector';
import UserAccountIcon from './UserAccountIcon.comp';
import { BsCart2 } from 'react-icons/bs';
import { IBook } from '../../interfaces/Book.interface';
import SelectSearch from 'react-select-search';
import './search.css';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
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

const linksLogin = [{ label: 'Login', link: '/login' }];

const HeaderSearch = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const { data, isLoading, isError } = useGetBooksQuery();
  const [autoCompleteValue, setAutoCompleteValue] = useState('');
  const loginSlice = useSelector(authState);
  const options = data?.books?.map((book: IBook) => {
    return { value: book._id, name: book.title };
  });
  const navigate = useNavigate();

  const onChangeAutoComplete = (e) => {
    setAutoCompleteValue(e);

    setTimeout(() => {
      navigate(`/product/${e}`);
    }, 200);
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
          <Link to="/">
            <Title color="darkBlue" order={3}>
              Bookshelf.io
            </Title>
          </Link>
        </Group>

        <Group>
          {!isLoading && (
            <SelectSearch
              search
              options={options}
              onChange={(e) => onChangeAutoComplete(e)}
              closeOnSelect={true}
              value={autoCompleteValue}
              placeholder="Search Books"
            />
          )}
          {!loginSlice.token ? (
            items(linksLogin)
          ) : (
            <div>
              <UserAccountIcon />
            </div>
          )}

          {loginSlice.token && (
            <Link to="/cart">
              <BsCart2 size={'20px'} />
            </Link>
          )}
        </Group>
      </div>
    </Header>
  );
};

export default HeaderSearch;
