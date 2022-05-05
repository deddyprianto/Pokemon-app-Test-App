import axios from "axios";
import useSWR from "swr";

export const useUser = (pageIndex, count) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    `https://reqres.in/api/users?page=${pageIndex}&per_page=${count}`,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
