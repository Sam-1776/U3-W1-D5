var User = /** @class */ (function () {
    function User(_carica, _numeroChiamate, _nome, _cognome) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    User.prototype.Ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    User.prototype.Chiamata = function (minutiDurata) {
        var costo = minutiDurata * 0.2;
        this.numeroChiamate++;
        this.carica = this.carica - costo;
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var Piero = new User(50, 0, 'Piero', 'Fanelli');
console.log("L'utente ".concat(Piero.nome, " ").concat(Piero.cognome));
console.log("Ha di residuo ".concat(Piero.carica, "\u20AC"));
Piero.Ricarica(100);
console.log("Ha di residuo ".concat(Piero.carica, "\u20AC"));
Piero.Chiamata(2);
console.log("Il nuovo residuo \u00E8 ".concat(Piero.numero404(), "\u20AC"));
Piero.Chiamata(10);
console.log("Il nuovo residuo \u00E8 ".concat(Piero.numero404(), "\u20AC"));
console.log("L'utente ha effettuato ".concat(Piero.getNumeroChiamate(), " chiamate"));
Piero.azzeraChiamate();
console.log("L'utente ha effettuato ".concat(Piero.getNumeroChiamate(), " chiamate"));
var Maria = new User(20, 2, 'Maria', 'Russo');
console.log("L'utente ".concat(Maria.nome, " ").concat(Maria.cognome));
console.log("Ha di residuo ".concat(Maria.carica, "\u20AC"));
Maria.Ricarica(10);
console.log("Ha di residuo ".concat(Maria.carica, "\u20AC"));
Maria.Chiamata(2);
console.log("Il nuovo residuo \u00E8 ".concat(Maria.numero404(), "\u20AC"));
Maria.Chiamata(10);
console.log("Il nuovo residuo \u00E8 ".concat(Maria.numero404(), "\u20AC"));
console.log("L'utente ha effettuato ".concat(Maria.getNumeroChiamate(), " chiamate"));
Maria.azzeraChiamate();
console.log("L'utente ha effettuato ".concat(Maria.getNumeroChiamate(), " chiamate"));
var Gianni = new User(100, 20, 'Gianni', 'Gianni');
console.log("L'utente ".concat(Gianni.nome, " ").concat(Gianni.cognome));
console.log("Ha di residuo ".concat(Gianni.carica, "\u20AC"));
Gianni.Ricarica(100);
console.log("Ha di residuo ".concat(Gianni.carica, "\u20AC"));
Gianni.Chiamata(30);
console.log("Il nuovo residuo \u00E8 ".concat(Gianni.numero404(), "\u20AC"));
Gianni.Chiamata(10);
console.log("Il nuovo residuo \u00E8 ".concat(Gianni.numero404(), "\u20AC"));
console.log("L'utente ha effettuato ".concat(Gianni.getNumeroChiamate(), " chiamate"));
Gianni.azzeraChiamate();
console.log("L'utente ha effettuato ".concat(Gianni.getNumeroChiamate(), " chiamate"));
