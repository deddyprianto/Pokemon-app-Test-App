import axios from "axios";
import useSWR from "swr";

export const useFetchData = ({ paginate }) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(paginate, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });
  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const useFetchDataDetail = ({ url }) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });
  return {
    pokemonDetail: data,
    isLoading: !error && !data,
    isError: error,
  };
};
