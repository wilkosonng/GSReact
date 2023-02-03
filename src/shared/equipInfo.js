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
    { //Heal Ring - Complete
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
                hp: 20,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 480.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A ring that allows the wearer to heal themselves and others. These rings were created by a great wizard after the Ancient War, in recompense to all the allies he was unable to save. Easy to obtain and very effective, they remain a popular piece of equipment. Being able to find such rings on ancient battlefields also speaks to how long they have been used.`
    },
    { //Detox Ring - Complete
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
                hp: 20,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 96. Heals Target's Poison.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A ring that grants protection from poison to the wearer and their allies. First created by a wizard to protect soldiers wielding poison weapons, there rings became a terrible reminder for those men of the horrors of their use. The use of poison weapons was eventually strictly prohibited as part of later peace accords between the Five Great Nations.`
    },
    { //Lightkeeper Ring - Complete
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
                hp: 20,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 96. Heals Target's Blind.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Created during the Ancient War to defend against demonic magic that steals away the power of sight. The benefits of the ring extend to thew wearer and those around them. Considered vital when facing a powerful wizard, there were some who yet shunned reliance on such trinkets, instead honing their skills to the point that they simply did not rely on sight.`
    },
    { //Vivacious Ring - Complete
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
                hp: 20,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 96. Heals Target's Seal.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Having chanting interrupted in battle is often fatal, making rings such as these prized since before the the Ancient War. On old battlefields you may even find one of these with a finger bone still inside, a grisly hint at the best way to cancel their protection, while no other bones in the vicinity indicates the subsequent eradication of the original owner.`
    },
    { //Monster Fang Charm - Missing Lore
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
                atk: 20,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 550% DMG (Physical).`,
                break: 200
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Giant Battle Shield - Complete
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
                def: 20
            },
        skillset:  
            {
                skill: `60s CT - Reduces Target's DMG Taken by 20% and Earth DMG taken by 40% for 5s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A massive shield loved by giant warriors. Multiple giants equipped with these could form up into a veritable mobile fortress. Of particular note is a shield from the Ancient War now found in the east of the Gramenia Republic, where it is worshipped in a human village. Legends even say that the giant Radigan once protected the village using the shield.`
    },
    { //Merfolk Trident - Missing Lore
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
                atk: 20,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 500% Water DMG (Physical).`,
                break: 200
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Regeneration Staff - Complete
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
                atk: 20,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 500% Earth DMG (Magic).`,
                break: 200
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A staff made from the limb of a tree brimming with the power of life. Even after being cut from the tree its life force is such that it continues to slowly grow, and can be knitted back together in a single night if broken. It's prodigious power can be transmitted around it, too, and it can even create an oasis of greenery if plunged down into arid dirt.`
    },
    { //Saint's Medal - Complete
        id: 100090,
        name: `Saint's Medal`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 1,
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
                def: 20
            },
        skillset:  
            {
                skill: `60s CT - Reduces all Allies' DMG Taken by 3% and Light DMG Taken by 6% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A medal awarded to those who seek to do only good. It was created for Alistair, a wizard and military doctor for the Isliid Empire during the Ancient War, who headed out alone to save a handful of demons and wounded men trapped on the slopes of an erupting volcano. The lava claimed his life, but the wounded were saved by the protective spell he left behind.`
    },
    { //Lightning Branch Baton - Complete
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
                atk: 20,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 500% Light DMG (Magic).`,
                break: 200
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Carved from an ancient tree that continued to grow even after being struck by lightning. A craftsman who made conductor's batons happened to use a limb from it and ended up making a baton that can control lightning. Hiding it away, it turned up again when his studio was destroyed during the Ancient War, and has since proven to be a formidable weapon.`
    },
    { //Abyss Scarf - Complete
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
                def: 20
            },
        skillset:  
            {
                skill: `60s CT - Reduces Target's DMG Taken by 5% and Water DMG Taken by 10% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A scarf made from a plant that grows deep in the lakes of Raktehelm. Anyone wearing this scarf can walk into blazing fire without harm or even pain. Originally used by merfolk active on land, having been caught up in the chaos after the war they shared the garments with humans who aided them and this facilitated their spread across the lands.`
    },
    { //Gale Headband - Complete
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
                hp: 10,
                atk: 5,
                def: 5
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's Skill CT Speed by 20% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A headband created in part from an old tree weathered by the wind. Any who wear it become light as a feather and can move like a literal gale. Said to carry the memories of that old tree, so loved by the wind, and enhanced by the crystal set into it. One wearing it is said it have run a week long horseback journey in just one day during the Ancient War.`
    },
    { //Holy Whistle - Complete
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
                hp: 10,
                atk: 5,
                def: 5
            },
        skillset:  
            {
                skill: `20s CT - Increases Target's DMG Inflicted by 10% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A musical whistle that soothes all who hear it. During the Ancient War, there was a unit besieged by ally betrayal and enemy attacks. Facing despair, suspicion and low morale, all of them expected death. The army minstrel then played this whistle, soothing away all their fears and restoring their courage. The unit fought bravely and managed to survive.`
    },
    { //Alluring Earring - Complete
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
                hp: 10,
                atk: 5,
                def: 5
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's Arts Gauge by 5.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `An earring created to look like the eye of a demon with a thousand pupils. When he died he ordered that his eye be used to create a piece of equipment. The energy from it boasts a strange attraction, alluring the souls of not only people but also demons. Copies created later have a similar effect, but none have yet matched the power of the original.`
    },
    { //Healing Necklace - Complete
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
                hp: 40,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 100/s for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A relic given by a wizard to the knight who was his master. This wizard was too weak to go into battle, leading to the knight's other retainer's mocking him for failure to aid in defending his master - yet the knight still kept him close. In response to that kindness the power of this item is incredible, and it kept the knight alive through countless battles.`
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
                atk: 40,
                def: 0
            },
        skillset:  
            {
                skill: ``,
                break: ``
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Fairytale - Complete
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
                atk: 40,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 825% Non-Elemental DMG (Magic).`,
                break: 240
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A type of magical tome that allows anyone to cast spells. The words, rhymes and phrases required for spell chanting are arranged in a storybook format that anyone can follow. Originally made as a fun toy for children by a wizard who loved writing, during the Ancient War many examples were created that allow far more powerful magic to be cast.`
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
                atk: 60,
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
    { //Ouroboros - Complete
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
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1500% Dark DMG (Physical).`,
                break: 400
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A long spear named for a phenomena in alchemy meaning "complete" or "source". During the Ancient War the alchemist Georig sent this weapon to his friend Parakels. At first, Parakels thought it only a fine weapon, but then he started to dream about fighting himself. By the time he stopped having those dreams , no one could touch him in spear combat.`
    },
    { //Sword Breaker - Complete
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
                def: 40
            },
        skillset:  
            {
                skill: `60s CT - 200% Non-Elemental DMG (Physical). Reduces Enemies' ATK by 10% for 10s.`,
                break: 150
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Also known as the "sword killer". Snapping or smashing down countless weapons, skilled users can fight and survive without even using a shield. "Sword Hunter Chan" was especially famous for using one of these during the Ancient War. He was motivated solely to find expensive weapons to destroy in battle, leading him to eventually be targeted by all sides.`
    },
    { //Mystic Arrow - Complete
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
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 2500% Dark DMG (Magic).`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A magical bow that can fire "flying" arrows. Carved from the horn of a succubus, its branding magic allows its arrows to always reach their target. those targeted talk of having seen the archer, raised their defenses in plenty of time, but then getting shot from behind - even if there was no one behind them at all.`
    },
    { //Mighty Brace - Complete
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
                hp: 20,
                atk: 10,
                def: 10
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's Break Power by 20% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `An arm brace made using the fur from powerful yeti beasts. Although the yeti had no specific weapons or magic of their own, their strength was such that a single yeti could destroy an entire armed unit alone. Indeed, it was even said that they could fight oon an equal footing with the gods. One wearing this brace obtains some of that yeti strength.`
    },
    { //Crimson Mantle - Complete
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
                def: 40
            },
        skillset:  
            {
                skill: `60s CT - Reduces Target's DMG taken by 5% and Fire DMG Taken by 14% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `"Defeat me, if you can!" The words of the duelist Ronmel, who fought during the Ancient War wearing this cape. He tore across the battlefield, leaving a red trail as he cut down foes and without a single one able to lay a finger on his mantle. In later life Ronmel left a record stating that he wore the cape to aid his allies by distracting the enemy.`
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

