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
        star: 1,
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
                ability1: ``
            },
        lore: `Oh there is a lore`
    },
    { //Detox Ring - Missing Stats, Skillset, Passive, Lore
        id: 1000020,
        name: `Detox Ring`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100020.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100021.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100020.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100021.png`
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
    { //Lightkeeper Ring - Missing Stats, Skillset, Passives, Lore
        id: 100030,
        name: `Lightkeeper Ring`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100030.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100031.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100030.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100031.png`
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
    { //Vivacious Ring - Missing Stats, Skillset, Passives, Lore
        id: 100040,
        name: `Vivacious Ring`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100040.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100041.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100040.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100041.png`
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
    { //Monster Fang Charm - Missing Stats, Skillset, Passive, Lore
        id: 100050,
        name: `Monster Fang Charm`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100050.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100051.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100050.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100051.png`
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
    { //Giant Battle Shield - Missing Stats, Skillset, Passives, Lore
        id: 100060,
        name: `Giant Battle Shield`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100060.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100061.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100060.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100061.png`
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
    { //Merfolk Trident - Missing Stats, Skillset, Passives, Lore
        id: 100070,
        name: `Merfolk Trident`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100070.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100071.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100070.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100071.png`
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
    { //Regeneration Staff - Missing Stats, Skillset, Passives, Lore
        id: 100080,
        name: `Regeneration Staff`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100080.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100081.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100080.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100081.png`
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
    {
        id: 100090,
        name: `Saint's Medal`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3=1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100090.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100091.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100090.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100091.png`
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
    { //Lightning Branch Baton - Missing Stats, Skillset, Passives, Lore
        id: 100100,
        name: `Lightning Branch Baton`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100100.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100101.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100100.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100101.png`
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
    { //Abyss Scarf - Missing Stats, Skillset, Passives, Lore
        id: 100110,
        name: `Abyss Scarf`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100110.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100111.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100110.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100111.png`
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
    { //Gale Headband - Missing Stats, Skillset, Passives, Lore
        id: 100120,
        name: `Gale Headband`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100120.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100121.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100120.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100121.png`
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
    { //Holy Whistle - Missing Stats, Skillset, Passives, Lore
        id: 100131,
        name: `Holy Whistle`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100130.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100131.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100130.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100131.png`
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
    { //Alluring Earring - Missing Stats, Skillset, Passives, Lore
        id: 100140,
        name: `Alluring Earring`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100140.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100141.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100140.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100141.png`
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
    { //Healing Necklace - Missing Stats, Skillset, Passives, Lore
        id: 100150,
        name: `Healing Necklace`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100150.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100151.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100150.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100151.png`
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
    { //Soul Recovery - Missing Stats, Skillset, Passives, Lore
        id: 100160,
        name: `Soul Recovery`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100160.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100161.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100160.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100161.png`
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
    { //Fairytale - Missing Stats, Skillset, Passives, Lore
        id: 100170,
        name: `Fairytale`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100170.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100171.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100170.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100171.png`
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
    { //Dragon Blade - Missing Stats, Skillset, Passives, Lore
        id: 100180,
        name: `Dragon Blade`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100180.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100181.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100180.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100181.png`
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
    { //Ouroboros
        id: 100190,
        name: `Ouroboros`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100190.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100191.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100190.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100191.png`
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
    { //Sword Breaker - Missing Stats, Skillset, Passives, Lore
        id: 100200,
        name: `Sword Breaker`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100200.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100201.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100200.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100201.png`
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
    { //Mystic Arrow - Missing Stats, Skillset, Passives, Lore
        id: 100210,
        name: `Mystic Arrow`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100210.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100211.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100210.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100211.png`
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
    { //Mighty Brace - Missing Stats, Skillset, Passives, Lore
        id: 100220,
        name: `Mighty Brace`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100220.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100221.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100220.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100221.png`
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
    { //Crimson Mantle - Missing Stats, Skillset, Passives, Lore
        id: 100230,
        name: `Crimson Mantle`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100230.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100231.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100230.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100231.png`
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
    { //Numbless Ring - Missing Stats, Skillset, Passives, Lore
        id: 100240,
        name: `Numbless Ring`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100240.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100241.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100240.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100241.png`
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
    { //Winged Boots - Missing Stats, Skillset, Passives, Lore
        id: 100250,
        name: `Winged Boots`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100250.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100251.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100250.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100251.png`
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
    { //Berserker Gloves - Missing Stats, Skillset, Passives, Lore
        id: 100260,
        name: `Berserker Gloves`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100260.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100261.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100260.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100261.png`
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
    { //Steel Goggles - Missing Stats, Skillset, Passives, Lore
        id: 100270,
        name: `Steel Goggles`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100270.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100271.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100270.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100271.png`
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
    { //Maiden's Water Jug - Missing Stats, Skillset, Passives, Lore
        id: 100280,
        name: `Maiden's Water Jug`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100280.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100281.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100280.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100281.png`
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
    { //Great Tree Sparksap
        id: 100290,
        name: `Great Tree Sparksap`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100290.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100291.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100290.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100291.png`
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
    { //Unihorn Staff - Missing Stats, Skillset, Passives, Lore
        id: 100300,
        name: `Unihorn Staff`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100300.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100301.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100300.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100301.png`
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
    { //Creativity Brush - Missing Stats, Skillset, Passives, Lore
        id: 100310,
        name: `Creativity Brush`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100310.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100311.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100310.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100311.png`
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
    { //Fairy Teardrop - Missing Stats, Skillset, Passives, Lore
        id: 100320,
        name: `Fairy Teardrop`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100320.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100321.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100320.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100321.png`
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
    { //Prayer Wine "Soma" - Missing Stats, skillset, Passives, Lore
        id: 100330,
        name: `Prayer Wine "Soma"`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100330.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100331.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100330.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100331.png`
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
    { //Blessed Wine "Amurita" - Missing Stats, Skillset, Passives, Lore
        id: 100340,
        name: `Blessed Wine "Amurita"`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100340.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100341.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100340.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100341.png`
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
    { //Oracle Flower - Missing Stats, Skillset, Passives, Lore
        id: 100350,
        name: `Oracle Flower`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100350.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100351.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100350.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100351.png`
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
    { //Heavenly Robe "Michael" - Missing Stats, Skillset, Passives, Lore
        id: 100360,
        name: `Heavenly Robe "Michael"`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100360.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100361.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100360.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100361.png`
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
    { //Amulet of Affection - Missing Stats, Skillset, Passives, Lore
        id: 100370,
        name: `Amulet of Affection`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100370.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100371.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100370.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100371.png`
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
    { //Angel's Harp - Missing Stats, Skillset, Passives, Lore
        id: 100380,
        name: `Angel's Harp`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100380.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100381.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100380.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100381.png`
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

