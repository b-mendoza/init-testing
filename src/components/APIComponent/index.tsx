import { useState, useEffect } from 'react';

type Data = {
  name: string;
};

const isData = (data: unknown): data is Data => {
  return (
    typeof data === 'object' &&
    data != null &&
    'name' in data &&
    typeof data.name === 'string'
  );
};

export const APIComponent = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted && isData(data)) setData(data);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {data != null && <div role="contentinfo">Name is {data.name}</div>}
    </div>
  );
};
