import Head from "next/head";
import Link from "next/link";
import React from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { Form } from "../components/transaction/Form";
import PageList from './transactions/index';

const Welcome = () => (
  <div className="w-full overflow-x-hidden">
    <Head>
      <title>Simple list transactions !</title>
    </Head>
    <section className="w-full bg-spider-cover relative">
      <div className="container flex flex-row pt-24 pb-8 | md:px-20">
        <div className="flex flex-1 flex-col items-center text-center | md:text-left md:items-start">
          <h1>
            <span className="block text-4xl text-cyan-200 font-bold mb-2">
              Transaction panle on ram
            </span>
          </h1>
          <p className="text-cyan-200 my-5 text-lg">
          This is a transaction history project using MySQL's memory engine and monitoring tools, built on the API Platform and Symfony, featuring RESTful API, GraphQL, and comprehensive documentation.
          </p>
          <div className="flex justify-center flex-wrap | lg:justify-start lg:grid lg:gap-5 lg:grid-cols-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://localhost/docs"
            className="bg-white text-cyan-700 px-8 py-3 relative overflow-hidden transition-all font-extrabold text-lg group hover:pl-4 hover:pr-12"
          >
            API Documentation
            <div className="absolute left-full top-0 w-7 h-full bg-cyan-200 transition-all flex p-1 justify-center items-center group-hover:-translate-x-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://localhost/admin#/transactions"
            className="bg-white text-cyan-700 px-8 py-3 relative overflow-hidden transition-all font-extrabold text-lg group hover:pl-4 hover:pr-12"
          >
            Admin Dashboard
            <div className="absolute left-full top-0 w-7 h-full bg-cyan-200 transition-all flex p-1 justify-center items-center group-hover:-translate-x-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://localhost:3000/d/MQWgroiiz/mysql-overview?orgId=1&refresh=1m"
            className="bg-white text-cyan-700 px-8 py-3 relative overflow-hidden transition-all font-extrabold text-lg group hover:pl-4 hover:pr-12"
          >
            MSQL Grafana Panel
            <div className="absolute left-full top-0 w-7 h-full bg-cyan-200 transition-all flex p-1 justify-center items-center group-hover:-translate-x-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://localhost/docs.jsonld"
            className="bg-white text-cyan-700 px-8 py-3 relative overflow-hidden transition-all font-extrabold text-lg group hover:pl-4 hover:pr-12"
          >
            Json LD
            <div className="absolute left-full top-0 w-7 h-full bg-cyan-200 transition-all flex p-1 justify-center items-center group-hover:-translate-x-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
          </div>
<br />
          <div className="flex justify-center flex-wrap | lg:justify-start lg:grid lg:gap-5 lg:grid-cols-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://localhost:3000/d/liz0yRCZz/symfony-logger-dashboard?orgId=1"
            className="bg-white text-cyan-700 px-8 py-3 relative overflow-hidden transition-all font-extrabold text-lg group hover:pl-4 hover:pr-12"
          >
            Symfony Log Grafana Panel
            <div className="absolute left-full top-0 w-7 h-full bg-cyan-200 transition-all flex p-1 justify-center items-center group-hover:-translate-x-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://localhost:3000/d/d7592f41-4c9c-4cae-8c8e-74fdadaa4aba/transactions?orgId=1&from=now-3h&to=now"
            className="bg-white text-cyan-700 px-8 py-3 relative overflow-hidden transition-all font-extrabold text-lg group hover:pl-4 hover:pr-12"
          >
            Transaction Grafana Panel
            <div className="absolute left-full top-0 w-7 h-full bg-cyan-200 transition-all flex p-1 justify-center items-center group-hover:-translate-x-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://localhost/graphql/graphiql?query=%7B%0A%20%20transactions%7B%0A%20%20%20%20id%0A%20%20%20%20amount%0A%20%20%20%20type%0A%20%20%20%20created_at%0A%20%20%7D%0A%7D"
            className="bg-white text-cyan-700 px-8 py-3 relative overflow-hidden transition-all font-extrabold text-lg group hover:pl-4 hover:pr-12"
          >
            GraphQL Editor
            <div className="absolute left-full top-0 w-7 h-full bg-cyan-200 transition-all flex p-1 justify-center items-center group-hover:-translate-x-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://localhost/docs?ui=re_doc"
            className="bg-white text-cyan-700 px-8 py-3 relative overflow-hidden transition-all font-extrabold text-lg group hover:pl-4 hover:pr-12"
          >
            Re Doc
            <div className="absolute left-full top-0 w-7 h-full bg-cyan-200 transition-all flex p-1 justify-center items-center group-hover:-translate-x-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
          </div>
        </div>
      </div>
    </section>


    <section className="bg-white w-full">
  <div className="container | md:px-20">
    <div className="text-center | lg:text-left lg:w-5/5 lg:ml-auto">
      <div className="grid grid-cols-10 gap-4 | lg:justify-start">
      <div className="lg:col-span-2 md:col-span-12">
          <Form />
      </div>
      <div className="lg:col-span-8 md:col-span-12">
          <PageList />
      </div>
      </div>
    </div>
  </div>
</section>

    <div className="bg-white text-center pb-4 | md:shadow-md md:px-0.5 md:py-4 md:grid md:grid-cols-1 md:gap-3 md:fixed md:top-1/2 md:-right-1 md:-translate-y-1/2 md:portrait:bottom-4 md:portrait:top-auto md:portrait:translate-y-0">
      <h2 className="text-black text-md font-bold mb-2 | md:text-cyan-700 md:font-normal md:uppercase md:text-xs md:mx-2 md:mb-0">
        Follow me
      </h2>
      <HelpButton
        url="https://www.linkedin.com/in/amir-baqdadi-03ab1a181/"
        title="ahbaqdadi On Linedin"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 0 0-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 2h2V21H4V8.5z"/> </g> </svg>
      </HelpButton>
      <HelpButton
        url="https://github.com/ahbaqdadi/php-genetic"
        title="ahbaqdadi on Github"
      >
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </HelpButton>
    </div>
  </div>
);
export default Welcome;


const HelpButton = ({
  children,
  url,
  title,
}: {
  url: string;
  title: string;
  children: React.ReactNode;
}) => (
  (<Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 p-2.5 rounded-full border-2 border-gray-100 justify-center transition-colors hover:border-cyan-200 hover:bg-cyan-200/50 m-2 inline-flex items-center | md:p-1 md:w-9 md:h-9 md:flex md:mx-auto md:m-0"
    title={title}>

    {children}

  </Link>)
);
