class Animal{
    constructor(){
        this.name
        this.weight
    }
    setName(e){
        this.name=e;
    }
    setWeight(e){
        this.weight=e;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        return this.getName()+':'+this.getWeight()
    }
}

let objAnimal1 = new Animal();
objAnimal1.setName('Elephant');
objAnimal1.setWeight(45.6);
objAnimal1.toString();

let objAnimal2 = new Animal();
objAnimal2.setName('Mouse');
