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
        console.log(`Hai effettuato una ricarica di ${unaRicarica}€`);
        
    }

    Chiamata(minutiDurata: number): void{
        let costo = minutiDurata * 0.2
        this.numeroChiamate++
        this.carica = this.carica - costo
        console.log(`Hai effettuato una chiamata ${minutiDurata} min`);
        
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

let Piero = new User(50, 0, 'Piero', 'Fanelli')
console.log(`---------- L'utente ${Piero.nome} ${Piero.cognome} ----------`);
Piero.numero404()
Piero.Ricarica(100)
Piero.numero404()
Piero.Chiamata(2)
Piero.numero404()
Piero.Chiamata(10)
Piero.numero404()
Piero.getNumeroChiamate()
Piero.azzeraChiamate()


let Maria = new User(20, 2, 'Maria', 'Russo')
console.log(`---------- L'utente ${Maria.nome} ${Maria.cognome} ----------`);
Maria.numero404()
Maria.Ricarica(20)
Maria.numero404()
Maria.Chiamata(2)
Maria.numero404()
Maria.Chiamata(5)
Maria.numero404()
Maria.getNumeroChiamate()
Maria.azzeraChiamate()


let Gianni = new User(100, 20, 'Gianni', 'Gianni')
console.log(`---------- L'utente ${Gianni.nome} ${Gianni.cognome} ----------`);
Gianni.numero404()
Gianni.Ricarica(100)
Gianni.numero404()
Gianni.Chiamata(40)
Gianni.numero404()
Gianni.Chiamata(10)
Gianni.numero404()
Gianni.getNumeroChiamate()
Gianni.azzeraChiamate()








