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
    { //Monster Fang Charm - Complete
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
        lore: `A fang charm containing the fighting spirit of a terrible monster. Owning such a charm was once proof of defeating such a beast, while it's soul would also continue to inspire the holder. However, when a monster dies it is completely consumed by other monsters, meaning the holder of such a charm also becomes a target for this cannibalistic custom.`
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
    { //Merfolk Trident - Complete
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
        lore: `A three pronged spear given to members of sea-dwelling merfolk after they prove themselves in a tribal test. This trial is so difficult that some even lose their lives in the attempt. The merfolk use of this trident in both everyday life and in war is a clear indication of their trust in it. Sometimes, it may even mean more to them than their own lives.`
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
    { //Soul Recovery - Complete
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
                skill: `20s CT - 500% DMG (Physical). Heals own HP by 100 every HIT.`,
                break: `150`
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A dagger for assassins proposed by a wizard. The pseudo-soul blade can link with the soul of the wielder when bloodied, allowing them to drain the life-force from the one they cut, meaning even a scratch can lead to death. During the disturbances in Raktehelm spies disguised as barbers used these blades to kill many high ranking personnel.`
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
    { //Dragon Blade - Complete
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
                skill: `20s CT - 1000% Fire DMG (Physical).`,
                break: `300`
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A sword made from the bones of a dragon capable of killing any attacker in a single strike. Any who wield it obtain that same power. However, those without sufficient training will lose their mind to the blade and simply attack anyone they see. Therefore only the most highly trained warriors in both body and mind are allowed to even touch it.`
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
    { //Numbless Ring - Complete
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
                hp: 20,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's Paralyze and HP by 96.`,
                break: ``
            },
        passive: 
            {
                ability1: ``,
                ability2: ``
            },
        lore: `A ring worn by wizards studying paralytics in order to escape their effects. The materials are themselves paralytic and so poorly made examples can have the opposite of the desired effect - in spades! The first example was created by the apothecary Clifford, famous for his personality issues, and so some think that risk was entirely intentional.`
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
    { //Berserker Gloves - Complete
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
                atk: 40,
                def: 0
            },
        skillset:  
            {
                skill: `20s CT - 750% Fire DMG (Physical).`,
                break: `240`
            },
        passive: 
            {
                ability1: ``,
                ability2: ``
            },
        lore: `There was once a mighty human warrior, even hired by the gods for his overwhelming strength. However, he was also excessively violent. Although his end remains a mystery, one theory is that the gods themselves exploited the chaos of battle to kill him. As his gloves drive those who wear them into a frenzy, his spirit is said to linger inside them still.`
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
    { //Enril Scythe - Complete
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
                skill: `20s CT - 825% DMG (Physical).`,
                break: 240
            },
        passive: 
            {
                ability1: ``
            },
        lore: `During the Ancient War, the storm god Enril is said to have wandered the lands as a human. He would join the losing side or fight for those whom he took a liking to, swinging his vast scythe to cut down foes with blades of air. He quickly became known as an ally to the weak, but none of those he fought with ever learned that he was actually a god.`
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
    },
    { //Relic 'Repent Lance' - Complete
        id: 102411,
        name: `Relic 'Repent Lance'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102410.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102411.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102410.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102411.png`
            },
        stats:
            {
                hp: 150,
                atk: 150,
                def: 150
            },
        skillset:  
            {
                skill: `50s CT - 3000% Water DMG (Magic). Reduces Enemy's Water Resistance by 30% for 15s.`,
                break: 500
            },
        passive: 
            {
                ability1: `Increases DEF gradually for 120s to a MAX of 30% (only once).`
            },
        lore: `A divine lance formed from the benevolence of God of the Heavens Marzex, leader of one of the legendary Ten Divine Forces during the Ancient War. He swing it to make foolish sinners repent, ending their current lives but purifying their souls and allowing them to be reborn. Those souls that would not repent, however, vanished into the ether for eternity.`
    },
    { //Relic 'Fallen Bow' - Complete
        id: 102421,
        name: `Relic 'Fallen Bow'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102420.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102421.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102420.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102421.png`
            },
        stats:
            {
                hp: 150,
                atk: 150,
                def: 150
            },
        skillset:  
            {
                skill: `50s CT - 3000% Earth DMG (Magic). Reduces Enemy's Earth Resistance by 30% for 15s.`,
                break: 500
            },
        passive: 
            {
                ability1: `Increases MAX HP gradually for 120s to a MAX of 30% (only once).`
            },
        lore: `The battle bow of God of the Heavens Marzex, leader of one of the Ten Divine Forces that fought alongside the humans against the demons. Uses his powers as the god of judgement to destroy evil. As demons are personified "sin" for him, it offered incredible demon killing power. The bolts it fired were more like modern cannon fire than arrows from a bow.`
    },
    { //Alchemy Tool 'Hastia' - Complete
        id: 102451,
        name: `Alchemy Tool 'Hastia'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102450.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102451.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102450.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102451.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals all Allies' HP by 400. If User is Earth Elemental then Healing x 1.5.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Goggles used by the blacksmith Gilliam as he works. He created them in his youth with the help of an alchemist. Only needing to protect a small area, they offer great performance from a small volume of materials. He named them and his hammer for fire gods from overseas, but a chef friend eventually told him "That one's more like the god of the cook pot".`
    },
    { //Alchemy Tool 'Shurain' - Complete
        id: 102461,
        name: `Alchemy Tool 'Shurain'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102460.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102461.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102460.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102461.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 120
            },
        skillset:  
            {
                skill: `70s CT - Reduces all Allies' DMG Taken by 20% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Boots that journeyed with Giliam around the world in his impassioned youth. Traveling as he did with many heavy tools and materials he burned through footwear pretty fast. A cobbler finally created these for him in thanks for his work adjusting his cobbling tools. Since then a new pair arrive from his friend at regular intervals.`
    },
    { //Gem of Ragsherum's Grudge - Missing Lore
        id: 102471,
        name: `Gem of Ragsherum's Grudge`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102470.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102471.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102470.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102471.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `120s CT - 7000% Non-Elemental DMG (Physical). Summon Gem Blessing: Increases all allies' Arts DMG by 50% for 20s (Only once).`,
                break: 1200
            },
        passive: 
            {
                ability1: `Summon Gem Blessing Lv5: The highest Level effect of the Summon Gem Blessing is effective.`
            },
        lore: ``
    },
    { //Magic Sword 'Geshpenst Type-0' - Complete
        id: 102481,
        name: `Magic Sword 'Geshpenst Type-0'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102480.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102481.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102480.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102481.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `90s CT - Increases all Allies' Arts Gauge by 50.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases DMG to Enemy by 15% during the first 30 seconds of a quest (only once).`
            },
        lore: `The twin sword of Magic Sword 'Geshpenst' which Ragsherum, the divisional commander of the six great Demon Generals, used. This magical sword moved as if it had its own will, thus he left this at battlefields turning it into chaos. It is said that he only used this sword before its twin returned so he could avoid being unarmed. Thus, it hardly was used in battles but those who know the true value of this sword will never speak about it.`
    },
    { //Divine Armor Olgrio - Complete
        id: 102491,
        name: `Divine Armor Olgrio`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102490.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102491.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102490.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102491.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `30s CT - Reduces all Allies' DMG Taken and Light Elemental DMG Taken by 20% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Armor worn long ago by the divine blade Zexia. Serving the gods was her greatest joy, and she wore this armor at all times and worked incredibly hard so as to never purchase their ire. However, when she finally disobeyed divine orders and spared a target, she also cast off this armor in order to draw a clear line from the past.`
    },
    { //Guardian Bow of Providence - Complete
        id: 102501,
        name: `Guardian Bow of Providence`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102500.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102501.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102500.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102501.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `50s CT - 3000% Earth DMG (Physical). Increases all Allies' Evasion Rate by 30% for 12s.`,
                break: 700
            },
        passive: 
            {
                ability1: `Regenerates HP by 8/s.`
            },
        lore: `The bow used by the bow master Ashe Toto to end the "Thaumazein Winter". He unleashed a shot of fury at the "Disaster Witch" who had twisted the providence of nature and frozen the plains. The awakening of his own abilities aided in severing such powerful magic, but it was also the bow itself transforming to aid him that allowed this miracle to take place.`
    },
    { //Eternal Flower Brace - Complete
        id: 102511,
        name: `Eternal Flower Brace`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102510.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102511.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102510.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102511.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - Heal all Allies' HP by 100 for 5s. If user is Earth Elemental then Healing x 2.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A brace worn by bow master Ash Toto, defender of providence. All flowers must eventually wither, but this is purely a function of their place in the greater framework of the cycle of the seasons. This brace reflects this everlasting circle of blooming and fading, bringing countless blessings to the wearer like the coming of new seasons to their heart.`
    },
    { //Transcythe Ilzion - Complete
        id: 102521,
        name: `Transcythe Ilzion`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102520.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102521.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102520.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102521.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 1800% Light DMG (Physical). 50% chance of Paralyzing Enemy.`,
                break: 800
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A weapon made by the legendary blacksmith Rhodia. A master smith, she was also skilled in a dragon martial art, but she rarely used it after taking up her hammer. In her later years, however, after her only pupil has completed their training, she headed to her final battle. Her greatest work, the Transcythe Ilzion, is sharp enough to enthrall even those it cuts.`
    },
    { //Iris' Summer Parasol - Complete
        id: 102571,
        name: `Iris' Summer Parasol`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102570.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102571.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102570.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102571.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 3750% Light DMG (Magic).`,
                break: 800
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A parasol used by Iris on vacation. Her first time at the beach, she knew nothing of the dangers of the sun. Rushing out without protection, the others stopped her and gave her this. Quickly taking to it, she had it close the rest of the time, running along the beach and dashing into the waves. It then shaded her the rest of the time.`
    },
    { //Iris' Bikini - Complete
        id: 102581,
        name: `Iris' Bikini`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102580.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102581.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102580.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102581.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `40s CT - Negates 1000 DMG Dealt to all Allies. Reduces all Allies' DMG Taken by 10% for 8s. If User is Light Elemental then Reduces all Allies' Dark Elemental DMG Taken by 30% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The swimwear purchased by the young girl Iris for her first dip in the sea. She was aided by Mira of Bamint, Sophie of the Firecat's Den, and the Priestess Liese, while the unthinking adventurer Rayas got a slap when he tried to come along. On the day she finally wore it, however, she was the one embarrassing Rayas by continually asking how she looked.`
    },
    { //Iris' Beach Sandals - Complete
        id: 102591,
        name: `Iris' Beach Sandals`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102590.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102591.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102590.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102591.png`
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
        lore: `Sandals gifted to the young girl Iris by Mira of Bamint, to allow her to play freely on the beach. To start with she didn't even want to get them dirty, but Mira just watched with a smile, knowing she would wear them as soon as she touched the hot sand. After arriving at the beach, however, the only thing Mira learned was how hardy Iris' feet are.`
    },
    { //Liese' Naval Hat - Complete
        id: 102601,
        name: `Liese' Naval Hat`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102600.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102601.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102600.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102601.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 3050% Light DMG (Magic).`,
                break: 1500
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A hat used to defend the head of Priestess Liese of Reigrad from the summer sun. Holy priestess or not, as a 13 year old girl she hasn't given up on having some beach fun, and her god would surely not deny her some innocent frolicking. Her safety is the highest priority, however, and she can only enjoy the height of summer once completely protected.`
    },
    { //Liese' Naval Swimsuit - Complete
        id: 102611,
        name: `Liese' Naval Swimsuit`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102610.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102611.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102610.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102611.png`
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
        lore: `A swimsuit selected by the 13 year old Priestess Liese, in the hope of a memorable summer. Normally having to wear heavy robes, putting this on marked both the start of a brief vacation and her chance to spend some time as a normal girl. Even for her first visit to the beach, she wanted something as cute as possible, and gave her all to this selection.`
    },
    { //Liese' Lifesaver - Complete
        id: 102621,
        name: `Liese' Lifesaver`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102620.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102621.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102620.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102621.png`
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
        lore: `A float used by Priestess Liese of Reigrad when she made her debut on the beach. Plucking up all her courage, this was her first time in the sea. Without even knowing if she could swim, this rubber ring put her 13 year old heart at ease. She had to enjoy this chance, no matter what. A full day of play, and then ice cream for dessert! Her summer starts here!`
    },
    { //Floating Mikyuon - Complete
        id: 102631,
        name: `Floating Mikyuon`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102630.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102631.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102630.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102631.png`
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
        lore: `The most popular beach item in Reigrad this summer. Gentle or not, Mikyuon is still a monster. For all the regular people who simply lack the strength to hug the real thing, this beauty provides their chance. It's even 1/1 scale! Hug it, ride it, enjoy it however you like. Just don't mistake the real thing wandering onto the beach for one of these.`
    },
    { //Liese' Secret Adventure - Complete
        id: 102641,
        name: `Liese' Secret Adventure`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102640.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102641.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102640.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102641.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 7500% Light DMG (Magic). 80% chance of inflicting Paralysis to enemy.`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The highly respected Priestess Liese of Reigrad snuck this swimwear into her luggage. Although she has position and ability, she's still so young. If only she could grow up faster! Unable to wear it on front of others, she just looks at herself in the mirror. Even an all seeing god surely doesn't watch girls changing. A summer secret, then, just for her.`
    },
    { //Mira's Disguise Glasses - Complete
        id: 102651,
        name: `Mira's Disguise Glasses`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102650.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102651.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102650.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102651.png`
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
        lore: `The eyewear used by Mira, third princess of the Principality of Bamint, to both protect her eyes from harmful rays and disguise her prominent features. In her high-ranking position, being recognized offers zero advantages, making these glasses vital to enjoying a true vacation. Of course, they are unable to hide her overwhelming aura.`
    },
    { //Mira's Halter Neck - Complete
        id: 102661,
        name: `Mira's Halter Neck`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102660.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102661.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102660.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102661.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 5300% Fire DMG (Physical).`,
                break: 3500
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A swimsuit worn by Mira, the Rose Garden knight, after casting off her heavy armor. Highlighting her figure in provocative ways, it catches the gaze of men all along the beach and would make her older sister, the first princess, faint completely. She isn't wearing it for anyone in particular, but she may be caught casting glances at men she once adventured with.`
    },
    { //Mira's Summer Float - Complete
        id: 102671,
        name: `Mira's Summer Float`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102670.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102671.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102670.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102671.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals Target's HP by 1500. If User is Fire Elemental then Healing x 1.5.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The third princess of the Principality of Bamint cannot be seen having fun at the beach. Use of an order-made float is tradition. On a secret vacation, however, there is no need to play the noble, and no need to hide her assets. This float design shows no desire to remain hidden, but she loves it so much as to push past the concerns of her friends.`
    },
    { //Mira's Summer Sandals - Complete
        id: 102681,
        name: `Mira's Summer Sandals`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102680.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102681.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102680.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102681.png`
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
        lore: `Sandals to protect the feet of Mira, third princess of the Principality of Bamint, from sun-warmed sand. Not really suited to walking on the beach, they are designed only to accentuate her legs. She definitely won't be playing in the waves with a special someone, certainly not! Meanwhile, her male friends are left hoping she doesn't fall and break something.`
    },
    { //Rayas' Straw Hat - Complete
        id: 102691,
        name: `Rayas' Straw Hat`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102690.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102691.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102690.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102691.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 120
            },
        skillset:  
            {
                skill: `5s CT - Negates 150 Dark Elemental DMG Dealt to all Allies' for 5s (only once).`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A straw hat that the adventurer Rayas purchased to wear at the beach. "This is the only thing for summer!" he laughed with Iris, while Ganan of the Adventurer's Guild and other adults around him looked on somewhat bemused (which went completely unnoticed by Rayas). Upon reaching the beach, the way he used the hat as a makeshift throwing disk only bemused them further.`
    },
    { //Rayas' Summer Pants - Complete
        id: 102701,
        name: `Rayas' Summer Pants`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102700.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102701.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102700.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102701.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 6250% Light DMG (Physical). Reduces enemy's Light resistance by 30% for 15s.`,
                break: 1200
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A swimsuit that the adventurer Rayas prepared for swimming in the sea. While he carefully selected both the design and the colors, Ganan of the Adventurer's Guild and other adults around him consider it "supremely childish". Mira of Bamint warned him that "Those ties better never come loose!", while Iris simply said "It suits Rayas perfectly."`
    },
    { //Rayas' Beach Sandals - Complete
        id: 102711,
        name: `Rayas' Beach Sandals`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102710.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102711.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102710.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102711.png`
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
        lore: `The sandals selected by the adventurer Rayas in order to run along the summer sands at full speed. They easily slip on and off, even allowing for such games as launching them into the sea. Of course, in respect to the looks he would get from the adults around him, he would never do that. He still looks like a child just running around wildly, anyway.`
    },
    { //Roy's Swimwear - Complete
        id: 102721,
        name: `Roy's Swimwear`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102720.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102721.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102720.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102721.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `70s CT - Heals all Allies' HP by 2000.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The swimwear worn by Roy, Captain of the Isliid Empire Fenrir Knights. Still partly on duty even at the beach, he chose this functional design in case any lifesaving was required of him. His friend Rayas was jealous of its striking design and motif showing off his pride as a knight, while Roy had to stifle laughter when he saw the outfit Rayas selected.`
    },
    { //Roy's Blue Water Dragon - Complete
        id: 102731,
        name: `Roy's Blue Water Dragon`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102730.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102731.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102730.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102731.png`
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
        lore: `A beach ball selected by Roy, Captain of the Isliid Empire Fenrir knights, for training at the beach. What may look like a game is actually serious exercise once adults get involved, with the serves and spikes launched by trained knights turning the beach into a battlefield. Yet this is still intended as a vacation; the losers treat the winners to ice cream.`
    },
    { //Ganan's Burning Soul - Complete
        id: 102741,
        name: `Ganan's Burning Soul`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102740.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102741.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102740.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102741.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 5850% Fire DMG (Physical). Increases all Allies' DEF by 20% for 20s.`,
                break: 1000
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Ganan, Guild Master of the Reigrad Branch of the Adventurer's Guild, getting serious about summer wear. He shows off his forge-sculpted body to an excessive degree, overwhelming all on the beach. As a result, many new members throng to join the guild during the summer months, making this unlikely seaside promotion more effective than one might initially think.`
    },
    { //Ganan's Wooden Sandals - Complete
        id: 102751,
        name: `Ganan's Wooden Sandals`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102750.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102751.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102750.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102751.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 60
            },
        skillset:  
            {
                skill: `30s CT - Reduces all Allies' DMG Taken by 15% and Fire Elemental DMG Taken by 30% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Wooden sandals worn by Guild Master Ganan when he trains new summertime recruits. His summer training school is known for being exceptionally tough, but those who make t through end up with a physique of steel. This also attracts many keeping to get in shape for some summer fun. Many say that, just like the sun, summer is when Ganan shines the brightest.`
    },
    { //Est's Vacation - Complete
        id: 102761,
        name: `Est's Vacation`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102760.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102761.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102760.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102761.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 3750% Water DMG (Physical).`,
                break: 800
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A straw hat used by the Reigrad Arena receptionist Est to protect herself from the sun. She cuts a true figure of a lady as she walks on the beach, holding her hat on head with one hand and with a sparkling smile on her lips. While a gaggle of men follow behind her, those who actually know her can only mutter about such foolish recklessness.`
    },
    { //Est's Mild Fever - Complete
        id: 102771,
        name: `Est's Mild Fever`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102770.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102771.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102770.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102771.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - 7500% Water DMG (Physical). Increases own DMG by 30% for 5s during Break.`,
                break: 100
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The swimwear selected by Est, the idol of all who visit the Arena. Subtly hiding the curves of her chiseled body, it depicts a calm and elegant presence. Keeping her wraparound skirt in check and walking daintily across the sand, when her father asked her "Why didn't you pick something easier to swim in?" he was rewarded with a nasty body blow.`
    },
    { //Est's Warmth - Complete
        id: 102781,
        name: `Est's Warmth`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102780.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102781.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102780.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102781.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 1000% Water DMG (Physical). 30% chance of Freezing Enemy.`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Est, the face of the Arena where she works as the receptionist, must remain elegant at all times. This is no different even on the exciting summer beach. Of course, she chooses her shoes to coordinate with her outfit, but she also selects ones that are harder to walk in on purpose. This will stop her wanting to run off into the sunset like she did as a child.`
    },
    { //Melia's Allure - Complete
        id: 102791,
        name: `Melia's Allure`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102790.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102791.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102790.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102791.png`
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
        lore: `The sunglasses used by the high-ranking Magus Empire Captain Melia, supposedly to hide her identity but really just making her stand out all the more. Feared as the "Blue-eyed Black fox", a top-class spy, here she chooses to hide nothing. Add in the third princess of Bamint and they are sure to turn some heads, but maybe that's just what she wants.`
    },
    { //Melia's Bewitchment - Complete
        id: 102801,
        name: `Melia's Bewitchment`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102800.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102801.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102800.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102801.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - Increases Arts Gauge by 20 for each Enemy Unit hit.`,
                break: 800
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The swimwear selected by the spy-among-spies, the "Blue-eyed Black Fox" Melia, for this summer. A firm believer in hiding nothing in the ocean, she attracts attention from across the beach and delights in toying with the hearts of men. What she likes more than anything is to mock her male friends after they've been swimming around after her all day.`
    },
    { //Melia's Lust - Complete
        id: 102811,
        name: `Melia's Lust`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102810.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102811.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102810.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102811.png`
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
        lore: `Melia, skilled at disguising herself for missions in enemy territory, selected these sandals for the beach using all of her clothing knowledge. With a heel height to accentuate her legs, a sensual design to compliment her swimwear, and even considering how she looks from behind while walking in them, all Rayas had to say was "Melia, you look beautiful!"`
    },
    { //Rem's Glamour - Complete
        id: 102821,
        name: `Rem's Glamour`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102820.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102821.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102820.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102821.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `60s CT - 100% Non-Elemental DMG (Magic). Increases Enemies' Weakness Elemental DMG by 20% for 10s.`,
                break: 250
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The swimwear worn by the Reigrad alchemist Rem. Rarely showing her face normally, she caused quite a stir among her friends by suddenly appearing in this. The men could barely speak, the women were shocked at this unexpected rival, and Rayas just happily said "Rem's here!" When Melia who was disappointed that she chose the same color swimwear, asked why she chose this, Rem simply replied "It's just what I ended up making".`
    },
    { //Wind Chime Rolly - Complete
        id: 102831,
        name: `Wind Chime Rolly`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102830.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102831.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102830.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102831.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 60
            },
        skillset:  
            {
                skill: `30s CT - 	Reduces all Allies' DMG Taken by 5% and Dark Elemental DMG Taken by 10% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A wind chime shaped like Rolly that helps you forget the heat of the summer. The young girl Iris was having trouble sleeping in the summer heat. Dashing around to try and help her, the adventurer Rayas eventually got the blacksmith Giliam to make these chimes. Iris immediately hung them in her room and slept like a log from that night onward.`
    },
    { //Chicken Water Gun - Complete
        id: 102841,
        name: `Chicken Water Gun`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102840.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102841.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102840.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102841.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 2000% Dark DMG (Magic). 30% chance of Blinding Enemy.`,
                break: 500
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is a popular item among all kids on the beach this summer. Sold using the catchphrase "The Water Pistol Experience", they have incited many raging water battles. Not to be underestimated, they offer water pressure and range far greater than regular toys. When the adventurer Rayas purchased one to test it out, he was soon embroiled in a major water fight.`
    },
    { //Firecat's Passion - Complete
        id: 102851,
        name: `Firecat's Passion`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102850.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102851.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102850.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102851.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 1000% Fire DMG (Physical). 30% chance of Burning enemy.`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Dining at the seaside is all about hotplate cooking. Sophie, the head chef of the popular Reigrad establishment "The Firecat's Den," knows this all too well. Seeing her sweating in the sun as she fries up some noodles has become a summer tradition, and she always attracts an impressive queue of young suitors. The special mushroom topping comes especially recommended.`
    },
    { //Sophie's Gluttony - Complete
        id: 102861,
        name: `Sophie's Gluttony`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102860.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102861.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102860.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102861.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `65s CT - Increases all Allies' Break Power by 50% for 6s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The swimwear worn by head chef Sophie from the Reigrad restaurant called the Firecat's Den. "All I need is to be able to swim in it!" she explained, but was then seen glancing at the swimwear worn by the other girls. Perhaps she also has to take working at her summer job into account? When Rayas said "It suits you perfectly!" he got a spatula in the face.`
    },
    { //Summer Firecat's Den - Complete
        id: 102871,
        name: `Summer Firecat's Den`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102870.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102871.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102870.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102871.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `30s CT - Heals all Allies' HP by 300. Heals all Allies' Poison and Burn.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `An apron worn by head Sophie at her summer spinoff restaurant, the Seacat's Den. While she uses it to get into cooking mode, she also secretly wants to use it to protect her swimwear. Her companions were concerned at the impression created by wearing an apron over a swimsuit, but with so many customers she hasn't had much time to think about it.`
    },
    { //Gilliam - Man of the Sea - Complete
        id: 102881,
        name: `Gilliam - Man of the Sea`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102880.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102881.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102880.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102881.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 120
            },
        skillset:  
            {
                skill: `30s CT - Negates 400 DMG Dealt to all Allies' for 8s. Reduces all Allies' Earth Elemental DMG Taken by 35% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The goggles worn by the Reigrad blacksmith Giliam to conquer the seas. Unlike forging goggles, these are designed to be completely waterproof. "The rolling sea! Every man's true love!" After jumping in and starting to swim, he eventually returned at sunset to wax lyrical for far too long about how his goggles never once let in a drop of water.`
    },
    { //Gilliam's Guts - Complete
        id: 102891,
        name: `Gilliam's Guts`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102890.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102891.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102890.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102891.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `90s CT - Heals all Allies' HP by 2500. Heals all Allies' Status Ailments except for Faint and Disease.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The tightly fitted loincloth of Reigrad blacksmith Giliam. He stands, arms crossed, on the shore with another strong looking guy at his side. "I'll destroy you this year, Ganan!" "Hahaha, you can't beat me, Giliam!" Their goal? The flag standing on a distant dune. Drinks and food at the Seacat's Den are staked on the outcome of this annual battle!`
    },
    { //Toy Sword 'Charlotte' - Complete
        id: 102901,
        name: `Toy Sword 'Charlotte'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102900.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102901.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102900.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102901.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `5s CT - 1700% Light DMG (Physical). 30% chance of reducing enemy's DEF by 10% for 10s.`,
                break: 300
            },
        passive: 
            {
                ability1: `DMG to Demons 20% UP.`
            },
        lore: `The only sword aged general Zeorg will use other than the Ryude Magus. It looks unsuited to such a hero because it was made as a special order based on a toy he gave to his granddaughter, after who it is also named. He claimed it was just for decoration, but gave the blacksmith detailed instructions and ended up with a sword better than most blades.`
    },
    { //Holy Cape 'Hero's Triumph' - Complete
        id: 102911,
        name: `Holy Cape 'Hero's Triumph'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102910.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102911.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102910.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102911.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `40s CT - Increases all Allies' Evasion Rate by 15% for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: `DMG to Gods 20% UP.`
            },
        lore: `When the hero Zeorg was young, he received this cape for defeating an evil dragon. Wearing it upon his return to the capital after fighting more monsters or a major battle became one of his duties, bringing reassurance to the hearts of the people, but he never had time to wear it for anything else. It is still known as the trademark of this great hero.`
    },
    { //The Legend of Ganan - Complete
        id: 102921,
        name: `The Legend of Ganan`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102920.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102921.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102920.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102921.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 6500% Fire DMG (Physical). Increases own Break Power by 30% for 9s.`,
                break: 2200
            },
        passive: 
            {
                ability1: `Negates Paralysis, Freeze & will not Flinch.`
            },
        lore: `The Guidlmaster's final form! Headmaster of summer school at the Adventurer's Guild Reigrad branch. Seeing this, every aspiring adventurer finds their resolve tested. "And so begins hell!" he calls, and trainees drop one after another under his harsh tutelage. But every year, as his pupils are ready to break, he offers them his wisdom. "Stand up! Believe in yourself! Your body will never betray you!" Surely, this year will see the birth of a new legend...`
    },
    { //Ryude Magus (Versus) - Complete
        id: 102951,
        name: `Ryude Magus (Versus)`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102950.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102951.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102950.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102951.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `60s CT - 3600% Light DMG (Physical). Increases all allies' Arts gauge by 20.`,
                break: 700
            },
        passive: 
            {
                ability1: `Increases all allies' CRI rate by 20% during Break.`
            },
        lore: `The sword hidden in the shadows of the legend "the Warrior and the Blade" in Raktehelm. When pulling out the sword, Ryude Magus from the stomach of a magical dragon, there was another shining sword. By swallowing strong weapons, this dragon increased its own powers. However, when it swallowed the Ryude Magus, it reacted with its magical powers inside its body and created another sword. This sword has been kept as a secret even up to now...`
    },
    { //Super Shinobi Bee (超必殺忍蜂) - Complete (JP)
        id: 102961,
        name: `Super Shinobi Bee (超必殺忍蜂)`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102960.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102961.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102960.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102961.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `100s CT - 2500% DMG (Physical). Increases all Allies' DMG and Break Power by 20% for 5s.`,
                break: 800
            },
        passive: 
            {
                ability1: `Increase Skill CT Speed and Evasion rate by 5%.`
            },
        lore: `Currently unreleased in Global.`
    },
    { //Phoenix Dance (鳳凰の舞) - Complete (JP)
        id: 102971,
        name: `Phoenix Dance (鳳凰の舞)`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102970.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102971.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102970.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102971.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `65s CT - 1000% DMG (Physical). Increases all Allies' DMG by 20% for 8s.`,
                break: 400
            },
        passive: 
            {
                ability1: `Increase Skill CT Speed and Evasion rate by 5%.`
            },
        lore: `Currently unreleased in Global.`
    },
    { //Dragon Flame Dance (龍炎舞) - Complete (JP)
        id: 102981,
        name: `Dragon Flame Dance (龍炎舞)`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102980.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102981.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102980.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102981.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `30s CT - 800% DMG (MAG). Increases all Allies' Break Power by 8% for 10s.`,
                break: 300
            },
        passive: 
            {
                ability1: `Increase Skill CT Speed and Evasion rate by 5%.`
            },
        lore: `Currently unreleased in Global.`
    },
    { //Ura Hundred Eight Styles・Ojanagi (裏百八式・大蛇薙) - Complete (JP)
        id: 102991,
        name: `Ura Hundred Eight Styles・Ojanagi (裏百八式・大蛇薙)`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_102990.png`,
                detailmax: `/db/Equipment/Detail/item_detail_102991.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_102990.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_102991.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `100s CT - 4800% DMG (Physical). 80% chance to inflict Burn on enemies.`,
                break: 2000
            },
        passive: 
            {
                ability1: `Increase DEF and CRI rate by 5%.`
            },
        lore: `Currently unreleased in Global.`
    },
    { //900-Style・Nue Picking (九百拾式・鵺摘み) - Complete (JP)
        id: 103001,
        name: `900-Style・Nue Picking (九百拾式・鵺摘み)`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103000.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103001.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103000.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103001.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 2000% DMG (Physical). 50% chance to inflict Burn on enemies.`,
                break: 1300
            },
        passive: 
            {
                ability1: `Increase DEF and CRI rate by 5%.`
            },
        lore: `Currently unreleased in Global.`
    },
    { //104-Style・Rough Biting (百拾四式・荒咬み) - Complete (JP)
        id: 103011,
        name: `104-Style・Rough Biting (百拾四式・荒咬み)`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103010.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103011.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103010.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103011.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `30s CT - 800% DMG (Physical). 30% chance to inflict Burn on enemies.`,
                break: 800
            },
        passive: 
            {
                ability1: `Increase DEF and CRI rate by 5%.`
            },
        lore: `Currently unreleased in Global.`
    },
    { //1,000,200,110 Girls (禁千弐百拾壱式・八稚女) - Complete (JP)
        id: 103021,
        name: `1,000,200,110 Girls (禁千弐百拾壱式・八稚女)`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103020.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103021.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103020.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103021.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `100s CT - 6300% DMG (Magic). 60% chance to inflict Blind on enemies.`,
                break: 600
            },
        passive: 
            {
                ability1: `Increase ATK and CRI DMG by 5%.`
            },
        lore: `Currently unreleasd in Global.`
    },
    { //Hyakushiki・Oniyaki (百式・鬼焼き) - Complete (JP)
        id: 103031,
        name: `Hyakushiki・Oniyaki (百式・鬼焼き)`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103030.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103031.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103030.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103031.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 2500% DMG (Magic). 40% chance to inflict Blind on enemies.`,
                break: 500
            },
        passive: 
            {
                ability1: `Increase ATK and CRI DMG by 5%.`
            },
        lore: `Currently unreleasd in Global.`
    },
    { //Type 108・Yamiharai (百八式・闇払い) - Complete (JP)
        id: 103041,
        name: `Type 108・Yamiharai (百八式・闇払い)`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103040.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103041.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103040.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103041.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:
            {
                skill: `30s CT - 1500% DMG (Magic). 20% chance to inflict Blind on enemies.`,
                break: 300
            },
        passive: 
            {
                ability1: `Increase ATK and CRI DMG by 5%.`
            },
        lore: `Currently unreleasd in Global.`
    },
    { //Grad's Devil Summer - Complete
        id: 103051,
        name: `Grad's Devil Summer`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103050.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103051.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103050.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103051.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `80s CT - 6666% Dark DMG (Physical). Increases all allies' CRI rate by 50% for 3s.`,
                break: 1500
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The demon leader Grad, revived from his sealing during the Ancient War, selected this swimwear in order to blend in on the human-infested beach. His muscular, beautiful body attracted plenty of attention, starting to feed his sense of superiority. All he needed was Nier to attract even more eyes, but upon asking her she only said "With you? Never."`
    },
    { //G.R.A.D Harpoon - Complete
        id: 103061,
        name: `G.R.A.D Harpoon`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103060.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103061.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103060.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103061.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - 3000% Dark DMG (Physical). 50% chance of Blinding enemy.`,
                break: 1000
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A weapon selected by the Sin Emperor's elite guard, Grad, to attack his hated rival during a trip to the beach. Unaware of being watched, his target was celebrating having finally caught a single fish. With a confident laugh, Grad set out to do better, and moments later the demons in his retinue were faced with a veritable mountain of fresh fish.`
    },
    { //Snorkel of Darkness - Complete
        id: 103071,
        name: `Snorkel of Darkness`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103070.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103071.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103070.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103071.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 1900% Dark DMG (Magic). Heals Own HP by 120 for each Enemy Unit hit.`,
                break: 900
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The equipment prepared by Grad in order to get close to his hated rival during a beach vacation. Those sharp eyes weren't focused on his rival, however, but the fish swimming around them. "I'll show you how to fish!" His harpoon flashed and, while extremely happy with his fishing trip, he completely forgot the reason he was originally there.`
    },
    { //Nier's Greed - Complete
        id: 103081,
        name: `Nier's Greed`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103080.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103081.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103080.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103081.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `70s CT - 6160% Dark DMG (Magic). 80% chance of Poisoning enemy.`,
                break: 1000
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The swimwear selected by the revived demon leader Nier to blend in among humans on the beach. Choosing one overlapping with the swimwear of her targets, she aimed to maximize her voluptuous figure to exert her dominance over them. When Grad asked her "What if it comes untied?" she only replied "Then it will be easier to oil up." While looking at the adventurer with a smile.`
    },
    { //Temptation Sunscreen - Complete
        id: 103091,
        name: `Temptation Sunscreen`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103090.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103091.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103090.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103091.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 2000% Dark DMG (Magic). Reduces Enemy's Poison & Burn Resistance by 30% for 15s.`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The tool selected by the conniving Demon, Nier, to get close to her desired target. A certain adventurer was watching the waves when a red-haired woman approached him. "Would you oil me up?" she breathed into his ear. Checking to be sure she meant him, he then followed her away behind some rocks... at least, this is what she is planning.`
    },
    { //Nier's Summer Flower - Complete
        id: 103101,
        name: `Nier's Summer Flower`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103100.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103101.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103100.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103101.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `50s CT - Increases all Allies' Poison, Paralyze, and Burn Resistance by 20% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The cruel and violent demon Nier selected this flower to decorate her blood-red hair. Alongside her provocative summer swimwear, she looks like nothing less than a brilliant, primary tropical flower. Looking too hot to touch, she stood watching an adventurer and a girl in a white swimsuit having fun in the distance: a swimsuit that would never suit her, of course.`
    },
    { //True 'Regracia' - Complete
        id: 103111,
        name: `True 'Regracia'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103110.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103111.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103110.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103111.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 6600% Light DMG (Physical).`,
                break: 1600
            },
        passive: 
            {
                ability1: `When Equipped by Rayas, increases own DMG by 20% (only once).`,
                ability2: `Increases all Allies' ATK by 15% (only once).`
            },
        lore: `A sword that waited, forgotten in a rock deep in a cave. After removing it, Rayas became an adventurer, learnt to summon, and started to get close to the truth of the world. Was this all just a coincidence, or was it fate? In either case, as the sword grows more powerful alongside him, he has started to sense the larger purpose in his owning it.`
    },
    { //True 'Gaimalse' - Missing .....
        id: 103121,
        name: `True 'Gaimalse'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103120.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103121.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103120.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103121.png`
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
                ability1: `When equipped by Roy. Own DMG 20% UP (only once).`,
                ability2: `Own DMG 10% UP when Near-Death.`
            },
        lore: ``
    },
    { //True 'Raaz' - Complete
        id: 103131,
        name: `True 'Raaz'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103130.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103131.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103130.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103131.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `50s CT - `,
                break: 0
            },
        passive: 
            {
                ability1: `When Equipped by Iris, increases own Evasion Rate by 50% (only once).`,
                ability2: `Increases Own Status Ailment (not Faint) Time Reduction and Evasion Rate by 30%.`
            },
        lore: `A circlet likely created by the gods. The reason Iris owns it is still unknown, and she didn't like it much herself at first. She has realized that its strange power is also protecting her, however, and now happily keeps it with her - without yet realizing that her positive desire to keep pace with a certain adventurer has unlocked new power within it.`
    },
    { //True 'Noble Bamint' - Missing .....
        id: 103141,
        name: `True 'Noble Bamint'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103140.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103141.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103140.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103141.png`
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
    { //True 'Rig Arcela' - Complete
        id: 103151,
        name: `True 'Rig Arcela'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103150.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103151.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103150.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103151.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - Heals all Allies' HP by 1200. Heals all Allies' Status Ailments except for Faint and Disease.`,
                break: 0
            },
        passive: 
            {
                ability1: `When Equipped by Liese, increases own DMG by 20% (only once).`,
                ability2: `Increases Healing performed by yourself by 10% (excludes absorbed ATK).`
            },
        lore: `A holy book carried around by Priestess Liese, explaining the teachings of the god of light. It also represents her bond with her parents, who gave it to her when she was four. She has already memorized it all, but she still opens it to read from often. Her feelings toward the text has given the very pages power, and as she grows so too does its strength.`
    },
    { //Beloved Specs 'Pronimos' - Complete
        id: 103161,
        name: `Beloved Specs 'Pronimos'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103160.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103161.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103160.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103161.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `5s CT - Mode Changes: Increases all Allies' Arts Gauge by 1 for 15s OR all Allies' Equipment CT by 10% for 15s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases All Allies' Accuracy by 30% (only once).`
            },
        lore: `Glasses worn by Fen of the Gramenia Republic, known for his trademark cool and collected nature. The rumors that they allow him to read minds or see through lies more reflect his incredible powers of observation than any semblance of the truth. He never denies such talk, however, and at least one adventurer he has traveled with still believes all of it.`
    },
    { //Ru Doll - Complete
        id: 103171,
        name: `Ru Doll`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103170.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103171.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103170.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103171.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `35s CT - Increases Target's Arts Gauge by 20. Increases Target's Equipment CT by 10% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Skill CT Speed by 10%.`
            },
        lore: `A doll said to be found in the private rooms of nihilistic Head of General Staff Fen. Based in close detail on a particular Paw Person, it should be noted here specifically that Fen most certainly does not have a hidden love of all things cute and charming. If you want to know what he uses it for, you'll have to pluck up the courage to ask him yourself.`
    },
    { //Divination Cards Devan - Complete
        id: 103221,
        name: `Divination Cards Devan`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103220.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103221.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103220.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103221.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `75s CT - 7000% Water DMG (Magic).`,
                break: 1200
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Talismans of Divination used by the former sorcerer of La Riiz, Quon. The keys to powerful rites Quon wove himself, the powerful magic inside allows them to dance in the air like living things. With their movement totally unrestricted, they can cut like the sharpest knife or become and impenetrable shield at his whim. Though this may appear far from their original use, at the same time he can use them to read his opponents' future and thus create unbeatable battle strategies.`
    },
    { //Vestment Regal Mantle - Complete
        id: 103231,
        name: `Vestment Regal Mantle`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103230.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103231.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103230.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103231.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `60s CT - Reduces all Allies' DMG Taken by 20% for 10s. All Allies Evade Burn effect for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The secluded sorcerer of La Riiz Quon has donned this mantle as he rises once again. Once his uniform of duty, now it tells of his true elevated rank. He once threw away his status and power to refute the Church which had broken his soul. However, now that he has resolved to to face the Ancient Dragon, he resumed this mantle. Imbued with the puissant techniques of La Riiz, it elevates its wearer's power to their ultimate limits.`
    },
    { //Reward La Riizilian - Complete
        id: 103241,
        name: `Reward La Riizilian`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103240.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103241.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103240.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103241.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals all Allies' HP by 500. If User is Water Elemental then Healing x 1.5.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The secluded sorcerer Quon bears this pendant again to rewrite his past. Once his symbol as an official of the Magus Empire of La Riiz, he threw it away in despair. Yet now he has chosen to resume his former status to serve the forest. Although he could not escape his past, perhaps this trial is needed to awaken his true hidden self, as he faces up the choice of throwing away that which was most important.`
    },
    { //Star-Spangled Liese - Complete
        id: 103251,
        name: `Star-Spangled Liese`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103250.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103251.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103250.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103251.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 3500% Light DMG (Magic). 80% chance of Paralyzing enemy. Heals all allies' HP by 800.`,
                break: 800
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Liese caused quite a commotion at the beach near Reigrad when she wore this swimsuit. Her companions were speechless at the sight. The cook was over come with motherly concern, worrying where Liese's upbringing had gone wrong. The Guildmaster and Blacksmith just grinned! The noblewoman threw her a towel, the receptionist averted her eyes, and the sorceress smiled. The Knight Captain and the adventurer trembled, and as the alchemist prepared a different swimsuit, young Iris laughed. "I picked it out for her."`
    },
    { //Iris' Change of Pace - Complete
        id: 103261,
        name: `Iris' Change of Pace`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103260.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103261.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103260.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103261.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `55s CT - Reduces all Allies' DMG Taken by 15% for 12s. Increases all Allies' Stats by 30% for 12s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The adventurer Rayas was looking for for Iris. She was right beside him, but suddenly vanished. Just when he was getting anxious... Iris reappears, led by the noblewoman and sorceress, wearing a new swimsuit. It appears she had more than one ready to go! Rayas cried out, unthinking. "I'm so glad you're OK! I looked everywhere for you." Earning him a thorough talking-to from the other two women.`
    },
    { //The Legend of Ganan - Complete
        id: 103271,
        name: `The Legend of Ganan`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103270.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103271.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103270.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103271.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 6500% Fire DMG (Physical). Increases own Break Power by 30% for 9s.`,
                break: 2200
            },
        passive: 
            {
                ability1: `Negates Paralysis, Freeze & will not Flinch.`
            },
        lore: `The Guidlmaster's final form! Headmaster of summer school at the Adventurer's Guild Reigrad branch. Seeing this, every aspiring adventurer finds their resolve tested. "And so begins hell!" he calls, and trainees drop one after another under his harsh tutelage. But every year, as his pupils are ready to break, he offers them his wisdom. "Stand up! Believe in yourself! Your body will never betray you!" Surely, this year will see the birth of a new legend...`
    },
    { //Demon Whip 'Basilisk' - Missing .....
        id: 103281,
        name: `Demon Whip 'Basilisk'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103280.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103281.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103280.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103281.png`
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
    { //Demon Gear 'Kalkinion' - Missing Lore
        id: 103291,
        name: `Demon Gear 'Kalkinion'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103290.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103291.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103290.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103291.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 6200% Dark DMG (Magic). If User is Dark Elemental, drains 5% HP.`,
                break: 1200
            },
        passive: 
            {
                ability1: `Ignores Enemies' DEF by 15%.`
            },
        lore: ``
    },
    { //Demon Armor 'Episumia' - Complete
        id: 103301,
        name: `Demon Armor 'Episumia'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103300.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103301.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103300.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103301.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - Increases Target's MAX HP by 1800 for 15s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Ignores Enemies' DEF by 15%.`
            },
        lore: `The Demon Armor that protects Nier who is an executive of the Demons who revived at the Sealed Fortress Gormarey. Being an extreme sadist, she feels pleasure in fights and gets excited. Her body temperature rises sharply, so she wished for an armor with high heat dissipation. As for an armor it shows her skin too much, thus Grad made fun of it, but she just said it makes her "excited".`
    },
    { //Twin Hammers Orthros - Complete
        id: 103311,
        name: `Twin Hammers Orthros`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103310.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103311.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103310.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103311.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `100s CT - 1500% Earth DMG (Physical). Absorbs Enemies' Arts gauge by 60% when attack hits.`,
                break: 100
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The twin hammers that represent Catilou, the strongest bandit, during the first period of the Ancient War. Having a lot of followers, thousands of rare items and mystery items were gathered for her. Among the collection she favored the mysterious twin hammers that were decorated with bones of a two-headed magical monster the most. She only thought of these as a topic for a good chat, but people were terrified of the overwhelming powers, thus rumors said that powers were drawn out from the magical monster's soul inside the bones.`
    },
    { //Giant Zolda Helmet - Complete
        id: 103321,
        name: `Giant Zolda Helmet`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103320.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103321.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103320.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103321.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 60
            },
        skillset:  
            {
                skill: `30s CT - Negates 600 DMG Dealt to Target for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The helmet that represents Zoldes, a famous brave warrior of Giants during the first period of the Ancient War. One after another, warriors ran away once they saw his figure, so there were times that battles did not even start. thus, his helmet is always shining without any scratches which showed off his majesty in battles. However, it seems that he was pretty unhappy that there were few chances to show off the true powers of the helmet made out of the best material.`
    },
    { //Crimson Hammer Zoldavalcan - Complete
        id: 103331,
        name: `Crimson Hammer Zoldavalcan`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103330.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103331.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103330.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103331.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `70s CT - 5800% Fire DMG (Physical). If User is Fire Elemental, increases Critical Rate by 50% for 4s.`,
                break: 2400
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The hammer that Zoldes, a famous brave warrior of Giants that people feared, used during the first period of the Ancient War. No matter how many times he used his hammer with his endless powers, it never broke. Both his helmet and hammer were made by a nameless blacksmith, so the two were named after Zoldes. But he did not like to be the only one praised. "This victory came not from my powers, it came from this helmet and this hammer."`
    },
    { //Flower Cane Irurose - Complete
        id: 103341,
        name: `Flower Cane Irurose`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103340.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103341.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103340.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103341.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals all Allies' HP by 20%.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is the rod used by Pola, the "Witch of Funereal Bloom", part of the "Grimm Stella" covenant. The force of life inside it is enough to fill the whole area with rose ivy and flowers every time it is shaken, but as described by her name, Pola never used its powers for saving people but only to carry death. It's not well known, but it seems that the the reason why she could cast a spell in such short words, which is the reason why she became this famous, was actually possible because of the rod.`
    },
    { //Frozen Robe Taumaizen - Complete
        id: 103351,
        name: `Frozen Robe Taumaizen`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103350.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103351.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103350.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103351.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `40s CT - Reduces Own DMG Taken by 30% for 15s. Evades Freezing effect for 15s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The magical robe that the "Witch of Disaster" had created on a whim. This witch was the cause of "Winter of Taumaizen" which turned summer fields into frozen hellscape in an instant. By wearing this robe, you won't need to worry about freezing in even the coldest places. Not only does it have defense abilities against snow magic, it also keeps the constancy of one's body by harmonizing to the cold air. However, once she noticed that this was unnecessary for her, she lost interest, and hung the robe on a tree and left.`
    },
    { //Firebird 'Alle Rouge' - Complete
        id: 103361,
        name: `Firebird 'Alle Rouge'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103360.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103361.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103360.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103361.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - 7777% Fire DMG (Physical). Reduces enemy's Burn resistance by 50% for 4s.`,
                break: 1000
            },
        passive: 
            {
                ability1: `DMG & Break power 30% UP while enemy is Burning (Only once).`
            },
        lore: `One of the rare beasts that have existed from ancient times in Raktehelm. It used to be a Spirit that ruled all fire birds and became a God, thus it is more of a conception rather than an existence. Those who are excepted by it receives the protection of the flames, and it burns out anything or anyone that stands in their way. It is the symbol of regeneration, but only a few have actually seen it.`
    },
    { //True 'Gradion' - Missing .....
        id: 103371,
        name: `True 'Gradion'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103370.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103371.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103370.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103371.png`
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
    { //True 'Froid Rosier' - Complete
        id: 103381,
        name: `True 'Froid Rosier'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103380.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103381.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103380.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103381.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 5500% Water DMG (Magic). 60% chance of Freezing Enemy.`,
                break: 1200
            },
        passive: 
            {
                ability1: `When Equipped by Corsair, increases own DMG by 75% and increases Own Arts Gauge automatically (only once).`,
                ability2: `Increases DMG to Fire Elemental Units by 25%.`
            },
        lore: `The sword used by Corsair, one of the 3 Blade Masters during the Ancient War. It is said that she used this sword for her whole life. There are numerous legends that one could not imagine that about this beautiful sword. It was created to amplify Corsair's strength, but becoming too strong, she remade it to match her abilities. As a result, just by drawing the sword, it freezes even roses around her.`
    },
    { //True 'Arth Lumina' - Complete
        id: 103391,
        name: `True 'Arth Lumina'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103390.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103391.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103390.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103391.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 6000% Earth DMG (Physical).`,
                break: 3000
            },
        passive: 
            {
                ability1: `When Equipped by Arth, increases own DMG by 75% and increases Own Arts Gauge automatically (only once).`,
                ability2: `Increases DMG to Water Elemental Units by 25%.`
            },
        lore: `The twin blades that Arth, one of the 3 Blade Masters and left his name in history, used during the Ancient War. It was created by Gods to amplify his sword skills, thus the sword was named after him. A symbol of strength, it became a lesson for him not to forget the war. Being a weapon of destruction and regeneration, it can be said that it was a mirror that reflected his glory and amends.`
    },
    { //Relic 'Deus Volta' - Complete
        id: 103401,
        name: `Relic 'Deus Volta'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103400.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103401.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103400.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103401.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `50s CT - Increases all Allies' DMG Inflicted by 20% and adds Paralyze effect for all Allies' for 8s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Regenerates own HP by 10 (only once).`
            },
        lore: `The source behind the 'Tonetaurus' ability to create infinite bolts of lightning. The particles themselves are too small to be used practically, but from the sheer quantity the Tonetaurus needs, it was possible to transform into a relic. Its enormous power is said to match that of ancient gods.`
    },
    { //Relic 'Pteraturus' - Complete
        id: 103411,
        name: `Relic 'Pteraturus'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103410.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103411.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103410.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103411.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 250
            },
        skillset:  
            {
                skill: `50s CT - Negates 800 DMG Dealt to all Allies' for 12s. Increases all Allies' Paralyze and Freeze resistance by 70% for 12s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Regenerates own HP by 10 (only once).`
            },
        lore: `A divine shield made from the 'Tonetaurus' feather which emits lightning bolts. The feathers themselves don't hold a charge, but rather the feathers' unique power converts the atoms in the surrounding air into electricity. A blow like a bolt of lightning has left many to warn of its dangers: "Lest not touch, for death awaits."`
    },
    { //Axioma 'Valheight' - Missing .....
        id: 103421,
        name: `Axioma 'Valheight'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103420.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103421.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103420.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103421.png`
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
    { //Oathtaker 'Shivlet' - Missing .....
        id: 103431,
        name: `Oathtaker 'Shivlet'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103430.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103431.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103430.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103431.png`
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
    { //Peacemaker 'Leighto' - Missing .....
        id: 103441,
        name: `Peacemaker 'Leighto'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103440.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103441.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103440.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103441.png`
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
    { //Grimoire SHIN-RA-BAN-SHO - Complete
        id: 103451,
        name: `Grimoire SHIN-RA-BAN-SHO`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103450.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103451.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103450.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103451.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Heals all Allies' HP by 100/s for 10s. If User is Water Elemental then Healing x 1.5. Heals all Allies' Status Ailments except Faint or Disease.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is an extremely precious book inherited from the famous "Witch of Destruction". The content changes every time you open it and inside it, you may find everything from valuable wisdom to useless jokes. It contains very valuable information such as the truth about the hidden history and far futures, but it is very not likely that anybody in the world can select the knowledge inside it to use it properly.`
    },
    { //Twin Magical Guns Zecht - Missing .....
        id: 103461,
        name: `Twin Magical Guns Zecht`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103460.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103461.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103460.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103461.png`
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
    { //Phantom Robe Hollow Graph - Complete
        id: 103471,
        name: `Phantom Robe Hollow Graph`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103470.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103471.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103470.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103471.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 120
            },
        skillset:  
            {
                skill: `35s CT - Negates 600 DMG Dealt to all Allies' for 10s. Increases all Allies' DEF by 30% for 10s (only once).`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The mantle that a famous gunman used before the Ancient War. Not only does it contain Dark Magic that protects the user from enemy attacks, but it also has the ability to camouflage with the background to confuse enemies. He was indeed a quick and accurate gunman thanks to this mantle. However, in his very last moments he took off this mantle with his own will.`
    },
    { //Necklace 'Barbelun' - Complete
        id: 103481,
        name: `Necklace 'Barbelun'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103480.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103481png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103480.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103481.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `20s CT - Increases all Allies' Arts Gauge by 1 for 5s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This was the necklace that a certain witch always put on. It affects the owner's mind to think clearly, and to become full of curiosity. Later, called as "Destruction Witch", she is said to have read books from all ages and countries, thus this was a treasure for her. However, this must have been the key to the misfortune that happened to her and others close to her.`
    },
    { //Dark Soul Pendant 'Necrocles' - Complete
        id: 103491,
        name: `Dark Soul Pendant 'Necrocles'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103490.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103491.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103490.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103491.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - Heals all Allies' HP by 15%. If Dark unit, increases Heal amount by 10%. If Demon, increases own Arts gauge by 20.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases own Blind Resistance by 100%. Increase own Curse Resistance by 100%.`
            },
        lore: `A pendant belonging to the Special Unit "Aegis Raven" of La Riiz, that Regulus received from the Cult. Despite he was the personification of the saying "A good attack is the best defense" and his achievements were extraordinary, her didn't have any magical power, so during magic battles, he was often in danger. Thus, the Cult decided to endow him with this pendant, which is catalyzed by the invulnerability of the feared Necromancer's skull, to protect him.`
    },
    { //True 'Nemesis Crow' - Complete
        id: 103501,
        name: `True 'Nemesis Crow'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103500.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103501.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103500.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103501.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 7000% Dark DMG (Magic). Reduces enemies' Dark Resistance by 50% for 10s.`,
                break: 1000
            },
        passive: 
            {
                ability1: `When Equipped by Regulus, increases own Critical DMG by 50% and increases own Arts Gauge automatically (only once).`,
                ability2: `Increases DMG to Dragons by 50%.`
            },
        lore: `This is the blade once wielded by Regulus, member of the Twin Knights of the Morning Star and of the Raven's Aegis of the Magus Empire of La Riiz. The incredible strikes he was known for are the result of the advanced design of this weapon. During his long journey, he fought many tough fighters and famous blades, but he never met anyone who could break his sword, the one that once defeated the fire of the Flamewyrm Dargeon.`
    },
    { //True 'Ryude Magus' - Missing .....
        id: 103511,
        name: `True 'Ryude Magus'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103510.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103511.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103510.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103511.png`
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
    { //Ultimate Magic Canon 'Infinite' - Missing .....
        id: 103521,
        name: `Ultimate Magic Canon 'Infinite'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103520.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103521.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103520.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103521.png`
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
    { //End Circuit 'Judgement' - Complete
        id: 103531,
        name: `End Circuit 'Judgement'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103530.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103531.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103530.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103531.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `40s CT - Increases all Allies' DEF by 30% for 15s. Heals all Light Elemental Allies' Status Ailments except for Faint and Disease.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Paralyze Time Reduction by 20%. Increases Paralyze Evasion Rate by 20%.`
            },
        lore: `The device that was put into the mecha doll. This allows the doll to judge objectively and also works as the safety system for the magic canon. It is impossible for the doll to make decisions on its own and it is created to always obey his master's orders. Rumors say that this circuit is where the dolls mind and feelings are, but there is no way to prove that for now...`
    },
    { //Phantasmagoric 'Cavalry' - Complete
        id: 103541,
        name: `Phantasmagoric 'Cavalry'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103540.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103541.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103540.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103541.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `40s CT - Increases all Allies' Skill CT Speed by 50% and Arts gauge by 1 for 5s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Paralyze Time Reduction by 10%. Increases Paralyze Evasion Rate by 10%.`
            },
        lore: `The battle support device that the mecha doll used. As the name tells, it moved freely in the battlefields like a horse and supported its owner. It is possible to set it to move based on rules or to make it move depending on the current situation. In past wars, Machine used this device and by itself, its work equaled up to a hundred people.`
    },
    { //X Marks the Spot - Complete
        id: 103551,
        name: `X Marks the Spot`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103550.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103551.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103550.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103551.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `180s CT - 9999% Non-Elemental DMG (Magic). Increases all allies' BE Output & CRI rate by 50% for 5s`,
                break: 999
            },
        passive: 
            {
                ability1: `Own stats 10% UP (Only once).`
            },
        lore: `This is when Rolly and Ru, which Rayas met during his journey, unleash their true powers. Both do not have high battle skills, but through their magical powers and cooperation have improved. Originally, Fairies and Spirits have enormous powers, and these two cute buddies are not an exception. Their powers should become massive through their adventures.`
    },
    { //Help me Rolly! - Complete
        id: 103561,
        name: `Help me Rolly!`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103560.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103561.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103560.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103561.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `15s CT - 2200% Light DMG (Physical). 5% Chance of Fainting enemy.`,
                break: 300
            },
        passive: 
            {
                ability1: `BE Output from Equipment 10% UP (Only once).`
            },
        lore: `The Fairy that Iris, a girl who lost her memories, had encountered and saved. Although he looks similar to Kyuons, his fur and other aspects make him a different race, or maybe a new species. But no one knows the truth yet... His intelligence is extremely high and rumors are it might be the same as the adventurer Rayas. His battle abilities are not that high, but a Fairy as he is, his tackle with full speed hurts a lot.`
    },
    { //Show 'em Ru - Complete
        id: 103571,
        name: `Show 'em Ru`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103570.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103571.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103570.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103571.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 100% Earth DMG (Magic). 60% chance of Paralyzing Enemy.`,
                break: 100
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A young Spirit of the Paw People. He says that he was saved by Fen, the Head of General Staff in Gramenia, but Fen says he didn't. Ru has his own way and is a curious fellow so that might be the reason he gets along with Gen in some ways. His battle abilities are not so high, but Fen has a high opinion on him due to his quick moves and using his small body to do spying that Humans cannot do.`
    },
    { //Rolly Plush - Complete
        id: 103581,
        name: `Rolly Plush`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103580.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103581.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103580.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103581.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `70s CT - Heals all Allies' HP by 1000. If User is Light Elemental then Heals all Allies' HP by 30 for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Skill CT Speed and HP Recovery amount by 10% (excludes absorbed ATK) (only once).`
            },
        lore: `The plush toy of Rolly which Iris, a girl who lost her memories, has in her room. She asked the blacksmith in her town to make this. If you look at it from a far distance, it looks just like the real Rolly. By the way, when Rolly saw this toy for his first time, he tackled it full of hostility. However, the moment he was told that it was a toy, he left the room quite embarrassed.`
    },
    { //Poison Spear 'Goroncharge' - Missing .....
        id: 103591,
        name: `Poison Spear 'Goroncharge'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103590.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103591.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103590.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103591.png`
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
    { //True 'Day Break' - Complete
        id: 103601,
        name: `True 'Day Break'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103600.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103601.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103600.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103601.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `55s CT - 6500% Fire DMG (Physical). Increases own Arts Gauge by 80 when near-death.`,
                break: 1000
            },
        passive: 
            {
                ability1: `When Equipped by Ragna, increases own DMG by 20% and negates all Status Ailments except Faint.`,
                ability2: `Increases DMG to Demons by 50%.`
            },
        lore: `This is the true form of the beloved sword of Ragna, a knight who offered his life for Humans despite being a God himself. This blade, tempered by the Gods, possesses an unbelievable edge, and its power unleashes blazing flames. However, this blade was more than a mere weapon to Ragna. For it held true to its name, offering hope no matter how desperate the situation became. No matter how dark the night, daybreak would come and light the way.`
    },
    { //Melia's Sorceress' Hat - Complete
        id: 103611,
        name: `Melia's Sorceress' Hat`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103610.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103611.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103610.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103611.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 60
            },
        skillset:  
            {
                skill: `60s CT - Negates 500 DMG Dealt to Target for 10s. Reduces Target's Fire Elemental DMG Taken by 30% for 10s (only once).`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is the Reigrad Autumn Festival costume hat chosen by Melia, intelligence officer and commander of the 3rd Magus Division of the Empire of La Riiz. The sight of her in her so-called witch's hat brings a wry grin to the face of the male soldiers around her. Her friends the intellectual and the knight-commander sarcastically commented "Oh, a witch... How out of character." Yet the Guildmaster and the Smith got chills down their spines. Only the Adventurer laughed and said, "That's perfect for you!" Which earned him an hour long lecture on exactly what she thought of that!`
    },
    { //Melia's Enchantment - Complete
        id: 103621,
        name: `Melia's Enchantment`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103620.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103621.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103620.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103621.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 5000% Dark DMG (Magic). Reduces all allies' Skill CT by 30% & Equipment CT by 20% for 8s.`,
                break: 500
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is the Autumn Festival costume of Melia, the Blue-eyed Black Fox. With it's adult appeal and scent of danger, it has the men of the town saying "Trick, please!" when she goes walking past. Her male comrades look on from a safe distance, while the young noblewoman casts sidelong jealous glances at the satisfied looking Blue-eyed Black Fox. She deliberately takes the adventurer's arm and says, with a grin, "Oh, a witch and a vampire do make a wonderful couple!"`
    },
    { //Melia's Broomstick - Complete
        id: 103631,
        name: `Melia's Broomstick`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103630.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103631.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103630.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103631.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `50s CT - Increases Target's DMG Inflicted by 20% and Break Power by 10% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is a little something Melia prepared for her Autumn Festival with her costume. Every witch needs a broom, and Melia loved swooping in with a cry of "Here's your witch girl Melia!" The mysterious girl, the priestess and the adventurer all yell for a flyover. The chef, though, just goes red with anger and yells about how her skirt is too short to go flying around over everyone's head. But the other members just look on and mutters "Can't fathom calling yourself a 'witch girl' at that age..." over his drink.`
    },
    { //Nurse-Liese' Cap - Complete
        id: 103641,
        name: `Nurse-Liese' Cap`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103640.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103641.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103640.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103641.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - Heals all Allies' HP by 90/s for 7s. Completely evades Blind and Curse for all Allies for 7s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is Priestess Liese' costume hat for the Reigrad Autumn Festival. But she had a real struggle in front of the mirror. A nurse must keep her hair tightly bound and covered with a hat for hygienic reasons. Since she almost never does her hair up, she just couldn't get it right. All the grown-ups told her she should not get so stressed over a costume, but her obstinate nature took over and wouldn't let it rest.`
    },
    { //Nurse-Liese' Gown - Complete
        id: 103651,
        name: `Nurse-Liese' Gown`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103650.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103651.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103650.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103651.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `300s CT - Revives all Allies with 25% HP. If User is Light Elemental then Healing x 2.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `When all the adults heard that the Priestess Liese would be dressing up with Iris' help, they all felt a chill. The Chef gave her a serious talking-to, making sure she picked something fitting to avoid a repeat of the summer swimsuit fiasco. And with her help, the holy woman settled on a very appropriate nurse's uniform. And yet, even this outfit clearly had its allure for some. Ever since this day, more than a few call her Angel instead of Priestess.`
    },
    { //Liese' Medicine Time - Complete
        id: 103661,
        name: `Liese' Medicine Time`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103660.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103661.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103660.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103661.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `70s CT - 100% Non-Elemental DMG (Magic).`,
                break: 8000
            },
        passive: 
            {
                ability1: `Increases Unit's Equipment CT Speed by 5%.`
            },
        lore: `This is a syringe to go with the Priestess Liese' Reigrad Autumn Festival costume. Seeing her in her nurse's costume gave her a different kind of divine aura, and drew those suffering unusual pangs to flock to the shrine. The adults watched on, charmed as she did her best to play nurse for all who came by. However, the mood took a dark turn when she picked up her syringe. It was filled with a sparkling, obviously magical fluid. And sitting across from her was the oblivious adventurer...`
    },
    { //Iris' Bunny Ears - Complete
        id: 103671,
        name: `Iris' Bunny Ears`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103670.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103671.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103670.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103671.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `10s CT - 1500% Light DMG (Magic).`,
                break: 300
            },
        passive: 
            {
                ability1: ``
            },
        lore: `These are the bunny ears to go along with Iris' Autumn Festival costume. Apparently, she'd fallen in love at first sight, and according to her shopping partner Chef, she'd thrown a rare tantrum to get her way. When she wore the whole costume, she was the very image of a bunny rabbit, yet the dress itself is so revealing all the adults cannot help but worry. But surely the innocent young thing will be safe with her large, shaven-headed bodyguard behind her.`
    },
    { //Iris' Bunny Dress - Complete
        id: 103681,
        name: `Iris' Bunny Dress`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103680.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103681.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103680.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103681.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `50s CT - Reduces all Allies' DMG Taken by 50% for 5s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is Iris' costume dress for the Autumn Festival. The noblewoman had strongly recommended something cute, but she could say nothing when Iris smiled widely and exclaimed: "This is the cutest costume ever!" Every flutter of the short skirt strikes fear into the hearts of the older women. Iris, blissfully unaware of this, goes hopping around and asks the adventurer what he thinks, at which point the ladies fix him with piercing glares, daring him not to screw up.`
    },
    { //Count Rayas' Cape - Complete
        id: 103691,
        name: `Count Rayas' Cape`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103690.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103691.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103690.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103691.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's Skill CT Speed by 70% and ignores enemies' DEF by 30% for 6s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is the cape for Rayas' Autumn Festival costume. He is going for a vampire theme, and he takes on an air of insufferable self-satisfaction with his fake fangs and overblown aristocratic dress. The noblewoman, who knows a thing or two about aristocracy, is hard put to suppress her smile and finds the pathetic display hard to take. Just when she's about to say something, his old friends lets our a huge sigh, "The only thing he knows about the nobility is what he learned in kids' picture books..."`
    },
    { //Count Rayas' Rapier - Complete
        id: 103701,
        name: `Count Rayas' Rapier`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103700.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103701.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103700.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103701.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - 5500% Light DMG (Physical). Increases all allies' ATK by 50% for 8s.`,
                break: 3000
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This a sword Rayas plans to carry for Reigrad's Autumn Festival. He has been putting in his fangs, tying on his cape and practicing his poses nonstop! It is not clear where he is going to be showing it off, but he is so intense he does not notice that everyone other than Iris is totally turned off. The noblewoman finally couldn't take it anymore and was about to say something, but his old friend stopped her, saying "This is hilarious, let him go!"`
    },
    { //Jack-O-Penst - Complete
        id: 103711,
        name: `Jack-O-Penst`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103710.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103711.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103710.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103711.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `70s CT - 7000% Dark DMG (Physical). 100% chance of Blinding enemy.`,
                break: 1000
            },
        passive: 
            {
                ability1: `Arts DMG 10% UP (Only once).`
            },
        lore: `This is the evil sword wielded by the Ragsherum Phantom in his twisted form of Jack-O-Sherum. This sword has a pumpkin pattern just like the Jack-O-Sherum's head, and though its a fearful Demonic weapon, it's also kind of cute. Yet it is imbued with deep hatred and dark Demonic magic, so it should never be used without the greatest care.`
    },
    { //Jack-O-Sherum - Complete
        id: 103721,
        name: `Jack-O-Sherum`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103720.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103721.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103720.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103721.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `90s CT - 6666% Dark DMG (Physical). Ignores enemy's DEF by 50% for 6s.`,
                break: 700
            },
        passive: 
            {
                ability1: `Auto-fills Arts gauge by 2 when Near-Death.`
            },
        lore: `This is the armor of Jack-O-Sherum, created when the Ragsherum Phantom somehow became fused with a pumpkin. The helm has a pumpkin design, just like Jack-O-Sherum's head. It appears as if it was created with Ragsherum fused with a mysterious pumpkin spirit, but no one knows for sure. The only thing we know is that the power sleeping within this Demon Armor is every bit as great as the original.`
    },
    { //Jack-O-Shaft - Complete
        id: 103731,
        name: `Jack-O-Shaft`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103730.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103731.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103730.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103731.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `40s CT - Increases all Allies' Arts Gauge by 20. Reduces all Allies' HP recovery amount by 30% for 10s (except lifesteal).`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases all Allies' DMG to Light Elemental Units by 5% (only once).`
            },
        lore: `These are the gauntlets of Jack-O-Sherum, a twisted version of Ragsherum Phantom that appeared here. The elbow sections have large round pumpkin decorations. These are intended to protect both hands, but actually wearing them on the battlefield might require another kind of courage... Naturally, they are quite effective as a defensive armor, but not quite often enough to keep you safe from that kind of hellfire.`
    },
    { //Furious Ru - Complete
        id: 103741,
        name: `Furious Ru`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103740.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103741.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103740.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103741.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - 8500% Earth DMG (Physical). If enemy is of Water element, increases own CRI rate by 50% for 5s.`,
                break: 3000
            },
        passive: 
            {
                ability1: `DMG 10% UP & DMG from enemy 10% DOWN when Near-Death (Only once).`
            },
        lore: `This is when Ru, the young Spirit of the Paw People, is in deep fury. Usually he controls his magical powers, but once they are unleashed, he uses strong attacks which no one can imagine. Although he is a naughty boy, he is pretty calm. Thus it is scarce for him to show his anger. Once something has happened to the ones he loves, he will show this form.`
    },
    { //Shadow Blades 'Euthanasia' - Complete
        id: 103751,
        name: `Shadow Blades 'Euthanasia'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103750.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103751.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103750.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103751.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `40s CT - 1111% Earth Physical DMG. If user is Earth, increases all allies' Arts gauge by 5 for 5s.`,
                break: 100
            },
        passive: 
            {
                ability1: `DMG 15% UP & Auto-fills Arts gauge when Boss' HP is under 30% (Only once).`
            },
        lore: `The greater the magical power of the user, the more of these throwing knives there are. It has been many years since anyone could use them well, so they lay dormant in the republic treasury until the young Fen found them and mastered them in a matter of days, thus laying claim to their power for himself. Yet watching him using these difficult weapons so self assuredly left no one able to deny his egotistical nature.`
    },
    { //Relic 'Goron Knuckle' - Missing .....
        id: 103761,
        name: `Relic 'Goron Knuckle'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103760.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103761.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103760.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103761.png`
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
                ability1: `Increases all Allies' ATK by 15% (only once).`
            },
        lore: ``
    },
    { //Relic 'Dola Armor' - Complete
        id: 103771,
        name: `Relic 'Dola Armor'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103770.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103771.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103770.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103771.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 120
            },
        skillset:  
            {
                skill: `30s CT - Negates 400 DMG Dealt to all Allies' for 8s. Reduces all Allies' Water Elemental DMG Taken by 35% for 8s (only once).`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases all Allies' ATK by 15% (only once).`
            },
        lore: `This armor was woven from the bark fibers of the Botanical Beast, Gorondola and sections carved from whole roots. It's something any competent armorer could whip up once they knew where to find the materials, but this armor fell into the hands of an eccentric curio collector. It is top class in terms of power, but any who wear it develop an odd fascination with trinkets. Before they know it, they're walking around with a team of underlings like some kind of gang capo.`
    },
    { //True 'Efkeria' - Complete
        id: 103781,
        name: `True 'Efkeria'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103780.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103781.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103780.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103781.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `35s CT - 5000% Earth DMG (Physical). Heals own HP by 260 & increases own Arts gauge by 20 for each enemy hit.`,
                break: 1500
            },
        passive: 
            {
                ability1: `When equipped by Fen (Earth), DMG 20% UP & Evasion rate 15% UP when Near-Death (Only once).`,
                ability2: `Own DMG 15% UP when enemy's HP is under 50% (Only once).`
            },
        lore: `The magical short sword that has been passed on within the Paw People. It is also the favorite sword of Fen, the strategist of Gramenia Republic, which he keeps using despite his promotion. He says that there isn't anything better that suits him. However, it seems that the true reason is because he is aware of the divine protection of it. The powers of the sword are unleashed when Fen feels the trust and feelings of his "friends." Every time he might be thinking about his rare species friend.`
    },
    { //Divine Sword 'Justicia' - Missing .....
        id: 103791,
        name: `Divine Sword 'Justicia'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103790.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103791.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103790.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103791.png`
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
    { //Divine Shield 'Castillo' - Complete
        id: 103801,
        name: `Divine Shield 'Castillo'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103800.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103801.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103800.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103801.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `50s CT - Negates 800 DMG Dealt to all Allies' for 10s (only once). All Allies' evade Burning effect for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases DEF by 20% when unit is Negating DMG.`
            },
        lore: `This was the shield borne by Gaia, Shining God Warrior and one of the Divine Knights, early in the Ancient War. It turned his water elemental divine protection into powerful defense. Shield usually protect only the bearer, but in his hands this shield creates a wall of water to defend his comrades as well. Each time, it puts him under great spiritual strain, yet he never hesitated to use it, and thus saved the lives of many comrades.`
    },
    { //Divine Ornament 'Amlethal' - Complete
        id: 103811,
        name: `Divine Ornament 'Amlethal'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103810.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103811.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103810.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103811.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 120
            },
        skillset:  
            {
                skill: `40s CT - Reduces all Allies' Fire Elemental DMG Taken by 15% for 10s. Heals all Allies' HP by 20/s for 10s. If User is Water Elemental then Healing x 1.5.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases DEF by 10% when unit is negating DMG.`
            },
        lore: `This ring bound Shining God Warrior Gaia's long hair. As bearer of the blessing of water, he kept his hair uncut to serve as a reservoir for magical power. It grew down to his knees, and to keep it from interfering in battle he bound it into one long tail. This item is inscribed with prayers and loyalty oaths, and when worn on the hair it amplifies magical power to create a boundary of water around the wearer.`
    },
    { //Kaiju Gem - Complete
        id: 103821,
        name: `Kaiju Gem`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103820.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103821.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103820.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103821.png`
            },
        stats:
            {
                hp: 0,
                atk: 60,
                def: 0
            },
        skillset:  
            {
                skill: `100s CT - 4500% Non-Elemental DMG (Physical). Increases all allies' Physical DMG by 20% for 30s.`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A unique summoning stone discovered in the ruins where Godzilla appeared. It calls that massive Kaiju, a creature far superior to God Beasts and Demon Beasts. However, not even the most skilled Summoner can control it, meaning they might also be on the receiving end of its powerful heat blasts. Confronting this deity of destruction will only result in destruction.`
    },
    { //Godzilla Earth - Complete
        id: 103831,
        name: `Godzilla Earth`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103830.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103831.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103830.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103831.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `100s CT - 12000% Non-Elemental DMG (Physical). Increases all allies Physical DMG by 50% for 30s.`,
                break: 1000
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Summons Godzilla, who cannot be stopped until it has destroyed everything in sight. To support its ponderous bulk, Godzilla's body is composed of muscle similar to metal. This not only makes it impervious to blades and projectiles, it can generate electromagnetic fields at will. Anyone who stands before such might can only realize their own powerlessness and retreat in order to survive.`
    },
    { //Induction Rifle - Complete
        id: 103841,
        name: `Induction Rifle`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103840.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103841.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103840.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103841.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `5s CT - 1700% Non-Elemental DMG (Magic). 30% chance of reducing enemy's DEF by 10% for 10s.`,
                break: 300
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A rifle more powerful than any found in Raktehelm. Since it is made from a material that does not exist in this world, it cannot be reproduced. It fires bullets with superconductivity, letting them pierce through almost anything. Though its original owner is unknown, the bloodstains speak of a deadly battle against an unimaginably powerful foe.`
    },
    { //Artillery Tank - Complete
        id: 103851,
        name: `Artillery Tank`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103850.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103851.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103850.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103851.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `70s CT - 5000% Non-Elemental DMG (Physical).`,
                break: 4000
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A mobile Weapon that can smoothly travel over even the roughest terrain. Not made of any material native to Raktehelm, it was discovered near the ruins where the giant kaiju was summoned. It can carry several passangers at high speed, but it's true value lies in the twin barrels capable of leveling mountains.`
    },
    { //Elastomer Suit - Complete
        id: 103861,
        name: `Elastomer Suit`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103860.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103861.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103860.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103861.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 120
            },
        skillset:  
            {
                skill: `30s CT - Increases all allies' Poison, Paralysis & Disease resistance by 100% & reduces all allies' Magic DMG taken by 30% for 15s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `A full-body suit of resilient material found nowhere on Raktehelm. It does not tear even after prolonged exposure to harsh conditions and is easy to move in, making it indispensable for combat. However, one cannot help but imagine the brutal circumstances that required its invention.`
    },
    { //Induction Pistol - Missing .....
        id: 103871,
        name: `Induction Pistol`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103870.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103871.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103870.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103871.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
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
    { //Relic 'Cylentium' - Missing .....
        id: 103881,
        name: `Relic 'Cylentium'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103880.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103881.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103880.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103881.png`
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
    { //Relic 'Lacus Aurora' - Complete
        id: 103891,
        name: `Relic 'Lacus Aurora'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103890.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103891.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103890.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103891.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `30s CT - 	Increases DMG Inflicted from Water Elemental Units to Fire Elemental Units by 20% and Skill CT Speed by 100% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Fire Elemental Resistance by 10% (only once).`
            },
        lore: `The boots of an adventurer who explored the ice lands the Frozen Dragon Auregraxes created before becoming a Relic. Being exposed to the magical powers left in the frozen ground, the boots were transformed into a curse charm that freezes the ground it touches. The boat she boarded home was caught in a storm and was wrecked. She was expected to die but had worn the boots. Upon touching the waves, her soles froze the water surface immediately, and she survived.`
    },
    { //True 'Geshpenst' - Complete
        id: 103901,
        name: `True 'Geshpenst'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103900.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103901.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103900.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103901.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 7200% Dark DMG (Physical).`,
                break: 1600
            },
        passive: 
            {
                ability1: `When equipped by Ragsherum, DMG 20% UP & Skill CT 50% DOWN (Only once).`,
                ability2: `All allies' ATK 15% UP (Only once).`
            },
        lore: `Ragsherum's trusted sword that never left his side when he tried to unseal the Demons in Gormarey. The sword cuts through its foes as if it has a mind of its own, soaking up any magical power from its victims to complete itself. Despite Ragsherum's passionate research, the "True" Geshpenst absorbed and perfected its master's moves without any intervention. Once reunited with its former master's armor, it will be an unstoppable force once again.`
    },
    { //Cursed Axe 'Hell Galgen' - Missing Lore & Passive
        id: 103911,
        name: `Cursed Axe 'Hell Galgen'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103910.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103911.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103910.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103911.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 6666% Dark DMG (Magic).`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: ``
    },
    { //Sacred Tome 'Truth of the Morning Star' - Complete
        id: 103921,
        name: `Sacred Tome 'Truth of the Morning Star'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103920.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103921.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103920.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103921.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 3800% Light DMG (Magic). Reduces Light Elemental Resistance of Dark Elemental Units by 20% for 10s.`,
                break: 600
            },
        passive: 
            {
                ability1: `Regenerates Own HP by 4/s.`
            },
        lore: `This ancient tome lain dormant long years in the depths of Lagan, the Royal Library of Famelle. It was mysteriously sealed, but they say that someone possessed of the power to unlock its secrets. It contains the story of the later days of the heroes known as the Twin Knights of the Morning Star. Who could have written this story of their final days, which only they could have known? And why can only the chosen one read what lies within? Those answers still lay ahead for our adventurers.`
    },
    { //Holy Shield 'Lux Feena' - Missing Lore
        id: 103931,
        name: `Holy Shield 'Lux Feena'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103930.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103931.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103930.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103931.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 6000% Light DMG (Magic). If User is Light Elemental, completely Evades all Status Ailments except for Faint for 8s.`,
                break: 800
            },
        passive: 
            {
                ability1: `Regenerates HP by 6/s.`
            },
        lore: ``
    },
    { //True 'Centurion' - Complete
        id: 103941,
        name: `True 'Centurion'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103940.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103941.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103940.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103941.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - 6200% Light DMG (Magic). Heals 30% of the DMG all allies took for 10s.`,
                break: 1000
            },
        passive: 
            {
                ability1: `When Equipped by Feena, increases own DMG by 20% and increases own Arts Gauge automatically (only once).`,
                ability2: `Increases Dark Elemental Resistance by 20%.`
            },
        lore: `This is the sacred sword of the Knight of Light Feena, one of the Twin Knights of the Morning Star. This weapon was truly appropriate, for though she was a Human she shone with brilliance equal to the Gods, and all who stood before her blazing light gave up their will to fight and bowed to her glory. She received this weapon in Famelle, but then the Gods blessed it and it was reborn as a divine weapon. For some reason, history books do not record its true value.`
    },
    { //Aqua Sword 'IZANAMI' - MIssing .....
        id: 103951,
        name: `Aqua Sword 'IZANAMI'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103950.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103951.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103950.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103951.png`
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
    { //HIME-AJISAI - Complete
        id: 103961,
        name: `HIME-AJISAI`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103960.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103961.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103960.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103961.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `80s CT - Heal all Allies' HP by 1800. Heals all Allies' Status Ailments except Faint or Disease.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The hair accessory that the swordswoman Yomi, who is said to come from a different world, wore. It is modeled after a flower that does not exist in Raktehelm, and added a fragile sadness to her mysterious image. To her, it was her formal dress and battle dress so she wore it to her important battles. The name "Aqua Lord" comes from the silence pressure she released when she wore this hair accessory held people in awe.`
    },
    { //Air Gun 'Ordonnanz' - Complete
        id: 103971,
        name: `Air Gun 'Ordonnanz'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103970.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103971.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103970.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103971.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 4200% Light DMG (Magic). Increases all Allies' Light Elemental DMG Dealt by 15% for 6s.`,
                break: 600
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The aircraft that looks like a machine gun which Ameru, a girl who ran about the battlefields during the Ancient War, used. The principle of how it flew is not solved, but it is said that it used the power from the machine gun. It seems that this hypothesis is ridiculous, but the reason why this cannot be completely denied is because this gun could even destroy fortresses. It may be possible to blow a small girl easily.`
    },
    { //Ameru's Letter Bag - Complete
        id: 103981,
        name: `Ameru's Letter Bag`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103980.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103981.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103980.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103981.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `180s CT - Increases all Allies' DMG Inflicted by 25% and Critical Rate by 100% for 12s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `The bag which Ameru, a girl who ran about delivering letters during the Ancient War, favored. The bag was full with love letters between different races. She was often attacked by mistake, but because of her Air Gun "Ordonnanz", the letters were never stolen. But she did lock her bag so only she could open it just in case. Her bag was hard enough to even swing around the bag and fight.`
    },
    { //Magic Rod 'Maleficium' - Missing .....
        id: 103991,
        name: `Magic Rod 'Maleficium'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_103990.png`,
                detailmax: `/db/Equipment/Detail/item_detail_103991.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_103990.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_103991.png`
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
    { //Magic Earrings 'Temptation' - Complete
        id: 104001,
        name: `Magic Earrings 'Temptation'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104000.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104001.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104000.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104001.png`
            },
        stats:
            {
                hp: 60,
                atk: 30,
                def: 30
            },
        skillset:  
            {
                skill: `40s CT - Increases Target's Magic DMG, Equipment CT Speed, and Skill CT Speed by 20% for 12s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Blind Time Reduction by 20%. Increases Blind Evasion Rate by 20%.`
            },
        lore: `Melia ia a lady with constant rumors who is from Magis Empire of La Riiz. Being so attractive, countless men have fallen for her, and her earrings are fascinating as well. These glowing earrings emphasise her mysteriousness. It's not surprising, because a charm spell has been chanted on it. With Melia's one word, it activates its powers immediately. Not knowing this, countless men have whispered top secret information to her.`
    },
    { //Magic Robe 'Orbscuritas' - Missing .....
        id: 104011,
        name: `Magic Robe 'Orbscuritas'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104010.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104011.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104010.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104011.png`
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
    { //True 'Valheight' - Complete
        id: 104021,
        name: `True 'Valheight'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104020.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104021.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104020.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104021.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `90s CT - 10800% Water DMG (Physical). When equipped by a Human, Arts DMG increases 50% once, then Arts Gauge decreases for 10s.`,
                break: 1000
            },
        passive: 
            {
                ability1: `When Equipped by Est, increases own DMG and Break by 20%.`,
                ability2: `Increases Physical DMG by 15% (only once).`
            },
        lore: `When Est, the daughter of the "Holy Swordmaster" came to understand her lineage and destiny, her guardian angel shows its true form. "Allow me to turn all matter to your trusted blade," so says this armor. Faced with the immense power of this armor and the cruel inability to harness it, Est pushed herself well past her limit, proving her likeness to her mother along her path.`
    },
    { //Relic 'Hrungnir' - Complete
        id: 104031,
        name: `Relic 'Hrungnir'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104030.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104031.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104030.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104031.png`
            },
        stats:
            {
                hp: 125,
                atk: 62,
                def: 62
            },
        skillset:  
            {
                skill: `65s CT - 500% Water DMG (Physical). Increases all Allies' Break Power by 30% for 6s.`,
                break: 2000
            },
        passive: 
            {
                ability1: `Increases own ATK by 10% (only once).`
            },
        lore: `This massive hammer was used by the Ice Fortress Geo Zagnus, known as the Polar Calamity. It boasts incredible durability, as it was made to withstand the Giant's incredible strength as it destroyed all it saw, even hammering massive glaciers to dust. As it was long wielded by a Giant bearing the magical power of Absolute Zero, it possesses the power to instantly freeze anything that draws near. If the crushing blow doesn’t annihilate its target, the frigid wind and shock of its passing will freeze enemies to ice and shatter them.`
    },
    { //Relic 'Bracchium' - Complete
        id: 104041,
        name: `Relic 'Bracchium'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104040.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104041.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104040.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104041.png`
            },
        stats:
            {
                hp: 250,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `250s CT - Revives all Allies at 30% HP. Increases all Allies' Arts Gauge by 20. Increases all Allies' DMG Inflicted by 10% for 20s`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases own ATK by 10% (only once).`
            },
        lore: `These gauntlets were worn by the Ice Fortress Geo Zagnus, Giant of Absolute Zero. The Giant's life was dominated by destruction, and so it avoided danger by pure instinct. It may sound like a mindless berserker, but it still made sure to wear mighty armor. It could block any attack with these gauntlets, and even if it was cut the bitter cold of these gauntlets would freeze the wound shut. The only way to fell this Giant is to completely shatter its powerful armor.`
    },
    { //True 'Maleficium' - Complete
        id: 104051,
        name: `True 'Maleficium'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104050.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104051.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104050.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104051.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `90s CT - 130000% Dark DMG (Magic).`,
                break: 1200
            },
        passive: 
            {
                ability1: `When equipped by Melia (Dark), DMG 20% UP & HP Auto-recovery to all allies by 10 (Only once).`,
                ability2: `DMG 20% UP when enemy is Blind (Only once).`
            },
        lore: `The rod especially made for fighting that Melia, the vice-commander of the La Riiz 3rd Magus Division, uses. She had tried not to use her dark magic as much as she could because she sealed off her dark past. However, once she decided to prove worthy to her friends, the rod started to answer her will and released its power. As a result, she hardly needs to chant spells and made it possible to use Anti-Army magic over and over which normal people cannot do.`
    },
    { //Divine Sword 'Balmung' - Missing .....
        id: 104131,
        name: `Divine Sword 'Balmung'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104130.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104131.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104130.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104131.png`
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
    { //Cursed Sword 'Gram' - Complete
        id: 104141,
        name: `Cursed Sword 'Gram'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104140.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104141.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104140.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104141.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - 6000% Dark DMG (Physical). Increases all allies' CRI rate by 30% for 6s.`,
                break: 1000
            },
        passive: 
            {
                ability1: `DMG to Gods 20% UP.`
            },
        lore: `One of the twin blades wielded by Freed, leaderof the mysterious terrorist group that rocked the world of Raktehelm, the Five Freedom Fighters. This blade is the dark twin of the divine sword made by the Gods early in the Ancient War. It holds the evil power to convert the bearer's very life force into power, but it will consume the very soul of any deemed unworthy to touch it. When this cursed sword's true potential is unleashed, it can pierce the walls of space and time to create a dimensional rip that consumes all around it.`
    },
    { //Magic Mask 'Gestalt' - Complete
        id: 104151,
        name: `Magic Mask 'Gestalt'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104150.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104151.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104150.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104151.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 5500% Dark DMG (Magic). 30% chance of Blinding enemy.`,
                break: 900
            },
        passive: 
            {
                ability1: `DMG to Gods 20% UP.`
            },
        lore: `This is the unbridled form of the mask Grohl, the La Riiz assassin who slew the terrorists of the Five Freedom Fighters, wore over his face. It was designed to dramatically boost the natural abilities of the wearer, but due to his uncommon bloodline, it called up unimaginable power. This mask was consumed by the incredible power he unleashed and became a demonic tool to channel his limitless power into pure destruction.`
    },
    { //Fire Relic 'Bible of the Flaming Knight' - Complete
        id: 104171,
        name: `Fire Relic 'Bible of the Flaming Knight'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104170.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104171.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104170.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104171.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 7500% Fire DMG (Physical). Increases all allies' Skill CT speed by 80% for 8s.`,
                break: 1200
            },
        passive: 
            {
                ability1: `Increases all Fire Elemental Allies' stats by 20% (Only once).`,
                ability2: `Flaming Knight Returns: "When the Flaming Knight returns, the power will..."`
            },
        lore: `In this bible, anecdotes of a fallen country which praised flames as god. There was only one knight who protected this country. He wore red armor and coat, and with one slash of his sword he could burn away his enemies. On the back cover it says "When the Flaming Knight returns the power will..." but the rest cannot be read. Mysterious powers are flowing from it, but no one knows how to truly use it.`
    },
    { //Water Relic 'Aqua Dragon's Quartz' - Complete
        id: 104181,
        name: `Water Relic 'Aqua Dragon's Quartz'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104180.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104181.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104180.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104181.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `70s CT - Increases all Water Elemental units' Arts Gauge by 10 for 5s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases all Water Elemental Allies' stats by 20% (Only once).`,
                ability2: `True Value of the Blue Crystal: "The crystal remains silent..."`
            },
        lore: `This was given powers of the legendary Aqua Dragon that controls the oceans. It is clear that the country which praised the ocean as the origin of life possessed this treasure in ancient times. Its powers are said to overwhelm all countries, but ti can only be used when the three shining weapons gather. However, it is too much of a masterpiece for Humans so it will take extraordinary time to solve all the mysteries.`
    },
    { //Earth Relic 'Gran Forde' - Complete
        id: 104191,
        name: `Earth Relic 'Gran Forde'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104190.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104191.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104190.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104191.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 6000% Earth DMG (Magic). Increases Accuracy rate and Evasion rate by 20% for 8s.`,
                break: 1200
            },
        passive: 
            {
                ability1: `Increases all Earth Elemental Allies' stats by 20% (Only once).`,
                ability2: `Territory of Verdure: The main part of a machine. It does not work by itself.`
            },
        lore: `It is some king of machine parts found in the Aqua ruins. Tremendous power flows from it. There seems to be three parts to the machine, but no one knows what it is or what it is used for. The parts for connection are not found thus it is difficult to understand the structure of it. If all parts are found, will this mystery be solved?`
    },
    { //Holy Night of Fenrir - Complete
        id: 104201,
        name: `Holy Night of Fenrir`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104200.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104201.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104200.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104201.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - Heals all Allies' HP by 10%. Heals all Allies' Status Ailments except for Faint and Disease.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `After hearing about the otherworld festival of Christmas, Roy had his 3rd "Fenrir" division of the Imperial Knights of Isliid dress up an0d give out presents to children. In that other world, Christmas is considered a holy night, so out of respect for the night he prepared a special crest. While the Fenrir knights are out distributing present, the captain and his childhood friend the adventurer went to their orphanage.`
    },
    { //Stuffed Merry Rolly - Complete
        id: 104211,
        name: `Stuffed Merry Rolly`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104210.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104211.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104210.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104211.png`
            },
        stats:
            {
                hp: 250,
                atk: 125,
                def: 125
            },
        skillset:  
            {
                skill: `5s CT - Break Mode: Increases all Allies' Break Power by 30% for 10s. Heal Mode: Heals all Allies' HP by 20 for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is a stuffed toy Iris brought to the Firecat's Den party for Christmas, an otherworld festival. Iris herself made everything, apparently, and now it sits right alongside the Ru doll like they're best friends watching over the party. When Rolly saw it, though, he was clearly bothered. It turns out he thought it very odd that the doll had a present while the real Rolly did not, and was unhappy with the situation. And when Rayas tried to explain, he was answered only with a swift kick.`
    },
{ //Liese' Santa Dress - Complete
        id: 104221,
        name: `Liese' Santa Dress`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104220.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104221.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104220.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104221.png`
            },
        stats:
            {
                hp: 500,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `70s CT - Heals all Allies' HP by 240/s for 10s. Negates Flinch for all Allies for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is a dress Reigrad's Priestess Liese chose to celebrate Christmas, an otherworld festival. Liese was filled with envy seeing young Iris racing through the streets in her Santa suit. The chef saw her trying to keep those feelings bottled up, and took her to see the Alchemist out of pity. The outfit started out nice and warm to keep her from catching a cold, but Liese' teary puppy-dog eyes convinced her to make this dress.`
    },
{ //Iris' Santa Hat - Complete
        id: 104231,
        name: `Iris' Santa Hat`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104230.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104231.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104230.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104231.png`
            },
        stats:
            {
                hp: 0,
                atk: 120,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 	4200% Light DMG (Magic). Reduces Enemies' Freeze Resistance by 30% for 8s.`,
                break: 1500
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is a hat Iris chose for a party celebrating Christmas, an otherworld festival. She rushed to the Alchemist and burst in to show her all about the person Santa Claus in her picture book. When she was done talking, the Alchemist put this hat on her head. Iris was clearly overjoyed and went rushing out, but soon came back asking for a matching dress.`
    },
{ //Iris' Santa Dress - Complete
        id: 104241,
        name: `Iris' Santa Dress`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104240.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104241.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104240.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104241.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `30s CT - Negates 1000 DMG Dealt to all Allies. Increases all Allies' Healing Amount by 30% for 8s (only once).`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is a dress Iris had made for a party celebrating Christmas, an otherworld festival. When she puts it on with a matching hat, she truly embodies the spirit of Christmas. She put a bunch of sweets in a sack the Guildmaster gave her and went out around town. Whenever she saw any children, she'd run over shouting Merry Christmas, then give them a treat. Later that evening, there was a lovely Christmas Party.`
    },
{ //Merry Rolly Hat - Complete
        id: 104251,
        name: `Merry Rolly Hat`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104250.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104251.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104250.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104251.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 60
            },
        skillset:  
            {
                skill: `30s CT - Reduces all Allies' DMG Taken by 5% and Light Elemental DMG Taken by 10% for 20s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is a hat that Rayas made for the Firecat's Den party for Christmas, an otherworld festival. It was so cute, it was a particular hit with Iris. The others all had a laugh acting like Rayas was actually Rolly. However, when the real Rolly showed up, his face showed only astonishment, which soon turned to enraged trembling, a low growl, and a full-on attack on the poor adventurer.`
    },
{ //Shurahalt Tree - Missing .....
        id: 104261,
        name: `Shurahalt Tree`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104260.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104261.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104260.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104261.png`
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
{ //Holy Night Sword 'Charlotte' - Complete
        id: 104271,
        name: `Holy Night Sword 'Charlotte'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104270.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104271.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104270.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104271.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 8000% Light DMG (Physical).`,
                break: 100
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is a sword just so the Santa Claus that was supposed to surprise Iris wouldn't have to go empty-handed. Despite all the care taken before preparations, though, the secret was out and so Santa ended up just going along with the others to the Christmas party. The people of Reigrad all gathered at the Firecat's Den, and no one seemed to notice that the gentleman this adorable sword was a grizzled veteran of countless battles. Oh, and apparently his granddaughter was in charge of decorating the blade.`
    },
{ //Toy Santa Ru - Complete
        id: 104281,
        name: `Toy Santa Ru`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 3,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104280.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104281.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104280.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104281.png`
            },
        stats:
            {
                hp: 30,
                atk: 15,
                def: 15
            },
        skillset:  
            {
                skill: `30s CT - Increases Target's BE Output by 50% and Skill CT Speed by 80% for 10s.`,
                break: 0
            },
        passive: 
            {
                ability1: ``
            },
        lore: `This is a stuffed animal put up as a decoration at the Firecat's Dan to celebrate the otherworld festival of Christmas. The more you look, the more it looks just like Ru... enough that it convinced Rayas to try talking to it. This led to a fun little game where everyone talked to the doll to get the real deal's goat. The toy's clothing is made from top-quality materials, and it has been clearly will cared for... yet no one knows who left it behind.`
    },
{ //Basilisk Wreath - Complete
        id: 104291,
        name: `Basilisk Wreath`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104290.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104291.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104290.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104291.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `40s CT - 6250% Dark DMG (Magic). 100% chance of Poisoning a Human type enemy. If user is Dark Elemental, increases Arts gauge by 20 for each Enemy Unit hit.`,
                break: 1200
            },
        passive: 
            {
                ability1: ``
            },
        lore: `Some kind of decoration for the otherworld festival of Christmas... Apparently? The adventurers decorated the Firecat's Den based on a picture book they found. Iris wanted a decoration known as a "wreath" but there was no time to track down the appropriate plants. The young girl seemed quite sad, but soon perked up and came running in saying she'd found the perfect thing. Everyone grew pale at the sight, but no one had the heart to ask where she'd got it.`
    },
{ //True 'Siegfried' - Missing .....
        id: 104301,
        name: `True 'Siegfried'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104300.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104301.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104300.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104301.png`
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
{ //True 'Gestalt' - Complete
        id: 104311,
        name: `True 'Gestalt'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104310.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104311.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104310.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104311.png`
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
{ //Holy Armor 'Eldrange' - Complete
        id: 104321,
        name: `Holy Armor 'Eldrange'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104320.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104321.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104320.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104321.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 500
            },
        skillset:  
            {
                skill: `30s CT - Reduces Target's DMG Taken by 50% for 6s. Heals Target for 10% of DMG Taken for 6s.`,
                break: 0
            },
        passive: 
            {
                ability1: `Auto-Recovery for 20 HP. Increases ATK by 30% of DEF (only once).`
            },
        lore: `The armor especially made for Celia, the next monarch of the Principality of Bamint. It was made elegant, so she could wear it during official work. At first glance, it might seem undependable, but thousands of protection magic is woven within the armor. It is also called "Angel Wings" for it veils her in a thin and shining power.`
    },
{ //Princess Bamint - Complete
        id: 104331,
        name: `Princess Bamint`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104330.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104331.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104330.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104331.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `130s CT - Adds a token to revive Target Unit with 20% of HP for 120s (only once).`,
                break: 0
            },
        passive: 
            {
                ability1: `Increases Own Heal Amount by 15%.`
            },
        lore: `Only Celia, the first in line to the throne of the Principality of Bamint is allowed to wear this tiara. While it is a work of art made from the best and rare crystals, it is also a noble weapon the contains enormous magic. With her potential magic powers, magical armor, and this tiara her defense becomes as if she herself is a barricade. Weapon attacks will be rejected, and all magic will stand no chance.`
    },
{ //Magical Sword 'Siegel' - Complete
        id: 104341,
        name: `Magical Sword 'Siegel'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104340.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104341.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104340.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104341.png`
            },
        stats:
            {
                hp: 0,
                atk: 0,
                def: 120
            },
        skillset:  
            {
                skill: `35s CT - 3800% Dark DMG (Physical). Reduces all Allies' DMG Taken by 20% for 8s.`,
                break: 700
            },
        passive: 
            {
                ability1: `Reduces Physical DMG Taken by 10%.`
            },
        lore: `This is a short sword used by Onfuan, one of the Five Freedom Fighters. He was once a member of La Riiz' intelligence corps, and they say he started using this blade after he left service. This blade was once apparently the tool of a sorcerer, and now it gives the bearer great power over barrier magic. Magical power courses through the chain attached to the hilt, and when thrown the blade moves like a thing alive to hunt down its target. Once bound by this chain, it's nearly impossible to escape on your own.`
    },
{ //Magical Hat 'Akashic Eye' - Complete
        id: 104351,
        name: `Magical Hat 'Akashic Eye'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104350.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104351.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104350.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104351.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `50s CT - 6500% Earth DMG (Magic). Increases own Arts gauge by 30 when HP is 50% or more.`,
                break: 800
            },
        passive: 
            {
                ability1: `Magic DMG 20% UP.`
            },
        lore: `This is a hat worn by the mysterious sorcerer Alma. The strangely glowing stone is unlike any known type of crystal, and no one has been able to explain the structure. There are those who say that the stone "remembers" all that it has seen. The rumors go on to say that these etched memories go back far beyond the Ancient War, to a past lost to the shades of time. There are none alive who know how long this hat has existed, making it yet one more of the many deep mysteries surrounding the witch Alma.`
    },
{ //Oathtaker 'Shivlet' - Missing .....
        id: 104361,
        name: `Oathtaker 'Shivlet'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104360.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104361.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104360.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104361.png`
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
{ //Divine Rapier 'Vandring' - Complete
        id: 104371,
        name: `Divine Rapier 'Vandring'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104370.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104371.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104370.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104371.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `30s CT - 5250% Water DMG (Physical).`,
                break: 400
            },
        passive: 
            {
                ability1: `Skill CT speed 15% UP.`
            },
        lore: `A holy blade wielded by the globetrotting Sword Master, Riana. Everywhere she went, she was remembered as a priestess who cleansed the land of miasma, but details, such as the weapon she held, were scarce. The most anyone could deduce was its divine quality, since she was never seen without it. At last, someone worked up the courage to speak with her, and she shared its name. Never did she notice it was a metaphor for her own life.`
    },
{ //Blessed Garb 'Autel' - Complete
        id: 104381,
        name: `Blessed Garb 'Autel'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104380.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104381.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104380.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104381.png`
            },
        stats:
            {
                hp: 120,
                atk: 0,
                def: 0
            },
        skillset:  
            {
                skill: `60s CT - Recovers targets' HP by 2200.`,
                break: 0
            },
        passive: 
            {
                ability1: `CRI DMG 10% UP (Only once).`
            },
        lore: `The outfit of the Sword Master cursed with perennial youth, Riana. Thougb ordinary in appearance, it protects the wearer with holy power, neutralizing evil influences of every kind on contact. As she must enter spiritually hazardous areas in order to absorb miasma, this lets her do so without fear.`
    },
{ //True 'Fatalite' - Missing .....
        id: 104391,
        name: `True 'Fatalite'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104390.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104391.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104390.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104391.png`
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
{ //True 'Joyeuse' - Complete
        id: 104401,
        name: `True 'Joyeuse'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104400.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104401.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104400.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104401.png`
            },
        stats:
            {
                hp: 0,
                atk: 500,
                def: 0
            },
        skillset:  
            {
                skill: `70s CT - `,
                break: 1200
            },
        passive: 
            {
                ability1: `When equipped by Celia (Light), DMG 20% UP. Paralyze & Freeze resistance 100% UP (Only once).`,
                ability2: `MAX HP 1000 UP & DMG from enemy 10% DOWN when Near-Death (Only once).`
            },
        lore: `Only Celia, the first in line to the throne of the Principality of Bamint is allowed to use this sword. This promises her position as a princess and means that she was the chosen one. The sword always watches over the owner and at times even reveals even stronger owner. The sword will answer her feelings and make her a true hero through her high desires and achievement.`
    },
{ //True 'Alchemia' - Missing .....
        id: 104411,
        name: `True 'Alchemia'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104410.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104411.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104410.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104411.png`
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
{ //Relic 'Periusia' - Missing .....
        id: 104421,
        name: `Relic 'Periusia'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104420.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104421.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104420.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104421.png`
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
{ //Relic 'Claritus' - Missing .....
        id: 104431,
        name: `Relic 'Claritus'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104430.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104431.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104430.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104431.png`
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
{ // Blue Life Sword 'Glamerald' (碧命剣『グラメラルド』) - Missing .....
        id: 104441,
        name: `Blue Life Sword 'Glamerald' (碧命剣『グラメラルド』)`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104440.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104441.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104440.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104441.png`
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
{ //Blue Life Bow 'Eldrasta' (碧命弓『エルドラスタ』) - Missing .....
        id: 104451,
        name: `Blue Life Bow 'Eldrasta' (碧命弓『エルドラスタ』)`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104450.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104451.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104450.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104451.png`
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
{ //True 'Glamerald' - Missing .....
        id: 104461,
        name: `True 'Glamerald'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104460.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104461.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104460.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104461.png`
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
{ //True 'Peluscia' - Missing .....
        id: 104471,
        name: `True 'Peluscia'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104470.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104471.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104470.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104471.png`
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
{ //Magic Spear "Graofang" (魔槍『グラオファング』) - Missing .....
        id: 104481,
        name: `Magic Spear "Graofang" (魔槍『グラオファング』)`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104480.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104481.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104480.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104481.png`
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
{ //Flame Staff "Terenolio" (焔精杖『テレノライオ』) - Missing .....
        id: 104491,
        name: `Flame Staff "Terenolio" (焔精杖『テレノライオ』)`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104490.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104491.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104490.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104491.png`
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
{ //Protection Suit 'Viper' - Missing .....
        id: 104501,
        name: `Protection Suit 'Viper'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104500.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104501.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104500.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104501.png`
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
{ //Light Relic 'Tin Cane of Relief' - Missing .....
        id: 104511,
        name: `Light Relic 'Tin Cane of Relief'`,
        type: `/db/Mines/thumbnail/healLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104510.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104511.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104510.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104511.png`
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
{ //Dark Relic 'Nichts' - Missing .....
        id: 104521,
        name: `Dark Relic 'Nichts'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104520.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104521.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104520.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104521.png`
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
{ //Cursed Light Sword 'Anestra'- Missing .....
        id: 104591,
        name: `Cursed Light Sword 'Anestra'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104590.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104591.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104590.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104591.png`
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
{ //Rallying Banner 'Gramenia' - Missing .....
        id: 104601,
        name: `Rallying Banner 'Gramenia'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104600.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104601.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104600.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104601.png`
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
{ //Patriot Rifle 'Glorious' - Missing .....
        id: 104611,
        name: `Patriot Rifle 'Glorious'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104610.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104611.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104610.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104611.png`
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
{ //Combat Knife 'Vixen' - Missing .....
        id: 104621,
        name: `Combat Knife 'Vixen'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104620.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104621.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104620.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104621.png`
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
{ //True 'Glorious' - Missing .....
        id: 104631,
        name: `True 'Glorious'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104630.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104631.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104630.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104631.png`
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
{ //Blade 'Dragon Age' - Missing .....
        id: 104641,
        name: `Blade 'Dragon Age'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104640.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104641.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104640.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104641.png`
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
{ //Armor 'Dragon Scale' - Missing .....
        id: 104651,
        name: `Armor 'Dragon Scale'`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104650.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104651.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104650.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104651.png`
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
{ //Relic 'Sword of Revenge' - Missing .....
        id: 104661,
        name: `Relic 'Sword of Revenge'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104660.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104661.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104660.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104661.png`
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
{ //Fire Relic 'Sword of the Flaming Knight' - Missing .....
        id: 104671,
        name: `Fire Relic 'Sword of the Flaming Knight'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104670.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104671.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104670.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104671.png`
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
{ //Water Relic 'Aqua Dragon's Sword' - Missing .....
        id: 104681,
        name: `Water Relic 'Aqua Dragon's Sword'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104680.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104681.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104680.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104681.png`
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
{ //Earth Relic 'Ain Wold' - Missing .....
        id: 104691,
        name: `Earth Relic 'Ain Wold'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104690.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104691.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104690.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104691.png`
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
{ //Holy Bow 'Forester' - Missing .....
        id: 104711,
        name: `Holy Bow 'Forester'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104710.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104711.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104710.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104711.png`
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
{ //Holy Cloak 'Familia' - Missing .....
        id: 104721,
        name: `Holy Cloak 'Familia'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104720.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104721.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104720.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104721.png`
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
{ //Sniper Rifle 'Howling' - Missing .....
        id: 104731,
        name: `Sniper Rifle 'Howling'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104730.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104731.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104730.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104731.png`
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
{ //True 'Forester' - Missing .....
        id: 104741,
        name: `True 'Forester'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104740.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104741.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104740.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104741.png`
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
{ //	Magical Outfit 'Pierrot Crimson' - Missing .....
        id: 104751,
        name: `	Magical Outfit 'Pierrot Crimson'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104750.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104751.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104750.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104751.png`
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
{ //Magical Box 'Monstre' - Missing .....
        id: 104761,
        name: `Magical Box 'Monstre'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104760.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104761.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104760.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104761.png`
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
{ //Holy Cane 'Proscris' - Missing .....
        id: 104771,
        name: `Holy Cane 'Proscris'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104770.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104771.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104770.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104771.png`
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
{ //Holy Robe 'Lathraea' - Missing .....
        id: 104781,
        name: `Holy Robe 'Lathraea'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104780.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104781.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104780.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104781.png`
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
{ //Blood Katana 'MINAGOROSHI' - Missing .....
        id: 104791,
        name: `Blood Katana 'MINAGOROSHI'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104790.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104791.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104790.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104791.png`
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
{ //True 'Proscris' - Missing .....
        id: 104801,
        name: `True 'Proscris'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104800.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104801.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104800.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104801.png`
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
{ //Forbidden Book 'Irafael' - Missing .....
        id: 104811,
        name: `Forbidden Book 'Irafael'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104810.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104811.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104810.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104811.png`
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
{ //God Blade 'Dragon Twilight' - Missing .....
        id: 104851,
        name: `God Blade 'Dragon Twilight'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104850.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104851.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104850.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104851.png`
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
{ //Holy Robe 'Flora Twilight' - Missing .....
        id: 104861,
        name: `Holy Robe 'Flora Twilight'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104860.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104861.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104860.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104861.png`
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
{ //War Blade 'Diamond Chakram' - Missing .....
        id: 104871,
        name: `War Blade 'Diamond Chakram'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104870.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104871.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104870.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104871.png`
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
{ //True 'Dragon Twilight' - Missing .....
        id: 104881,
        name: `True 'Dragon Twilight'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104880.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104881.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104880.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104881.png`
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
{ //True 'Diamond Chakram' - Missing .....
        id: 104891,
        name: `True 'Diamond Chakram'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104890.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104891.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104890.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104891.png`
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
{ //Gun Sword 'Bray Canon' - Missing .....
        id: 104901,
        name: `Gun Sword 'Bray Canon'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104900.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104901.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104900.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104901.png`
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
{ //Machina Hyperdrive 'Magna Ark' - Missing .....
        id: 104911,
        name: `Machina Hyperdrive 'Magna Ark'`,
        type: `/db/Mines/thumbnail/physLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104910.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104911.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104910.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104911.png`
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
{ //Sweet Poison “Sacrifice” - Missing .....
        id: 104921,
        name: `Sweet Poison “Sacrifice”`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104920.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104921.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104920.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104921.png`
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
{ //Magi-Umbrella 'Sans Pluie' - Missing .....
        id: 104931,
        name: `Magi-Umbrella 'Sans Pluie'`,
        type: `/db/Mines/thumbnail/magLB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104930.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104931.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104930.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104931.png`
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
{ //Magic Robe 'Tout Acconier' - Missing .....
        id: 104941,
        name: `Magic Robe 'Tout Acconier'`,
        type: `/db/Mines/thumbnail/suppLB.png`,
        star: 4,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104940.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104941.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104940.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104941.png`
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
{ // - Missing .....
        id: 104951,
        name: ``,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104950.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104951.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104950.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104951.png`
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
{ // - Missing .....
        id: 104961,
        name: ``,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104960.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104961.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104960.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104961.png`
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
{ // - Missing .....
        id: 104971,
        name: ``,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104970.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104971.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104970.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104971.png`
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
{ // - Missing .....
        id: 104981,
        name: ``,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104980.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104981.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104980.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104981.png`
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
{ // - Missing .....
        id: 104991,
        name: ``,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_104990.png`,
                detailmax: `/db/Equipment/Detail/item_detail_104991.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_104990.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_104991.png`
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
{ // - Missing .....
        id: 105001,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105000.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105001.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105000.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105001.png`
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
{ // - Missing .....
        id: 105011,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105010.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105011.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105010.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105011.png`
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
{ // - Missing .....
        id: 105021,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105020.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105021.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105020.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105021.png`
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
{ // - Missing .....
        id: 105031,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105030.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105031.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105030.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105031.png`
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
{ // - Missing .....
        id: 105041,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105040.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105041.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105040.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105041.png`
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
{ // - Missing .....
        id: 105051,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105050.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105051.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105050.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105051.png`
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
{ // - Missing .....
        id: 105061,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105060.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105061.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105060.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105061.png`
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
{ // - Missing .....
        id: 105071,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105070.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105071.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105070.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105071.png`
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
{ // - Missing .....
        id: 105081,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105080.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105081.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105080.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105081.png`
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
{ // - Missing .....
        id: 105091,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105090.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105091.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105090.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105091.png`
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
{ // - Missing .....
        id: 105101,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105100.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105101.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105100.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105101.png`
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
{ // - Missing .....
        id: 105111,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105110.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105111.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105110.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105111.png`
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
{ // - Missing .....
        id: 105121,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105120.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105121.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105120.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105121.png`
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
{ // - Missing .....
        id: 105131,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105130.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105131.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105130.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105131.png`
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
{ // - Missing .....
        id: 105181,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105180.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105181.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105180.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105181.png`
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
{ // - Missing .....
        id: 105191,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105190.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105191.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105190.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105191.png`
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
{ // - Missing .....
        id: 105201,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105200.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105201.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105200.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105201.png`
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
{ // - Missing .....
        id: 105211,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105210.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105211.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105210.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105211.png`
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
{ // - Missing .....
        id: 105221,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105220.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105221.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105220.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105221.png`
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
{ // - Missing .....
        id: 105231,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105230.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105231.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105230.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105231.png`
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
{ // - Missing .....
        id: 105241,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105240.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105241.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105240.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105241.png`
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
{ // - Missing .....
        id: 105251,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105250.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105251.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105250.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105251.png`
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
{ // - Missing .....
        id: 105261,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105260.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105261.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105260.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105261.png`
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
{ // - Missing .....
        id: 105271,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105270.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105271.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105270.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105271.png`
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
{ // - Missing .....
        id: 105281,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105280.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105281.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105280.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105281.png`
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
{ // - Missing .....
        id: 105381,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105380.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105381.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105380.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105381.png`
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
{ // - Missing .....
        id: 105391,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105390.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105391.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105390.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105391.png`
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
{ // - Missing .....
        id: 105401,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105400.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105401.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105400.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105401.png`
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
{ // - Missing .....
        id: 105411,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105410.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105411.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105410.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105411.png`
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
{ // - Missing .....
        id: 105421,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105420.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105421.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105420.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105421.png`
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
{ // - Missing .....
        id: 105431,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105430.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105431.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105430.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105431.png`
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
{ // - Missing .....
        id: 105441,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105440.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105441.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105440.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105441.png`
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
{ // - Missing .....
        id: 105451,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105450.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105451.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105450.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105451.png`
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
{ // - Missing .....
        id: 105461,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105460.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105461.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105460.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105461.png`
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
{ // - Missing .....
        id: 105471,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105470.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105471.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105470.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105471.png`
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
{ // - Missing .....
        id: 105481,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105480.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105481.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105480.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105481.png`
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
{ // - Missing .....
        id: 105491,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105490.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105491.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105490.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105491.png`
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
{ // - Missing .....
        id: 105501,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105500.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105501.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105500.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105501.png`
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
{ // - Missing .....
        id: 105511,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105510.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105511.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105510.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105511.png`
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
{ // - Missing .....
        id: 105521,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105520.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105521.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105520.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105521.png`
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
{ // - Missing .....
        id: 105531,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105530.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105531.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105530.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105531.png`
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
{ // - Missing .....
        id: 105541,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105540.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105541.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105540.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105541.png`
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
{ // - Missing .....
        id: 105551,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105550.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105551.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105550.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105551.png`
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
{ // - Missing .....
        id: 105561,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105560.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105561.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105560.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105561.png`
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
{ // - Missing .....
        id: 105571,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105570.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105571.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105570.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105571.png`
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
{ // - Missing .....
        id: 105581,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105580.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105581.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105580.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105581.png`
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
{ // - Missing .....
        id: 105591,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105590.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105591.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105590.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105591.png`
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
{ // - Missing .....
        id: 105601,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105600.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105601.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105600.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105601.png`
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
{ // - Missing .....
        id: 105611,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105610.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105611.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105610.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105611.png`
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
{ // - Missing .....
        id: 105621,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105620.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105621.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105620.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105621.png`
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
{ // - Missing .....
        id: 105631,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105630.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105631.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105630.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105631.png`
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
{ // - Missing .....
        id: 105641,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105640.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105641.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105640.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105641.png`
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
{ // - Missing .....
        id: 105651,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105650.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105651.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105650.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105651.png`
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
{ // - Missing .....
        id: 105661,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105660.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105661.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105660.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105661.png`
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
{ // - Missing .....
        id: 105671,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105670.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105671.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105670.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105671.png`
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
{ // - Missing .....
        id: 105681,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105680.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105681.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105680.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105681.png`
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
{ // - Missing .....
        id: 105691,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105690.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105691.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105690.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105691.png`
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
{ // - Missing .....
        id: 105701,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105700.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105701.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105700.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105701.png`
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
{ // - Missing .....
        id: 105711,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105710.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105711.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105710.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105711.png`
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
{ // - Missing .....
        id: 105721,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105720.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105721.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105720.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105721.png`
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
{ // - Missing .....
        id: 105731,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105730.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105731.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105730.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105731.png`
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
{ // - Missing .....
        id: 105741,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105740.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105741.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105740.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105741.png`
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
{ // - Missing .....
        id: 105751,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105750.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105751.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105750.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105751.png`
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
{ // - Missing .....
        id: 105761,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105760.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105761.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105760.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105761.png`
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
{ // - Missing .....
        id: 105771,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105770.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105771.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105770.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105771.png`
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
{ // - Missing .....
        id: 105781,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105780.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105781.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105780.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105781.png`
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
{ // - Missing .....
        id: 105791,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105790.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105791.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105790.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105791.png`
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
{ // - Missing .....
        id: 105801,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105800.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105801.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105800.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105801.png`
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
{ // - Missing .....
        id: 105811,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105810.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105811.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105810.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105811.png`
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
{ // - Missing .....
        id: 105821,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105820.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105821.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105820.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105821.png`
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
{ // - Missing .....
        id: 105831,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105830.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105831.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105830.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105831.png`
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
{ // - Missing .....
        id: 105841,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105840.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105841.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105840.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105841.png`
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
{ // - Missing .....
        id: 105851,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105850.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105851.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105850.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105851.png`
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
{ // - Missing .....
        id: 105861,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105860.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105861.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105860.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105861.png`
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
{ // - Missing .....
        id: 105871,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105870.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105871.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105870.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105871.png`
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
{ // - Missing .....
        id: 105881,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105880.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105881.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105880.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105881.png`
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
{ // - Missing .....
        id: 105891,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105890.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105891.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105890.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105891.png`
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
{ // - Missing .....
        id: 105901,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105900.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105901.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105900.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105901.png`
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
{ // - Missing .....
        id: 105911,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105910.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105911.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105910.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105911.png`
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
{ // - Missing .....
        id: 105921,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105920.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105921.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105920.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105921.png`
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
{ // - Missing .....
        id: 105931,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105930.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105931.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105930.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105931.png`
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
{ // - Missing .....
        id: 105941,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105940.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105941.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105940.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105941.png`
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
{ // - Missing .....
        id: 105951,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105950.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105951.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105950.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105951.png`
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
{ // - Missing .....
        id: 105961,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105960.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105961.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105960.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105961.png`
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
{ // - Missing .....
        id: 105971,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105970.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105971.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105970.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105971.png`
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
{ // - Missing .....
        id: 105981,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105980.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105981.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105980.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105981.png`
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
{ // - Missing .....
        id: 105991,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_105990.png`,
                detailmax: `/db/Equipment/Detail/item_detail_105991.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_105990.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_105991.png`
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
{ // - Missing .....
        id: 106001,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106000.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106001.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106000.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106001.png`
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
{ // - Missing .....
        id: 106011,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106010.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106011.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106010.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106011.png`
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
{ // - Missing .....
        id: 106021,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106020.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106021.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106020.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106021.png`
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
{ // - Missing .....
        id: 106031,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106030.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106031.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106030.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106031.png`
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
{ // - Missing .....
        id: 106041,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106040.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106041.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106040.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106041.png`
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
{ // - Missing .....
        id: 106051,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106050.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106051.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106050.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106051.png`
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
{ // - Missing .....
        id: 106061,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106060.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106061.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106060.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106061.png`
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
{ // - Missing .....
        id: 106071,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106070.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106071.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106070.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106071.png`
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
{ // - Missing .....
        id: 106081,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106080.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106081.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106080.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106081.png`
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
{ // - Missing .....
        id: 106091,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106090.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106091.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106090.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106091.png`
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
{ // - Missing .....
        id: 106101,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106100.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106101.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106100.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106101.png`
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
{ // - Missing .....
        id: 106111,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106110.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106111.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106110.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106111.png`
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
{ // - Missing .....
        id: 106121,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106120.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106121.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106120.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106121.png`
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
{ // - Missing .....
        id: 106131,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106130.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106131.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106130.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106131.png`
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
{ // - Missing .....
        id: 106141,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106140.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106141.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106140.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106141.png`
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
{ // - Missing .....
        id: 106151,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106150.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106151.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106150.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106151.png`
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
{ // - Missing .....
        id: 106161,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106160.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106161.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106160.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106161.png`
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
{ // - Missing ..... (109961 = Tenebrius EV Equip)
        id: 106171,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106170.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106171.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106170.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106171.png`
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
{ // - Missing .....
        id: 106181,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106180.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106181.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106180.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106181.png`
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
{ // - Missing .....
        id: 106191,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106190.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106191.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106190.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106191.png`
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
{ // - Missing .....
        id: 106201,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106200.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106201.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106200.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106201.png`
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
{ // - Missing .....
        id: 106211,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106210.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106211.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106210.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106211.png`
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
{ // - Missing .....
        id: 106221,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106220.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106221.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106220.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106221.png`
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
{ // - Missing .....
        id: 106231,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106230.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106231.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106230.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106231.png`
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
{ // - Missing .....
        id: 106241,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106240.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106241.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106240.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106241.png`
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
{ // - Missing .....
        id: 106251,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106250.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106251.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106250.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106251.png`
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
{ // - Missing .....
        id: 106261,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106260.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106261.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106260.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106261.png`
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
{ // - Missing .....
        id: 106271,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106270.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106271.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106270.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106271.png`
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
{ // - Missing .....
        id: 106281,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106280.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106281.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106280.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106281.png`
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
{ // - Missing .....
        id: 106291,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106290.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106291.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106290.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106291.png`
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
{ // - Missing .....
        id: 106301,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106300.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106301.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106300.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106301.png`
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
{ // - Missing .....
        id: 106311,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106310.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106311.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106310.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106311.png`
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
{ // - Missing .....
        id: 106321,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106320.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106321.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106320.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106321.png`
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
{ // - Missing .....
        id: 106331,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106330.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106331.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106330.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106331.png`
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
{ // - Missing .....
        id: 106341,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106340.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106341.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106340.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106341.png`
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
{ // - Missing .....
        id: 106351,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106350.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106351.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106350.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106351.png`
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
{ // - Missing .....
        id: 106361,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106360.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106361.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106360.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106361.png`
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
{ // - Missing .....
        id: 106371,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106370.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106371.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106370.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106371.png`
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
{ // - Missing .....
        id: 106381,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106380.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106381.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106380.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106381.png`
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
{ // - Missing .....
        id: 106391,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106390.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106391.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106390.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106391.png`
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
{ // - Missing .....
        id: 106401,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106400.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106401.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106400.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106401.png`
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
{ // - Missing .....
        id: 106411,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106410.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106411.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106410.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106411.png`
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
{ // - Missing .....
        id: 106421,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106420.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106421.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106420.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106421.png`
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
{ // - Missing .....
        id: 106431,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106430.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106431.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106430.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106431.png`
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
{ // - Missing .....
        id: 106441,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106440.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106441.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106440.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106441.png`
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
{ // - Missing .....
        id: 106451,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106450.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106451.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106450.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106451.png`
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
{ // - Missing .....
        id: 106461,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106460.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106461.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106460.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106461.png`
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
{ // - Missing .....
        id: 106471,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106470.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106471.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106470.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106471.png`
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
{ // - Missing .....
        id: 106481,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106480.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106481.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106480.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106481.png`
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
{ // - Missing .....
        id: 106491,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106490.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106491.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106490.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106491.png`
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
{ // - Missing .....
        id: 106501,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106500.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106501.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106500.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106501.png`
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
{ // - Missing .....
        id: 106511,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106510.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106511.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106510.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106511.png`
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
{ // - Missing .....
        id: 106521,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106520.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106521.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106520.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106521.png`
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
{ // - Missing .....
        id: 106531,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106530.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106531.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106530.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106531.png`
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
{ // - Missing .....
        id: 106541,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106540.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106541.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106540.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106541.png`
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
{ // - Missing .....
        id: 106551,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106550.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106551.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106550.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106551.png`
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
{ // - Missing .....
        id: 106581,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106580.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106581.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106580.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106581.png`
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
{ // - Missing .....
        id: 106591,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106590.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106591.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106590.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106591.png`
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
{ // - Missing .....
        id: 106601,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106600.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106601.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106600.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106601.png`
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
{ // - Missing .....
        id: 106611,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106610.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106611.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106610.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106611.png`
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
{ // - Missing .....
        id: 106621,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106620.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106621.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106620.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106621.png`
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
{ // - Missing .....
        id: 106631,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106630.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106631.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106630.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106631.png`
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
{ // - Missing .....
        id: 106641,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106640.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106641.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106640.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106641.png`
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
{ // - Missing .....
        id: 106651,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106650.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106651.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106650.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106651.png`
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
{ // - Missing .....
        id: 106661,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106660.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106661.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106660.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106661.png`
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
{ // - Missing ..... (109951 = Garm EV Equip)
        id: 106671,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106670.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106671.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106670.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106671.png`
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
{ // - Missing .....
        id: 106681,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106680.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106681.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106680.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106681.png`
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
{ // - Missing .....
        id: 106691,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106690.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106691.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106690.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106691.png`
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
{ // - Missing .....
        id: 106701,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106700.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106701.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106700.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106701.png`
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
{ // - Missing .....
        id: 106711,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106710.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106711.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106710.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106711.png`
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
{ // - Missing .....
        id: 106721,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106720.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106721.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106720.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106721.png`
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
{ // - Missing .....
        id: 106731,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106730.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106731.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106730.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106731.png`
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
{ // - Missing .....
        id: 106741,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106740.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106741.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106740.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106741.png`
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
{ // - Missing .....
        id: 106751,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106750.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106751.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106750.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106751.png`
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
{ // - Missing .....
        id: 106761,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106760.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106761.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106760.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106761.png`
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
{ // - Missing .....
        id: 106771,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106770.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106771.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106770.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106771.png`
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
{ // - Missing .....
        id: 106781,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106780.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106781.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106780.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106781.png`
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
{ // - Missing .....
        id: 106791,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106790.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106791.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106790.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106791.png`
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
{ // - Missing .....
        id: 106801,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106800.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106801.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106800.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106801.png`
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
{ // - Missing .....
        id: 106811,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106810.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106811.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106810.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106811.png`
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
{ // - Missing .....
        id: 106821,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106820.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106821.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106820.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106821.png`
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
{ // - Missing .....
        id: 106831,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106830.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106831.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106830.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106831.png`
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
{ // - Missing .....
        id: 106841,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106840.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106841.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106840.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106841.png`
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
{ // - Missing .....
        id: 106851,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106850.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106851.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106850.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106851.png`
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
{ // - Missing .....
        id: 106861,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106860.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106861.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106860.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106861.png`
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
{ // - Missing .....
        id: 106871,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106870.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106871.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106870.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106871.png`
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
{ // - Missing .....
        id: 106881,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106880.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106881.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106880.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106881.png`
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
{ // - Missing .....
        id: 106891,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106890.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106891.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106890.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106891.png`
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
{ // - Missing .....
        id: 106901,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106900.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106901.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106900.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106901.png`
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
{ // - Missing .....
        id: 106911,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106910.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106911.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106910.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106911.png`
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
{ // - Missing .....
        id: 106921,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106920.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106921.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106920.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106921.png`
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
{ // - Missing .....
        id: 106931,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106930.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106931.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106930.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106931.png`
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
{ // - Missing .....
        id: 106941,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106940.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106941.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106940.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106941.png`
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
{ // - Missing .....
        id: 106951,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106950.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106951.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106950.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106951.png`
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
{ // - Missing .....
        id: 106961,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106960.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106961.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106960.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106961.png`
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
{ // - Missing .....
        id: 106971,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106970.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106971.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106970.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106971.png`
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
{ // - Missing .....
        id: 106981,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106980.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106981.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106980.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106981.png`
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
{ // - Missing .....
        id: 106991,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_106990.png`,
                detailmax: `/db/Equipment/Detail/item_detail_106991.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_106990.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_106991.png`
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
{ // - Missing .....
        id: 107001,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107000.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107001.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107000.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107001.png`
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
{ // - Missing .....
        id: 107011,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107010.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107011.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107010.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107011.png`
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
{ // - Missing .....
        id: 107021,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107020.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107021.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107020.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107021.png`
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
{ // - Missing .....
        id: 107031,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107030.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107031.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107030.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107031.png`
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
{ // - Missing .....
        id: 107041,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107040.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107041.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107040.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107041.png`
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
{ // - Missing .....
        id: 107051,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107050.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107051.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107050.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107051.png`
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
{ // - Missing .....
        id: 107061,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107060.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107061.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107060.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107061.png`
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
{ // - Missing .....
        id: 107071,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107070.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107071.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107070.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107071.png`
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
{ // - Missing .....
        id: 107081,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107080.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107081.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107080.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107081.png`
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
{ // - Missing .....
        id: 107091,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107090.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107091.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107090.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107091.png`
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
{ // - Missing .....
        id: 107101,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107100.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107101.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107100.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107101.png`
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
{ // - Missing .....
        id: 107111,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107110.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107111.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107110.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107111.png`
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
{ // - Missing .....
        id: 107121,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107120.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107121.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107120.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107121.png`
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
{ // - Missing .....
        id: 107131,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107130.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107131.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107130.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107131.png`
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
{ // - Missing .....
        id: 107141,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107140.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107141.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107140.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107141.png`
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
{ // - Missing ..... (109561 = Ragsherum EV Equip)
        id: 107151,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107150.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107151.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107150.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107151.png`
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
{ // - Missing .....
        id: 107161,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107160.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107161.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107160.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107161.png`
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
{ // - Missing .....
        id: 107171,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107170.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107171.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107170.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107171.png`
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
{ // - Missing .....
        id: 107181,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107180.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107181.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107180.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107181.png`
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
{ // - Missing .....
        id: 107191,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107190.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107191.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107190.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107191.png`
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
{ // - Missing .....
        id: 107201,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107200.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107201.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107200.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107201.png`
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
{ // - Missing .....
        id: 107211,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107210.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107211.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107210.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107211.png`
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
{ // - Missing .....
        id: 107221,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107220.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107221.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107220.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107221.png`
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
{ // - Missing .....
        id: 107231,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107230.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107231.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107230.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107231.png`
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
{ // - Missing .....
        id: 107241,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107240.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107241.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107240.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107241.png`
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
{ // - Missing .....
        id: 107251,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107250.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107251.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107250.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107251.png`
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
{ // - Missing .....
        id: 107261,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107260.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107261.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107260.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107261.png`
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
{ // - Missing .....
        id: 107271,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107270.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107271.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107270.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107271.png`
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
{ // - Missing .....
        id: 107281,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107280.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107281.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107280.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107281.png`
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
{ // - Missing .....
        id: 107291,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107290.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107291.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107290.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107291.png`
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
{ // - Missing .....
        id: 107301,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107300.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107301.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107300.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107301.png`
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
{ // - Missing .....
        id: 107311,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107310.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107311.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107310.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107311.png`
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
{ // - Missing .....
        id: 107321,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107320.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107321.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107320.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107321.png`
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
{ // - Missing .....
        id: 107331,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107330.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107331.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107330.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107331.png`
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
{ // - Missing .....
        id: 107341,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107340.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107341.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107340.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107341.png`
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
{ // - Missing .....
        id: 107351,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107350.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107351.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107350.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107351.png`
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
{ // - Missing .....
        id: 107361,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107360.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107361.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107360.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107361.png`
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
{ // - Missing .....
        id: 107371,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107370.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107371.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107370.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107371.png`
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
{ // - Missing .....
        id: 107381,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107380.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107381.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107380.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107381.png`
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
{ // - Missing .....
        id: 107391,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107390.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107391.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107390.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107391.png`
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
{ // - Missing .....
        id: 107401,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107400.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107401.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107400.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107401.png`
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
{ // - Missing .....
        id: 107411,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107410.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107411.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107410.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107411.png`
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
{ // - Missing .....
        id: 107421,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107420.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107421.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107420.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107421.png`
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
{ // - Missing .....
        id: 107431,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107430.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107431.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107430.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107431.png`
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
{ // - Missing .....
        id: 107441,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107440.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107441.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107440.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107441.png`
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
{ // - Missing .....
        id: 107451,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107450.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107451.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107450.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107451.png`
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
{ // - Missing .....
        id: 107461,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107460.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107461.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107460.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107461.png`
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
{ // - Missing .....
        id: 107471,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107470.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107471.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107470.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107471.png`
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
{ // - Missing .....
        id: 107481,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107480.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107481.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107480.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107481.png`
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
{ // - Missing .....
        id: 107491,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107490.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107491.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107490.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107491.png`
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
{ // - Missing .....
        id: 107501,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107500.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107501.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107500.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107501.png`
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
{ // - Missing .....
        id: 107511,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107510.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107511.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107510.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107511.png`
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
{ // - Missing .....
        id: 107521,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107520.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107521.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107520.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107521.png`
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
{ // - Missing .....
        id: 107531,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107530.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107531.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107530.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107531.png`
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
{ // - Missing .....
        id: 107541,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107540.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107541.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107540.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107541.png`
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
{ // - Missing .....
        id: 107551,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107550.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107551.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107550.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107551.png`
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
{ // - Missing .....
        id: 107561,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107560.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107561.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107560.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107561.png`
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
{ // - Missing .....
        id: 107571,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107570.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107571.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107570.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107571.png`
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
{ // - Missing .....
        id: 107581,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107580.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107581.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107580.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107581.png`
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
{ // - Missing .....
        id: 107591,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107590.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107591.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107590.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107591.png`
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
{ // - Missing .....
        id: 107601,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107600.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107601.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107600.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107601.png`
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
{ // - Missing .....
        id: 107611,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107610.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107611.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107610.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107611.png`
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
{ // - Missing .....
        id: 107621,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107620.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107621.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107620.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107621.png`
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
{ // - Missing .....
        id: 107631,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107630.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107631.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107630.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107631.png`
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
{ // - Missing .....
        id: 107641,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107640.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107641.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107640.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107641.png`
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
{ // - Missing .....
        id: 107651,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107650.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107651.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107650.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107651.png`
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
{ // - Missing .....
        id: 107661,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107660.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107661.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107660.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107661.png`
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
{ // - Missing .....
        id: 107671,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107670.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107671.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107670.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107671.png`
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
{ // - Missing .....
        id: 107681,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107680.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107681.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107680.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107681.png`
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
{ // - Missing .....
        id: 107691,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107690.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107691.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107690.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107691.png`
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
{ // - Missing .....
        id: 107701,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107700.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107701.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107700.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107701.png`
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
{ // - Missing .....
        id: 107711,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107710.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107711.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107710.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107711.png`
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
{ // - Missing .....
        id: 107721,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107720.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107721.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107720.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107721.png`
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
{ // - Missing .....
        id: 107731,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107730.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107731.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107730.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107731.png`
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
{ // - Missing .....
        id: 107741,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107740.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107741.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107740.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107741.png`
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
{ // - Missing .....
        id: 107751,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107750.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107751.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107750.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107751.png`
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
{ // - Missing .....
        id: 107761,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107760.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107761.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107760.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107761.png`
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
{ // - Missing .....
        id: 107771,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107770.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107771.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107770.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107771.png`
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
{ // - Missing .....
        id: 107781,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107780.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107781.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107780.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107781.png`
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
{ // - Missing .....
        id: 107791,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107790.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107791.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107790.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107791.png`
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
{ // - Missing .....
        id: 107801,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107800.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107801.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107800.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107801.png`
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
{ // - Missing .....
        id: 107811,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107810.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107811.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107810.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107811.png`
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
{ // - Missing .....
        id: 107821,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107820.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107821.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107820.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107821.png`
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
{ // - Missing .....
        id: 107831,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107830.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107831.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107830.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107831.png`
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
{ // - Missing .....
        id: 107841,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107840.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107841.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107840.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107841.png`
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
{ // - Missing .....
        id: 107851,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107850.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107851.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107850.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107851.png`
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
{ // - Missing .....
        id: 107861,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107860.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107861.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107860.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107861.png`
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
{ // - Missing .....
        id: 107871,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107870.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107871.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107870.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107871.png`
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
{ // - Missing .....
        id: 107881,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107880.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107881.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107880.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107881.png`
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
{ // - Missing .....
        id: 107891,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107890.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107891.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107890.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107891.png`
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
{ // - Missing .....
        id: 107901,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107900.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107901.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107900.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107901.png`
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
{ // - Missing .....
        id: 107911,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107910.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107911.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107910.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107911.png`
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
{ // - Missing .....
        id: 107921,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107920.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107921.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107920.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107921.png`
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
{ // - Missing .....
        id: 107931,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107930.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107931.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107930.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107931.png`
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
{ // - Missing .....
        id: 107941,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107940.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107941.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107940.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107941.png`
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
{ // - Missing .....
        id: 107951,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107950.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107951.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107950.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107951.png`
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
{ // - Missing .....
        id: 107961,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107960.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107961.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107960.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107961.png`
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
{ // - Missing .....
        id: 107971,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107970.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107971.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107970.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107971.png`
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
{ // - Missing .....
        id: 107981,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107980.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107981.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107980.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107981.png`
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
{ // - Missing .....
        id: 107991,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_107990.png`,
                detailmax: `/db/Equipment/Detail/item_detail_107991.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_107990.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_107991.png`
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
{ // - Missing .....
        id: 108001,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108000.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108001.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108000.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108001.png`
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
{ // - Missing .....
        id: 108011,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108010.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108011.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108010.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108011.png`
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
{ // - Missing .....
        id: 108021,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108020.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108021.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108020.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108021.png`
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
{ // - Missing .....
        id: 108031,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108030.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108031.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108030.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108031.png`
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
{ // - Missing .....
        id: 108041,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108040.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108041.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108040.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108041.png`
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
{ // - Missing .....
        id: 108051,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108050.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108051.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108050.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108051.png`
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
{ // - Missing .....
        id: 108061,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108060.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108061.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108060.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108061.png`
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
{ // - Missing .....
        id: 108071,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108070.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108071.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108070.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108071.png`
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
{ // - Missing .....
        id: 108081,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108080.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108081.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108080.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108081.png`
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
{ // - Missing .....
        id: 108091,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108090.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108091.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108090.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108091.png`
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
{ // - Missing .....
        id: 108101,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108100.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108101.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108100.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108101.png`
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
{ // - Missing .....
        id: 108111,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108110.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108111.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108110.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108111.png`
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
{ // - Missing .....
        id: 108121,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108120.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108121.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108120.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108121.png`
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
{ // - Missing .....
        id: 108131,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108130.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108131.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108130.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108131.png`
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
{ // - Missing .....
        id: 108141,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108140.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108141.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108140.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108141.png`
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
{ // - Missing .....
        id: 108151,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108150.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108151.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108150.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108151.png`
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
{ // - Missing .....
        id: 108161,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108160.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108161.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108160.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108161.png`
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
{ // - Missing .....
        id: 108171,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108170.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108171.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108170.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108171.png`
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
{ // - Missing .....
        id: 108181,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108180.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108181.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108180.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108181.png`
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
{ // - Missing .....
        id: 108191,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108190.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108191.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108190.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108191.png`
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
{ // - Missing .....
        id: 108201,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108200.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108201.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108200.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108201.png`
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
{ // - Missing .....
        id: 108211,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108210.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108211.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108210.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108211.png`
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
{ // - Missing .....
        id: 108221,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108220.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108221.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108220.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108221.png`
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
{ // - Missing .....
        id: 108231,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108230.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108231.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108230.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108231.png`
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
{ // - Missing .....
        id: 108241,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108240.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108241.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108240.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108241.png`
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
{ // - Missing .....
        id: 108251,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108250.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108251.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108250.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108251.png`
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
{ // - Missing .....
        id: 108261,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108260.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108261.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108260.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108261.png`
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
{ // - Missing .....
        id: 108271,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108270.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108271.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108270.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108271.png`
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
{ // - Missing .....
        id: 108281,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108280.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108281.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108280.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108281.png`
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
{ // - Missing .....
        id: 108291,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108290.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108291.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108290.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108291.png`
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
{ // - Missing .....
        id: 108301,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108300.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108301.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108300.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108301.png`
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
{ // - Missing .....
        id: 108311,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108310.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108311.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108310.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108311.png`
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
{ // - Missing .....
        id: 108321,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108320.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108321.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108320.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108321.png`
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
{ // - Missing .....
        id: 108331,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108330.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108331.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108330.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108331.png`
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
{ // - Missing .....
        id: 108341,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108340.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108341.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108340.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108341.png`
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
{ // - Missing .....
        id: 108351,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108350.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108351.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108350.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108351.png`
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
{ // - Missing .....
        id: 108361,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108360.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108361.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108360.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108361.png`
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
{ // - Missing .....
        id: 108371,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108370.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108371.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108370.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108371.png`
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
{ // - Missing .....
        id: 108381,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108380.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108381.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108380.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108381.png`
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
{ // - Missing .....
        id: 108391,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108390.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108391.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108390.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108391.png`
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
{ // - Missing .....
        id: 108401,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108400.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108401.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108400.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108401.png`
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
{ // - Missing .....
        id: 108411,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108410.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108411.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108410.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108411.png`
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
{ // - Missing .....
        id: 108421,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108420.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108421.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108420.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108421.png`
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
{ // - Missing .....
        id: 108431,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108430.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108431.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108430.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108431.png`
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
{ // - Missing .....
        id: 108441,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108440.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108441.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108440.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108441.png`
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
{ // - Missing .....
        id: 108451,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108450.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108451.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108450.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108451.png`
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
{ // - Missing .....
        id: 108461,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108460.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108461.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108460.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108461.png`
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
{ // - Missing .....
        id: 108471,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108470.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108471.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108470.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108471.png`
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
{ // - Missing .....
        id: 108481,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108480.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108481.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108480.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108481.png`
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
{ // - Missing .....
        id: 108491,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108490.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108491.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108490.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108491.png`
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
{ // - Missing .....
        id: 108501,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108500.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108501.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108500.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108501.png`
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
{ // - Missing .....
        id: 108511,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108510.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108511.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108510.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108511.png`
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
{ // - Missing .....
        id: 108521,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108520.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108521.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108520.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108521.png`
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
{ // - Missing .....
        id: 108541,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108540.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108541.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108540.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108541.png`
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
{ // - Missing .....
        id: 108551,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108550.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108551.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108550.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108551.png`
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
{ // - Missing .....
        id: 108561,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108560.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108561.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108560.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108561.png`
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
{ // - Missing .....
        id: 108571,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108570.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108571.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108570.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108571.png`
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
{ // - Missing .....
        id: 108581,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108580.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108581.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108580.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108581.png`
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
{ // - Missing .....
        id: 108591,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108590.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108591.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108590.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108591.png`
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
{ // - Missing .....
        id: 108601,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108600.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108601.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108600.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108601.png`
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
{ // - Missing .....
        id: 108631,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108630.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108631.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108630.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108631.png`
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
{ // - Missing .....
        id: 108641,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108640.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108641.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108640.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108641.png`
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
{ // - Missing .....
        id: 108651,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108650.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108651.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108650.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108651.png`
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
{ // - Missing .....
        id: 108661,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108660.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108661.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108660.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108661.png`
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
{ // - Missing .....
        id: 108671,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108670.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108671.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108670.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108671.png`
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
{ // - Missing .....
        id: 108681,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108680.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108681.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108680.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108681.png`
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
{ // - Missing .....
        id: 108691,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108690.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108691.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108690.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108691.png`
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
{ // - Missing .....
        id: 108701,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108700.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108701.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108700.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108701.png`
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
{ // - Missing .....
        id: 108711,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108710.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108711.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108710.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108711.png`
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
{ // - Missing .....
        id: 108721,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108720.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108721.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108720.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108721.png`
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
{ // - Missing .....
        id: 108731,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108730.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108731.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108730.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108731.png`
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
{ // - Missing .....
        id: 108741,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108740.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108741.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108740.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108741.png`
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
{ // - Missing .....
        id: 108751,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108750.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108751.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108750.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108751.png`
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
{ // - Missing .....
        id: 108761,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108760.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108761.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108760.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108761.png`
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
{ // - Missing .....
        id: 108771,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108770.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108771.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108770.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108771.png`
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
{ // - Missing .....
        id: 108781,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108780.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108781.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108780.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108781.png`
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
{ // - Missing .....
        id: 108791,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108790.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108791.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108790.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108791.png`
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
{ // - Missing .....
        id: 108801,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108800.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108801.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108800.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108801.png`
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
{ // - Missing .....
        id: 108811,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108810.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108811.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108810.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108811.png`
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
{ // - Missing .....
        id: 108821,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108820.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108821.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108820.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108821.png`
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
{ // - Missing .....
        id: 108831,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108830.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108831.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108830.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108831.png`
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
{ // - Missing .....
        id: 108841,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108840.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108841.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108840.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108841.png`
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
{ // - Missing .....
        id: 108851,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108850.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108851.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108850.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108851.png`
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
{ // - Missing .....
        id: 108861,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108860.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108861.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108860.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108861.png`
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
{ // - Missing .....
        id: 108871,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108870.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108871.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108870.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108871.png`
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
{ // - Missing .....
        id: 108881,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108880.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108881.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108880.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108881.png`
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
{ // - Missing .....
        id: 108891,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108890.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108891.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108890.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108891.png`
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
{ // - Missing .....
        id: 108901,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108900.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108901.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108900.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108901.png`
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
{ // - Missing .....
        id: 108911,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108910.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108911.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108910.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108911.png`
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
{ // - Missing .....
        id: 108921,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108920.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108921.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108920.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108921.png`
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
{ // - Missing .....
        id: 108931,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108930.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108931.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108930.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108931.png`
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
{ // - Missing .....
        id: 108941,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108940.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108941.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108940.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108941.png`
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
{ // - Missing .....
        id: 108951,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108950.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108951.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108950.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108951.png`
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
{ // - Missing .....
        id: 108961,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108960.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108961.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108960.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108961.png`
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
{ // - Missing .....
        id: 108971,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108970.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108971.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108970.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108971.png`
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
{ // - Missing .....
        id: 108981,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108980.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108981.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108980.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108981.png`
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
{ // - Missing .....
        id: 108991,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_108990.png`,
                detailmax: `/db/Equipment/Detail/item_detail_108991.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_108990.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_108991.png`
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
{ // - Missing ..... (109011 = Palamicia EV Equip)
        id: 109001,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109000.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109001.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109000.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109001.png`
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
{ // - Missing .....
        id: 109021,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109020.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109021.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109020.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109021.png`
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
{ // - Missing .....
        id: 109031,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109030.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109031.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109030.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109031.png`
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
{ // - Missing .....
        id: 109041,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109040.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109041.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109040.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109041.png`
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
{ // - Missing .....
        id: 109051,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109050.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109051.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109050.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109051.png`
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
{ // - Missing .....
        id: 109061,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109060.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109061.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109060.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109061.png`
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
{ // - Missing .....
        id: 109071,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109070.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109071.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109070.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109071.png`
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
{ // - Missing .....
        id: 109081,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109080.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109081.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109080.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109081.png`
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
{ // - Missing .....
        id: 109091,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109090.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109091.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109090.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109091.png`
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
{ // - Missing .....
        id: 109101,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109100.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109101.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109100.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109101.png`
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
{ // - Missing .....
        id: 109111,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109110.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109111.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109110.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109111.png`
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
{ // - Missing .....
        id: 109121,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109120.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109121.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109120.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109121.png`
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
{ // - Missing .....
        id: 109131,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109130.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109131.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109130.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109131.png`
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
{ // - Missing .....
        id: 109141,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109140.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109141.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109140.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109141.png`
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
{ // - Missing .....
        id: 109151,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109150.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109151.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109150.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109151.png`
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
{ // - Missing .....
        id: 109161,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109160.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109161.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109160.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109161.png`
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
{ // - Missing .....
        id: 109171,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109170.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109171.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109170.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109171.png`
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
{ // - Missing .....
        id: 109181,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109180.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109181.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109180.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109181.png`
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
{ // - Missing .....
        id: 109191,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109190.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109191.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109190.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109191.png`
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
{ // - Missing .....
        id: 109201,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109200.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109201.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109200.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109201.png`
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
{ // - Missing .....
        id: 109211,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109210.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109211.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109210.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109211.png`
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
{ // - Missing .....
        id: 109221,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109220.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109221.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109220.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109221.png`
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
{ // - Missing .....
        id: 109231,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109230.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109231.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109230.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109231.png`
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
{ // - Missing .....
        id: 109241,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109240.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109241.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109240.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109241.png`
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
{ // - Missing .....
        id: 109251,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109250.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109251.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109250.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109251.png`
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
{ // - Missing .....
        id: 109261,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109260.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109261.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109260.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109261.png`
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
{ // - Missing .....
        id: 109271,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109270.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109271.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109270.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109271.png`
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
{ // - Missing .....
        id: 109281,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109280.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109281.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109280.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109281.png`
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
{ // - Missing .....
        id: 109291,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109290.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109291.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109290.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109291.png`
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
{ // - Missing ..... (109311 = Dark Helmet (Emi?) EV Equip)
        id: 109301,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109300.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109301.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109300.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109301.png`
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
{ // - Missing .....
        id: 109321,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109320.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109321.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109320.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109321.png`
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
{ // - Missing .....
        id: 109331,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109330.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109331.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109330.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109331.png`
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
{ // - Missing .....
        id: 109341,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109340.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109341.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109340.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109341.png`
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
{ // - Missing .....
        id: 109351,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109350.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109351.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109350.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109351.png`
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
{ // - Missing .....
        id: 109361,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109360.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109361.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109360.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109361.png`
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
{ // - Missing .....
        id: 109371,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109370.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109371.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109370.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109371.png`
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
{ // - Missing .....
        id: 109381,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109380.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109381.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109380.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109381.png`
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
{ // - Missing .....
        id: 109391,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109390.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109391.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109390.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109391.png`
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
{ // - Missing .....
        id: 109401,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109400.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109401.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109400.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109401.png`
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
{ // - Missing .....
        id: 109411,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109410.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109411.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109410.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109411.png`
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
{ // - Missing .....
        id: 109421,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109420.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109421.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109420.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109421.png`
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
{ // - Missing .....
        id: 109431,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109430.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109431.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109430.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109431.png`
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
{ // - Missing .....
        id: 109441,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109440.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109441.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109440.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109441.png`
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
{ // - Missing .....
        id: 109451,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109450.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109451.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109450.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109451.png`
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
{ // - Missing .....
        id: 109461,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109460.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109461.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109460.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109461.png`
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
{ // - Missing .....
        id: 109471,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109470.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109471.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109470.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109471.png`
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
{ // - Missing .....
        id: 109481,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109480.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109481.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109480.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109481.png`
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
{ // - Missing .....
        id: 109491,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109490.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109491.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109490.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109491.png`
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
{ // - Missing .....
        id: 109501,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109500.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109501.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109500.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109501.png`
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
{ // - Missing .....
        id: 109511,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109510.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109511.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109510.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109511.png`
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
{ // - Missing .....
        id: 109521,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109520.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109521.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109520.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109521.png`
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
{ // - Missing .....
        id: 109531,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109530.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109531.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109530.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109531.png`
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
{ // - Missing .....
        id: 109541,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109540.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109541.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109540.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109541.png`
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
{ // - Missing .....
        id: 109551,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109550.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109551.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109550.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109551.png`
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
{ // - Missing .....
        id: 109571,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109570.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109571.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109570.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109571.png`
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
{ // - Missing .....
        id: 109581,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109580.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109581.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109580.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109581.png`
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
{ // - Missing .....
        id: 109591,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109590.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109591.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109590.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109591.png`
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
{ // - Missing .....
        id: 109601,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109600.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109601.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109600.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109601.png`
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
{ // - Missing .....
        id: 109611,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109610.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109611.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109610.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109611.png`
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
{ // - Missing .....
        id: 109621,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109620.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109621.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109620.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109621.png`
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
{ // - Missing .....
        id: 109631,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109630.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109631.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109630.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109631.png`
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
{ // - Missing .....
        id: 109641,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109640.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109641.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109640.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109641.png`
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
{ // - Missing .....
        id: 109651,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109650.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109651.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109650.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109651.png`
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
{ // - Missing .....
        id: 109661,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109660.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109661.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109660.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109661.png`
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
{ // - Missing .....
        id: 109671,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109670.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109671.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109670.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109671.png`
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
{ // - Missing .....
        id: 109681,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109680.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109681.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109680.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109681.png`
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
{ // - Missing .....
        id: 109691,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109690.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109691.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109690.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109691.png`
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
{ // - Missing .....
        id: 109701,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109700.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109701.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109700.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109701.png`
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
{ // - Missing .....
        id: 109711,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109710.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109711.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109710.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109711.png`
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
{ // - Missing .....
        id: 109721,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109720.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109721.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109720.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109721.png`
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
{ // - Missing .....
        id: 109731,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109730.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109731.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109730.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109731.png`
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
{ // - Missing .....
        id: 109741,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109740.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109741.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109740.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109741.png`
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
{ // - Missing .....
        id: 109751,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109750.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109751.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109750.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109751.png`
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
{ // - Missing .....
        id: 109761,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109760.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109761.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109760.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109761.png`
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
{ // - Missing .....
        id: 109771,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109770.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109771.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109770.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109771.png`
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
{ // - Missing .....
        id: 109781,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109780.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109781.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109780.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109781.png`
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
{ // - Missing .....
        id: 109791,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109790.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109791.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109790.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109791.png`
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
{ // - Missing .....
        id: 109801,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109800.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109801.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109800.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109801.png`
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
{ // - Missing .....
        id: 109811,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109810.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109811.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109810.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109811.png`
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
{ // - Missing .....
        id: 109821,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109820.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109821.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109820.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109821.png`
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
{ // - Missing .....
        id: 109831,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109830.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109831.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109830.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109831.png`
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
{ // - Missing .....
        id: 109841,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109840.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109841.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109840.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109841.png`
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
{ // - Missing .....
        id: 109851,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109850.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109851.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109850.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109851.png`
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
{ // - Missing .....
        id: 109861,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109860.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109861.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109860.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109861.png`
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
{ // - Missing .....
        id: 109871,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109870.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109871.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109870.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109871.png`
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
{ // - Missing .....
        id: 109881,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109880.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109881.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109880.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109881.png`
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
{ // - Missing .....
        id: 109891,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109890.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109891.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109890.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109891.png`
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
{ // - Missing ..... (109941 = Emi EV Equip)
        id: 109901,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109900.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109901.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109900.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109901.png`
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
{ // - Missing .....
        id: 109911,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109910.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109911.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109910.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109911.png`
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
{ //Ghost Shield 'Tenebrae Lux' EV - Complete (JP)
        id: 109961,
        name: `Ghost Shield 'Tenebrae Lux' EV`,
        type: `/db/Mines/thumbnail/defLB.png`,
        star: 5,
        image: 
            {
                detail: ``,
                detailmax: `/db/Equipment/Detail/item_detail_109961.png`,
                thumb: ``,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109961.png`
            },
        stats:
            {
                hp: 500,
                atk: 500,
                def: 500
            },
        skillset:  
            {
                skill: `5s CT - For 10s, all Allies gain a DMG barrier that negates 250 DMG. Heal all Allies' HP by 25.`,
                break: 0
            },
        passive: 
            {
                ability1: `Increase Seal RES by 10%.`,
                ability2: [`Increase DEF by 30% when under a barrier.`, `When HP is above 90%, Increase ATK by 15%.`, `Increase MAG RES by 5%.`, `When HP is above 90%, Increase ATK by 10%.`, `Increase Accuracy by 10%.`, `Increase Status Ailment RES (Except Faint) by 10%.`]
            },
        lore: `Currently unreleased in Global`
    },
{ // - Missing .....
        id: 109971,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109970.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109971.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109970.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109971.png`
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
{ // - Missing .....
        id: 109981,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109980.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109981.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109980.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109981.png`
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
{ // - Missing .....
        id: 109991,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_109990.png`,
                detailmax: `/db/Equipment/Detail/item_detail_109991.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_109990.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_109991.png`
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
{ // - Missing .....
        id: 110001,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110000.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110001.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110000.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110001.png`
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
{ // - Missing .....
        id: 110011,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110010.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110011.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110010.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110011.png`
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
{ // - Missing .....
        id: 110021,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110020.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110021.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110020.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110021.png`
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
{ // - Missing .....
        id: 110031,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110030.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110031.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110030.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110031.png`
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
{ // - Missing .....
        id: 110041,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110040.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110041.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110040.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110041.png`
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
{ // - Missing ..... (110061 = Flogassa EV Equip)
        id: 110051,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110050.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110051.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110050.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110051.png`
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
{ // - Missing .....
        id: 110091,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110090.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110091.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110090.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110091.png`
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
{ // - Missing .....
        id: 110101,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110100.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110101.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110100.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110101.png`
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
{ // - Missing .....
        id: 110111,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110110.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110111.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110110.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110111.png`
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
{ // - Missing .....
        id: 110121,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110120.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110121.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110120.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110121.png`
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
{ // - Missing .....
        id: 110131,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110130.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110131.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110130.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110131.png`
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
{ // - Missing .....
        id: 110141,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110140.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110141.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110140.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110141.png`
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
{ // - Missing .....
        id: 110151,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110150.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110151.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110150.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110151.png`
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
{ // - Missing .....
        id: 110161,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110160.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110161.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110160.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110161.png`
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
{ // - Missing .....
        id: 110171,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110170.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110171.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110170.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110171.png`
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
{ // - Missing .....
        id: 110181,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110180.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110181.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110180.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110181.png`
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
{ // - Missing .....
        id: 110191,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110190.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110191.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110190.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110191.png`
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
{ // - Missing .....
        id: 110201,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110200.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110201.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110200.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110201.png`
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
{ // - Missing .....
        id: 110211,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110210.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110211.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110210.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110211.png`
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
{ // - Missing .....
        id: 110221,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110220.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110221.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110220.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110221.png`
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
{ // - Missing .....
        id: 110231,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110230.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110231.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110230.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110231.png`
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
{ // - Missing .....
        id: 110241,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110240.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110241.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110240.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110241.png`
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
{ // - Missing .....
        id: 110251,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110250.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110251.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110250.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110251.png`
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
{ // - Missing .....
        id: 110261,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110260.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110261.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110260.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110261.png`
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
{ // - Missing .....
        id: 110271,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110270.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110271.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110270.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110271.png`
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
{ // - Missing .....
        id: 110281,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110280.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110281.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110280.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110281.png`
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
{ // - Missing .....
        id: 110291,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110290.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110291.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110290.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110291.png`
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
{ // - Missing .....
        id: 110301,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110300.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110301.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110300.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110301.png`
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
{ // - Missing .....
        id: 110311,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110310.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110311.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110310.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110311.png`
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
{ // - Missing .....
        id: 110321,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110320.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110321.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110320.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110321.png`
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
{ // - Missing .....
        id: 110331,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110330.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110331.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110330.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110331.png`
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
{ // - Missing .....
        id: 110341,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110340.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110341.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110340.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110341.png`
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
{ // - Missing .....
        id: 110351,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110350.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110351.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110350.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110351.png`
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
{ // - Missing .....
        id: 110361,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110360.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110361.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110360.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110361.png`
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
{ // - Missing .....
        id: 110371,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110370.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110371.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110370.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110371.png`
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
{ // - Missing .....
        id: 110381,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110380.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110381.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110380.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110381.png`
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
{ // - Missing .....
        id: 110391,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110390.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110391.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110390.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110391.png`
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
{ // - Missing .....
        id: 110401,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110400.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110401.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110400.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110401.png`
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
{ // - Missing .....
        id: 110411,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110410.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110411.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110410.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110411.png`
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
{ // - Missing .....
        id: 110421,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110420.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110421.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110420.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110421.png`
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
{ // - Missing .....
        id: 110431,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110430.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110431.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110430.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110431.png`
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
{ // - Missing .....
        id: 110441,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110440.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110441.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110440.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110441.png`
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
{ // - Missing .....
        id: 110451,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110450.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110451.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110450.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110451.png`
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
{ // - Missing .....
        id: 110461,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110460.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110461.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110460.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110461.png`
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
{ // - Missing .....
        id: 110471,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110470.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110471.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110470.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110471.png`
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
{ // - Missing .....
        id: 110481,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110480.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110481.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110480.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110481.png`
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
{ // - Missing .....
        id: 110491,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110490.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110491.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110490.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110491.png`
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
{ // - Missing .....
        id: 110501,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110500.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110501.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110500.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110501.png`
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
{ // - Missing .....
        id: 110511,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110510.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110511.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110510.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110511.png`
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
{ // - Missing .....
        id: 110521,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110520.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110521.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110520.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110521.png`
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
{ // - Missing .....
        id: 110531,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110530.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110531.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110530.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110531.png`
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
{ // - Missing .....
        id: 110541,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110540.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110541.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110540.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110541.png`
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
{ // - Missing .....
        id: 110551,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110550.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110551.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110550.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110551.png`
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
{ // - Missing .....
        id: 110561,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110560.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110561.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110560.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110561.png`
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
{ // - Missing .....
        id: 110571,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110570.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110571.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110570.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110571.png`
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
{ // - Missing .....
        id: 110581,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110580.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110581.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110580.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110581.png`
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
{ // - Missing .....
        id: 110591,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110590.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110591.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110590.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110591.png`
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
{ // - Missing .....
        id: 110601,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110600.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110601.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110600.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110601.png`
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
{ // - Missing .....
        id: 110611,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110610.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110611.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110610.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110611.png`
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
{ // - Missing .....
        id: 110621,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110620.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110621.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110620.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110621.png`
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
{ // - Missing .....
        id: 110631,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110630.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110631.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110630.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110631.png`
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
{ // - Missing .....
        id: 110641,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110640.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110641.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110640.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110641.png`
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
{ // - Missing .....
        id: 110651,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110650.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110651.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110650.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110651.png`
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
{ // - Missing .....
        id: 110661,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110660.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110661.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110660.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110661.png`
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
{ // - Missing .....
        id: 110671,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110670.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110671.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110670.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110671.png`
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
{ // - Missing .....
        id: 110681,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110680.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110681.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110680.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110681.png`
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
{ // - Missing .....
        id: 110691,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110690.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110691.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110690.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110691.png`
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
{ // - Missing .....
        id: 110701,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110700.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110701.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110700.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110701.png`
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
{ // - Missing .....
        id: 110711,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110710.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110711.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110710.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110711.png`
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
{ // - Missing .....
        id: 110721,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110720.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110721.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110720.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110721.png`
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
{ // - Missing .....
        id: 110731,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110730.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110731.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110730.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110731.png`
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
{ // - Missing .....
        id: 110741,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110740.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110741.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110740.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110741.png`
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
{ // - Missing .....
        id: 110751,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110750.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110751.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110750.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110751.png`
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
{ // - Missing .....
        id: 110761,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110760.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110761.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110760.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110761.png`
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
{ // - Missing .....
        id: 110771,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110770.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110771.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110770.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110771.png`
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
{ // - Missing .....
        id: 110781,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110780.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110781.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110780.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110781.png`
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
{ // - Missing .....
        id: 110791,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110790.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110791.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110790.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110791.png`
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
{ // - Missing .....
        id: 110801,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110800.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110801.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110800.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110801.png`
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
{ // - Missing .....
        id: 110811,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110810.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110811.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110810.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110811.png`
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
{ // - Missing .....
        id: 110821,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110820.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110821.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110820.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110821.png`
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
{ // - Missing .....
        id: 110831,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110830.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110831.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110830.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110831.png`
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
{ // - Missing .....
        id: 110841,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110840.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110841.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110840.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110841.png`
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
{ // - Missing .....
        id: 110851,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110850.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110851.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110850.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110851.png`
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
{ // - Missing .....
        id: 110861,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110860.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110861.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110860.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110861.png`
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
{ // - Missing .....
        id: 110871,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110870.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110871.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110870.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110871.png`
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
{ // - Missing .....
        id: 110881,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110880.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110881.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110880.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110881.png`
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
{ // - Missing .....
        id: 110891,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110890.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110891.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110890.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110891.png`
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
{ // - Missing .....
        id: 110901,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110900.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110901.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110900.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110901.png`
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
{ // - Missing .....
        id: 110911,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110910.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110911.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110910.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110911.png`
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
{ // - Missing .....
        id: 110921,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110920.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110921.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110920.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110921.png`
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
{ // - Missing .....
        id: 110931,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110930.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110931.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110930.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110931.png`
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
{ // - Missing .....
        id: 110941,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110940.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110941.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110940.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110941.png`
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
{ // - Missing .....
        id: 110951,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110950.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110951.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110950.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110951.png`
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
{ // - Missing .....
        id: 110961,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110960.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110961.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110960.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110961.png`
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
{ // - Missing .....
        id: 110971,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110970.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110971.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110970.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110971.png`
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
{ // - Missing .....
        id: 110981,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110980.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110981.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110980.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110981.png`
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
{ // - Missing .....
        id: 110991,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_110990.png`,
                detailmax: `/db/Equipment/Detail/item_detail_110991.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_110990.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_110991.png`
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
{ // - Missing .....
        id: 111001,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111000.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111001.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111000.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111001.png`
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
{ // - Missing .....
        id: 111031,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111030.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111031.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111030.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111031.png`
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
{ // - Missing .....
        id: 111041,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111040.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111041.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111040.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111041.png`
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
{ // - Missing .....
        id: 111051,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111050.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111051.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111050.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111051.png`
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
{ // - Missing .....
        id: 111061,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111060.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111061.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111060.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111061.png`
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
{ // - Missing .....
        id: 111071,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111070.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111071.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111070.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111071.png`
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
{ // - Missing .....
        id: 111081,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111080.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111081.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111080.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111081.png`
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
{ // - Missing .....
        id: 111091,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111090.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111091.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111090.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111091.png`
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
{ // - Missing .....
        id: 111101,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111100.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111101.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111100.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111101.png`
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
{ // - Missing .....
        id: 111111,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111110.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111111.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111110.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111111.png`
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
{ // - Missing .....
        id: 111121,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111120.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111121.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111120.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111121.png`
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
{ // - Missing .....
        id: 111131,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111130.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111131.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111130.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111131.png`
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
{ // - Missing .....
        id: 111141,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111140.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111141.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111140.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111141.png`
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
{ // - Missing .....
        id: 111151,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111150.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111151.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111150.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111151.png`
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
{ // - Missing .....
        id: 111161,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111160.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111161.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111160.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111161.png`
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
{ // - Missing .....
        id: 111171,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111170.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111171.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111170.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111171.png`
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
{ // - Missing .....
        id: 111181,
        name: `Placeholder`,
        type: `/db/Mines/thumbnail/LB.png`,
        star: 5,
        image: 
            {
                detail: `/db/Equipment/Detail/item_detail_111180.png`,
                detailmax: `/db/Equipment/Detail/item_detail_111181.png`,
                thumb: `/db/Equipment/Thumbnail/item_thumbnail_111180.png`,
                thumbmax: `/db/Equipment/Thumbnail/item_thumbnail_111181.png`
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

