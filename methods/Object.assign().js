const objWithAssignations = { a: 2, b: 3, c: 4 };
const objToReceiveAssignments = {};

Object.assign(objToReceiveAssignments, objWithAssignations);

console.log(objToReceiveAssignments);
//{a: 2, b: 3, c: 4}

const otherObjToReceiveAssignments = { z: 20 };

Object.assign(otherObjToReceiveAssignments, objWithAssignations);

console.log(otherObjToReceiveAssignments);
//{ z: 20, a: 2, b: 3, c: 4 }
