function validateForm(){
                //let firstName = "";

                // get the value the user entered in for their first name
                // we will remove any spaces at the beginning or end with trim()
                let firstName = document.getElementById("txtFirstName").value.trim();

                //let lastName = "";

                let lastName = document.getElementById("txtLastName").value.trim();

                //let zipCode = "";

                let zipCode = document.getElementById("txtZip").value.trim();

                // console.log("firstName=" + firstName);
                // console.log("lastName=" + lastName);
                // console.log("zipCode=" + zipCode);

                // validation - we need to make sure that the first name + " " + last name is less than 20 characters
                // zip code needs to be exactly 5 digits

                // variable to store the message that we will display to the user
                let message = "";

                // concatenate first name + " " + last name
                fullName = firstName + " " + lastName;

                // console.log("fullName=" + fullName);

                // verify the number of characters in the full name variable
                if (fullName.length > 20 || fullName.length == 1){
                    // an invalid name has been entered
                    message = "Invalid name, retry."
                    // console.log("invalid name")
                }
                else if(zipCode.length != 5){
                    message = "Invalid zip code, retry.";
                    // console.log("invalid zip code");
                }
                else{
                    message = "Welcome, " + firstName + ". The secret message is Feed the Machine"
                }

                // display the message to the user on the div in the HTML section
                document.getElementById("divMessage").textContent = message;
            }