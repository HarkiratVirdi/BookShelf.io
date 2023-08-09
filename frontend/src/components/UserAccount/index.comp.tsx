import React, { useEffect, useRef, useState } from 'react';
import { Title, Grid, TextInput, Textarea, FileInput } from '@mantine/core';
import { Card, Text, Button, Divider } from '@mantine/core';
import Layout from '../Layout/index.comp';
import Counter from '../Counter/index.comp';
import { useDispatch, useSelector } from 'react-redux';

const UserAccount = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode((prevEditMode) => !prevEditMode);
  };

  const initialGeneral = {
    firstName: 'First',
    lastName: 'Last',
    email: 'firstlast@gmail.com',
    password: '********',
  };

  const initialAddress = {
    addressLine1: '1 Yonge St',
    addressLine2: '250 Main St Unit 12',
    city: 'Toronto',
    province: 'ON',
    postalCode: 'M1M2N2',
    country: 'Canada',
  };
  const [generalInfo, setGeneralInfo] = useState(initialGeneral);
  const [addressInfo, setAddressInfo] = useState(initialAddress);

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
            <TextInput label="First Name" placeholder={generalInfo.firstName} />
          ) : (
            <TextInput
              label="First Name"
              value={generalInfo.firstName}
              disabled
            />
          )}
        </Grid.Col>
        <Grid.Col span={6}>
          {isEditMode ? (
            <TextInput label="Last Name" placeholder={generalInfo.lastName} />
          ) : (
            <TextInput
              label="Last Name"
              value={generalInfo.lastName}
              disabled
            />
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          {isEditMode ? (
            <TextInput
              label="Email"
              type="email"
              placeholder={generalInfo.email}
            />
          ) : (
            <TextInput label="Email" value={generalInfo.email} disabled />
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          {isEditMode ? (
            <TextInput label="Password" type="password" />
          ) : (
            <TextInput label="Password" value="********" disabled />
          )}
        </Grid.Col>
      </Grid>

      <Text weight={700} fz="md">
        Address
      </Text>
      <Grid gutter="md">
        <Grid.Col span={12}>
          {isEditMode ? (
            <TextInput
              label="Address Line 1"
              placeholder={addressInfo.addressLine1}
            />
          ) : (
            <TextInput
              label="Address Line 1"
              value={addressInfo.addressLine1}
              disabled
            />
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          {isEditMode ? (
            <TextInput
              label="Address Line 2"
              placeholder={addressInfo.addressLine2}
            />
          ) : (
            <TextInput
              label="Address Line 2"
              value={addressInfo.addressLine2}
              disabled
            />
          )}
        </Grid.Col>
        <Grid.Col span={3}>
          {isEditMode ? (
            <TextInput label="City" placeholder={addressInfo.city} />
          ) : (
            <TextInput label="City" value={addressInfo.city} disabled />
          )}
        </Grid.Col>

        <Grid.Col span={3}>
          {isEditMode ? (
            <TextInput label="Province" placeholder={addressInfo.province} />
          ) : (
            <TextInput label="Province" value={addressInfo.province} disabled />
          )}
        </Grid.Col>
        <Grid.Col span={3}>
          {isEditMode ? (
            <TextInput
              label="Postal Code"
              placeholder={addressInfo.postalCode}
            />
          ) : (
            <TextInput
              label="Postal Code"
              value={addressInfo.postalCode}
              disabled
            />
          )}
        </Grid.Col>
        <Grid.Col span={3}>
          {isEditMode ? (
            <TextInput label="Country" placeholder={addressInfo.country} />
          ) : (
            <TextInput label="Country" value={addressInfo.country} disabled />
          )}
        </Grid.Col>
      </Grid>

      {isEditMode ? (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button mt={'md'} size="md" color="red" onClick={toggleEditMode}>
            Cancel
          </Button>
          <Button mt={'md'} size="md">
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
