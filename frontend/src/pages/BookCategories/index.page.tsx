import React, { useEffect, useState } from 'react';
import { useGetBooksQuery } from '../../apis/bookApi';
import { IBook } from '../../interfaces/Book.interface';
import { Title } from '@mantine/core';

const BookCategories = () => {
  const { data, isLoading, isError } = useGetBooksQuery();
  const [groupBooks, setGroupBooks] = useState<Record<string, IBook[]>>({});

  useEffect(() => {
    const groupCategories = {
      fantasy: [],
      horror: [],
      sciFi: [],
    };

    data?.books?.forEach((e) => {
      const list = groupCategories[e.genre?.[0]];

      if (list) {
        list.push(e);
      } else {
        groupCategories[e.genre?.[0]] = [e];
      }
    });

    setGroupBooks(groupCategories);
  }, []);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      BookCategories
      {Object.keys(groupBooks).map((e) => (
        <div>
          <Title order={2}>{e}</Title>

          {groupBooks?.[e].map((book) => book.title)}
        </div>
      ))}
    </div>
  );
};

export default BookCategories;
