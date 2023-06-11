import { GetStaticPaths, GetStaticProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import {
  PageList,
  getTransactions,
  getTransactionsPath,
} from "../../../components/transaction/PageList";
import { PagedCollection } from "../../../types/collection";
import { Transaction } from "../../../types/Transaction";
import { fetch, getCollectionPaths } from "../../../utils/dataAccess";

export const getStaticProps: GetStaticProps = async ({
  params: { page } = {},
}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    getTransactionsPath(page),
    getTransactions(page)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch<PagedCollection<Transaction>>("/transactions");
  const paths = await getCollectionPaths(
    response,
    "transactions",
    "/transactions/page/[page]"
  );

  return {
    paths,
    fallback: true,
  };
};

export default PageList;
