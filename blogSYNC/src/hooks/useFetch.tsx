import { useEffect, useState } from "react";
import { Blog } from "../types";

const useFetch = (url: string) => {
  const [data, setData] = useState<Blog[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error("Couldn't fetch");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsPending(false);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
