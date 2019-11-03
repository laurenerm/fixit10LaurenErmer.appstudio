/*
let stateCust = []

btnCheck.onclick=function(){
      let check = inptState.value
    let query = "SELECT * FROM customers WHERE state = " + '"' + check + '"'  
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=lne99312&query=" + query)
    
    if (req1.status == 200) {//transit worked.
       stateCust = JSON.parse(req1.responseText)
        console.log(stateCust)   // this shows the array of arrays
      if (results.length == 0)  // the array is empty so no results returned             
        NSB.MsgBox("There are no customers of that type.")
      else {
        let message = ""
        for (i = 0; i <= stateCust.length - 1; i++)
            message = message + stateCust[i][1] + "\n"
        lblResults.value = message
        }
        }
        else 
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}
*/