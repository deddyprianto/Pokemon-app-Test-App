import axios from "axios";
import useSWR from "swr";

export const useUser = (pages, counts) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    `https://reqres.in/api/users?page=${pages}&per_page=${counts}`,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );
  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
};
