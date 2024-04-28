import "./circle.css";
interface CircleProps {
  color: string;
}
export default function Circle(props: CircleProps) {
  return (
    <div
      className="circle_style"
      style={{
        border: "1px solid" + props.color,
        backgroundColor: props.color,
      }}
    ></div>
  );
}
