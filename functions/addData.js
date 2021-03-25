const { createClient } = require("@astrajs/collections");

const collection = 'birdposts'

exports.handler = async function (event,context, callback){
    // create an Astra client
const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
});
    console.log(astraClient)


    const posts = astraClient
        .namespace(process.env.ASTRA_DB_KEYSPACE)
        .collection(collection)

    const data = [
        {
            id:0,
            name:"Jordann D",
            username:"JordD123",
            avatar:"https://www.facebook.com/photo/?fbid=150878296028958&set=a.150878312695623&__tn__=%3C",
            is_followed:"true",
            video:"//player.vimeo.com/video/335517022?title=0&portrait=0&byline=0&autoplay=1",
            likes:10,
            comments:2,
            timestamp: "2021-03-25T10:00:32.020Z",
            button_visible: true,
        },

        {
            id:1,
            name:"Zach B",
            username:"ZachB123",
            avatar:"https://www.facebook.com/photo/?fbid=10206842365337629&set=a.1277376394456&__tn__=%3C",
            is_followed:"true",
            video:"//player.vimeo.com/video/335517022?title=0&portrait=0&byline=0&autoplay=1",
            likes:10,
            comments:2,
            timestamp: "2021-03-25T10:00:32.020Z",
            button_visible: true,
        },

        {
            id:2,
            name:"Michele F",
            username:"Michele123",
            avatar:"https://www.facebook.com/photo/?fbid=10158449040040708&set=a.466251590707&__tn__=%3C",
            is_followed:"true",
            video:"//player.vimeo.com/video/335517022?title=0&portrait=0&byline=0&autoplay=1",
            likes:10,
            comments:2,
            timestamp: "2021-03-25T10:00:32.020Z",
            button_visible: true,
        },

        {
            id:3,
            name:"Hunter C",
            username:"HunterC123",
            avatar:"https://www.facebook.com/photo/?fbid=1634318636675185&set=a.148857581887972&__tn__=%3C",
            is_followed:"true",
            video:"//player.vimeo.com/video/335517022?title=0&portrait=0&byline=0&autoplay=1",
            likes:10,
            comments:2,
            timestamp: "2021-03-25T10:00:32.020Z",
            button_visible: true,
        }
    ]


    try {
        for(let i = 0; i < data.length; i++)
        await posts.create(data[i].id, data[i]);
        
        return {statusCode: 200}
    } catch (error) {
        console.log(error);
        return{
            statusCode:500,
            body: JSON.stringify(error)
        }
    }


}




