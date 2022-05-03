const TrialGuides = [
    {
        id: 20,
        title: "Floor 20",
        article: `
            Put stuff here
        `
    },
    {
        id: 21,
        title: "Floor 21",
        article: `
            Put stuff here
        `
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
