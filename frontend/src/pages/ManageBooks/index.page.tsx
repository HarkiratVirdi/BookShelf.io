import React from 'react';
import { useCreateBookMutation } from '../../apis/bookApi';
import { Button } from '@mantine/core';

const ManageBooks = () => {
  const [createBook] = useCreateBookMutation();

  return (
    <div>
      <Button>New Post</Button>
    </div>
  );
};

export default ManageBooks;
