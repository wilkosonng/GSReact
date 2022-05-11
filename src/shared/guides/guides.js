//This file will be for "Popular Guides" that don't fit a category easily
const Guides = [
    { //Testing Importing Google Doc, has resizing issues that cannot be solved on own end
        id: 2,
        link: "alchemy-farm",
        title: "Alchemy Farm",
        article: `<iframe src="https://docs.google.com/document/d/e/2PACX-1vQsEGiYU6G9Vv4QgRdXSw_uJ0yc0teLfX-TO6gKrCZNnqbzKfiNOKbGPV-8AEEdDwssCsnbag4D3Flw/pub?embedded=true" class="guidesContent"></iframe>`,
        author: "Flare"
    },
    {
        id: 1,
        title: "FAQ",
        article: "<><p><i>This is only a Test.</i></p></>",
        author: "GSOD Team"
    },
    {
        id: 0,
        title: "Yet another Guide , but this is a Test",
        article: "<strong>How could this be a test?</strong>",
        author: "Person 2"
    }
]

export function getGuides() {
    return Guides;
}

//Using == instead of === to match string to num
export function getGuidesByLink(link) {
    return Guides.find(
        guide => guide.link === link
    );
}

