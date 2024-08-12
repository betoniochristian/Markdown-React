import React from 'react';
import Editor from './Editor';
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={

    }
  }
  render(){
    return(
      <div className="app-bg">
        <Editor />
      </div>
    )
  }
}
export default App;