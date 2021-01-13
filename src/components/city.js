function City (props)
{




    function onSubmit()
    {
        let x = document.forms["form1"]["forChar"].value
         x = x.toUpperCase()
        x = x.split(" ").join("")
        console.log(x)
        let urlPlusInput2 = 'http://ctp-zip-api.herokuapp.com/city/' + x
        console.log(urlPlusInput2)
        fetch(urlPlusInput2)
    .then(response => response.json())
    .then(data => props.setCity(data))
    .catch(function(err) {
        alert( "Invalid Input \n " + err)
    });
    let root = document.getElementById("root2")
    console.log(root.childElementCount)
    while (root.firstChild) {
        root.removeChild(root.lastChild);
      }
    }


    return(
        <main>
        <h1 className ='zip-container' >Please Enter a City Name: </h1>
        <form id = "form1" name = "form">

       
        <input type = "text" id = "forChar"  ></input>
        
        </form>
        <button onClick = {onSubmit}>submit</button>
       

        </main>
    )
    
}
export default City;