//Take two arguments, both optional, (seperator, limit)
//takes a string and seperates its letters, rendering them as elements of an array
// 1. seperator: determines the character to use for splitting the string. If left blank, the string will be returned in tact, but as an array
//2. limit: an interger specifying the number of splits. Items after limit will not be included in array,


const string = 'string'
string.split("") // with no spaces --> ["s","t","r","i","n","g"]
string.split() // --> ['string']
string.split(" ") // --> ['string']