function gettime() {
    let now = new Date();
    return `${now.toLocaleTimeString().slice(0,-3)}`
}
let arr  = []

class Message {
    constructor(time, author, text){
        this.author = author
        this.text = text
        this.time = time
    }
    toHtml(){
        arr.forEach((el) => {
            let div = document.createElement('div')
            div.innerHTML = el
            document.querySelector('.history').append(div)
        })
    }
}
class Messenger extends Message{
    constructor(time, author, text, history){
        super(time, author, text)
        this.history = history
    }
    
    show_history(){
        arr.forEach((element) => {
            console.log(element)
        })
    }

    send(author, text){
        this.time = gettime() 
        arr.push(this.time+'\t'+author+': '+text)
        console.log(author+': '+text)
    }
}
console.log(document.querySelector('.name').value)
let m = new Message()
let n = new Messenger()

document.querySelector('.btn-send').addEventListener('click', () => {
    n.send(document.querySelector('.name').value, document.querySelector('.message').value)
    document.querySelector('.name').value = ''
    document.querySelector('.message').value = ''
})

document.querySelector('.btn-show').addEventListener('click', () => {
    m.toHtml()
    n.show_history()
})
