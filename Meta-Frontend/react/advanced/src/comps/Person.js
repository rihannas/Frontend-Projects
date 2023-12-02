export default function Person({person}){
    return (
        <div>
            <h2>
                I am {person.name} and I am {person.age} years old and I do {person.skill}
            </h2>
        </div>
    )
}