
interface CircleProps {
  color: string;
}
export default function Circle(props:CircleProps) {
  return <div style={{
    width:'50px',
    height:'50px',
    backgroundColor:props.color,
    borderRadius:'35px',
    border: '1px solid' + props.color
  }}></div>;
}
