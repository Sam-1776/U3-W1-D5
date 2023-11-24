/* IMPOSTARE RISOLUZIONE SM */

/* CALL NUMBER */
// 404 per chiamare la funzione number 404
// 4242 per chiamare la funzione ricarica 
// qualsiasi numero avvia la funzione chiamata
// 111 per azzerare le chiamate


interface Smartphone {
    carica: number;
    numeroChiamate: number;
}

class UserP implements Smartphone{
    carica: number;
    numeroChiamate: number;
    constructor(_carica: number,_numeroChiamate: number, ){
        this.carica = _carica
        this.numeroChiamate = _numeroChiamate
    }

    Ricarica(unaRicarica: number): void{
        this.carica += unaRicarica;  
        console.log(`Hai effettuato una ricarica di ${unaRicarica}€`);
        
    }

    Chiamata(minutiDurata: number): void{
        let costo = minutiDurata * 0.2
        this.numeroChiamate++
        this.carica = this.carica - costo
        console.log(`Hai effettuato una chiamata ${minutiDurata}`);
        
    }

    numero404(): number{
        console.log(`Il tuo saldo è di ${this.carica}€`);
        return this.carica
    }

    getNumeroChiamate(): number{
        console.log(`Hai efftuato ${this.numeroChiamate} di chiamate`);
        return this.numeroChiamate
    }
    azzeraChiamate(): void{
        console.log(`Hai azzerato le chiamate`);
        this.numeroChiamate = 0
    }
}

let called = new UserP(70,0)


const btn = document.querySelectorAll(".btn") 
btn.forEach(element => {
    console.log(element.children);
    const num = element.children[0].innerHTML
    
    element.onclick = () => scrivi(num)
});

const div = document.querySelector("#number")
const numC = document.createElement("div")
numC.className = "d-flex justify-content-center align-items-center"
function scrivi(x: any) {
    console.log(x);
    div!.className = "d-flex flex-column justify-content-center align-items-center"
    const span = document.createElement("span")
    span.style = "font-size: 1.8rem"
    span.className = "fw-bold"
    span.innerText = x

    numC?.appendChild(span)
    
}
div?.appendChild(numC)

const call = document.querySelector("#call") as HTMLButtonElement
call.onclick = chiama

const keypad = document.getElementById("Keypad")
const chiamata = document.getElementById("chiamata")
const span = document.getElementsByTagName("span")
function chiama() {
    console.log(span);
    keypad?.classList.add("d-none")
    chiamata?.classList.remove("d-none")
    let numF: string = " "
    for (let i = 0; i < span.length; i++) {
            const element = span[i].innerHTML;
            JSON.stringify(element)
            numF += element
            if (i === span.length - 1) {
            console.log(numF);
            check(numF)
        }
    }
    
    
}


const h4 = document.createElement("h4")
function check(x:string) {
    console.log('il valore è',  typeof x);
    let control:number = Number(x)
    console.log(called);

    if (control ==  404) {
            h4.innerText = `Il tuo credito è di ${called.numero404()}€`
            div?.appendChild(h4)  
    } else if (control == 4242) {
        let numR: number = Math.floor(Math.random() * 50)
        console.log(numR);
            called.Ricarica(numR)
            h4.innerText = `hai fatto una ricarica di ${numR}€`
            div?.appendChild(h4)  
        
    }else if (control == 111) {
        called.azzeraChiamate()
        h4.innerText = `hai azzerato le chiamate`
        div?.appendChild(h4)
    } else {
        tempo()
    }
}

const btnE = document.querySelector("#end") as HTMLButtonElement
btnE.onclick = () =>{
    keypad?.classList.remove("d-none")
    chiamata?.classList.add("d-none")
    for (let i = 0; i < span.length; i++) {
        span[i].innerHTML = " ";
        
    }
    let durata = Number(h4.innerHTML) / 60
    console.log(isNaN(durata));
    if (isNaN(durata) === false) {
        called.Chiamata(durata)
    }
    h4.innerHTML = " ";
    clearInterval(time)
}


const recenti = document.getElementById("Recents") as HTMLDivElement
const recents = document.getElementById("recenti") as HTMLDivElement
recents.addEventListener("click", change)

const info = document.createElement("h4")
function change() {
    div?.classList.add("d-none")
    keypad?.classList.add("d-none")
    recenti?.classList.remove("d-none")
    recents.classList.add("active")
    menu.classList.remove("active")

    info.innerText = `Hai effettuato ${called.getNumeroChiamate()} chiamate`
}
recenti.appendChild(info)

const menu = document.getElementById("KeypadMenu")as HTMLDivElement
menu.addEventListener("click", backHome)

function backHome() {
    div?.classList.remove("d-none")
    keypad?.classList.remove("d-none")
    recenti?.classList.add("d-none")
    recents.classList.remove("active")
    menu.classList.add("active")
}

let times: number = 0;
let time: any = null;
function tempo() {
    clearInterval(time);
    time = setInterval(() => {
      h4.innerText = `${times}`;
      times++;
    }, 1000);
    div?.appendChild(h4)
  }
