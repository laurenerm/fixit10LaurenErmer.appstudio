
btnCheck.onclick=function(){
    let check = txtState.value
    let query = "SELECT * FROM customers WHERE state = " + '"' + check + '"'  
    let req1 = ""
    // 3. run an AJAX call, which runs the query on the database server.
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=BIA375&database=clc90595&query=" + query)
    
    if (req1.status == 200) { //transit worked.
       let results = JSON.parse(req1.responseText)
        console.log(results)   // this shows the array of arrays
   }     
    if (results.length == 0) {  // the array is empty so no results returned             
        NSB.MsgBox("There are no customers of that type.")
        }
    else {        
        console.log("the parsed JSON is " + results)
        }
    
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        lblResults.value = message
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}
