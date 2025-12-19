// if we need to store 20 plants we could set up 20 variables, but that leads to potential problems
        let plant1 = "Rose";
        let plant2 = "Nightshade";
        let plant3 = "Hyacinth";
        let plant4 = "Belladonna";
        let plant5 = "Cactus";
        let plant6 = "Strawberry";

        // a better way to store our plant list would be using a data structure - we will use an array
        let arrPlants = ["Rose","Nightshade","Hyacinth","Belladonna","Cactus","Strawberry"];

        // function to add a plant to the array
        function addPlant(){
            // get the new plant name
            let newPlant = document.getElementById("txtNewPlant").value;

            // add the new plant to the array
            arrPlants.push(newPlant);
        }

        // function will loop through the array of plants and show them in the ul in the HTML code
        function showPlants(){
            // loop through the plant array and build an li for each plant

            // shortcut/nickname to the ul in the HTML
            let ulPlants = document.getElementById("ulPlants");

            // use a foreach loop to run through the list
            arrPlants.forEach(function(plant, index){
                // create the list item - li - using JavaScript
                let li = document.createElement("li");
                // this will cause our plant name to show on the screen in the ul
                li.textContent = plant;

                // this will add the new list item to the existing unordered list
                ulPlants.appendChild(li);
            });
        }