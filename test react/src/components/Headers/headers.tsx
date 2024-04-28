import './headers.css'
interface IHead {
  title: string;
}
export default function Headers(props: IHead) {
  return (
    <div>
      <h1 id="headers">{props.title}</h1>
    </div>
  );
}

