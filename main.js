noseX=0;
noseY=0;
difference=0;
rightWristx=0;
leftWristx=0;

function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550, 550);
    canvas.position(560, 150);


    posenet=ml5.poseNet(video, modalLoaded);
    posenet.on('pose', gotResult);
}
function draw(){
    background("#2ff172")
   
}

function modalLoaded(){
    console.log("Modal has been loaded");
}
function gotResult(results){
    if(results.length > 0){
        console.log(results);
    }
}