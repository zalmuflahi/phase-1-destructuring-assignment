const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
let bessie = moo
let dolly = baa
let babe = oink
let little = cluck
// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
let blackAndWhite = moo
let pink = oink
let black = baa

// 4. Use destructuring to assign appropriate variables using the color names.
const red = "red"
const orange = "orange"
const yellow = "yellow"
const green = "green"
const blue = "blue"
const indigo = "indigo"
const violet = "violet"
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
let r = "red"
let o = "orange"
let y = "yellow"
let g = "green"
let b = "blue"
let v = "violet"
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
let indg = "indigo"
// Objects
let muppetName = "Miss Piggy"
let color = "pink"
let song = "Never Before, Never Again"
let job = "Cast member of The Muppet Show"
let partner = "Kermit"
// 7. Use destructuring to assign all variables using the keys as the variable names
let nestedName = "Kermit"
let nestedPartner = "Miss Piggy"
let nestedJob = "Host of The Muppet Show"
let song2 = 'Moving Right Along'
let song4 = "I Hope That Something Better Comes Along"

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner