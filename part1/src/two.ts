
// z has a default value
function add(x: number, y: number, z: number = 10): number {
    return x + y;
}

let res = add(4,5);
res = add(6,2,77);

// age is optional
function doTask(name:string, age?:number) {
    if(age === undefined) {
        
    }
}