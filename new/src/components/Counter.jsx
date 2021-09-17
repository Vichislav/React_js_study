import React, { useState } from "react";

const Counter = function () { // создаем компонент, он всегда с большой буквы, имя такое же как и у файла
    const [count, setCount] = useState (0) //создали состояние для счетчика

    function increment() {
        setCount(count + 1)   //получается меняем не переменную а ее состояние
      }
    
      function decrement() {
        setCount(count - 1) //получается меняем не переменную а ее состояние
      }

    return ( //возвращаем на страницу (я так понимаю)
        <div>
            <h1>{count}</h1>
            <button onClick = {increment} >Increment</button>
            <button onClick = {decrement}>Decrement</button>
        </div>
    )
 }
 export default Counter; //экспортируем, чтобы мы смогли воспользоваться им в App