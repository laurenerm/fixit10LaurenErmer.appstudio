
let allCustData = []
 
btnDelete.onclick=function(){
    let custNameDel = inptCustDel.value
// make sure the pet name is in the database before you try to delete it
    let found = false
    for (i = 0; i <= allCustData.length - 1; i++) {
        if (custNameDel == allCustData[i][1])
            found = true
    }
    if (found == false) 
       NSB.MsgBox("That customer name is not in the database.")
    else if (found == true) {
      let queryDelete = "DELETE FROM customer WHERE name = " + '"' + custNameDel + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=lne99312&query=" + queryDelete)

      if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500)    // means the insert succeeded
            lblDelete.value = "You have successfully deleted the customer named " + custNameDel
        else
            NSB.MsgBox("There was a problem deleting " + custNameDel + " from the database.")
      } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
      }  
  } 
}


customerDelete.onshow=function(){
   // get all the data from the database when program loads
      let query = "SELECT * FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=lne99312&query=" + query);

    if (req1.status == 200) { //transit worked.
            allCustData = JSON.parse(req1.responseText)
            console.log("parsed result in onshow:  " + allCustData)
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  

