class Voxel{
    position: Vector;
    color: string;

    constructor(position:Vector,red:number,green:number,blue:number){
        this.position = position;
        this.color = '#' + red.toString(16) + green.toString(16) + blue.toString(16);
    }
}
