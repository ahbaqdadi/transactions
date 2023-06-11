import { FunctionComponent, useState, useEffect } from "react";
import axios from 'axios';
import Link from "next/link";

import { Transaction } from "../../types/Transaction";

interface Props {
  transactions: Transaction[];
}

const getItemPath = (id: string, path: string) => `${path.replace('[id]', id)}`;

export const List: FunctionComponent<Props> = ({ transactions }) => {
  const [balances, setBalances] = useState<{[key: string]: any}>({});

  useEffect(() => {
    transactions.forEach(transaction => {
      if (transaction["@id"] && transaction["type"] === 'DEPOSIT') {
        axios.get(`https://localhost/accounts/${transaction["account_id"]}`)
          .then(res => {
            setBalances(prevBalances => ({...prevBalances, [transaction["account_id"]]: res.data}));
          })
          .catch(err => console.error(err));
      }
    });
  }, [transactions]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl mb-2">Transaction Hostiry</h1>
      </div>
      <table cellPadding={10} className="shadow-md table border-collapse min-w-full leading-normal table-auto text-left my-3">
        <tbody className="text-sm divide-y divide-gray-200">
          {transactions && transactions.length !== 0 && transactions.map((transaction) => {
            const balance = balances[transaction["account_id"]];
            return (
              <tr className="py-2" key={transaction["@id"]}>
                <td>
                <div 
                data-type="transaction"
                data-account-id={transaction['account_id']}
                data-amount={transaction['amount']}
                data-balance={balance?.balance ? balance.balance : transaction['amount']}>
                  {`Transferred ${transaction["amount"]}$ ${transaction["type"] === 'WITHDRAW' ? 'From' : 'To'} Account ${transaction["account_id"]}`}
                  {balance && transaction["type"] === 'WITHDRAW' && (
                    <>
                        <p>The current account balance is {balance.balance}$</p>
                    </>
                  )}
                </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;