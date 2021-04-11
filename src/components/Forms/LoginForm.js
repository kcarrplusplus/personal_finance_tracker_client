import React from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // fetch('/api/v1/signup', {
        //     method: 'POST',
        //     body: JSON.stringify({ data }),
        //     headers: { 'Content-Type': 'application/json' },
        // })
        //     .then(res => res.json());
        console.log(data);
    };
    
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
                <div className="form-group col-md-6 offset-lg-3">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register("password")}/>
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