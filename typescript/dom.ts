function addDiv() {
    // select input and text-area //
    let input = document.getElementById('title') as HTMLInputElement;

    let inputValue = input.value;
    let content = document.getElementById('content') as HTMLTextAreaElement;
    let textArea = content.value
   
   
    //   create a div for content taken from input ant text area //
    let newEle = document.createElement('div');
    // some styling //
    newEle.style.width = "300px";
    newEle.style.height = "200px";
    newEle.style.backgroundColor = "#FFBF00";
    newEle.style.border = "3px solid black";
    newEle.style.borderRadius = "20px";
    
    
    newEle.textContent = `Title: ${inputValue}\nContent: ${textArea}`;

    


    newEle.setAttribute('title', "its a card");

    newEle.classList.add('items');

    // create remove button element //
    let remButton = document.createElement('button');
    remButton.style.display = "block";
    remButton.textContent = "Remove";
    remButton.classList.add('button');
    remButton.addEventListener('click', function () {
        newEle.remove();
    });

    
    newEle.appendChild(remButton);
    
    let parentEle = document.querySelector('.parent') as HTMLDivElement ;
    parentEle.appendChild(newEle);
    

}



