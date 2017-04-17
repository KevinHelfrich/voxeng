import {Vector} from './Vector';
export class Matrix{
    elements: number[];

    constructor(){
        this.elements = [0,0,0,
                    0,0,0,
                    0,0,0];
    }

    apply(rhs:Vector):Vector{
        return new Vector(
            this.elements[0]*rhs.x + this.elements[1]*rhs.y + this.elements[2]*rhs.z,
            this.elements[3]*rhs.x + this.elements[4]*rhs.y + this.elements[5]*rhs.z,
            this.elements[6]*rhs.x + this.elements[7]*rhs.y + this.elements[8]*rhs.z);
    }

    multiply(rhs:Matrix):Matrix{
        var result = new Matrix();

        for(var a = 0;a < 3;a++){
            for(var b = 0; b < 3; b++){
                var sum:number = 0;
                for(var c = 0;c < 3; c++){
                    sum += this.elements[a+3*c]*rhs.elements[c+3*b];
                }
                result.elements[a+3*b] = sum;
            }
        }
        return result;
    }

    setRotX(angle:number){
        this.elements = [1,0,0,
                        0,Math.cos(angle),-1*Math.sin(angle),
                        0,Math.sin(angle),Math.cos(angle)];
    }

    setRotY(angle:number){
        this.elements = [Math.cos(angle),0,Math.sin(angle),
                        0,1,0,
                        -1*Math.sin(angle),0,Math.cos(angle)];
    }

    setRotZ(angle:number){
        this.elements = [Math.cos(angle),-1*Math.sin(angle),0,
                        Math.sin(angle),Math.cos(angle),0,
                        0,0,1];
    }
}
