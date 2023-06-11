import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ErrorMessage, Formik } from "formik";
import { useMutation } from "react-query";

import { fetch, FetchError, FetchResponse } from "../../utils/dataAccess";
import { Transaction } from "../../types/Transaction";
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5em;
  font-size: 1em;
`;

const SubmitButton = styled(Input)`
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  }
`; 

interface Props {
  transaction?: Transaction;
}

interface SaveParams {
  values: Transaction;
}

interface DeleteParams {
  id: string;
}

const saveTransaction = async ({ values }: SaveParams) =>
  await fetch<Transaction>(!values["@id"] ? "/transactions" : values["@id"], {
    method: !values["@id"] ? "POST" : "PUT",
    body: JSON.stringify(values),
  });

const deleteTransaction = async (id: string) =>
  await fetch<Transaction>(id, { method: "DELETE" });

export const Form: FunctionComponent<Props> = ({ transaction }) => {
  const [, setError] = useState<string | null>(null);
  const router = useRouter();

  const saveMutation = useMutation<
    FetchResponse<Transaction> | undefined,
    Error | FetchError,
    SaveParams
  >((saveParams) => saveTransaction(saveParams));

  const deleteMutation = useMutation<
    FetchResponse<Transaction> | undefined,
    Error | FetchError,
    DeleteParams
  >(({ id }) => deleteTransaction(id), {
    onSuccess: () => {
      router.push("/transactions");
    },
    onError: (error) => {
      setError(`Error when deleting the resource: ${error}`);
      console.error(error);
    },
  });

  const handleDelete = () => {
    if (!transaction || !transaction["@id"]) return;
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    deleteMutation.mutate({ id: transaction["@id"] });
  };

  return (
    <div className="container mx-auto px-4 max-w-2xl mt-4">
      <h3 className="text-3xl my-2">
        {transaction
          ? `Edit Transaction ${transaction["@id"]}`
          : `Create Transaction`}
      </h3>
      <Formik
        initialValues={
          transaction
            ? {
                ...transaction,
              }
            : new Transaction()
        }
        validate={() => {
          const errors = {};
          // add your validation logic here
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setStatus, setErrors }) => {
          const isCreation = !values["@id"];
          saveMutation.mutate(
            { values },
            {
              onSuccess: () => {
                setStatus({
                  isValid: true,
                  msg: `Element ${isCreation ? "created" : "updated"}.`,
                });
                router.reload();
              },
              onError: (error) => {
                setStatus({
                  isValid: false,
                  msg: `${error.message}`,
                });
                if ("fields" in error) {
                  setErrors(error.fields);
                }
              },
              onSettled: () => {
                setSubmitting(false);
              },
            }
          );
        }}
      >
        {({
          values,
          status,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="shadow-md p-4" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                className="text-gray-700 block text-sm font-bold"
                htmlFor="transaction_accountId"
              >
                accountId
              </label>
              <input
                name="account_id"
                data-type="account-id"
                id="transaction_accountId"
                value={values.account_id ?? ""}
                type="text"
                placeholder=""
                className={`mt-1 block w-full ${
                  errors.account_id && touched.account_id ? "border-red-500" : ""
                }`}
                aria-invalid={
                  errors.account_id && touched.account_id ? "true" : undefined
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                className="text-xs text-red-500 pt-1"
                component="div"
                name="account_id"
              />
            </div>
            <div className="mb-2">
              <label
                className="text-gray-700 block text-sm font-bold"
                htmlFor="transaction_amount"
              >
                amount
              </label>
              <input
                name="amount"
                data-type="amount"
                id="transaction_amount"
                value={values.amount ?? ""}
                type="number"
                placeholder=""
                className={`mt-1 block w-full ${
                  errors.amount && touched.amount ? "border-red-500" : ""
                }`}
                aria-invalid={
                  errors.amount && touched.amount ? "true" : undefined
                }
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                className="text-xs text-red-500 pt-1"
                component="div"
                name="amount"
              />
            </div>
            {status && status.msg && (
              <div
                className={`border px-4 py-3 my-4 rounded ${
                  status.isValid
                    ? "text-cyan-700 border-cyan-500 bg-cyan-200/50"
                    : "text-red-700 border-red-400 bg-red-100"
                }`}
                role="alert"
              >
                {status.msg}
              </div>
            )}
            <button
              type="submit"
              data-type="transaction-submit"
              className="inline-block mt-2 bg-cyan-500 hover:bg-cyan-700 text-sm text-white font-bold py-2 px-4 rounded"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>

    </div>
  );
};
