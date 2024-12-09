const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector('body')

buttons.forEach(function (box){
    console.log(box);
    box.addEventListener('click', function(a){
        console.log(a);
        console.log(a.target);
        if(a.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
            body.style.color = 'white';
        }
        else if(a.target.id === 'green'){
            body.style.backgroundColor = 'green';
            body.style.color = 'white';
            // body.style.borderStyle = '3px solid white';
        }
        else if(a.target.id === 'red'){
            body.style.backgroundColor = 'red';
        }
        else if(a.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
            body.style.color = 'black';
        }
    })
    
});

const exit = document.querySelector('#back')
// console.log(exit);
exit.addEventListener('click', function(ex){
    if(ex.target.id === 'back'){
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
    
})
