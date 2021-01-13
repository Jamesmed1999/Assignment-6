function Zip (props)
{




    function onSubmit()
    {
      




        let x = document.forms["form"]["formNum"].value
        x = parseInt(x)
        console.log(typeof x)
        
        let urlPlusInput = 'http://ctp-zip-api.herokuapp.com/zip/' + x
        
        fetch(urlPlusInput)
    .then(response => response.json())
    .then(data => props.setZip(data))
    .catch(function(err) {
        alert( "error: Invalid input \n" + err)
    });
    let root = document.getElementById("root2")
    console.log(root.childElementCount)
    while (root.firstChild) {
        root.removeChild(root.lastChild);
      }
    }


    return(
        <main className = "zip-container">
        <h3>please enter a zip code: </h3>
        <form id = "form" name = "form">

       
        <input type = "text" id = "formNum" maxLength = "5"  minLength = '5'></input>
        
        </form>
        <button onClick = {onSubmit}>submit</button>
       

        </main>
    )
    
}
export default Zip;