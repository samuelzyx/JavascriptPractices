var solution = function (s){
    let names = s.split("-");

    let lastIndex = names.length-1;
    let lastAnimal = names[lastIndex];

    if(lastAnimal==""){
        lastAnimal = names[lastIndex-1];
    }
    return lastAnimal.length;
}

const a = "Elephant-Tiger-Lion-";
const output = solution(a);
console.log(output);
