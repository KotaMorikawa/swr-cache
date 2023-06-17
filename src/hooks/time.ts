import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    return await res.json();
  });

export const useTime = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR("api/time", fetcher);
  return {
    time: data,
    isLoading2: !error && !data,
    isError2: error,
  };
};
