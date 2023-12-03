import { useState } from "react"

export default function Comment() {
    const [score, setScore] = useState('10')
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Number(score) <=5 && comment.length <=10){
            alert('please provide a comment explaining your experience')
        }

        console.log('Submitted')
        setComment('')
        setScore(10)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Feedback form</h2>
                <div className="Field">
                    <label>Score: {score} </label>
                    <input type="range" min="0" max="10" value={score} onChange={e => setScore(e.target.value)}/>
                </div>
                <div className="Field">
                    <label>Comment:</label>
                    <textarea value={comment} onChange={e => setComment(e.target.value)}/>
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}