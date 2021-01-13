import React from 'react'
import '../App.css';
import City from './city'
class App extends React.Component  {
  constructor(){
    super()

    this.state = {
     
     cityList: ""


    }
    this.setCity = this.setCity.bind(this)
    this.printCityValues = this.printCityValues.bind(this)
  }

setCity(cityObj)
{
  this.setState ({
    cityList: cityObj
  })
  this.printCityValues(cityObj) 
  
}

printCityValues(cityObj)
{
  let i = 1
  
  let root = document.getElementById('root2')
  let z = document.createElement("h3")
  z.innerText = "List of Zipcodes from input"
  root.appendChild(z)
  cityObj.forEach(element => {
    
    let p = document.createElement("div")
    p.innerText =  i+ "- [" + element + "]"
    
    root.appendChild(p)
    i++
    
  }); 





}
render() {

  return (
    <main>
     
      <City setCity = {this.setCity}/>
    </main>
     
  );
}
}

export default App
