/**
 * FORMAT, do not forget COMMAS
 * 
 * TODO: Add Slot 1, icon, Slot 2, icon, Slot3 icon
 * TODO: Add Evo Mat 1 to 5, and Amount for each 
 * 
 * {
        id: ,
        name: ,
        attribute: ,
        type: ,
        image: 
            {
                detail5: ,
                detailawk: "/db/Units/Detail/unit_detail_.png",
                thumb5: ,
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    }

    /db/Mines/thumbnail/physLB.png
    /db/Mines/thumbnail/magLB.png
    /db/Mines/thumbnail/defLB.png
    /db/Mines/thumbnail/healLB.png
    /db/Mines/thumbnail/suppLB.png

 */

const UnitInformation = [
    { //Clyde - Complete
        id: 100016111,
        name: "Clyde",
        attribute: "Fire",
        type: "Human",
        image: 
            {
                detailawk: "/db/Units/Detail/unit_detail_100016111.png",
                thumb2: "/db/Units/Thumbnail/unit_thumbnail_100012111.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100013111.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100014111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100015111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100016111.png",
                detail2: "/db/Units/Detail/unit_detail_100012111.png",
                detail3: "/db/Units/Detail/unit_detail_100013111.png",
                detail4: "/db/Units/Detail/unit_detail_100014111.png",
                detail5: "/db/Units/Detail/unit_detail_100015111.png"
            },
        skillset: 
            {
                skill: "7s CT - 2000% Fire DMG (PHY).",
                skillbreak: 1500,
                arts: "10000% Fire DMG (PHY). Chance to inflict Burn.",
                artsbreak: 2200,
                truearts: "22000% Fire DMG (PHY). Chance to inflict Burn. Increase Allies' Arts by 20. ",
                trueartsbreak: 4800
            },
        passive: 
            {
                ability1: "Increase Fire Allies' BE generation by 20%.",
                ability2: "Increase Fire Allies' DMG by 30%."
            },
        stats: 
            {
                hp: 6960,
                hpplus: 999,
                atk: 2772,
                atkplus: 425,
                def: 2138,
                defplus: 330
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 3,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire1.png",
                    mat2amt: 2
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat3amt: 1,
                    hover3: "Degilmagna"
                }
            },
        trueweapon: 
            {
                name: "Gradion",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "/db/Equipment/Detail/item_detail_103371.png",
                skill: "60s CT - 7000% Fire DMG (PHY). For 8s, increase own Critical Rate by 100% against Burned Enemies.",
                skillbreak: 1600,
                passive: 
                    {
                        ability1: "When equipped by Clyde, increase DMG by 75% and increase Arts Gauge by 3/s.",
                        ability2: "Increase DMG to Earth Enemies by 25%."
                    }
            },
        lore: 
            {
                evo2: "One of the 3 Blade Masters who fought in the Ancient War. Trained in the sword from a young age, and was as strong as a knight by 16. Only nobles could become knights in his birthplace of Isliid, however, and so he set off on a journey to perfect himself as a swordsman. Though he emerged victorious from countless battles, his teacher would later say his greatest talent waas his penchant for meeting power foes." ,
                evo3: "An Isliidan swordsman, and one of the 3 Blade Masters who fought in the Ancient War. After setting out on a journey to become the greatest swordsman, he fought countless battles against those who would later become heroes in the war. His fight against Mashreed, emperor of Isliiid, is particularly notable. It is said the future emperor was so impressed by the swordsman's proud stature that he invited him to join the knights. ",
                evo4: "An Isliidan swordsman later counted among the 3 Blade Masters. During his journey of self-improvement, a Great War between the Gods and Demons began. Clyde sought to fight as a mercenary, but a request from Isliid's emperor sent him to the capital. There the new emperor Mashreed, who Clyde had once battled against, chose Clyde to serve as eader of the imperial knights. ",
                evo5: "One of the 3 Blade Masters who fought in the Ancient War. After becoming head of Isliid's kngihts, he deferred command, assembled a group of young knights and headed to the battlefield. With his trusted Flameblade Gladion in hand, he quickly laid waste to the Giant and Demon hordes opposing him. Those who were initially critical of him later came to revere him - a point of pride.",
                evoawk: "Although being one of the 3 Blade Masters, he suddenly disappeared from history. It is not clear of this life after the Ancient War. There are several rumors about him such as, helping others during the harsh times after war, death and life battle with his master, or being killed by the emperor of Isliid due to his riot against him. However, one thing is common, he had enormous power even after the war and bright fire in his eyes."
            }
    },
    { //Corsair - Complete
        id: 100026211,
        name: "Corsair",
        attribute: "Water",
        type: "Human",
        image: 
            {
                detailawk: "/db/Units/Detail/unit_detail_100026211.png",
                thumb2: "/db/Units/Thumbnail/unit_thumbnail_100022211.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100023211.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100024211.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100025211.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100026211.png",
                detail2: "/db/Units/Detail/unit_detail_100022211.png",
                detail3: "/db/Units/Detail/unit_detail_100023211.png",
                detail4: "/db/Units/Detail/unit_detail_100024211.png",
                detail5: "/db/Units/Detail/unit_detail_100025211.png"
            },
        stats: 
            {
                hp: 6708,
                hpplus: 999,
                atk: 2074,
                atkplus: 321,
                def: 2203,
                defplus: 340
            },
        slots: {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 3,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        skillset: 
            {
                skill: "8s CT - 1800% Water DMG (PHYS).",
                skillbreak: 1300,
                arts: "10340% Water DMG (MAG).",
                artsbreak: 2400,
                truearts: "23200% Water DMG (MAG). High chance to inflict Freeze. Increase all Ally Arts Gauge by 20.",
                trueartsbreak: 4800
            },
        passive: 
            {
                ability1: "Increase Water Allies' BE generation by 20%.",
                ability2: "Increase Water Allies' DMG by 30%."
            },
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water1.png",
                    mat2amt: 2
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat3amt: 1,
                    hover3: "Freydal"
                }
            },
        trueweapon: 
            {
                name: "Froid Rosier",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "/db/Equipment/Detail/item_detail_103381.png",
                skill: "40s CT - 5500% Water DMG (MAG). Chance to inflict Freeze.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Corsair, increase DMG by 75% and increase Arts Gauge by 3/s",
                        ability2: "Increase DMG to Fire Enemies by 25%"
                    }
                
            },
        lore: 
            {
                evo2: "One of the 3 Blade Masters who fought in the Ancient War. A highborn member of Bamint nobility, she received special eduction from birth. Though she excelled in every field, what she preferred most was sword training, and at the age of 16 was regarded as having skills equal to that of one of the country's knights." ,
                evo3: "A Bamint noble later counted among the 3 Blade Masters. On her 18th birthday, she discarded her favorite sword, a moment of joy for her faather, who hoped she would settle down. She rebelled instead, leaving a journey in pursuit of freedom. Using her sword skills to help those in need, this passionate swordswoman's ice magic-ensconced blade shines cold and beautiful.",
                evo4: "A Bamint swordswoman later counted amount the 3 Blade Masters. Countless foes marked her days of travel, all sent by her father in an attempt to bring her home. Ironically, her victorious battles against them only honed her skills with the blade further. One day, an unusually vicious foe appeared before her. After defeating it, she voewed to return home, praying for her father's safety all the while. ",
                evo5: "After returning to Bamint, Corsair found her father chatting happily with the assassin she thought she had defeated. Furious, her father smiled and informed her that, by defeating the strongest fighter in the land, she had earned herself a spot as a member of the knights. She would go on to fight in the Great War, becoming known as one of the 3 Blade Masters, but the look on her face was always a sour one.",
                evoawk: "Although being one of the 3 Blade Masters, it is said that she created the reason for the royal family to fall. After the Ancient War, she was ordered to guard the prince of Bamint who was going to attend the 5 Kings Conference and even proposed. However, she declined the offer, and left the country. Her father did not criticize her for this. She is said to have fought with the other Blade Masters or have lived to bring up her adopted child. Her sword skills were the best during her last years."
            }
    },
    { //Arth - Missing Lore
        id: 100036311,
        name: "Arth",
        attribute: "Earth",
        type: "Human",
        image: 
            {
                detailawk: "/db/Units/Detail/unit_detail_100036311.png",
                thumb2: "/db/Units/Thumbnail/unit_thumbnail_100032311.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100033311.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100034311.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100035311.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100036311.png",
                detail2: "/db/Units/Detail/unit_detail_100032311.png",
                detail3: "/db/Units/Detail/unit_detail_100033311.png",
                detail4: "/db/Units/Detail/unit_detail_100034311.png",
                detail5: "/db/Units/Detail/unit_detail_100035311.png"
            },
        skillset: 
            {
                skill: "7s CT - 1900% Earth DMG (PHYS).",
                skillbreak: 2100,
                arts: "9900% Earth DMG (PHYS)",
                artsbreak: 3000,
                truearts: "21500% Earth DMG (PHYS). Increase all Ally Arts Gauge by 20",
                trueartsbreak: 9300
            },
        passive: 
            {
                ability1: "Increase Earth Allies' BE generation by 20%",
                ability2: "Increase Earth Allies' DMG by 30%"
            },
        stats: 
            {
                hp: 6546,
                hpplus: 991,
                atk: 2268,
                atkplus: 350,
                def: 2074,
                defplus: 321
            },
        slots: {
            slot1: 5,
            slot1type: "/db/Mines/thumbnail/physLB.png",
            slot2: 5,
            slot2type: "/db/Mines/thumbnail/magLB.png",
            slot3: 3,
            slot3type: "/db/Mines/thumbnail/defLB.png"
        },
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth1.png",
                    mat2amt: 2
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat3amt: 1,
                    hover3: "Elpneumas"
                }
            },
        trueweapon: 
            {
                name: "Arth Lumina",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "/db/Equipment/Detail/item_detail_103391.png",
                skill: "50s CT - 6000% Earth DMG (PHYS)",
                skillbreak: 3000,
                passive: 
                    {
                        ability1: "When equipped by Arth, increase DMG by 75% and increase Arts Gauge by 3/s" ,
                        ability2: "Increase own DMG to Water Enemies by 25%"
                    }
            },
        lore: 
            {
                evo2: "Two Star Lore Missing, please contact site owner",
                evo3: "Three Star Lore Missing, please contact site owner",
                evo4: "Four Star Lore Missing, please contact site owner",
                evo5: "Five Star Lore Missing, please contact site owner",
                evoawk: "Awaken Lore Missing, please contact site owner"
            }
    },
    { //Feena - Missing Lore
        id: 100046411,
        name: "Feena",
        attribute: "Light",
        type: "God",
        image: 
            {
                detailawk: "/db/Units/Detail/unit_detail_100046411.png",
                thumb2: "/db/Units/Thumbnail/unit_thumbnail_100042411.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100043411.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100044411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100045411.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100046411.png",
                detail2: "/db/Units/Detail/unit_detail_100042411.png",
                detail3: "/db/Units/Detail/unit_detail_100043411.png",
                detail4: "/db/Units/Detail/unit_detail_100044411.png",
                detail5: "/db/Units/Detail/unit_detail_100045411.png"
            },
        skillset: 
            {
                skill: "9s CT - 2600% Light DMG (MAG). For 5s, heal own HP by 100/s.",
                skillbreak: 1000,
                arts: "11500% Light DMG (MAG). Cure all Ally Status Ailments (except Faint). For 10s, increase all Ally Status RES (except Faint) by 100%",
                artsbreak: 2600,
                truearts: "22500% DMG (MAG). Cure all Ally Status Ailments (except Faint). For 20s, increase all Ally Status RES (except Faint) by 100% and heal all Ally HP by 300/s",
                trueartsbreak: 4500
            },
        passive: 
            {
                ability1: "Increase own DMG to Demon Enemy by 80%",
                ability2: "When an other Ally dies, revive that Ally with 33% HP. Can be activated once per quest",
                ability3: "When own HP is 80%, or more, increase own Status RES (except Faint) by 100%"
            },
        stats: 
            {
                hp: 6059,
                hpplus: 918,
                atk: 2423,
                atkplus: 373,
                def: 2280,
                defplus: 352
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "Centurion",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "/db/Equipment/Detail/item_detail_103941.png",
                skill: "60s CT - 6200% Light DMG (MAG). For 10s, heal all Ally by 30% of DMG taken",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Feena, increase DMG by 20% and increase Arts Gauge by 3/s" ,
                        ability2: "Increase own Dark RES by 20%"
                    }
            },
        lore: 
            {
                evo2: "Two Star Lore Missing, please contact site owner",
                evo3: "Three Star Lore Missing, please contact site owner",
                evo4: "Four Star Lore Missing, please contact site owner",
                evo5: "Five Star Lore Missing, please contact site owner",
                evoawk: "Awaken Lore Missing, please contact site owner"
            }
    },
    { //Regulus - Missing Lore
        id: 100056511,
        name: "Regulus",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detailawk: "/db/Units/Detail/unit_detail_100056511.png",
                thumb2: "/db/Units/Thumbnail/unit_thumbnail_100052511.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100053511.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100054511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100055511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100056511.png",
                detail2: "/db/Units/Detail/unit_detail_100052511.png",
                detail3: "/db/Units/Detail/unit_detail_100053511.png",
                detail4: "/db/Units/Detail/unit_detail_100054511.png",
                detail5: "/db/Units/Detail/unit_detail_100055511.png"
            },
        skillset: 
            {
                skill: "9s CT - 2200% Dark DMG (PHYS). Heal own HP by 5% of DMG dealt by own Skill",
                skillbreak: 1250,
                arts: "10850% Dark DMG (PHYS). For 5s, increase all Ally Critical Rate by 50%.",
                artsbreak: 2000,
                truearts: "25550% Dark DMG (PHYS). For 8s, increase all Ally Critical Rate by 100% and DMG to Light Enemy by 50%",
                trueartsbreak: 3800
            },
        passive: 
            {
                ability1: "Increase own Light RES by 30%",
                ability2: "Increase all Ally Dark DMG by 30% (Non-stack)"
            },
        stats: 
            {
                hp: 6970,
                hpplus: 999,
                atk: 2693,
                atkplus: 413,
                def: 2423,
                defplus: 373
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat3amt: 4,
                    hover3: "Valzandeth",
                    mat4: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat4amt: 4,
                    hover4: "Ifrit",
                    mat5: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat5amt: 5,
                    hover5: "Oldeus"
                }
            },
        trueweapon: 
            {
                name: "Nemesis Crow",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "/db/Equipment/Detail/item_detail_103501.png",
                skill: "50s CT - 7000% Dark DMG (MAG). For 10s, reduce Enemy Dark RES by 50%",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Regulus, increase own Critical DMG by 50% and increase own Arts Gauge by 3/s" ,
                        ability2: "Increase own DMG to Dragon Enemy by 50%"
                    }
            },
        lore: 
            {
                evo2: "Two Star Lore Missing, please contact site owner",
                evo3: "Three Star Lore Missing, please contact site owner",
                evo4: "Four Star Lore Missing, please contact site owner",
                evo5: "Five Star Lore Missing, please contact site owner",
                evoawk: "Awaken Lore Missing, please contact site owner"
            }
    },
    { //Dargeon - Missing Lore
        id: 100566112,
        name: "Dargeon",
        attribute: "Fire",
        type: "Dragon",
        image: 
            {
                detailawk: "/db/Units/Detail/unit_detail_100566112.png",
                detail3: "/db/Units/Detail/unit_detail_100563112.png",
                detail4: "/db/Units/Detail/unit_detail_100564112.png",
                detail5: "/db/Units/Detail/unit_detail_100565112.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100563112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100564112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100565112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100566112.png"
            },
        skillset: 
            {
                skill: "3000% Fire DMG (PHYS). Chance of inflicting Burn.",
                skillbreak: 900,
                arts: "30000% Fire DMG (MAG)",
                artsbreak: 1700,
                truearts: "38000% Fire DMG (MAG). For 35s, increase all Fire Ally DMG by 35%",
                trueartsbreak: 2400
            },
        passive: 
            {
                ability1: "Increase own DMG to Dragon Enemy by 50%",
                ability2: "Increase own Dark RES by 35%",
                ability3: "Increase own Freeze and Paralysis RES by 100%"
            },
        stats: 
            {
                hp: 7350,
                hpplus: 999,
                atk: 2500,
                atkplus: 390,
                def: 2456,
                defplus: 377
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        evolution: 
            {
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat3amt: 2,
                    hover3: "Degilmagna",
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Herck - Missing Lore
        id: 100576212,
        name: "Herck",
        attribute: "Water",
        type: "Giant",
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100573212.png",
                detail4: "/db/Units/Detail/unit_detail_100574212.png",
                detail5: "/db/Units/Detail/unit_detail_100575212.png",
                detailawk: "/db/Units/Detail/unit_detail_100576212.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100573212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100574212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100575212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100576212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7128,
                hpplus: 999,
                atk: 2376,
                atkplus: 366,
                def: 2609,
                defplus: 401
            },
        skillset: 
            {
                skill: "8s CT - 1800% Water DMG (PHYS). Chance to inflict Freeze.",
                skillbreak: 2050,
                arts: "12600% Water DMG (MAG). For 15s, increase all Water Ally DMG RES by 10%",
                artsbreak: 3100,
                truearts: "28000% Water DMG (MAG). For 15s, all Allies' attacks have chance to inflict Freeze",
                trueartsbreak: 7000
            },
        passive: 
            {
                ability1: "Increase own DMG to Spirit Enemy by 80%",
                ability2: "Increase own DMG to Human Enemy by 80%",
                ability3: "Increase own DMG by 30% when own HP is over 50%. (Does not stack)"
            },
        evolution: 
            {
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water2.png",
                    mat1amt: 5,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth2.png",
                    mat2amt: 1
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_water3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 4,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragValzendeth.png",
                    mat4amt: 4,
                    hover4: "Valzendeth",
                    mat5: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat5amt: 3,
                    hover5: "Freydal"
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Valhalla - Missing Lore
        id: 100586312,
        name: "Valhalla",
        attribute: "Earth",
        type: "Spirit",
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100583312.png",
                detail4: "/db/Units/Detail/unit_detail_100584312.png",
                detail5: "/db/Units/Detail/unit_detail_100585312.png",
                detailawk: "/db/Units/Detail/unit_detail_100586312.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100583312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100584312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100585312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100586312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7068,
                hpplus: 999,
                atk: 2016,
                atkplus: 312,
                def: 2772,
                defplus: 425
            },
        skillset: 
            {
                skill: "8s CT - 1200% Earth DMG (MAG). For 5s, increase own Normal Attack DMG by 20.",
                skillbreak: 600,
                arts: "For 20s, Heal all Ally HP by 200s and increase all Ally Skill CT REC by 60%",
                artsbreak: 0,
                truearts: "21000% Earht DMG (MAG). For 15s, Heal all Ally HP by 4%/s and increase all Ally DMG RES by 10%. If Ally is Earth, increase DMG RES by 20% instead",
                trueartsbreak: 1900
            },
        passive: 
            {
                ability1: "Increase own Earth RES by 35%",
                ability2: "Increase all Ally Poison RES by 50%",
                ability3: "Increase all Ally DMG RES by 10% when near death"
            },
        evolution: 
            {
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat3amt: 2,
                    hover3: "Elpneumas",
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Eden - Missing Lore
        id: 100596412,
        name: "Eden",
        attribute: "Light",
        type: "Machine",
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100593412.png",
                detail4: "/db/Units/Detail/unit_detail_100594412.png",
                detail5: "/db/Units/Detail/unit_detail_100595412.png",
                detailawk: "/db/Units/Detail/unit_detail_100596412.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100593412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100594412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100595412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100596412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6930,
                hpplus: 999,
                atk: 2304,
                atkplus: 335,
                def: 2138,
                defplus: 330
            },
        skillset: 
            {
                skill: "10s CT - 1400% Light DMG (MAG). Chance to inflict Seal",
                skillbreak: 900,
                arts: "7000% Light DMG (PHYS). For 25s, all allies gain a DMG Barrier that negates 3000 DMG",
                artsbreak: 1400,
                truearts: "For 30s, all allies gain a DMG barrier that negates 4000 DMG. Additionally, increase Barrier strength by [1000 x Lvl of Wave Armor]. If Wave Armor is at Max Level: 35000% Light DMG (PHYS). For 30s, all allies gain a DMG barrier that negates 4000 DMG. Additionally, increase Barrier strength by [1000 x Lvl of Wave Armor]",
                trueartsbreak: 1800
            },
        passive: 
            {
                ability1: "Increase own Paralysis RES by 60%",
                ability2: "Increase own Poison RES by 60%",
                ability3: "After using True Arts, increase Wave Armor level by 1 (Max 3)"
            },
        evolution: 
            {
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire2.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_water2.png",
                    mat3amt: 2,
                    mat4: "/db/Icons/dungeon_drops/material_thumbnail_earth2.png",
                    mat4amt: 2,
                    mat5: "/db/Icons/dungeon_drops/material_thumbnail_dark2.png",
                    mat5amt: 2
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_water3.png",
                    mat3amt: 2,
                    mat4: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat4amt: 2,
                    mat5: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat5amt: 2
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 2,
                    hover3: "Fosradius"
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Abaddon - Missing Lore
        id: 100606512,
        name: "Abaddon",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100603512.png",
                detail4: "/db/Units/Detail/unit_detail_100604512.png",
                detail5: "/db/Units/Detail/unit_detail_100605512.png",
                detailawk: "/db/Units/Detail/unit_detail_100606512.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100603512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100604512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100605512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100606512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7140,
                hpplus: 999,
                atk: 2852,
                atkplus: 437,
                def: 2008,
                defplus: 311
            },
        skillset: 
            {
                skill: "8s CT - 1800% Dark DMG (MAG). Chance to inflict Blind.",
                skillbreak: 650,
                arts: "11000% Dark DMG (MAG). For 15s, reduce all Enemy ATK by 30%",
                artsbreak: 1600,
                truearts: "35000% Dark DMG (MAG). For 15s, if Enemy is God or Demon, increase own DMG by 100%",
                trueartsbreak: 2300
            },
        passive: 
            {
                ability1: "Increase own DMG to Demon Enemy by 100%",
                ability2: "Increase own DMG to God Enemy by 100%"
            },
        evolution: 
            {
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_2",
                    mat3amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat3amt: 2,
                    hover3: "Oldeus"
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ragna - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 100616112,
        name: "Ragna",
        attribute: ,
        type: ,
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100613112.png",
                detail4: "/db/Units/Detail/unit_detail_100614112.png",
                detail5: "/db/Units/Detail/unit_detail_100615112.png",
                detailawk: "/db/Units/Detail/unit_detail_100616112.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100613112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100614112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100615112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100616112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Yomi - Missing Stats, Lore, Slots, Evolution
        id: 100626212,
        name: "Yomi",
        attribute: ,
        type: ,
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100623212.png",
                detail4: "/db/Units/Detail/unit_detail_100624212.png",
                detail5: "/db/Units/Detail/unit_detail_100625212.png",
                detailawk: "/db/Units/Detail/unit_detail_100626212.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100623212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100624212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100625212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100626212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Vaid - Missing Stats, Lore, Slots, Evolution
        id: 100636312,
        name: "Vaid",
        attribute: ,
        type: ,
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100633312.png",
                detail4: "/db/Units/Detail/unit_detail_100634312.png",
                detail5: "/db/Units/Detail/unit_detail_100635312.png",
                detailawk: "/db/Units/Detail/unit_detail_100636312.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100633312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100634312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100635312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100636312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Elfalla - Missing Stats, Lore, Slots, Evolution
        id: 100646412,
        name: "Elfalla",
        attribute: ,
        type: ,
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100643412.png",
                detail4: "/db/Units/Detail/unit_detail_100644412.png",
                detail5: "/db/Units/Detail/unit_detail_100645412.png",
                detailawk: "/db/Units/Detail/unit_detail_100646412.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100643412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100644412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100645412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100646412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lily - Missing Stats, Lore, Slots, Evolution
        id: 100656512,
        name: "Lily",
        attribute: ,
        type: ,
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100653512.png",
                detail4: "/db/Units/Detail/unit_detail_100654512.png",
                detail5: "/db/Units/Detail/unit_detail_100655512.png",
                detailawk: "/db/Units/Detail/unit_detail_100656512.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_10063512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100654512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100655512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100656512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rayas - Missing Stats, Lore, Slots, Evolution, True Weapon(s), TW Image
        id: 101016411,
        name: "Rayas",
        attribute: ,
        type: ,
        image: 
            {
                detail2: "/db/Units/Detail/unit_detail_101012411.png",
                detail3: "/db/Units/Detail/unit_detail_101013411.png",
                detail4: "/db/Units/Detail/unit_detail_101014411.png",
                detail5: "/db/Units/Detail/unit_detail_101015411.png",
                detailawk: "/db/Units/Detail/unit_detail_101016411.png",
                thumb2: "/db/Units/Thumbnail/unit_thumbnail_101012411.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_101013411.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101014411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101015411.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101016411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                true1: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: ,
                            ability2: 
                        }
                },
                true2: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: ,
                            ability2: 
                        }
                }
                
            },
        lore: 
            {   
                evo2: "Missing Lore Information, please contact site owner",
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Iris - MIssing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101025411,
        name: "Iris",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Thumbnail/unit_thumbnail_101024411.png",
                detail5: "/db/Units/Thumbnail/unit_thumbnail_101025411.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101024411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101025411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Roy (WateR) - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101036211,
        name: "Roy (Water)",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101034211.png",
                detail5: "/db/Units/Detail/unit_detail_101035211.png",
                detailawk: "/db/Units/Detail/unit_detail_101036211.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101034211.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101035211.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101036211.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mira (Fire) - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101046111,
        name: "Mira (Fire)",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Thumbnail/unit_thumbnail_101044111.png",
                detail5: "/db/Units/Thumbnail/unit_thumbnail_101045111.png",
                detailawk: "/db/Units/Detail/unit_detail_101046111.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101044111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101045111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101046111.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zeorg (Light) - MIssing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101066411,
        name: "Zeorg (Light)",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101064411.png",
                detail5: "/db/Units/Detail/unit_detail_101065411.png",
                detailawk: "/db/Units/Detail/unit_detail_101066411.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101064411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101065411.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101066411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Melia (Dark) - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101076511,
        name: "Melia (Dark)",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101074511.png",
                detail5: "/db/Units/Detail/unit_detail_101075511.png",
                detailawk: "/db/Units/Detail/unit_detail_101076511.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101074511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101075511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101076511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ragsherum - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101086511,
        name: "Ragsherum",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101084511.png",
                detail5: "/db/Units/Detail/unit_detail_101085511.png",
                detailawk: "/db/Units/Detail/unit_detail_101086511.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101084511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101085511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101086511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Grad - Missing Stast, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101096511,
        name: "Grad",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101094511.png",
                detail5: "/db/Units/Detail/unit_detail_101095511.png",
                detailawk: "/db/Units/Detail/unit_detail_101096511.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101094511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101095511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101096511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Nier - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101106511,
        name: "Nier",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101104511.png",
                detail5: "/db/Units/Detail/unit_detail_101105511.png",
                detailawk: "/db/Units/Detail/unit_detail_101106511.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101104511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101105511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101106511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ganan - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101116111,
        name: "Ganan",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101114111.png",
                detail5: "/db/Units/Detail/unit_detail_101115111.png",
                detailawk: "/db/Units/Detail/unit_detail_101116111.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101114111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101115111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101116111.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Gilliam - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101126311,
        name: "Gilliam",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101124311.png",
                detail5: "/db/Units/Detail/unit_detail_101125311.png",
                detailawk: "/db/Units/Detail/unit_detail_101126311.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101124311.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101125311.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101126311.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Liese (Light) - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101136411,
        name: "Liese (Light)",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101134411.png",
                detail5: "/db/Units/Detail/unit_detail_101135411.png",
                detailawk: "/db/Units/Detail/unit_detail_101136411.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101134411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101135411.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101136411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Est - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101146211,
        name: "Est",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101144211.png",
                detail5: "/db/Units/Detail/unit_detail_101145211.png",
                detailawk: "/db/Units/Detail/unit_detail_101146211.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101144211.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101145211.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101146211.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sophie - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101156111,
        name: "Sophie",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101154111.png",
                detail5: "/db/Units/Detail/unit_detail_101155111.png",
                detailawk: "/db/Units/Detail/unit_detail_101156111.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101154111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101155111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101156111.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rem (Grand Summoners) - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101166511,
        name: "Rem (Grand Summoners)",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101164511.png",
                detail5: "/db/Units/Detail/unit_detail_101165511.png",
                detailawk: "/db/Units/Detail/unit_detail_101166511.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101164511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101165511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101166511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Arosdea - Missing Stats, Lore, Slots, Evolution
        id: 101176112,
        name: "Arosdea",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101174112.png",
                detail5: "/db/Units/Detail/unit_detail_101175112.png",
                detailawk: "/db/Units/Detail/unit_detail_101176112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101174112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101175112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101176112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Selia (Regular) - Missing Stats, Lore, Slots, Evolution
        id: 101186212,
        name: "Selia",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101184212.png",
                detail5: "/db/Units/Detail/unit_detail_101185212.png",
                detailawk: "/db/Units/Detail/unit_detail_101186212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101184212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101185212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101186212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ashe Toto - Missing Stats, Slots, Evolution, Lore
        id: 101196312,
        name: "Ashe Toto",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101194312.png",
                detail5: "/db/Units/Detail/unit_detail_101195312.png",
                detailawk: "/db/Units/Detail/unit_detail_101196312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101194312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101195312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101196312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Duran - Missing Stats, Lore, Slots, Evolution
        id: 101206412,
        name: "Duran",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101204412.png",
                detail5: "/db/Units/Detail/unit_detail_101205412.png",
                detailawk: "/db/Units/Detail/unit_detail_101206412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101204412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101205412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101206412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zenon - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101216512,
        name: "Zenon",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101214512.png",
                detail5: "/db/Units/Detail/unit_detail_101215512.png",
                detailawk: "/db/Units/Detail/unit_detail_101216512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101214512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101215512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101216512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Soleil - Missing Lore, Stats, Slots, Evolution
        id: 101226112,
        name: "Soleil",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101224112.png",
                detail5: "/db/Units/Detail/unit_detail_101225112.png",
                detailawk: "/db/Units/Detail/unit_detail_101226112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101224112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101225112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101226112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Saar - Missing Lore, Stats, Slots, Evolution
        id: 101236212,
        name: "Saar",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101234212.png",
                detail5: "/db/Units/Detail/unit_detail_101235212.png",
                detailawk: "/db/Units/Detail/unit_detail_101236212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101234212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101235212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101236212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Pola - Missing Lore, Stats, Slots, Evolution
        id: 101246312,
        name: "Pola",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101244312.png",
                detail5: "/db/Units/Detail/unit_detail_101245312.png",
                detailawk: "/db/Units/Detail/unit_detail_101246312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101244312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101245312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101246312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo23: //2 to 3, 3 to 4, etc. If more than material listed, create new line with mat3 and mat3amt , etc.
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Leon - Missing Lore, Stats, Slots, Evolution
        id: 101256512,
        name: "Leon",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101254512.png",
                detail5: "/db/Units/Detail/unit_detail_101255512.png",
                detailawk: "/db/Units/Detail/unit_detail_101256512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101254512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101255512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101256512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zoroas - Missing Lore, Stats, Slots, Evolution
        id: 101266512,
        name: "Zoroas",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101264512.png",
                detail5: "/db/Units/Detail/unit_detail_101265512.png",
                detailawk: "/db/Units/Detail/unit_detail_101266512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101264512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101265512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101266512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zechsia - Missing Lore, Stats, Slots, Evolution
        id: 101316412,
        name: "Zechsia",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101314412.png",
                detail5: "/db/Units/Detail/unit_detail_101315412.png",
                detailawk: "/db/Units/Detail/unit_detail_101316412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101314412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101315412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101316412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zecht - Missing Lore, Stats, Slots, Evolution
        id: 101286512,
        name: "Zecht",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101284512.png",
                detail5: "/db/Units/Detail/unit_detail_101285512.png",
                detailawk: "/db/Units/Detail/unit_detail_101286512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101284512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101285512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101286512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Aristela - Missing Lore, Stats, Slots, Evolution
        id: 101296212,
        name: ,
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101294212.png",
                detail5: "/db/Units/Detail/unit_detail_101295212.png",
                detailawk: "/db/Units/Detail/unit_detail_101296212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101294212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101295212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101296212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zoldes - Missing Lore, Stats, Slots, Evolution
        id: 101316412,
        name: "Zoldes",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101314412.png",
                detail5: "/db/Units/Detail/unit_detail_101315412.png",
                detailawk: "/db/Units/Detail/unit_detail_101316412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101314412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101315412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101316412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rhodia - Missing Lore, Stats, Slots, Evolution
        id: 101316412,
        name: "Rhodia",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101314412.png",
                detail5: "/db/Units/Detail/unit_detail_101315412.png",
                detailawk: "/db/Units/Detail/unit_detail_101316412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101314412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101315412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101316412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Olgeth - Missing Lore, Stats, Slots, Evolution
        id: 101326312,
        name: "Olgeth",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101324312.png",
                detail5: "/db/Units/Detail/unit_detail_101325312.png",
                detailawk: "/db/Units/Detail/unit_detail_101326312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101324312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101325312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101326312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Riffili - Missing Lore, Stats, Slots, Evolution
        id: 101336512,
        name: "Riffili",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101334512.png",
                detail5: "/db/Units/Detail/unit_detail_101335512.png",
                detailawk: "/db/Units/Detail/unit_detail_101336512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101334512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101335512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101336512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Shadie - Missing Lore, Stats, Slots, Evolution
        id: 101346212,
        name: "Shadie",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101344212.png",
                detail5: "/db/Units/Detail/unit_detail_101345212.png",
                detailawk: "/db/Units/Detail/unit_detail_101346212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101344212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101345212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101346212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rhiotis - Missing Lore, Stats, Slots, Evolution
        id: 101356412,
        name: "Rhiotis",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101354412.png",
                detail5: "/db/Units/Detail/unit_detail_101355412.png",
                detailawk: "/db/Units/Detail/unit_detail_101356412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101354412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101355412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101356412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Teriodos - Missing Lore, Stats, Slots, Evolution
        id: 101366112,
        name: "Teriodos",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101364112.png",
                detail5: "/db/Units/Detail/unit_detail_101365112.png",
                detailawk: "/db/Units/Detail/unit_detail_101366112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101364112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101365112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101366112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Keiones - Missing Lore, Stats, Slots, Evolution
        id: 101376512,
        name: "Keiones",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101374512.png",
                detail5: "/db/Units/Detail/unit_detail_101375512.png",
                detailawk: "/db/Units/Detail/unit_detail_101376512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101374512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101375512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101376512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Elmessio - Missing Lore, Stats, Slots, Evolution
        id: 101386212,
        name: "Elmessio",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101384212.png",
                detail5: "/db/Units/Detail/unit_detail_101385212.png",
                detailawk: "/db/Units/Detail/unit_detail_101386212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101384212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101385212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101386212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lione - Missing Lore, Stats, Slots, Evolution
        id: 101396112,
        name: "Lione",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101394112.png",
                detail5: "/db/Units/Detail/unit_detail_101395112.png",
                detailawk: "/db/Units/Detail/unit_detail_101396112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101394112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101395112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101396112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Reyon - Missing Lore, Stats, Slots, Evolution
        id: 101406412,
        name: "Reyon",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101404412.png",
                detail5: "/db/Units/Detail/unit_detail_101405412.png",
                detailawk: "/db/Units/Detail/unit_detail_101406412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101404412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101405412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101406412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Nerim - Missing Lore, Stats, Slots, Evolution
        id: 101416312,
        name: "Nerim",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101414312.png",
                detail5: "/db/Units/Detail/unit_detail_101415312.png",
                detailawk: "/db/Units/Detail/unit_detail_101416312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101414312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101415312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101416312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Quon - Missing Lore, Stats, Slots, Evolution
        id: 101556212,
        name: "Quon",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101554212.png",
                detail5: "/db/Units/Detail/unit_detail_101555212.png",
                detailawk: "/db/Units/Detail/unit_detail_101556212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101554212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101555212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101556212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Feld - Missing Lore, Stats, Slots, Evolution
        id: 101566112,
        name: "Feld",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101564112.png",
                detail5: "/db/Units/Detail/unit_detail_101565112.png",
                detailawk: "/db/Units/Detail/unit_detail_101566112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101564112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101565112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101566112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Edram - Missing Lore, Stats, Slots, Evolution
        id: 101575412,
        name: ,
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101575412.png",
                detail5: "/db/Units/Detail/unit_detail_101575412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101575412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101575412.png",
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
            }
    },
    { //Favelle - Missing Lore, Stats, Slots, Evolution
        id: 101586312,
        name: "Favelle",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101584312.png",
                detail5: "/db/Units/Detail/unit_detail_101585312.png",
                detailawk: "/db/Units/Detail/unit_detail_101586312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101584312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101585312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101586312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Catilou - Missing Lore, Stats, Slots, Evolution
        id: 101596312,
        name: "Catilou",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101594312.png",
                detail5: "/db/Units/Detail/unit_detail_101595312.png",
                detailawk: "/db/Units/Detail/unit_detail_101596312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101594312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101595312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101596312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rasaou - Missing Lore, Stats, Slots, Evolution
        id: 101606112,
        name: "Rasaou",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101604112.png",
                detail5: "/db/Units/Detail/unit_detail_101605112.png",
                detailawk: "/db/Units/Detail/unit_detail_101606112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101604112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101605112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101606112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Yumi - Missing Lore, Stats, Slots, Evolution
        id: 101616212,
        name: "Yumi",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101614212.png",
                detail5: "/db/Units/Detail/unit_detail_101615212.png",
                detailawk: "/db/Units/Detail/unit_detail_101616212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101614212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101615212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101616212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Keit - Missing Lore, Stats, Slots, Evolution
        id: 101626312,
        name: "Keit",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101624312.png",
                detail5: "/db/Units/Detail/unit_detail_101625312.png",
                detailawk: "/db/Units/Detail/unit_detail_101626312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101624312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101625312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101626312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Cathemilla - Missing Lore, Stats, Slots, Evolution
        id: 101646412,
        name: "Cathemilla",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101644412.png",
                detail5: "/db/Units/Detail/unit_detail_101645412.png",
                detailawk: "/db/Units/Detail/unit_detail_101646412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101644412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101645412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101646412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mizyna - Missing Lore, Stats, Slots, Evolution
        id: 101656512,
        name: "Mizyna",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101654512.png",
                detail5: "/db/Units/Detail/unit_detail_101655512.png",
                detailawk: "/db/Units/Detail/unit_detail_101656512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101654512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101655512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101656512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            }
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Nies - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101666212,
        name: "Nies",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101664212.png",
                detail5: "/db/Units/Detail/unit_detail_101665212.png",
                detailawk: "/db/Units/Detail/unit_detail_101666212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101664212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101665212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101666212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sanstone - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101676112,
        name: "Sanstone",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101674112.png",
                detail5: "/db/Units/Detail/unit_detail_101675112.png",
                detailawk: "/db/Units/Detail/unit_detail_101676112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101674112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101675112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101676112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Platina - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101686412,
        name: "Platina",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101684412.png",
                detail5: "/db/Units/Detail/unit_detail_101685412.png",
                detailawk: "/db/Units/Detail/unit_detail_101686412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101684412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101685412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101686412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Parlot - Missing Lore, Stats, Slots Evolution
        id: 101696312,
        name: "Parlot",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101694312.png",
                detail5: "/db/Units/Detail/unit_detail_101695312.png",
                detailawk: "/db/Units/Detail/unit_detail_101696312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101694312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101695312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101696312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Dahlia - Missing Lore, Stats, Slots, Evolution
        id: 101706512,
        name: "Dahlia",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101704512.png",
                detail5: "/db/Units/Detail/unit_detail_101705512.png",
                detailawk: "/db/Units/Detail/unit_detail_101706512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101704512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101705512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101706512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Gaia - Missing Lore, Stats, Slots, Evolution
        id: 101716211,
        name: "Gaia",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101714211.png",
                detail5: "/db/Units/Detail/unit_detail_101715211.png",
                detailawk: "/db/Units/Detail/unit_detail_101716211.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101714211.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101715211.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101716211.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Millenia - Missing Lore, Stats, Slots, Evolution
        id: 101726112,
        name: "Millenia",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101724112.png",
                detail5: "/db/Units/Detail/unit_detail_101725112.png",
                detailawk: "/db/Units/Detail/unit_detail_101726112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101724112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101725112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101726112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Alche - Missing Lore, Stats, Slots, Evolution
        id: 101736412,
        name: "Alche",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101734412.png",
                detail5: "/db/Units/Detail/unit_detail_101735412.png",
                detailawk: "/db/Units/Detail/unit_detail_101736412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101734412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101735412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101736412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Louvet - Missing Lore, Stats, Slots, Evolution
        id: 101746312,
        name: "Louvet",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101745312.png",
                detailawk: "/db/Units/Detail/unit_detail_101746312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101745312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101746312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Gran Brave - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Img
        id: 101756111,
        name: "Gran Brave",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101754111.png",
                detail5: "/db/Units/Detail/unit_detail_101755111.png",
                detailawk: "/db/Units/Detail/unit_detail_101756111.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101754111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101755111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101756111.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kazlaser - Missing Lore, Stats, Slots
        id: 101765411,
        name: "Kazlaser",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101765411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101765411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
            }
    },
    { //Marzex (Light) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101776412,
        name: "Marzex",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101775412.png",
                detailawk: "/db/Units/Detail/unit_detail_101776412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101775412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101776412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Number 2 - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101786512,
        name: "Number 2",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101785512.png",
                detailawk: "/db/Units/Detail/unit_detail_101786512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101785512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101786512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lian - Missing Lore, Stats, Slots, Evolution
        id: 101796112,
        name: "Lian",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101795112.png",
                detailawk: "/db/Units/Detail/unit_detail_101796112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101795112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101796112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Daisy - Missing Lore, Stats, Slots, Evolution
        id: 101806212,
        name: "Daisy",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101806212.png",
                detailawk: "/db/Units/Detail/unit_detail_101806212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101806212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101806212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Muse - Missing Lore, Stats, Slots, Evolution
        id: 101816312,
        name: "Muse",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101814312.png",
                detail5: "/db/Units/Detail/unit_detail_101815312.png",
                detailawk: "/db/Units/Detail/unit_detail_101816312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101814312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101815312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101816312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Freed - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101826412,
        name: "Freed",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101825412.png",
                detailawk: "/db/Units/Detail/unit_detail_101826412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101825412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101826412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Grohl - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101836512,
        name: "Grohl",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101835512.png",
                detailawk: "/db/Units/Detail/unit_detail_101836512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101835512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101836512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rishley - Missing Lore, Stats, Slots, Evolution
        id: 101846112,
        name: "Rishley",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101845112.png",
                detailawk: "/db/Units/Detail/unit_detail_101846112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101845112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101846112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lapleh - Missing Lore, Stats, Slots, Evolution
        id: 101856212,
        name: "Lapleh",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101855212.png",
                detailawk: "/db/Units/Detail/unit_detail_101856212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101855212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101856212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Alma - Missing Lore, Stats, Slots, Evolution
        id: 101866312,
        name: "Alma",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101865312.png",
                detailawk: "/db/Units/Detail/unit_detail_101866312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101865312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101866312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sonije - Missing Lore, Stats, Slots, Evolution
        id: 101876412,
        name: "Sonije",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101875412.png",
                detailawk: "/db/Units/Detail/unit_detail_101876412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101875412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101876412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Onfuan - Missing Lore, Stats, Slots, Evolution
        id: 101886512,
        name: "Onfuan",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101885512.png",
                detailawk: "/db/Units/Detail/unit_detail_101886512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101885512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101886512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kayas - Missing Lore, Stats, Slots, Evolution
        id: 101896512,
        name: "Kayas",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101894512.png",
                detail5: "/db/Units/Detail/unit_detail_101895512.png",
                detailawk: "/db/Units/Detail/unit_detail_101896512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101894512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101895512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101896512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //End - Missing Lore, Stats, Slots, Evolution
        id: 101906412,
        name: "End",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101905412.png",
                detailawk: "/db/Units/Detail/unit_detail_101906412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101905412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101906412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Coco - Missing Lore, Stats, Slots, Evolution
        id: 101916512,
        name: "Coco",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101915512.png",
                detailawk: "/db/Units/Detail/unit_detail_101916512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101915512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101916512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Anna - Missing Lore, Stats, Slots, Evolution
        id: 101926112,
        name: "Anna",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101925112.png",
                detailawk: "/db/Units/Detail/unit_detail_101926112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101925112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101926112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sly - Missing Lore, Stats, Slots, Evolution
        id: 101936212,
        name: "Sly",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101935212.png",
                detailawk: "/db/Units/Detail/unit_detail_101936212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101935212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101936212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Vogue - Missing Lore, Stats, Slots, Evolution
        id: 101946312,
        name: "Vogue",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101945312.png",
                detailawk: "/db/Units/Detail/unit_detail_101946312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101945312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101946312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Voghan - Missing Lore, Stats, Slots, Evolution
        id: 101956112,
        name: "Voghan",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101955112.png",
                detailawk: "/db/Units/Detail/unit_detail_101956112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101955112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101956112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Diaz - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101966212,
        name: "Diaz",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101965212.png",
                detailawk: "/db/Units/Detail/unit_detail_101966212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101965212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101966212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mamori - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101976312,
        name: "Mamori",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101975312.png",
                detailawk: "/db/Units/Detail/unit_detail_101976312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101975312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101976312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Melody - Missing Lore, Stats, Slots, Evolution
        id: 101986412,
        name: "Melody",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101985412.png",
                detailawk: "/db/Units/Detail/unit_detail_101986412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101985412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101986412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rohst - Missing Lore, Stats, Slots, Evolution
        id: 101996511,
        name: "Rohst",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101995511.png",
                detailawk: "/db/Units/Detail/unit_detail_101996511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101995511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101996511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Gerald - Missing Lore, Stats, Slots, Evolution
        id: 102006112,
        name: "Gerald",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102005112.png",
                detailawk: "/db/Units/Detail/unit_detail_102006112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102005112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102006112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zeela - Missing Lore, Stats, Slots, Evolution
        id: 102016212,
        name: "Zeela",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102015212.png",
                detailawk: "/db/Units/Detail/unit_detail_102016212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102015212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102016212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Fosly - Missing Lore, Stats, Slots, Evolution
        id: 102026312,
        name: "Fosly",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102025312.png",
                detailawk: "/db/Units/Detail/unit_detail_102026312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102025312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102026312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Jack - Missing Lore, Stats, Slots, Evolution
        id: 102036412,
        name: "Jack",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102035412.png",
                detailawk: "/db/Units/Detail/unit_detail_102036412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102035412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102036412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Celia (Light) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102046412,
        name: "Celia (Light)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102045412.png",
                detailawk: "/db/Units/Detail/unit_detail_102046412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102045412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102046412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ashe - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102056512,
        name: "Ashe",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102055512.png",
                detailawk: "/db/Units/Detail/unit_detail_102056512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102055512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102056512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Norn - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102066312,
        name: "Norn",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102065312.png",
                detailawk: "/db/Units/Detail/unit_detail_102066312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102065312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102066312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Riana - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102166212,
        name: "Riana",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102165212.png",
                detailawk: "/db/Units/Detail/unit_detail_102166212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102165212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102166212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kane (Earth) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102176312,
        name: "Kane (Earth)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102175312.png",
                detailawk: "/db/Units/Detail/unit_detail_102176312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102175312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102176312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Courtney - Missing Lore, Stats, Slots, Evolution
        id: 102186512,
        name: "Courtney",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102185512.png",
                detailawk: "/db/Units/Detail/unit_detail_102186512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102185512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102186512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Marzex (Dark) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102196512,
        name: "Marzex (Dark)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102195512.png",
                detailawk: "/db/Units/Detail/unit_detail_102196512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102195512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102196512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mako - Missing Lore, Stats, Slots, Evolution
        id: 102206412,
        name: "Mako",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102205412.png",
                detailawk: "/db/Units/Detail/unit_detail_102206412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102205412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102206412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Satsuki - Missing Lore, Stats, Slots, Evolution
        id: 102216212,
        name: "Satsuki",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102215212.png",
                detailawk: "/db/Units/Detail/unit_detail_102216212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102215212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102216212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ryuko - Missing Lore, Stats, Slots, Evolution
        id: 102226112,
        name: "Ryuko",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102225112.png",
                detailawk: "/db/Units/Detail/unit_detail_102226112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102225112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102226112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    }

    
];

export function getUnits() {
    return UnitInformation;
}

export function getUnitByName(name) {
    return UnitInformation.find(
        units => units.name === name
    );
}

