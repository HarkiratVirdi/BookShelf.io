import { Container } from '@mantine/core';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Layout: React.FC<any> = (props: ContainerProps) => {
  return <Container size={1380}>{props.children}</Container>;
};

export default Layout;
