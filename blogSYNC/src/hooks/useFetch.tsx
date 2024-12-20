import { useEffect, useState } from "react";
import { Blog } from "../types";

const useFetch = (url: string) => {
  const [data, setData] = useState<Blog[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) throw Error("Couldn't fetch");
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
