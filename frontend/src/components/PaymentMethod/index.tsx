import React from 'react';
import { Radio, Group } from '@mantine/core';

const PaymentMethod = () => {
  return (
    <div>
      <Radio.Group
        name="paymentMethods"
        label="Please select one of the Payment methods"
        description="Payment Method"
        withAsterisk
      >
        <Group mt="xs">
          <Radio value="Paypal" label="Paypal" />
          <Radio value="Cash" label="Cash on Delivery" />
        </Group>
      </Radio.Group>
    </div>
  );
};

export default PaymentMethod;
