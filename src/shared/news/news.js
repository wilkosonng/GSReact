const NewsArticles = [
    {
        id: 4,
        new: "new",
        title: "Grand Summoners Database Grand Opening",
        category: "Site News",
        date: "July 13, 2022",
        preview: "/chara_face_1200_1.png",
        article:`
            <h3>It's finally here!</h3>
            <p>Welcome to the GS Database. You can access the Units from the Navbar at the top.</p>
            <p>The GS Discord staff is working hard to improve the website, while also adding other features.</p>
            <br/>
            <p>Currently, we have the Units list, Tierlist, and (some) Guides up and running. Other things, like the Equipment are Work in Progress. Keep checking back for all your GS needs</p>
            <p>Thanks, <br/> GSOD Staff</p>
        `
    },
    {
        id: 3,
        title: "Fairy Tail Collaboration Announced",
        category: "Collaboration",
        date: "April 1, 2022",
        preview: '/db/news/assets/April012022/image0.png',
        article: `Good news everyone! Fairy Tail Collaboration has just been announced!<br/>
        The dates are listed in this image: <br/><img src="/db/news/assets/April012022/image0.png" class="newsImages"/>. 
        <br/> Additionally, there will be Login Rewards from now until the Collaboration begins: 
        <br/><img src="/db/news/assets/April012022/CountdownLoginBonus.png" class="newsImages"/> <br/><br/>
        When Fairy Tail Collab begins, we will receive daily login rewards and summoning tickets: 
        <br/><img src="/db/news/assets/April012022/UltimateLoginBonus.png" class="newsImages"/><br/>
        <img src="/db/news/assets/April012022/SuperTicketCampaign.png" class="newsImages"/><br /><br />
        The collab units will be able to gain up to 120 Luck from Fairy Tail Luck Crystals!<br/>
        <img src="/db/news/assets/April012022/LuckGemFT.png" class="newsImages"/>`
    },
    {
        id: 2,
        title: "Yet another Test Title",
        category: "Event",
        article: "How should I word this?",
        date: "September 2, 1009"
    },
    {
        id: 1,
        title: "test title",
        category: "Maintenance",
        article: "<>Testing to see if HTML tags can pass through.</>",
        date: "March 24, 1984"
    },
    {
        id: 0,
        title: "another test",
        category: "Event",
        article: "<strong>Second test</strong>",
        date: "Feburary 31, 2805"
    }
]

export function getNews() {
    return NewsArticles;
}

//Using == instead of === to match string to num
export function getNewsById(id) {
    return NewsArticles.find(
        newsArticle => newsArticle.id == id
    );
}


