import React from "react";

class ClassCounter extends React.Component { // создаем класс с наследованием свойств (наверное) от React.Component

    constructor(props) {
        super(props);
        this.state = { // this повсюду потому что работаем внутри класса ...
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

     increment () {
        this.setState({count: this.state.count + 1})
    }

     decrement () {
        this.setState({count: this.state.count - 1})
    }

    render () { // функция вывода на страницу как я понял...
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick = {this.increment} >Increment</button>
            <button onClick = {this.decrement}>Decrement</button>
            </div>
        )
    }
}
export default ClassCounter;