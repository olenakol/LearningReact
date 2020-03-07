import React, {Component} from "react";
import './Counter.scss'
import Counter2 from '../Counter2/Counter2'

export default class Counter extends Component {

    state = {
        counter: 0
    }

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        this.setState ((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render () {
        // return [
        //         <h2 key={'1'}>Counter {this.state.counter}</h2>,
        //         <button key={'2'} className="cuontBtn" onClick={this.addCounter}>+</button>,
        //         <button key={'3'} className="cuontBtn" onClick={() => this.setState({counter: this.state.counter- 1})}>-</button>
        // ]
        return (
            // <div className="counter">
            <React.Fragment>
                <h2>Counter {this.state.counter}</h2>
                <Counter2></Counter2>
                <button className="cuontBtn" onClick={this.addCounter}>+</button>
                <button className="cuontBtn" onClick={() => this.setState({counter: this.state.counter- 1})}>-</button>
            </React.Fragment>
            // </div>
        )
    }
}