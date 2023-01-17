/**
 * BASIC FORMAT
 * 
 * DO NOT FORGET COMMAS.
 * Add / Remove passives as needed, but do NOT remove "ability1". 
 * If no passive, either leave ability1 as ``, OR as "This Equip does not have a passive"
 * Types can be physLB, magLB, defLB, suppLB, or healLB
 *         
    {
        id: 0,
        name: `Heal Ring`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100010.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100011.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100010.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100011.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: ``,
                break: ``
            },
        passive: 
            {
                ability1: ``,
                ability2: ``
            },
        lore: ``
    },

 */

const EquipInformation = [
    { //Heal Ring - Missing Stats, Skillset, Star, Passive, Lore
        id: 100010,
        name: `Heal Ring`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100010.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100011.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100010.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100011.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `Does something`,
                break: 0
            },
        passive: 
            {
                ability1: `This Equip does not have any passive`
            },
        lore: `Oh there is a lore`
    },
]

export function getEquips() {
    return EquipInformation;
}

export function getEquipByName(name) {
    return EquipInformation.find(
        equips => equips.name === name
    );
}

