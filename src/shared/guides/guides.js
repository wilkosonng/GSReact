//This file will be for "Popular Guides" that don't fit a category easily
const Guides = [
    {
        id: 0,
        title: "This is a Test",
        article: "<><p><i>This is only a Test.</i></p></>",
        author: "Person 1"
    },
    {
        id: 1,
        title: "Yet another Guide , but this is a Test",
        article: "<strong>How could this be a test?</strong>",
        author: "Person 2"
    }
]

export function getGuides() {
    return Guides;
}

//Using == instead of === to match string to num
export function getGuidesByTitle(title) {
    return Guides.find(
        guide => guide.title == title
    );
}

