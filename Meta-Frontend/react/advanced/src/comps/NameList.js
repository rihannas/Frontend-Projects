import Person from "./Person"

const persons = [
    {
        id: 1,
        name: 'Gia',
        age: 20,
        skill: 'Sing'
    },
    {
        id: 2,
        name: 'JK',
        age: 25,
        skill: 'Dance'
    },
    {
        id: 3,
        name: 'Lia',
        age: 40,
        skill: 'Sleep'
    },

]

export default function NameList(){

    const newList = persons.map((person)=> {return <Person person={person} key={person.id}/>})
    return <div>{newList}</div> //I'M RETURNING COMPONENT
}



