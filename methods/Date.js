let date = new Date().toUTCString();
//Sat, 26 Dec 2020 19:49:57 GMT

const renderDate = new Date().toUTCString().slice(0, 16);
//Sat, 26 Dec 2020

const noDayDate = new Date().toUTCString.slice(5, 16);
//26 Dec 2020
