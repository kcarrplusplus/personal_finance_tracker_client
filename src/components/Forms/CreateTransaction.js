import React from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/**
 * cardId
 * accountId
 * transaction type
 * description
 * category
 * amount
 */

const TransactionForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/transactions', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json'}
            });
            window.location = "/account";
        } catch (err) {
            console.error(err.message);
        }
        
    };
    
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
                <div className="form-group col-md-4 offset-lg-4">
                    <Form.Group controlId="formBasicCardId">
                        <Form.Label>Card Id</Form.Label>
                        <Form.Control type="text" placeholder="Enter Card Id" {...register("cardId")} />
                        <Form.Text className="text-muted">
                        Your card Id is encrypted on our database.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasic.TransactionTypeSelect">
                        <Form.Label>Transaction Type</Form.Label>
                        <Form.Control as="select" {...register("transactionType")}>
                        <option>DEBIT</option>
                        <option>CREDIT</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasic.ControlDescriptionTextarea">
                        <Form.Label>Transaction Description</Form.Label>
                        <Form.Control as="textarea" rows={3} {...register("description")}/>
                    </Form.Group>

                    <Form.Group controlId="formBasic.TransactionCategorySelect">
                        <Form.Label>Transaction Category</Form.Label>
                        <Form.Control as="select" {...register("category")}>
                        <option>Restaurant and Dining</option>
                        <option>E-Commerce</option>
                        <option>Clothes</option>
                        <option>Transport</option>
                        <option>Beauty</option>
                        <option>Health</option>
                        <option>Lodging</option>
                        <option>Utilities</option>
                        <option>Charity</option>
                        <option>Cellular</option>
                        <option>Rent</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" min="0" step="0.01" placeholder="0.00" {...register("amount")}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </div>
            </div>
        </Form>
    );
};

export default TransactionForm;