import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import { checkStatus, paymentDetails } from '../Axios/AxiosData';

export default function Thanks(props) {
    console.log(props.results);
    return <h1>thanks Page</h1>
}

export async function getServerSideProps(context){
    const clientSecret = context.query.session_id;
    const request = await checkStatus(`checkout/sessions/${clientSecret}`);
    const result = await request.hasOwnProperty("error");
    console.log(result)
    let request1 = ""
    if (!result) {
        request1 = await paymentDetails(`payment_intents/${request.payment_intent}`);
    }else{
        return {notFound:true}
    }
    return {
        props: {
            results: Object.assign({session: request}, {payment: request1 })
        }
        
    }
}

