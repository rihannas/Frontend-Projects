function DessertsList(props) {
  
  let filtered = props.data.filter((element) => {
    return element.calories < 500
  }).sort((a, b) => {
    return a.calories - b.calories
  })

  console.log(filtered)
  const lowCalDesserts = filtered.map((obj) => {
    const dessert = `${obj.name} - ${obj.calories}`
    console.log(dessert)
    return <li key={obj.name}>{dessert}</li>
  })
  return (
    <div>
        <ul>
            {lowCalDesserts}
        </ul>
    </div>
  )
}

export default DessertsList;
