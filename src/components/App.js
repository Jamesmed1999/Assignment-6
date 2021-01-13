import React from 'react'
import Zip from './zip'
import '../App.css';
class App extends React.Component  {
  constructor(){
    super()

    this.state = {
     zipList: ""


    }
    this.setZip = this.setZip.bind(this)
    this.printValues = this.printValues.bind(this)

  }


  setZip(value)
  {
    this.setState ({
      zipList: value
    
    })
  
      /* console.log((value[0]))
      value.forEach(element => console.log(element.City)) */
      
    this.printValues(value)
    
 
  }

  printValues(value)
  {
    let i = 1
    let root = document.getElementById('root2')
    let msg = document.createElement('div')
    msg.innerText = "Results: " 
    root.appendChild(msg)
    
    value.forEach(element => {
      
      let p = document.createElement("div")
      p.innerText =  i +"-###################- \n City: " + element.City + 
      "\n State: " + element.State + 
      "\n Location: " + element.Location + 
      "\n Population(Est.): " + element.EstimatedPopulation + 
      "\n Total Wages: " + element.TotalWages + "\n-###################-"
      root.appendChild(p)
      i++
      
    }); 
    
  }

render() {

  return (
    <main>
      <Zip  setZip = {this.setZip} /> 
      
    </main>
     
  );
}
}

export default App
