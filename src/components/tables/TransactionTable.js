import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class TransactionTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }
    fetchTransactions = () => {
        fetch('/transactions')
            .then(res => res.json())
            .then(data => {
                    console.log(data);
                    this.setState({
                        isLoaded:true,
                        data: data
                    });
                })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    };

    componentDidMount() {
        this.fetchTransactions();
    }

    render() {
        const { error, isLoaded, data} = this.state;
        
        if (error) {
            return(<div>Error: {error.message}</div>)
        } else if (!isLoaded) {
            return(<div>Loading...</div>);
        } else {
            return (
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
                    {data.map((trxn) => {
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
            );
        }
        
    }
    
};

export default TransactionTable;