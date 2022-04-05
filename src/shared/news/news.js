const NewsArticles = [
    {
        id: 2,
        new: "new",
        title: "Fairy Tail Collaboration Announced",
        date: "April 1, 2022",
        article: 'Good news everyone! Fairy Tail Collaboration has just been announced!<br/>The dates are listed in this image: <br/><img src="/news/assets/April012022/image0.png" />. <br/> Additionally, there will be Login Rewards from now until the Collaboration begins: <br/><img src="/news/assets/April012022/CountdownLoginBonus.png" /> <br/><br/>When Fairy Tail Collab begins, we will receive daily login rewards and summoning tickets: <br/><img src="/news/assets/April012022/UltimateLoginBonus.png" /><br/><img src="/news/assets/April012022/SuperTicketCampaign.png" /><br /><br />The collab units will be able to gain up to 120 Luck from Fairy Tail Luck Crystals!<br/><img src="/news/assets/April012022/LuckGemFT.png"/>'
    },
    {
        id: 1,
        title: "test title",
        article: "<>Testing to see if HTML tags can pass through.</>",
        date: "Some Date"
    },
    {
        id: 0,
        title: "another test",
        article: "<strong>Second test</strong>",
        date: "a date"
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


