'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Dinner Ideas';

/**
 * Array containing dinner ideas.
 */
var DINNERS = [
    "make chicken adobo.",
    "go out to chineese food.",
    "make tacos. Beef, chicken, pork, or fish are a few ideas.",
    "go out to mexican food.",
    "make enchaladas",
    "make a grilled cheese sandwich and a bowl of tomato soup.",
    "cook a pot roast.",
    "grill up hamburgers or hot dogs",
    "make barbeque pulled pork",
    "make stir fry. Both chicken or beef are delicious",
    "make a salad. Options are cob, ceaser, house, or anything you like!",
    "make alfredo. Chicken or bacon go great with it.",
    "make speghetti.",
    "make scalloped potatoes.",
    "cook a ham or turkey.",
    "make home made mac and cheese.",
    "home cook a soup. Baked potato, brocoli chedder, or tomato are all good options.",
    "grill up a steak or some ribs.",
    "go out to a steak house.",
    "go out for sushi.",
    "go out for salmon or lobster.",
    "go out for american food. A burger is always delicious.",
    "make fried rice.",
    "make breakfast for dinner. Pancakes, waffles or omlets are always a good choice.",
    "cook lasagna.",
    "go out for fish and chips.",
    "make fish and chips.",
    "make shrimp scampi or prawns.",
    "go to an oyster bar.",
    "make a fruit salad.",
    "cook lemon chicken.",
    "have a baked potato bar.",
    "prepare a meat and cheese platter.",
    "go out for teriyaki.",
    "make teriyaki and rice.",
    "pick up some fried chicken.",
    "make mashed potatoes and gravy with your choice of meat and vegetables.",
    "home make a pizza.",
    "go out to a pizza joint.",
    "go out for itallian.",
    "make itallian food.",
    "go out for french food.",
    "go out for pho or ramen.",
    "you're asking me? I'm a machine. I don't eat!",
    "make pesto pasta. Chicken is a great addition.",
    "bake some chicken. Then put pesto, tomato, and mazzerela cheese or goat cheese on top. Add your choice of a side.",
    "go out to thai food.",
    "make thai food. I love peanut sauce.",
    "go to indian food.",
    "go out to a greek restaurant",
    "make fajitas",
    "make indian food. Curry is delicious and easy."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetDinner');
    },
    'GetDinnerIntent': function () {
        this.emit('GetDinner');
    },
    'GetDinner': function () {
        // Get a random dinner idea from the DINNERS array
        var dinnerIndex = Math.floor(Math.random() * DINNERS.length);
        var randomDinner = DINNERS[dinnerIndex];

        // Create speech output
        var speechOutput = "Here's your dinner: " + randomDinner;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomDinner)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say give me a dinner, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
