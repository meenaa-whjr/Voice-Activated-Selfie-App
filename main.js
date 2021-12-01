var SpeechRecognition = window.webkitSpeechRecognition;
var ea_sports=new SpeechRecognition();

function speak(){
    ea_sports.start();

}

ea_sports.onresult=function(event){
    console.log(event)
    var what_i_said=event.results[0][0].transcript;
    document.getElementById("stt").innerHTML=what_i_said;
    if(what_i_said=="take my selfie"){
        console.log("Taking Selfie...");
        webcam_and_selfie();
    }
    else{
        
        var SpeechSynth= window.speechSynthesis;
        var error_speech="I did not hear you say take my selfie. Please try again";
        var speakinge = new SpeechSynthesisUtterance(error_speech);
        SpeechSynth.speak(speakinge);
        console.log("spoken");
        window.alert("We did not hear you say 'take my selfie.' Please try again.")
    }
}
Webcam.set({
    width:300,height:300,image_format:'jpeg',jpeg_quality:90
});
var webtag = document.getElementById("webcam");
function webcam_and_selfie(){
    var SpeechSynth = window.speechSynthesis;
    var timer_speech="Taking your selfie in five seconds";
    var speaking = new SpeechSynthesisUtterance(timer_speech);
    SpeechSynth.speak(speaking);
    console.log("spoken");
    Webcam.attach(webtag);
    setTimeout(function()
        {snapshot(); saveimg();},5000
    );
}

function snapshot(){
    Webcam.snap(function(imagecontain)
    {document.getElementById("selfie").innerHTML="<img id='imgeee' src='"+imagecontain+"'>";}
    );

}

function saveimg(){
    var atag=document.getElementById("a");
    imgeh=document.getElementById("imgeee").src;
    atag.href=imgeh;
    atag.click();
}