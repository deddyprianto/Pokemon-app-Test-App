import axios from "axios";
import useSWR from "swr";
export const useUser = (id) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    `https://reqres.in/api/users?page=${id}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
