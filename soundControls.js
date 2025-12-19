// create a function to add an audio element to the HTML
function addAudio(){
    // create a new audio HTML element
    let audioElement = document.createElement("audio");
            // set the id so we can work with the audio element in other functions
            audioElement.setAttribute("id", "myAudio");
            // use the name of the desired sound file
            audioElement.setAttribute("src", "americanIdiot.mp3");
            // this adds the control dashboard to show that the audio file is working
            audioElement.setAttribute("controls", "controls");

            // add new audio elements to the empty div in the HTML
            document.getElementById("divAudio").appendChild(audioElement);

            // hide the add audio button
            document.getElementById("btnAddAudio").hidden =true;

            // unhide the play and pause buttons
            document.getElementById("btnPlayAudio").hidden = false;
            document.getElementById("btnPauseAudio").hidden = false;
        }

        // fucntion to play the audio
        function playAudio(){
            let audio = document.getElementById("myAudio");
            audio.play();
        }

        // fucntion to pause the audio
        function pauseAudio(){
            let audio = document.getElementById("myAudio");
            audio.pause();
        }