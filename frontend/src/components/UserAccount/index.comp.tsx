import React, { useEffect, useRef, useState } from 'react';
import { Title, Grid, TextInput, Textarea, FileInput } from '@mantine/core';
import { Card, Text, Button, Divider } from '@mantine/core';
import Layout from '../Layout/index.comp';
import Counter from '../Counter/index.comp';
import { useDispatch, useSelector } from 'react-redux';
import { authState } from '../../store/Auth/auth.selector';
import { addressState } from '../../store/Address/address.selector';
import { useUpdateAddressMutation } from '../../apis/addressApi';
import { storeAddressInfo } from '../../store/Address/address.reducer';
import { useUpdateUserMutation } from '../../apis/authApi';
import { storeUserInfo } from '../../store/Auth/auth.reducer';
import { getCookie } from '../../utils';

const UserAccount = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const authStore = useSelector(authState);
  const addressStore = useSelector(addressState);
  const [updateAddress] = useUpdateAddressMutation();
  const [updateUserInfo] = useUpdateUserMutation();
  const dispatch = useDispatch();
  const toggleEditMode = () => {
    setIsEditMode((prevEditMode) => !prevEditMode);
  };

  console.log('auth store', authStore, addressStore);

  const initialAddress = {
    street: '1 Yonge St',
    city: 'Toronto',
    province: 'ON',
    postal: 'M1M2N2',
    country: 'Canada',
  };

  const [generalInfo, setGeneralInfo] = useState(
    authStore || { firstName: '', lastName: '', email: '', password: '' }
  );
  const [addressInfo, setAddressInfo] = useState(
    addressStore || initialAddress
  );

  const onEditAddress = async () => {
    const obj = {
      addressLine1: addressInfo.street,
      addressLine2: ' ',
      city: addressInfo.city,
      province: addressInfo.province,
      postalCode: addressInfo.postal,
      country: 'Canada',
    };

    const data: any = await updateAddress(obj);

    if (data?.data?.status === 'Updated address') {
      dispatch(storeAddressInfo(addressInfo));
    }

    const userInfo = {
      firstName: generalInfo.firstName,
      lastName: generalInfo.lastName,
      token: getCookie('userInfo')?.token,
      email: getCookie('userInfo')?.email,
    };

    const userData: any = await updateUserInfo(userInfo);
    if (userData?.data?.status === 'User info updated') {
      dispatch(storeUserInfo(userInfo));
      alert('Address and user Info updated successfully');
    }
  };

  const changeUserInfo = (e) => {
    return setGeneralInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const changeAddressState = (e) => {
    return setAddressInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
          <TextInput
            label="First Name"
            value={generalInfo?.firstName}
            disabled={!isEditMode}
            name="firstName"
            onChange={changeUserInfo}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            name="lastName"
            onChange={changeUserInfo}
            label="Last Name"
            value={generalInfo?.lastName}
            disabled={!isEditMode}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput label="Email" value={generalInfo?.email} disabled />
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput label="Password" value="********" disabled />
        </Grid.Col>
      </Grid>

      <Text mt={'xl'} weight={700} fz="md">
        Address
      </Text>
      <Grid gutter="md">
        <Grid.Col span={12}>
          <TextInput
            label="Address Line 1"
            placeholder={addressInfo?.street}
            disabled={!isEditMode}
            name={'street'}
            onChange={changeAddressState}
          />
        </Grid.Col>

        <Grid.Col span={3}>
          <TextInput
            label="City"
            name={'city'}
            value={addressInfo.city}
            disabled={!isEditMode}
            onChange={changeAddressState}
          />
        </Grid.Col>

        <Grid.Col span={3}>
          <TextInput
            label="Province"
            name={'province'}
            value={addressInfo.province}
            disabled={!isEditMode}
            onChange={changeAddressState}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <TextInput
            label="Postal Code"
            name={'postal'}
            value={addressInfo?.postal}
            disabled={!isEditMode}
            onChange={changeAddressState}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <TextInput label="Country" value={'Canada'} disabled />
        </Grid.Col>
      </Grid>

      {isEditMode ? (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button mt={'md'} size="md" color="red" onClick={toggleEditMode}>
            Cancel
          </Button>
          <Button onClick={onEditAddress} mt={'md'} size="md">
            Save
          </Button>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button mt={'md'} size="md" onClick={toggleEditMode}>
            Edit
          </Button>
        </div>
      )}
    </Layout>
  );
};

export default UserAccount;
