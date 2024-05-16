function OtherProducts(arr) { 
    const result = [];

    // Calculate the product of all elements in the array
    const totalProduct = arr.reduce((acc, curr) => acc * curr, 1);

    // Calculate the product of all other elements for each element in the array
    for (let i = 0; i < arr.length; i++) {
        const otherProduct = totalProduct / arr[i];
        result.push(otherProduct);
    }

    // Return the result as a string joined by a hyphen
    return result.join("-");
}
    
// keep this function call here 
console.log(OtherProducts(readline()));