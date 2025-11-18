// this variable will keep track of the current interval so that we can stop the interval
        let intervalID = 0;

        // this function will start the image moving around
        function startMove(){
            //create a shortcut/nickname to the image in the HTML
            let image = document.getElementById("HelloWorld")

            // store the current interval ID
            intervalID = setInterval(function(){
                // the code that runs repeatedly
                let xCord = getRandNum();
                let yCord = getRandNum();

                // change the x cord
                image.style.left = xCord + "px";
                image.style.top = yCord + "px";

                // swap the buttons being enabled
                document.getElementById("btnStart").disabled = true;
                document.getElementById("btnStop").disabled = false;

            }, 1000); // this code will run every second
        }

        // function to stop the image from moving
        function stopMove(){
            // call clear interval and pass in the interval ID
            clearInterval(intervalID);

            document.getElementById("btnStop").disabled = true;
            document.getElementById("btnStart").disabled = false;
        }

        // function to randomly generate a number
        function getRandNum(){
            // get a random number between 0 and 799
            return Math.floor(Math.random() * 800);
        }