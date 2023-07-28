const nums = [
 [],
 [],
 [600,500,400, 300, 200, 100, 50, 25, 12.5, 6.25]
];

let color = random(200);

function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {
 background(255, 200, 255);
 for (let i = 2000; i > nums[0].length; i--) {
  let num = Math.random();
  nums[0].push((num * 10000));
  for (let j = 2000; j > nums[1].length; j--) {
   let num = Math.random();
   nums[1].push((num * 10000));
  }
 }
 //Dots
 for (let i = 0; i < nums[0].length; i++) {
  point(nums[0][i], windowHeight / 2);
  stroke(random(230), 100, random(250))
  strokeWeight(random(100))
 }
 for (let j = 0; j < nums[1].length; j++) {
  point(windowWidth / 2, nums[1][j]);
  stroke(random(200), 100, random(250))
  strokeWeight(random(100))
 }
 //Inner Circles
 strokeWeight(random(TAU * TAU))
 stroke(255);
 fill(0);
 for (let k = 0; k < nums[2].length; k++) {
  ellipse(windowWidth / 2, windowHeight / 2, nums[2][k], nums[2][k]);
 }

}
