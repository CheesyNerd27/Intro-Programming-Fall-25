// function to test for the palindrome
        function testPalin(){
            // get the value that the user entered in the text box and remove spaces at the beginning and end with the .trim
            let userInput = document.getElementById("txtInput").value.trim();

            // console.log("userInput=" + userInput);

            // == isn't necessary since the statement implies it
            if (isPalindrome(userInput)) {
                document.getElementById("divResult").textContent = "This is a palindrome: " + userInput;
            }
            else {
                document.getElementById("divResult").textContent = "No, this is not a palindrome";
            }
        }

        // this function will test if a word is a palindrome
        function isPalindrome(wordToTest){
            // remove any spaces between words
            let cleanedWord = wordToTest.replace(/\s/g, "");

            // change any uppercase letters to lowercase
            cleanedWord = cleanedWord.toLowerCase();

            // console.log("cleanedWord=" + cleanedWord);

            // convert the cleaned string to an array
            let arrCleaned = cleanedWord.split("");

            // reverse the array content
            arrCleaned = arrCleaned.reverse();

            // take our reversed array and convert it back to a string
            let reversedWord = arrCleaned.join("");

            // console.log("reversedWord=" + reversedWord);

            // compare if the cleaned and reversed words are the same

            return cleanedWord == reversedWord;
        }