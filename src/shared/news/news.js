const NewsArticles = [
    {
        id: 0,
        title: "test title",
        article: "<>Testing to see if HTML tags can pass through.</>"
    },
    {
        id: 1,
        title: "another test",
        article: "<strong>Second test</strong>"
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


