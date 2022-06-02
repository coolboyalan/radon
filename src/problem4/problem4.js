const a = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const b = []
function odd(){
  for(x=0;b.length<10;x++){
    if(x%2!==0){
      b.push(x)
    }
  }return b
}

odd()

const a1 = [1,2,3]
const a2 = [1,6,5]
const a3 = [8,4,9]
const a4 = [4,6,3]
const a5 = [2,9,7]

const o1 = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter"],["fatasy","Pans Labyrinth"]]

module.exports= {
  months:a,
  odd:b,
  arr1:a1,
  arr2:a2,
  arr3:a3,
  arr4:a4,
  arr5:a5,
  o1:o1,
}