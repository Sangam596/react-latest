export const AVAILABLE_LANG = [{
    name: "English",
    value: "en"
},
{
    name: "Hindi",
    value: "hi"
}
]

export const buttonList = {
    "en": [
        { "name": "All" },
        { "name": "News" },
        { "name": "Music" },
        { "name": "Live" },
        { "name": "Sports" },
        { "name": "Film Criticism" },
        { "name": "Podcasts" },
        { "name": "Batter" },
        { "name": "Jukebox" },
        { "name": "Matras" },
        { "name": "Wealth" },
        { "name": "AI" },
        { "name": "Recently Uploaded" },
        { "name": "New to you" },
        { "name": "Technology" }
    ],
    "hi": [
        { "name": "सभी" },
        { "name": "समाचार" },
        { "name": "संगीत" },
        { "name": "लाइव" },
        { "name": "खेल" },
        { "name": "फिल्म समीक्षा" },
        { "name": "पॉडकास्ट" },
        { "name": "बैटर" },
        { "name": "ज्यूकबॉक्स" },
        { "name": "मंत्र" },
        { "name": "धन" },
        { "name": "कृत्रिम बुद्धिमत्ता" },
        { "name": "हाल ही में अपलोड किया गया" },
        { "name": "आपके लिए नया" },
        { "name": "प्रौद्योगिकी" }
    ]
}


const YOUTUBE_AUTH_KEY = "AIzaSyDVjMhk4t0b2t2LlYfqbDIyFBcEc0jyo6Y";

export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${YOUTUBE_AUTH_KEY}`