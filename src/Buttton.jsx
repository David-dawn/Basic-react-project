


function Button(){

    const handleClick = (e) => e.target.textContent = "OUCH";

    return(<button onClick={(e) => onDoubleClick(e)}>Click me</button>)
}


export default Button;
