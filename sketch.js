var marks=[40,20,65,10,80]
// console.log(marks[3])

function score_avg(){
  var sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4]
  var avg=sum/marks.length
  console.log(avg)
}

function setup() {
  createCanvas(400, 400);
  score_avg()
}

function draw() {
  background(220);
}