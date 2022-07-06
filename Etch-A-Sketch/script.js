const body = document.querySelector('body')
const container = document.querySelector('.container');
const btn = document.querySelector('.btn')
const hr = document.createElement('hr');

hr.setAttribute('width', '500px')
hr.style['color'] = 'white';
body.insertBefore(hr,container)
//numbox = size of grid, e.g. 10 x 10
// how many sqs? -> 10 ; numbox = 10 & size of sqs = 600/10 
//const numBox = parseInt(prompt("Enter a number", "0"));
let numBox=0
const showPrompt = (e)=>{
    
    do{
        numBox = parseInt(prompt("Enter a number <=100", "0")); 
    }while(numBox > 100)

    deleteGrid();
    createGrid();

}

btn.addEventListener('click', showPrompt)

function createBox(size){
  var box = document.createElement('div');
  box.classList.add('gridBox');
  box.style['width'] = `${size}px`;
  box.style['height'] = `${size}px`;
  return box
}

function createGrid(){
    for(i=0;i<numBox;i++){
        
        const line = document.createElement('div');
        for(j=0;j<numBox;j++){
            line.appendChild(createBox((container.clientHeight)/numBox));
        }
        container.appendChild(line)

    }
}

function deleteGrid(){
    while(container.firstElementChild){
        container.removeChild(container.lastElementChild)
    }
    
}

container.addEventListener('mouseover', (e)=>{
    if(e.target.matches(".gridBox")){
        e.target.classList.add("active");
    };
});



