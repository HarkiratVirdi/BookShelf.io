import React, { ChangeEvent, useState } from 'react';
import { TextInput } from '@mantine/core';

interface IAddressForm {
  addressInfo: Record<string, string>;
  changeAddressInfo: (value: ChangeEvent<HTMLInputElement>) => void;
}

const AddressForm = ({ addressInfo, changeAddressInfo }: IAddressForm) => {
  return (
    <form>
      <TextInput
        name={'street'}
        label={'Street'}
        mt={'md'}
        value={addressInfo.street}
        onChange={changeAddressInfo}
        placeholder="Ex: Burrad Street"
      />
      <TextInput
        value={addressInfo.city}
        name={'city'}
        label={'City'}
        mt={'md'}
        onChange={changeAddressInfo}
        placeholder="Ex: Vancouver"
      />
      <TextInput
        name={'postal'}
        value={addressInfo.postal}
        label={'Postal Code'}
        mt={'md'}
        onChange={changeAddressInfo}
        placeholder="Ex: L6Z 3Y4"
      />
      <TextInput
        name={'province'}
        label={'Province'}
        value={addressInfo.province}
        onChange={changeAddressInfo}
        mt={'md'}
        placeholder="Ex: British Columbia"
      />
    </form>
  );
};

export default AddressForm;
