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
                detail4: ,
                detail5: ,
                detailawk: "/db/Units/Detail/unit_detail_.png",
                thumb4: ,
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

