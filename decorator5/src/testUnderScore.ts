import {max} from 'underscore';

type Stooge = {
    name: string,
    age: number
}
var stooges:Stooge[] = [{name: 'moe', age: 40}, 
    {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    
max(stooges, function(stooge: Stooge){ return stooge.age; });