import React from 'react';
import { TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

const AddressForm = () => {
  return (
    <form>
      <TextInput label={'Street'} mt={'md'} placeholder="Ex: Burrad Street" />
      <TextInput label={'City'} mt={'md'} placeholder="Ex: Vancouver" />
      <TextInput label={'Postal Code'} mt={'md'} placeholder="Ex: L6Z 3Y4" />
      <TextInput
        label={'Province'}
        mt={'md'}
        placeholder="Ex: British Columbia"
      />
    </form>
  );
};

export default AddressForm;
