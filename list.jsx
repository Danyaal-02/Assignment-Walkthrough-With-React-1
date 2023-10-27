function List(props){
    const listItems=props.items.map((item)=>{
        <li key={item}>{item}</li>
    })
}

//Usage
//<List items={['apple','banana','orange']}/>