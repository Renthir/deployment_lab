const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')

function doAThing(){
    axios.get('http://54.183.238.138/' + 'cyber')
    .then((res) => {
        
    })
}

function doAnotherThing(){
    axios.get('http://54.183.238.138/' + 'punk')
    .then((res) => {
        
    })
}

function doSomethingElse(){
    axios.get('http://54.183.238.138/' + 'gothic')
    .then((res) => {
        
    })
}

button1.addEventListener('click', doAThing)
button2.addEventListener('click', doAnotherThing)
button3.addEventListener('click', doSomethingElse)