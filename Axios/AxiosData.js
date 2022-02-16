import Axios from "./Axios";
export async function checkStatus(clientSecret){
  const headers = {
    Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
  }
  console.log(clientSecret + "     " + headers)
  try {
    const paymentIntent = await Axios.get(clientSecret,{headers});
    return paymentIntent.data;
  } catch (error) {
    console.log(error.response.data)
    return error.response.data 
  }
};

export async function paymentDetails(payId){
  const headers = {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
  }
  try {
    const paymentIntent = await Axios.get(payId,{headers});
    return paymentIntent.data;
    console.log(paymentIntent.data)
  } catch (error) {
    console.log(error)
  }  
};