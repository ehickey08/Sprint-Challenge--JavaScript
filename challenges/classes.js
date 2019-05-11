// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMakerClass {
    constructor (length, width, height){
        this.length = length;
        this.height = height;
        this.width = width;
    }

    volume () {
        return this.length*this.width*this.height;
    }
    
    surfaceArea (){
        return 2*(this.length*this.width + this.length*this.height + this.width*this.height)
    }
}

let cuboidAsClass = new CuboidMakerClass(4, 5, 5);

console.log(cuboidAsClass.volume()); // 100
console.log(cuboidAsClass.surfaceArea()); // 130


class CubeMaker extends CuboidMakerClass {
    constructor (side) {
        super(side, side, side)
    }
}

let cube = new CubeMaker(5);
console.log(`Cube volume: ${cube.volume()}`);
console.log(`Cube surface area: ${cube.surfaceArea()}`);

class TriangularPrism extends  CuboidMakerClass {
    constructor (length, base, height, slant) {
        super (length, base, height);
        this.slant = slant;
    }

    volume() {
        return (1/2*this.width*this.length*this.height);
    }

    surfaceArea() {
        return this.width*this.height + 2*this.length*this.slant + this.length*this.width
    }


}

let triPrism = new TriangularPrism(10, 3, 5, 6);
console.log(`Triangular Prism volume: ${triPrism.volume()}`);
console.log(`Triangular Prism surface area: ${triPrism.surfaceArea()}`);

class Sphere {
    constructor (radius){
        this.radius = radius;
    }

    volume() {
        return 4/3*Math.PI*(Math.pow(this.radius, 3));
    }

    surfaceArea() {
        return 4*Math.PI*(Math.pow(this.radius,2));
    }
}

let ball = new Sphere (3);
console.log(`Sphere volume: ${ball.volume()}`);
console.log(`Sphere surface area: ${ball.surfaceArea()}`);