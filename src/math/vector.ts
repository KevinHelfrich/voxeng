class Vector{
    x: number;
    y: number;
    z: number;

    constructor(x:number,y:number,z:number){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    dot(rhs:Vector):number{
        return this.x*rhs.x + this.y*rhs.y + this.z*rhs.z;
    }

    cross(rhs:Vector):Vector{
        return new Vector(
            this.y*rhs.z - this.z*rhs.y,
            this.z*rhs.x - this.x*rhs.z,
            this.x*rhs.y - this.y*rhs.x);
    }
}
