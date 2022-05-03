const TrialGuides = [
    {
        id: 0,
        title: "This is a Test",
        article: "<><p><i>This is only a Test.</i></p></>"
    },
    {
        id: 1,
        title: "Yet another Guide , but this is a Test",
        article: "<strong>How could this be a test?</strong>"
    }
]

export function getTrialGuides() {
    return TrialGuides;
}

//Using == instead of === to match string to num
export function getTrialGuidesById(id) {
    return GiantBossGuides.find(
        guide => guide.id == id
    );
}
