var User = /** @class */ (function () {
    function User(_carica, _numeroChiamate, _nome, _cognome) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    User.prototype.Ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
        console.log("Hai effettuato una ricarica di ".concat(unaRicarica, "\u20AC"));
    };
    User.prototype.Chiamata = function (minutiDurata) {
        var costo = minutiDurata * 0.2;
        this.numeroChiamate++;
        this.carica = this.carica - costo;
        console.log("Hai effettuato una chiamata ".concat(minutiDurata, " min"));
    };
    User.prototype.numero404 = function () {
        console.log("Il tuo saldo \u00E8 di ".concat(this.carica, "\u20AC"));
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        console.log("Hai efftuato ".concat(this.numeroChiamate, " di chiamate"));
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        console.log("Hai azzerato le chiamate");
        this.numeroChiamate = 0;
    };
    return User;
}());
var Piero = new User(50, 0, 'Piero', 'Fanelli');
console.log("---------- L'utente ".concat(Piero.nome, " ").concat(Piero.cognome, " ----------"));
Piero.numero404();
Piero.Ricarica(100);
Piero.numero404();
Piero.Chiamata(2);
Piero.numero404();
Piero.Chiamata(10);
Piero.numero404();
Piero.getNumeroChiamate();
Piero.azzeraChiamate();
var Maria = new User(20, 2, 'Maria', 'Russo');
console.log("---------- L'utente ".concat(Maria.nome, " ").concat(Maria.cognome, " ----------"));
Maria.numero404();
Maria.Ricarica(20);
Maria.numero404();
Maria.Chiamata(2);
Maria.numero404();
Maria.Chiamata(5);
Maria.numero404();
Maria.getNumeroChiamate();
Maria.azzeraChiamate();
var Gianni = new User(100, 20, 'Gianni', 'Gianni');
console.log("---------- L'utente ".concat(Gianni.nome, " ").concat(Gianni.cognome, " ----------"));
Gianni.numero404();
Gianni.Ricarica(100);
Gianni.numero404();
Gianni.Chiamata(40);
Gianni.numero404();
Gianni.Chiamata(10);
Gianni.numero404();
Gianni.getNumeroChiamate();
Gianni.azzeraChiamate();
