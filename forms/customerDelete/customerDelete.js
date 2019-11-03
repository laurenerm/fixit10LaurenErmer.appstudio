
customerDelete.onshow=function(){
       let query = "SELECT name FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=BIA375&database=clc90595&query=" + query)

    if (req1.status == 200) { //transit worked.
            let results = JSON.parse(req1.responseText)
            // names now in results array - load names into the dropdown
            let customer = ''
            for (i = 0; i <= results.length - 1; i++)
                txtCustomers.value = customer + results[i][0] + "\n"
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
}


btnDelete.onclick=function(){
  
}
