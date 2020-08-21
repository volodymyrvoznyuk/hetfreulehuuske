import * as AdaptiveCards from "adaptivecards";


var card = {
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "Image",
            "url": "https://adaptivecards.io/content/adaptive-card-50.png"
        },
        {
            "type": "TextBlock",
            "text": "Hello **Adaptive Cards!**"
        }
    ],
    "actions": [
        {
            "type": "Action.OpenUrl",
            "title": "Learn more",
            "url": "https://adaptivecards.io"
        },
        {
            "type": "Action.OpenUrl",
            "title": "GitHub",
            "url": "https://github.com/Microsoft/AdaptiveCards"
        }
    ]
};
 
// Create an AdaptiveCard instance
var adaptiveCard = new AdaptiveCards.AdaptiveCard();
 
// Set its hostConfig property unless you want to use the default Host Config
// Host Config defines the style and behavior of a card
adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
    fontFamily: "Segoe UI, Helvetica Neue, sans-serif"
    // More host config options
});
 
// Set the adaptive card's event handlers. onExecuteAction is invoked
// whenever an action is clicked in the card
adaptiveCard.onExecuteAction = function(action) { alert("Ow!"); }
 
// Parse the card payload
adaptiveCard.parse(card);
 
// Render the card to an HTML element:
var renderedCard = adaptiveCard.render();
 
// And finally insert it somewhere in your page:
const root = document.getElementById("root");
root.appendChild(renderedCard);