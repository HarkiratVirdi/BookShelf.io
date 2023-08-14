import React, { useState, useEffect } from 'react';
import Checkout from '../../components/Checkout/index.comp';
import HeaderSearch from '../../components/Header/index.comp';
import FooterLinks from '../../components/Footer/index.comp';
import { Stepper, Button, Group, Card, Text } from '@mantine/core';
import Layout from '../../components/Layout/index.comp';
import PaymentMethod from '../../components/PaymentMethod';
import AddressForm from '../../components/AddressForm';
import { useDispatch, useSelector } from 'react-redux';
import { authState } from '../../store/Auth/auth.selector';
import { useNavigate } from 'react-router-dom';
import { storeAddressInfo } from '../../store/Address/address.reducer';
import {
  useGetAddressQuery,
  usePostAddressMutation,
} from '../../apis/addressApi';
import { addressState } from '../../store/Address/address.selector';

const CheckoutPage = () => {
  const [active, setActive] = useState(0);
  const authStore = useSelector(authState);
  const navigate = useNavigate();
  const [highestStepVisited, setHighestStepVisited] = useState(active);
  const dispatch = useDispatch();
  const [storeAddressApi] = usePostAddressMutation();
  const addressSlice = useSelector(addressState);
  const { data: savedAddress, isLoading } = useGetAddressQuery();

  console.log('address api', savedAddress);

  const [addressInfo, setAddressInfo] = useState({
    street: '',
    city: '',
    postal: '',
    province: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    if (!authStore.email) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    if (savedAddress) {
      const obj = {
        street: savedAddress.address.addressLine1,
        city: savedAddress.address.city,
        postal: savedAddress.address.postalCode,
        province: savedAddress.address.province,
      };

      dispatch(storeAddressInfo(obj));

      setAddressInfo((prev) => ({
        ...prev,
        ...obj,
      }));
    }
  }, [isLoading]);

  const shouldAllowSelectStep = (step: number) =>
    highestStepVisited >= step && active !== step;

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  const onAddressSubmit = async () => {
    const obj = {
      addressLine1: addressInfo.street,
      addressLine2: ' ',
      city: addressInfo.city,
      province: addressInfo.province,
      postalCode: addressInfo.postal,
      country: 'CA',
    };

    const data: any = await storeAddressApi(obj);
    if (data?.status === 'ok') {
      dispatch(storeAddressInfo(addressInfo));
    }
  };

  const changeAddressInfo = (e) => {
    setAddressInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <HeaderSearch />
      <Layout>
        <div className="mt-12 mx-4">
          <Stepper active={active} onStepClick={setActive} breakpoint="sm">
            <Stepper.Step label="Address Info" description="Shipment Details">
              <div className="flex justify-center">
                <Card shadow="md" className="w-96" padding="xl">
                  <AddressForm
                    addressInfo={addressInfo}
                    changeAddressInfo={changeAddressInfo}
                  />
                </Card>
              </div>
            </Stepper.Step>
            <Stepper.Step
              allowStepSelect={shouldAllowSelectStep(1)}
              label="Payment"
              description="Type Of Payment"
            >
              <div className="flex justify-center">
                <Card shadow="md" padding="xl">
                  <PaymentMethod
                    value={paymentMethod}
                    selectValue={setPaymentMethod}
                  />
                </Card>
              </div>
            </Stepper.Step>
            <Stepper.Step
              allowStepSelect={shouldAllowSelectStep(1)}
              label="Checkout"
              description="Confirm Order"
            >
              <Checkout />
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
          <Group position={'apart'} mt="xl">
            <Button
              variant="default"
              onClick={() => handleStepChange(active - 1)}
            >
              Back
            </Button>
            <Button
              onClick={() => {
                onAddressSubmit();
                handleStepChange(active + 1);
              }}
            >
              Next step
            </Button>
          </Group>
        </div>
      </Layout>
      <FooterLinks />
    </>
  );
};

export default CheckoutPage;
