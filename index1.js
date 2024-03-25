function fetchUserNames() {
    const xhr = new XMLHttpRequest();

    const url = "https://jsonplaceholder.typicode.com/users";

    xhr.open("GET" , url , true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState=== 4 && xhr.status===200) {
           
            const users = JSON.parse(xhr.responseText);
            const userNames = users.map((user)=>user.name)

            console.log("User names : ", userNames.join(","));
             
            const outputElement = document.getElementById("output")
            outputElement.textContent = "User names" + userNames.join(",")      
       
       }
    }
    xhr.send();
}

fetchUserNames();