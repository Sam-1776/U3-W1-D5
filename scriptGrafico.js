/* CALL NUMBER */
// 404 per chiamare la funzione number 404
// 4242 per chiamare la funzione ricarica 
// qualsiasi numero avvia la funzione chiamata
// 111 per azzerare le chiamate
var UserP = /** @class */ (function () {
    function UserP(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    UserP.prototype.Ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
        console.log("Hai effettuato una ricarica di ".concat(unaRicarica, "\u20AC"));
    };
    UserP.prototype.Chiamata = function (minutiDurata) {
        var costo = minutiDurata * 0.2;
        this.numeroChiamate++;
        this.carica = this.carica - costo;
        console.log("Hai effettuato una chiamata ".concat(minutiDurata));
    };
    UserP.prototype.numero404 = function () {
        console.log("Il tuo saldo \u00E8 di ".concat(this.carica, "\u20AC"));
        return this.carica;
    };
    UserP.prototype.getNumeroChiamate = function () {
        console.log("Hai efftuato ".concat(this.numeroChiamate, " di chiamate"));
        return this.numeroChiamate;
    };
    UserP.prototype.azzeraChiamate = function () {
        console.log("Hai azzerato le chiamate");
        this.numeroChiamate = 0;
    };
    return UserP;
}());
var called = new UserP(70, 0);
var btn = document.querySelectorAll(".btn");
btn.forEach(function (element) {
    console.log(element.children);
    var num = element.children[0].innerHTML;
    element.onclick = function () { return scrivi(num); };
});
var div = document.querySelector("#number");
var numC = document.createElement("div");
numC.className = "d-flex justify-content-center align-items-center";
function scrivi(x) {
    console.log(x);
    div.className = "d-flex flex-column justify-content-center align-items-center";
    var span = document.createElement("span");
    span.style = "font-size: 1.8rem";
    span.className = "fw-bold";
    span.innerText = x;
    numC === null || numC === void 0 ? void 0 : numC.appendChild(span);
}
div === null || div === void 0 ? void 0 : div.appendChild(numC);
var call = document.querySelector("#call");
call.onclick = chiama;
var keypad = document.getElementById("Keypad");
var chiamata = document.getElementById("chiamata");
var span = document.getElementsByTagName("span");
function chiama() {
    console.log(span);
    keypad === null || keypad === void 0 ? void 0 : keypad.classList.add("d-none");
    chiamata === null || chiamata === void 0 ? void 0 : chiamata.classList.remove("d-none");
    var numF = " ";
    for (var i = 0; i < span.length; i++) {
        var element = span[i].innerHTML;
        JSON.stringify(element);
        numF += element;
        if (i === span.length - 1) {
            console.log(numF);
            check(numF);
        }
    }
}
var h4 = document.createElement("h4");
function check(x) {
    console.log('il valore è', typeof x);
    var control = Number(x);
    console.log(called);
    if (control == 404) {
        h4.innerText = "Il tuo credito \u00E8 di ".concat(called.numero404(), "\u20AC");
        div === null || div === void 0 ? void 0 : div.appendChild(h4);
    }
    else if (control == 4242) {
        var numR = Math.floor(Math.random() * 50);
        console.log(numR);
        called.Ricarica(numR);
        h4.innerText = "hai fatto una ricarica di ".concat(numR, "\u20AC");
        div === null || div === void 0 ? void 0 : div.appendChild(h4);
    }
    else if (control == 111) {
        called.azzeraChiamate();
        h4.innerText = "hai azzerato le chiamate";
        div === null || div === void 0 ? void 0 : div.appendChild(h4);
    }
    else {
        tempo();
    }
}
var btnE = document.querySelector("#end");
btnE.onclick = function () {
    keypad === null || keypad === void 0 ? void 0 : keypad.classList.remove("d-none");
    chiamata === null || chiamata === void 0 ? void 0 : chiamata.classList.add("d-none");
    for (var i = 0; i < span.length; i++) {
        span[i].innerHTML = " ";
    }
    var durata = Number(h4.innerHTML) / 60;
    console.log(isNaN(durata));
    if (isNaN(durata) === false) {
        called.Chiamata(durata);
    }
    h4.innerHTML = " ";
    clearInterval(time);
};
var recenti = document.getElementById("Recents");
var recents = document.getElementById("recenti");
recents.addEventListener("click", change);
var info = document.createElement("h4");
function change() {
    div === null || div === void 0 ? void 0 : div.classList.add("d-none");
    keypad === null || keypad === void 0 ? void 0 : keypad.classList.add("d-none");
    recenti === null || recenti === void 0 ? void 0 : recenti.classList.remove("d-none");
    recents.classList.add("active");
    menu.classList.remove("active");
    info.innerText = "Hai effettuato ".concat(called.getNumeroChiamate(), " chiamate");
}
recenti.appendChild(info);
var menu = document.getElementById("KeypadMenu");
menu.addEventListener("click", backHome);
function backHome() {
    div === null || div === void 0 ? void 0 : div.classList.remove("d-none");
    keypad === null || keypad === void 0 ? void 0 : keypad.classList.remove("d-none");
    recenti === null || recenti === void 0 ? void 0 : recenti.classList.add("d-none");
    recents.classList.remove("active");
    menu.classList.add("active");
}
var times = 0;
var time = null;
function tempo() {
    clearInterval(time);
    time = setInterval(function () {
        h4.innerText = "".concat(times);
        times++;
    }, 1000);
    div === null || div === void 0 ? void 0 : div.appendChild(h4);
}
