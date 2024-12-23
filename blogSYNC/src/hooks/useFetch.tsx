import { useEffect, useState } from "react";

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
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
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
