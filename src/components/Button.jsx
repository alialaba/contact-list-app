export default function Button({color,text, onClick}){
    return(
        <button  style={{background:color}} onClick={onClick} className="btn">{text}</button>
        )
}