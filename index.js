
fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{
// console.log(data); json format
return data.json(); //converted to object
}).then((objectdata)=>{
    console.log(objectdata[0].title)
    let tabledata=""
    objectdata.map((values)=>{
        tabledata +=`<tr>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td><input class="form-check-input" type="checkbox" value=""id="flexCheckDefault" ></input></td>
        </tr> `
    })
    document.getElementById("tb").innerHTML=tabledata
})
    
 