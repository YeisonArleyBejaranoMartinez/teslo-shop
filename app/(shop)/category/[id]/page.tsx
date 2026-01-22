type Props ={
  params:{
    id:string
  }
}
export default function CheckoutPage({params}:Props) {
 const {id} = params
 console.log(id)
  return (
    <div>
      <h1>category de ropa  {id}</h1>
    </div>
  );
}