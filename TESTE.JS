class Animal {
    constructor(nome, cor){
        this.nome = nome;
        this.cor = cor;
    }

    falar() {
    return `Olá meu nome é ${this.nome}.`;
    }
}

class cachorro extends Animal {
    constructor(nome, cor, raça){
        super(nome, cor);
        this.raça = raça;
    }
    latir(){
        return `Au au!`;
    }
}

class gato extends Animal {
    constructor(nome, cor, raça) {
        super(nome, cor);
        this.raça = raça;
    }
    miar(){
        return `Miau!`;
    }
}

const animais = [
    new cachorro("Rex","marrom","pastor alemão"),
    new gato("mia","preto","siamês")
];

for (const animal of animais){
    console.log(`O animal "${animal.nome}" é ${animal.cor}.`);
}
    
for (const animal of animais){
    console.log(animal.falar());
}

const Cachorro = animais[0];
console.log(Cachorro.latir());

const Gato = animais[1];
console.log(Gato.miar());