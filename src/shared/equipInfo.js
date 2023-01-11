/**
 * BASIC FORMAT
 * 
 * DO NOT FORGET COMMAS.
 * Add / Remove passives as needed
 * Types can be Physical, Magic, Defense, Support, or Healing
 *         
    {
        id: 0,
        name: `Heal Ring`,
        type: `Heal`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100010`,
                detailmax: `/db/Equipment/Detail/item_detail_100011`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100010`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100011`
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
        id: 0,
        name: `Heal Ring`,
        type: `Heal`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100010`,
                detailmax: `/db/Equipment/Detail/item_detail_100011`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100010`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100011`
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
]

export function getEquips() {
    return EquipInformation;
}

export function getEquipByName(name) {
    return EquipInformation.find(
        equips => equips.name === name
    );
}

