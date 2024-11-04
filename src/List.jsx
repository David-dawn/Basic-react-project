import { useLayoutEffect } from "react";


function List(){

    const fruit = [{id:1, name: "apple", calories: 55}, 
        {id:2, name:  "orange", calories: 44}, 
        {id:3, name:"banna", calories: 75}, 
        {id:4, name:"pineapple", calories: 65}, 
        {id:5, name:"coconut", calories: 30}];

        // fruit.sort((a, b) => a.name.localeCompare(b.name));//

    const listItems = fruit.map(fruit => <li key={fruit.id}>
        
        {fruit.name}: &nbsp;
        {fruit.calories}
        </li>);


    return(<ol>{listItems}</ol>);
}
export default List