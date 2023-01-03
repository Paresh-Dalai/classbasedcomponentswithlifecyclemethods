import React from "react";
import './counter1.css'

class Counter1 extends React.Component {

    constructor () {

        super()

        this.state = {
            count : 0
        }
    }

    increment =  () => { 

        this.setState({count : this.state.count + 1})
    }

    decrement = () => {

        this.setState({count : this.state.count - 1})
    }

    render () {

        return(
            <div className="counter_display_container">
                <div>
                    <button className="decrement" onClick={this.decrement}>Decrement</button>
                </div>
                <div className="counter_display">
                    count: {this.state.count}
                </div>
                <div>
                    <button className="increment" onClick={this.increment}>Increment</button>
                </div>
            </div>
        )
    }
}

export default Counter1