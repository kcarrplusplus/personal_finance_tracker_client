import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const TransactionTable = () => {
    const [trxns, setTrxns] = useState([]);

    const getTrxns = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/transactions");
            const jsonData = await response.json();

            setTrxns(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getTrxns();
    }, []);

    console.log(trxns);
    return (
        <>
            <Link to='/transaction'>
                <Button className="pull-right" bsStyle="success">Submit Transaction</Button>
            </Link>

            <Table>
                <thead>
                    <tr>
                    <th>Date of Transaction</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Transaction Type</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {trxns.map((trxn) => {
                    return (
                        <tr key={trxn.trxn_id}>
                        <td>{trxn.date_of_transaction}</td>
                        <td>{trxn.description}</td>
                        <td>{trxn.category}</td>
                        <td>{trxn.transaction_type}</td>
                        <td>{trxn.amount}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </>
    );
};

export default TransactionTable;