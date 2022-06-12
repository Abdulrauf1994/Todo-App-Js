let list = document.getElementById("list")

let addTodo = ()=>{
    let input = document.getElementById("todo-item");
    let li = document.createElement('li')
    let liText = document.createTextNode(input.value)
    li.appendChild(liText)
    // list.appendChild(li)

    // create delete button

    let delBtn = document.createElement('button')
    let delText = document.createTextNode('Delete')
    delBtn.setAttribute('class','li_delete')
    delBtn.setAttribute('onclick','deleteitem(this)')
    delBtn.appendChild(delText)

    li.appendChild(delBtn)
    
    list.appendChild(li)
    input.value=" "
    console.log(li)
}

let deleteitem = (e)=>{
    e.parentNode.remove()
    console.log(e.parentNode)
    
}


let delAll=()=>{
    list.innerHTML=" "
}

