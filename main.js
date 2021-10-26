
var value=true;
var todos=[];
while(value){
    var option=prompt("Todo App\n----------------------------------\n 1.Add todo\n 2.Show all todos\n 3.Delete todo\n\nChoose your option");
    switch (option){
        case "1":
            const task=prompt("Enter your task");
            todos.push(task)
            alert("Todo added");
            break;
        case "2":
            if(todos.length===0){
                alert("No todos added");
            }
            else{
                let str="";
                todos.forEach((item,index)=>{
                    let count=index+1;
                    str=str+`\n${index+1}.${item}`;
                })
                alert(`Todos \n--------------------\n ${str}`)
            }
            break;
        case "3":
            let index=prompt("Enter your task number");
            if(todos.length!=0){
                todos.splice(parseInt(index)-1,1);
            }
            break;      

        default:
            if(confirm("Do you want to quit?")){
                value=false;
                break;
            }
            else{
                break;
            }  
    }
}