import React from "react";
import './Car.scss'

class Car extends React.Component {
    render () {
        const inputClasses = ['input']
        if (this.props.name !== '') { inputClasses.push('green')}
        else { inputClasses.push('red')}
    
        if (this.props.name.length > 4) { inputClasses.push('bold')}
        return (
            <div className="car">
                <h3>Car name: {this.props.name}</h3>    
                <p>Year: <strong>{this.props.year}</strong></p>
                <input 
                    type="text" 
                    onChange={this.props.onChangeName} 
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button className="btn del" onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Car
// function Car() {
//     return (
//         <div>
//             <h2>Car: </h2>
//         </div>
//     )
// }

// const Car = () => {
//     return (
//         <div>
//             <h2>Car: </h2>
//         </div>
//     )
// }

// const Car = () => (<div><h2>Car: <strong>test</strong></h2></div>)

// export default Car

// export default props => {
//     const inputClasses = ['input']
//     if (props.name !== '') { inputClasses.push('green')}
//     else { inputClasses.push('red')}

//     if (props.name.length > 4) { inputClasses.push('bold')}
//     return (
//         <div className="car">
//         {/* inline style 
//         style={{
//             border: '1px solid #ccc',
//             margin: '10px',
//             display: 'block',
//             padding: '10px',
//             boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
//             borderRadius: '5px'
//         }}> 
//         */}
//             <h3>Car name: {props.name}</h3>    
//             <p>Year: <strong>{props.year}</strong></p>
//             <input 
//                 type="text" 
//                 onChange={props.onChangeName} 
//                 value={props.name}
//                 className={inputClasses.join(' ')}
//             />
//             <button className="btn del" onClick={props.onDelete}>Delete</button>
//         </div>
//     )
// }