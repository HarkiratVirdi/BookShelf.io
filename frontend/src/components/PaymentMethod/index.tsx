import React, { Dispatch, SetStateAction } from 'react';
import { Radio, Group } from '@mantine/core';

interface IPaymentMethod {
  value: string;
  selectValue: Dispatch<SetStateAction<string>>;
}

const PaymentMethod = ({ value, selectValue }: IPaymentMethod) => {
  const changeRadioValue = (e) => {
    selectValue(e.target.value);
  };

  return (
    <div>
      <Radio.Group
        name="paymentMethods"
        label="Please select one of the Payment methods"
        description="Payment Method"
        withAsterisk
      >
        <Group onChange={changeRadioValue} mt="xs">
          <Radio checked={value === 'Paypal'} value="Paypal" label="Paypal" />
          <Radio
            checked={value === 'Cash'}
            value="Cash"
            label="Cash on Delivery"
          />
        </Group>
      </Radio.Group>
    </div>
  );
};

export default PaymentMethod;
