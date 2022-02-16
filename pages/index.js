import React,{useState} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import Loader from './loader';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);
export default function PreviewPage() {
  const [value, setvalue] = useState("");
  const [loading, setloading] = useState(false)
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);


  const checkOut = () => {
    // fetch("http://localhost:3000/api/checkout_sessions", {
    //   method: "POST",
    //   headers: {
    //     'Access-Control-Allow-Origin':'*',
    //     "Content-Type": "application/json",
    //   },
    //   body:JSON.stringify({check: "price_1KMFjVFfBeM207CoVgB8aacm"})
    // })
    setvalue("price_1KS3DWFfBeM207CoUw7qd34v")
    setloading(true)
    setTimeout(() => {
      document.getElementById('ltiLaunchForm').submit();
    }, 3000);

  }

  return (
    <>
      {loading? <Loader/> : null}
      <form action="/api/checkout_sessions" method="POST" id="ltiLaunchForm"
        style={loading? { display: 'none'}: null}
        >
          <section>
            <div>
              <Image
                src='https://d1wqzb5bdbcre6.cloudfront.net/0dbd23e3ea2701b74561a192db2426838fd86fbeff81554ba45a19450e0b136a/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a6446387853303145643274475a6b4a6c545449774e304e7666475a735833526c6333526665574a30633074444f486b7a566c5a735545524d4f5759306557787255574e6b30306d51315336337a62'
                alt="stripe test"
                width={150} height={150}
              />
              <input type="text" name="check" value={value}/>
            </div> 
            <button type="submit" role="link">
              Checkout
            </button>
          </section>
          <style jsx>
            {`
              section {
                background: #ffffff;
                display: flex;
                flex-direction: column;
                width: 400px;
                height: 112px;
                border-radius: 6px;
                justify-content: space-between;
              }
              button {
                height: 36px;
                background: #556cd6;
                border-radius: 4px;
                color: white;
                border: 0;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
                box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
              }
              button:hover {
                opacity: 0.8;
              }
            `}
          </style>
        </form>
      <br/>
      <br/>
      <br/>
      <button onClick={checkOut}>check</button>
    </>
  );
}