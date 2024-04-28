export default function Header() {
    const count = 1111;
    const text = 'header text';
    const style = {
        color:'red',
    }
    function test(){
        
        return 'main'
    }
  return (
    <div>
      <h1 className={test()} style={style}>Header {count}{text}</h1>
    </div>
  );
}
