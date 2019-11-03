let names = []
customerUpdate.onshow=function(){
  // get the data to populate the dropdown with names from database
    let query = "SELECT name FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=lne99312&query=" + query)

    if (req1.status == 200) { //transit worked.
            let names = JSON.parse(req1.responseText)
            // names now in results array - load names into the dropdown
            drpName.clear()
            for (i = 0; i <= names.length - 1; i++)
                drpName.addItem(names[i])
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}


btnUpdate.onclick=function(){
  let newName = inptName.value
    let oldName = drpName.value
    let queryUpdate = "UPDATE name SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + ';"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=lne99312&query=" + queryUpdate)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the update succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully changed the customer name!")
        } else
            NSB.MsgBox("There was a problem changing the customer name.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  
}


