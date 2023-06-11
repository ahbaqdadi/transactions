import { NextComponentType, NextPageContext } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useQuery } from "react-query";

import Pagination from "../common/Pagination";
import { List } from "./List";
import { PagedCollection } from "../../types/collection";
import { Transaction } from "../../types/Transaction";
import { fetch, FetchResponse, parsePage } from "../../utils/dataAccess";
import { useMercure } from "../../utils/mercure";

export const getTransactionsPath = (page?: string | string[] | undefined) =>
  `/transactions${typeof page === "string" ? `?page=${page}&order%5BcreatedAt%5D=desc` : "?order%5BcreatedAt%5D=desc"}`;
export const getTransactions =
  (page?: string | string[] | undefined) => async () =>
    await fetch<PagedCollection<Transaction>>(getTransactionsPath(page));
const getPagePath = (path: string) =>
  `/transactions/page/${parsePage("transactions", path)}`;

export const PageList: NextComponentType<NextPageContext> = () => {
  const {
    query: { page },
  } = useRouter();
  const { data: { data: transactions, hubURL } = { hubURL: null } } = useQuery<
    FetchResponse<PagedCollection<Transaction>> | undefined
  >(getTransactionsPath(page), getTransactions(page));
  const collection = useMercure(transactions, hubURL);

  if (!collection || !collection["hydra:member"]) return null;

  return (
    <div>
      <div>
        <Head>
          <title>Transaction List</title>
        </Head>
      </div>
      <List transactions={collection["hydra:member"]} />
      {/* <Pagination collection={collection} getPagePath={getPagePath} /> */}
    </div>
  );
};
