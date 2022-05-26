import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import LoadingSpinner from '../SharedPages/LoadingSpinner';

const CheckOutForm = ({totalPrice, payingOrder}) => {
    const [cardErrors, setCardErrors] = useState('')
    const [clientsSecret, setClientsSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false)
    const stripe = useStripe();
    const elements = useElements();

    const {_id, name, email} = payingOrder;


    useEffect(()=>{
        fetch('https://safe-waters-55642.herokuapp.com/create-payment-intent',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({totalPrice})
        })
        .then(res=> res.json())
        .then(data => {
            if(data?.clientSecret){
                 
                setClientsSecret(data.clientSecret);
            }
        })

    },[totalPrice])



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardErrors(error?.message || '' );

        //confirmation od card payment
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientsSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email: email
                },
              },
            },
          );
          if(intentError){
            setProcessing(false)
              setCardErrors(intentError?.message)
          }
          else{
            setCardErrors('')
            setTransactionId(paymentIntent.id)
            toast.success('Congratulates! Successfully payment completed')
            setProcessing(true)

            //user data
            const payment = {
                transactionId: paymentIntent.id,
            }
            //updating in data
            fetch(`https://safe-waters-55642.herokuapp.com/order/${_id}`,{
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            })
            .then(res=> res.json())
            .then(data=> {
                setProcessing(true)
                console.log(data);
            }) 
          }
          
        
    }
     


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm btn-primary text-white mt-10' type="submit" disabled={!stripe || !clientsSecret}>
                Pay
            </button>
            {cardErrors && <p className='text-center text-error'>{cardErrors}</p>}
            {transactionId && <p className='text-center text-success font-semibold py-4'> Congratulations! You Payment is completed! Your transactionId is <span className='text-orange-500'>{transactionId}</span></p>}
        </form>
    );
};

export default CheckOutForm;