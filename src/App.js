import React from 'react'
import './App.css';
import Counter from './Basic_clickable_Counter/Counter';
import Counter1 from './Basic_clickable_Counter/counter1';

class App extends React.Component {
  constructor() {

    super()
    
    this.state = {
      mount : false
    }
  }
  truemount = () => {
    this.setState({mount : !(this.state.mount)})
  }
  falsemount = () => {
    this.setState({mount : false})
  }
  render () {

    return (
      // <div className='app'>
      //     <Counter/>
      // </div>
      <div className='app1'>
        {
           this.state.mount && <Counter1/>
        }
        <button className="mount_button" onClick={this.truemount}>Mount</button>
        <button className="unmount_button" onClick={this.falsemount}>Unmount</button>
      </div>
    )
  }
}
export default App
