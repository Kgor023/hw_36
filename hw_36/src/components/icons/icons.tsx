import './icons.css'
export default function Img() {
  return (
    <div>
      <div style={{ display: "flex", gap: "40px" }}>
        <img className="img_style" src="src\assets\light.png" alt="" />
        <img className="img_style" src="src\assets\keyboard.png" alt="" />
        <img className="img_style" src="src\assets\lightning.png" alt="" />
      </div>
      <img className ='social_style' src="src\assets\social.png" alt="" />
    </div>
  );
}
