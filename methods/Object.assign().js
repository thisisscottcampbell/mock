const objWithAssignations = { a: 2, b: 3, c: 4 };
const objToGetAssignments = {};

Object.assign(objToGetAssignments, objWithAssignations);

console.log(objToGetAssignments);

const otherObjToReceiveAssignments = { z: 20 };

Object.assign(otherObjToReceiveAssignments, objWithAssignations);

console.log(otherObjToReceiveAssignments);

Object.getOwnPropertyNames(objWithAssignations).forEach(
	(property) => delete objWithAssignations[property]
);

console.log(objWithAssignations);
//{}
