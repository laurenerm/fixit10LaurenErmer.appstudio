/*

btnAdd.onclick=function(){
    let queryAdd = "INSERT INTO customer VALUES ('17','Jessie Antiques', '1113 F St', 'Omaha', 'NE', '68178');"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=lne99312&query=" + queryAdd)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully added the customer!")
        } else
            NSB.MsgBox("There was a problem with adding the customer to the database.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  

}
*/