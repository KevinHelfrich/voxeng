import Vector from './Vector';
export class Matrix{
    elements: number[];

    constructor(){
        elements = [0,0,0,
                    0,0,0,
                    0,0,0];
    }

    apply(rhs:Vector):Vector{
        return new Vector(
            this.elements[0]*rhs.x + this.elements[1]*rhs.y + this.elements[2]*rhs.z,
            this.elements[3]*rhs.x + this.elements[4]*rhs.y + this.elements[5]*rhs.z,
            this.elements[6]*rhs.x + this.elements[7]*rhs.y + this.elements[8]*rhs.z);
    }
}
