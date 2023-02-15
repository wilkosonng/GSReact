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
        id: 100011,
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
        id: 1000021,
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
        id: 100031,
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
        id: 100041,
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
        id: 100051,
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
        id: 100061,
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
        id: 100071,
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
        id: 100081,
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
        id: 100091,
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
        id: 100101,
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
        id: 100111,
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
        id: 100121,
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
        id: 100141,
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
        id: 100151,
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
        id: 100161,
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
        id: 100171,
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
        id: 100181,
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
        id: 100191,
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
        id: 100201,
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
        id: 100211,
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
        id: 100221,
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
        id: 100231,
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
        id: 100241,
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
    { //Winged Boots - Complete
        id: 100251,
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
                hp: 20,
                atk: 10,
                def: 10
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's Skill CT Speed by 40% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Footwear made from the powerful wings of the monstrous bird Algantavis. Even a gentle step in these boots will cause a breeze to sweep the wearer high up into the air. Records of the Ancient War state that monstrous birds rarely came into battle, but mistakenly step in their territory and a flock of them would literally blow the transgressors away.`
    },
    { //Berserker Gloves - Missing Stats, Skillset, Passives, Lore
        id: 100261,
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
    { //Steel Goggles - Complete
        id: 100271,
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
                hp: 10,
                atk: 5,
                def: 5
            },
        skillset:  
            {
                skill: `60s CT - Increases Target's Critical Rate by 100% for 3s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Goggles prized by volcano workers and explorers of taxing climes. Originally designed to protect the eyes, the narrowing of the visual field was considered a tradeoff for a clear view. In recent years, however, this restriction has also been noted to provide greater focus, and fighters have started to wear them regardless of the battle environment.`
    },
    { //Maiden's Water Jug - Complete
        id: 100281,
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
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's Arts Gauge by 20.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A jug used by maidens in the service of the divine for holding holy water. Coroc in the Gramenia Republic was especially devastated by the Ancient War, and was slowly slipping back into the desert. Maidens appeared there, praying and spreading water from these jugs. The people were skeptical, but within just one month Coroc was a green oasis again.`
    },
    { //Great Tree Sparksap - Complete
        id: 100291,
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
                hp: 40,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 840.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Hardened sap sometimes found at the foot of a gigantic tree. People living close to the forest call them "tree gifts" and welcome them as a sign of a bountiful harvest. They are also highly prized aesthetically, often selling for more than gemstones, and this has led the villagers to create a self defense force to drive away any potential poachers.`
    },
    { //Unihorn Staff - Complete
        id: 100301,
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
                atk: 40,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 750% Light DMG (Magic).`,
                break: 240
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A staff made from the horn of a unihorn, an especially rare and fabled beast. Reflecting the beast's pure nature, a single wave of this staff is all it takes to eradicate any miasma. However, this also means the staff will shatter if held by anyone with evil in their heart. As only a few remain, their locations are kept by a select handful of individuals.`
    },
    { //Creativity Brush - Complete
        id: 100311,
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
                atk: 40,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 750% Dark DMG (Magic).`,
                break: 240
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A magical brush that makes anything it draws real. Oldelia, a spirit artist, was driven mad by his desire to use the brush, eventually stealing it from a demon temple. He used it to create an otherworldly army and almost wiped out Magia in the west of the Magus Empire. Although foiled at last, the beasts he created went on to inspire a new branch of art.`
    },
    { //Fairy Teardrop - Complete
        id: 100321,
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
                hp: 60,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals all Allies' HP by 250. Heals all Allies' Disease.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Mystical medicine created from morning mist in the Fairy Forest. A concentration of the healing power of the trees, it can even save patients with a terminal prognosis, but a healthy person will suffer hallucinations and other side effects. Therefore, in order to prevent mistaken imbibing, in the Isliid Empire it can only be prescribed by doctors.`
    },
    { //Prayer Wine "Soma" - Complete
        id: 100331,
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
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `30s CT - Heals all Allies' HP by 300. Heals all Allies' Poison and Curse.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Holy wine extracted from the sap of the divine tree Soma, where the spirits of departed fairies gather. Sweet, refreshing, and a powerful analeptic. Originally created as an offering to the divine, during the Ancient War it was used to bring courage to fighting men. Records state that not a single combatant who drank this wine fell in battle.`
    },
    { //Blessed Wine "Amurita" - Complete
        id: 100341,
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
                hp: 60,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 250. Heals all Allies' Seal and Blind.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A type of holy wine brewed in temples. Said to have originally been used to purify the singing voices of a holy choir prior to ritual performances. Clear and delicious, with a hint of floral fragrance. Singers who have imbibed this wine can move listeners to tears with their song, and it is therefore also much loved by people in the performing arts.`
    },
    { //Oracle Flower - Complete
        id: 100351,
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
                hp: 40,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 200. If User is Earth Elemental then Healing x 1.5.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A flower said to forewarn its owner. Major General Salbatol of the Gramenia Republic once received one from a young girl as he set out to battle. Thinking little more of it, just before a raid he noticed the flower had died. He called the attack off, and they later found his plan had been leaked to the enemy; the flower had saved him and all his men.`
    },
    { //Heavenly Robe "Michael" - Complete
        id: 100361,
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
                def: 120
            },
        skillset:  
            {
                skill: `30s CT - Negates 400 DMG Dealt to all Allies' for 8s. Reduces all Allies' Light Elemental DMG Taken by 35% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A holy garment named for the highest of the angels. Created under the holiest conditions, it can repel all magic. Once, during battle with demons, High Priest Nephilim of the Kingdom of Famelle wrapped a fleeing child in one of these robes. Raging fighting consumed the temple but the child survived, and this led them to the robes being shared with all believers.`
    },
    { //Amulet of Affection - Complete
        id: 100371,
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
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heal all Allies' HP by 500. If User is Light Elemental then Healing x 1.5.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A jeweled amulet sometimes found in divine ruins. In a time when the gods still lived there, legend tells of how the daughter of a priest prayed to a jewel in order to save the mortally wounded young man whom she loved. Miraculously, he was saved, and now family members of those who must send loved ones into battle come to ruins looking for similar jewels.`
    },
    { //Angel's Harp - Complete
        id: 100381,
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
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals all Allies' HP by 1200.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A relic that only angels were one allowed to own and play. Its music can touch the very soul, healing and purifying all. During the Ancient War, an angel who couldn’t bear to see the other races fighting took his ritual harp onto the battlefield and started to play. Before long, his soothing melody had calmed, then stilled the raging conflict.`
    },
    { //Paladin Shield - Complete
        id: 100391,
        name: `Paladin Shield`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100390.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100391.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100390.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100391.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 60
            },
        skillset:  
            {
                skill: `30s CT - Reduces all Allies' DMG Taken by 5% and Magical DMG Taken by 10% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A holy shield given to only the highest of the knights who serve a temple. The shields used by holy knights during the Ancient War were offered up to the gods after the fighting ended. They are currently still worshipped, sparkling brilliantly despite their countless battles. Modern knights use shields from a smithy in Reigrad in the Isliid Empire.`
    },
    { //Thief's Pouch - Complete
        id: 100401,
        name: `Thief's Pouch`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100400.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100401.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100400.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100401.png`
            },
        stats:
            {
                hp: 20,
                atk: 10,
                def: 10
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's Arts Gauge by 10.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A pouch used by the legendary thief Kalvar, who was active across all of Raktehelm. It contains his seven tools and a variety of functional pouches. Replicas given out as an incentive to join the Thieves' Guild were popular for a time. More recently, thieves have moved away from the seven tools and fill the pouch with what best suits their own robbing style.`
    },
    { //Tome of Idia - Complete
        id: 100411,
        name: `Tome of Idia`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100410.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100411.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100410.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100411.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1100% Non-Elemental DMG (Magic).`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A magical text that has existed since ancient times, author unknown. Written in a lost language, it contains rites for summoning otherworldly beasts and the names gods from beyond the veil. The original is housed at the Famelle Royal Library, but under strict guard. The bizarre cadence of just a few lines from it can cause madness in normal men.`
    },
    { //Tiamat Horn - Complete
        id: 100421,
        name: `Tiamat Horn`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100420.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100421.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100420.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100421.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `30s CT - Increases all Allies' DMG Inflicted by 10% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The battle horn said to have been blown by the goddess Tiamat. Causing an earthquake-like rumble it let the whole world know when battle is joined. Tiamat was once a commander in god's army. She rebelled against their audacious ways, however, and was eventually sealed away. All who hear this horn are inspired to fight bravely.`
    },
    { //Terra Conjunction - Complete
        id: 100431,
        name: `Terra Conjunction`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100430.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100431.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100430.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100431.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `180s CT - Increases all Allies' Critical Rate by 100% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A celestial globe used for astrological magic. The vicinity of the user is treated as a single heavenly body, providing control over the flow of time. Requiring vast magic to use, even experienced wizards can struggle. Originally created by the alchemist Alishis in order to travel through time, in the end control of only a short period proved possible.`
    },
    { //Stigmata Diategh - Complete
        id: 100441,
        name: `Stigmata Diategh`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100440.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100441.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100440.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100441.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1000% Light DMG (Physical).`,
                break: 300
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A claw-like relic containing the power of the lightning god. Once activated the wearer obtains speed beyond the reaction times of any living creature. Those who see the flicker of this relic will be dead before they even know it. However, such speed also damages the one who uses it, and the wounds thus inflicted led to the "stigmata" being added to the name.`
    },
    { //Phantom Knight Shield - Complete
        id: 100451,
        name: `Phantom Knight Shield`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100450.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100451.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100450.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100451.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 120
            },
        skillset:  
            {
                skill: `30s CT - Negates 600 DMG Dealt to all Allies' for 8s. Reduces all Allies' Magical DMG Taken by 25% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A shield forged from the armor of knights who died in battle. Harboring remnant energy from multiple knights, the shield itself is said to possess consciousness. For any it does not deem worthy, it remains heavy and hard to use. However, for those whom it does approve it becomes light as a feather, and offers the protection of all the fallen phantoms.`
    },
    { //Warrior's Dagger -  Complete
        id: 100461,
        name: `Warrior's Dagger`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100460.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100461.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100460.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100461.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1100% DMG (Physical).`,
                break: 300
            },
        passive: 
            {
                ability1: ``
            },
        lore: `"Take this. Fight... on..." The words cutting short, the resulting silence, told me that my master had passed. I held the dagger he had given me to my chest, and could do naught by grieve. - "Hill of Warrior's Slumber", Final Chapter. The dagger received by that student is now said to provide any who hold it with the protection of his fallen master.`
    },
    { //Shield Core - Complete
        id: 100471,
        name: `Shield Core`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100470.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100471.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100470.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100471.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 60
            },
        skillset:  
            {
                skill: `60s CT - Reduces all Allies' DMG Taken by 4% and Earth Elemental DMG Taken by 8% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `During the Ancient War, there was a wizard too old to go into battle. One day, after seeing families grieving for their lost loved ones at the town graveyard, he returned home and created magical equipment to protect the lives of other soldiers. He continued to make them until he died of old age, and the procession of mourners at his funeral was long indeed.`
    },
    { //Enril Scythe - Missing .....
        id: 100481,
        name: `Enril Scythe`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100480.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100481.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100480.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100481.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Oracle Panflute - Complete
        id: 100491,
        name: `Oracle Panflute`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100490.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100491.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100490.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100491.png`
            },
        stats:
            {
                hp: 20,
                atk: 10,
                def: 10
            },
        skillset:  
            {
                skill: `30s CT - Increases all Allies' DMG Inflicted by 7% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A flute blessed by the oracle goddess Apronika. Its music contains complex reverberations, bringing a range of emotions to all who hear it. If the music makes you afraid, it means danger is close. During the Ancient War, the playing of this flute daily helped the people escape danger, keeping losses to a minimum regardless of the scale of the conflict.`
    },
    { //Crown of the Spirit King - Complete
        id: 100501,
        name: `Crown of the Spirit King`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100500.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100501.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100500.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100501.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 60
            },
        skillset:  
            {
                skill: `30s CT - Reduces Target's DMG Taken by 10% and Water Elemental DMG Taken by 20% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The Ancient Forest of Gonal has existed in the west of the Kingdom of Famelle since before the Ancient War, and it is deep inside here that the Spirit King is said to dwell. His crown is proof of domain over all spirits, while past crowns are now said to be hidden away. Only the line of kings know the location, and revealing it means immediate abdication.`
    },
    { //Conflagration Mask - Complete
        id: 100511,
        name: `Conflagration Mask`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100510.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100511.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100510.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100511.png`
            },
        stats:
            {
                hp: 20,
                atk: 10,
                def: 10
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's DMG Inflicted by 20% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A mask created by the fire demon Ifrit. Although it is always aflame, it will never burn the one it considers its owner. The original mask thought lost after the Ancient War, but during a performance of The Phantom of the Library at the Famelle Royal Theatre the mask of the actor playing the phantom, revealed itself as the original when it burst into flame.`
    },
    { //Yumil Ice Fragment - Complete
        id: 100521,
        name: `Yumil Ice Fragment`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100520.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100521.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100520.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100521.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1000% Water DMG (Magic).`,
                break: 300
            },
        passive: 
            {
                ability1: ``
            },
        lore: `There was once a merfolk princess called Yumil who fell in love with a human youth. They met in secret, but then the queen learnt about their forbidden relations. To protect her love Yumil chose banishment to the depths of the icy seas. Whe she finally breathed her last, all alone, the unmeltable crystallization of her feelings was left behind.`
    },
    { //Three-Headed Dog's Chain - Complete
        id: 100531,
        name: `Three-Headed Dog's Chain`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100530.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100531.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100530.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100531.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's DMG Inflicted by 30% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A collar and chain used to control a demon-made living weapon called Cerberus. Without this attached the beast would tear anyone to shreds, even its creator. In the Ancient War even the most powerful warriors all feared the Cerberus. On the other hand, legend also says that the canine fiend let a baker escape after he piled the beast with treats.`
    },
    { //Luminous Orb - Complete
        id: 100541,
        name: `Luminous Orb`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100540.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100541.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100540.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100541.png`
            },
        stats:
            {
                hp: 60,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals all Allies' HP by 440.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Magical, lifesaving items gifted by angels to their allies during the Ancient War. Many of those fighting for the angels had no medical experience, and wounds suffered in battle were often fatal. This led the angels to provide them with these orbs, which can heal any injury just by holding them. Examples that still work can be found in Raktehelm even today.`
    },
    { //Mountain Hammer Gaiaslave - Complete
        id: 100551,
        name: `Mountain Hammer Gaiaslave`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100550.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100551.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100550.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100551.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1000% Earth DMG (Physical).`,
                break: 300
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A massive hammer once owned by a mountain god. Harboring the power of creation, striking the ground with it allows terrain to be changed at will. Long ago, tribes living in the mountains squabbled over territory. The god summoned the elders of each tribe and swung this hammer to change the shape of the mountains, making territory boundaries clear.`
    },
    { //Holy Staff 'Dominion' - Complete
        id: 100561,
        name: `Holy Staff 'Dominion'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100560.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100561.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100560.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100561.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1650% Non-Elemental DMG (Magic).`,
                break: 400
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A ringed staff bequeathed by the gods to the high priest. Nothing evil can exist within range of its rattling sound. Normally the high priest would never go into battle, let alone fight on the front lines. However, when the demons revived during the unification of Raktehelm, High Priest Franchess took to the field and eradicated the demons in an instant.`
    },
    { //Healing Statue 'Panakeia' - Complete
        id: 100571,
        name: `Healing Statue 'Panakeia'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100570.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100571.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100570.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100571.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals all Allies' HP by 1000. If User is Light Elemental then Healing x 1.5.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A statue imbued with the power of the healing goddess Panakeia. It can cure not only the sick but also purify the earth and even miasma. She created these statues as safe places for her followers during the Ancient War, and the areas around them remained sickness and starvation free. Many were destroyed in the chaos after the war, leaving few intact today.`
    },
    { //Blazing Blade 'Ragnavelga' - Complete
        id: 100581,
        name: `Blazing Blade 'Ragnavelga'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100580.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100581.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100580.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100581.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 2500% Fire DMG (Physical). 70% chance of Burning enemy.`,
                break: 1200
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A massive blade forged from fire left by the blazing god Ragnarok, known as the "one who burned the world". During the Ancient War Ragnarok reduced his foes to ash left and right, and even his allies gave him a wide berth. The fire he started would not burn out even after the war ended, and swinging this sword can unleash that destructive power once again.`
    },
    { //Magic Armor 'Gargantua' - Complete
        id: 100591,
        name: `Magic Armor 'Gargantua'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100590.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100591.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100590.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100591.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `30s CT - Reduces all Allies' DMG Taken by 10% and Dark Elemental DMG Taken by 20% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The demon Gargantua was so evil, he would kill even his allies to meet his own ends. Eventually other demons laid a trap and sealed his soul within this armor. Any who now wear it receive incredible strength but also an insatiable desire to do evil, as though possessed; a voice telling them more sacrifices are required in numbers of deaths equal to the stars.`
    },
    { //God Life Sword 'Seraph' - Missing .....
        id: 100601,
        name: `God Life Sword 'Seraph'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100600.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100601.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100600.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100601.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Calming Sword 'Stillness' - Complete
        id: 100611,
        name: `Calming Sword 'Stillness'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100610.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100611.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100610.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100611.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1650% DMG (Physical).`,
                break: 400
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A single-edged sword used only in the far east of the Gramenia Republic. This is the oldest of all currently confirmed examples. Records from the Ancient War say it was used by a warrior who lived only by the sword, not relying on magic or alchemy. The moment anyone picks it up their heart calms like still water and they can read enemy movements with ease.`
    },
    { //Soultaker Stone 'Demonica' - Complete
        id: 100621,
        name: `Soultaker Stone 'Demonica'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100620.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100621.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100620.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100621.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 1500% Dark DMG (Magic). Randomly Blinds Enemy.`,
                break: 800
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A man was enjoying chatting with an artist friend. As the night drew on, the artist presented him with a recently acquired gemstone. Although perhaps sensing something in the allure of the stone, the man thought no more of it and went home. Months later, he visited again to find an empty house devoid of life and the stone, gleaming even more brilliantly.`
    },
    { //Cocytus Arc - Missing Lore
        id: 100631,
        name: `Cocytus Arc`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 2,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100630.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100631.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100630.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100631.png`
            },
        stats:
            {
                hp: 20,
                atk: 10,
                def: 10
            },
        skillset:  
            {
                skill: `30s CT - Auto-fills Target's Arts gauge by 3 for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Fox Fan 'White Nine Tails' - Complete
        id: 100641,
        name: `Fox Fan 'White Nine Tails'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100640.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100641.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100640.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100641.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `60s CT - Increases Target's Break Power by 100% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Legend says that the fox fan will appear at turning points in history. As these also generally involve conflict, the fan is seen as a sign of turmoil, but for the one who comes to rule the chaos it can also be a good omen. What did the fan bring when it appeared during the Ancient War? No one knows. The only clear thing is that it was a branching of fate.`
    },
    { //Cruze's Pocket Watch - Complete
        id: 100651,
        name: `Cruze's Pocket Watch`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100650.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100651.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100650.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100651.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `30s CT - Increases all Allies' Skill CT Speed by 50% for 6s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A watch that renowned alchemist Baron Cruze kept locked away in his workshop safe. When activated it allows for brief travel through time. Cruze had a heated rivalry with the alchemist Alishis, creator of a similar device called the Terra Conjunction. Records of Alchemist Associations meetings attended by them both are filled mainly with cursing.`
    },
    { //Summon Skeletal Wings - Missing .....
        id: 100661,
        name: `Summon Skeletal Wings`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100660.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100661.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100660.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100661.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Monster Summonstone - Complete
        id: 100671,
        name: `Monster Summonstone`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100670.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100671.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100670.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100671.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `120s CT - 1000% Non-Elemental DMG (Physical). Summon Gem Blessing: Recovers 30 HP to all Allies' for 20s (only once).`,
                break: 0
            },
        passive: 
            {
                ability1: `Summon Gem Blessing Lv1: Only the highest level effect of the Summon Gem Blessing is effective.`
            },
        lore: `A summonstone indicating a contract with a monster. Beasts always show respect to those they consider superior, and will serve them faithfully. The attacks from their powerful limbs and claws can shred steel like paper. Terrifying when mature, as cubs they are cute and playful. Those who bring a cub home often regret it before too long, however.`
    },
    { //Flicker Bow Heavy Rain - Complete
        id: 100681,
        name: `Flicker Bow Heavy Rain`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100680.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100681.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100680.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100681.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1500% Light DMG (Magic).`,
                break: 400
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A battle bow that fires arrows at incredible speed. Numerous records concerning it smashing away multiple incoming foes in a single shot speak to its sheer destructive power. However, that power comes at a cost, meaning few can use it. "Flicker Hand" Lezetta is its most famous owner, handling it like an extra limb and filling her foes with merciless arrows.`
    },
    { //Igneet Axe - Missing .....
        id: 100691,
        name: `Igneet Axe`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100690.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100691.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100690.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100691.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Phoenix Feather Duster - Complete
        id: 100701,
        name: `Phoenix Feather Duster`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100700.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100701.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100700.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100701.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 1500% Fire DMG (Magic). 70% chance of Burning Enemy.`,
                break: 800
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A duster named for the phoenix, a bird that spreads fire as it flies and brings glory to a chosen few. Hearing such legends, greedy noble Jildera paid a hunter to capture him one of the birds. The feathers the hunter eventually brought back were used to make this duster. The moment it was used, however, Jildera's fortune went up on smoke.`
    },
    { //Holy Blue Staff - Complete
        id: 100711,
        name: `Holy Blue Staff`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100710.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100711.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100710.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100711.png`
            },
        stats:
            {
                hp: 60,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 1000. If User is Water Elemental then Healing x 1.5.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A staff used by a female monk from the Principality of Bamint to aid the injured during the Ancient War. After the war ended she gave the staff to her pupil and said, "This world is made of suffering. But we must not despair. Have a heart filled with mercy, and share it with those you meet. That will bring the light of hope into this world."`
    },
    { //Chaos Rod - Complete
        id: 100721,
        name: `Chaos Rod`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100720.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100721.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100720.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100721.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1000% Dark DMG (Magic).`,
                break: 300
            },
        passive: 
            {
                ability1: ``
            },
        lore: `There was a witch during the Ancient War who chose to serve the demons and fight other humans. She appeared in human villages in a cloud of black mist to spread curses and sickness, and became known and feared as the "witch of chaos". Eventually seen an as enemy by all races, she shared the fate of her beloved demons at the end of a terrible battle.`
    },
    { //Demonsickle Evilscythe - Missing Lore
        id: 100731,
        name: `Demonsickle Evilscythe`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100730.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100731.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100730.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100731.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 6250% Dark DMG (Magic).`,
                break: 1200
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Magitome 'Log Vida' - Complete
        id: 100741,
        name: `Magitome 'Log Vida'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100740.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100741.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100740.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100741.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `40s CT - Increases all Allies' Critical Rate by 50% for 11s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A book containing verses written by ancient humans in praise of natural phenomena as "gods". A treasure-trove of ancient knowledge, the beautiful text sounds like magical chanting when read aloud. The longest passages, loaded with primal power and dedicated to the almighty god of destruction, have been known to burn inattentive inscribers to ash.`
    },
    { //Brilliant Blade 'Regracia' - Missing .....
        id: 100751,
        name: `	Brilliant Blade 'Regracia'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100750.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100751.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100750.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100751.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Sacred Crown 'Raaz' - Missing Lore
        id: 100761,
        name: `Sacred Crown 'Raaz'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100760.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100761.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100760.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100761.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `50s CT - Reduces all Allies' DMG Taken by 15% and Negates all Allies' Status Ailments except Faint for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Own Status Ailment (except Faint) Time Reduction and Evasion Rate by 30%.`
            },
        lore: ``
    },
    { //Ice Wolf Blade 'Gaimalse' - Complete
        id: 100771,
        name: `Ice Wolf Blade 'Gaimalse'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100770.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100771.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100770.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100771.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `70s CT - 5000% Water DMG (Physical). Increases all allies' ATK by 25% for 5s (Only once).`,
                break: 2000
            },
        passive: 
            {
                ability1: `Own DMG 10% UP when Near-Death.`
            },
        lore: `A long sword owned by Roy, and imperial knight. Starting as a regular blade from an imperial smith, Roy's long days of training led to it being pitted many times, and every time he honed it himself. This process eventually made it gleam as though reflecting the soul of the one using it, and the Ice Wolf Blade finally became just as famous as Roy.`
    },
    { //Twin Flames 'Rose Garden' - Complete
        id: 100780,
        name: `Twin Flames 'Rose Garden'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100780.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100781.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100780.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100781.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - 6500% Fire DMG (Physical). 100% chance of Burning enemy.`,
                break: 1500
            },
        passive: 
            {
                ability1: `Own ATK 20% UP when Near-Death.`
            },
        lore: `Twin swords loved by Mira, Vice-Commander of the Royal Knights in the Principality of Bamint. Part of becoming of a knight meant she has to use the best equipment the Principality could offer. Taking the ritual knives used when she was born as a princess, powerful fire magic was cast over them and then she gave them the same name as her knight unit.`
    },
    { //Spirit Sword 'Efkeria' - Complete
        id: 100791,
        name: `Spirit Sword 'Efkeria'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100790.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100791.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100790.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100791.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 3500% Earth DMG (Physical). Heals own HP by 240 & increases own Arts gauge by 20.`,
                break: 1200
            },
        passive: 
            {
                ability1: `Own DMG 15% UP when enemy's HP is under 50% (Only once).`
            },
        lore: `A dagger long used by Fen, Head of General Staff in the Gramenia Republic. Although he will not reveal where it came from, apparently it was a rare race with whom he has some familiarity. Blessed by the spirits, it is light as paper but can cut as the wind. It's true protection, however, is the prayers for "luck that it brings the one who holds it.`
    },
    { //Treasure Blade 'Ryude Magus' - Complete
        id: 100801,
        name: `Treasure Blade 'Ryude Magus'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100800.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100801.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100800.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100801.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 7500% Light DMG (Physical). Increases all allies' CRI rate by 50% during Break for 8s.`,
                break: 1200
            },
        passive: 
            {
                ability1: `DMG to Dragons 20% UP.`
            },
        lore: `A legendary blade from the Kingdom of Famelle and currently carried by the "Hero of Famelle", the aged general Zeorg. Said to be self-aware, and capable of detecting threats to the country. Zeorg himself has used such warnings to protect his homeland numerous times. His battle with a dragon that led to him obtaining the blade is still spoken of today.`
    },
    { //??? - Missing .....
        id: 100811,
        name: `???`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100810.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100811.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100810.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100811.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Battle Axe 'Shurahalt' - Missing .....
        id: 100821,
        name: `Battle Axe 'Shurahalt'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100820.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100821.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100820.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100821.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Forge Hammer 'Hepaistos' - Missing .....
        id: 100831,
        name: `Forge Hammer 'Hepaistos'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100830.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100831.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100830.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100831.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //??? - Missing .....
        id: 100841,
        name: `???`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100840.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100841.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100840.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100841.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //??? - Missing .....
        id: 100851,
        name: `???`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100850.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100851.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100850.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100851.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //??? - Missing .....
        id: 100861,
        name: `???`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100860.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100861.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100860.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100861.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Super Pan 'Wild Cat' - Complete
        id: 100871,
        name: `Super Pan 'Wild Cat'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100870.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100871.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100870.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100871.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `70s CT - 100% Fire DMG (Physical).`,
                break: 7000
            },
        passive: 
            {
                ability1: `Increases Unit's Skill CT Speed by 5%.`
            },
        lore: `The battle frying pan used by head chef Sophie from Firecat’s Den. On the day she took over the establishment from her father, which was also her birthday, he gifted her this pan and the following advice: “You must be a chef, even in battle. Just keep your cooking and fighting tools separate.” This pan is at her side on every expedition for ingredients.`
    },
    { //Relic 'Funeral Scythe' - Missing .....
        id: 100881,
        name: `Relic 'Funeral Scythe'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100880.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100881.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100880.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100881.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Relic 'Cloak of Grief' - Complete
        id: 100891,
        name: `Relic 'Cloak of Grief'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100890.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100891.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100890.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100891.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `60s CT - Reduces all Allies' Light Elemental DMG Taken by 30% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases DMG to Demons by 10%.`
            },
        lore: `The black mantle worn by the death god Oldeus. Sewn from the sinful souls he has reaped, which continue to howl even in death. As these cries disrupt all casting, the wearer is granted powerful resistance to magic. Care is also required, however, as paying attention to those cries for even a moment will curse your soul to wander beyond the veil for eternity.`
    },
    { //Relic 'Empty Heart' - Complete
        id: 100901,
        name: `Relic 'Empty Heart'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100900.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100901.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100900.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100901.png`
            },
        stats:
            {
                hp: 60,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `80s CT - Heals Target's HP by 2500.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Curse Time Reduction by 10%. Increases Curse Evasion Rate by 10%.`
            },
        lore: `A strange substance that gives off an irregular sparkle. It was long thought to be the source of the death god's power. However, tests in the Magus Empire of La Riiz after the Ancient War proved that it gives off no magic, spirit energy, heat, or anything else at all. It is now believed to connect Oldeus, who exists in a different world, with this one.`
    },
    { //Relic 'End Times Ring' - Complete
        id: 100911,
        name: `Relic 'End Times Ring'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100910.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100911.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100910.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100911.png`
            },
        stats:
            {
                hp: 15,
                atk: 8,
                def: 8
            },
        skillset:  
            {
                skill: `60s CT - Increases all Allies' Critical Rate by 100% for 4s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases DMG to Gods by 10%.`
            },
        lore: `A beautiful ring belonging to the death god Oldeus. In one region it is deeply believed that being given this ring is a sign of impeding death, but one may survive by using its curse to take 100 other lives. When a terminally ill man came into possession of the ring, he therefore wiped out his entire village, but still died screaming the death god's name.`
    },
    { //Relic 'Bleak Prophet' - Missing .....
        id: 100921,
        name: `Relic 'Bleak Prophet'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100920.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100921.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100920.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100921.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Relic 'Crimson Coat' - Complete
        id: 100931,
        name: `Relic 'Crimson Coat'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100930.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100931.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100930.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100931.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 250
            },
        skillset:  
            {
                skill: `70s CT - Reduces Target's Fire Elemental DMG Taken by 50% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases DMG to Giants by 10%.`
            },
        lore: `A relic created from the wings of insectoid queen Radachne. Making use of the strong yet supple quality of those wings, even the most famous blades in the world can never hope to pierce it. Debate on Radachne has raged since ancient times, with some saying - but with little solid evidence - that her giving this to her children is a sign of a merciful side.`
    },
    { //Relic 'Abyssal Hairpin' - Complete
        id: 100941,
        name: `Relic 'Abyssal Hairpin'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100940.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100941.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100940.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100941.png`
            },
        stats:
            {
                hp: 60,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `100s CT - Heals Target's HP by 2500. If User is Water Elemental then Healing x 1.5.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases DMG to Machines by 10%.`
            },
        lore: `A relic made from underworld butterflies. These purple insects only appear once in the real world, to allow the departed to say farewell to those they leave behind. After imparting those words they quietly fade out of existence by a lake in the underworld. Created from the beautiful wings they leave behind, this relic gifts the wearer intense healing power.`
    },
    { //Relic 'Dark White Spear' - Complete
        id: 100951,
        name: `Relic 'Dark White Spear'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100950.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100951.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100950.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100951.png`
            },
        stats:
            {
                hp: 15,
                atk: 8,
                def: 8
            },
        skillset:  
            {
                skill: `90s CT - Increases all Allies' Arts Gauge by 20.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases DMG to Spirits by 10%.`
            },
        lore: `The holy spear of insectoid queen Radachne. The tip shines with a permanent white light, which intensifies with each kill. Also famous for being used by the hero Elnis. When Elnis had to defend against the Demon Baron Megiola, he focused all his energy into the spear and destroyed he foe in a single attack, earning himself the nickname "Moonlight Knight".`
    },
    { //??? - Missing .....
        id: 100961,
        name: `???`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100960.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100961.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100960.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100961.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //??? - Missing .....
        id: 100971,
        name: `???`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100970.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100971.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100970.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100971.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //??? - Missing .....
        id: 100981,
        name: `???`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100980.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100981.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100980.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100981.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Relic 'Machina Core' - Complete
        id: 100991,
        name: `Relic 'Machina Core'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_100990.png`,
                detailmax: `/db/Equipment/Detail/item_detail_100991.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_100990.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_100991.png`
            },
        stats:
            {
                hp: 125,
                atk: 62,
                def: 62
            },
        skillset:  
            {
                skill: `5s CT - ATK Mode: Increases all Allies' ATK by 25%. Break Mode: Increases all Allies' Break by 25%.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases DMG to Beasts by 10%.`
            },
        lore: `A relic that powers self defense and combat systems created by machines. A perfect sphere with no joins or welds, its composition is a complete mystery. It comes as close as possible to the human dream of an eternal engine, being able to create matter from zero and never stopping. It can even attack on its own, unleashing a chain of crater-making explosions.`
    },
    { //Lockdown Shield Jildoth - Complete
        id: 101001,
        name: `Lockdown Shield Jildoth`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101000.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101001.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101000.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101001.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `40s CT - Reduces all Allies' DMG Taken by 15% and Heals all Allies' HP by 25/s for 10s. If User is Light Elemental then Healing x2.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A shield used by the hero Duran during the Ancient War, and a symbol of his creed of fighting to protect the innocent. Facing a man possessed by a magic blade, the hero defended his town with just this shield, it's sparkling light stopping the incoming wave destructive. the true root of this miracle, of course, was the hero's desire to protect others.`
    },
    { //Blade of Sorrow 'Fe'Ode' - Complete
        id: 101011,
        name: `Blade of Sorrow 'Fe'Ode'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101010.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101011.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101010.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101011.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - 4100% Dark DMG (Magic).`,
                break: 900
            },
        passive: 
            {
                ability1: `Increases BE Gained by 20%.`
            },
        lore: `A sword summoned by the demon Zenon, one of the personal guard of the Six Demon Generals who yet betrayed his own kind. It feeds on the rage and hatred of its user, leading them to eradicate friend and foe alike in a rampage that goes far beyond their desire for revenge - because they have become an empty vessel that can only be filled with blood.`
    },
    { //Temis Egg - Complete
        id: 101021,
        name: `Temis Egg`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101020.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101021.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101020.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101021.png`
            },
        stats:
            {
                hp: 60,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 1200.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A gemstone that heals just by holding it. Pained by the vast number of lives lost in the Ancient War, the gods created these as gifts in order to save as many as they could. The eggs came to be worshipped as miracles and are now housed in temples across the land. Few humans know that only a small number of gods were behind these gifts.`
    },
    { //Conquering Dragon Sword 'Gelmed' - Missing .....
        id: 101031,
        name: `Conquering Dragon Sword 'Gelmed'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101030.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101031.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101030.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101031.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Blessed Necklace - Complete
        id: 101041,
        name: `Blessed Necklace`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101040.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101041.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101040.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101041.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `90s CT - Adds a token to revive Target Unit with 50% HP for 120s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A wizard unable to fight alongside his lord, a knight, due to a congenital defect created this at the cost of his life. The knight mourned the wizard's death and kept the necklace with him always. After a major battle, the knight was knocked into a ravine. He was amazed to open his eyes and find himself still alive, thanks to the light of the necklace.`
    },
    { //Divine Green Staff 'Keion' - Complete
        id: 101051,
        name: `Divine Green Staff 'Keion'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101050.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101051.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101050.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101051.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `30s CT - Increases all Allies' Break Power by 28% for 20s. Increases all Allies' Arts Gauge by 1 for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A staff held by a goddess who deeply loved nature and chose to dwell in the forest. The spirits of the forest accepted her as their goddess, came to love her, and called her Keion. She spoke of friendship and understanding across the races and blessed many people, and her staff is now a symbol of the growth and glory of the forest.`
    },
    { //Ice Magic Sword 'Almas' - Complete
        id: 101061,
        name: `Ice Magic Sword 'Almas'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101060.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101061.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101060.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101061.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 6250% Water DMG (Magic).`,
                break: 1200
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A sword created by the wizard master Almadroth, a key figure in the Ancient War. When more powerful weapons were required to defeat the demons, Almadroth decided to use forbidden arts. At the end of a grueling ritual the sword he created constantly emitted ice magic. Although he spent almost all his magic in its creation, his name lived on through it.`
    },
    { //Demon Axe Exolia - Complete
        id: 101081,
        name: `Demon Axe Exolia`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101080.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101081.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101080.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101081.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `30s CT - 2800% Dark DMG (Physical). Increases own Arts gauge by 10.`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `An axe used by the demon Leon, who sought to unseal the demon god to whom it originally belonged. Few know the truth about the axe, which is said to be because as a tactician Leon rarely fought: actually, it is because any who faced the axe in battle never lived to tell the tale. As it turns out, even the supposed owner is no exception to this rule.`
    },
    { //??? - Missing .....
        id: 101091,
        name: `???`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101090.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101091.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101090.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101091.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //??? - Missing .....
        id: 101121,
        name: `???`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101120.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101121.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101120.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101121.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Hell's Spit 'Karks' - Missing .....
        id: 101131,
        name: `Hell's Spit 'Karks'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101130.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101131.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101130.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101131.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Gem Blade 'Gloria' - Complete
        id: 101141,
        name: `Gem Blade 'Gloria'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101140.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101141.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101140.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101141.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `30s CT - 1500% Light DMG (Magic). Reduces Enemy's Paralyze Resistance by 30% for 5s.`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The divine blade of Zexia, head of the ancient God Knights, received this weapon from on high. Adorned with words praising god, fighting while chanting them unleashes the true power of the weapon. Although this suggests a connection between the user and god, in reality the user's own faith and determination in themselves is more important than the poems.`
    },
    { //Burn Book 'Aguni' - Complete
        id: 101151,
        name: `Burn Book 'Aguni'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101150.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101151.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101150.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101151.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `30s CT - Increases all Allies' Skill CT Speed by 100% for 6s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A magical tome containing the crimsons arts of fire demon Agni. Simply chanting the words within allows even those weak in magic to borrow Agni's strength and execute powerful fire-based magic. Known for his cunning, however, the demon mixed in the phrase “I offer my soul to Agni” to catch the unwary off guard, making all due care required.`
    },
    { //Saint's Medal - Complete
        id: 101161,
        name: `Saint's Medal`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101160.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101161.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101160.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101161.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 20
            },
        skillset:  
            {
                skill: `60s CT - Reduces all Allies' DMG Taken by 3% and Light Elemental DMG Taken by 6% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A medal awarded to those who seek to do only good. It was created for Alistair, a wizard and military doctor for the Isliid Empire during the Ancient War, who headed out alone to save a handful of demons and wounded men trapped on the slopes of an erupting volcano. The lava claimed his life, but the wounded were saved by the protective spell he left behind.`
    },
    { //Lost Arms - Complete
        id: 101201,
        name: `Lost Arms`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101200.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101201.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101200.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101201.png`
            },
        stats:
            {
                hp: 0,
                atk: 350,
                def: 350
            },
        skillset:  
            {
                skill: `45s CT - 2800% Water DMG (Physical). Reduces Enemy's ATK by 40% for 8s.`,
                break: 3150
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A sword created as a weapon in defiance of weapons. "What is true strength?" is the question of all who fight must ask. Facing countless trials, warriors have everything protecting them stripped away. The weapon they choose must become nothing less than a part of them. The conviction that remains after everything else is gone is the key to true strength.`
    },
    { //Heaven Blade Klusos - Complete
        id: 101211,
        name: `Heaven Blade Klusos`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101210.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101211.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101210.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101211.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 700% Light DMG (Physical). Heals own HP by 200 when HIT.`,
                break: 300
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A weapon used by god soldiers during the later part of the Ancient War. Heavily decorated yet exceptionally light, and with the capacity to heal the user as they fight, it was a valued support weapon. It is also famous as the sword appearing in a fairytale in the kingdom of Famelle, in which a younger brother uses it to save his older brother from demons.`
    },
    { //Water Scale Blade Kyuma - Complete
        id: 101221,
        name: `Water Scale Blade Kyuma`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101220.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101221.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101220.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101221.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 6250% Water DMG (Physical).`,
                break: 1200
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The water dragon Kyuma can shred anything it touches, and this is a sword made from its scales.Sealed with magical power, it is popular among infantry who can't use magic. First created during the Ancient War, the complexity of its forging means only a small number have been made. They are also so beautiful that they are often displayed as works of art.`
    },
    { //Holy Spear Hudkenos - Complete
        id: 101231,
        name: `Holy Spear Hudkenos`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101230.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101231.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101230.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101231.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 1000% Water DMG (Physical). 30% chance of Freezing enemy.`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The ice beast Hudnekos dwells in the frozen region in the north-east of the Principality of Bamint, with horns so hard they can pierce a dragon. An adventurer once saw such a battle. While the ice beast won, it's horn was snapped off at the base, allowing the man to collect it after the beast departed. The spear made from it can pierce any material.`
    },
    { //Darkclaw Aetoth - Complete
        id: 101241,
        name: `Darkclaw Aetoth`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101240.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101241.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101240.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101241.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1000% Dark DMG (Physical).`,
                break: 300
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A weapon described in texts kept in the Magus Empire of La Riiz. these claws, used by the Aetoth Bandits, are capable of enveloping foes in darkness. This allowed them to steal many treasures without alerting anyone. A wizard from the Magus Empire captured the thieves and confiscated these claws, but Aetoth himself managed to escape to whereabouts unknown.`
    },
    { //Divine Robe Erial - Complete
        id: 101251,
        name: `Divine Robe Erial`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101250.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101251.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101250.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101251.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 60
            },
        skillset:  
            {
                skill: `30s CT - Reduces Target's DMG Taken by 25% and Magical DMG Taken by 50% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A holy garment named for the highest of the gods. Created in the most sacred area of the temple, it can ward off all magic. The high cost means few ever saw one, until one was recovered from a sunken ship after the Ancient War. The fact it remained beautiful after so many years beneath the sea speaks to the incredible quality of its workmanship.`
    },
    { //Holy Knight's Gauntlets - Complete
        id: 101261,
        name: `Holy Knight's Gauntlets`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101260.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101261.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101260.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101261.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 60
            },
        skillset:  
            {
                skill: `30s CT - Reduces Target's DMG Taken by 30% and Light Elemental DMG Taken by 55% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Gauntlets worn by a Holy Knight in a Raktehelm myth. Blessed by the protection of light, the central gemstones also heal the wearer. While the process to make them is included in the book, it was also considered a fiction - until someone actually made a pair. That doesn't diminish the difficulty of the feat, however, and their cost is astronomical.`
    },
    { //Lamia's Harp - Complete
        id: 101271,
        name: `Lamia's Harp`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101270.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101271.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101270.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101271.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `30s CT - Increases all Allies' Arts Gauge by 10.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `An instrument maker was once so captivated by the sound of Lamia's harp, he devoted his life to recreating it. The completed harp gave power to those around the player, but was so accurate that it also caused the same curse as Lamia. It is therefore rarely used; records even state that were sometimes taken into battle to play it.`
    },
    { //Petra Crown - Complete
        id: 101281,
        name: `Petra Crown`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101280.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101281.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101280.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101281.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's Skill CT Speed by 100% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A crown gifted by the Emperor of Isliid to the adventurer Vetra, marking his ascension to the top of an unexplored volcano. Those who wear it are protected by the tenacious god of fire, and it greatly aided Vetra in his further adventures. After his death, the volume of copies created speaks to the desire of other explorers to follow in his footsteps.`
    },
    { //Metal Bangle - Complete
        id: 101291,
        name: `Metal Bangle`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101290.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101291.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101290.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101291.png`
            },
        stats:
            {
                hp: 60,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 1000. If User is Light Elemental then Healing x 1.5.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `An investigator became lost in the Dara Desert. Faced with a terrible sandstorm, the search party was about to give up when of them noticed a strange light. Following it, they found the missing man wearing this bangle. When he spoke of being enveloped in a warm light before it was placed on his arm, his rescuers offered a prayer to the desert god.`
    },
    {//Burnclaw Alestron - Missing .....
        id: 101301,
        name: `Burnclaw Alestron`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101300.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101301.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101300.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101301.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: ``,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Jade Axe Zeuskia - Complete
        id: 101311,
        name: `Jade Axe Zeuskia`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101310.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101311.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101310.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101311.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1500% Earth DMG (Physical).`,
                break: 400
            },
        passive: 
            {
                ability1: `An axe long passed down by the spirits. Legend states that a wizard sacrificed his own magic to create this for their protection. Decorated with leaves from the undying holy tree, it brings its user the power and protection of the forest. Master weapon smith Rodia is said to have taken one look and immediately lamented that he could never create its equal.`
            },
        lore: ``
    },
    { //Bold Dark Spear Nukteris - Complete
        id: 101321,
        name: `Bold Dark Spear Nukteris`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101320.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101321.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101320.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101321.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 3750% Dark DMG (Magic).`,
                break: 800
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Riznelo was one of the richest men alive. After he died, this dark spear was found under the runs of his house. The one who found it is said to have fled in terror from just a glance at its hideous form. Riznelo's diary detailed obtaining it from an "obsidian knight", and how he considered it his mission to never allow it out into the world again.`
    },
    { //Ornith Bow - Complete
        id: 101331,
        name: `Ornith Bow`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101330.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101331.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101330.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101331.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 3750% Earth DMG (Magic).`,
                break: 800
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A concealed weapon used by the legendary hunter Olnith. His hunting style was to shoot from hiding, but if he happened across his prey unexpectedly this was what he used, which can be fired simply by raising the arm with it equipped. It is also blessed by spirits, and many scholars believe Olnith hunted not only beasts but also those who would harm the forest.`
    },
    { //Phantom Mask - Complete
        id: 101361,
        name: `Phantom Mask`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101360.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101361.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101360.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101361.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 120
            },
        skillset:  
            {
                skill: `30s CT - Negates 400 DMG Dealt to all Allies and Reduces all Allies' Dark Elemental DMG Taken by 35% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A mask worn by a mysterious figure who appeared in front of a scholar investigating a demon castle after the end of the Ancient War. They said nothing, simply removing the mask and leaving it behind. Only the scholar knows who the person was, and why he gave him the mask. The mask itself is tough and harbors dark magic, protecting the wearer.`
    },
    { //Holy Mother's Necklace - Complete
        id: 101371,
        name: `Holy Mother's Necklace`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101370.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101371.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101370.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101371.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 1500. If User is Water Elemental then Healing x 1.5.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A necklace created for a nun who once ran an orphanage in Isliid. Those who wear it are given the protection of light, receiving not only healing but also liberation from mental troubles. As it includes gemstones, the children were actually kidnapped as they made it, but the nun saved them herself. This earned her the name "holy mother".`
    },
    { //Azure Ring - Complete
        id: 101381,
        name: `Azure Ring`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101380.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101381.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101380.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101381.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's DMG Inflicted by 50% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A ring made from a deep sea ore only found off the coast of Isliid. The beautiful azure color has captivated the hearts of many people, and no artist has ever successfully recreated it. The stone also contains magic, heightening the consciousness of the wearer. Many therefore desire one of them, but the ore itself is rare, making them expensive.`
    },
    { //Holy Tree Spear Dendron - Missing .....
        id: 101391,
        name: `Holy Tree Spear Dendron`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101390.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101391.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101390.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101391.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: ``,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //God Flicker Bow Kyuknoth - Complete
        id: 101401,
        name: `God Flicker Bow Kyuknoth`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101400.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101401.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101400.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101401.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 2500% Light DMG (Magic). 80% chance of Paralyzing Enemy.`,
                break: 1200
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The great bow of Raktehelm, and equal to the Devil Shadow Bow Meranpatl. A god once visited a village plunged into darkness by demons and fired a arrow from this bow to clear the heavens. Due to its incredible power it is now under guard in a shrine in the west of the Isliid Empire, but travelers still come from around the world to catch a glimpse of it.`
    },
    { //Devil Shadow Bow Meranpatl - Missing .....
        id: 101411,
        name: `Devil Shadow Bow Meranpatl`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101410.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101411.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101410.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101411.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: ``,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Ascension Staff Antoth - Complete
        id: 101421,
        name: `Ascension Staff Antoth`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101420.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101421.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101420.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101421.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 3600.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Antoth, a priest in a temple in the south west of Gramenia, created his staff to heal his beloved after she was left in a coma from injuries sustained defending him. If the user wants it badly enough, it can even overcome death, but as a result Antoth was banished for practicing necromancy. It is therefore unknown if he was ever reunited with his beloved.`
    },
    { //Netherblade Rodgalos - Missing .....
        id: 101431,
        name: `Netherblade Rodgalos`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101430.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101431.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101430.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101431.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: ``,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Burnspear Eluonith - Complete
        id: 101441,
        name: `Burnspear Eluonith`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101440.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101441.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101440.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101441.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 2500% Fire DMG (Magic).`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A spear made from the wings and bones of the burn beast Eluolnith. Harbors magic enough to evaporate an entire lake with a single thrust. Those who can use it without being burned to ash earn the name Fire Lance God. Only five have done so in recorded history, one who was Dalnith in his youth, defeating an Eluolnith alone and offering it up in tribute.`
    },
    { //Divine Robe Radoel - Complete
        id: 101451,
        name: `Divine Robe Radoel`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101450.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101451.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101450.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101451.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `30s CT - Reduces all Allies' DMG Taken by 10% and Earth Elemental DMG Taken by 20% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The ultimate holy robe, created in a temple deep in the forests of eastern Famelle from the fur of a divine beast that only appears once a year. If the rites cast over it fail then the entire piece is destroyed, making it extremely rare. Ancient records in the Isliid Empire refer to this as a "fabled, mythic robe," speaking to the length of its history.`
    },
    { //Flickerblade Scythe - Complete
        id: 101491,
        name: `Flickerblade Scythe`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101490.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101491.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101490.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101491.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 1000% Light DMG (Physical). 30% chance of Paralyzing Enemy.`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A shining, razor-sharp scythe used by the weather goddess Meltina in Raktehelm myth. The duality of this goddess is expressed in her provision of gentle sunlight and bountiful harvests juxtaposed with raging storms and drought. Her scythe is not different, unleashing destructive winds on enemies while also healing the one using it.`
    },
    { //??? - Missing .....
        id: 101501,
        name: `???`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101500.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101501.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101500.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101501.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Coldian Scarf - Complete
        id: 101511,
        name: `Coldian Scarf`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101510.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101511.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101510.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101511.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 60
            },
        skillset:  
            {
                skill: `30s CT - Reduces all Allies' DMG Taken by 5% and Dark Elemental DMG Taken by 10% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A scarf worn by the the members of the legendary Coldia Thieves. Secret magic allows the wearer to become one with the darkness, and allowed the thieves to complete many robberies completely unseen. Coldia is even said to have used such a scarf to walk the underworld undetected, where he stole a great treasure, but the truth remains wreathed in darkness.`
    },
    { //Frozen Beauty Dance Fan - Complete
        id: 101521,
        name: `Frozen Beauty Dance Fan`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101520.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101521.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101520.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101521.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `40s CT - Increases Target's Critical Rate by 100% for 5s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A legendary fan said to have blown away an ice storm. After the Ancient War, the Principality of Bamint became locked in ice, and the people despaired at the endless winter. One of the shrine maidens took up this fan and danced, causing the blizzard to cease and the snows to melt. A festival celebrating the coming of spring is still held in Bamint.`
    },
    { //Drakkeus Bolt - Complete
        id: 101531,
        name: `Drakkeus Bolt`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101530.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101531.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101530.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101531.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 2500% Earth DMG (Physical).`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A long gun made by a machine who was saved by spirits during the Ancient War. It was designed to keep foes as far as possible, and the resulting gun has range and accuracy far beyond other firearms. Although lethal even at long range, the spirits used them only for warning and defense, and never once used one to take a life.`
    },
    { //Saltcleaver Axe - Complete
        id: 101541,
        name: `Saltcleaver Axe`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101540.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101541.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101540.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101541.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 2500% Water DMG (Physical).`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `An axe used by giants for sea battles. Incredibly heavy, as expected from a giant weapon, meaning other races can rarely even lift it. Those who can wield it, however, find the power to crush armor and shield with ease. Legends still tell of how a giant warrior used one to part the very sea in two with a single attack during the Ancient War.`
    },
    { //Shield of Dawn - Complete
        id: 101551,
        name: `Shield of Dawn`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101550.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101551.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101550.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101551.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 60
            },
        skillset:  
            {
                skill: `30s CT - Reduces all Allies' DMG Taken by 15% and Light Elemental DMG Taken by 30% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Shields made by the gods. Blessed by light, it can protect the bearer from all evil. known for being used by the Dawn Knights, a unit particularly specialized for fighting demons. The sight of them advancing with shields ablaze was much like the breaking of the dawn. demons in the Ancient War came to despise both these shield and the name of the knights.`
    },
    { //Fortress Breaker Daltarion - Complete
        id: 101561,
        name: `Fortress Breaker Daltarion`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101560.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101561.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101560.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101561.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 3750% Earth DMG (Physical).`,
                break: 800
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A hammer created by the demons during the Ancient War. Created as a siege weapon for assaults on fortress and castle walls, and indeed it turned multiple supposedly impregnable defenses into rubble. While appearing too unwieldy for single combat at a glance, hammering the ground once is often more than enough to knock any adversary off their feet.`
    },
    { //Scorch Lance Vehelm - Complete
        id: 101571,
        name: `Scorch Lance Vehelm`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101570.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101571.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101570.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101571.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 3750% Fire DMG (Magic).`,
                break: 800
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A lance named for "Dragon Killer" Velhelm. Starting out as a regular lance, being dipped in so much dragon blood imbued it with the power of fire. Having killed so many dragons, Velhelm purchased the wrath of the entire species. He only rose to the challenge, however, and slew countless attackers who sought him out seeking revenge.`
    },
    { //Earth Headband Yakshutori - Complete
        id: 101581,
        name: `Earth Headband Yakshutori`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101580.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101581.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101580.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101581.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals all Allies' HP by 400. Heals all Allies' Disease.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A headband worn by those who live alongside the earth and control the basic elements of nature. Wearing it provides the vitality of the earth itself. Such individuals dwell apart from the world, shrouding them in mystery. During the Ancient War they came to provide healing for the injured, however. Their motivations are unknown, but they saved many lives.`
    },
    { //Holy Mist Earring - Complete
        id: 101591,
        name: `Holy Mist Earring`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101590.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101591.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101590.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101591.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's Arts Gauge by 30.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The spirits hold an annual festival in honor of their ancestors, which many races come from across Raktehelm to witness. At the end of the solemn ceremony they offer a prayer to the heavens and the stars all shine brightly in response. This earring houses mist from the following night inside it, and those who wear it remain pure of body at all times.`
    },
    { //Galju Necklace - Complete
        id: 101601,
        name: `Galju Necklace`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101600.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101601.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101600.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101601.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's Break Power by 800 for 15s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The Galju tribe appear often in legends. Their chief wore this necklace, to which he would add the teeth of the beasts he defeated. Any who now wear it suffer the rage and pain of those slain beasts, but beyond that they are also buoyed by the bold strength of the Galju. The reason the tribes hated the beasts so harshly remains a mystery.`
    },
    { //Cursed Hammer 'Bardrade' - Complete
        id: 101611,
        name: `Cursed Hammer 'Bardrade'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101610.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101611.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101610.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101611.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 3750% Dark DMG (Physical).`,
                break: 800
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A massive hammer used by the giants. Embedded in its center is the skull of the hero Baldred. Known for defeating countless dragons, he eventually succumbed to sickness. Fearing dragon reprisals, he asked his blacksmith friend to turn his skull into a weapon after he died, and the resulting hammer continued to crush dragons long after his passing`
    },
    { //Gale Spear Rey Vie - Complete
        id: 101621,
        name: `Gale Spear Rey Vie`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101620.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101621.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101620.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101621.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1500% Earth DMG (Magic).`,
                break: 400
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A treasure spear of the Famelle royal family, and particularly known for being used by "warrior king" Maglagan. There has been much debate on why he named it "Rey Vie". A recently discovered diary from royal aide Beil sheds some light on the matter; on secret trips out of the castle to help people, Maglagan was accompanied by a spirit called Rey.`
    },
    { //Underking Spear 'Hellfire' - Missing .....
        id: 101631,
        name: `Underking Spear 'Hellfire'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101630.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101631.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101630.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101631.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: ``,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Magic Bow Logiageiz - Complete
        id: 101641,
        name: `Magic Bow Logiageiz`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101640.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101641.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101640.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101641.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 2500% Water DMG (Magic). 80% chance of Freezing enemy.`,
                break: 1200
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A weapon used by spirits. Although shaped like a bow it's material strength as a weapon is low; rather, it is used to concentrate and then fire a wizard's magic. The more they focus as they draw the string, the stronger the attack becomes. Legends still tell of how a spirit wizard charged a shot all night and then proceeded to level a mountain when he fired.`
    },
    { //Seaband Elgilkrone - Complete
        id: 101651,
        name: `Seaband Elgilkrone`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101650.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101651.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101650.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101651.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `30s CT - Reduces Target's DMG Taken by 33% and Fire Elemental DMG Taken by 66% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A headband infused with the power of the sea god. Once the dwellers in the seas of Raktehelm forged an alliance beyond the bounds of races, and their leader wore this. As the alliance grew the leader became the true king of the seas. The Ancient War tore the alliance apart, however, and the original headband was lost in the ensuing chaos.`
    },
    { //Insane Bracer Amaltia - Complete
        id: 101661,
        name: `Insane Bracer Amaltia`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101660.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101661.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101660.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101661.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `15s CT - Increases Target's Critical Rate by 100% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The powerful devil collected sinners who have been sent to hell and made them fight, telling the winner they could return to life. He gave each of them one of these bracers, which temporarily brought them back to life while still in hell. No records exist of those who won such duels, so the origin of these bracers in Raktehelm is unknown.`
    },
    { //Goldias Goggles - Complete
        id: 101671,
        name: `Goldias Goggles`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101670.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101671.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101670.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101671.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `30s CT - Reduces Target's DMG Taken by 33% and Light Elemental DMG Taken by 66% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `When first discovered, these goggles were thought to be functionless oddities. However, one researcher read the incantation carved on the back and their secret power was unleashed with a flash, revealing that they were originally created by a skilled alchemist. The spell reads as follows: "Goldias, warrior of the sun, arrives in a flash of JUSTICE!"`
    },
    { //Chrono Dominator - Complete
        id: 101681,
        name: `Chrono Dominator`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101680.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101681.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101680.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101681.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `30s CT - Increases all Allies' DMG Inflicted by 34% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A relic, created by the alchemist Alishis, that can control the flow of time around it. It was completed just as his bitter rival Baron Cruze also unveiled a watch-based device of a similar nature. It is said that a woman was deeply involved in getting both of them into the control of time, but more detailed records have never been uncovered.`
    },
    { //Flicker Bow Heavy Rain - Complete
        id: 101691,
        name: `Flicker Bow Heavy Rain`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101690.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101691.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101690.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101691.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 1500% Light DMG (Magic).`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A battle bow that fires arrows at incredible speed. Numerous records concerning it smashing away multiple incoming foes in a single shot speak to its sheer destructive power. However, that power comes at a cost, meaning few can use it. "Flicker Hand" Lezetta is its most famous owner, handling it like an extra limb and filling her foes with merciless arrows.`
    },
    { //Relic 'Framshilt' - Complete
        id: 101701,
        name: `Relic 'Framshilt'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101700.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101701.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101700.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101701.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `60s CT - Reduces all Allies' DMG Taken by 20% for 5s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Fire Elemental Resistance by 5%.`
            },
        lore: `A divine shield created from scales of the blazing dragon Degilmagna. It became famous when found pristine in ruins dating from the Ancient War, and became worshipped as a symbol of the battle with Degilmagna. The king of Famelle at the time tried to obtain it, but when he reached the temple the shield had already been taken by a mysterious organization.`
    },
    { //Relic 'Wisfiraft' - Complete
        id: 101711,
        name: `Relic 'Wisfiraft'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101710.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101711.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101710.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101711.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `60s CT - Increases Target's DMG Inflicted by 15% for 30s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Curse Time Reduction by 10%. Increases Curse Evasion Rate by 10%`
            },
        lore: `A necklace that gives the power of a blazing dragon to the one who wears it. It was found by three children exploring some ruins. When they were then attacked by demons, they used this to fight back and drive them off. Perhaps hard to believe, but this also proved the power of this relic, Many have tried to discover its power source, but none have succeeded.`
    },
    { //Relic 'Sakredpose' - Complete
        id: 101721,
        name: `Relic 'Sakredpose'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101720.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101721.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101720.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101721.png`
            },
        stats:
            {
                hp: 15,
                atk: 8,
                def: 8
            },
        skillset:  
            {
                skill: `60s CT - Increases all Allies' DMG Inflicted by 18% for 5s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Fire Elemental Resistance by 5%.`
            },
        lore: `A relic created by a powerful wizard. It contains the magma that flows inside the body of the blazing dragon Deglmagna. The heat it gives off is magically enhanced, heightening the power of those around it. A robber king who's love of it cost him his life said only this upon his execution: "May the sacred sparkle last forever".`
    },
    { //Relic 'Radeus' - Missing .....
        id: 101801,
        name: `Relic 'Radeus'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101800.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101801.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101800.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101801.png`
            },
        stats:
            {
                hp: 0,
                atk: 250,
                def: 0
            },
        skillset:  
            {
                skill: ``,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Relic 'Force Keratos' - Complete
        id: 101821,
        name: `Relic 'Force Keratos'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101820.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101821.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101820.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101821.png`
            },
        stats:
            {
                hp: 60,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `30s CT - 	Heals all Allies' HP by 200. Heals all Allies' Status Ailments except for Faint and Disease.`,
                break: 0
            },
        passive: 
            {
                ability1: `Reduces Physical DMG Taken by 5%.`
            },
        lore: `The Light Dragon Fosradius once sought interaction with humans, and gave this this relic to the most innocent girl he could find. She became an object of worship, and gave blessings to many people. However, not satisfied, the people started to make demands of the girl. The dragon despaired at the depth of human greed, and the girl left the relic and disappeared.`
    },
    { //??? - Missing .....
        id: 101831,
        name: `???`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101830.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101831.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101830.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101831.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Relic 'Lesser Demonheart' - Complete
        id: 101841,
        name: `Relic 'Lesser Demonheart'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101840.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101841.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101840.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101841.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `40s CT - Increases target's Arts gauge by 5 for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Arts Gauge Regenerates by 1 when Near-Death.`
            },
        lore: `A demon sphere containing the loyalty of the ultimate monster Valzandeath. This beast served his master like a true knight, resisting all urges for destruction. However, upon his master's defeat he unleashed his true power in vengeance, scorching the very earth. He then cut out his own heart, in order not to further defile the life he lived with his master.`
    },
    { //Relic 'Mavlocalypse' - Complete
        id: 101851,
        name: `Relic 'Mavlocalypse'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101850.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101851.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101850.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101851.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 4500% Dark DMG (Physical). Poisons ownself. Increases own Break power by 100% for 4s.`,
                break: 1800
            },
        passive: 
            {
                ability1: `Increases Own MAX HP by 10% (Only once).`
            },
        lore: `A axe spat out by the weapon devouring dragon Mavlosgia. Already powerful, exposure to pure dark magic inside his body proceeded to warp and twist it. The central gemstone is charged with magic, allowing each swing to cause massive shockwaves. Those drawn to its power are fated to die, however, as the weapon always calls Mavlosgia back to it.`
    },
    { //Relic 'Diablos' - Complete
        id: 101861,
        name: `Relic 'Diablos'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101860.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101861.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101860.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101861.png`
            },
        stats:
            {
                hp: 0,
                atk: 250,
                def: 0
            },
        skillset:  
            {
                skill: `70s CT - 6800% Dark DMG (Magic). Uses 10% of current HP. Increases own Dark DMG by 50% for 5s.`,
                break: 700
            },
        passive: 
            {
                ability1: `Increases Own MAX HP by 10% (Only once).`
            },
        lore: `A staff created in the battle between the dragon Mavlosgia and a woman from the Magus Empire of La Riiz during the Ancient War. The breath of death from the beast washed over her as they fought, and afterward her staff had been completely warped. Sensing its dark power she immediately sealed it away, but eventually it was stolen by a unknown party.`
    },
    { //Relic 'Skeletooth' - Complete
        id: 101871,
        name: `Relic 'Skeletooth'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101870.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101871.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101870.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101871.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 30
            },
        skillset:  
            {
                skill: `50s CT - Substitutes Target's DMG Taken for 6s. If used on self, reduces Own DMG Taken by 10% for 6s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Arts Gauge Regenerates by 1 when Near-Death.`
            },
        lore: `A shield made from the exceptionally tough bones of a Valzandeath, and in particular the wing bones. The beam the beast can fire from its mouth is formed of magic collected from the air using his wings as antenna, which means the wing bones can absorb and store massive volumes of magic. These properties allow this shield to defend against any magic attack.`
    },
    { //Relic 'Frost Killer' - Complete
        id: 101921,
        name: `Relic 'Frost Killer'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101920.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101921.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101920.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101921.png`
            },
        stats:
            {
                hp: 0,
                atk: 30,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 3400% Water DMG (Magic).`,
                break: 1000
            },
        passive: 
            {
                ability1: `Increases DMG to Machines by 10%.`
            },
        lore: `A scythe possessed of the magic of the gale Fledal. Quite literally a feather that can form ice, it is not only made from the wing of a bird with snow magic but has that same magic infused into the blade, earning it the name "relic". It brings the power of a blizzard to the user, allowing them to transform any season into winter with a single swipe.`
    },
    { //Relic 'Zero = Recorder' - Complete
        id: 101941,
        name: `Relic 'Zero = Recorder'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_101940.png`,
                detailmax: `/db/Equipment/Detail/item_detail_101941.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_101940.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_101941.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `60s CT - Adds Freeze Effect to all Allies' Attack for 10s. Increases all Allies' Arts Gauge by 20.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Paralysis Time Reduction by 10%. Increases Paralysis Evasion Rate by 10%.`
            },
        lore: `A magic recorder imbued with the power of the gale Fledal. Possessed of the freezing ice magic, it allows the user to create absolute zero conditions as they please. These properties can also be used to provide protection to allies from ice, making this instrument a textbook example of how the way something is used all comes down to the user.`
    },
    { //Relic 'Blaze Staff' - Missing .....
        id: 102001,
        name: `Relic 'Blaze Staff'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102000.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102001.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102000.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102001.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Relic 'Blaze Gauntlets' - Missing Lore
        id: 102011,
        name: `Relic 'Blaze Gauntlets'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102010.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102011.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102010.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102011.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 250
            },
        skillset:  
            {
                skill: `30s CT - Reduces Target's Physical DMG Taken by 90% for 5s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Earth Elemental Resistance by 5%.`
            },
        lore: ``
    },
    { //Relic 'Blaze Ring' - Missing Lore
        id: 102021,
        name: `Relic 'Blaze Ring'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102020.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102021.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102020.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102021.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `30s CT - Increases Own Skill CT by 200% for 6s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases DMG to Humans by 10%.`
            },
        lore: ``
    },
    { //Relic 'Blaze Medicine' - Complete
        id: 102031,
        name: `Relic 'Blaze Medicine'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102030.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102031.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102030.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102031.png`
            },
        stats:
            {
                hp: 30,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `30s CT - Heal's Target's HP by 300. Increases Target's DMG Inflicted by 10% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Burning Time Reduction by 10%. Increases Burning Evasion Rate by 10%`
            },
        lore: `This medicine is detailed in a forbidden text kept in a light bringer god temple. When the water beast Juroga attacked Bamint, the gods taught a priest how to make a number of relics. As this medicine uses the power of fire to heal, those with strong fire power themselves can boost its effects. The relics Kalon possessed were just copies of the originals.`
    },
    { //Ex Gloria - Missing .....
        id: 102041,
        name: `Ex Gloria`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102040.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102041.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102040.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102041.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: ``,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Agio Lamuz - Complete
        id: 102051,
        name: `Agio Lamuz`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102050.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102051.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102050.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102051.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - 7200% Non-Elemental DMG (Magic).`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases all Light Elemental Allies' DMG by 10% (only once).`
            },
        lore: `A rod created in Isliid with aid from the Magus Empire in order to be gifted to skilled retainers and wizards, and with a focus on practical use in battle. It is modeled on an item used in coronations to represent the "holiness" received from the previous Emperor. The way it responds to positive energy also means none with evil in their hearts can use it.`
    },
    { //Diez Jade - Missing Passive
        id: 102061,
        name: `Diez Jade`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102060.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102061.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102060.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102061.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `50s CT - Reduces all Allies' DMG Taken by 15% for 10s. Evades all Status Ailments except for Faint.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A replica of the sparkling shield used by the legendary "Hero King" Emperor of Isliid. Once, when marching with 500 men to take his pregnant queen to rest in her hometown, the Hero King was set upon by 2000 enemy. He fought on the frontline to protect her, and from the legend this shield engraved with "A Knight Protects" started to be given as a reward.`
    },
    { //Claria Health - Complete
        id: 102071,
        name: `Claria Health`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102070.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102071.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102070.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102071.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals all Allies' HP by 1200.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases all Allies' Max HP by 5% (only once).`
            },
        lore: `A treasure given to Isliid knight captains upon receiving direct orders from the Emperor. Although only a figurehead now, the Emperor must still decree large scale military action. Accepting this item means taking on the defense of the empire. It’s sparkling blue stone contains not only raw magic but also the Emperor's wishes for the bearer to return alive.`
    },
    { //Optima Rade - Complete
        id: 102081,
        name: `Optima Rade`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102080.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102081.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102080.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102081.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `40s CT - Increases Target's Arts Gauge by 5 for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Regenerates all Allies' Arts Gauge by 1 when KO'd (only once).`
            },
        lore: `Water drawn from the holy pool defended by the Isliid Empire, under the auspices of the Emperor and to which only strictly authorized knights have access. If the waters in the spring lower, it is an omen of ill portent. Also called “natural holy water”, a single sip can energize the use, making it much sought after by all knights everywhere.`
    },
    { //Fenrir Gauntlets - Complete
        id: 102101,
        name: `Fenrir Gauntlets`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102100.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102101.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102100.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102101.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 120
            },
        skillset:  
            {
                skill: `30s CT - 	Negates 600 DMG Dealt to all Allies' for 8s (only once). Reduces all Allies' Physical DMG Taken by 25% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Reduces DMG Taken by 10% when near-death.`
            },
        lore: `Gauntlets used by Roy. Immediately after his appointment as Caption to the 3rd, he distinguished himself in fighting with some monsters and earned these along with the name "Silver Wolf". They are engraved with Fenrir, the symbol of his unit. Easy to use and very though, the special protection cast over them is activated when the wearer needs it the most.`
    },
    { //Fenrir Crest - Complete
        id: 102111,
        name: `Fenrir Crest`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102110.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102111.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102110.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102111.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals all Allies' HP by 1000. If User is Water Elemental then Healing x 1.5.`,
                break: 0
            },
        passive: 
            {
                ability1: `Reduces DMG Taken by 10% when near-death.`
            },
        lore: `A crest worn by the Isliid Empire 3rd Division "Fenrir" Corps. It serves as proof of their appointment and also a reminder of belonging to a proud history of knights. Blessed with healing magic the crest always shines silver, perhaps a sign of the proud wolf watching over these knights. Its real power is revealed when the life of the wearer is in danger.`
    },
    { //Relic 'Volkans' - Complete
        id: 102121,
        name: `Relic 'Volkans'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102120.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102121.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102120.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102121.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `90s CT - 8000% Fire DMG (Physical). Burns all allies and enemies.`,
                break: 2800
            },
        passive: 
            {
                ability1: `Reduces own Skill CT by 20% when Burning.`
            },
        lore: `Gauntlets worn by the fire god Ifrit in manifested form. He used them to defend enemy attacks and also to seal in some of his own heat. At full power he was capable of scorching a battlefield with a single hand, but these gauntlets let him unleash less intense fire magic. Suited to the violence of the fire god, they can crush any enemy with a single blow.`
    },
    { //Relic 'Logislett' - Complete
        id: 102131,
        name: `Relic 'Logislett'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102130.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102131.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102130.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102131.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 250
            },
        skillset:  
            {
                skill: `45s CT - Reduces all Allies' DMG Taken by 25% for 12s. Adds Burning Effect to all Allies' Attack for 12s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases own Skill CT Speed by 20% when Burning.`
            },
        lore: `A sealing relic that the fire god Ifrit bound around himself to restrain his fire powers. Where normally he would burn everything in sight, with this he could meet and speak with people. While these chains bind all physical, magical and mental powers, they can also repel any incoming force and so many invincible armor if wrapped around the body.`
    },
    { //Relic 'Puneumath' - Complete
        id: 102141,
        name: `Relic 'Puneumath'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102140.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102141.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102140.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102141.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 250
            },
        skillset:  
            {
                skill: `35s CT - Increases all Allies' Healing Amount by 50% for 7s (except lifesteal). Unlikely to get knocked back.`,
                break: 0
            },
        passive: 
            {
                ability1: `Regenerates own HP by 4.`
            },
        lore: `The verdant dragon Elpuneumath grew trees on his body, and this robe is created from the threads of silkworms living in such forests. Light as a breeze and tough as steel, it also allows the wearer to waether all environmental conditions. Furthermore, they even hear the gentle voice of nature, making it almost impossible for them to fall in battle.`
    },
    { //Relic 'Benomopis' - Missing .....
        id: 102151,
        name: `Relic 'Benomopis'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102150.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102151.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102150.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102151.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Custom Order 'Toc Blanche' - Complete
        id: 102161,
        name: `Custom Order 'Toc Blanche'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102160.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102161.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102160.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102161.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - Heals all Allies' HP by 100/s for 7s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Skill CT Speed by 5%.`
            },
        lore: `A special order cook's hat that only the head chef at the Firecat's Den, Sophie, is allowed to wear. Her father wore a more orthodox design, but when Sophie's turn came she really glitzed it up. The reasons are unknown, but her fashion sense clearly shines through. Compliment it she'll say "Praise my cooking, not the hat," but she looks happy about it too.`
    },
    { //Beloved 'Flame Meat Knife' - Missing .....
        id: 102171,
        name: `Beloved 'Flame Meat Knife'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102170.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102171.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102170.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102171.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Relic 'Eraser Bit' - Complete
        id: 102181,
        name: `Relic 'Eraser Bit'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102180.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102181.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102180.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102181.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - 4500% Non-Elemental DMG (Magic). Reduces Enemy's Paralyze Resistance by 30% for 8s.`,
                break: 1500
            },
        passive: 
            {
                ability1: `Increases DMG Dealt to Beasts by 10%.`
            },
        lore: `Once a combination of three relics, this machine is now capable of operating alone. It tails the user, identifies threats and attacks with lasers so powerful they may even pose a threat to the user. The reduced output setting is said to offer the best (safest) performance, spinning around the user while bathing enemies an endless stream of death.`
    },
    { //Relic 'Machina Core' - Complete
        id: 102191,
        name: `Relic 'Machina Core'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102190.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102191.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102190.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102191.png`
            },
        stats:
            {
                hp: 125,
                atk: 62,
                def: 62
            },
        skillset:  
            {
                skill: `5s CT - ATK Mode: Increases all Allies' ATK by 25%. Break Mode: Increases all Allies' Break by 25%.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases DMG to Beasts by 10%`
            },
        lore: `A relic that powers self defense and combat systems created by machines. A perfect sphere with no joins or welds, its composition is a complete mystery. It comes as close as possible to the human dream of an eternal engine, being able to create matter from zero and never stopping. It can even attack on its own, unleashing a chain of crater-making explosions.`
    },
    { //Burn Armor 'Noble Bamint' - Complete
        id: 102301,
        name: `Burn Armor 'Noble Bamint'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102300.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102301.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102300.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102301.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `70s CT - 7000% Fire DMG (Magic). 70% chance of Burning Enemy.`,
                break: 1000
            },
        passive: 
            {
                ability1: `Increases DMG to Earth Elemental Units by 5%.`
            },
        lore: `Armor made for Mira, third princess of the Principality of Bamint. Even fighting is part of her duties, and this armor is made to reflect that, including wear during ceremonies and holy rites. Made from tough materials and blessed with Mira's most compatible element, fire, it is a fine piece of work intended to ensure she always returns from battle alive.`
    },
    { //Beautiful Robe 'Grace Barmint' - Complete
        id: 102311,
        name: `Beautiful Robe 'Grace Barmint'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102310.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102311.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102310.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102311.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `300s CT - Revives all Allies at 15% HP. If User is Fire Elemental then Healing x 2.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Own Status Ailment (not Faint) Time Reduction and Evasion Rate by 10%.`
            },
        lore: `A robe made for Mira the third princess of Bamint. It has been designed with the intention of reminding her that she is still a princess and therefore has the durability of blocking sword attacks while still preventing it from making clattering sounds while walking. it is light, has good ventilation, and easy to walk in, giving it an excellent comfortability as well as preventing fatigue or stuffiness.`
    },
    { //Holy Shield of Wings - Complete
        id: 102321,
        name: `Holy Shield of Wings`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102320.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102321.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102320.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102321.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `30s CT - Continuously Increases Target's HP Healing amount by 20% (Max 100%) (except lifesteal).`,
                break: 0
            },
        passive: 
            {
                ability1: `Reduces Arts DMG taken by 10% (only once).`
            },
        lore: `A shield shaped like the wings of the goddess Palamacia. Known as the "white swan of the battlefield", she would first raise this shield high to boost the morale of allies and call for the surrender of the enemy. Using twin blades, she did not even need a shield, and yet this one helped her achieve many victories for the gods entirely free from bloodshed.`
    },
    { //Frozen Twin Swords - Complete
        id: 102331,
        name: `Frozen Twin Swords`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102330.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102331.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102330.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102331.png`
            },
        stats:
            {
                hp: 0,
                atk: 30,
                def: 0
            },
        skillset:  
            {
                skill: `10s CT - 1000% Water DMG (Magic).`,
                break: 350
            },
        passive: 
            {
                ability1: `Reduces Arts DMG Taken by 10% (only once).`
            },
        lore: `The sword of Palamacia, the greatest swordswomen of the gods. It has a clear purity, equal to her own as she danced through battle like a graceful swan. The blade always shines, never stained by blood regardless of the numbers it kills, and its attacks feel like nothing more than "ice across the skin", leaving the departed unaware they have even been cut.`
    },
    { //Evil Spear 'Berserk' - Missing .....
        id: 102341,
        name: `Evil Spear 'Berserk'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102340.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102341.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102340.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102341.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: ``,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Evil Helmet 'Nightmare' - Complete
        id: 102351,
        name: `Evil Helmet 'Nightmare'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102350.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102351.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102350.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102351.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `35s CT - 1900% Dark DMG (Magic). Heals Own HP by 120 for each Enemy Unit hit`,
                break: 900
            },
        passive: 
            {
                ability1: `Increases Critical DMG by 10%.`
            },
        lore: `A magical helm worn by the demon Grad, an elite member of the Sin Emperor's forces during the Ancient War. A blue helmeted berserker who only sought battle and blood, he was a true nightmare, which is how the helmet got its name. Until it was finally sealed away, it was never touched by a single blade; a nightmare forged by the blood and screams of battle.`
    },
    { //Magic Sword 'Geshpenst' - Complete
        id: 102361,
        name: `Magic Sword 'Geshpenst'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102360.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102361.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102360.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102361.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `55s CT - 6000% Dark DMG (Physical).`,
                break: 1000
            },
        passive: 
            {
                ability1: `All allies' ATK 15% UP (Only once).`
            },
        lore: `The sword used by Ragsherum, leader of the demons who attacked every region after reviving in Gormarey. He was skilled at using the pulse of his magic and soul to influence objects, and could make this sword fly back to his hand from anywhere on the battlefield. Unaware of what was happening, people soon came to believe this sword was possessed by a ghost.`
    },
    { //Magic Fists 'Hellshaft' - Complete
        id: 102371,
        name: `Magic Fists 'Hellshaft'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102370.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102371.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102370.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102371.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `40s CT - Increases Target's Critical Rate by 100% for 9s. If User is Dark Elemental then increases Target's Arts Gauge by 30.`,
                break: 0
            },
        passive: 
            {
                ability1: `Reduces Max HP by 30% and increases ATK by 30% (only once).`
            },
        lore: `Gauntlets worn by Ragsherum. His goal was to revive every sealed demon and take over the world, and each time he swore to achieve this his fist bunched in these very gloves. Defeated before he could do so, it was only a matter of time before these gauntlets, exposed for so long to such powerful intent, combined with other relics to achieve those same goals.`
    },
    { //Cursed Armor 'Ragsherum' - Complete
        id: 102381,
        name: `Cursed Armor 'Ragsherum'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102380.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102381.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102380.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102381.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `95s CT - 9500% Dark DMG (Magic).`,
                break: 700
            },
        passive: 
            {
                ability1: `Increases all Dark Elemental Allies' DMG by 5%.`
            },
        lore: `Armor that became the medium for Ragsherum's vengeful spirit to materialize. After being exposed to the pulse of his magic and soul for so long, the armor became capable of containing his vast energy. It also provides an outer shell and gives his ghost form as Ragsherum Phantom. He has learned much since his death, making him an even more fearsome foe.`
    },
    { //??? - Missing .....
        id: 102391,
        name: `???`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 1,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102390.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102391.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102390.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102391.png`
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
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Relic 'Punish Fireblade' - Complete
        id: 102402,
        name: `Relic 'Punish Fireblade'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102401.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102402.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102401.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102402.png`
            },
        stats:
            {
                hp: 150,
                atk: 150,
                def: 150
            },
        skillset:  
            {
                skill: `50s CT - 3000% Fire DMG (Physical). Reduces Enemy's Fire Resistance by 30% for 15s.`,
                break: 500
            },
        passive: 
            {
                ability1: `Increases ATK gradually for 120s to a MAX of 30% (only once).`
            },
        lore: `Forbidden fire used by the God of the Heavens Marzex, leader of one of the sealed Ten Divine Forces. Representing the fiercest side of this punishing god, this blade is capable of burning even souls to nothing, meaning complete eradication from the world. Gentle enough to aid a lower race such as the humans, when angered the heavens themselves would tremble.`
    }
]

export function getEquips() {
    return EquipInformation;
}

export function getEquipByName(name) {
    return EquipInformation.find(
        equips => equips.name === name
    );
}

