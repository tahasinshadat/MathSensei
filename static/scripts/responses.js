function getBotResponse(input) {
    //rock paper scissors
    if (input.toLowerCase() == "yes") {
        return "Great! You can start by watching some of the recommended videos or taking the Personality Quiz!";
    } else if (input.toLowerCase() == "no") {
        return "It'll be fun!";
    } else if (input.toLowerCase() == "do you like math") {
        return "Of Course! Math is Great and I love it!";
    } else if (input.toLowerCase() == "Whose mr.morgenroth") {
        return "He's Tahasin's PreCalc Teacher!";
    }

    // Simple responses
    if (input.toLowerCase() == "hello") {
        return "Hello there!";
    } else if (input.toLowerCase() == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Sorry but I can't respond to that. To be able to respond to you fully I need to be trained more as a language model. Currently this is a Demo of what the Math Sensei Interface would be like.";
    }
}