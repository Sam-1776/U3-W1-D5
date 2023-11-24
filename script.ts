interface Smartphone {
    carica: number;
    numeroChiamate: number;
}

class User implements Smartphone{
    carica: number;
    numeroChiamate: number;
    nome: string;
    cognome: string;
    constructor(_carica: number,_numeroChiamate: number, _nome: string, _cognome: string){
        this.carica = _carica
        this.numeroChiamate = _numeroChiamate
        this.nome = _nome
        this.cognome = _cognome
    }

    Ricarica(unaRicarica: number): void{
        this.carica += unaRicarica;  
    }

    Chiamata(minutiDurata: number): void{
        let costo = minutiDurata * 0.2
        this.numeroChiamate++
        this.carica = this.carica - costo
    }

    numero404(): number{
        return this.carica
    }

    getNumeroChiamate(): number{
        return this.numeroChiamate
    }
    azzeraChiamate(): void{
        this.numeroChiamate = 0
    }
}

let Piero = new User(50, 0, 'Piero', 'Fanelli')
console.log(`L'utente ${Piero.nome} ${Piero.cognome}`);
console.log(`Ha di residuo ${Piero.carica}€`);
Piero.Ricarica(100)
console.log(`Ha di residuo ${Piero.carica}€`);
Piero.Chiamata(2)
console.log(`Il nuovo residuo è ${Piero.numero404()}€`);
Piero.Chiamata(10)
console.log(`Il nuovo residuo è ${Piero.numero404()}€`);
console.log(`L'utente ha effettuato ${Piero.getNumeroChiamate()} chiamate`);
Piero.azzeraChiamate()
console.log(`L'utente ha effettuato ${Piero.getNumeroChiamate()} chiamate`);


let Maria = new User(20, 2, 'Maria', 'Russo')
console.log(`L'utente ${Maria.nome} ${Maria.cognome}`);
console.log(`Ha di residuo ${Maria.carica}€`);
Maria.Ricarica(10)
console.log(`Ha di residuo ${Maria.carica}€`);
Maria.Chiamata(2)
console.log(`Il nuovo residuo è ${Maria.numero404()}€`);
Maria.Chiamata(10)
console.log(`Il nuovo residuo è ${Maria.numero404()}€`);
console.log(`L'utente ha effettuato ${Maria.getNumeroChiamate()} chiamate`);
Maria.azzeraChiamate()
console.log(`L'utente ha effettuato ${Maria.getNumeroChiamate()} chiamate`);


let Gianni = new User(100, 20, 'Gianni', 'Gianni')
console.log(`L'utente ${Gianni.nome} ${Gianni.cognome}`);
console.log(`Ha di residuo ${Gianni.carica}€`);
Gianni.Ricarica(100)
console.log(`Ha di residuo ${Gianni.carica}€`);
Gianni.Chiamata(30)
console.log(`Il nuovo residuo è ${Gianni.numero404()}€`);
Gianni.Chiamata(10)
console.log(`Il nuovo residuo è ${Gianni.numero404()}€`);
console.log(`L'utente ha effettuato ${Gianni.getNumeroChiamate()} chiamate`);
Gianni.azzeraChiamate()
console.log(`L'utente ha effettuato ${Gianni.getNumeroChiamate()} chiamate`);








