import * as React from "react";
import { useQuery } from "react-query";
import { getService } from "services/httpService";

const useFetch = (url: string) => {
  const [state, setState] = React.useState(true);
  const toggle = React.useCallback(() => setState((state) => !state), []);

  const { data, isLoading, isError, refetch } = useQuery("some-data", () =>
    getService(`${url}`)
  );
  React.useEffect(() => {
    refetch();
  }, [state]);
  return [data, state, toggle, isLoading, isError];
};
export default useFetch;
