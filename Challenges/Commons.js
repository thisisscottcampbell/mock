const commonElements = (...args) => {

    //return with common elements
    const commons = [];

    //required key value to push into commons
    const qualifier = args.length;

    //create countObj tracking each element w/ number of occurences 
    const countObj = args.reduce((acc, curr) => {

        //get rid of duplicate elements in input arrayss
        currArr = new Set(curr);

        //iterate over deduped input array and build out countObj;
        currArr.forEach(element => {
            if (acc[element]) acc[element] += 1;
            else acc[element] = 1;
        })

        //return countObj;
        return acc;

    },{});

    //iterate over countObj to evalute properties
    for (let key in countObj) {

        //if key has value of qualifier, push into commons
        if (countObj[key] === qualifier) commons.push(key);
    };

    //return commons or messsage
    return commons.length > 0 ? commons : 'Nothing in common!'
}

const arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
const arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
const arr3 = [2, 100, 2000, 'dog', 3, 'lion'];

console.log(commonElements(arr1, arr2, arr3));