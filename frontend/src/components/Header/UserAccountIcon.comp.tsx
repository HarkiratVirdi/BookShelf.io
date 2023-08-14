import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  createStyles,
  Menu,
} from '@mantine/core';
import {
  IconChevronRight,
  IconLogout,
  IconMenuOrder,
} from '@tabler/icons-react';
import { authState } from '../../store/Auth/auth.selector';
import { useDispatch, useSelector } from 'react-redux';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';
import { useCookies } from 'react-cookie';
import { storeUserInfo } from '../../store/Auth/auth.reducer';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },
}));

const UserAccountIcon = () => {
  const { classes } = useStyles();
  const loginSlice = useSelector(authState);
  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);
  const dispatch = useDispatch();
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton className={classes.user}>
          <Group>
            <Avatar radius="xl" />

            <div style={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                {loginSlice.firstName} {loginSlice.lastName}
              </Text>

              <Text color="dimmed" size="xs">
                {loginSlice.email}
              </Text>
            </div>

            {<IconChevronRight size="0.9rem" stroke={1.5} />}
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>User</Menu.Label>
        <Link to="/userAccount">
          <Menu.Item icon={<IconSettings size={14} />}>Account</Menu.Item>
          <Menu.Divider />
        </Link>

        <Link to="/userbooks">
          <Menu.Item icon={<IconSettings size={14} />}>User Books</Menu.Item>
        </Link>

        <Link to="/orderHistory">
          <Menu.Item icon={<IconMenuOrder size={14} />}>
            Order History
          </Menu.Item>
        </Link>

        <Menu.Item
          onClick={() => {
            removeCookie('userInfo');
            dispatch(
              storeUserInfo({
                token: null,
                email: null,
                firstName: '',
                lastName: '',
              })
            );
          }}
          icon={<IconLogout size={14} />}
        >
          Log out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserAccountIcon;
