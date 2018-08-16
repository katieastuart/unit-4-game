var randomNumber = 0;
        var crystal1value = 0;
        var crystal2value = 0;
        var crystal3value = 0;
        var crystal4value = 0;
        var score = 0;
        var wins = 0;
        var losses = 0;

        //function to generate a random number
        function randomIntFromInterval(min,max){
                return Math.floor(Math.random()*(max-min+1)+min);
                // console.log(randomNumber);
            };

        //set random number to guess
        function setRandomNumbr () {
                randomNumber = randomIntFromInterval(19,120);
                $("#number-to-guess").text(randomNumber);
            };

        setRandomNumbr();

        //set value for each crystal
        function setCrystalValues () {
            crystal1value = randomIntFromInterval(1,12);
            crystal2value = randomIntFromInterval(1,12);
            crystal3value = randomIntFromInterval(1,12);
            crystal4value = randomIntFromInterval(1,12);
        };

        setCrystalValues();
        
        //reset score
        function resetScore() {
            score = 0;
            $("#score").text(score);
        };

        resetScore()

        //game logic function. don't run now, run in click event
        function logic () {
        if (randomNumber === score) {
            console.log("WIN");
            wins = wins + 1;
            $("#wins").text(wins);
            setRandomNumbr();
            setCrystalValues();
            resetScore();
        }
            else if (randomNumber > score) {
                console.log("NOT YET");
            }
            else if (randomNumber < score) {
                console.log("LOSE");
                losses = losses + 1;
                $("#losses").text(losses);
                setRandomNumbr();
                setCrystalValues();
                resetScore();
            }
        };

        //on click event for each crystal
        $("#crystal1").on("click", function() {
            console.log("crystal 1 value: " + crystal1value);
            score = score + crystal1value;
            console.log(randomNumber + ":" + score);
            $("#score").text(score);
            logic();
        })

        $("#crystal2").on("click", function() {
            console.log("crystal 2 value: " + crystal2value);
            score = score + crystal2value;
            console.log(randomNumber + ":" + score);
            $("#score").text(score);
            logic();
        })

        $("#crystal3").on("click", function() {
            console.log("crystal 3 value: " + crystal3value);
            score = score + crystal3value;
            console.log(randomNumber + ":" + score);
            $("#score").text(score);
            logic();
        })

        $("#crystal4").on("click", function() {
            console.log("crystal 4 value: " + crystal4value);
            score = score + crystal4value;
            console.log(randomNumber + ":" + score);
            $("#score").text(score);
        })