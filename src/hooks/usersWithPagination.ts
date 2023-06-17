import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    return await res.json();
  });

export const usersWithPagination = (page: number) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(`api/usersPage/${page}`, fetcher, {
    revalidateIfStale: false,
  });
  return {
    users: data?.users,
    totalPages: data?.totalPages,
    number: data?.buildTimestamp,
    isLoading: !error && !data,
    isError: error,
  };
};
