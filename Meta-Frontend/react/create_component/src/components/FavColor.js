import {useState} from "react";

function FavColor(){
    const [color, setColor] = useState('red')

    return (
        <>
            <h1>My fav color is {color}</h1>
            <button
            type="button"
            onClick={() => setColor('blue')}>
                Blue
            </button>

        </>
    )
}

export default FavColor