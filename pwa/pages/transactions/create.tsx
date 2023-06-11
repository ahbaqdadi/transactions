import { NextComponentType, NextPageContext } from "next";
import Head from "next/head";

import { Form } from "../../components/transaction/Form";

const Page: NextComponentType<NextPageContext> = () => (
  <div>
    <div>
      <Head>
        <title>Create Transaction</title>
      </Head>
    </div>
    <Form />
  </div>
);

export default Page;
