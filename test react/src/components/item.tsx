interface IItemProps {
  title: string;
  count?: number;
}
export default function Item(props: IItemProps) {
  console.log(props);
  return (
    <div>
      <h1>{props.title}{props.count}</h1>
    </div>
  );
}
