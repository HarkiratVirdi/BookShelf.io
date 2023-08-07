import { Container } from '@mantine/core';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Layout: React.FC<any> = (props: ContainerProps) => {
  return <Container size={1380}>{props.children}
  
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>

  <script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  ></script>
  </Container>;
};

export default Layout;
