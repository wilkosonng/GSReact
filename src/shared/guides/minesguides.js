//This file will be for Mines Guides, relating to the equips, as well as the bosses
const MinesGuides = [
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

export function getMinesGuides() {
    return MinesGuides;
}

//Using == instead of === to match string to num
export function getMinesGuidesByTitle(title) {
    return MinesGuides.find(
        guide => guide.title == title
    );
}
