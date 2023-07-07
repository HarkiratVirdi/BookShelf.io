import { useState, useRef, Dispatch, SetStateAction } from 'react';
import { Autocomplete, Loader } from '@mantine/core';

interface IEmailWithSuggestion {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

export default function EmailWithSuggestions(props: IEmailWithSuggestion) {
  const timeoutRef = useRef<number>(-1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    props.setEmail(val);
    setData([]);

    if (val.trim().length === 0 || val.includes('@')) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        setData(
          ['gmail.com', 'outlook.com', 'yahoo.com'].map(
            (provider) => `${val}@${provider}`
          )
        );
      }, 100);
    }
  };
  return (
    <Autocomplete
      value={props.email}
      data={data}
      onChange={handleChange}
      rightSection={loading ? <Loader size="1rem" /> : null}
      label="Email"
      placeholder="Your email"
    />
  );
}
