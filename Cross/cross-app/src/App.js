import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0 // счетчик кликов получается 
    }
    this.winnerLine = [ // описываем выйгрышные состояния как массивы
      [0, 1, 2], //горизонатльный 1
      [3, 4, 5], //горизонатльный 2
      [6, 7, 8], //горизонатльный 3 
      [0, 3, 6], //вертикальный 4
      [1, 4, 7], //вертикальный 5
      [2, 5, 8], //вертикальный 6
      [0, 4, 8], //диаганальный 7
      [2, 4, 6] //диаганальный 8
    ]
  }
  isWinner = () => {
    let s = (this.state.count %2 ===0) ? "X": "0"; //получаем элемент по которому кликаем
    for (let i =0; i < 8; i++) { //перебираем все варианты массивов 
      let line = this.winnerLine[i]; //переменная лайн эт i-ый массив winnerLine
      if (this.state.squares[line[0]] === s // если все три члена -го массива ровны s (Х или 0 не важно) то победа
        && this.state.squares[line[1]] === s
        && this.state.squares[line[2]] === s) {
          alert(s + "win")
          setTimeout(() => { //после 2 секунд обнавляем состояние squares и count
            this.setState({squares: Array(9).fill(null) });
            this.setState({count: 0 });
          }, 2000)
        }
    }
  }

  clickHandler = event => {
    console.log(1);
    //data атрибут дива отвечающий за его номер
    let data = event.target.getAttribute("data"); // достали номер ячейки
    let currentSquares = this.state.squares; // переменная состояния текущей ячейки 
    console.log(currentSquares); 
    if (currentSquares[data]===null) { //проверяем есть ли что в ячейке если нет (null) то делаем
    currentSquares [data] = (this.state.count %2 ===0) ? "X": "0"; // в зависимости от количества кликов (за эти следит счетчик) выводить Х или 0
    this.setState({count: this.state.count +1 }); //прибавляем +1 к состянию state.count с каждым кликом
    this.setState({squares: currentSquares}); // передаем squares состояние currentSquares
    }
    else{
      alert("это не по правилам");
    }
    this.isWinner();
  }

  render () {
    return (
      <div className="tic-tac-toe">
        <div className="ttt-grid" onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="1">{this.state.squares[2]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>
      </div>
    );
  }
}


export default App;
