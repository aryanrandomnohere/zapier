import {PrismaClient} from '../generated/client/index.js';
const client = new PrismaClient();

async function main() {
    await client.availableTriggers.create({
        data:{
            id:"webhook",
            name:"WebHook",
            metadata: {"fields":[{"name":"triggerEvent","options":[{"id":"Catch Hook","type":"instant","description":"Triggers when a POST, PUT, or GET request is made to a Zapier URL.","optionIndex":0},{"id":"Catch Raw Hook","type":"instant","description":"Triggers when a POST, PUT, or GET request is made to a Zapier URL. Gives the request body unparsed (max 2 MB) and also includes headers.","optionIndex":1},{"id":"Retrieve Poll","type":"polling","description":"Triggers when a request to a URL returns new entries.","optionIndex":2}],"required":true,"fieldLabel":"Trigger Event","fieldValue":"","fieldNumber":0,"fieldInputType":"dropdown","fieldPlaceholder":"Select a trigger event"}],"stepName":"Setup","completed":false,"stepNumber":1,"stepDescription":"Select the app and trigger event."},
            optionConfiguration:{"fields":[{"name":"triggerEvent","options":[{"id":"Catch Hook","type":"instant","description":"Triggers when a POST, PUT, or GET request is made to a Zapier URL.","optionIndex":0},{"id":"Catch Raw Hook","type":"instant","description":"Triggers when a POST, PUT, or GET request is made to a Zapier URL. Gives the request body unparsed (max 2 MB) and also includes headers.","optionIndex":1},{"id":"Retrieve Poll","type":"polling","description":"Triggers when a request to a URL returns new entries.","optionIndex":2}],"required":true,"fieldLabel":"Trigger Event","fieldValue":"","fieldNumber":0,"fieldInputType":"dropdown","fieldPlaceholder":"Select a trigger event"}],"stepName":"Setup","completed":false,"stepNumber":1,"stepDescription":"Select the app and trigger event."},
            imagePath: "https://zapier-images.imgix.net/storage/services/6aafbb717d42f8b42f5be2e4e89e1a15.png?auto=format%2Ccompress&fit=crop&h=64&ixlib=python-3.0.0&q=50&w=64"
        }
    })

    await client.availableActions.create({
        data:{
            id:"email",
            name:"Email",
            imagePath:"https://zapier-images.imgix.net/storage/services/8e4d4d03bfde581f2550934c589fb077.png?auto=format%2Ccompress&fit=crop&h=64&ixlib=python-3.0.0&q=50&w=64",
            metadata:{"fields":[{"name":"actionEvent","options":[{"id":"Send Outbound Email","type":"instant","description":"Send up to 5 emails per day on Free or Trial Zapier plans, or up to 10 emails per hour on paid Zapier plans from a custom zapiermail.com address","optionIndex":0}],"required":true,"fieldLabel":"Action event","fieldValue":"","fieldNumber":0,"fieldInputType":"dropdown","fieldPlaceholder":"Choose an event"}],"stepName":"Setup","completed":false,"stepNumber":1,"stepDescription":"Select the app and trigger event."},
            optionConfiguration:{"fields":[{"name":"actionEvent","options":[{"id":"Send Outbound Email","type":"instant","description":"Send up to 5 emails per day on Free or Trial Zapier plans, or up to 10 emails per hour on paid Zapier plans from a custom zapiermail.com address","optionIndex":0}],"required":true,"fieldLabel":"Action event","fieldValue":"","fieldNumber":0,"fieldInputType":"dropdown","fieldPlaceholder":"Choose an event"}],"stepName":"Setup","completed":false,"stepNumber":1,"stepDescription":"Select the app and trigger event."}
        }
    })

    
}