import './Titles/raleway.css'
export default function Raleway(props:any) {
  return (
    <div className='raleway'>
      {props.children}
      <h1>Raleway</h1>
      <h2>Raleway</h2>
      <h3>Raleway</h3>
    </div>
  );
}
