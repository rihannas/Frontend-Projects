
function Header(props){
    const style = {
        color : "purple",
        fontSize: "80px",

    }
    return <h1 style={style}>Hello from {props.name} my fav color is {props.color}</h1>
}

export default Header;