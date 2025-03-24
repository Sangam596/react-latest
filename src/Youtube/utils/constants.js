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
        {
            "name": "All",
            catagoryId:0
        },
        {
            "name": "News",
            catagoryId: 0 },
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


export const YOUTUBE_AUTH_KEY = "AIzaSyAKQ5IT-v0STQHrXnmmbDLgbQgNU-fm_tI";

export const YOUTUBE_CATAGORY_API = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${YOUTUBE_AUTH_KEY}`
export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50`
export const YOUTUBE_SUGGESSION_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`
export const YOUTUBE_SEARCH_VIDEOS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&videoCaption=any`
export const YOURTUBE_RECOMMNDED = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=20&key=${YOUTUBE_AUTH_KEY}`