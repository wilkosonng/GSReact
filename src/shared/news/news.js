const NewsArticles = [
    {
        id: 0,
        new: "new",
        title: "Changelogs",
        category: "Site News",
        date: "June 24, 2023",
        preview: "/chara_face_1200_1.png",
        article:`
            <h3>Changelog - June 24, 2023</h3>
            <p>Hey Summoners, Site Admin here. We been in "grand opening" mode for over a year now, so probably best to actually update this.</p>
            <p>We'll be adding site updates here so you can keep up to date on what's been going on with the website.</p>
            <br/>
            <p>Over the past year, we added the Tierlist, Equip List, and Ascended units, while also allowing you to Sort and Filter the Unit and Equip lists.</p>
            <p>Please note that we will do our best to keep the website up to date as quickly as possible, but we are merely human and we also have Jobs and real life to attend to. As such, there may be a couple days where the updates are slightly delayed. Please bear with us.</p>
            <br/>
            <p><b>Anyway, without further ado, here are today's additions: </b><p>
            <br/>
            
            <p>Added Dream Evolutions and JP Buffs to the Following Units:</p>
            <br/>
            <a href="https://www.grandsummoners.info/units/Arosdea"><img src="/db/Units/Thumbnail/unit_thumbnail_101176112.png" /></a>
            <a href="https://www.grandsummoners.info/units/Dargeon"><img src="/db/Units/Thumbnail/unit_thumbnail_100566112.png" /></a>
            <a href="https://www.grandsummoners.info/units/Angelas"><img src="/db/Units/Thumbnail/unit_thumbnail_103066112.png" /></a>
            <a href="https://www.grandsummoners.info/units/Herck"><img src="/db/Units/Thumbnail/unit_thumbnail_100576212.png" /></a>
            <a href="https://www.grandsummoners.info/units/Valhalla"><img src="/db/Units/Thumbnail/unit_thumbnail_100586312.png" /></a>
            <a href="https://www.grandsummoners.info/units/Eagle"><img src="/db/Units/Thumbnail/unit_thumbnail_103076312.png" /></a>
            <a href="https://www.grandsummoners.info/units/Melia%20(Dark)"><img src="/db/Units/Thumbnail/unit_thumbnail_101076511.png" /></a>
            <br/>
            <b>NOTE: The unit skillsets show GL stats by default, please click "Japan" Tab to see the Dream Evolutions and the JP skillsets. This option will appear ONLY if the unit has any differences between the servers</b> <br/><br/>
        
            <p>Additionally, I want to ask for your help in bug-catching.</p>
            <p>If you notice any issues like a unit page not loading, or Lore is missing (please provide screenshot of the lore), etc, please contact the #discord-feedback channel on the GSOD Discord. </p>
            <p>This will ensure that the bug fixes are deployed quicker.</p>
            <p>Fortunately, some users are already doing this and I greatly appreciate it.</p>
            <br/>
            <p>That's all for today. Until next time!</p>
            <p>Thanks, <br/> GSOD Staff</p>
        `
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


