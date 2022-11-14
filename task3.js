function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
let arr  = []

class Message {
    constructor(time, author, text){
        this.author = author
        this.text = text
        this.time = time
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
        arr.push(this.time+' '+author+': '+text)
        console.log(author+': '+text)
    }
}

let m = new Message()
let n = new Messenger()
let n1 = new Messenger()
n.send('Nika', 'txt-1')
n1.send('Kiki', 'txt-2')
n.show_history()