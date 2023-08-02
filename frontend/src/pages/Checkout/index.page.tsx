import React, { useState, useEffect } from 'react';
import Checkout from '../../components/Checkout/index.comp';
import HeaderSearch from '../../components/Header/index.comp';
import FooterLinks from '../../components/Footer/index.comp';
import { Stepper, Button, Group, Card, Text } from '@mantine/core';
import Layout from '../../components/Layout/index.comp';
import PaymentMethod from '../../components/PaymentMethod';
import AddressForm from '../../components/AddressForm';
import { useSelector } from 'react-redux';
import { authState } from '../../store/Auth/auth.selector';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const authStore = useSelector(authState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authStore.email) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <HeaderSearch />
      <Layout>
        <div className="mt-12 mx-4">
          <Stepper active={active} onStepClick={setActive} breakpoint="sm">
            <Stepper.Step label="Address Info" description="Shipment Details">
              <div className="flex justify-center">
                <Card shadow="md" className="w-96" padding="xl">
                  <AddressForm />
                </Card>
              </div>
            </Stepper.Step>
            <Stepper.Step label="Payment" description="Type Of Payment">
              <div className="flex justify-center">
                <Card shadow="md" padding="xl">
                  <PaymentMethod />
                </Card>
              </div>
            </Stepper.Step>
            <Stepper.Step label="Checkout" description="Confirm Order">
              <Checkout />
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
          <Group position={'apart'} mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next step</Button>
          </Group>
        </div>
      </Layout>
      <FooterLinks />
    </>
  );
};

export default CheckoutPage;
