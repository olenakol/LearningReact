import React, {Component} from 'react';
import './App.scss';
import Car from './Car/Car'
import Counter from './Counter/Counter'

 export const ClickedContext = React.createContext(false)

class App extends Component {

  constructor (props) {
    super (props)
    this.state = {
      clicked: false,
      cars: [
        {name: 'Mazda' , year: 2018},
        {name: 'Ford' , year: 2016},
        {name: 'Audi' , year: 2020}
      ],
      pageTitle: 'React components',
      showCars: true
    }
  }
  
  // state = {
  //   cars: [
  //     {name: 'Mazda' , year: 2018},
  //     {name: 'Ford' , year: 2016},
  //     {name: 'Audi' , year: 2020}
  //   ],
  //   pageTitle: 'React components',
  //   showCars: true
  // }

  // зміна заголовку сторінки
  // changeTitleOnClick = (newTitle) => {
  //    this.setState({
  //      pageTitle: newTitle  
  //    })
  // }


  onChangeName (name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars [index] = car
    this.setState({cars})
  }

  deleteHandler (index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({cars})
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  // змінюється кожна веддена буква 
  // handleInput = (event) => {
  //   this.setState ({
  //     pageTitle: event.target.value
  //   })
  // }

  render() {

    // const cars = this.state.cars //для виводу машин по одній

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          // виоджу мазив машин
        <Car 
          key={index} // треба додавати кюч елемента
          name={car.name} 
          year={car.year}
          index={index}
          onChangeName={event => this.onChangeName(event.target.value, index)}
          onDelete={this.deleteHandler.bind(this, index)}
        
        />)
      })
    }

    return (

      <div className="App" >
        {/* <h1>{this.state.pageTitle}</h1> */}

        <h1>{this.props.title}</h1>
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter/>
        </ClickedContext.Provider>
        <br></br>
        <button className="btn" style={{marginBottom: '15px'}} onClick={() => this.setState({clicked:true})}>Changed Click</button>
        <br></br>
        {/* <input type="text" onChange={this.handleInput}></input> */}

        <button onClick={this.toggleCarsHandler} className='btn'>Toggle Cars</button>
        <div style={{
          width: 300,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          {cars}
        </div>

        {
          //перевірка if (...) else пишеться так ... ? шо виводим : інакше виводим
        //  this.state.showCars ? 
        //     this.state.cars.map((car, index) => {
        //       return (
        //         // виоджу мазив машин
        //       <Car 
        //         key={index} // треба додавати кюч елемента
        //         name={car.name} 
        //         year={car.year}
        //         changeTitleOnClick={() => this.changeTitleOnClick(car.name)}/>)
        //     })
        //   : null
        }

      
        {
        // виводжу машини по одній
        /* <Car 
          name={cars[0].name} 
          year={cars[0].year}
          changeTitleOnClick={this.changeTitleOnClick.bind(this, cars[0].name)}
        />
        <Car 
          name={cars[1].name} 
          year={cars[1].year}
          changeTitleOnClick={() => this.changeTitleOnClick(cars[1].name)}
        />
        <Car 
          name={cars[2].name} 
          year={cars[2].year}
          changeTitleOnClick={this.changeTitleOnClick.bind(this, cars[2].name)}
        />  */}
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return React.createElement(
//       'div',
//       {className: 'App'},
//       React.createElement(
//         'h1',
//         null,
//         'Hello world'
//       )
//     )
//   }
// }

export default App;