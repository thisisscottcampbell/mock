const cats = ['buddy', 'felix', 'garfield'];
const dogs = ['pluto', 'snoopy', 'brian'];

const catsAndDogs = [...cats, ...dogs];

//['buddy', 'felix', 'garfield','pluto', 'snoopy', 'brian']

const catsAndDogsAndBirds = [...catsAndDogs, 'woodstock'];

// ['buddy', 'felix', 'garfield', 'pluto', 'snoopy', 'brian', 'woodstock']
