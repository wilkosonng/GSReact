/**
 * FORMAT, do not forget COMMAS
 * 
 * TODO: TW Images
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
    { //Arth - Complete
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
                evo2: "One of the 3 Blade Masters who fought in the Ancient War. Son of one of Gramenia's great swordmasters, Arth was renowned as a genius swordsman from youth. To improve his abilities even further, he began developing techniques that broke from tradition. It's said that his teacher - who was also his father - observed his training quietly at first, only to reprimand him severely when he took up two swords.",
                evo3: "A Gramenian swordsman later counted among the 3 Blade Masters. After taking up a twin- bladed style not seen in any school, Arth dueled his father and won. While this lead to his expulsion, his father advised that he open a new school of his own to impart his style to a new generation. Arth rejected this and continued improving his skills, speaking to others only about swords.",
                evo4: "A Gramenian swordsman later counted among the 3 Blade Masters. The story goes that when he heard of the massive war between Gods and Demons during his sword training, he immediately headed to the battlefield. Aligned with the Gods, Arth achieved many military victories, he once turned and bore witness to the unspeakable devastation that had been wrought. Shocked senseless, his blades dropped to the ground.",
                evo5: "In the midst of the Great War between Gods and Demons, Arth dropped his blades and returned to his wartorn hometown, but took them up again upon seeing the devastation. This time, his blades would be used not to destroy, but to rebuild, with a pair of blades from his father. Armed with these new earth magic-infused swords, Arth fought to help others, coming to be known as the holy sword.",
                evoawk: "After he became a teacher of sword skills for Gramenia Republic, other than leaving the leaving the country once, he remained, and people greatly thanked him for his selfless devotion. On the other hand, he sometimes had a look of sorrow on his face. He hated to meet high officials on an extreme degree. He stayed single for his whole life. On his 80th birthday, surrounded by his disciples, he passed away with last words of "Was I forgiven?" His sword skills are still passed won to the next generation."
            }
    },
    { //Feena - Complete
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
                evo2: "A holy knight who rose to prominence in Famelle shortly before the start of the Ancient War. Her furious sword moves belied her appearance and she was regarded as the best in the kingdom. She was tasked with a certain duty because of her unerring faith towards the Gods, and departed on a journey to fulfill it. Feena and a knight of La Riiz would later be known as the Twin Knights of the Morning Star, but little is known about her.",
                evo3: "A member of the Twin Knights of the Morning Star, duo famous after the Ancient War. Entrusted with a secret duty by the Kingdom of Famelle, she visited every land under Human rule, and saved members of other races from oppression in more than one occasion. To this day, many know her from bard songs, championing her as the Luminous Knight. There are also stories of her meeting with key figures from every country during her journey.",
                evo4: "A member of the Twin Knights of the Morning Star, duo famous after the Ancient War. After visiting all the lands ruled by Humans, she headed to the lands ruled by Gods. When war between Gods and Demons broke out, she was allowed to join the Gods Army despite not being a God herself. It is said even Demons feared her on the battlefield. Toward the end of the war, she heard of a crisis befalling Famelle, and recieved permission to return home.",
                evo5: "After returning home, the war reached its end. With the Gods and Demons sealing themselves, and the other races on the verge of destruction, she chose to ignore boundaries of race to aid those in need. Her holy light inspired those in the throes of despair, and led them to call her Knight of the Morning star. Despite the legends, her absence from Famellian historical records remains a mystery to this day.",
                evoawk: "One of the Twin Knights of the Morning Star, who, like the Holy Mother, brought healing and charity to the people. Tales of her generosity have been handed down through every land, and though there is no trace in the history, they tell of how she brought soothing to those in need weeping as she did. The reason of her tears remains a mystery even now, but there are those who say she used to mutter words of apology, as well as the name of a vanished God."
            }
    },
    { //Regulus - Complete
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
                evo2: "A knight of the Raven's Aegis, a troop of La Riiz dedicated to protecting sorcerers. While the troop emphasized defense, Regulus opted not to carry a shield, focusing on offense instead. Nonetheless, he remained in the troop, both because his sword skills saved more sorcerers than any shield, and because he lacked the capacity for magic himself. He would later achieve renown as one of the Twin Knights of the Morning Star.",
                evo3: "A member of the Twin Knights of the Morning Star, duo famous after the Ancient War. Just before the start of the Ancient War, when tensions between Gods and Demons were at their peak, Regulus spent time away from his fellow knights. Records of his battles with knights across the land suggest this was a training pilgrimage, but it's also rumored that he recieved a secret mission from La Riiz' High Council to visit Human-controlled lands.",
                evo4: "A member of the Twin Knights of the Morning Star, duo famous after the Ancient War. Regulus challenged not just Humans during his travels, but countless other races as well. One of his famous achievement was the battle against the Flamewyrm Dargeon, which lasted three days and three nights before the final draw, that made his name renowned even among Dragons. This only incremented his opponents, who, regardless of race, challenged him, increasing his skills to the apex.",
                evo5: "When the Ancient War broke out, Regulus returned to La Riiz to rejoin his troop. A veteran of battles agaisnt all the races, Regulus inspired bravery in his companions and countrymen. After Gods and Demons vanished from the world at the end of the war, he traveled with a lady knight to help those in need: a duo that came to be known as the Twin Knights of the Morning Star. Strangely, no records of his deeds after this point remains...",
                evoawk: "After the end of the Ancient War, he was known as one of the Twin Knights of the Morning Star, but before that, he was already famous for saving the Magus Empire of La Riiz from great peril. He stood agaisnt the God Eater Mavroskia, which brings calamity wherever it appears, and turned its rampage. This is the only time in history a God Eater's destruction has been limited so far. They say he had the protection of a certain Witch, but his merit in the story is undeniable."
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
                evo3: "A flame Dragon that reigned over Famelle Rock. Boasting overwhelming strength, Dargeon lived impulsively, trampling others without a thought. One day, a lone swordsman appeared to challenge Dargeon, who dismissed the challenger out of hand as a feeble Human. But something unexpected happened. The swordsman - Clyde - gave the dragon his first taste of defeat, and kindling vengeful flames within his heart.",
                evo4: "The king of rare water-dwelling Giants, Herck shared dominion with the Sea Dragons prior to the start of the Great War. The two had a relationship that surpassed race, and even Herck's grandfather was a Sea Dragon. His body had dragon features, which were seen as natural and respected at the time, and a source of great power for Herck, but the war pit the two races against each other.",
                evo5: "The king of the rarely seen Sea Giants, Herck followed the request to fight alongside the other Giants, and joined the Demon forces. The Sea Giants, always friends to his people, joined the Gods, but he turned his spear against them without hesitation. Though this drew the hatred of the Sea Dragons, the fear they felt towards him proved tactically useful. Damage to both sides was minimal, but scars remained...",
                evoawk: "There exists a legend in Famelle of an unlikely saviour: a flame-wrapped Dragon with the majesty of a war god. He who once ravaged land and sky attained true enlightenment after his second duel with a master swordsman. Later, when the swordsman faced peril in the Ancient War, the Dragon appeared to fight alongside him out of respect for his strength as well as his own pride. Once the vast army was repelled, it was said he promised to duel the swordsman once again before soaring back into the endless blue."
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
                evo4: "A divine tree with the powers of creation and rebirth. The Great War's battles rended the continents of Raktehelm in two, leading to a natural increase in prayers toward Valhalla. However, few firsthand accounts of such behavior remain. Some despaired, thinking Valhalla had abandoned the eight races after their countless mistakes, but current theories suggest that is was merely preparing its true power for the devastation to come.",
                evo5: "A divine tree representing the world's will. Toward the end of the Great War, with the once-beautiful world of Raktehelm a mere shadow of its former self, Valhalla appeared at last in the skies over a raging battle and released the totality of its power. The world was suffused in a radiant light. the light eventually faded, the war eventually ended. And the survivors still had the earth, whose verdant glory returned, slowly but surely.",
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
    { //Abaddon - Complete
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
                evo3: "A mad knight spoken of in Demon legend. Records from just before the start of the Great War speak of a masked knight attacking Demon settlements. The Demon military moved to dispatch the criminal, but the killings ended before they were able to ascertain his whereabouts. Rumors began to spread that the mad knight was a new military weapon or just a conspiracy made up by other races. One thing was certain: he was far stronger than your average Demon.",
                evo4: "A mad knight spoken of in Demon legend. Just as old rumors began to fade, another incident had happened. The masked knight attacked the Demon army. Though thrown into chaos, the military beat back the knight with the help of a knight of their own, who described the attacker as a threat, certainly not a Demon, and questionably a living thing. Soon afterward, the masked knight vanished once more.",
                evo5: "A mad knight spoken of in Demon legend. Rumors of the masked knight died down after the tumult of the Great War had begun, but he woudl appear once more at the war's end. After falling into a trap, the Demon platoon was about to meet its end. Then suddenly, the knight appeared and annihilated the encroaching Gods. The Demons rejoiced, but the knight soon turned his sword on them, and in a ghostly voice, his armor said it would devour all their souls.",
                evoawk: "A masked knight spoken of in Demon legend. After countless massacres during the Great War, he had become known as the mad knight. Even those who had survived the bloodshed were engulfed in the insanity of his presence. No one knows where he is now, but if the words of his armor ring true, he will continue to plague the battlefield in search of souls to devour."
            }
    },
    { //Ragna - Missing Evolution, TW Image
        id: 100616112,
        name: "Ragna",
        attribute: "Fire",
        type: "God",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
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
                skill: "8s CT - 1800% Fire DMG (PHY). Chance to inflict Burn.",
                skillbreak: 2500,
                arts: "12000% Fire DMG (PHY). For 10s, increase Allies' DMG by 20%, Fire Allies' DMG by 30%.",
                artsbreak: 3000,
                truearts: "24950% Fire DMG (PHY). For 10s, increase Allies' DMG and Break PWR by 20%, Fire Allies' DMG and Break PWR by 30%.",
                trueartsbreak: 5500
            },
        passive: 
            {
                ability1: "Increase Paralysis RES by 80%.",
                ability2: "Increase Blind RES by 80%.",
                ability3: "Increase DMG to Dark Enemies by 20%. Increase Dark RES by 10%.",
                ability4: "After using both True Arts and Arts, activate Transcendental Enhancement for 30s. Faint self for 12s after Transcendental Enhancement is deactivated. Transcendental Enhancement: Increase own Movement Speed, Skill CT REC, Equipment CT REC, DMG and Break PWR by 100%."
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
                name: "Day Break",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "55s CT - 6500% Fire DMG (PHY). Increase own Arts by 80 if user is near-death.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Ragna, increase DMG by 20% and increase Status RES (except Faint) by 100%.",
                        ability2: "Increase DMG to Demon Enemies by 50%."
                    }
            },
        lore: 
            {   
                evo3: "A God knight who threw his lot in with Humans. Originally a high-ranking knight among the Gods, he began a journey in search of strong foes to improve himself further. As he witnessed Humans dueling each other, he grew intrigued, the passion of people living to their truest potential coming through in the fights between heroes who would one day be known as Blade Masters. He realized what he lacked. And this only made him stronger.",
                evo4: "A knight, born among the Gods, who chose to fight for Humans. Though Ragna observed many duels between Humans, he never participated. People only grew aware of his existence and power sometime after the beginning of the great war. Supposedly, he took up the sword to protect innocent children and the elderly who came under attack, telling those responsible not to 'spoil his fun' - words remembered even now.",
                evo5: "A knight, born among the Gods, who threw his lot in with Humans. During the Great War, Ragna aligned himself with no country, and continued travelling the world to help those in need. He turned his blade not just against Demons, but anyone who dared to harm the weak, inspiring fear in the strong and courage in the oppressed. Always a wellspring of hope, he never offered his name, leaving it blank from the pages of history.",
                evoawk: "A knight of the Gods whose name lives on only as a word of hope. Hailed as a savior in the Ancient War, he was in truth a brave protector of the weak and warrior for justice. And yet, for non-Humans, he was a figure of fear whose name is spoken even today in hushed tones. Today in Raktehelm, none alive know that the mantra of Ragna, spoken in times of deepest distress, is his true name."
            }
    },
    { //Yomi - Missing Lore, Evolution
        id: 100626212,
        name: "Yomi",
        attribute: "Water",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6708,
                hpplus: 999,
                atk: 2449,
                atkplus: 377,
                def: 2074,
                defplus: 321 
            },
        skillset: 
            {
                skill: "8s CT - 2000% Water DMG (PHY).",
                skillbreak: 1700,
                arts: "15000% Water DMG (PHY). For 15s, increase Allies' ATK by 20%.",
                artsbreak: 2000,
                truearts: "28000% Water DMG (PHY). If this True Arts hits a Broken Enemy, increase own Arts by 100 (only once per True Arts activation) + For 10s, increase own Critical Rate by 100%.",
                trueartsbreak: 3600 
            },
        passive: 
            {
                ability1: "Increase DMG to Dragon Enemies by 100%.",
                ability2: "Increase evasion by 35% when near-death.",
                ability3: "Increase DMG to Enemies in Break by 30%."
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
                evo4: "A swordswoman summoned to Raktehelm from another world. Prior to her summoning, it is said that while she was always an expert with the sword, she never had any special powers. In Raktehelm, however, she overflowed with magical energies, and water surrounded her always. protecting her from harm and forming into blades to attack her Demonic foes. And they're still telling stories of how she cut Afradohl's wings...",
                evo5: "A swordswoman summoned to Raktehelm from another world. Though she followed orders to fight against the Demons, a fight she had against a certain scythe-wielding Demoness changed her when she realized that her opponent had once been Human, and that the Demons altered people, turning them into weapons. This only made her magic power stronger, and steeled her resolved to defeat the enemies of Humans.",
                evoawk: "A mysterious swordswoman summoned from another world. She once valued loyalty above all, but eventually, she came to doubt her God masters as much as the Demons. Ironically, the more she doubted, the sharper her blade cut. But soon, she will find that this power she sought to defend her home will bring even greater tragedy and hatred. And so she sets out on a journey to discover how to destroy forever her true enemy; War."
            }
    },
    { //Vaid - Missing Lore, Evolution
        id: 100636312,
        name: "Vaid",
        attribute: "Earth",
        type: "Machine",
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
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 8409,
                hpplus: 999,
                atk: 2521,
                atkplus: 388,
                def: 1945,
                defplus: 301
            },
        skillset: 
            {
                skill: "9s CT - 1600% Earth DMG (PHY). For 9s, reduce Enemies' PHY RES by 10%, chance of reducing Enemies' Break RES by 3%.",
                skillbreak: 1600,
                arts: "12000% Earth DMG (PHY). For 20s, increase Earth Allies' Break PWR by 25%.",
                artsbreak: 2500,
                truearts: "18000% Earth DMG (PHY). Increase own Arts by 80. When used against Enemies in BREAK, increase Earth Allies' Arts by 20 + For 12s, increase Allies' DMG by 80%.",
                trueartsbreak: 6000
            },
        passive: 
            {
                ability1: "Increase Arts by 1/s.",
                ability2: "Increase DMG to Beast Enemies by 80%."
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
                evo5: "A machine weapon that fought during the great war. The small module's will won many battles, during which the large module rarely objected. Only once did the modules differ in opinion. After discovering an enemy Beast commander, the small module released all weapons and unleashed a devastating barrage. The commander survived, but the large module refused to attack. "That is your foe. Not mine," it said.",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Elfalla - Missing Lore
        id: 100646412,
        name: "Elfalla",
        attribute: "Light",
        type: "Beast",
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
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6708,
                hpplus: 915,
                atk: 2376,
                atkplus: 439,
                def: 2614,
                defplus: 411
            },
        skillset: 
            {
                skill: "9s CT - 1600% Light DMG (PHY). Chance to inflict Paralysis.",
                skillbreak: 1100,
                arts: "12000% Light DMG (PHY). High chance to inflict Paralysis + For 15s, increase Light Allies' Break PWR by 30%.",
                artsbreak: 1600,
                truearts: "27000% Light DMG (PHY). Increase own Arts by 60 + For 20s, reduce Enemies' Paralysis RES by 50%.",
                trueartsbreak: 2900
            },
        passive: 
            {
                ability1: "Increase Paralysis RES by 60%.",
                ability2: "Increase Dark RES by 15%."
            }, 
        evolution: 
            {
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
                    mat3amt: 2,
                    hover3: "Fosradius",
                }
            },
        lore: 
            {   
                evo3: "A hero of the Beasts later known as the Azure Saint. Much hope was placed in him from an early age... perhaps because he defeated a lion with his bare hands at age 10. Belying his fierce appearance was a surprising warmth, and his gentle smile provided inspiration for many. One day, word arrived of a Machine attack on a settlement in a nearby region. Unbeknownst to him, one of these machines would influence the rest of his life...",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "A Beast hero renowned as the Azure Saint, Elfalla attempted to put a stop to a machine weapon of mass destruction, only for the weapon to inform him of a great sin he had committed during an earlier mission. Barely managing to escape, Elfalla found his actions clouded, but was stirred to act once more upon seeing his fellow soldiers doing their best to repay him. He would stop at nothing to stop the rampaging weapon.",
                evoawk: "A hero praised as the Empyreal Beast. After realising his mistake in fleeing from the Machine weapon, he rushed back to the battlefield. Though afraid he was too late to stop the inevitable slaughter, he arrived to see his brothers-in-arms fighting against the menace, empowered by the belief that he would return. That was the inspiration he needed to shed his past regrets and face his destined foe."
            }
    },
    { //Lily - Missing Lore, Evolution
        id: 100656512,
        name: "Lily",
        attribute: "Dark",
        type: "Demon",
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
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6708,
                hpplus: 999,
                atk: 2976,
                atkplus: 456,
                def: 1944,
                defplus: 307
            },
        skillset: 
            {
                skill: "7s CT - 2500% Dark DMG (PHY). DMG and Critical Rate of this Skill increases the lower the Enemies' HP becomes.",
                skillbreak: 1150,
                arts: "11800% Dark DMG (PHY). DMG and Break PWR of this Arts increases the higher the attacked Enemy's HP is.",
                artsbreak: 2800,
                truearts: "23800% Dark DMG (PHY). For 12s, increase own Critical Rate by 100% and reduce Enemies' Movement Speed by 30%.",
                trueartsbreak: 4500
            },
        passive: 
            {
                ability1: "When near-death, heal own HP by 4% of DMG dealt.",
                ability2: "Increase Curse RES by 100%.",
                ability3: "Increase Dark RES by 25%.",
                ability4: "Increase DMG by 10% and increase Arts by 2/s."
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
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 3,
                    hover3: "RagsherumPhantom",
                    mat4: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat4amt: 4,
                    hover4: "Oldeus",
                    mat5: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat5amt: 2,
                    hover5: "Flogassa"
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "A murderous weapon that fought for the Demons during the Great War. Lily used her enormous scythe to cut down countless Gods. One day, a swordswoman from another world appeared before her, fighting for the Gods. During the fight, the swordswoman tried to speak to Lily again and again, but to no avail. The swordswoman unleashed hidden magical energy shatter Lily's scythe, promising to save her, someday, somehow.",
                evo5: "A murderous weapon that fought for the Demons during the Great War. After losing to the otherworldly swordswoman, Lily sought even greater power, and used forbidden Demonic arts to form a pact with the reaper. With unimaginable strength and a new scythe, Lily returned to the battlefield... but her mind was slowly being consumed by the reaper. Those who survived described Lily as the reaper incarnate, desperately searching for her mark.",
                evoawk: "An opponent of the Gods in the Ancient War who was called the Deathbringer of Corpse Mountain. In truth, she was a Human girl who turned her hatred into a continual search for power. Once the Deathdealer had her target, she would pursue it without cease, even to death. Once, when she came again against a swordswoman who had ducked her demonic sickle once before, she took on the demeanor of a death-dealing force of nature to kill her foe. For some reason, the swordswoman merely complained under her breath and readied her sword. History does not record what happened next."
            }
    },
    { //Rayas - Missing Evolution, TW Image
        id: 101016411,
        name: "Rayas",
        attribute: "Light",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 7213,
                hpplus: 999,
                atk: 2851,
                atkplus: 437,
                def: 2319,
                defplus: 357
            },
        skillset: 
            {
                skill: "8s CT - 1550% Light DMG (PHY).",
                skillbreak: 1450,
                arts: "7200% Light DMG (PHY). For 20s, increase Allies' ATK by 30%.",
                artsbreak: 1800
            },
        passive: 
            {
                ability1: "Increase Dark RES by 25%.",
                ability2: "Increase DMG to God Enemies by 30%.",
                ability3: "Increase DMG to Demon Enemies by 30%."
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 2
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45: //reym how do crystal thing
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRayas.png",
                    mat3amt: 1,
                    hover3: "Rayas",
                }
            },
        trueweapon: 
            {
                true1: 
                {
                    name: "Regracia",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "50s CT - 6600% Light DMG (PHY).",
                    skillbreak: 1600,
                    passive: 
                        {
                            ability1: "When equipped by Rayas, increase DMG by 20%. Does not stack with similar Abilities.",
                            ability2: "Increase Allies' ATK by 15%."
                        }
                },
                true2: 
                {
                    name: "Grand Scale",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "55s CT - 10000% Light DMG (PHY). For 12s, increase own DMG by 60%. If user is Light, increase own ATK by 60%.",
                    skillbreak: 800,
                    passive: 
                        {
                            ability1: "When equipped by Rayas, increase the duration of X-PHOSE mode by 30s. Increase Arts by 100 when entering X-PHOSE mode.",
                            ability2: "Increase ATK by 10%."
                        }
                }
                
            },
        lore: 
            {   
                evo2: "A new recruit at the Isliid Adventurer's Guild. An orphan from the surrounding area, Rayas has been friends with imperial knight Roy for as long as he can remember. His interest in history and ancient ruins inspired him to become an adventurer, and he dreams of making a never-before-seen historical discovery. His skills with a sword are above average, but Roy often chastises him for a lack of effort.",
                evo3: "An adventurer from the Isliid Adventurer's Guild, Rayas became involved in the battle against the Demons after encountering the amnesiac Iris during a training exercise with Ganan, his guildmaster. While protecting Iris, the power to summon the spirits of ancient heroes awoke within him, allowing him to successfully summon one of the legendary Blade Masters. His abilities with sword and summon will only grow stronger.",
                evo4: "During his travels to defeat the Demons, Rayas encountered the Demon Suppression Corps composed of members from the Great Nations. His old friend Roy, is there as well, and the group's strength proves inspiring enough to further draw out his latent abilities (not that he noticed). Now a part of the Corps, Rayas returns to his journey with expectations of further growth.",
                evo5: "An adventurer journeying with friends to end the Demon menace. Contrary to his great strength, few know of his name and exploits, but even the handpicked warriors he journeys with have their eyes on him. Real experience has sharpened his talent with a sword and he’s managed to summon just Blade Masters, but incredible heroes from all of the eight races. Rayas still wants more, however, and so his journey continues.",
                evoawk: "Currently unreleased in Global."
            }
    },
    { //Iris - Missing Lore, Evolution, TW Image
        id: 101025411,
        name: "Iris",
        attribute: "Light",
        type: "God",
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
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 5000,
                hpplus: 400,
                atk: 2000,
                atkplus: 400,
                def: 2000,
                defplus: 400
            },
        skillset: 
            {
                skill: "8s CT - 1650% Light DMG (MAG).",
                skillbreak: 1250,
                arts: "6500% Light DMG (MAG). For 10s, increase Allies' stats by 20%.",
                artsbreak: 2100,
            },
        passive: 
            {
                ability1: "When an Ally dies (except self), revive that Ally with 33% HP. Ability can only be activated once per Quest."
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
                }
            },
        trueweapon: 
            {
                name: "Raaz",
                slot: "/db/Mines/thumbnail/defLB.png",
                detail: "",
                skill: "50s CT - For 15s, Allies gain a DMG barrier that negates 1000 DMG, increase Allies' DMG RES by 20% and Status RES (except Faint) by 100%.",
                skillbreak: 0,
                passive: 
                    {
                        ability1: "When equipped by Iris, increase Evasion by 50%. Does not stack with Abilities of the same name.",
                        ability2: "Increase Status RES (except Faint) by 30%."
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "A divine girl who has the power to break down the barriers surrounding Gods. Though Iris was unaware she possessed such a rare power, she was discovered by a Demon and held as a research subject for anti-God weaponry. Profound in their cruelty, Iris lost her memories as a result of the experiments, but eventually managed to escape. Her encounter with a young man awakened her true power further.",
            }
    },
    { //Roy (WateR) - Missing Lore, Evolution, TW Image
        id: 101036211,
        name: "Roy (Water)",
        attribute: "Water",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7296,
                hpplus: 999,
                atk: 2722,
                atkplus: 418,
                def: 2266,
                defplus: 349
            },
        skillset: 
            {
                skill: "8s CT - 2150% Water DMG (PHY). During Enemy Arts, increase Critical Rate of this Skill by 50% and Break PWR of this Skill by 70%.",
                skillbreak: 2000,
                arts: "15500% Water DMG (PHY). During Enemy Arts, increase Critical Rate of this Arts by 100% and Break PWR of this Arts by 150%.",
                artsbreak: 3200,
                truearts: "30800% Water DMG (PHY). High chance to inflict Ultimate Freeze.",
                trueartsbreak: 5600
            },
        passive: 
            {
                ability1: "Increase Rayas' DMG by 30%.",
                ability2: "Increase Allies' DMG RES by 15%.",
                ability3: "When near-death, heal 60 HP/s."
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
                name: "Gaimalse",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "60s CT - 6000% Water DMG (PHY). For 10s, increase Allies' ATK by 30%.",
                skillbreak: 2200,
                passive: 
                    {
                        ability1: "When equipped by Roy, increase DMG by 20%.",
                        ability2: "Increase DMG by 10% when near-death."
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "An old friend of Rayas chosen by the Great Nations for its Demon Suppression Corps, Roy is the commander of Fenrir, the thrid unit of the imperial knights. many were opposed to Roy becoming commander, due to his youth and lowborn status, but he attained the position with the support of the Emperor and Empress. He was supposedly tasked with such a dangerous mission by the nobility, who despise him.",
                evo5: "A knight of Isliid traveling with his allies to eliminate the Demon menace, Roy knows the secret concealed in Raktehelm's history, and seeks a world in which all races can live as equals. Though he once attempted to force a way forward, his way of thinking gradually became more flexible as he fought against the Demons with his friends. When light reached his stubborn heart, he was freed in the truest sense of the word, unleashing his true potential.",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mira (Fire) - Missing Lore, Evolution, TW Image
        id: 101046111,
        name: "Mira (Fire)",
        attribute: "Fire",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6660,
                hpplus: 999,
                atk: 2904,
                atkplus: 445,
                def: 2292,
                defplus: 353
            },
        skillset: 
            {
                skill: "7s CT - 2100% Fire DMG (PHY). Increase this Skill's Break PWR by 50% against Burned Enemies + For 8s, reduce Enemies' Burn RES by 30%.",
                skillbreak: 1750,
                arts: "15500% Fire DMG (PHY). 100% chance to inflict Burn + Increase this Arts' Break PWR and Critical Rate by 50% against Burned Enemies.",
                artsbreak: 3000,
                truearts: "25500% Fire DMG (PHY). Increase this True Arts' DMG and Break PWR and Critical Rate by 100% against Burned Enemies.",
                trueartsbreak: 5000
            },
        passive: 
            {
                ability1: "Increase DMG to Demon Enemies by 70%.",
                ability2: "When this unit dies, revive with 1 HP + For 5s, HP cannot drop below 1, heal HP by 16%/s (80% max HP). Can only be activated once per Quest. If revived by another unit or equipment, Ability is reset.",
                ability3: "When near-death, increase ATK and Break PWR by 30%."
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
                name: "Noble Bamint",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "70s CT - 8400% Fire DMG (MAG). 70% chance to inflict Burn.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Mira, increase DMG by 20%.",
                        ability2: "Increase DMG to Earth Enemies by 5%."
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Vice-commander of the Bamint knight order 'Rose Garden' and member of the Demon extermination squad. Though a princess, she chose the life of a knight instead. Mira refuses to mince words and has a strong sense of justice, resulting in her often acting impulsively and ignoring the actions of others. This has made her some enemies, but her willingness to defend the weak has made her friends to spare.",
                evo5: "Third princess of Bamint, who travels with her allies to defeat the Demon menace. She ignored the opinions of Bamint's upper echelons, who didn't want to oppose the Demons, and joined the Demon Suppression Squad on her own. She seems aware of the rumor that they let her join just to get rid of her. She finds it difficult to live true to herself while traveling with others, and will continue forcing her way forward to find a place she can call home.",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Fen (Earth) - Missing TW Image
        id: 101056311,
        name: "Fen (Earth)",
        attribute: "Earth",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101054311.png",
                detail5: "/db/Units/Detail/unit_detail_101055311.png",
                detailawk: "/db/Units/Detail/unit_detail_101056311.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101054311.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101055311.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101056311.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 5820,
                hpplus: 883,
                atk: 2642,
                atkplus: 406,
                def: 2257,
                defplus: 348
            },
        skillset: 
            {
                skill: "7s CT - 1850% Earth DMG (PHY). Increase Allies' Arts by 4, heal the Ally with the lowest current HP by 3%.",
                skillbreak: 1150,
                arts: "13000% Earth DMG (PHY). For 20s, increase Allies' Equipment CT REC by 25%.",
                artsbreak: 2200,
                truearts: "21500% Earth DMG (PHY). For 20s, increase Allies' Arts by 3/s, increase Allies' Equipment DMG by 50%.",
                trueartsbreak: 4600
            },
        passive: 
            {
                ability1: "Increase Allies' evasion by 15%. Does not stack with Abilities of the same name.",
                ability2: "Increase DMG to Enemies with 50% or less HP by 20%. Does not stack with Abilities of the same name.",
                ability3: "Increase DMG to Human Enemies by 80%.",
                ability4: "When near-death, increase ATK by 50%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 3,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat4amt: 4,
                    hover4: "Elpneumas",
                    mat5: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat5amt: 5,
                    hover5: "Goldola"
                }
            },
        trueweapon: 
            {
                name: "Efkeria",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "35s CT - 5000% Earth DMG (PHY). Heal own HP by 260 and increase own Arts by 20 each time this attack hits an Enemy (only once per enemy, per usage).",
                skillbreak: 1500,
                passive: 
                    {
                        ability1: "When equipped by Fen, increase DMG by 20%. When near-death, increase evasion by 15%. Does not stack with Abilities of the same name.",
                        ability2: "Increase DMG to Enemies with 50% or less HP by 15%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo4: "Head of General Staff in Gramenia, and member of the Demon Suppression Corps. Fen is a tactical genius, and trusted more than the president of his own country, but his tendency to vocalise harsh opinions has earned him many enemies. His talents made him head of General Staff by his 29th birthday, but the sweeping reforms he later made to the military drew the ire of the top brass. He proposed the Corps and joined it of his own volition.",
                evo5: "The Gramenian head of General Staff who worked to defeat the Demonic threat. After the destruction of the Demon Suppression Corps, Fen returned to Gramenia and acted to protect his position, drawing harsh criticism from his opponents. Knowing the threats that the Demons pose, however, forced Fen to do everything to retain his position. When someone who understands the situation appears, he'll finally have the freedom to command as he sees fit.",
                evoawk: "The current head of General Staff for Gramenia became a skilled commander despite his underprivileged childhood. Having already changed his whole life to achieve power and status, this stern man once again begins to change when he meets an adventurer who offers the same words he heard in his childhood. Now, his enemies defeated and the strength he sought in hand, he begins little by little to gain control over the power sleeping within him, for his own sake and for those who count on him."
            }
    },
    { //Zeorg (Light) - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101066411,
        name: "Zeorg (Light)",
        attribute: "Light",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7212,
                hpplus: 999,
                atk: 3072,
                atkplus: 470,
                def: 1992,
                defplus: 308
            },
        skillset: 
            {
                skill: "9s CT - 2500% Light DMG (PHY). Heal own HP by 100.",
                skillbreak: 1000,
                arts: "13800% Light DMG (PHY). Chance to inflict Faint.",
                artsbreak: 1990,
                truearts: "24900% Light DMG (PHY). High chance to inflict Faint. Increase own Arts by 50.",
                trueartsbreak: 2850
            },
        passive: 
            {
                ability1: "Increase Allies' Critical Rate by 30% against Enemies in Break.",
                ability2: "Increase DMG to Demon Enemies by 50%.",
                ability3: "Increase DMG to God Enemies by 50%."
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
                name: "Ryude Magus",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "50s CT - 8500% Light DMG (PHY). For 8s, increase Allies' Critical Rate by 60% against Enemies in Break.",
                skillbreak: 1400,
                passive: 
                    {
                        ability1: "When equipped by Zeorg, increase DEF by 50% and DMG by 20%. Does not stack with Abilities of the same name.",
                        ability2: "Increase Allies' Critical DMG against Enemies in Break by 20%. Does not stack with Abilities of the same name."
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
    { //Melia (Dark) - Missing TW Image
        id: 101076511,
        name: "Melia (Dark)",
        attribute: "Dark",
        type: "Human",
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
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6420,
                hpplus: 973,
                atk: 2808,
                atkplus: 431,
                def: 2274,
                defplus: 351
            },
        skillset: 
            {
                skill: "9s CT - 2200% Dark DMG (MAG). Heal self by 2% of own max HP.",
                skillbreak: 1000,
                arts: "13800% Dark DMG (MAG). Chance to inflict Blind. During Arts, stop Enemy actions. Refresh Skill CT for Allies + For 4s, increase Allies' BE generation by 50%.",
                artsbreak: 2000,
                truearts: "28400% Dark DMG (MAG). During True Arts, stop Enemy actions. Steals 20 of Enemies' Arts + For 10s, increase Allies' MAG DMG by 50%.",
                trueartsbreak: 3500
            },
        passive: 
            {
                ability1: "Heal Allies' HP by 10/s.",
                ability2: "When damaged while near-death, for 10s, gain a DMG barrier that negates 2000 DMG. Ability can only be activated once every 60s.",
                ability3: "Increase DMG to God Enemies by 90%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat3amt: 4,
                    hover3: "Radachne",
                    mat4: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat4amt: 3,
                    hover4: "Mavroskia",
                    mat5: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat5amt: 2,
                    hover5: "Ifrit"
                }
            },
        trueweapon: 
            {
                name: "Maleficium",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "90s CT - 13000% Dark DMG (MAG).",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Melia, increase DMG by 20% and heal HP by 10/s. Does not stack with Abilities of the same name.",
                        ability2: "Increase DMG against Blinded Enemies by 20%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo4: "Vice-commander of the La Riiz 3rd Magus Division and member of the Demon Suppression Corps. Known as Blue-eyed Black Fox, she's an expert at data collection operations with many successful infiltrations under her belt. Though her voluptuous appearance has engendered many rumours, she acknowledges none of them. The only thing certain about her is that anyone who brings up the subject of marriage to her will never mention the word ever again.",
                evo5: "A mage from La Riiz who fought to end the Demonic menace. She has an upbringing she'd prefer not to bring up, and had a tendency to distance herlfrom from others. After journeying with the destined young heroes of the Demon Suppression Corps, her repressed kindness slowly began to reveal itself. It's not just her powerful magic, but her long-buried ability to feel for others that is her source of strength.",
                evoawk: "A sorcerer who chose to embrace the darkest parts of the Magus Empire of La Riiz. Her particular abilities and tendency toward rash, independent action invited dangerous misunderstandings. She fell into a trap, straining the faith of her friends, yet the unwavering trust of the adventurer broke through to her, and she resolved to face up to her past. Her sorcery thus broke away from her shadowy past to become something brilliant, something greater, something to protect those she held dear."
            }
    },
    { //Ragsherum - Missing TW Image
        id: 101086511,
        name: "Ragsherum",
        attribute: "Dark",
        type: "Demon",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 5,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6743,
                hpplus: 999,
                atk: 2739,
                atkplus: 420,
                def: 2420,
                defplus: 373
            },
        skillset: 
            {
                skill: "9s CT - 3000% Dark DMG (PHY). Increase own Arts by 9.",
                skillbreak: 1200,
                arts: "18500% Dark DMG (PHY). Consumes 20% of own HP. Chance to inflict Faint.",
                artsbreak: 1900,
                truearts: "30050% Dark DMG (PHY). High chance to inflict Faint. Consumes 30% of own HP + For 25s, gain a DMG barrier that negates 3000 DMG to self.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase Dark RES by 10%. Increase own ATK and DEF based on how low HP is (up to 100%).",
                ability2: "When near-death, heal own HP by 4% of DMG dealt.",
                ability3: "Increase Status RES by 60%."
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
                name: "Geshpenst",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "50s CT - 7200% Dark DMG (PHY).",
                skillbreak: 1600,
                passive: 
                    {
                        ability1: "When equipped by Ragsherum, increase DMG by 20% and Skill CT REC by 50%. Does not stack with Abilities of the same name.",
                        ability2: "Increase Allies' ATK by 15%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo4: "A demon once sealed in Gormarey, until a break in the seal led to his resurrection. Ragsherum served as divisional commander under Auge, one of the six great Demon Generals that ruled the Demons during the Great War. The strongest and most prominent of the revived Demons, he assumed command over Grad and Nier as subordinates. He sought to fully resurrect the Demons, but was defeated by Rayas and his allies.",
                evo5: "After falling to Rayas and company, Ragsherum dedicates his life to the resurrection of the Demon Generals. Though a Demon, he possesses something resembling a chivalric dedication to his cause, and a high degree of devotion to the Generals. Though he doesn't destroy or kill for sport, he will pursue mass slaughter if it would achieve his goals. He's wary of Humans, who now rule Raktehelm despite being the weakest race during the Great War.",
                evoawk: "The divisional commander of the six great Demon Generals that revived at the Sealed Fortress Gormarey. At first, Demons were reviving sparsely. However, since they considered power the most, they never worked as groups and fought against themselves. One day Ragsherum had suppressed all the others and started his plan to revive Auge at Gormarey. Not only that, he desired to get the heart of Humans, the winner of the Ancient War, and to put them in fear and despair."
            }
    },
    { //Grad - Missing Lore, Evolution, TW Image
        id: 101096511,
        name: "Grad",
        attribute: "Dark",
        type: "Demon",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7999,
                hpplus: 999,
                atk: 2369,
                atkplus: 369,
                def: 2636,
                defplus: 405
            },
        skillset: 
            {
                skill: "9s CT - 2666% Dark DMG (PHY).",
                skillbreak: 666,
                arts: "16666% Dark DMG (PHY). For 5s, increase Allies' Critical Rate by 100%, Fire, Water and Earth RES by 50%.",
                artsbreak: 1666,
                truearts: "44444% Dark DMG (PHY). Consume 50% of own HP + For 30s, reduce own DMG RES by 40%, increase own DMG by 50%, increase own Crit Rate by 100% and heal own HP for 1% of DMG dealt.",
                trueartsbreak: 2666,
                //tentative??? reym help do i just write crossarts for the ca 
                crossarts: "66666% Dark DMG (PHY). For 99s, increase Grad and Nier's DMG by 66%, Critical DMG by 99%.",
                crossartsbreak: 2666
            },
        passive: 
            {
                ability1: "Increase Blind RES by 50%.",
                ability2: "Increase Demon Allies' DMG against God Enemies by 20%. Does not stack with Abilities of the same name.",
                ability3: "When at MAX HP, increase ATK by 100%."
            }, 
        evolution: 
            {
                evo45: //reym how do the funky 20 stone thing
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGrad.png",
                    mat3amt: 20,
                    hover3: "Grad",
                }
            },
        trueweapon: 
            {
                name: "Berserk",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "70s CT - 6666% Dark DMG (PHY). For 10s, decrease Enemies' Dark RES and PHY RES by 20%.",
                skillbreak: 1666,
                passive: 
                    {
                        ability1: "When equipped by Grad, after using True Arts, increase DMG by 50% for 30s. Does not stack with Abilities of the same name.",
                        ability2: "Increase Critical DMG by 20%."
                    }
            },
        lore: 
            {   
                evo4: "A Demon once sealed in Gormarey, until a break in the seal led to his resurrection. Grad was a member of the squad dedicated to protecting Giaveil, one of The Six Great Demons. After his resurrection, he follows Ragsherum, renowned as one of the great Demon heroes, serving as one of his subordinated alongside Nier. A brutal lover of destruction and combat, Grad obsessively chases Rayas and his friends.",
                evo5: "After continuously suffering defeat at the hands of Rayas and his friends, Grad will do anything to win. ",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Nier - Missing Lore, Evolution, TW Image
        id: 101106511,
        name: "Nier",
        attribute: "Dark",
        type: "Demon",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 7666,
                hpplus: 937,
                atk: 2666,
                atkplus: 388,
                def: 2499,
                defplus: 348
            },
        skillset: 
            {
                skill: "8s CT - 1600% Dark DMG (PHY). High chance to inflict Disease.",
                skillbreak: 900,
                arts: "9999% Dark DMG (MAG). If attack hits, recover Allies' HP by 2000 (only once per Arts activation) + For 7s, increase Dark Allies' DMG by 44%.",
                artsbreak: 1666,
                truearts: "36666% Dark DMG (MAG). During this True Arts, ignore 50% of Enemies' DEF. For 20s, reduce Enemies' Disease RES by 50%.",
                trueartsbreak: 1666,
                crossarts: "66666% Dark DMG (PHY). For 99s, increase Grad and Nier's DMG by 66%, Critical DMG by 99%.",
                crossartsbreak: 2666
            },
        passive: 
            {
                ability1: "Increase Demon Allies' Light RES by 15%. Does not stack with Abilities of the same name.",
                ability2: "Allies ignore 50% of Diseased and/or Poisoned Enemies' DEF. Does not stack with Abilities of the same name.",
                ability3: "Increase lifesteal RES by 30%."
            }, 
        evolution: 
            {
                evo45:　//reym how do orb evo mats
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 1
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragNier.png",
                    mat3amt: 20,
                    hover3: "Nier",
                }
            },
        trueweapon: 
            {
                name: "Basilisk",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "70s CT - 6666% Dark DMG (PHY). For 10s, increase own Dark DMG by 44%.",
                skillbreak: 1666,
                passive: 
                    {
                        ability1: "When equipped by Nier, increase Healing Taken and accuracy by 30%. Does not stack with Abilities of the same name.",
                        ability2: "Increase DMG to Poisoned/Diseased Enemies by 15%."
                    }
            },
        lore: 
            {   
                evo4: "The Demon that revived when the seal was partly destroyed at the sealed area Gormarey. She was a member under Ze-Lemma, one of The Great Six Demons, who created the Special Magic Lab. She gets obsessed with results, but even if she fails if that is what makes her closer to her goal, she will accept it. However, her decisions are unique, so people around her think she moves depending on her feelings.",
                evo5: "Being defeated several times by Rayas and the others, she calmly reviewed her cause of it, and planned to fight with grad who she was at odds. She felt humiliated, but she only pretended to feel like so in order to make him agree with her. For her, this was a matter of course for what her goal. Primarily, she was better at researching than fighting and she was doing research on anti-God magic during the Ancient War. After reviving, she was head of creating Iris's copies.",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ganan - Missing Evolution, TW Image
        id: 101116111,
        name: "Ganan",
        attribute: "Fire",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7100,
                hpplus: 999,
                atk: 2448,
                atkplus: 377,
                def: 2050,
                defplus: 317
            },
        skillset: 
            {
                skill: "9s CT - 2000% Fire DMG (PHY). Increase own Arts by 5.",
                skillbreak: 2200,
                arts: "15000% Fire DMG (PHY). For 15s, increase own ATK by 200%, increase Freeze and Paralysis RES by 100%. During Berserk Mode: 15000% Fire DMG (PHY). Consume 40% of own HP, increase this Arts' DMG by 200% + For 15s, increase own ATK by 200%, increase Freeze and Paralysis RES by 100%.",
                artsbreak: 3100,
                truearts: "40000% Fire DMG (PHY). Enter Berserk Mode for 55s + For 10s, reduce enemies PHY RES and Evasion by 30%.",
                trueartsbreak: 5000
            },
        passive: 
            {
                ability1: "During Berserk Mode, increase Arts by 1 per hit taken, reduce DMG RES by 35% and increase Critical Rate by 100%. When reduced to 1 HP, Exit Berserk Mode.",
                ability2: "Increase Break PWR by 10%.",
                ability3: "Increase DMG to Enemies in BREAK by 20%."
            }, 
        evolution: 
            {
                evo45: //reym how do i do the funky crystal thing for evo mats
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 3,
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGanan.png",
                    mat3amt: 20,
                    hover3: "Ganan",
                }
            },
        trueweapon: 
            {
                name: "Shurahalt",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "50s CT - 8000% Fire DMG (PHY). If user is Fire, for 6s, increase own DMG by 50% and Break PWR by 100%.",
                skillbreak: 2100,
                passive: 
                    {
                        ability1: "When equipped by Ganan, increase DMG by 80% during Berserk Mode.",
                        ability2: "Increase Allies' Break PWR by 15%."
                    }
            },
        lore: 
            {   
                evo4: "The guild master at the Reigard branch of the Adventurer's Guild. Once a commander of Isliid's self-defense knight corps, a failed operation led to his demotion. Since then, he focused on raising the next generation, and became part of the Adventurer's Guild, saying that the laid back work suits his personality better. He suffered from a terrible injury during his failed operation with the knights, making it impossible for him to unleash his full power.",
                evo5: "Everyone thought he was unable to use his full power because of his unhealed injuries. However, he had actually fully recovered from it long ago. Not being able to let go of the sins of the past limited his true powers. When he finally overcame his past, his power surged beyond its peak, unleashing a strike capable of rending the earth. However strong his enemies, his allies will always be able to depend on his smiling courage.",
                evoawk: "The most powerful warrior of the Adventurer's Guild and guild master of Reigard branch. Theroughout the days at Reigard, Ganan interacted with many young adventurers. Being touched by their passion, he reconsidered his own path, together with the unforgettable mistake of his past and the meaning of being a guild master now... Embracing the failure of his past, he takes a step forward to protect the heroes of tomorrow."
            }
    },
    { //Gilliam - Missing TW Image
        id: 101126311,
        name: "Gilliam",
        attribute: "Earth",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7320,
                hpplus: 999,
                atk: 2543,
                atkplus: 391,
                def: 2418,
                defplus: 372
            },
        skillset: 
            {
                skill: "9s CT - 1600% Earth DMG (PHY). For 6s, increase Allies' DEF by 10%.",
                skillbreak: 900,
                arts: "15000% Earth DMG (PHY). For 10s, increase Allies' Equipment DMG by 30%.",
                artsbreak: 1600,
                truearts: "37000% Earth DMG (PHY). For 20s, increase own DMG by 70% and ignore 100% of Enemy DEF.",
                trueartsbreak: 2000
            },
        passive: 
            {
                ability1: "Increase PHY RES by 10%.",
                ability2: "Increase Equipment CT REC by 20%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_Gilliam45.png",
                    mat3amt: 20
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGilliam.png",
                    mat3amt: 1,
                    hover3: "Gilliam",
                }
            },
        trueweapon: 
            {
                name: "Hepaistos",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "45s CT - 10000% Earth DMG (PHY). For 8s, increase own Earth DMG by 30%.",
                skillbreak: 300,
                passive: 
                    {
                        ability1: "When equipped by Gilliam, increase Allies' Equipment DMG by 20%. Does not stack with Abilities of the same name.",
                        ability2: "Increase DEF by 10%."
                    }
            },
        lore: 
            {   
                evo4: "A blacksmith who runs a weapons shop in the town of Reigrad. His expertise is known throughout nearby kingdoms, and though many would-be blacksmiths have begged to apprentice under him, only three have met his rigid standards. This means he can't take massive military orders like other blacksmiths, instead tailoring his work to individuals. He's also extremely picky about materials, and will fight monsters to get what he wants. He's drinking buddies with Ganan.",
                evo5: "Though originally a highborn child of Bamint, Gilliam decided he didn't want to live according to his parents' whims and left the house at age 16 to travel the world. After falling in love with a certain blacksmith and demanding to become their apprentice, he heard tales of the legendary weapons used by the 3 Blade Masters. He set off on a yourney to amass materials to forge an even greater weapon, and the trail lef him to set up shop in Reigrad.",
                evoawk: "Currently unreleased in Global."
            }
    },
    { //Liese (Light) - Missing TW Image
        id: 101136411,
        name: "Liese (Light)",
        attribute: "Light",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 7510,
                hpplus: 999,
                atk: 2550,
                atkplus: 392,
                def: 2550,
                defplus: 392
            },
        skillset: 
            {
                skill: "Recover Mode: 5s CT - Heal Allies' HP by 300. Attack Mode: 5s CT - 1800% Light DMG (MAG).",
                skillbreak: 1700, //how do i write this??? cause liese skill has two modes, one has 0 break the other has 1700
                arts: "Recover Mode: Heal Allies' HP by 2000, cure Allies' Status Ailments (except Faint). Attack Mode: 15500% Light DMG (MAG). High chance to inflict Paralysis.",
                artsbreak: 3450, //same comment for skill
                truearts: "28800% Light DMG (MAG). High chance to inflict Paralysis. Recover Allies' HP by 5000, revive fallen Allies with 30% HP (only able to revive fallen Allies once every 60s).",
                trueartsbreak: 4450
            },
        passive: 
            {
                ability1: "Switch between Attack Mode and Recover Mode when using Skill.",
                ability2: "Increase Equipment CT REC 15%.", 
                ability3: "Increase Status RES (except Faint) by 50%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat3amt: 3,
                    hover3: "Ifrit",
                    mat4: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat4amt: 2,
                    hover4: "Radachne",
                    mat5: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat5amt: 4,
                    hover5: "CodeXTF"
                }
            },
        trueweapon: 
            {
                name: "Rig Arcela",
                slot: "/db/Mines/thumbnail/healLB.png",
                detail: "",
                skill: "50s CT - Cure Allies' status ailments (except Faint), heal Allies' HP by 1200.",
                skillbreak: 0,
                passive: 
                    {
                        ability1: "When equipped by Liese, increase DMG by 20%.",
                        ability2: "Increase Healing Output by 10%."
                    }
            },
        lore: 
            {   
                evo4: "High priestess of the shrine in Reigard, Liese's parents emigrated to Isliid from Famelle in order to spread the teachings of the Guiding Light. At age 4, Liese began training at Famelle's great shrine. Her talents saw her becoming a priestess at age 10, and was assigned to Reigard's shrine at 11. Though she's currently only 13, she's far more dignified and regal in presence than Rayas.",
                evo5: "Called a genius, her light magic are powerful enough to be termed "miracles", but she still has moments that reveal that yes, she is in fact a teenager. Like when she goes out for ice cream with the other girls in town. her eyes then were not those of a high priestess, but of a regular girl. The moments where Liese acknowledges her own youth are moments that cause her heart to soar, unleashing ever greater power and potential.",
                evoawk: "Although she had pride in being a priestess, she acknowledged that living in a shrine meant living in a closed world. Since some time or another, an adventurer and his friends started visiting her and telling stories of their journeys. The stories sometimes exciting and at other times terrifying. What kind of judgment should she make as a follower of the Light God? This question and responsibilities led her to a higher dignity and more power as a priestess."
            }
    },
    { //Est - Missing Lore, Evolution, TW Image
        id: 101146211,
        name: "Est",
        attribute: "Water",
        type: "Human",
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
                hp: 7188,
                hpplus: 999,
                atk: 2784,
                atkplus: 427,
                def: 2138,
                defplus: 330
            },
        skillset: 
            {
                skill: "10s CT - 2800% Water DMG (PHY). Chance to inflict Freeze.",
                skillbreak: 1800,
                arts: "14000% Water DMG (PHY). For 10s, increase Allies' Water DMG to Enemies in Break by 70%.",
                artsbreak: 2750,
                truearts: "23500% Water DMG (PHY). For 10s, increase Allies' DMG to Enemies in Break by 100%.",
                trueartsbreak: 4550
            },
        passive: 
            {
                ability1: "When Ganan is in party, increase Allies' DMG by 5%.",
                ability2: "Giant Boss' Break Bar is halved at the beginning of battle. Raid Bosses' Break Bars take 20000 Break DMG instead. Ability can only be activated once per Quest.",
                ability3: "Increase DMG to Giant Bosses by 50%."
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
                name: "Wahrheit",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "90s CT - 10800% Water DMG (PHY). If user is Human, increase Arts DMG by 50%. For 10s, reduce own Arts by 2/s.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Est, increase DMG and Break PWR by 20%. Does not stack with Abilities of the same name.",
                        ability2: "Increase PHY DMG by 15%. Does not stack with Abilities of the same name."
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
    { //Sophie - Missing Lore, Evolution, TW Image
        id: 101156111,
        name: "Sophie",
        attribute: "Fire",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6731,
                hpplus: 999,
                atk: 2310,
                atkplus: 356,
                def: 2238,
                defplus: 345
            },
        skillset: 
            {
                skill: "8s CT - 1200% Fire DMG (PHY). For 6s, reduce Enemies' Break RES by 15%.",
                skillbreak: 2500,
                arts: "10000% Fire DMG (PHY). For 10s, increase Allies' Skill CT REC by 50%. Fire Allies' Skill CT REC is increased by 100% instead.",
                artsbreak: 2900,
                truearts: "27000% Fire DMG (PHY). High chance to inflict Burn. If Enemy was Burned by own True Arts or was already Burned when own True Arts was activated, for 10s, reduce Enemies' Fire RES by 50%.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "Increase Fire Allies' ATK by 30%.",
                ability2: "Increase Burn RES by 80%."
            }, 
        evolution: 
            {
                evo45: //rEYm how to rocc
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragSophie.png",
                    mat3amt: 20,
                    hover3: "Sophie",
                }
            },
        trueweapon: 
            {
                name: "Wild Cat",
                slot: "/db/Mines/thumbnail/suppLB.png",
                detail: "",
                skill: "60s CT - 1000% Fire DMG (PHY). For 20s, increase Allies' Break PWR by 25%, and Fire Allies' DMG by 15%.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Sophie, increase accuracy by 30% and increase own Arts by 2/s.",
                        ability2: "Increase DMG dealt against Enemies in BREAK by 10%."
                    }
            },
        lore: 
            {   
                evo4: "Proprietress and head chef of the Firecat's Den in Reigrad, which boasts flavours and prices that make it popular among the common people. Her father, who is also her teacher, is currently retured due to injury, but hailed from a family of high-class Bamantian restauranteurs. Displeased with the idea that his food would only be enjoyed by the rich, he left on a journey in search of freedom.",
                evo5: "Sophie was taught not only how to cook, but also how to acquire important ingredients on her own. How to lay traps for animals, how to traverse dangerous environs and live to talk about it, and how to fight. This training has made her an extremely capable adventurer recognised by even Ganan. Because of her upbringing, she's eye for men is extremely demanding, and she has yet to find someone who sets her heart aflutter.",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rem (Grand Summoners) - Missing Lore, TW Image
        id: 101166511,
        name: "Rem (Grand Summoners)",
        attribute: "Dark",
        type: "Human",
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
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6944,
                hpplus: 999,
                atk: 2455,
                atkplus: 378,
                def: 2560,
                defplus: 394
            },
        skillset: 
            {
                skill: "10s CT - 2000% Dark DMG (MAG). During Skill, increase own BE generation by 50%.",
                skillbreak: 800,
                arts: "13000% Dark DMG (MAG). For 15s, reduce Enemies' ATK and DEF by 35%, reduce Enemies' RES to the element they have an Elemental Weakness against by 40%.",
                artsbreak: 1300,
                truearts: "25000% Dark DMG (MAG). Increase own True Arts' DMG by 100% against Light Enemies.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "When using Equipment, heal Allies' HP by 2%.",
                ability2: "Increase Allies' DMG to Enemies of a certain Element (depends on day of the week: Monday - Dark, Tuesday - Fire, Wednesday - Water, Thursday - Earth, Friday - Light, Saturday & Sunday - Random Element) and DMG RES of the same Element by a random percentage between 20% and 40% (changed daily).",
                ability3: "Increase Allies' MAG DMG by 15%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat3amt: 2,
                    hover3: "Mavroskia",
                    mat4: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat4amt: 1,
                    hover4: "Tonetaurus",
                }
            },
        trueweapon: 
            {
                name: "Alchemia",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "40s CT - 7200% Dark DMG (MAG). For 5s, increase own BE generation by 50%, reduce Enemies' ATK and DEF by 20%.",
                skillbreak: 700,
                passive: 
                    {
                        ability1: "When equipped by Rem, increase DMG by 20% and healing when using Equipment to 3% HP.",
                        ability2: "Increase MAG DMG by 10%. When near-death, increase Arts by 2/s."
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
    { //Arosdea - Missing Lore
        id: 101176112,
        name: "Arosdea",
        attribute: "Fire",
        type: "Dragon",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 7536,
                hpplus: 999,
                atk: 3017,
                atkplus: 462,
                def: 2030,
                defplus: 375
            },
        skillset: 
            {
                skill: "8s CT - 2200% Fire DMG (PHY). Chance to inflict Burn.",
                skillbreak: 1800,
                arts: "16000% Fire DMG (PHY). Increase Arts by 30 + For 10s, increase Allies' DMG to Enemies in BREAK by 100%.",
                artsbreak: 2600,
                truearts: "30000% Fire DMG (PHY). For 15s, reduce Enemies' DMG RES by 30%. For 30s, gain a DMG barrier that negates 3500 DMG to self.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "Increase DMG to Dragon Enemies by 100%.",
                ability2: "Increase Earth RES by 15%.",
                ability3: "When near-death, increase own Arts by 6/s."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat3amt: 5
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
    { //Selia (Regular) - Complete
        id: 101186212,
        name: "Selia",
        attribute: "Water",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6499,
                hpplus: 984,
                atk: 2549,
                atkplus: 392,
                def: 2574,
                defplus: 396
            },
        skillset: 
            {
                skill: "9s CT - 1700% Water DMG (MAG). Chance to reduce Enemies' DMG by 20% + For 8s, reduce Enemies' Freeze RES by 15%.",
                skillbreak: 1350,
                arts: "12800% Water DMG (MAG). High chance to inflict Freeze. Cleanse Allies' and Enemies' Burn.",
                artsbreak: 2100,
                truearts: "25000% Water DMG (MAG). High chance to inflict Freeze. Cleanse Allies' and Enemies' Burn + For 8s, reduce Enemies' Water RES by 20%.",
                trueartsbreak: 3800
            },
        passive: 
            {
                ability1: "Increase Fire RES by 35%.",
                ability2: "Increase DMG to Fire Enemies by 35%.",
                ability3: "Increase Allies' Burn and Freeze RES by 30%. Increase all Allies' Critical Rate by 50% against Frozen Enemies. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
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
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 1,
                    hover3: "Geo Zagnus",
                    mat4: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat4amt: 3,
                    hover4: "Aerugraxes",
                    mat5: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat5amt: 1,
                    hover5: "Oldeus"
                }
            },
        lore: 
            {   
                evo4: "One of the six witches in "Grimm Stella", a coven of witches written about in ancient histories, Selia is a master of powerful ice magic, and possesses a reckless personality that sees curiosity guiding her every action. Oblivious to her surroundings, once she sets her mind to something, it's almost certainly going to cause some serious damage. She caused countless incidents prior to the Great War, receiving the nickname "Trouble Witch".",
                evo5: "Selia travelled the world, eventually encountering a soldier whose life she had inadvertently saved. Bored of his pleas to kill him, she suddenly realised she had a plan. "He can definitely kill you," she said, pointing at the archer who conveniently walked by. In moments, the dragon soldier and archer began to fight. Happy that her plan had succeeded, she strolled off to observe the furious battle raging on Thaumazein Plain at the peak of summer.",
                evoawk: "The fierce battle ended before the eyes of distant watcher Selia. However, the massive flames of the warriors' final clash spread in a great wildfire, threatening to consume the entire wilderness. Selia saw this, and used her Absolute Zero sorcery. The plains were frozen solid, and the rampaging flames died out. This disaster became known as the Thaumazein Winter, when the grain belt was buried in snow. The truth of what happened is recorded nowhere, but she surely doesn't mind."
            }
    },
    { //Ashe Toto - Complete
        id: 101196312,
        name: "Ashe Toto",
        attribute: "Earth",
        type: "Spirit",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6185,
                hpplus: 939,
                atk: 2432,
                atkplus: 411,
                def: 1955,
                defplus: 350
            },
        skillset: 
            {
                skill: "9s CT - 1900% Earth DMG (PHY).",
                skillbreak: 1600,
                arts: "12000% Earth DMG (PHY). For 15s, increase Allies’ evasion by 30%.",
                artsbreak: 2000,
                truearts: "20000% Earth DMG (PHY). Cure Allies’ Status Ailments (Except Faint) + For 20s, increase Earth Allies’ Arts by 2/s.",
                trueartsbreak: 3400
            },
        passive: 
            {
                ability1: "Heal 10 HP/s.",
                ability2: "Increase own Equipment CT REC by 5%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat3amt: 2,
                    hover3: "Tonetaurus",
                }
            },
        lore: 
            {   
                evo4: "A spirit archer who fought prior to the Great War. A fox child, Toto was taken in by Eleanor, one of the six Great Witches, and spent his days training his archery skills in the depths of the forest. One day, he was ordered by Eleanor to chase down a troublesome witch who was disrupting nature's providence. After leaving the forest and travelling the world, he finally found Selia at Thaumazein Plain. Suddenly, a new, draconic challenger attacked...",
                evo5: "An archer who chased after the witch Selia, Ashe Toto was forced into a fierce fight against a newfound assailant. Dodging a furious flurry of slashes and moving in for a counterattack, Toto's skills with the bow were at their sharpest. As the swordsman attacked with all his might, Toto loosed an arrow to end it all... and realised he was going to lose. The explosion from their strikes engulfed him, and everything in his vision suddenly turned pure white...",
                evoawk: "The fiery Thaumazein Plain was once transformed into a frigid wasteland by the Witch of Disaster. The disgrace at being saved by his target and the anger at his own weakness that allowed it awakened the power sleeping within him. He fired an arrow with the whole of that strength, intending to bring the chase to an end. However, all that accomplished was ridding the Plain of her cold magic, making him its unwitting saviour."
            }
    },
    { //Duran - Complete
        id: 101206412,
        name: "Duran",
        attribute: "Light",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6792,
                hpplus: 999,
                atk: 2382,
                atkplus: 337,
                def: 2792,
                defplus: 428
            },
        skillset: 
            {
                skill: "10s CT - 3300% Light DMG (PHY). During this Skill, increase own DMG RES by 30%.",
                skillbreak: 2400,
                arts: "For 10s, Enemies take [??? × DMG they inflict on this unit] Light DMG (PHY) + For 15s, heal Allies' HP by 300/s & Allies gain a DMG barrier that negates 1200 DMG.",
                artsbreak: 0,
                truearts: "For 10s, take all DMG dealt to Allies instead, Enemies take [??? × DMG they inflict on this unit] Light DMG (PHY), and gain a DMG barrier that negates 9000 DMG to self. During True Arts, increase Paralysis and Freeze RES by 100%.",
                trueartsbreak: 0
            },
        passive: 
            {
                ability1: "When an Ally dies (except self), revive that Ally with 50% HP. Ability can only be activated once per Quest.",
                ability2: "Increase PHY RES by 20%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat3amt: 4,
                    hover3: "Code-XTF",
                }
            },
        lore: 
            {   
                evo4: "A Human soldier who fought prior to the Great War, Duran was known as a true and dependable knight. His hometown suffered a great fire. Though countless innocents fled for their lives in front of him, he could do nothing against the roaring flames. At that moment, a girl suddenly appeared in front of him, summoning a great blizzard to extinguish the fire. From that day forward, Duran abandoned his post as a knight to embark on a journey.",
                evo5: "Once a knight, Duran left his post to embark on a journey. As he travelled the world, Duran fought for the powerless in every land, eventually leading to him being renowed as a wandering hero. Needless to say, Duran himself never claimed to be any such thing. One day, he heard rumours of a dread swordsman running rampant across the land. Without delay, he began heading to the area where this murderous monster was rumoured to be...",
                evoawk: "Duran encountered the crazed swordsman who was terrorizing the northern towns. From how the warrior wielded his sword with abandon, he knew the weapon had possessed him. After a heated confrontation, the knight suffered near-fatal injuries but not a single innocent was harmed. Ever since, the legend of Duran and his shield spread across the land."
            }
    },
    { //Zenon - Missing Lore, TW Image
        id: 101216512,
        name: "Zenon",
        attribute: "Dark",
        type: "Demon",
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
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6169,
                hpplus: 935,
                atk: 2848,
                atkplus: 437,
                def: 2495,
                defplus: 384
            },
        skillset: 
            {
                skill: "10s CT - 1550% Dark DMG (MAG). During this Skill, increase own BE generation by 50%.",
                skillbreak: 1350,
                arts: "8800% Dark DMG (MAG). Heal own HP by 3% of DMG dealt by this Arts + For 10s, increase Allies' Arts by 3/s.",
                artsbreak: 2100,
                truearts: "25500% Dark DMG (MAG). Consume 25% of own HP, increase Allies' Arts by 40 + For 10s, increase Allies' MAG DMG by 30%.",
                trueartsbreak: 4400
            },
        passive: 
            {
                ability1: "Increase DMG to Human Enemies by 80%.",
                ability2: "Ignore 50% of Enemies' DEF."
            }, 
        evolution: 
            {
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
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 1,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat4amt: 2,
                    hover4: "Oldeus",
                    mat5: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat5amt: 2,
                    hover5: "CodeXTF"
                }
            },
        trueweapon: 
            {
                name: "Fe'Ode",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "50s CT - 6800% Dark DMG (MAG). For 10s, increase own Arts by 2/s.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Zenon, increase DMG to Human Enemies by 100%. Does not stack with Abilities of the same name.",
                        ability2: "Increase BE generation by 20%."
                    }
            },
        lore: 
            {   
                evo4: "A spellblade who served as bodyguard to Auge, one of the six Demon Generals. Zenon was dedicated to Auge in heart and soul, and would perform any job requested of him, no matter how low, until the day he was imprisoned for a crim he didn't commit. This was all a plot by a Demon commander who was anxious about Zenon's growing power. Furious at this betrayal, he howled revenge, and his magic sword Fah Ode came to him as if in answer.",
                evo5: "A demonic spellblade betrayed by his own people, Zenon used his sword Fah Ode to dismiss the officer who conspired against him... permanently. As the life drained from his body, the officer revealed Auge was partially responsible for carrying out the betrayal. As hatred welled up within him, his sword unleashed even greater power, reducing his surroundings to a mountain of corpses and debris. And he had no idea this was all part of Auge's plan...",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Soleil - Missing Lore
        id: 101226112,
        name: "Soleil",
        attribute: "Fire",
        type: "Machine",
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
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6424,
                hpplus: 999,
                atk: 2952,
                atkplus: 454,
                def: 2304,
                defplus: 355
            },
        skillset: 
            {
                skill: "10s CT - 2000% Fire DMG (MAG). If a Burning enemy is present, deal 3000% Fire DMG (MAG) instead.",
                skillbreak: 1000,
                arts: "14000% Fire DMG (MAG). Chance to inflict Burn, Burn self + For 20s, increase own Critical Rate by 100% while Burned.",
                artsbreak: 1800,
                truearts: "33000% Fire DMG (MAG). For 15s, reduce Burned Enemies' DMG RES by 25% and increase own DMG by 100% while Burned.",
                trueartsbreak: 2000
            },
        passive: 
            {
                ability1: "Increase DMG to Beast Enemies by 30%.",
                ability2: "Overheat: Every 3rd Skill used, apply Burn to self. While Burned, increase Skill CT REC by 100% and Freeze RES by 100%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat3amt: 1,
                    hover3: "Code-XTF",
                    mat4: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat4amt: 1,
                    hover4: "Flogassa"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Saar - Missing Lore
        id: 101236212,
        name: "Saar",
        attribute: "Water",
        type: "Beast",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6504,
                hpplus: 965,
                atk: 2712,
                atkplus: 416,
                def: 2480,
                defplus: 382
            },
        skillset: 
            {
                skill: "6s CT - 1750% Water DMG (PHY). Increase own Arts by 10. If this Skill crits, reduce Enemies' accuracy by 30% for 5s.",
                skillbreak: 900,
                arts: "12000% Water DMG (PHY). Permanently increase DMG and Critical Rate by 20% (Up to 100%).",
                artsbreak: 1950,
                truearts: "28000% Water DMG (PHY). For 15s, increase own Skill CT REC and Critical DMG by 100%.",
                trueartsbreak: 3500
            },
        passive: 
            {
                ability1: "Increase MAG RES by 20%.",
                ability2: "Increase PHY evasion by 30%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
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
                    mat3: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat3amt: 2,
                    hover3: "Freydal",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Pola - Complete
        id: 101246312,
        name: "Pola",
        attribute: "Earth",
        type: "Demon",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 7212,
                hpplus: 999,
                atk: 2545,
                atkplus: 391,
                def: 2580,
                defplus: 397
            },
        skillset: 
            {
                skill: "9s CT - 2280% Earth DMG (PHY). Chance to inflict Paralysis. Increase own Arts by 3.",
                skillbreak: 1250,
                arts: "16000% Earth DMG (PHY). High chance to inflict Poison. Increase DMG of Poison based on Enemies' HP (up to 2000 DMG).",
                artsbreak: 2100,
                truearts: "20200% Earth DMG (PHY). Heal own HP by 3% of DMG dealt by own True Arts + For 20s, reduce Enemies' Paralysis and Poison RES by 35%.",
                trueartsbreak: 3750
            },
        passive: 
            {
                ability1: "Increase Water RES by 50%.",
                ability2: "Increase Freeze RES by 100%.",
                ability3: "Heal own HP by 10/s.",
                ability4: "Increase accuracy by 30% against Paralyzed or Poisoned Enemies. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat3amt: 4,
                    hover3: "Goldola",
                    mat4: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat4amt: 2,
                    hover4: "Mavroskia",
                    mat5: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat5amt: 3,
                    hover5: "Tonetaurus"
                }
            },
        lore: 
            {   
                evo4: "One of the six witches in "Grim Stella", Pola possesses incredible power and is feared as the "Funereal Bloom". With a unique set of values, Pola believed the singing voice of a young Spirit boy she knew was the definition of beauty. However, a bandit she was chasing unleashed a curse on this boy, stealing his voice and vanishing without warning. Having been deprived of that which she loved most, she began an indiscriminate rampage on the world.",
                evo5: "A witch feared as the "Funereal Bloom". As her rampage continued, a female Machine appeared before Pola and commenced a furious assault against her. In response, Pola unleashed her previously sealed true power. To her surprise, she realised that she preceived this automaton fighting heedlessly for its life as beautiful. Her lips curled into a smile. As the flames drew closer, Pola slowly closed her eyes.",
                evoawk: "Her protector is a half-Beast half-Demon youth who saved her on a whim. She was completely dumbfounded by this, but she used her special plant based defensive magic to protect an overwhelmed automaton that had changed its target to the Demons. Until then, their only choice had been to fight alongside their enemy. And for some reason, this helped her power grow far beyong her previous limits. No one knows how the battle ended or what happened to her later, but the name Witch of Funeral Flowers never appeared in the histories again."
            }
    },
    { //Leon - Missing Lore
        id: 101256512,
        name: "Leon",
        attribute: "Dark",
        type: "Demon",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6797,
                hpplus: 999,
                atk: 2453,
                atkplus: 378,
                def: 1926,
                defplus: 298
            },
        skillset: 
            {
                skill: "9s CT - 1800% Dark DMG (MAG). Chance to inflict Blind.",
                skillbreak: 2000,
                arts: "13000% Dark DMG (MAG). High chance to inflict Blind + For 20s, reduce Enemies' ATK and DEF by 30%.",
                artsbreak: 2600,
                truearts: "30000% Dark DMG (MAG). For 13s, increase Dark Allies' Arts by 2/s, and Demon Allies' DMG by 30%.",
                trueartsbreak: 2800
            },
        passive: 
            {
                ability1: "Increase Curse RES by 30%.",
                ability2: "Increase Disease RES by 30%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
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
                    mat3: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat3amt: 2,
                    hover3: "Valzandeth",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zoroas - Missing Lore
        id: 101266512,
        name: "Zoroas",
        attribute: "Dark",
        type: "Dragon",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7110,
                hpplus: 999,
                atk: 2600,
                atkplus: 388,
                def: 2450,
                defplus: 373
            },
        skillset: 
            {
                skill: "10s CT - 1900% Dark DMG (PHY). Increase Arts by 20 if own Skill crits.",
                skillbreak: 1200,
                arts: "13000% Dark DMG (PHY). For 15s, increase Allies' DMG by 30%.",
                artsbreak: 1800,
                truearts: "34000% Dark DMG (PHY). For 15s, increase own Critical Rate by 100%, own DMG to Demon Enemies by 150%.",
                trueartsbreak: 2500
            },
        passive: 
            {
                ability1: "Increase DMG to Demon Enemies by 100%."
            }, 
        evolution: 
            {
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
                    mat3: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat3amt: 2,
                    hover3: "Mavroskia",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zechsia - Complete
        id: 101316412,
        name: "Zechsia",
        attribute: "Light",
        type: "God",
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
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6660,
                hpplus: 999,
                atk: 2664,
                atkplus: 411,
                def: 2256,
                defplus: 350
            },
        skillset: 
            {
                skill: "6s CT - 1900% Light DMG (PHY). Increase own Arts by 5.",
                skillbreak: 2300,
                arts: "10000% Light DMG (PHY). Increase own Arts by 50.",
                artsbreak: 3700,
                truearts: "26000% Light DMG (PHY). For 25s, increase own Arts by 5/s and increase Break PWR by 100%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase evasion by 15%.",
                ability2: "Increase Allies' Break PWR by 15%. Does not stack with Abilities of the same name.",
                ability3: "Increase DMG to Human Enemies by 60%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat3amt: 2,
                    hover3: "Radachne",
                }
            },
        lore: 
            {   
                evo4: "A knight who was part of a company of God knights in ancient times. She despised being underestimated and was always seen wearing a full suit of armour. As a knight in service to the higher Gods of order, she saw the commands of the higher Gods and order itself as absolute. Her sternness was so great that she would cut down any knight who expressed a lack of faith where they stood. Zechsia, ever loyal, was given a divine mission: to slay a mercenary whose intervention in battles caused chaos and confusion.",
                evo5: "As a God knight dedicated to preserving order, Zechsia's rage was directed at a Dragon mercenary who fought and created chaos for his own enjoyment. Unleashing the power of the jewelled sword given to her by the high Gods, she began a furious assault in the name of her divine mission. The battle soon reached a fever pitch. Right as two Giants entered the fray, a tearful young girl appeared and unleashed tremendous magical power, swallowing up all in the vicinity.",
                evoawk: "Zechsia pursued the Dragon mercenary, but grew skeptical of the justness of her orders upon seeing a kind young girl travelling happily with him. Her doubts about slaying the supposedly wicked Dragon were comfirmed when she witnessed him fearlessly protect the girl from a beast. Zechsia drew her sword against the beast to save the wounded mercenary, marking the first time in her entire life that she disobeyed a divine order."
            }
    },
    { //Zecht - Missing Lore
        id: 101286512,
        name: "Zecht",
        attribute: "Dark",
        type: "Human",
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
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6384,
                hpplus: 808,
                atk: 2640,
                atkplus: 340,
                def: 2124,
                defplus: 275
            },
        skillset: 
            {
                skill: "8s CT - 2200% Dark DMG (MAG). Chance to inflict Blind. Increase own Arts by 10.",
                skillbreak: 850,
                arts: "13500% Dark DMG (MAG). For 8s, increase Dark Allies' Evasion and DMG by 30%.",
                artsbreak: 1900,
                truearts: "30000% Dark DMG (MAG). High chance to inflict Blind. If Enemy was Blinded by this True Arts, for 15s, reduce DMG RES of that Enemy by 40%.",
                trueartsbreak: 3700
            },
        passive: 
            {
                ability1: "Increase DMG to Beast Enemies by 60%.",
                ability2: "Increase Paralysis RES by 100%.",
                ability3: "Increase BE generation by 20%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
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
                    mat3: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat3amt: 4,
                    hover3: "Valzandeth",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Aristela - Missing Lore
        id: 101296212,
        name: "Aristela",
        attribute: "Water",
        type: "Spirit",
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
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6074,
                hpplus: 921,
                atk: 2407,
                atkplus: 371,
                def: 2294,
                defplus: 354
            },
        skillset: 
            {
                skill: "9s CT - 800% Water DMG (MAG). Heal Allies' HP by 120.",
                skillbreak: 400,
                arts: "Heal Allies' by 35% of their max HP, cure Allies' status ailments (except Faint and Disease).",
                artsbreak: 0,
                truearts: "17800% Water DMG (MAG). Heal Allies' by 50% of their max HP + For 20s, heal Allies' HP by 200/s.",
                trueartsbreak: 2500
            },
        passive: 
            {
                ability1: "Increase MAG RES by 25%.",
                ability2: "Increase Allies' max HP and MAG DMG by 15%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
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
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 5,
                    hover3: "Geo Zagnus",
                    mat4: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat4amt: 4,
                    hover4: "Aerugraxes",
                    mat5: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat5amt: 1,
                    hover5: "Elpneumas"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zoldes - Missing Lore
        id: 101316412,
        name: "Zoldes",
        attribute: "Fire",
        type: "Giant",
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
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6151,
                hpplus: 999,
                atk: 2120,
                atkplus: 391,
                def: 2136,
                defplus: 330
            },
        skillset: 
            {
                skill: "10s CT - 2400% Fire DMG (PHY). Increase DMG RES by 10% during Skill.",
                skillbreak: 2400,
                arts: "8000% Fire DMG (PHY). For 5s, increase Allies' (except self) DMG RES by 100%.",
                artsbreak: 3000,
                truearts: "[27000% + 3% per DEF of this unit]  Fire DMG (PHY). For 20s, gain a 3000 Barrier to self.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "Increase MAG RES by 20%.",
                ability2: "Increase Burn RES by 60%.",
                ability3: "When near-death, increase DEF by 30%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat3amt: 5
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
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rhodia - Complete
        id: 101316412,
        name: "Rhodia",
        attribute: "Light",
        type: "Dragon",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6600,
                hpplus: 999,
                atk: 2760,
                atkplus: 424,
                def: 2700,
                defplus: 415
            },
        skillset: 
            {
                skill: "8s CT - 2300% Light DMG (PHY). Chance to inflict Paralysis.",
                skillbreak: 2100,
                arts: "12000% Light DMG (PHY). For 20s, increase Allies' DMG by 30%, increase Light Allies' DMG by 20%.",
                artsbreak: 3400,
                truearts: "29800% Light DMG (PHY). For 20s, reduce enemies' Light RES by 30%, increase Allies' DMG to Dragon Enemies by 30%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase Paralysis RES by 100%.",
                ability2: "Increase DMG to Dragon Enemies by 80%.",
                ability3: "Increase Allies' Skill CT REC and DMG to Dark Enemies by 25%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 2,
                    hover3: "Fosradius",
                }
            },
        lore: 
            {   
                evo4: "A legendary Dragon blacksmith. Single-mindedly obsessed with creating powerful equipment, Rhodia cared little about who used the tools she created. One day, a young man appeared, asking about the whereabouts of a Machine she had done upgrades to. She sensed a powerful will behind his words and decided to teach him Dragon martial arts so that he might realise his mission. From that day forward, Rhodia supposedly acted more warmly to others.",
                evo5: "A Dragon blacksmith spoken of in legend. She taught a half-Beast and half-Demon fighter Dragon martial arts so that he might save a witch. Rhodia began acting on her own and discovered a dark plot involving the witch. While she went after the young man to make sure he knew the truth, she ended up finding the Demon who was responsible for the plot in the first place. To put an end to things for good, she unleashed the power of her transforming scythe and challenged Leon to a duel.",
                evoawk: "The Dragon blacksmith Rhodia and her former student Saar, a young half-Beast half-Demon man, fought a desperate battle against Demon warrior Leon. When Leon struck down with his great axe, Rhodia rushed in to take the blow for Saar, but she suffered a fatal injury. Rhodia knew that her end was nigh, so she confirmed that her student was safe and gave him the armour that she had spent half her life to create. Afterwards, she smiled contentedly and closed her eyes."
    }
    },
    { //Olgeth - Missing Lore
        id: 101326312,
        name: "Olgeth",
        attribute: "Earth",
        type: "Giant",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 7704,
                hpplus: 973,
                atk: 2808,
                atkplus: 361,
                def: 2592,
                defplus: 334
            },
        skillset: 
            {
                skill: "10s CT - 1900% Earth DMG (PHY). Increase own Arts by 10.",
                skillbreak: 1200,
                arts: "16000% Earth DMG (PHY). Increase Allies' (except self) Arts by 20.",
                artsbreak: 1800,
                truearts: "28000% Earth DMG (PHY). For 20s, increase Earth Allies' DMG by 100%.",
                trueartsbreak: 2000
            },
        passive: 
            {
                ability1: "Increase PHY RES by 30%.",
                ability2: "Increase DMG to Machine Enemies by 100%.",
                ability3: "Increase Allies' max HP by 500 and DMG to Water Enemies by 25%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFElpneumas.png",
                    mat3amt: 4,
                    hover3: "Elpneumas",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Riffili - Missing Lore
        id: 101336512,
        name: "Riffili",
        attribute: "Dark",
        type: "Demon",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7620,
                hpplus: 999,
                atk: 2892,
                atkplus: 443,
                def: 2532,
                defplus: 389
            },
        skillset: 
            {
                skill: "7s CT - 1900% Dark DMG (PHY). Heal own HP by 3% of DMG dealt with this Skill.",
                skillbreak: 2300,
                arts: "12800% Dark DMG (PHY). For 15s, increase Allies' Skill CT REC by 30%, Dark Allies' Break PWR by 30%.",
                artsbreak: 4800,
                truearts: "42000% Dark DMG (PHY). For 15s, increase own DMG by [100% - Enemy Break Bar %].",
                trueartsbreak: 6000
            },
        passive: 
            {
                ability1: "Increase Allies' Break PWR by 15%.",
                ability2: "Increase DMG to God Enemies by 100%.",
                ability3: "When near-death, increase Skill CT REC by 70%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
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
                    mat3: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat3amt: 2,
                    hover3: "Mavroskia",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Shadie - Complete
        id: 101346212,
        name: "Shadie",
        attribute: "Water",
        type: "God",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7079,
                hpplus: 999,
                atk: 2406,
                atkplus: 370,
                def: 2531,
                defplus: 389
            },
        skillset: 
            {
                skill: "7s CT - Increase own Arts by 10. For 8s, gain a DMG barrier that negates 300 DMG.",
                skillbreak: 0,
                arts: "12800% Water DMG (MAG). For 10s, increase Allies' DMG by 20%. Water Allies' DMG by 20%.",
                artsbreak: 3400,
                truearts: "27000% Water DMG (MAG). For 20s, reduce Enemies' evasion, Status Ailment RES and ATK by 30%.",
                trueartsbreak: 3700
            },
        passive: 
            {
                ability1: "Increase own Equipment CT REC by 15%.",
                ability2: "Increase Poison RES by 60%.",
                ability3: "Increase Burn RES by 80%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
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
                    mat3: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat3amt: 2,
                    hover3: "Freydal",
                }
            },
        lore: 
            {   
                evo4: "A girl of Gods who is after a musketeer. Having no relatives, Shadie was brought up in the woods by a wizard. She grew up cheerfully by her kind foster father but felt bored at times. However, getting involved in a battle between a musketeer and fire dragon, her life changed completely. She fell in love with the musketeer who risked his life to save hers. Believing that he was her soul mate, she decides to follow him.",
                evo5: "A girl of Gods who is after a musketeer. The moment she realised her lifesaver was a magical beast hunter, she became one too. Learning how to use whips by her own, she defeated magical beasts one after another. This was only to get closer to the musketeer, but her skills became more powerful by battling beasts. Finally, she found her soulmate... but there was a woman of Beasts next to him.",
                evoawk: "Shadie's questions about the woman the musketeer was with were interrupted by a fire dragon's attack. With her true power awakened by this disruption to her journey to true love, Shadie and the musketeer prevailed over the dragon. However, the musketter nearly faced his demise after the battle, enveloped by the cursed flames unleashed by his overloaded firearm. In the end, what saved the musketeer from his fate and dispelled the gun's curse was Shadie, who embraced him with open arms even as the dark fire threatened to swallow him whole."
            }
    },
    { //Rhiotis - Missing Lore
        id: 101356412,
        name: "Rhiotis",
        attribute: "Light",
        type: "God",
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
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6201,
                hpplus: 999,
                atk: 2827,
                atkplus: 434,
                def: 2250,
                defplus: 347
            },
        skillset: 
            {
                skill: "10s CT - Heal Allies' HP by 5% of own ATK. During Emperor of Thunder Mode: Heal Allies' HP by 10% of own ATK.",
                skillbreak: 0,
                arts: "15000% Light DMG (MAG). Cure Allies' Blind + For 6s, reduce Enemies' DEF by 100%. During Emperor of Thunder Mode: 20000% Light DMG (MAG). Cure Allies' Blind + For 6s, reduce Enemies' DEF by 100%.",
                artsbreak: 1900,
                truearts: "For 60s, enter Emperor of Thunder Mode. During Emperor of Thunder Mode: 40000% Light DMG (MAG). Exit Emperor of Thunder Mode + For 30s, increase Allies' Light and MAG DMG by 50%.",
                trueartsbreak: 2000
            },
        passive: 
            {
                ability1: "Increase Allies' DMG RES by 8%.",
                ability2: "Increase Equipment CT REC by 15%.",
                ability3: "Increase Arts by 50 when entering Emperor of Thunder Mode."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 2,
                    hover3: "Fosradius",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Teriodos - Missing Lore
        id: 101366112,
        name: "Teriodos",
        attribute: "Fire",
        type: "Dragon",
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
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 7464,
                hpplus: 999,
                atk: 2639,
                atkplus: 405,
                def: 2460,
                defplus: 379
            },
        skillset: 
            {
                skill: "9s CT - 1800% Fire DMG (MAG). For 5s, reduce Enemies' Fire RES by 10%.",
                skillbreak: 1700,
                arts: "14000% Fire DMG (MAG). For 10s, increase Fire Allies' DMG by 30%, Dragon Allies' DMG by 30%.",
                artsbreak: 2600,
                truearts: "36000% Fire DMG (MAG). For 40s, increase own DMG by 50% (stackable), increase own ATK by [25% × # of Dragon Allies in the party].",
                trueartsbreak: 2600
            },
        passive: 
            {
                ability1: "Increase DMG to Human Enemies by 70%.",
                ability2: "Increase Earth RES by 15%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat3amt: 2,
                    hover3: "Flogassa",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Keiones - Missing Lore
        id: 101376512,
        name: "Keiones",
        attribute: "Dark",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6067,
                hpplus: 999,
                atk: 2402,
                atkplus: 469,
                def: 2296,
                defplus: 405
            },
        skillset: 
            {
                skill: "8s CT - 1850% Dark DMG (MAG). For 7s, increase own ATK by 10%.",
                skillbreak: 1300,
                arts: "10000% Dark DMG (MAG). Reduce Enemies' Arts by 20 + For 40s, increase own accuracy by 15% (stackable).",
                artsbreak: 800,
                truearts: "31000% Dark DMG (MAG). For 10s, increase own Critical Rate by 100% and Critical DMG by magnitude of accuracy buffs on self.",
                trueartsbreak: 1800
            },
        passive: 
            {
                ability1: "Increase DMG to Demon Enemies by 50%.",
                ability2: "Increase DMG to Giant Bosses by 40%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt; 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat3amt: 2,
                    hover3: "Valzandeth",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Elmessio - Missing Lore
        id: 101386212,
        name: "Elmessio",
        attribute: "Water",
        type: "Spirit",
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
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6797,
                hpplus: 999,
                atk: 2354,
                atkplus: 363,
                def: 2506,
                defplus: 385
            },
        skillset: 
            {
                skill: "10s CT - 2300% Water DMG (MAG). Reduce Water Enemies' Earth RES by 20% for 6s.",
                skillbreak: 1700,
                arts: "13000% Water and Earth DMG (MAG). Increase DMG of this Arts to Fire and Water Enemies by 60%, and swap Blessing of Midori Modes.",
                artsbreak: 2300,
                truearts: "When in Water Mode: 35000% Water DMG (MAG). For 12s, increase own Critical Rate by 100%, increase Water Allies' DMG by 50%. When in Earth Mode: 28000% Earth DMG (MAG). Chance to inflict Disease.",
                trueartsbreak: 2300, 3000 //reym help 
            },
        passive: 
            {
                ability1: "Increase DMG to Dragon Enemies by 60%.",
                ability2: "Increase Freeze RES by 100%.",
                ability3: "Blessing of Midori: This unit has two modes, Water Mode and Earth Mode. While in Water Mode, heal own HP by 100/s. While in Earth Mode, increase Arts by 1/s, and increase DMG to Diseased Enemies by 30%."
            }, 
        evolution: 
            {
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
                    mat3: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat3amt: 2,
                    hover3: "Freydal",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lione - Missing Lore
        id: 101396112,
        name: "Lione",
        attribute: "Fire",
        type: "Beast",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6971,
                hpplus: 999,
                atk: 2327,
                atkplus: 359,
                def: 2587,
                defplus: 398
            },
        skillset: 
            {
                skill: "7s CT - 2000% Fire DMG (PHY). When this attack hits an enemy, heal own HP by 40.",
                skillbreak: 1900,
                arts: "16000% Fire DMG (PHY). For 12s, increase Allies' DMG and evasion by 20%.",
                artsbreak: 2400,
                truearts: "30000% Fire DMG (PHY). For 15s, increase Fire Allies' ATK by 80%, increase Human and Beast Allies' Arts by 2/s.",
                trueartsbreak: 4800
            },
        passive: 
            {
                ability1: "When near-death, increase evasion by 25%.",
                ability2: "When near-death, increase Skill CT REC by 60%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat3amt: 2,
                    hover3: "Flogassa",
                }
            },
        lore: 
            {   
                evo4: "A Beast mercenary who fought many battles after the Ancient War. She was a war orphan, but she had a happy childhood in the Principality of Bamint. Aspiring to become famous, she fought the fiercest battles with her fire and became known as "Lion Fire Lione". She accomplished many missions together with her step-brother Elmessio, but once they accidentally became aware of a secret. In order to prevent the unforgivable plan, the two decided by their own decision to assassinate the key man involved in this plan.",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Reyon - Missing Lore
        id: 101406412,
        name: "Reyon",
        attribute: "Light",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 7332,
                hpplus: 999,
                atk: 2839,
                atkplus: 435,
                def: 2405,
                defplus: 370
            },
        skillset: 
            {
                skill: "7s CT - 1900% Light DMG (PHY). Increase own ATK and Break PWR each time own Skill is activated.",
                skillbreak: 1900,
                arts: "16500% Light DMG (PHY). For 10s, increase Allies' Skill CT REC by 30%, Light Allies' Skill CT REC by 30%.",
                artsbreak: 2500,
                truearts: "26500% Light DMG (PHY). Increase this True Arts' DMG by 100% against Dark Enemies.",
                trueartsbreak: 4600
            },
        passive: 
            {
                ability1: "Increase BE generation against Enemies in Break by 100%.",
                ability2: "Increase Freeze and Paralysis RES by 100%.",
                ability3: "Increase DMG to Dragon Enemies by 80%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 3,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat4amt: 2,
                    hover4: "Ifrit",
                    mat5: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat5amt: 2,
                    hover5: "Degilmagna"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Nerim - Complete
        id: 101416312,
        name: "Nerim",
        attribute: "Earth",
        type: "God",
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
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 5702,
                hpplus: 865,
                atk: 2652,
                atkplus: 407,
                def: 2347,
                defplus: 362
            },
        skillset: 
            {
                skill: "8s CT - 1550% Earth DMG (PHY). Chance to inflict Poison.",
                skillbreak: 1200,
                arts: "13800% Earth DMG (PHY). For 9s, reduce Enemies' Poison, Blind and Paralysis RES by 30%.",
                artsbreak: 2800,
                truearts: "22900% Earth DMG (PHY). For 15s, increase own DMG to Enemies with Status Ailments by 70%, increase Earth Allies' DMG by 30%.",
                trueartsbreak: 4200
            },
        passive: 
            {
                ability1: "Increase Curse RES by 90%.",
                ability2: "Increase DMG to Demon Enemies by 90%.",
                ability3: "When this unit takes lethal DMG, revive all Allies with 50% HP, increase own Arts by 200 and increase all Allies' DMG by 100% for 10s."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 5,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat4amt: 3,
                    hover4: "Goldola",
                    mat5: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat5amt: 3,
                    hover5: "Tonetaurus"
                }
            },
        lore: 
            {   
                evo4: "A God who protected a certain village after the end of the Great War. To realise their sword dream, she remained in the village even after her friends had left on their own journeys. Though she was willing to unleash her slumbering power to defend the village, she was fundamentally very calm. and despised conflict. So calm and kind, in fact, that she was willing to shelter her friends when they became implicated in the grave crime of assassinating one of Bamint's VIPs.",
                evo5: "A God who did everything in her power to protect her precious village and childhood friends. She was requested to keep the presence of her old friend, now criminals, a secret. After much soul-searching, she agreed... They were her childhood friends, after all, and they promised not to harm anyone. But in the end, she couldn't avoid a confrontation. Regretting the decision, she threw herself into the fray, ending the conflict at the expense of her life.",
                evoawk: "Regretting all she'd done, she shared tears with the knight who hunted her down. Gasping, she murmured kindly to him. "I brought all this down on myself, you musn't regret ending me. Be proud of all you've done as a knight to defend your village. And I am truly glad to die in your arms... You, who have cared more for me than any other." With her sacrifice, childhood friends long scattered were able to come together to revisit their younger days."
            }
    },
    { //Quon - Missing Lore, Evolution
        id: 101556212,
        name: "Quon",
        attribute: "Water",
        type: "Human",
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
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6072,
                hpplus: 920,
                atk: 2154,
                atkplus: 333,
                def: 2326,
                defplus: 358
            },
        skillset: 
            {
                skill: "7s CT - 2300% Water DMG (MAG). Increase own Arts by 5.",
                skillbreak: 1200,
                arts: "For 14s, reduce Enemies' DMG RES and Movement Speed by 30%.",
                artsbreak: 0,
                truearts: "16800% Water DMG (MAG). For 20s, reduce Enemies' DMG RES and Movement Speed by 35%.",
                trueartsbreak: 2400
            },
        passive: 
            {
                ability1: "Increase MAG RES by 20%.",
                ability2: "Increase Allies' Fire RES by 10%."
            }, 
        evolution: 
            {
                evo45: //reym how do crystals
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragQuon.png",
                    mat3amt: 20,
                    hover3: "Quon",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Feld - Missing Lore, Evolution
        id: 101566112,
        name: "Feld",
        attribute: "Fire",
        type: "Spirit",
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
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6180,
                hpplus: 937,
                atk: 2522,
                atkplus: 388,
                def: 2256,
                defplus: 348
            },
        skillset: 
            {
                skill: "9s CT - 1600% Fire DMG (MAG). Chance to inflict Burn.",
                skillbreak: 1000,
                arts: "9000% Fire DMG (MAG). For 10s, increase Allies' Status RES (except Faint) by 100%.",
                artsbreak: 2600,
                truearts: "40000% Fire DMG (MAG). Consume 30% of own max HP. For 10s, increase own Critical Rate by 100%, reduce Enemies' Fire RES by 30%.",
                trueartsbreak: 2800
            },
        passive: 
            {
                ability1: "Increase DMG to Dragon Enemies by 70%.",
                ability2: "Increase Allies' Critical DMG by 20%."
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
                    mat3: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat3amt: 2,
                    hover3: "Degilmagna",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Edram - Missing Lore, Evolution
        id: 101575412,
        name: "Edram",
        attribute: "Light",
        type: "Machine",
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
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 5366,
                hpplus: 814,
                atk: 2300,
                atkplus: 355,
                def: 1956,
                defplus: 303
            },
        skillset: 
            {
                skill: "12s CT - 2500% Light DMG (MAG). For 5s, reduce Enemies' DEF by 30%.",
                skillbreak: 1300,
                arts: "14000% Light DMG (MAG). 60% chance to inflict Paralysis.",
                artsbreak: 1500,
                truearts: "N/A",
                trueartsbreak: 0
            },
        passive: 
            {
                ability1: "Each normal attack will increase own Arts by 10.",
                ability2: "Increase Light Allies' Arts by 1/s.",
                ability3: "Reduce Water RES by 50%."
            }, 
        evolution: 
            {
                evo45: //crystal????
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 1
                },
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
            }
    },
    { //Favelle - Missing Lore
        id: 101586312,
        name: "Favelle",
        attribute: "Earth",
        type: "Dragon",
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
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6836,
                hpplus: 999,
                atk: 2424,
                atkplus: 373,
                def: 2743,
                defplus: 421
            },
        skillset: 
            {
                skill: "7s CT - 1800% Earth DMG (PHY).",
                skillbreak: 1200,
                arts: "8000% Earth DMG (PHY). For 25s, Allies gain a DMG barrier that negates 3200 DMG.",
                artsbreak: 2000,
                truearts: "15000% Earth DMG (PHY). For 30s, Allies gain a DMG barrier that negates 5000 DMG, increase Allies' DMG RES by 15%.",
                trueartsbreak: 2500
            },
        passive: 
            {
                ability1: "Increase Near-Death Allies' DMG RES by 10%.",
                ability2: "Increase Allies' max HP by 10%.",
                ability3: "When at 50% HP or more, increase Arts DMG by 50%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat3amt: 5
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
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Catilou - Missing Lore
        id: 101596312,
        name: "Catilou",
        attribute: "Earth",
        type: "Beast",
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
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 7032,
                hpplus: 999,
                atk: 2491,
                atkplus: 357,
                def: 2580,
                defplus: 365
            },
        skillset: 
            {
                skill: "9s CT - 2000% Earth DMG (PHY). If Skill Crits, increase Break PWR of that hit by 100%.",
                skillbreak: 2200,
                arts: "11000% Earth DMG (PHY). For 20s, heal Allies' HP by 120/s. and increase own Skill CT REC by 100%.",
                artsbreak: 3600,
                truearts: "32000% Earth DMG (PHY). For 15s, increase Allies' DMG by 30%, increase Allies' DMG to Enemies in BREAK by 30%.",
                trueartsbreak: 5000
            },
        passive: 
            {
                ability1: "When Art Gauge is 50 or more, increase own Critical Rate by 70%.",
                ability2: "When near-death, heal HP by 60/s."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat3amt: 4,
                    hover3: "Tonetaurus",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rasaou - Missing Lore
        id: 101606112,
        name: "Rasaou",
        attribute: "Fire",
        type: "God",
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
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7500,
                hpplus: 999,
                atk: 4620,
                atkplus: 841,
                def: 1260,
                defplus: 236
            },
        skillset: 
            {
                skill: "9s CT - 2100% Fire DMG (PHY). For 5s, increase own Equipment CT REC by 30%.",
                skillbreak: 1100,
                arts: "12800% Fire and Dark DMG (PHY). For 5s, increase Allies' RES to the Element they have an Elemental Advantage against by 100%.",
                artsbreak: 5000,
                truearts: "15500% Fire DMG (PHY). Increase own DMG RES by 100% during own True Arts.",
                trueartsbreak: 6000
            },
        passive: 
            {
                ability1: "Increase own God's Eye Counter whenever own Skill (1 Count), Arts (1 Count), or True Arts (3 Count) is activated + Increase own Critical Rate by 10% for each God's Eye Count (max. 10 stacks (100% Critical Rate increase)) + When God's Eye Counter is 10, reset God's Eye Count to 0 with next activation of own Arts or True Arts and increase that True/Arts' DMG and Break PWR by 100%.",
                ability2: "Increase DMG to Dragon Enemies by 50%.",
                ability3: "Increase DMG to Demon Enemies by 100%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat3amt: 3,
                    hover3: "Flogassa",
                    mat4: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat4amt: 2,
                    hover4: "Mavroskia",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Yumi - Complete
        id: 101616212,
        name: "Yumi",
        attribute: "Water",
        type: "Giant",
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
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 8100,
                hpplus: 999,
                atk: 2453,
                atkplus: 380,
                def: 2409,
                defplus: 377
            },
        skillset: 
            {
                skill: "9s CT - 1800% Water DMG (PHY). Increase own Arts by 5 when this hits an Enemy.",
                skillbreak: 1900,
                arts: "14000% Water DMG (PHY). For 15s, increase Allies' Healing Taken (except Lifesteal) by 80%.",
                artsbreak: 3200,
                truearts: "27000% Water DMG (PHY). Increase DMG by this True Arts to non-Boss Enemies by 150% + For 15s, increase stats by 50%.",
                trueartsbreak: 3600
            },
        passive: 
            {
                ability1: "Increase Fire RES by 25%.",
                ability2: "Increase Allies' max HP by 15%.",
                ability3: "Increase Healing Taken (except Lifesteal) by 20%."
            }, 
        evolution: 
            {
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
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 4,
                    hover3: "Geo Zagnus",
                }
            },
        lore: 
            {   
                evo4: "Currently unreleased in Global.",
                evo5: "Currently unreleased in Global.",
                evoawk: "Currently unreleased in Global."
            }
    },
    { //Keit - Missing Lore
        id: 101626312,
        name: "Keit",
        attribute: "Earth",
        type: "Human",
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
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6228,
                hpplus: 999,
                atk: 2832,
                atkplus: 434,
                def: 2258,
                defplus: 348
            },
        skillset: 
            {
                skill: "8s CT - 800% Earth DMG (MAG). 70% chance to inflict Poison.",
                skillbreak: 500,
                arts: "14000% Earth DMG (MAG). 100% chance to inflict Paralysis against Poisoned Enemies.",
                artsbreak: 1450,
                truearts: "30000% Earth DMG (MAG) For 15s, reduce Enemies' Poison and MAG RES by 35%.",
                trueartsbreak: 1600
            },
        passive: 
            {
                ability1: "Increase Allies' Poison RES by 30%. Increase Allies' Critical Rate by 50% against Poisoned Enemies. Does not stack with Abilities of the same name.",
                ability2: "Increase Paralysis RES by 70%.",
                ability3: "Increase Equip CT REC by 10%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth5.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat3amt: 4,
                    hover3: "Elpneumas",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Currently unreleased in Global."
            }
    },
    { //Cathemilla - Missing Lore
        id: 101646412,
        name: "Cathemilla",
        attribute: "Light",
        type: "Spirit",
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
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6780,
                hpplus: 999,
                atk: 1958,
                atkplus: 303,
                def: 2689,
                defplus: 413
            },
        skillset: 
            {
                skill: "9s CT - Heals Allies' HP by 200 and increase Allies' Arts by 10.",
                skillbreak: 0,
                arts: "15600% Light DMG (MAG). For 10s, increase Allies' Paralysis and Freeze RES by 100%, and Arts DMG by 20% + If an enemy is Dark, increase Allies' Arts DMG by an additional 50%.",
                artsbreak: 3200,
                truearts: "28000% Light DMG (MAG). For 12s, increase Fire, Water and Earth Allies' DMG by [30% × number of unique Elements (excluding Light and Dark) in the Party].",
                trueartsbreak: 5000
            },
        passive: 
            {
                ability1: "Increase Fire Allies' Critical DMG by 40% and Skill CT REC by 60%.",
                ability2: "Increase Water Allies' Status RES by 60% and Arts DMG RES by 25%.",
                ability3: "Heal Earth Allies' HP by 40/s. Increase Earth Allies' Break PWR by 40%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat3amt: 2,
                    hover3: "Radachne",
                    mat4: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat4amt: 2,
                    hover4: "Palamicia",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mizyna - Missing Lore
        id: 101656512,
        name: "Mizyna",
        attribute: "Dark",
        type: "Demon",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6348,
                hpplus: 999,
                atk: 2832,
                atkplus: 434,
                def: 2250,
                defplus: 347
            },
        skillset: 
            {
                skill: "7s CT - 1800% Dark DMG (PHY). Heal own HP by 2%.",
                skillbreak: 1400,
                arts: "15000% Dark DMG (PHY). For 12s, increase Allies' Skill CT REC by 30%, increase Dark Allies' Skill CT REC by an additional 30%.",
                artsbreak: 2800,
                truearts: "34000% Dark DMG (PHY). Increase own Arts by 20 + For 12s, increase Own Critical Rate by 100%.",
                trueartsbreak: 2800
            },
        passive: 
            {
                ability1: "At the start of a Battle, increase own Arts by 100.",
                ability2: "Increase DMG to God Enemies by 80%.",
                ability3: "Increase Allies' Critical DMG by 20%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
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
                    mat3amt: 4,
                    hover3: "Oldeus",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Nies - Missing Lore, TW Image
        id: 101666212,
        name: "Nies",
        attribute: "Water",
        type: "God",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7596,
                hpplus: 999,
                atk: 2756,
                atkplus: 423,
                def: 2866,
                defplus: 439
            },
        skillset: 
            {
                skill: "7s CT - 2000% Water DMG (PHY). For 5s, reduce Enemies' ATK by 20%.",
                skillbreak: 1400,
                arts: "14500% Water DMG (PHY). For 15s, increase Allies' Fire RES by 15%, heal Allies' HP by 200/s, increase Water Allies' Arts by 2/s.",
                artsbreak: 2400,
                truearts: "35000% Water DMG (PHY). For 3s, increase Allies' DMG RES by 80%. For 15s, increase Water Allies' Skill CT REC and Skill DMG by 120%.",
                trueartsbreak: 4400
            },
        passive: 
            {
                ability1: "Increase Allies' DEF by 500 and DMG to Fire Enemies by 25%. Does not stack with Abilities of the same name.",
                ability2: "Increase Burn RES by 100%.",
                ability3: "Ignore 35% of Enemies' DEF."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_water3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragWilkes.png",
                    mat3amt: 2,
                    hover3: "Wilkes",
                    mat4: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat4amt: 2,
                    hover4: "Freydal",
                }
            },
        trueweapon:
            {
                name: "Saint Blaze",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "65s CT - 9500% Water DMG (PHY). For 10s, increase Water Allies' DMG by 40%.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Nies, increase DMG by 20%, heal HP by 100/s and increase Arts by 2/s.",
                        ability2: "Increase Skill DMG by 20%."
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
        attribute: "Fire",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7416,
                hpplus: 999,
                atk: 2275,
                atkplus: 351,
                def: 2834,
                defplus: 435
            },
        skillset: 
            {
                skill: "8s CT - 1700% Fire DMG (PHY). Chance to inflict Burn.",
                skillbreak: 1300,
                arts: "12400% Fire DMG (PHY). For 25s, Allies gain a DMG barrier that negates 3800 DMG.",
                artsbreak: 2400,
                truearts: "24000% Fire DMG (PHY). For 20s, increase Allies' DMG RES by 30% and Critical RES by 20%.",
                trueartsbreak: 3700
            },
        passive: 
            {
                ability1: "Increase Freeze RES and Paralysis RES by 100%.",
                ability2: "Increase Allies' RES to their Weak Element by 10%.",
                ability3: "When near-death, increase Arts by 3/s."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragWilkes.png",
                    mat3amt: 2,
                    hover3: "Wilkes",
                    mat4: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat4amt: 2,
                    hover4: "Degilmagna",
                }
            },
        trueweapon: 
            {
                name: "Flambardo",
                slot: "/db/Mines/thumbnail/defLB.png",
                detail: "",
                skill: "25s CT - For 12s, increase Allies' DMG RES by 20%. Allies with 50% or less HP gain a 30% increase instead.",
                skillbreak: 0,
                passive: 
                    {
                        ability1: "When equipped by Sanstone, increase Equipment CT REC by 30% and max HP by 20%. Does not stack with Abilities of the same name.",
                        ability2: "Increase PHY RES by 10%."
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Platina - Missing Lore, TW Image
        id: 101686412,
        name: "Platina",
        attribute: "Light",
        type: "God",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7464,
                hpplus: 943,
                atk: 2796,
                atkplus: 359,
                def: 2640,
                defplus: 340
            },
        skillset: 
            {
                skill: "10s CT - 2000% Light DMG (PHY). For 8s, reduce Enemies' Break RES by 30%.",
                skillbreak: 2100,
                arts: "15500% Light DMG (PHY). For 15s, when the Boss' Break Bar is 70% or less, increase own Break PWR by 70%.",
                artsbreak: 4000,
                truearts: "34000% Light DMG (PHY). High chance to inflict Faint. For 20s, reduce Enemies' Break Bar by 10% of total Break Bar each time they are hit by own Skill.",
                trueartsbreak: 8500
            },
        passive: 
            {
                ability1: "When an Ally is near-death, cure that Ally's Status Ailments (except Faint) and that Ally gains a DMG barrier that negates 2000 DMG for 10s. Can be activated only once every 70s.",
                ability2: "Increase own Skill CT REC based on own Break PWR buffs.",
                ability3: "Increase Allies' Break PWR by 10%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragWilkes.png",
                    mat3amt: 2,
                    hover3: "Wilkes",
                    mat4: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat4amt: 2,
                    hover4: "Radachne",
                    mat5: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat5amt: 1,
                    hover5: "Palamicia"
                }
            },
        trueweapon: 
            {
                name: "Knight's Glow",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "70s CT - 2000% Light DMG (PHY).",
                skillbreak: 8000,
                passive: 
                    {
                        ability1: "When equipped by Platina, increase own Break PWR by 30%. Increase own DMG to Enemies in Break by 30%. Does not stack with Abilities of the same name.",
                        ability2: "Increase Dark RES by 20%."
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Parlot - Missing Lore
        id: 101696312,
        name: "Parlot",
        attribute: "Earth",
        type: "Spirit",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6541,
                hpplus: 991,
                atk: 2138,
                atkplus: 330,
                def: 2388,
                defplus: 368
            },
        skillset: 
            {
                skill: "9s CT - Heal Allies' HP by 200 + Increase Allies' Arts by 3.",
                skillbreak: 0,
                arts: "10800% Earth DMG (MAG). Heal Allies by 40% of their max HP + For 15s, increase Allies' Water RES by 15%.",
                artsbreak: 2100,
                truearts: "Heal all Allies by 60% of their max HP + Increase Allies' Arts by 30.",
                trueartsbreak: 0
            },
        passive: 
            {
                ability1: "Increase Allies' max HP by 500 and DMG to Water Enemies by 25%. Does not stack with Abilities of the same name.",
                ability2: "Increase Equipment CT REC by 10%.",
                ability3: "Increase Freeze RES by 100%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat3amt: 4,
                    hover3: "Elpneumas",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Dahlia - Missing Lore
        id: 101706512,
        name: "Dahlia",
        attribute: "Dark",
        type: "Demon",
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
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6844,
                hpplus: 999,
                atk: 2997,
                atkplus: 459,
                def: 2360,
                defplus: 364
            },
        skillset: 
            {
                skill: "7s CT - 1850% Dark DMG (PHY). For 7s, reduce Enemies' Status RES by 30%.",
                skillbreak: 1300,
                arts: "14800% Dark DMG (PHY). Deals more DMG and has a higher Critical Rate the more Status Ailments an Enemy has (damage varies on each individual Enemy and their Statuses).",
                artsbreak: 3100,
                truearts: "28800% Dark DMG (MAG). For 20s, increase own Arts by [2 × # of Statuses on Enemy with the most Statuses]/s, and increase Allies' DMG by [40% × # of Statuses on Enemy with the most Statuses].",
                trueartsbreak: 3600
            },
        passive: 
            {
                ability1: "Increase Allies' evasion by 10%.",
                ability2: "All attacks have a chance to inflict Blind (except equipment).",
                ability3: "Increase DMG to Human Enemies by 80%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 1,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat4amt: 1,
                    hover4: "Radachne",
                    mat5: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat5amt: 1,
                    hover5: "Freydal"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Gaia - Missing Lore
        id: 101716211,
        name: "Gaia",
        attribute: "Water",
        type: "God",
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
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6783,
                hpplus: 999,
                atk: 2518,
                atkplus: 387,
                def: 2840,
                defplus: 436
            },
        skillset: 
            {
                skill: "8s CT - 2050% Water DMG (PHY). Heal own HP by 150.",
                skillbreak: 1700,
                arts: "12000% Water DMG (MAG). For 20s,  Allies gain a DMG barrier that negates [# of Water Allies x 1000] DMG.",
                artsbreak: 2400,
                truearts: "24000% Water DMG (MAG)  For 20s, increase Allies' DMG RES by 20% and Water Allies' DMG by 30%.",
                trueartsbreak: 2700
            },
        passive: 
            {
                ability1: "Increase Near-Death Allies' DMG RES by 10%.",
                ability2: "Increase Water Allies' Arts by 1/s.",
                ability3: "Increase own DEF by 20% when under a DMG barrier."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_Gaia45.png",
                    mat3amt: 20
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGaia.png",
                    mat3amt: 20,
                    hover3: "Gaia",
                }
            },
        trueweapon: 
            {
                name: "Castillo",
                slot: "/db/Mines/thumbnail/defLB.png",
                detail: "",
                skill: "40s CT - For 10s, increase Allies' DMG RES by 15%, and Water Allies' DEF by 50%.",
                skillbreak: 0,
                passive: 
                    {
                        ability1: "When equipped by Gaia, increase own ATK by 20% and increase own Arts by 2/s. Does not stack with Abilities of the same name.",
                        ability2: "Increase own DEF by 20% when under a DMG barrier."
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Millenia - Missing Lore
        id: 101726112,
        name: "Millenia",
        attribute: "Fire",
        type: "Demon",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6796,
                hpplus: 859,
                atk: 2472,
                atkplus: 319,
                def: 2388,
                defplus: 308
            },
        skillset: 
            {
                skill: "8s CT - 2000% Fire DMG (PHY). The last Ally to use a Skill/Arts before this Skill gains 20% evasion for 8s.",
                skillbreak: 1300,
                arts: "15000% Fire DMG (PHY). Permanently increase Allies' Skill and Arts Critical Rate by 20% (up to 60%).",
                artsbreak: 2400,
                truearts: "30400% Fire DMG (PHY). For 7s, increase Allies' Critical DMG by 70%.",
                trueartsbreak: 3700
            },
        passive: 
            {
                ability1: "Skill can be used twice after Skill CT is refreshed.",
                ability2: "Increase Earth RES by 25%.",
                ability3: "Heal HP by 12/s."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat3amt: 5
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
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Alche - Missing Lore
        id: 101736412,
        name: "Alche",
        attribute: "Light",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 5988,
                hpplus: 999,
                atk: 2275,
                atkplus: 387,
                def: 2479,
                defplus: 436
            },
        skillset: 
            {
                skill: "9s CT - Heal Allies' HP by 400. For 5s, increase Allies' Skill CT REC by 20%.",
                skillbreak: 0,
                arts: "Heal Allies' HP by 30%, revive an Ally with 100 Arts and reduce that Ally's maximum HP by 15%.",
                artsbreak: 0,
                truearts: "19000% Light DMG (MAG). For 15s, heal Allies' HP by 200/s and increase Allies' DMG by 30%. Increase Allies' DMG to Enemies that they have Elemental Advantage against by an additional 30%.",
                trueartsbreak: 1200
            },
        passive: 
            {
                ability1: "Increase Dark RES by 20%.",
                ability2: "Heal HP by 18/s.",
                ability3: "Increase Allies' Disease RES by 50%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat3amt: 2,
                    hover3: "Radachne"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Louvet - Missing Lore
        id: 101746312,
        name: "Louvet",
        attribute: "Earth",
        type: "Dragon",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6391,
                hpplus: 968,
                atk: 2200,
                atkplus: 340,
                def: 2142,
                defplus: 331
            },
        skillset: 
            {
                skill: "8s CT - 1900% Earth DMG (PHY). For 6s, increase own evasion by 20%.",
                skillbreak: 1500,
                arts: "14200% Earth DMG (PHY). For 10s, increase Fire, Water and Earth Allies' DMG by 30%.",
                artsbreak: 2400,
                truearts: "23600% Earth DMG (PHY). For 20s, increase Fire, Water and Earth Allies' DMG by 60%, reduce Enemies' Break RES by 25%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase Dark RES by 20%.",
                ability2: "Increase Paralysis RES by 100%.",
                ability3: "Increase all Allies' DMG to Weak Element Enemies by 20%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat3amt: 5,
                    hover3: "Elpneumas",
                    mat4: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat4amt: 5,
                    hover4: "Radachne",
                    mat5: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat5amt: 3,
                    hover5: "Goldola"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Gran Brave - Missing Lore, TW Img
        id: 101756111,
        name: "Gran Brave",
        attribute: "Fire",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6660,
                hpplus: 962,
                atk: 2856,
                atkplus: 444,
                def: 2712,
                defplus: 375
            },
        skillset: 
            {
                skill: "5s CT - 1600% Fire DMG (PHY). Chance to inflict Burn.",
                skillbreak: 1000,
                arts: "13500% Fire DMG (PHY). High chance to inflict Burn. For 15s, increase own Skill CT REC by 150%.",
                artsbreak: 3600,
                truearts: "40000% Fire DMG (PHY). For 30s, increase own Skill DMG by 300% and Critical DMG by 100%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase Allies' Arts DMG by 15%.",
                ability2: "Increase own Critical Rate by 100% against Burned Enemies.",
                ability3: "Increase Clyde, Arth and Corsair's stats by 20%."
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
                    mat3: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat3amt: 1,
                    hover3: "Ifrit",
                    mat4: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat4amt: 2,
                    hover4: "Degilmagna"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Magmation",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "40s CT - 5800% Fire DMG (PHY). If user is Fire, increase own BE generation by 50% for 8s.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Gran Brave, increase stats and DMG by 20%.",
                        ability2: "Increase Skill DMG by 30%."
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kazlaser - Missing Lore
        id: 101765411,
        name: "Kazlaser",
        attribute: "Light",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101765411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101765411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 5550,
                hpplus: 752,
                atk: 2350,
                atkplus: 289,
                def: 1750,
                defplus: 307
            },
        skillset: 
            {
                skill: "9s CT - 1200% Light DMG (PHY).",
                skillbreak: 1450,
                arts: "5800% Light DMG (PHY). For 20s, increase Allies' ATK by 30%.",
                artsbreak: 1800
            },
        passive: 
            {
                ability1: "Increase DMG to God Enemies by 50%.",
                ability2: "Increase DMG to Demon Enemies by 50%."
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
            }
    },
    { //Marzex (Light) - Missing Lore, TW Image
        id: 101776412,
        name: "Marzex",
        attribute: "Light",
        type: "God",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 5,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6024,
                hpplus: 915,
                atk: 2868,
                atkplus: 439,
                def: 2676,
                defplus: 411
            },
        skillset: 
            {
                skill: "13s CT - 2200% Water, Fire, and Earth DMG (PHY). Cure own Poison, Disease, Burn and Curse.",
                skillbreak: 1850,
                arts: "18000% Water, Fire and Earth DMG (PHY). Permanently increase ATK by 15% (No Limit) + For 70s, activations of True Arts will also increase Arts by 100.",
                artsbreak: 2200,
                truearts: "32000% Elementless DMG (Typeless). Increase this True Arts' Critical Rate by 100%. Permanently increase own maximum HP by 15% (No Limit).",
                trueartsbreak: 3500
            },
        passive: 
            {
                ability1: "Increase own Skill CT REC by 1%/s (No Limit)",
                ability2: "Increase DMG to all Enemies (except Gods) by 50%.",
                ability3: "Increase MAG evasion by 25%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherum.png",
                    mat3amt: 2,
                    hover3: "Ragsherum",
                    mat4: "/db/Icons/dungeon_drops/fragWilkes.png",
                    mat4amt: 2,
                    hover4: "Wilkes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Valiant",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "30s CT - 4500% Light DMG (PHY). For 5s, reduce non-God Enemies' DMG RES by 20%.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Marzex, increase Critical DMG by 70% and increase own Arts by 1/s.",
                        ability2: "When near-death, increase DMG RES by 10%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Number 2 - Missing Lore, TW Image
        id: 101786512,
        name: "Number 2",
        attribute: "Dark",
        type: "God",
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
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6040,
                hpplus: 999,
                atk: 2432,
                atkplus: 374,
                def: 2432,
                defplus: 374
            },
        skillset: 
            {
                skill: "10s CT - 3200% Dark DMG (MAG). If Enemy's Arts is 70% or less, increase this Skill's Critical Rate by 100%.",
                skillbreak: 1800,
                arts: "17000% Light DMG (MAG). Steal 50% of Enemies' Arts (Effect can only take place on the same Enemy once every 13s).",
                artsbreak: 3000,
                truearts: "30000% Elementless DMG (Typeless). Increase this True Arts' Critical Rate by 100%. When 'God Rage' Passive is at max stacks, increase this True Arts' Critical DMG by 100%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "When an Ally dies (except self), revive that Ally with 33% HP. Ability can only be activated once per Quest.",
                ability2: "When near-death, increase Arts by 2/s.",
                ability3: "God Rage: When this unit gains Arts, increase stats (up to 50%. At 50%, this Ability increases current HP instead)."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat3amt: 3,
                    hover3: "Valzandeth",
                    mat4: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat4amt: 2,
                    hover4: "Aerugraxes",
                    mat5: "/db/Icons/dungeon_drops/fragRagsherum.png",
                    mat5amt: 1,
                    hover5: "Ragsherum"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Peluscia",
                slot: "/db/Mines/thumbnail/healLB.png",
                detail: "",
                skill: "50s CT - 7000% Typeless DMG (MAG). Heal own HP by 150 each time this attack hits an Enemy.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Number 2, increase DMG by 20% and BE generation by 50%.",
                        ability2: "Increase Status RES (except Faint) by 20%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lian - Missing Lore
        id: 101796112,
        name: "Lian",
        attribute: "Fire",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 5770,
                hpplus: 875,
                atk: 2567,
                atkplus: 395,
                def: 2169,
                defplus: 335
            },
        skillset: 
            {
                skill: "8s CT - 2600% Fire DMG (PHY). Increase Paralysis and Freeze RES by 100% during Skill.",
                skillbreak: 1700,
                arts: "12000% Fire DMG (PHY). Chance to inflict Burn. For 10s, increase own Skill CT REC by 60%.",
                artsbreak: 2300,
                truearts: "20900% Fire DMG (PHY). High chance to inflict Burn. Reset own Hit Count to 0 and increase Allies' Arts by the amount of Hit Count lost.",
                trueartsbreak: 3300
            },
        passive: 
            {
                ability1: "Add a Hit Counter that gains Count based on hits to enemies by own Skill, Arts and True Arts. Increase own Movement Speed and Allies' DMG based on Hit Count. Hit Counter caps at 99 hits (DMG increase is approximately 0.5% per hit).",
                ability2: "Heal own HP by 14/s.",
                ability3: "Increase all Allies' Burn and Freeze RES by 30%. Increase all Allies' Critical Rate by 50% against Burned Enemies. Does not stack with Abilities of the same name."
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
                    mat3amt: 2,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat4amt: 2,
                    hover4: "Ifrit",
                    mat5: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat5amt: 2,
                    hover5: "Degilmagna"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Daisy - Missing Lore
        id: 101806212,
        name: "Daisy",
        attribute: "Water",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6007,
                hpplus: 911,
                atk: 2499,
                atkplus: 384,
                def: 2571,
                defplus: 395
            },
        skillset: 
            {
                skill: "7s CT - 1700% Water DMG (PHY). Increase own Arts by 7.",
                skillbreak: 1900,
                arts: "12000% Water DMG (PHY). If enemy is Broken during this Arts, increase own Arts by 200.",
                artsbreak: 3000,
                truearts: "22500% Water DMG (PHY). For 15s, reduce Enemies' DMG RES and Movement Speed by 30%.",
                trueartsbreak: 4900
            },
        passive: 
            {
                ability1: "Increase DMG to Demon Enemies by 50%.",
                ability2: "Increase Allies' Break PWR by 20%.",
                ability3: "Increase Allies' Arts DMG by 25% and heal Allies' HP by 250 hp/s against Enemies in Break."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat3amt: 2,
                    hover3: "Radachne",
                    mat4: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat4amt: 2,
                    hover4: "Freydal",
                    mat5: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat5amt: 2,
                    hover5: "Palamicia"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Muse - Missing Lore, Evolution
        id: 101816312,
        name: "Muse",
        attribute: "Earth",
        type: "Spirit",
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
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6685,
                hpplus: 999,
                atk: 2592,
                atkplus: 398,
                def: 2675,
                defplus: 411
            },
        skillset: 
            {
                skill: "9s CT - 2700% Earth DMG (MAG). During Skill, increase own BE generation by 60%.",
                skillbreak: 900,
                arts: "16000% Earth DMG (MAG). Increase this Arts' Critical Rate against Water Enemies by 100%.",
                artsbreak: 1100,
                truearts: "18000% Earth DMG (MAG). For 17s, heal Allies' HP by 300/s + increase Allies' Healing Taken by 20% (Stackable).",
                trueartsbreak: 1400
            },
        passive: 
            {
                ability1: "Increase Allies' Critical DMG by 30%. Does not stack with Abilities of the same name.",
                ability2: "Increase Allies' MAX HP by 15%. Does not stack with Abilities of the same name.",
                ability3: "Increase Allies' Healing Taken by 30%. Does not stack with Abilities of the same name."
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
    { //Freed - Missing Lore, TW Image
        id: 101826412,
        name: "Freed",
        attribute: "Light",
        type: "God",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6874,
                hpplus: 999,
                atk: 3350,
                atkplus: 512,
                def: 2367,
                defplus: 365
            },
        skillset: 
            {
                skill: "7s CT - 2300% Light and Dark DMG (PHY). Increase own Arts by 10.",
                skillbreak: 1700,
                arts: "17550% Light and Dark DMG (PHY). Permanently increase own Critical Rate by 20% (up to 100%) + For 16s, increase own Skill CT REC by 50%.",
                artsbreak: 2500,
                truearts: "35000% Light and Dark DMG (PHY). Increase own Arts by 2 each time own True Arts crits.",
                trueartsbreak: 3600
            },
        passive: 
            {
                ability1: "Increase Allies' max HP and DEF by 20%. Increase own Critical DMG by 30%.",
                ability2: "Increase DMG to Light Enemies by 20%.",
                ability3: "Increase DMG to Dark Enemies by 20%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherum.png",
                    mat3amt: 3,
                    hover3: "Ragsherum",
                    mat4: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat4amt: 5,
                    hover4: "Geo-Zagnus",
                    mat5: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat5amt: 5,
                    hover5: "Ifrit"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Siegfried",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "3s CT - 900% Elementless DMG (PHY). Deal 1200% Elementless DMG (PHY) to Demon and God Enemies instead. If this attack hits an Enemy, heal own HP by 50 + For 3s, reduce own DEF by 20%.",
                skillbreak: 240,
                passive: 
                    {
                        ability1: "When equipped by Freed, increase stats by 30% and increase Paralysis and Freeze RES by 100%. Does not stack with Abilities of the same name.",
                        ability2: "Increase Arts DMG by 20%. If user is God, increase Equipment CT REC by 20%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Grohl - Missing Lore, TW Image
        id: 101836512,
        name: "Grohl",
        attribute: "Dark",
        type: "God",
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
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6237,
                hpplus: 945,
                atk: 2691,
                atkplus: 413,
                def: 2201,
                defplus: 340
            },
        skillset: 
            {
                skill: "8s CT - 2000% Dark DMG (MAG). Heal own HP by 4% of DMG dealt by this Skill.",
                skillbreak: 1200,
                arts: "13000% Dark DMG (MAG). Chance to inflict Nightmare. For 6s, increase Allies' BE generation by 70%.",
                artsbreak: 2100,
                truearts: "24600% Dark DMG (MAG). 100% chance to inflict Nightmare + For 15s, reduce Enemies' MAG RES by 20%. If Enemy is afflicted by Nightmare by own True Arts, for 15s, reduce that Enemy's Dark RES by 20%.",
                trueartsbreak: 2700
            },
        passive: 
            {
                ability1: "Increase own Water, Earth and Dark RES by 10%.",
                ability2: "Increase DMG to non-Boss enemies with less than 30% HP by 150%.",
                ability3: "Increase DMG against Enemies inflicted with Blind or Nightmare by 100%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 5,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat4amt: 5,
                    hover4: "Goldola",
                    mat5: "/db/Icons/dungeon_drops/fragRagsherum.png",
                    mat5amt: 3,
                    hover5: "Ragsherum"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Gestalt",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "60s CT - 4444% Dark DMG (MAG). If this attack hits a Boss with Status Ailments, steal 20 Arts from its Arts + For 6s, reduce Enemies' Blind RES by 50%.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Grohl, increase DMG by 20%, and heal HP by 200/s when inflicted by a status ailment. Does not stack with Abilities of the same name.",
                        ability2: "Increase DMG by 20% to Bosses with less than 30% HP. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rishley - Missing Lore
        id: 101846112,
        name: "Rishley",
        attribute: "Fire",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6750,
                hpplus: 999,
                atk: 3015,
                atkplus: 462,
                def: 2243,
                defplus: 346
            },
        skillset: 
            {
                skill: "5s CT - 2300% Fire DMG (PHY). Heal self by 2% of own max HP.",
                skillbreak: 900,
                arts: "15500% Fire DMG (PHY). High chance to inflict Burn.",
                artsbreak: 2500,
                truearts: "28800% Fire DMG (PHY). High chance to inflict Burn. Increase Fire Allies' stats by 20%, and own stats by 20%.",
                trueartsbreak: 3700
            },
        passive: 
            {
                ability1: "Increase Critical Rate by 100% against Burned Enemies.",
                ability2: "Increase Earth RES by 20%.",
                ability3: "Increase Allies' Arts DMG by 20%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat3amt: 5,
                    hover3: "Oldeus",
                    mat4: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat4amt: 3,
                    hover4: "Geo-Zagnus",
                    mat5: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat5amt: 3,
                    hover5: "Ifrit"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lapleh - Missing Lore
        id: 101856212,
        name: "Lapleh",
        attribute: "Water",
        type: "Machine",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6325,
                hpplus: 958,
                atk: 2396,
                atkplus: 369,
                def: 2119,
                defplus: 327
            },
        skillset: 
            {
                skill: "8s CT - 1000% Water DMG (MAG). Increase Golden Machina Count by 2 (up to 8), increase own Skill DMG by 100% for each Golden Machina Count (up to 800%).",
                skillbreak: 400,
                arts: "11450% Water DMG (MAG). For 12s, increase Allies' Skill CT REC by 30%, Water Allies' Skill CT REC by 30%.",
                artsbreak: 1900,
                truearts: "27450% Water DMG (MAG). If 8 Golden Machina are present, reduce Enemies' DEF by 100% for 12s and reset Golden Machina Count to 0.",
                trueartsbreak: 3800
            },
        passive: 
            {
                ability1: "Increase Equipment CT REC by 15%.",
                ability2: "Increase Burn RES by 90%.",
                ability3: "Increase Arts by 1/s."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat3amt: 5,
                    hover3: "Aerugraxes",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat5amt: 3,
                    hover5: "Geo-Zagnus"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Alma - Missing Lore
        id: 101866312,
        name: "Alma",
        attribute: "Earth",
        type: "Demon",
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
                hp: 7082,
                hpplus: 999,
                atk: 2582,
                atkplus: 397,
                def: 2298,
                defplus: 354
            },
        skillset: 
            {
                skill: "9s CT - 2000% Earth DMG (MAG). For 9s, reduce Enemies' ATK by 10%.",
                skillbreak: 1000,
                arts: "15500% Earth DMG (MAG). For 15s, reduce Enemies' MAG RES by 20%.",
                artsbreak: 2000,
                truearts: "24000% Earth DMG (MAG). For 15s, reduce Enemies' MAG RES by 50% + If an Enemy is Human, increase own Arts by 100.",
                trueartsbreak: 3300
            },
        passive: 
            {
                ability1: "Increase MAG RES by 30%.",
                ability2: "Increase Arts by 1/s.",
                ability3: "If HP is over 50%, increase DMG by 30%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat3amt: 4,
                    hover3: "Tonetaurus",
                    mat4: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat4amt: 2,
                    hover4: "Valzandeth",
                    mat5: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat5amt: 2,
                    hover5: "Goldola"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sonije - Missing Lore
        id: 101876412,
        name: "Sonije",
        attribute: "Light",
        type: "Spirit",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6245,
                hpplus: 946,
                atk: 2097,
                atkplus: 324,
                def: 2167,
                defplus: 335
            },
        skillset: 
            {
                skill: "8s CT - Increase Allies' Arts by 5 + For 8s, increase Allies' Skill CT REC by 20%.",
                skillbreak: 0,
                arts: "7900% Light DMG (MAG). For 15s, increase Allies' Arts by 2/s.",
                artsbreak: 2100,
                truearts: "20800% Light DMG (MAG). For 12s, increase Allies' Paralysis and Freeze RES by 100%, Arts DMG by 30%, for Earth and Light Allies, increase Arts DMG by 60% instead.",
                trueartsbreak: 3600
            },
        passive: 
            {
                ability1: "Increase Allies' max HP by 10%. Does not stack with Abilities of the same name.",
                ability2: "When near-death, increase Arts by 2/s.",
                ability3: "Increase Allies' Accuracy and Critical DMG by 30%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 2,
                    hover3: "Geo-Zagnus",
                    mat4: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat4amt: 2,
                    hover4: "Fosradius",
                    mat5: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat5amt: 4,
                    hover5: "Elpneumas"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Onfuan - Missing Lore
        id: 101886512,
        name: "Onfuan",
        attribute: "Dark",
        type: "Demon",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6721,
                hpplus: 999,
                atk: 2521,
                atkplus: 388,
                def: 2099,
                defplus: 324
            },
        skillset: 
            {
                skill: "7s CT - 1500% Dark DMG (PHY).",
                skillbreak: 800,
                arts: "7200% Dark DMG (PHY). For 25s, Allies gain a DMG barrier that negates 3000 DMG.",
                artsbreak: 1900,
                truearts: "14000% Dark DMG (PHY). For 25s, increase Allies' DEF by 30%, Allies gain a DMG barrier that negates 4000 DMG.",
                trueartsbreak: 2500
            },
        passive: 
            {
                ability1: "When near-death, increase DMG RES by 10%. Does not stack with Abilities of the same name.",
                ability2: "Increase Curse RES by 100%.",
                ability3: "Increase all Allies' DEF and Blind RES by 30%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat3amt: 5,
                    hover3: "Mavroskia",
                    mat4: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat4amt: 5,
                    hover4: "Oldeus",
                    mat5: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat5amt: 3,
                    hover5: "Ragsherum Phantom"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kayas - Missing Lore, Evolution
        id: 101896512,
        name: "Kayas",
        attribute: "Dark",
        type: "God",
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
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6827,
                hpplus: 999,
                atk: 3264,
                atkplus: 499,
                def: 2028,
                defplus: 314
            },
        skillset: 
            {
                skill: "1800% Dark DMG (MAG). Increase own BE generation by 80%.",
                skillbreak: 1150,
                arts: "19000% Dark DMG (MAG). Increase own Arts by 100 against Enemies in BREAK.",
                artsbreak: 2200,
                truearts: "32000% Dark DMG (MAG). For 15s, decrease God Enemies' MAG RES by 30%. If this unit has taken 5000 DMG since its last Arts/True Arts, increase own Arts DMG by 250% for 30s.",
                trueartsbreak: 2700
            },
        passive: 
            {
                ability1: "Increase DMG by 1% every 3s (maximum of 60% DMG increase).",
                ability2: "Increase Arts DMG every time damage is taken - 1000 DMG taken will increase Arts DMG dealt by 10%. Buff resets after using Arts or True Arts (maximum of 50% Arts DMG increase).",
                ability3: "Increase DMG to God Enemies by 50%."
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
                    mat3: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat3amt: 2,
                    hover3: "Mavroskia",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //End - Missing Lore
        id: 101906412,
        name: "End",
        attribute: "Light",
        type: "Human",
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
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 5440,
                hpplus: 826,
                atk: 1840,
                atkplus: 286,
                def: 2200,
                defplus: 340
            },
        skillset: 
            {
                skill: "8s CT - 1800% Light DMG (MAG). Increase own Arts by 5.",
                skillbreak: 1000,
                arts: "12000% Light DMG (MAG). For 60s, increase Allies' stats by 20%.",
                artsbreak: 1900,
                truearts: "21500% Light DMG (MAG). For 10s, increase Allies' DMG by 20%, increase God Allies' DMG by 30%.",
                trueartsbreak: 3300
            },
        passive: 
            {
                ability1: "Increase own Critical DMG by 10%. At the start of a Battle, increase own Arts by 100. Does not stack with similar Abilities.",
                ability2: "Increase DMG to Giant Bosses by 20%.",
                ability3: "Increase DMG RES against God Enemies by 15%.",
                ability4: "Increase own Critical Rate by 20%. 60s after a Quest starts, increase Arts by 100. Can only be activated once per Quest."
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
                    mat3amt: 1,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat4amt: 1,
                    hover4: "Flogassa",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Coco - Missing Lore
        id: 101916512,
        name: "Coco",
        attribute: "Dark",
        type: "Demon",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 5890,
                hpplus: 893,
                atk: 2340,
                atkplus: 361,
                def: 2590,
                defplus: 398
            },
        skillset: 
            {
                skill: "8s CT - 3000% Dark DMG (PHY).",
                skillbreak: 2500,
                arts: "16800% Dark DMG (PHY). For 10s, increases own BE generation by 80%.",
                artsbreak: 4800,
                truearts: "32000% Dark DMG (PHY). Break PWR of True Arts becomes 20000 when attacking Raid Bosses. Otherwise, reduce Enemies' Break Bar by 50% (effect can only take place on the same Enemy once every 40s).",
                trueartsbreak: 3300
            },
        passive: 
            {
                ability1: "Activates after using True Arts. For 50s, increase Arts by 2/s, increase Arts DMG to Raid Bosses by 100% and increase Skill CT REC by 30%. Can be activated multiple times.",
                ability2: "When near-death, heal own HP by 6% of DMG dealt."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat3amt: 1,
                    hover3: "Flogassa",
                    mat4: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat4amt: 1,
                    hover4: "Mavroskia",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Anna - Missing Lore
        id: 101926112,
        name: "Anna",
        attribute: "Fire",
        type: "God",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6220,
                hpplus: 943,
                atk: 2650,
                atkplus: 403,
                def: 2020,
                defplus: 313
            },
        skillset: 
            {
                skill: "9s CT - 1600% Fire DMG (PHY). For 6s, reduce Enemies' Burn RES by 20%.",
                skillbreak: 800,
                arts: "7600% Fire DMG (PHY). High chance to inflict Burn. For 7s, increase Allies' Poison RES by 80%.",
                artsbreak: 1600,
                truearts: "20000% Fire DMG (PHY). High chance to inflict Burn. Reduce Enemies' Arts by 30.",
                trueartsbreak: 2600
            },
        passive: 
            {
                ability1: "Increase Poison RES by 100%.",
                ability2: "Increase Allies' Critical Rate by 30%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat3amt: 2,
                    hover3: "Flogassa",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sly - Missing Lore
        id: 101936212,
        name: "Sly",
        attribute: "Water",
        type: "Giant",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6550,
                hpplus: 992,
                atk: 2380,
                atkplus: 327,
                def: 2260,
                defplus: 349
            },
        skillset: 
            {
                skill: "9s CT - 2200% Water DMG (PHY). Chance to inflict Freeze.",
                skillbreak: 1400,
                arts: "15800% Water DMG (PHY). If own Arts hits a Enemy in BREAK, increase own Arts by 100.",
                artsbreak: 2600,
                truearts: "30000% Water DMG (PHY). Increase Critical Rate of True Arts by 100% + For 25s, if activated while own HP is less than 50%, increase own ATK by 150% and DMG to Demon and Human Enemies by 100%.",
                trueartsbreak: 4400
            },
        passive: 
            {
                ability1: "Increase DMG to Human Enemies by 50%.",
                ability2: "Increase DMG to Demon Enemies by 50%.",
                ability3: "Increase Paralysis and Freeze RES by 100%. When near-death, increase Status RES (except Faint) by 50%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 5,
                    hover3: "Geo Zagnus",
                    mat4: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat4amt: 3,
                    hover4: "Mavroskia",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 3,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Vogue - Missing Lore, TW Image
        id: 101946312,
        name: "Vogue",
        attribute: "Earth",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 5500,
                hpplus: 835,
                atk: 2320,
                atkplus: 358,
                def: 2080,
                defplus: 322
            },
        skillset: 
            {
                skill: "5s CT - 1400% Earth DMG (PHY). Increase own Arts by 10 + For 5s, reduce Enemies' accuracy by 30%.",
                skillbreak: 600,
                arts: "12000% Earth DMG (PHY). Increase own Critical Rate and DMG by 20% (up to 100%).",
                artsbreak: 2000,
                truearts: "18000% Earth DMG (PHY). For 10s, increase own Paralysis and Freeze RES, increase Allies' accuracy by 50%.",
                trueartsbreak: 2800
            },
        passive: 
            {
                ability1: "Increase MAG evasion by 20%.",
                ability2: "Increase Arth's Break PWR and DMG RES by 10%. Does not stack with Abilities of the same name.",
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat3amt: 1,
                    hover3: "Tonetaurus",
                    mat4: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat4amt: 2,
                    hover4: "Goldola",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Glamerald",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "45s CT - 7200% Earth DMG (PHY). For 8s, increase Earth Allies' Break PWR by 30%.",
                skillbreak: 2400,
                passive: 
                    {
                        ability1: "When equipped by Vogue, increase DMG by 20% and PHY RES by 15%.",
                        ability2: "When near-death, increase evasion by 10%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Voghan - Missing Lore
        id: 101956112,
        name: "Voghan",
        attribute: "Fire",
        type: "Demon",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6650,
                hpplus: 999,
                atk: 2236,
                atkplus: 345,
                def: 2380,
                defplus: 367
            },
        skillset: 
            {
                skill: "8s CT - 1600% Fire DMG (PHY). Increase own Arts by 7.",
                skillbreak: 1700,
                arts: "14500% Fire DMG (PHY). For 16s, increase own Skill CT REC by 120%.",
                artsbreak: 3000,
                truearts: "23000% Fire DMG (PHY). When activated against an Enemy in BREAK, reduce the Break Bar by 100% + For 20s, increase own DMG to Enemies in Break by 100%.",
                trueartsbreak: 1000
            },
        passive: 
            {
                ability1: "Increase DMG to Human Enemies by 70%.",
                ability2: "Ignore 35% of Enemies' DEF.",
                ability3: "Increase own Critical Rate by 30% and Critical DMG by 20% against Enemies in Break."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 3,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 2,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat5amt: 5,
                    hover5: "Flogassa"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Diaz - Missing Lore, TW Image
        id: 101966212,
        name: "Diaz",
        attribute: "Water",
        type: "Spirit",
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
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6880,
                hpplus: 999,
                atk: 2130,
                atkplus: 329,
                def: 2550,
                defplus: 392
            },
        skillset: 
            {
                skill: "8s CT - For 8s, heal all Allies' HP by 20/s.",
                skillbreak: 0,
                arts: "13500% Water DMG (MAG). Increase Water Allies' Arts by 30.",
                artsbreak: 2500,
                truearts: "19500% Water DMG (MAG). When this attack hits an Enemy, heal Allies' HP by 2000 + For 8s, increase Water Allies' Arts DMG by 30%.",
                trueartsbreak: 3800
            },
        passive: 
            {
                ability1: "Increase Water Allies' stats by 10% and Mikyuon Allies' stats by 300%.",
                ability2: "Increase DMG to Fire Enemies by 20%.",
                ability3: "Increase Allies' Critical DMG by 10%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 2,
                    hover3: "Geo Zagnus",
                    mat4: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat4amt: 5,
                    hover4: "Freydal",
                    mat5: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat5amt: 3,
                    hover5: "Tonetaurus"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Proscris",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "35s CT - 5000% Water DMG (MAG). Heal own HP by 260 and increase own Arts by 20 each time this attack hits an Enemy (only once per enemy, per usage).",
                skillbreak: 1500,
                passive: 
                    {
                        ability1: "When equipped by Diaz, increase DMG by 20% and heal HP by 100/s. Does not stack with Abilities of the same name.",
                        ability2: "Increase Allies' max HP by 5% and Beast Allies' DMG by 15%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mamori - Missing Lore, TW Image
        id: 101976312,
        name: "Mamori",
        attribute: "Earth",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6050,
                hpplus: 917,
                atk: 2021,
                atkplus: 313,
                def: 1980,
                defplus: 307
            },
        skillset: 
            {
                skill: "8s CT - 2000% Earth DMG (PHY). This Skill ignores 30% of Enemy DEF.",
                skillbreak: 1600,
                arts: "12800% Earth DMG (PHY). For 11s, reduce Enemies' Earth RES by 30%.",
                artsbreak: 2200,
                truearts: "25600% Earth DMG (PHY). Increase own evasion by 20% & ignore Enemies' DEF during own True Arts + For 15s, increase Allies' DMG and evasion by 30%.",
                trueartsbreak: 4200
            },
        passive: 
            {
                ability1: "Heal own HP by 10/s.",
                ability2: "Increase accuracy by 30%.",
                ability3: "Increase DMG to Water Enemies by 30%. Increase Fire RES by 35%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat3amt: 4,
                    hover3: "Goldola",
                    mat4: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat4amt: 2,
                    hover4: "Tonetaurus",
                    mat5: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat5amt: 2,
                    hover5: "Radachne"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Forester",
                slot: "/db/Mines/thumbnail/suppLB.png",
                detail: "",
                skill: "40s CT - 2222% Earth DMG (PHY). If user is Earth, increase own Arts by 20 + For 10s, increase Allies' evasion and accuracy by 30%.",
                skillbreak: 500,
                passive: 
                    {
                        ability1: "When equipped by Mamori, increase DMG and Equipment CT REC by 20%, and increase Arts by 2/s. Does not stack with Abilities of the same name.",
                        ability2: "Increase Equipment DMG by 15% and heal HP by 10/s. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Melody - Missing Lore
        id: 101986412,
        name: "Melody",
        attribute: "Light",
        type: "God",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6100,
                hpplus: 925,
                atk: 2050,
                atkplus: 317,
                def: 2360,
                defplus: 364
            },
        skillset: 
            {
                skill: "9s CT - 1600% Light DMG (PHY). For 5s, increase Allies' Healing Taken by 20%.",
                skillbreak: 500,
                arts: "13700% Light DMG (PHY). Increase own Critical Rate by 100% and evasion by 25% during this Arts.",
                artsbreak: 800,
                truearts: "24300% Light DMG (PHY). For 15s, increase Allies' Skill CT REC and DEF by 50%, Light Allies' DMG by 30%.",
                trueartsbreak: 1200
            },
        passive: 
            {
                ability1: "Increase Dark RES by 15%.",
                ability2: "Increase DMG to Dark Enemies by 10%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragMelody.png",
                    mat3amt: 20,
                    hover3: "Melody",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rohst - Missing Lore
        id: 101996511,
        name: "Rohst",
        attribute: "Dark",
        type: "Dragon",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6250,
                hpplus: 947,
                atk: 2032,
                atkplus: 314,
                def: 2250,
                defplus: 347
            },
        skillset: 
            {
                skill: "8s CT - 1900% Dark DMG (PHY).",
                skillbreak: 700,
                arts: "8500% Dark DMG (PHY). For 10s, increase Allies' DMG by 20%, Dragon Allies' DMG by 30%.",
                artsbreak: 1800,
                truearts: "15500% Dark DMG (PHY). For 9s, Allies heal their HP by 4% of their DMG dealt.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "Increase DMG to Demon Enemies by 40%.",
                ability2: "Increase Dragon Allies' stats by 15%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRohst.png",
                    mat3amt: 20,
                    hover3: "Rohst",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Gerald - Missing Lore
        id: 102006112,
        name: "Gerald",
        attribute: "Fire",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7500,
                hpplus: 999,
                atk: 2120,
                atkplus: 328,
                def: 3020,
                defplus: 463
            },
        skillset: 
            {
                skill: "8s CT - 2000% Fire DMG (PHY). For 5s, reduce Enemies' ATK by 20%.",
                skillbreak: 1200,
                arts: "15400% Fire DMG (MAG). Increase Allies' Arts by 10 + For 20s, redirect Allies' DMG taken to self and gain a DMG barrier that negates 8000 DMG to self.",
                artsbreak: 2400,
                truearts: "21600% Fire DMG (MAG). Cure own Status Ailments, increase Allies' Arts by 15 + For 20s, redirect Allies' DMG taken to self and gain a DMG barrier that negates 15000 DMG to self.",
                trueartsbreak: 4800
            },
        passive: 
            {
                ability1: "Increase Allies' DMG RES by 10% when near-death.",
                ability2: "When this unit takes lethal DMG, prevent HP from dropping below 1 HP for 5s, gradually heal for 50% HP and gradually increase Arts for a total of 200. Ability can only be activated once per Quest.",
                ability3: "Increase Burn RES by 50%.",
                ability4: "Increase Raid Boss DMG RES by 20%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat3amt: 2,
                    hover3: "Flogassa",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zeela - Missing Lore
        id: 102016212,
        name: "Zeela",
        attribute: "Water",
        type: "God",
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
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 5840,
                hpplus: 886,
                atk: 2492,
                atkplus: 383,
                def: 2135,
                defplus: 330
            },
        skillset: 
            {
                skill: "8s CT - Heal all Allies' HP by 300. For 3s, increase Allies' Arts by 2/s.",
                skillbreak: 0,
                arts: "Increase own Arts by 50 + For 15s, increase Allies' (except self) accuracy and Critical Rate by 70%, and MAG DMG by 50%.",
                artsbreak: 0,
                truearts: "28500% Water DMG (MAG). Cure own status ailments (except Faint), increase this True Arts' accuracy by 100%, this True Arts ignores 100% of Enemy DEF.",
                trueartsbreak: 3800
            },
        passive: 
            {
                ability1: "When near-death, increase DEF by 50%.",
                ability2: "Increase Freeze RES by 100%.",
                ability3: "Increase own Arts by 2/s. When damaged while near-death, for 10s, gain a DMG barrier that negates 2200 DMG to self. Ability can only be activated once every 30s."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 2,
                    hover3: "Geo Zagnus",
                    mat4: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat4amt: 2,
                    hover4: "Freydal",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 1,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Fosly - Missing Lore
        id: 102026312,
        name: "Fosly",
        attribute: "Earth",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6527,
                hpplus: 989,
                atk: 2534,
                atkplus: 390,
                def: 2289,
                defplus: 353
            },
        skillset: 
            {
                skill: "8s CT - 1700% Earth DMG (PHY). Each time own Skill is activated, permanently increase own ATK by 20% (up to 100%).",
                skillbreak: 2000,
                arts: "15000% Earth DMG (PHY). Permanently increase own Break PWR by 40% (up to 120%).",
                artsbreak: 3200,
                truearts: "25000% Earth DMG (PHY). High chance of inflicting Faint. For 20s, reduce Enemies' Break RES by 40%.",
                trueartsbreak: 6000
            },
        passive: 
            {
                ability1: "At the start of a Quest, reduce own max HP by 15%. For 30s, gradually recover up to 65% max HP.",
                ability2: "When near-death, heal own HP for 60/s.",
                ability3: "When near-death, increase own Arts by 2/s."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 2,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat4amt: 2,
                    hover4: "Tonetaurus",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Jack - Missing Lore
        id: 102036412,
        name: "Jack",
        attribute: "Light",
        type: "Machine",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7080,
                hpplus: 999,
                atk: 2325,
                atkplus: 358,
                def: 2408,
                defplus: 371
            },
        skillset: 
            {
                skill: "7s CT - 1900% Light DMG (PHY). Increase own Arts by 8.",
                skillbreak: 1800,
                arts: "14200% Light DMG (PHY). High chance to transform Enemies into a Chest. Increase Allies' BE generation by 50% against Enemies transformed by this Arts.",
                artsbreak: 2500,
                truearts: "28000% Light DMG (PHY). High chance to transform Enemies into a Chest. Increase Allies' Arts by 20. Increase Allies' BE generation by 80% against Enemies transformed by this True Arts.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "When near-death, increase Skill CT REC by 50%.",
                ability2: "Increase evasion by 10%.",
                ability3: "Increase Allies' Arts DMG by 10%. Does not stack with Abilities of the same name."
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
                    mat3amt: 3,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat5amt: 1,
                    hover5: "Geo Zagnus"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Celia (Light) - Missing Lore, TW Image
        id: 102046412,
        name: "Celia (Light)",
        attribute: "Light",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 7104,
                hpplus: 999,
                atk: 2424,
                atkplus: 373,
                def: 2808,
                defplus: 431
            },
        skillset: 
            {
                skill: "8s CT - 1800% Light DMG (PHY). For 5s, reduce Enemies' ATK by 20%.",
                skillbreak: 1400,
                arts: "13800% Light DMG (PHY). Increase Allies' Arts by 10 + For 20s, redirect Allies' DMG taken to self and gain a DMG barrier that negates 8000 DMG to self.",
                artsbreak: 2900,
                truearts: "22800% Light DMG (PHY). Increase Allies' Arts by 15 + Cure own Status Ailments + For 20s, redirect Allies' DMG taken to self and gain a DMG barrier that negates 15000 DMG to self.",
                trueartsbreak: 4500
            },
        passive: 
            {
                ability1: "Less likely to be knocked back. Heal 30% of DMG taken from Enemy Arts.",
                ability2: "Increase Allies' DMG RES by 10% when near-death.",
                ability3: "Increase own Healing Taken by 30% (except Lifesteal) and ignore 50% of Enemies' DEF."
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
                    mat4amt: 3,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat5amt: 5,
                    hover5: "Palamicia"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Joyeuse",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "70s CT - 8000% Light DMG (PHY). For 8s, ignore 50% of Enemy DEF, and increase DMG RES by 30%.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Celia, increase DMG by 20% and increase Freeze and Paralysis RES by 100%. Does not stack with Abilities of the same name.",
                        ability2: "Increase max HP by 1000. When near-death, increase DMG RES by 10%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ashe - Missing Lore, TW Image
        id: 102056512,
        name: "Ashe",
        attribute: "Dark",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6950,
                hpplus: 999,
                atk: 2880,
                atkplus: 442,
                def: 2220,
                defplus: 340
            },
        skillset: 
            {
                skill: "5s CT - 2000% Dark DMG (PHY). Chance to inflict Blind. Increase own Arts by 3.",
                skillbreak: 800,
                arts: "19000% Dark DMG (PHY). For 13s, reduce Enemies' Blind RES by 35%.",
                artsbreak: 2300,
                truearts: "30000% Dark DMG (PHY). Reduce Enemies' Arts by 40 + For 15s, reduce Enemies' DMG RES by 50% and Movement Speed by 30%.",
                trueartsbreak: 4300
            },
        passive: 
            {
                ability1: "Increase Critical Rate by 100% against Blinded Enemies.",
                ability2: "Increase Critical DMG by 30%.",
                ability3: "Increase DMG to non-Boss Enemies under 30% HP by 300%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 1,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat4amt: 2,
                    hover4: "Valzandeth",
                    mat5: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat5amt: 2,
                    hover5: "Oldeus"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Dos Muertes",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "30s CT - 6800% Dark DMG (MAG). Heal user's HP by 7% of DMG dealt by this attack.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Ashe, increase Critical DMG by 50% and increase Arts by 1/s. Does not stack with Abilities of the same name.",
                        ability2: "Increase DMG to Human Enemies by 30%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Norn - Missing Lore, TW Image
        id: 102066312,
        name: "Norn",
        attribute: "Earth",
        type: "Machine",
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
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6990,
                hpplus: 848,
                atk: 2383,
                atkplus: 295,
                def: 2568,
                defplus: 320
            },
        skillset: 
            {
                skill: "10s CT - 1800% Earth DMG (MAG). For 10s, reduce Enemies' Status RES by 20%.",
                skillbreak: 2000,
                arts: "14000% Earth DMG (MAG). High chance to inflict Paralysis. For 6s, increase own DMG to Paralyzed Enemies by 100%.",
                artsbreak: 2800,
                truearts: "32600% Earth DMG (MAG). Increase Allies' Arts by 20 + For 20s, increase Allies' Arts by 3/s. For 30s, increase own stats by 50%.",
                trueartsbreak: 5000
            },
        passive: 
            {
                ability1: "Increase Machine Allies' stats by 15%.",
                ability2: "Increase Critical RES by 20%.",
                ability3: "Increase DMG to enemies with 30% HP or less by 20%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat3amt: 3,
                    hover3: "Code-XTF",
                    mat4: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat4amt: 2,
                    hover4: "Goldola"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Griffin",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "45s CT - 7800% Earth DMG (MAG). For 12s, reduce Enemies' Paralysis RES by 60%.",
                skillbreak: 1500,
                passive: 
                    {
                        ability1: "When equipped by Norn, increase DMG by 20%. At the start of a Quest, increase Arts by 100. Does not stack with Abilities of the same name.",
                        ability2: "Increase Break PWR by 10%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Riana - Missing Lore, TW Image
        id: 102166212,
        name: "Riana",
        attribute: "Water",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6068,
                hpplus: 920,
                atk: 2418,
                atkplus: 372,
                def: 2093,
                defplus: 323
            },
        skillset: 
            {
                skill: "12s CT - For 3s, enter Counterattack Mode. Counterattack: 2900% Water DMG (PHY). For 5s, increase own ATK by 30%.",
                skillbreak: 800,
                arts: "16000% Water DMG (PHY). If Arts is activated during the ATK buff from Skill, increase this Arts' Critical Rate by 100%.",
                artsbreak: 1800,
                truearts: "26000% Water DMG (PHY). Increase own True Arts' Critical Rate by 100% + For 20s, increase own Skill CT REC by 100%.",
                trueartsbreak: 3200
            },
        passive: 
            {
                ability1: "Increase own PHY RES by 10%.",
                ability2: "Increase Equipment DMG and Break PWR by 50%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat3amt: 1,
                    hover3: "Freydal",
                    mat4: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat4amt: 2,
                    hover4: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Fatalite",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "25s CT - 4200% Water DMG (PHY). If user is Human, increase DMG and Break PWR of next Skill by 25%.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Riana, increase DMG and Skill CT REC by 20%. Does not stack with Abilities of the same name.",
                        ability2: "Increase Equipment Critical Rate by 20%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kane (Earth) - Missing Lore, TW Image
        id: 102176312,
        name: "Kane (Earth)",
        attribute: "Earth",
        type: "Human",
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
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6250,
                hpplus: 947,
                atk: 2420,
                atkplus: 373,
                def: 2150,
                defplus: 332
            },
        skillset: 
            {
                skill: "8s CT - 1850% Earth DMG (PHY). For 5s, increase own Arts by 1/s.",
                skillbreak: 900,
                arts: "16200% Earth DMG (MAG). High chance to inflict Paralysis.",
                artsbreak: 2400,
                truearts: "22600% Earth DMG (PHY). 50% chance to increase own Arts by 200 (can only occur up to 3 consecutive times).",
                trueartsbreak: 3200
            },
        passive: 
            {
                ability1: "Increase Critical DMG by 20%. Does not stack with Abilities of the same name.",
                ability2: "Increase DMG to Water Enemies by 35%.",
                ability3: "Increase Human Allies' stats by 15%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat3amt: 3,
                    hover3: "Goldola",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 5,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat5amt: 2,
                    hover5: "Elpneumas"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Glorious",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "40s CT - 7200% Earth DMG (MAG). 80% chance to inflict Paralysis.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Kane, increase DMG by 20% and increase Freeze and Paralysis RES by 100%. Does not stack with Abilities of the same name.",
                        ability2: "If the user is Human, increase Arts DMG by 10% and increase Arts DMG RES by 15%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Courtney - Missing Lore
        id: 102186512,
        name: "Courtney",
        attribute: "Dark",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7200,
                hpplus: 999,
                atk: 2500,
                atkplus: 385,
                def: 2380,
                defplus: 367
            },
        skillset: 
            {
                skill: "8s CT - 1700% Dark DMG (MAG). For 6s, reduce Enemies' DMG RES by 10%.",
                skillbreak: 700,
                arts: "15500% Dark DMG (MAG). For 10s, reduce Enemies' Status RES by 50%.",
                artsbreak: 2200,
                truearts: "22000% Dark DMG (MAG). For 15s, reduce Enemies' ATK, DEF and Break RES by 50%.",
                trueartsbreak: 3500
            },
        passive: 
            {
                ability1: "Increase Gren gained on Quests by 30%. Does not stack with similar Abilities.",
                ability2: "Increase Light RES by 25%.",
                ability3: "When near-death, increase Skill CT REC by 20%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat3amt: 1,
                    hover3: "Valzandeth",
                    mat4: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat4amt: 1,
                    hover4: "Degilmagna",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Marzex (Dark) - Missing Lore, True Weapon, TW Image
        id: 102196512,
        name: "Marzex (Dark)",
        attribute: "Dark",
        type: "God",
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
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 5,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7357,
                hpplus: 999,
                atk: 2957,
                atkplus: 454,
                def: 2212,
                defplus: 341
            },
        skillset: 
            {
                skill: "9s CT - 2000% Water, Fire, and Earth DMG (MAG). Cure own Poison, Disease, Burn and Curse. Increase own Arts by 15.",
                skillbreak: 1800,
                arts: "18000% Dark DMG (PHY). For 10s, reduce Enemies’ Critical RES by 100%.",
                artsbreak: 2000,
                truearts: "38000% Elementless DMG (Typeless). Increase this True Arts' DMG depending on how high Enemies' HP are (up to 150%). Increase this True Arts' Critical Rate by 100%. Consume 15% of your current HP + For 30s, enemies take continuous, unstoppable DMG.",
                trueartsbreak: 2800
            },
        passive: 
            {
                ability1: "Increase own max HP by 100%. At the start of a Quest, for 120s, reduce own max HP by 1%/s (down to a total of 20% max HP reduction).",
                ability2: "Increase DMG to non-God Enemies by 50%.",
                ability3: "Increase PHY evasion by 25%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 2,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat4amt: 2,
                    hover4: "Mavroskia",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Vengeance",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "60s CT - 8000% Dark DMG (PHY). For 8s, increase God Allies' DMG by 40%.",
                skillbreak: "?",
                passive: 
                    {
                        ability1: "When equipped by Dark Marzex, increase Arts by 100 at the start of the Quest.",
                        ability2: "Increase Dark RES by 10%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mako - Missing Lore, TW Image
        id: 102206412,
        name: "Mako",
        attribute: "Light",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6680,
                hpplus: 999,
                atk: 2520,
                atkplus: 394,
                def: 2180,
                defplus: 343
            },
        skillset: 
            {
                skill: "8s CT - 1800% Light DMG (PHY). Increase own Arts by 5.",
                skillbreak: 1000,
                arts: "16000% Light DMG (PHY). For 10s, increase own Skill CT REC by 150%, reduce Enemies' DMG RES and Movement Speed by 30%.",
                artsbreak: 2200,
                truearts: "For 15s, heal Allies' HP by 350/s, increase Allies' Arts by 4/s and Arts DMG by 80%.",
                trueartsbreak: 0
            },
        passive: 
            {
                ability1: "Increase Equipment CT REC by 10%.",
                ability2: "Increase Healing Taken by 20%.",
                ability3: "Increase PHY RES by 30% and increase Paralysis and Freeze RES by 100%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 1,
                    hover3: "Fosradius",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Fight Club Goku Uniform",
                slot: "/db/Mines/thumbnail/suppLB.png",
                detail: "",
                skill: "30s CT - Increase Allies' Arts by 15. For 15s, increase Allies' DMG by 20%.",
                skillbreak: 0,
                passive: 
                    {
                        ability1: "When equipped by Mako, the Arts generation and DMG buff of this Equip's Skill is doubled. Does not stack with Abilities of the same name.",
                        ability2: "Increase DEF by 5%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Satsuki - Missing Lore, TW Image
        id: 102216212,
        name: "Satsuki",
        attribute: "Water",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 7580,
                hpplus: 999,
                atk: 2680,
                atkplus: 418,
                def: 2320,
                defplus: 364
            },
        skillset: 
            {
                skill: "6s CT - 2200% Water DMG (PHY).",
                skillbreak: 2500,
                arts: "16000% Water DMG (PHY). Increase Break PWR of this Arts by 250% during Enemy Arts.",
                artsbreak: 4000,
                truearts: "50000% Water DMG (PHY). 100% chance to inflict Ultimate Freeze. For 20s, increase Status RES (except Faint) by 100% for self.",
                trueartsbreak: 8500
            },
        passive: 
            {
                ability1: "Heal HP by 25/s.",
                ability2: "Increase Dark RES by 30%.",
                ability3: "Increase Break PWR by 20% and Critical Rate by 50%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat3amt: 1,
                    hover3: "Freydal",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Bakuzan",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "50s CT - 7500% Water DMG (PHY).",
                skillbreak: 5000,
                passive: 
                    {
                        ability1: "When equipped by Satsuki, increase user's Break PWR by 50%. Does not stack with Abilities of the same name.",
                        ability2: "Increase ATK by 5%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ryuko - Missing Lore, TW Image
        id: 102226112,
        name: "Ryuko",
        attribute: "Fire",
        type: "Human",
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
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 7200,
                hpplus: 999,
                atk: 2880,
                atkplus: 448,
                def: 2260,
                defplus: 355
            },
        skillset: 
            {
                skill: "8s CT - 2200% Fire DMG (PHY). Increase BE generated by this Skill by 80%.",
                skillbreak: 1200,
                arts: "16000% Fire DMG (PHY). For 16s, increase own ATK by 200% & Skill CT REC by 100%.",
                artsbreak: 2150,
                truearts: "55000% Fire DMG (PHY). For 20s, increase own DMG to Enemies in Break by 200%, increase Paralysis and Freeze RES by 100%.",
                trueartsbreak: 3800
            },
        passive: 
            {
                ability1: "When near-death, increase Arts by 3/s.",
                ability2: "When near-death, heal HP by 40/s.",
                ability3: "Increase accuracy by 50%, Arts DMG by 30%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat3amt: 1,
                    hover3: "Flogassa",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Scissor Blade",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "55s CT - 13000% Fire DMG (PHY). For 20s, increase user's Fire DMG by 30%.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Ryuko, increase own DMG by 20% and Arts by 2/s. Does not stack with Abilities of the same name.",
                        ability2: "When near-death, increase own DMG by 10%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Pientz - Missing Lore
        id: 102236111,
        name: "Pientz",
        attribute: "Fire",
        type: "Spirit",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102235111.png",
                detailawk: "/db/Units/Detail/unit_detail_102236111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102235111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102236111.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6222,
                hpplus: 943,
                atk: 2088,
                atkplus: 323,
                def: 2222,
                defplus: 343
            },
        skillset: 
            {
                skill: "8s CT - 1480% Fire DMG (MAG). For 8s, increase Allies' (except self) Skill CT REC by 20%.",
                skillbreak: 900,
                arts: "8580% Fire DMG (MAG). For 10s, reduce Enemies' ATK and DEF by 30%.",
                artsbreak: 2000,
                truearts: "14550% Fire DMG (MAG). Reduce Boss' Arts by 30 + For 10s, increase Fire Allies' DMG by 30%.",
                trueartsbreak: 3400
            },
        passive: 
            {
                ability1: "Increase Burn RES by 60%.",
                ability2: "Heal Fire Allies' HP by 30/s and increase Fire Allies' Water RES by 10%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPientz.png",
                    mat3amt: 20,
                    hover3: "Pientz",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mixie - Missing Lore, TW Image
        id: 102246412,
        name: "Mixie",
        attribute: "Light",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102245412.png",
                detailawk: "/db/Units/Detail/unit_detail_102246412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102245412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102246412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6530,
                hpplus: 989,
                atk: 2380,
                atkplus: 367,
                def: 2155,
                defplus: 333
            },
        skillset: 
            {
                skill: "6s CT - Enter Counterattack Mode for 2s. Counterattack: 1800% Light DMG (MAG). High chance to inflict Poison.",
                skillbreak: 1000,
                arts: "10000% Light DMG (MAG). Enter Counterattack Mode for 4s + For 8s, increase own Arts DMG by 50%. Counterattack: For 12s, reduce Enemies' DEF by 100%.",
                artsbreak: 2500,
                truearts: "26000% Light DMG (MAG). For 12s, reduce Enemies' Poison RES by 100% and Light RES by 30%.",
                trueartsbreak: 3800
            },
        passive: 
            {
                ability1: "When near-death, heal own HP by 6% of DMG dealt.",
                ability2: "Increase DMG to Light Enemies by 40%.",
                ability3: "Increase own Light and Dark RES by 20%. Increase Critical Rate by 100% against Poisoned Enemies."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat3amt: 2,
                    hover3: "Radachne",
                    mat4: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat4amt: 1,
                    hover4: "Valzandeth",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Sans Pluie",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "40s CT - 7200% Light DMG (MAG). 80% chance to inflict Poison. If user is Demon, increase own Arts by 30.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Mixie, increase DMG and Equipment CT REC by 20%. Does not stack with Abilities of the same name.",
                        ability2: "Increase accuracy and Skill CT REC by 20%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Pheles - Missing Lore
        id: 102256212,
        name: "Pheles",
        attribute: "Water",
        type: "Spirit",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102255212.png",
                detailawk: "/db/Units/Detail/unit_detail_102256212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102255212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102256212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6830,
                hpplus: 999,
                atk: 2850,
                atkplus: 437,
                def: 2824,
                defplus: 433
            },
        skillset: 
            {
                skill: "10s CT - 1600% Water DMG (MAG). For 5s, reduce Enemies' DMG by 10%.",
                skillbreak: 500,
                arts: "14000% Water DMG (MAG). Gain 1 stack of Devotion (Up to 5). For 10s, reduce Enemies' MAG RES by 30%.",
                artsbreak: 1100,
                truearts: "30000% Water DMG (MAG). For 10s, Allies ignore 100% of Enemies' DEF, and increase Water Allies' DMG by 75%.",
                trueartsbreak: 1800
            },
        passive: 
            {
                ability1: "Increase Poison RES by 100%.",
                ability2: "Increase Curse RES by 50%.",
                ability3: "Devotion: For each stack of Devotion, increase Allies' ATK by 15% and reduce own maximum HP by 15%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 1,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat4amt: 2,
                    hover4: "Radachne",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Vicious - Missing Lore
        id: 102266311,
        name: "Vicious",
        attribute: "Earth",
        type: "Machine",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102265311.png",
                detailawk: "/db/Units/Detail/unit_detail_102266311.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102265311.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102266311.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 5990,
                hpplus: 908,
                atk: 1890,
                atkplus: 293,
                def: 2135,
                defplus: 330
            },
        skillset: 
            {
                skill: "8s CT - 1700% Earth DMG (PHY).",
                skillbreak: 2000,
                arts: "9000% Earth DMG (PHY). For 12s, increase Earth Allies' DMG by 20%.",
                artsbreak: 2500,
                truearts: "14500% Earth DMG (PHY). For 12s, prevent Arts from increasing beyond 0, and increase Skill CT REC by 400% and Break PWR by 30% + For 12s, change own Skill, cycling between MISSILE MODE, BLADE MODE and LASER MODE with each activation of own Skill. Skill reverts back to normal after 12s.MISSILE MODE - 2040% Earth DMG (PHY). 2000 BREAK. BLADE MODE - 1700% Earth DMG (PHY). 40% chance to inflict Paralysis. 2000 BREAK. LASER MODE - 1700% Earth DMG (PHY). 3000 BREAK.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase Freeze RES by 40%.",
                ability2: "Increase DMG to God Enemies by 20%, increase PHY RES by 15%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragVicious.png",
                    mat3amt: 20,
                    hover3: "Vicious",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Tallis - Missing Lore, TW Image
        id: 102276112,
        name: "Tallis",
        attribute: "Fire",
        type: "God",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102275112.png",
                detailawk: "/db/Units/Detail/unit_detail_102276112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102275112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102276112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 5730,
                hpplus: 869,
                atk: 2278,
                atkplus: 351,
                def: 1950,
                defplus: 302
            },
        skillset: 
            {
                skill: "8s CT - 1650% Fire DMG (PHY). For 6s, reduce Enemies' Break RES by 25%.",
                skillbreak: 1800,
                arts: "14000% Fire DMG (PHY). For 10s, increase own Break PWR by 50% when the Boss' Break Bar is at 70% or less.",
                artsbreak: 3500,
                truearts: "26000% Fire DMG (PHY). For 8s, increase own DMG RES by 50%. For 15s, increase Fire Allies' ATK by 100%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase Burn RES by 100%.",
                ability2: "All attacks have a chance to inflict Burn (except Equipment).",
                ability3: "When this unit takes lethal DMG, revive self with 50% HP. Can only be activated once every 60s."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat3amt: 2,
                    hover3: "Ifrit",
                    mat4: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat4amt: 3,
                    hover4: "Flogassa",
                    mat5: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat5amt: 1,
                    hover5: "Radachne"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Dragon Twilight",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "50s CT - 7800% Fire DMG (PHY). For 8s, increase Allies' Break PWR by 30%.",
                skillbreak: 1500,
                passive: 
                    {
                        ability1: "When equipped by Tallis, increase DMG by 20% and increase Paralysis, Freeze and Curse RES by 100%. Does not stack with Abilities of the same name.",
                        ability2: "When near-death, increase DMG and DMG RES by 10%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lozze - Missing Lore, TW Image
        id: 102286212,
        name: "Lozze",
        attribute: "Water",
        type: "Beast",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102285212.png",
                detailawk: "/db/Units/Detail/unit_detail_102286212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102285212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102286212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6035,
                hpplus: 915,
                atk: 2420,
                atkplus: 373,
                def: 2055,
                defplus: 318
            },
        skillset: 
            {
                skill: "7s CT - 2000% Water DMG (PHY). Increase Allies' Arts by 4.",
                skillbreak: 1200,
                arts: "17200% Water DMG (PHY). For 20s, increase Allies' Equipment CT REC by 30%.",
                artsbreak: 2300,
                truearts: "30000% Water DMG (PHY). For 20s, increase Allies' Arts by 3/s, increase Allies' Equipment DMG by 60%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "When near-death, increase own Arts by 2/s.",
                ability2: "When near-death, increase own evasion by 10%.",
                ability3: "Increase all Allies' evasion by 15%. Increase own stats by [10% × # of female Allies in the party]."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 2,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat4amt: 3,
                    hover4: "Freydal",
                    mat5: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat5amt: 1,
                    hover5: "Oldeus"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Diamond Chakram",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "40s CT - 6650% Water DMG (PHY). For 8s, increase Allies' Equipment DMG by 25%. If user is Water, increase Equipment DMG by 40% instead.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Lozze, increase DMG and Skill DMG by 20%. Does not stack with Abilities of the same name.",
                        ability2: "When near-death, heal own HP by 30/s."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Jill - Missing Lore, TW Image
        id: 102296312,
        name: "Jill",
        attribute: "Earth",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102295312.png",
                detailawk: "/db/Units/Detail/unit_detail_102296312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102295312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102296312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7180,
                hpplus: 999,
                atk: 2250,
                atkplus: 347,
                def: 2420,
                defplus: 373
            },
        skillset: 
            {
                skill: "8s CT - 2100% Earth DMG (PHY). Increase own Arts by 3. During this Skill, increase BE generation by 50%.",
                skillbreak: 2000,
                arts: "17000% Earth DMG (PHY). For 15s, increase Allies' DMG and evasion by 20%.",
                artsbreak: 4000,
                truearts: "Increase own Arts by 100 + For 20s, summon a Double that mimics all of own attacks (including Arts and Skill, not including Equipment).",
                trueartsbreak: 0
            },
        passive: 
            {
                ability1: "Heal own HP by 16/s.",
                ability2: "When near-death, increase own Skill CT REC by 70%.",
                ability3: "While a Double is present, increase evasion by 10% and DMG against Enemies in Break by 50%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat3amt: 2,
                    hover3: "Tonetaurus",
                    mat4: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat4amt: 1,
                    hover4: "Oldeus",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Viperra",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "50s CT - 8500% Earth DMG (PHY). For 8s, reduce Enemies' Earth RES by 50%.",
                skillbreak: 1700,
                passive: 
                    {
                        ability1: "When equipped by Jill, increase DMG by 20%. At the start of a Quest, increase Arts by 2/s for 90s. Does not stack with Abilities of the same name.",
                        ability2: "At the start of a Quest, increase Allies' DMG by 10% for 30s. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Alvina - Missing Lore, TW Image
        id: 102306212,
        name: "Alvina",
        attribute: "Water",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102305212.png",
                detailawk: "/db/Units/Detail/unit_detail_102306212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102305212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102306212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6550,
                hpplus: 992,
                atk: 2260,
                atkplus: 349,
                def: 2330,
                defplus: 359
            },
        skillset: 
            {
                skill: "9s CT - 2000% Water DMG (PHY). Chance to inflict Freeze.",
                skillbreak: 1000,
                arts: "17000% Water DMG (MAG). High chance to inflict Ultimate Freeze.",
                artsbreak: 2200,
                truearts: "28000% Dark DMG (MAG). High chance to inflict Disease. For 20s, increase own Arts by 5/s.",
                trueartsbreak: 5000
            },
        passive: 
            {
                ability1: "Increase DMG against Frozen Enemies by 100%.",
                ability2: "Increase evasion by 10%.",
                ability3: "Increase DMG against Diseased Enemies by 100%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat3amt: 1,
                    hover3: "Mavroskia",
                    mat4: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat4amt: 1,
                    hover4: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Draco Hastia",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "50s CT - 8200% Dark DMG (MAG). For 12s, reduce Enemies' Freeze RES by 50%. If user is Water, increase DMG by 20% for 12s.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Alvina, increase DMG by 20% and increase Paralysis, Seal and Curse RES by 100%. Does not stack with Abilities of the same name.",
                        ability2: "Increase all Water and Dark Allies' Equipment DMG by 10%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Palamicia - Missing Lore, TW Image
        id: 102316212,
        name: "Palamicia",
        attribute: "Water",
        type: "God",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102315212.png",
                detailawk: "/db/Units/Detail/unit_detail_102316212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102315212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102316212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7150,
                hpplus: 999,
                atk: 2080,
                atkplus: 322,
                def: 2380,
                defplus: 367
            },
        skillset: 
            {
                skill: "7s CT - 1600% Water DMG (MAG). Heal own HP by 100.",
                skillbreak: 1200,
                arts: "Enter Counterattack Mode for 5s. Counterattack: 15000% Water DMG (PHY). Increase own Arts' Critical Rate by 100%, reduce Enemies' Break Bar by 15%.",
                artsbreak: 2000,
                truearts: "27000% Water DMG (PHY). Increase next Counterattack's DMG by 100% + For 15s, increase Allies' Arts by 3/s and Healing Taken by 50%.",
                trueartsbreak: 5500
            },
        passive: 
            {
                ability1: "Heal own HP by 16/s.",
                ability2: "Increase DMG to Giant Bosses by 30%.",
                ability3: "Increase all Allies' evasion by 10%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 2,
                    hover3: "Palamicia",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Frozen Twin Swords",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "5s CT - 2200% Water DMG (MAG). Heal own HP by 100.",
                skillbreak: 500,
                passive: 
                    {
                        ability1: "When equipped by Palamicia, increase DMG by 20% and Break PWR by 25%. Does not stack with Abilities of the same name.",
                        ability2: "When near-death, increase Arts by 2/s."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ifrit - Missing Lore, TW Image
        id: 102326112,
        name: "Ifrit",
        attribute: "Fire",
        type: "God",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102325112.png",
                detailawk: "/db/Units/Detail/unit_detail_102326112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102325112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102326112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6880,
                hpplus: 999,
                atk: 2650,
                atkplus: 407,
                def: 2000,
                defplus: 310
            },
        skillset: 
            {
                skill: "8s CT - 2000% Fire DMG (PHY). Likely Burns Enemy.",
                skillbreak: 1000,
                arts: "15000% Fire DMG (PHY). Inflicts Burn on Enemies and self. For 10s, reduce Enemies' Fire RES by 30%.",
                artsbreak: 2100,
                truearts: "30000% Fire DMG (PHY). If True Arts is activated while Burned, increase DMG of that True Arts by 160% and cure own Burn.",
                trueartsbreak: 3800
            },
        passive: 
            {
                ability1: "Increase Critical Rate by 100% against Burned Enemies.",
                ability2: "Increase PHY RES by 20%.",
                ability3: "Increase own Arts by 3/s when Burned."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat3amt: 2,
                    hover3: "Ifrit",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Volkans",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "70s CT - 10000% Fire DMG (PHY). Burns Enemies and Allies.",
                skillbreak: 3300,
                passive: 
                    {
                        ability1: "When equipped by Ifrit, increase DMG by 20% and max HP by 50%. Does not stack with Abilities of the same name.",
                        ability2: "Increase Skill CT REC by 35%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Nogia - Missing Lore
        id: 102336411,
        name: "Nogia",
        attribute: "Light",
        type: "Spirit",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102335411.png",
                detailawk: "/db/Units/Detail/unit_detail_102336411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102335411.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102336411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6085,
                hpplus: 922,
                atk: 2140,
                atkplus: 331,
                def: 1990,
                defplus: 308
            },
        skillset: 
            {
                skill: "7s CT - 1600% Light DMG (PHY). Increase own Arts by 3.",
                skillbreak: 1700,
                arts: "Increase all Allies' Arts by 15 + For 10s, heal Allies' HP by 100/s and gain a DMG barrier that negates 2500 DMG to self.",
                artsbreak: 0,
                truearts: "18500% Light DMG (MAG). For 12s, increase Allies' Critical Rate by 50% and Paralysis and Burn RES by 80%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "When near-death, increase Arts by 2/s.",
                ability2: "Increase Dark RES by 40%.",
                ability3: "Increase Allies' MAG RES by 10% and Critical RES by 25%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragNogia.png",
                    mat3amt: 20,
                    hover3: "Nogia",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Daki - Missing Lore, TW Image
        id: 102346412,
        name: "Daki",
        attribute: "Light",
        type: "God",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102345412.png",
                detailawk: "/db/Units/Detail/unit_detail_102346412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102345412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102346412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6350,
                hpplus: 962,
                atk: 2465,
                atkplus: 379,
                def: 2133,
                defplus: 329
            },
        skillset: 
            {
                skill: "6s CT - 2000% Light DMG (MAG). Increase own Arts by 5.",
                skillbreak: 1200,
                arts: "16000% Light DMG (MAG). For 14s, increase Allies' Skill CT REC by 120%, increase Light Allies' Skill DMG by 35%.",
                artsbreak: 2100,
                truearts: "30000% Light DMG (MAG). For 10s, Allies ignore 100% of Enemies' DEF, increase Light and Dark Allies' DMG by 60%.",
                trueartsbreak: 3800
            },
        passive: 
            {
                ability1: "Increase Dark RES by 25%.",
                ability2: "Increase Allies' Status RES (except Faint) by 20%.",
                ability3: "Increase God Allies' stats by 15%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat3amt: 2,
                    hover3: "Radachne",
                    mat4: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat4amt: 1,
                    hover4: "Flogassa",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Atropos",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "50s CT - 7200% Light DMG (MAG). For 16s, increase own Skill CT REC by 30%. If user is Light, increase Skill CT REC by 80% instead.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Daki, increase DMG, evasion and accuracy by 20%. Does not stack with Abilities of the same name.",
                        ability2: "Increase MAG DMG by 30%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Raki - Missing Lore, TW Image
        id: 102356512,
        name: "Raki",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102355512.png",
                detailawk: "/db/Units/Detail/unit_detail_102356512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102355512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102356512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7268,
                hpplus: 999,
                atk: 2255,
                atkplus: 348,
                def: 2387,
                defplus: 368
            },
        skillset: 
            {
                skill: "7s CT - 2200% Dark DMG (MAG). Heal own HP by 5% of DMG dealt by this Skill.",
                skillbreak: 1400,
                arts: "17000% Dark DMG (PHY). For 15s, increase own Arts DMG by 25%.",
                artsbreak: 2100,
                truearts: "34000% Dark DMG (PHY). Increase own Arts by 2 for each hit of own True Arts that hits an enemy + For 10s, reduce Enemies' Light and Dark RES by 20%.",
                trueartsbreak: 4200
            },
        passive: 
            {
                ability1: "Increase Light RES by 25%.",
                ability2: "Increase Allies' accuracy by 20%. Does not stack with Abilities of the same name.",
                ability3: "Increase Demon Allies' stats by 15%. Does not stack with Abilities of the same name."
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
                    mat3amt: 1,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat4amt: 1,
                    hover4: "Ragsherum Phantom",
                    mat5: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat5amt: 1,
                    hover5: "Mavroskia"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Deino",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "45s CT - 7800% Dark DMG (PHY). Heal own HP by 8% of DMG dealt by this attack + For 10s, increase Allies' accuracy by 30%.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Raki, increase BE generation by 15%, DMG and Skill CT REC by 20%. Does not stack with Abilities of the same name.",
                        ability2: "When near-death, increase ATK by 40%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zerkalo - Missing Lore
        id: 102366511,
        name: "Zerkalo",
        attribute: "Dark",
        type: "Beast",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102365511.png",
                detailawk: "/db/Units/Detail/unit_detail_102366511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102365511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102366511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6188,
                hpplus: 938,
                atk: 2200,
                atkplus: 340,
                def: 2010,
                defplus: 311
            },
        skillset: 
            {
                skill: "8s CT - 1800% Dark DMG (PHY). For 6s, reduce enemies' ATK by 15%.",
                skillbreak: 2000,
                arts: "8800% Dark DMG (PHY). For 8s, increase own Critical Rate by 50%, reduce Enemies' Break RES by 15%.",
                artsbreak: 2400,
                truearts: "14800% Dark DMG (PHY). For 12s, increase Allies' Break PWR by 20%, increase own Critical Rate by 80%.",
                trueartsbreak: 3800
            },
        passive: 
            {
                ability1: "Increase DMG to Demon Enemies by 60%.",
                ability2: "Increase Allies' Break PWR by 10%. Does not stack with Abilities of the same name.",
                ability3: "Increase own Arts by 1/s."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragZerkalo.png",
                    mat3amt: 20,
                    hover3: "Zerkalo",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Valentia - Missing Lore
        id: 102386411,
        name: "Valentia",
        attribute: "Light",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102385411.png",
                detailawk: "/db/Units/Detail/unit_detail_102386411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102385411.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102386411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6530,
                hpplus: 989,
                atk: 2010,
                atkplus: 311,
                def: 2322,
                defplus: 358
            },
        skillset: 
            {
                skill: "8s CT - Heal Allies' HP by 100 and increase own Arts by 5.",
                skillbreak: 0,
                arts: "For 15s, heal Allies' HP by 100/s and Allies gain a DMG barrier that negates 3000 DMG.",
                artsbreak: 0,
                truearts: "Recover Allies' HP by 2000. Heal the Ally with the lowest current HP by 15% of their max HP + For 12s, increase Allies' Skill CT REC by 80%.",
                trueartsbreak: 0
            },
        passive: 
            {
                ability1: "Increase Disease RES by 30%.",
                ability2: "Increase Allies' max HP by 10%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat3amt: 2,
                    hover3: "Flogassa",
                    mat4: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat4amt: 3,
                    hover4: "Palamicia",
                    mat5: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat5amt: 4,
                    hover5: "Radachne"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mira (Earth) - Missing Lore, TW Image
        id: 102396312,
        name: "Mira (Earth)",
        attribute: "Earth",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102395312.png",
                detailawk: "/db/Units/Detail/unit_detail_102396312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102395312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102396312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 7280,
                hpplus: 999,
                atk: 2560,
                atkplus: 394,
                def: 2488,
                defplus: 383
            },
        skillset: 
            {
                skill: "7s CT - 2000% Earth DMG (PHY). For 7s, increase Earth Allies' Arts by 1/s.",
                skillbreak: 1800,
                arts: "15500% Earth DMG (PHY). For 10s, increase Earth Allies' DMG by 30% and Critical Rate by 80%.",
                artsbreak: 2400,
                truearts: "32000% Earth DMG (PHY). For 25s, heal Allies' HP by 120/s, Allies gain a DMG barrier that negates 4200 DMG.",
                trueartsbreak: 4800
            },
        passive: 
            {
                ability1: "Increase Earth Allies' DMG by 30%.",
                ability2: "Increase Allies' DMG against Enemies in Break by 50%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat3amt: 3,
                    hover3: "Tonetaurus",
                    mat4: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat4amt: 2,
                    hover4: "Goldola",
                    mat5: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat5amt: 2,
                    hover5: "Flogassa"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "IZANAGI",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "10s CT - 2300% Earth DMG (PHY). For 3s, increase own Arts by 2/s.",
                skillbreak: 300,
                passive: 
                    {
                        ability1: "When equipped by Sakura Mira, increase DMG by 20% and increase Arts by 2/s. Does not stack with Abilities of the same name.",
                        ability2: "Increase Equipment CT REC by 15%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zeorg (Dark) - Missing Lore, TW Image 
        id: 102406512,
        name: "Zeorg (Dark)",
        attribute: "Dark",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102405512.png",
                detailawk: "/db/Units/Detail/unit_detail_102406512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102405512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102406512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6800,
                hpplus: 999,
                atk: 3055,
                atkplus: 468,
                def: 2366,
                defplus: 364
            },
        skillset: 
            {
                skill: "9s CT - 3000% Dark DMG (PHY). For 10s, increase own Paralysis and Freeze RES by 50%.",
                skillbreak: 1200,
                arts: "16000% Dark DMG (PHY). Increase Arts DMG by 100% when attacking Light Enemies.",
                artsbreak: 2500,
                truearts: "31200% Dark DMG (PHY). For 12s, heal own HP by 4% of DMG dealt, increase own Arts by 2 each time this unit is hit, redirect Allies' DMG taken to self and gain a DMG barrier that negates 20000 DMG to self.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase Allies' Dark DMG by 30%. Does not stack with Abilities of the same name.",
                ability2: "When near-death, increase own DMG by 20%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 1,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat4amt: 4,
                    hover4: "Mavroskia",
                    mat5: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat5amt: 1,
                    hover5: "Valzandeth"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Exceed Zechs",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "45s CT - 8800% Dark DMG (MAG). If own HP is 75% or more, increase own Arts by 30. For 8s, increase own Arts DMG by 50%.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Dark Zeorg, increase DMG and max HP by 20%, Paralysis and Freeze RES by 50%. Does not stack with Abilities of the same name.",
                        ability2: "When near-death, heal own HP by 3% of DMG dealt."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Badoul - Missing Lore
        id: 102416111,
        name: "Badoul",
        attribute: "Fire",
        type: "Giant",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102415111.png",
                detailawk: "/db/Units/Detail/unit_detail_102416111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102415111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102416111.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6550,
                hpplus: 992,
                atk: 2015,
                atkplus: 312,
                def: 2280,
                defplus: 352
            },
        skillset: 
            {
                skill: "8s CT - 1600% Fire DMG (PHY). Chance to inflict Faint.",
                skillbreak: 1600,
                arts: "8600% Fire DMG (PHY). For 15s, increase Allies' MAG RES by 50%.",
                artsbreak: 2100,
                truearts: "18500% Fire DMG (MAG). High chance to inflict Burn. For 12s, increase Allies' PHY DMG by 50%. For 8s, reduce own DEF by 30%.",
                trueartsbreak: 3500
            },
        passive: 
            {
                ability1: "Increase DEF by 20% when under a DMG barrier.",
                ability2: "Increase MAG RES by 25%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragBadoul.png",
                    mat3amt: 20,
                    hover3: "Badoul",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Strife - Missing Lore
        id: 102436511,
        name: "Strife",
        attribute: "Dark",
        type: "Spirit",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102436511.png",
                detailawk: "/db/Units/Detail/unit_detail_102436511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102436511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102436511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6012,
                hpplus: 911,
                atk: 2392,
                atkplus: 368,
                def: 2055,
                defplus: 318
            },
        skillset: 
            {
                skill: "8s CT - 1700% Dark DMG (MAG). For 6s, reduce Enemies' DEF by 30%.",
                skillbreak: 1400,
                arts: "9000% Dark DMG (MAG). Heal own HP by 3% of DMG dealt by this Arts, increase Dark Allies' Arts by 15.",
                artsbreak: 2200,
                truearts: "22000% Dark DMG (MAG). For 12s, reduce Enemies' MAG RES by 20%, reduce Enemies' Weak-Element RES by 20%.",
                trueartsbreak: 3600
            },
        passive: 
            {
                ability1: "Increases Allies' Critical RES by 20%.",
                ability2: "Increase MAG RES by 15%.",
                ability3: "Increases DMG to God Enemies by 50%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragStrife.png",
                    mat3amt: 20,
                    hover3: "Strife",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Weaver - Missing Lore
        id: 102446212,
        name: "Weaver",
        attribute: "Water",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102445212.png",
                detailawk: "/db/Units/Detail/unit_detail_102446212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102445212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102446212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7156,
                hpplus: 999,
                atk: 2335,
                atkplus: 360,
                def: 2496,
                defplus: 384
            },
        skillset: 
            {
                skill: "7s CT - 1800% Water DMG (PHY). Recover own HP by 120 and increase own Arts by 8.",
                skillbreak: 1300,
                arts: "13500% Water DMG (PHY). Increase Allies' Arts by 20 + For 20s, Allies gain a DMG barrier that negates 2000 DMG.",
                artsbreak: 2000,
                truearts: "31000% Water DMG (PHY). For 13s, reduce Enemies' Water RES by 30%, increase Allies' Critical DMG by 50%.",
                trueartsbreak: 5500
            },
        passive: 
            {
                ability1: "Increase Water Allies' BE generation by 15%.",
                ability2: "Increase Critical Rate by 20%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 2,
                    hover3: "Geo Zagnus",
                    mat4: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat4amt: 2,
                    hover4: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Wargul - Missing Lore
        id: 102456512,
        name: "Wargul",
        attribute: "Dark",
        type: "Dragon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102455512.png",
                detailawk: "/db/Units/Detail/unit_detail_102456512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102455512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102456512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7269,
                hpplus: 999,
                atk: 2768,
                atkplus: 427,
                def: 2447,
                defplus: 377
            },
        skillset: 
            {
                skill: "8s CT - 2000% Dark DMG (MAG). Permanently increase own ATK and Break PWR by 6% (max 60% increase).",
                skillbreak: 1500,
                arts: "15500% Dark DMG (MAG). High chance to inflict Blind. For 12s, reduce Enemies' Break RES by 30%.",
                artsbreak: 3500,
                truearts: "31200% Dark DMG (MAG). For 12s, increase Allies' DMG to Enemies in BREAK by 150%.",
                trueartsbreak: 5200
            },
        passive: 
            {
                ability1: "Increase DMG to Enemies in BREAK by 60%.",
                ability2: "Increase Allies' Break PWR by 15%. Does not stack with Abilities of the same name.",
                ability3: "When near-death, increase own Arts by 3/s."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 2,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat4amt: 3,
                    hover4: "Mavroskia",
                    mat5: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat5amt: 1,
                    hover5: "Oldeus"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Granith - Missing Lore
        id: 102466211,
        name: "Granith",
        attribute: "Water",
        type: "Dragon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102465211.png",
                detailawk: "/db/Units/Detail/unit_detail_102466211.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102465211.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102466211.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6189,
                hpplus: 938,
                atk: 2266,
                atkplus: 349,
                def: 2013,
                defplus: 311
            },
        skillset: 
            {
                skill: "8s CT - 1900% Water DMG (MAG). For 5s, reduce Enemies' Freeze RES by 15%.",
                skillbreak: 1000,
                arts: "9800% Water DMG (MAG). For 8s, increase Allies' DMG by 20% and Water Allies' DMG by 30%.",
                artsbreak: 2200,
                truearts: "25000% Water DMG (MAG). High chance of inflicting Freeze. For 8s, increase DMG against Frozen Enemies by 80%.",
                trueartsbreak: 4500
            },
        passive: 
            {
                ability1: "Increase Critical Rate by 100% against Frozen Enemies."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGranit.png",
                    mat3amt: 20,
                    hover3: "Granith",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Altie - Complete
        id: 102476511,
        name: "Altie",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102475511.png",
                detailawk: "/db/Units/Detail/unit_detail_102476511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102475511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102476511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/phyLB.png"
            },
        stats: 
            {
                hp: 6300,
                hpplus: 950,
                atk: 2268,
                atkplus: 352,
                def: 1950,
                defplus: 302
            },
        skillset: 
            {
                skill: "10s CT - 1800% Dark DMG (MAG). Increase own Arts by 5.",
                skillbreak: 900,
                arts: "13000% Dark DMG (MAG). Increase Break PWR of this Arts by 8% per Death Count (up to 104%).",
                artsbreak: 2000,
                truearts: "20000% Dark DMG (MAG). If own Death Count is 13, increase this True Arts' DMG by 200%. Consume 15% of Allies' (except self) HP, increase Allies' Arts by 20.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "Gain a Death Counter that increases its Count by the total number of Enemies and Allies that have died during the current Quest. Increase own Skill CT REC by 8% per Death Count (up to 104%).",
                ability2: "Increase own Arts by 2/s.",
                ability3: "Increase Curse RES by 100%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 4,
                    hover3: "RagsherumPhantom",
                    mat4: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat4amt: 3,
                    hover4: "Goldola",
                    mat5: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat5amt: 3,
                    hover5: "Radachne"
                }
            },
        lore: 
            {   
                evo5: "A necromancer who destroyed cities and nations early in the Ancient War. They say that she was capable of undending brutality on the orders of a certain beloved Demoness. Her unusual values system meant she was apt to call the spirits of the dead she used her "friends," and looked down on the living as prisoners in the flesh. Her nature was shaped by the legendary Flame Giant, and this is evidenced by the terrible brutality she showed when dispatched to a certain territory.",
                evoawk: "Her eyes sparkled at the resurrected Flame Giant of legend. She would not balk at turning an entire nation into a realm of the dead to earn the praise and favor of her beloved Demoness. All that remained was the elimination of a certain irritating sorceress, companion to the Giant. However, the needed Giant only obeyed the girl's orders. The only choice is to turn her into a "friend." With that understanding, she gladly went among the teeming spirtis."
            }
    },
    { //Berwick (Magic) - Missing Lore, TW Image
        id: 102486112,
        name: "Berwick (Magic)",
        attribute: "Fire",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102485112.png",
                detailawk: "/db/Units/Detail/unit_detail_102486112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102485112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102486112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6856,
                hpplus: 999,
                atk: 2992,
                atkplus: 458,
                def: 2241,
                defplus: 346
            },
        skillset: 
            {
                skill: "8s CT - 2200% Fire DMG (MAG). Chance to inflict Burn.",
                skillbreak: 1000,
                arts: "14400% Fire DMG (MAG). Increase Allies' Arts by 25 + For 10s, increase Fire Allies' Arts by 2/s.",
                artsbreak: 2100,
                truearts: "For 180s, enter Magia Drive. During Magia Drive: 37000% Fire DMG (MAG). For 15s, increase Allies' DMG by 50%, for Fire Allies, increase DMG by 100% instead.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase DMG to Earth Enemies by 25%.",
                ability2: "Increase Water RES by 25%.",
                ability3: "Increase Arts by 200 when entering Magia Drive. During Magia Drive, increase Critical Rate by 100% and increase Arts by 3/s."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat3amt: 1,
                    hover3: "Ifrit",
                    mat4: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat4amt: 2,
                    hover4: "Flogassa",
                    mat5: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat5amt: 1,
                    hover5: "Degilmagna"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Fomalhaut",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "50s CT - 7200% Fire DMG (MAG). For 10s, reduce Enemies' Fire RES by 50%.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Berwick, increase stats and DMG by 30%. Does not stack with Abilities of the same name.",
                        ability2: "Increase DMG to Earth Enemies by 20%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Riviera - Missing Lore, TW Image
        id: 102496312,
        name: "Riviera",
        attribute: "Earth",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102495312.png",
                detailawk: "/db/Units/Detail/unit_detail_102496312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102495312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102496312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6576,
                hpplus: 996,
                atk: 3228,
                atkplus: 494,
                def: 2088,
                defplus: 323
            },
        skillset: 
            {
                skill: "10s CT - 2800% Earth DMG (PHY). Increase own Arts by 15.",
                skillbreak: 1000,
                arts: "19000% Earth DMG (PHY). Permanently increase own Critical Rate by 10% (up to 50%).",
                artsbreak: 2000,
                truearts: "For 60s, enter Magia Drive. During Magia Drive: 42000% Earth DMG (PHY). Increase own Arts by 100.",
                trueartsbreak: 3500
            },
        passive: 
            {
                ability1: "At the start of a Battle, increase own Arts by 100.",
                ability2: "Increase Critical Rate by 50%.",
                ability3: "When Magia Drive is activated, increase own Arts by 100. During Magia Drive, increase Critical DMG by 150% and reduce DMG RES by 30%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat3amt: 2,
                    hover3: "Goldola",
                    mat4: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat4amt: 2,
                    hover4: "Tonetaurus",
                    mat5: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat5amt: 1,
                    hover5: "Oldeus"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Tempest",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "100s CT - 14000% Earth DMG (PHY). If user is Earth, increase own Arts by 50.",
                skillbreak: 800,
                passive: 
                    {
                        ability1: "When equipped by Riviera, increase DMG by 30% and increase Paralysis and Freeze RES by 100%.",
                        ability2: "Increase accuracy by 20%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Thetis - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102506212,
        name: "Thetis",
        attribute: "Water",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102505212.png",
                detailawk: "/db/Units/Detail/unit_detail_102506212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102505212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102506212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7682,
                hpplus: 999,
                atk: 2332,
                atkplus: 359,
                def: 3188,
                defplus: 488
            },
        skillset: 
            {
                skill: "9s CT - 1500% Water DMG (PHY). For 7s, reduces Enemies' Break RES by 15%.",
                skillbreak: 1800,
                arts: "8000% Water DMG (PHY). ATK of this Arts is increased by [DEF x 1.5] + For 15s, increase Allies' Break PWR by 30%, redirect Allies' DMG taken to self and gain a DMG barrier that negates 10000 DMG to self.",
                artsbreak: 3000,
                truearts: "For 120s, enter Magia Drive. During Magia Drive: 30000% Water DMG (PHY). Cure own Poison and Burn + For 30s, redirect Allies' DMG taken to self and gain a DMG barrier that negates 25000 DMG to self.",
                trueartsbreak: 5800
            },
        passive: 
            {
                ability1: "When an Ally dies (except self), revive that Ally with 50% HP. Ability can only be activated once per Quest.",
                ability2: "Increase Critical RES by 60%.",
                ability3: "Increase Arts by 100 when entering Magia Drive. During Magia Drive, increase DMG RES by 25% and increase Arts by 1 every time this unit is hit."
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
                    mat3amt: 1,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 2,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat5amt: 1,
                    hover5: "Palamicia"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Adamas Gear",
                slot: "/db/Mines/thumbnail/defLB.png",
                detail: "",
                skill: "30s CT - For 15s, increase Target's DMG RES by 35%.",
                skillbreak: 0,
                passive: 
                    {
                        ability1: "When equipped by Thetis, increase DMG by 30%, max HP by 2000 and increase Paralysis RES, Freeze RES and Seal RES by 100%. Does not stack with Abilities of the same name.",
                        ability2: "Increase DEF by 20% when under a DMG barrier."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Vox - Missing Lore, TW Image
        id: 102516212,
        name: "Vox",
        attribute: "Water",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102515212.png",
                detailawk: "/db/Units/Detail/unit_detail_102516212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102515212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102516212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6891,
                hpplus: 999,
                atk: 2895,
                atkplus: 444,
                def: 2137,
                defplus: 330
            },
        skillset: 
            {
                skill: "10s CT - 2400% Water DMG (PHY). Increase own Arts by 20. During Magia Drive: 2400% Water DMG (PHY). Increase own Arts by 40.",
                skillbreak: 1000,
                arts: "18000% Water DMG (PHY). For 12s, increase Allies' stats by 30%.",
                artsbreak: 2800,
                truearts: "For 180s, enter Magia Drive. During Magia Drive: 45000% Water DMG (PHY). For 15s, increase Allies' Critical Rate by 100%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase Critical DMG by 80%.",
                ability2: "Increase all Allies' accuracy by 30%. Does not stack with Abilities of the same name.",
                ability3: "During Magia Drive, increase Skill CT REC, ATK, Paralysis RES and Freeze RES by 100%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 2,
                    hover3: "Geo Zagnus",
                    mat4: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat4amt: 3,
                    hover4: "Freydal",
                    mat5: "/db/Icons/dungeon_drops/fragWilkes.png",
                    mat5amt: 2,
                    hover5: "Wilkes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "ZANKETSU",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "35s CT - 12000% Water DMG (PHY). For 10s, increase own Skill CT REC by 50%.",
                skillbreak: 2000,
                passive: 
                    {
                        ability1: "When equipped by Vox, increase stats and Critical Rate by 20%, and evasion by 10%. Does not stack with Abilities of the same name.", 
                        ability2: "When equipped by Sword Berwick, increase DMG by 30%. At the start of a Battle, increase own Arts by 30. Does not stack with Abilities of the same name.",
                        ability3: "Increase BE generation by 15%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Duke - Missing Lore, TW image
        id: 102526512,
        name: "Duke",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102525512.png",
                detailawk: "/db/Units/Detail/unit_detail_102526512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102525512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102526512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7077,
                hpplus: 999,
                atk: 2538,
                atkplus: 390,
                def: 2613,
                defplus: 401
            },
        skillset: 
            {
                skill: "12s CT - 2200% Dark DMG (PHY). During Magia Drive: 2200% Dark DMG (PHY). For 8s, reduce Enemies' Break RES by 25% + Increase own Arts by 20.",
                skillbreak: 2400, 3400,
                arts: "18000% Dark DMG (PHY). For 10s, reduce Enemies' DMG RES by 30%, reduce DMG RES of Enemies in Break by 30%.",
                artsbreak: 3500,
                truearts: "For 120s, enter Magia Drive. During Magia Drive: 38000% Dark DMG (PHY). Increase own True Arts' Break PWR by 5% of own True Arts' DMG dealt.",
                trueartsbreak: 9900
            },
        passive: 
            {
                ability1: "Giant Boss' Break Bar is halved at the beginning of battle. Raid Bosses' Break Bars take 20000 Break DMG instead. Ability can only be activated once per Quest.",
                ability2: "Increase Arts by 100 when entering Magia Drive. When a Boss is Broken during Magia Drive, increase own Arts by 100."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 2,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat4amt: 1,
                    hover4: "Radachne",
                    mat5: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat5amt: 1,
                    hover5: "Freydal"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Vanish",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "50s CT - 9200% Dark DMG (PHY). For 10s, increase Allies' Skill CT REC by 30%.",
                skillbreak: 5500,
                passive: 
                    {
                        ability1: "When equipped by Duke, increase DMG by 30% and Skill CT REC by 50%.",
                        ability2: "Increase DMG to Enemies in Break by 20%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Melia (Water) - Missing Lore, TW Image
        id: 102536212,
        name: "Melia (Water)",
        attribute: "Water",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102535212.png",
                detailawk: "/db/Units/Detail/unit_detail_102536212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102535212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102536212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6541,
                hpplus: 991,
                atk: 2658,
                atkplus: 408,
                def: 2446,
                defplus: 376
            },
        skillset: 
            {
                skill: "7s CT - 1900% Water DMG (PHY). Chance to inflict Freeze.",
                skillbreak: 800,
                arts: "15000% Water DMG (PHY). During Arts, stop Enemy actions + For 10s, reduce Enemies' Water RES and Freeze RES by 30%.",
                artsbreak: 2100,
                truearts: "31200% Water DMG (PHY). For 11s, increase Allies' Critical Rate by 100% and increase Water Allies' DMG by 60%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase DMG to Fire Enemies by 35%.",
                ability2: "Increase Burn RES by 70%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 2,
                    hover3: "Geo Zagnus",
                    mat4: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat4amt: 1,
                    hover4: "Oldeus",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 2,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Maelstrom",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "45s CT - 7800% Water DMG (PHY). If user is Water, increase all Allies' Status RES (Except Faint) by 100% for 12s.",
                skillbreak: 1500,
                passive: 
                    {
                        ability1: "When equipped by Aqua Melia, increase DMG and Skill CT REC by 30%. Does not stack with Abilities of the same name.",
                        ability2: "Increase evasion by 10%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Celia (Dark) - Missing Lore, TW Image
        id: 102546512,
        name: "Celia (Dark)",
        attribute: "Dark",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102545512.png",
                detailawk: "/db/Units/Detail/unit_detail_102546512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102545512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102546512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 5,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7090,
                hpplus: 999,
                atk: 2871,
                atkplus: 441,
                def: 2205,
                defplus: 340
            },
        skillset: 
            {
                skill: "8s CT - 2000% Dark DMG (PHY). Reduce Enemies' Arts by 5 + Increase own Arts by 5 for each Enemy hit.",
                skillbreak: 300,
                arts: "18000% Dark DMG (MAG). For 15s, increase Allies' Arts DMG by 50%.",
                artsbreak: 1400,
                truearts: "43000% Dark DMG (PHY). For 10s, increase Allies' Arts by 3/s. When Ancient Blood Count is 5: 43000% Dark DMG (PHY). For 20s, increase Allies' Arts by 6/s.",
                trueartsbreak: 2500
            },
        passive: 
            {
                ability1: "Gain an Ancient Blood Counter that gains Count whenever own Arts is activated + Increase ATK by 20% for each Blood of the Ancients Count (max. 100% ATK increase)) + When Blood of the Ancients Counter is 5, increase DMG and Critical Rate by 100%.",
                ability2: "Increase Critical DMG by 30%.",
                ability3: "Increase DMG to Enemies in Break by 30%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 2,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat4amt: 2,
                    hover4: "Flogassa",
                    mat5: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat5amt: 1,
                    hover5: "Radachne"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Creation",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "40s CT - 8000% Dark DMG (PHY). For 8s, increase own MAG DMG by 30%, Arts by 3/s.",
                skillbreak: 2000,
                passive: 
                    {
                        ability1: "When equipped by Dark Celia, increase stats by 30%, Status RES (except Faint) by 50%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Vitz - Missing Lore
        id: 102556211,
        name: "Vitz",
        attribute: "Water",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102555211.png",
                detailawk: "/db/Units/Detail/unit_detail_102556211.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102555211.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102556211.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6466,
                hpplus: 979,
                atk: 2443,
                atkplus: 376,
                def: 2257,
                defplus: 348
            },
        skillset: 
            {
                skill: "8s CT - 1300% Water DMG (MAG). For 4s, increase Allies' Fire RES by 10%.",
                skillbreak: 600,
                arts: "14000% Water DMG (MAG). High chance to inflict Freeze. If Enemy was Frozen by this Arts, for 10s, reduce their MAG RES by 35%.",
                artsbreak: 1500,
                truearts: "33000% Water DMG (MAG). For 10s, increase Allies' Arts by 2/s, increase DMG to Fire Enemies by 50%.",
                trueartsbreak: 2700
            },
        passive: 
            {
                ability1: "When near-death, increase Arts by 1/s.",
                ability2: "Increase DMG to Enemies with 30% HP or less by 20%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 3,
                    hover3: "Geo Zagnus",
                    mat4: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat4amt: 2,
                    hover4: "Tonetaurus",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 3,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Maquiness - Missing Lore
        id: 102566312,
        name: "Maquiness",
        attribute: "Earth",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102565312.png",
                detailawk: "/db/Units/Detail/unit_detail_102566312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102565312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102566312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6873,
                hpplus: 999,
                atk: 1957,
                atkplus: 303,
                def: 2675,
                defplus: 411
            },
        skillset: 
            {
                skill: "8s CT - Increase own Arts by 10.",
                skillbreak: 0,
                arts: "For 15s, increase Allies' Equipment CT REC by 25% and Arts by 2/s.",
                artsbreak: 0,
                truearts: "Heal the Ally with the lowest current HP by 100% of their max HP + For 15s, increase Allies' Water RES by 25%, heal Allies' HP by 350/s.",
                trueartsbreak: 0
            },
        passive: 
            {
                ability1: "Increase Equipment CT REC by 10%.",
                ability2: "Increase Paralysis RES by 100%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat3amt: 1,
                    hover3: "Tonetaurus",
                    mat4: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat4amt: 1,
                    hover4: "Goldola",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Eternia - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102576412,
        name: "Eternia",
        attribute: "Light",
        type: "God",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102575412.png",
                detailawk: "/db/Units/Detail/unit_detail_102576412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102575412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102576412.png"
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
        stats: 
            {
                hp: 7566,
                hpplus: 999,
                atk: 2676,
                atkplus: 411,
                def: 2342,
                defplus: 361
            },
        skillset: 
            {
                skill: "6s CT - 1700% Light DMG (PHY). For 4s, reduce Enemies' Paralysis RES by 15%.",
                skillbreak: 700,
                arts: "18000% Light DMG (PHY). For 12s, increase accuracy by 50%.",
                artsbreak: 2000,
                truearts: "32000% Light DMG (PHY). High chance to inflict Paralysis. For 15s, increase Allies' PHY DMG by 50%, increase Light Allies' ATK by 20%.",
                trueartsbreak: 3600
            },
        passive: 
            {
                ability1: "Whenever this unit takes damage more than 10% of its HP, increase Arts by 10.",
                ability2: "Increase DMG to Giant Bosses by 20%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat3amt: 2,
                    hover3: "Radachne",
                    mat4: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat4amt: 1,
                    hover4: "Palamicia",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Ebony Radiance & Ivory Tempest",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "40s CT - 9000% Light DMG (PHY). For 12s, reduce Enemies' Light RES by 35%.",
                skillbreak: 1500,
                passive: 
                    {
                        ability1: "When equipped by Eternia, increase max HP by 30% and DMG to Giant Bosses by 35%. Does not stack with Abilities of the same name.",
                        ability2: "Increase Skill CT REC by 25%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kurt - Missing Lore
        id: 102586112,
        name: "Kurt",
        attribute: "Fire",
        type: "Beast",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102585112.png",
                detailawk: "/db/Units/Detail/unit_detail_102586112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102585112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102586112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6544,
                hpplus: 991,
                atk: 2587,
                atkplus: 398,
                def: 2195,
                defplus: 339
            },
        skillset: 
            {
                skill: "8s CT - 1900% Fire DMG (PHY).",
                skillbreak: 1500,
                arts: "15000% Fire DMG (PHY). For 15s, increase Allies' accuracy by 25%, Allies ignore 50% of Enemy DEF.",
                artsbreak: 2800,
                truearts: "32000% Fire DMG (PHY). During own True Arts, increase own accuracy by 100%. If own HP is over 90%, increase DMG of that True Arts by 75% + For 20s, increase own Arts by 5/s.",
                trueartsbreak: 4500
            },
        passive: 
            {
                ability1: "Increase accuracy by 30%.",
                ability2: "Ignore 30% of Enemies' DEF."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat3amt: 2,
                    hover3: "Ifrit",
                    mat4: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat4amt: 2,
                    hover4: "Flogassa",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Aesis - Missing Lore
        id: 102596312,
        name: "Aesis",
        attribute: "Earth",
        type: "Dragon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102595312.png",
                detailawk: "/db/Units/Detail/unit_detail_102596312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102595312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102596312.png"
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
        stats: 
            {
                hp: 6877,
                hpplus: 999,
                atk: 2881,
                atkplus: 442,
                def: 2500,
                defplus: 330
            },
        skillset: 
            {
                skill: "16s CT - 4000% Earth DMG (PHY). Increase own Arts by 10.",
                skillbreak: 600,
                arts: "13300% Earth DMG (PHY). Chance to inflict Disease. For 10s, reduce Enemies' PHY RES by 30%.",
                artsbreak: 1100,
                truearts: "30000% Earth DMG (PHY). High chance to inflict Poison. For 15s, increase Allies' Earth DMG by 50%.",
                trueartsbreak: 2000
            },
        passive: 
            {
                ability1: "Increase Critical DMG by 40%.",
                ability2: "Increase Critical Rate by 100% against Poisoned Enemies."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat4amt: 3,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat5amt: 2,
                    hover5: "Mavroskia"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Luda - Missing Lore
        id: 102606312,
        name: "Luda",
        attribute: "Earth",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102605312.png",
                detailawk: "/db/Units/Detail/unit_detail_102606312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102605312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102606312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6221,
                hpplus: 943,
                atk: 2415,
                atkplus: 372,
                def: 2091,
                defplus: 323
            },
        skillset: 
            {
                skill: "10s CT - 1600% Earth DMG (PHY). Permanently increase own ATK by 10% (up to 100%).",
                skillbreak: 1400,
                arts: "12000% Earth DMG (PHY). Increase own Arts by 100 against Enemies in Break.",
                artsbreak: 2200,
                truearts: "32000% Earth DMG (PHY). Increase Water and Earth Allies' Arts by 15 + For 12s, increase Water and Earth Allies' ATK and DEF by 50%.",
                trueartsbreak: 3900
            },
        passive: 
            {
                ability1: "Increase DMG to Giant Bosses by 30%.",
                ability2: "Increase DMG to Enemies in Break by 50%."
            }, 
        evolution: 
            {
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
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lygor - Missing Lore
        id: 102616512,
        name: "Lygor",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102615512.png",
                detailawk: "/db/Units/Detail/unit_detail_102616512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102615512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102616512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6232,
                hpplus: 944,
                atk: 2911,
                atkplus: 446,
                def: 2208,
                defplus: 341
            },
        skillset: 
            {
                skill: "10s CT - 2200% Dark DMG (MAG). For 12s, reduce Enemies' DEF by 10%.",
                skillbreak: 1300,
                arts: "15000% Dark DMG (MAG). For 15s, reduce Enemies' ATK by 50%, increase Allies' ATK by 50%.",
                artsbreak: 2300,
                truearts: "30000% Dark DMG (MAG). For 15s, reduce Enemies' Dark RES by 30% + For 10s, increase Dark Allies' Arts by 4/s.",
                trueartsbreak: 4100
            },
        passive: 
            {
                ability1: "Increase Paralysis RES by 70%.",
                ability2: "Increase Arts by 2/s."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 1,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat4amt: 2,
                    hover4: "Mavroskia",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Tia - Missing Lore, TW Image
        id: 102626212,
        name: "Tia",
        attribute: "Water",
        type: "Spirit",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102625212.png",
                detailawk: "/db/Units/Detail/unit_detail_102626212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102625212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102626212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7255,
                hpplus: 999,
                atk: 2561,
                atkplus: 394,
                def: 2297,
                defplus: 354
            },
        skillset: 
            {
                skill: "10s CT - Increase own Arts by 20 + For 6s, increase Allies' MAG RES by 20%.",
                skillbreak: 0,
                arts: "15000% Water DMG (MAG). For 10s, reduce Enemies' MAG RES by 40%.",
                artsbreak: 1700,
                truearts: "31000% Water DMG (MAG). High chance to inflict Freeze. If Enemy was Frozen by own True Arts or was already Frozen when own True Arts was activated, increase own Arts by 200 (can occur up to 3 times consecutively).",
                trueartsbreak: 3200
            },
        passive: 
            {
                ability1: "Increase Critical Rate by 20%.",
                ability2: "Increase Fire RES by 20%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 1,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat4amt: 2,
                    hover4: "Freydal",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Feronica",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "60s CT - 7500% Water DMG (MAG). For 10s, increase own MAG DMG by 30% and reduce Enemies' Freeze RES by 30%.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Tia, increase DMG by 20% and DMG to Fire Enemies by 20%. Does not stack with Abilities of the same name.",
                        ability2: "Increase Fire RES by 15%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Shasha - Missing Lore
        id: "?",
        name: "Shasha",
        attribute: "Light",
        type: "Demon",
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
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6012,
                hpplus: 911,
                atk: 2155,
                atkplus: 333,
                def: 2440,
                defplus: 376
            },
        skillset: 
            {
                skill: "8s CT - For 6s, heal Allies' HP by 50/s and increase Allies' Arts by 1/s.",
                skillbreak: 0,
                arts: "Cure Allies' Poison and Burn + For 12s, increase Allies' DMG and BE generation by 80%.",
                artsbreak: 0,
                truearts: "30000% Light DMG (MAG). For 15s, reduce Allies and Enemies' Status RES by 70%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase MAG RES by 15%.",
                ability2: "Increase Dark RES by 20%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragWilkes.png",
                    mat3amt: 2,
                    hover3: "Wilkes",
                    mat4: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat4amt: 3,
                    hover4: "Radachne",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kush - Missing Lore, TW Image
        id: 102646412,
        name: "Kush",
        attribute: "Light",
        type: "God",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102645412.png",
                detailawk: "/db/Units/Detail/unit_detail_102646412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102645412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102646412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7155,
                hpplus: 999,
                atk: 2055,
                atkplus: 318,
                def: 2473,
                defplus: 380
            },
        skillset: 
            {
                skill: "9s CT - 1800% Light DMG (MAG). Increase own Arts by 7.",
                skillbreak: 1100,
                arts: "17000% Light DMG (MAG). For 15s, increase Allies' DMG by 50%.",
                artsbreak: 2300,
                truearts: "35000% Light DMG (MAG). The higher the Boss' Arts, the more DMG own True Arts deals (up to 140%). Increase Light Allies' Arts by 20.",
                trueartsbreak: 5000
            },
        passive: 
            {
                ability1: "Ignore 30% of Enemies' DEF.",
                ability2: "Increase Allies' DMG to Enemies in Break by 30%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragWilkes.png",
                    mat3amt: 1,
                    hover3: "Wilkes",
                    mat4: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat4amt: 2,
                    hover4: "Radachne",
                    mat5: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat5amt: 1,
                    hover5: "Mavroskia"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Innocent Noah",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "55s CT - 8800% Light DMG (MAG). For 10s, increase Allies' ATK and DEF by 50%.",
                skillbreak: 1500,
                passive: 
                    {
                        ability1: "When equipped by Kush, increase ATK and DMG by 25%. Does not stack with Abilities of the same name.",
                        ability2: "Increase ATK by 15%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rebol - Missing Lore, TW Image
        id: 102656512,
        name: "Rebol",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102655512.png",
                detailawk: "/db/Units/Detail/unit_detail_102656512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102655512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102656512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6975,
                hpplus: 999,
                atk: 2641,
                atkplus: 406,
                def: 2382,
                defplus: 367
            },
        skillset: 
            {
                skill: "10s CT - 3200% Dark DMG (PHY).",
                skillbreak: 1000,
                arts: "15000% Dark DMG (PHY). Increase own Arts by 10 each time own Arts crits.",
                artsbreak: 1800,
                truearts: "36000% Dark DMG (PHY). For 12s, reduce Enemies' PHY RES by 50%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase Critical Rate by 10%.",
                ability2: "Increase own Arts by 1/s."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 1,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat4amt: 3,
                    hover4: "Valzandeth",
                    mat5: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat5amt: 2,
                    hover5: "Degilmagna"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Gran Killer",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "50s CT - 7500% Dark DMG (PHY). For 10s, increase own Critical Rate by 50%.",
                skillbreak: 900,
                passive: 
                    {
                        ability1: "When equipped by Rebol, increase Critical DMG by 30% and increase own Arts by 1/s. Does not stack with Abilities of the same name.",
                        ability2: "Increase Skill CT REC by 20%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Berwick (Physical) - Missing Lore, TW Image
        id: 102666112,
        name: "Berwick (Physical)",
        attribute: "Fire",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102665112.png",
                detailawk: "/db/Units/Detail/unit_detail_102666112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102665112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102666112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7016,
                hpplus: 999,
                atk: 2915,
                atkplus: 447,
                def: 2188,
                defplus: 338
            },
        skillset: 
            {
                skill: "8s CT - 1600% Fire DMG (PHY). Increase own Arts by 20. During Magia Drive: 1600% Fire DMG (PHY). Increase own Arts by 40.",
                skillbreak: 700,
                arts: "12000% Fire DMG (PHY). For 10s, increase Allies' Arts by 3/s.",
                artsbreak: 1800,
                truearts: "For 180s, enter Magia Drive. During Magia Drive: 40000% Fire DMG (PHY). For 10s, increase Allies' max HP by 20%, PHY DMG by 100%.",
                trueartsbreak: 3500
            },
        passive: 
            {
                ability1: "When near-death, increase Skill CT REC by 50%.",
                ability2: "Increase Water RES by 25%.",
                ability3: "During Magia Drive, increase Skill CT REC and Skill DMG by 100%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat3amt: 1,
                    hover3: "Ifrit",
                    mat4: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat4amt: 2,
                    hover4: "Flogassa",
                    mat5: "/db/Icons/dungeon_drops/fragWilkes.png",
                    mat5amt: 2,
                    hover5: "Wilkes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "ZANKETSU",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "35s CT - 12000% Water DMG (PHY). For 10s, increase own Skill CT REC by 50%.",
                skillbreak: 2000,
                passive: 
                    {
                        ability1: "When equipped by Vox, increase stats and Critical Rate by 20%, and evasion by 10%. Does not stack with Abilities of the same name.",
                        ability2: "When equipped by Sword Berwick, increase DMG by 30%. At the start of a Battle, increase own Arts by 30. Does not stack with Abilities of the same name.",
                        ability3: "Increase BE generation by 15%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rosetta (Water) - Missing Lore, TW Image
        id: 102676212,
        name: "Rosetta (Water)",
        attribute: "Water",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102675212.png",
                detailawk: "/db/Units/Detail/unit_detail_102676212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102675212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102676212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7453,
                hpplus: 999,
                atk: 2388,
                atkplus: 368,
                def: 2311,
                defplus: 356
            },
        skillset: 
            {
                skill: "10s CT - 1400% Water DMG (MAG). For 5s, reduce Enemies' evasion by 10%.",
                skillbreak: 700,
                arts: "8000% Water DMG (MAG). Chance to inflict Paralysis. During Magia Drive: 8000% Water DMG (MAG). Chance to inflict Paralysis. Increase the duration of own Magia Drive by 30s.",
                artsbreak: 1700,
                truearts: "For 50s, enter Magia Drive. During Magia Drive: 30000% Water DMG (MAG). For 15s, reduce Enemies' Water and MAG RES by 35%. For 25s, increase Allies' (except self) Arts by 4/s.",
                trueartsbreak: 2800
            },
        passive: 
            {
                ability1: "During Magia Drive, increase MAG DMG by 20% and increase Arts by 10/s.",
                ability2: "Increase accuracy by 10%.",
                ability3: "Increase Seal RES by 30%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 2,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat4amt: 1,
                    hover4: "Elpneumas",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 2,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Asterisk",
                slot: "/db/Mines/thumbnail/suppLB.png",
                detail: "",
                skill: "60s CT - Increase own Arts by 20, Increase Allies' Arts by 20 + For 10s, increase Allies' Arts by 2/s.",
                skillbreak: 0,
                passive: 
                    {
                        ability1: "When equipped by Rosetta, increase Arts by 1/s. Increase Magia Drive duration by 20s. Increase Arts by 50 when entering Magia Drive. Does not stack with Abilities of the same name.",
                        ability2: "Increase MAG DMG by 20%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Leone - Missing Lore, TW Image
        id: 102686412,
        name: "Leone",
        attribute: "Light",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102685412.png",
                detailawk: "/db/Units/Detail/unit_detail_102686412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102685412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102686412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6912,
                hpplus: 999,
                atk: 2723,
                atkplus: 418,
                def: 2669,
                defplus: 410
            },
        skillset: 
            {
                skill: "9s CT - 1300% Light DMG (MAG). Heal own HP by 3% of DMG dealt by this Skill.",
                skillbreak: 700,
                arts: "19700% Light DMG (MAG). Consume 15% of own HP + For 20s, increase own Critical DMG by 40%.",
                artsbreak: 2500,
                truearts: "For 120s, enter Demonic True Eclipse. During Demonic True Eclipse: 37700% Dark DMG (MAG). Consume 25% of own HP.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase MAG RES by 20%.",
                ability2: "During Demonic True Eclipse, prevent falling below 200 Arts. When this unit takes lethal DMG, end Demonic True Eclipse, set HP to 1 HP and Arts to 0, and gain invulnerability for 1s."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat3amt: 2,
                    hover3: "Mavroskia",
                    mat4: "/db/Icons/dungeon_drops/fragWilkes.png",
                    mat4amt: 2,
                    hover4: "Wilkes",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "EX Gate",
                slot: "/db/Mines/thumbnail/suppLB.png",
                detail: "",
                skill: "70s CT - For 15s, increase Target's Arts by 10/s, increase Allies' Critical Rate by 100%.",
                skillbreak: 0,
                passive: 
                    {
                        ability1: "When equipped by Leone, increase own DMG by 30% and Healing Taken by 10%. When Demonic True Eclipse is activated, heal HP by 100%. Does not stack with Abilities of the same name.",
                        ability2: "Increase MAG DMG by 20%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Belle - Missing Lore, TW Image
        id: 102696312,
        name: "Belle",
        attribute: "Earth",
        type: "Spirit",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102695312.png",
                detailawk: "/db/Units/Detail/unit_detail_102696312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102695312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102696312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6858,
                hpplus: 999,
                atk: 2035,
                atkplus: 315,
                def: 2477,
                defplus: 381
            },
        skillset: 
            {
                skill: "10s CT - Increase own Arts by 20. For 5s, heal Allies' HP by 30/s.",
                skillbreak: 0,
                arts: "For 15s, increase Allies' Paralysis RES by 100% and max HP by 20%, increase Earth Allies' max HP by 20%.",
                artsbreak: 0,
                truearts: "30000% Earth DMG (MAG). For 15s, increase Allies' DMG to Water and Light Enemies by 50%.",
                trueartsbreak: 3700
            },
        passive: 
            {
                ability1: "Increase all Allies' max HP by 10%. Does not stack with Abilities of the same name.",
                ability2: "Increase Light RES by 20%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat3amt: 1,
                    hover3: "Elpneumas",
                    mat4: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat4amt: 1,
                    hover4: "Radachne",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Valtrenis",
                slot: "/db/Mines/thumbnail/suppLB.png",
                detail: "",
                skill: "30s CT - 100% Earth DMG (MAG). For 10s, reduce Enemies' Earth RES by 20% and increase Allies' DMG to Light Enemies by 50%.",
                skillbreak: 800,
                passive: 
                    {
                        ability1: "When equipped by Belle, increase stats by 20% and increase own Arts by 2/s. Does not stack with Abilities of the same name.",
                        ability2: "Increase DMG to Light Enemies by 15%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Honoka - Missing Lore
        id: 102706112,
        name: "Honoka",
        attribute: "Fire",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102705112.png",
                detailawk: "/db/Units/Detail/unit_detail_102706112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102705112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102706112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 7113,
                hpplus: 999,
                atk: 2605,
                atkplus: 400,
                def: 2369,
                defplus: 365
            },
        skillset: 
            {
                skill: "8s CT - 2000% Fire DMG (PHY). For 5s, decrease Enemies' ATK by 10%.",
                skillbreak: 500,
                arts: "18000% Fire Damage (PHY). For 20s, increase Allies' PHY RES by 20%, Fire Allies' Skill CT REC by 100%.",
                artsbreak: 1200,
                truearts: "40000% Fire Damage (PHY). For 20s, increase Fire Allies' stats by 30% and Status RES (except Faint) by 50%.",
                trueartsbreak: 2300
            },
        passive: 
            {
                ability1: "Increase DMG to Earth Enemies by 10%.",
                ability2: "Increase DMG to Enemies with less than 30% HP by 30%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat3amt: 2,
                    hover3: "Flogassa",
                    mat4: "/db/Icons/dungeon_drops/fragWilkes.png",
                    mat4amt: 1,
                    hover4: "Wilkes",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Io - Missing Lore
        id: 102716412,
        name: "Io",
        attribute: "Light",
        type: "Giant",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102715412.png",
                detailawk: "/db/Units/Detail/unit_detail_102716412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102715412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102716412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7159,
                hpplus: 999,
                atk: 2466,
                atkplus: 379,
                def: 2182,
                defplus: 337
            },
        skillset: 
            {
                skill: "6s CT - 2100% Light DMG (PHY).",
                skillbreak: 1000,
                arts: "15800% Light DMG (PHY). Consume 30% of own HP. For 20s, gain a DMG barrier that negates [Amount of HP consumed] DMG, increase Fire and Light Allies' Break PWR by 30%.",
                artsbreak: 2500,
                truearts: "27000% Light DMG (PHY). Increase own Arts by 80, increase this True Arts' DMG based on how low HP is (up to 250%).",
                trueartsbreak: 4600
            },
        passive: 
            {
                ability1: "When near-death, increase own ATK by 50%.",
                ability2: "Increase DMG to Demon Enemies by 50%.",
                ability3: "When near-death, increase own Arts by 2/s."
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
                    mat3amt: 1,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 2,
                    hover4: "Code-XTF",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Miri-nyan - Missing Lore
        id: 102736112,
        name: "Miri-nyan",
        attribute: "Fire",
        type: "Beast",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102735112.png",
                detailawk: "/db/Units/Detail/unit_detail_102736112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102735112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102736112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6701,
                hpplus: 999,
                atk: 2400,
                atkplus: 670,
                def: 2300,
                defplus: 355
            },
        skillset: 
            {
                skill: "9s CT - 1200% Fire DMG (PHY). For 3s, reduce Enemies' DEF by 20%.",
                skillbreak: 600,
                arts: "9000% Fire DMG (PHY). For 12s, increase Allies' Earth RES by 15%, Freeze and Paralysis RES by 100%.",
                artsbreak: 1100,
                truearts: "30000% Fire DMG (PHY). For 8s, reduce Earth Enemies' PHY RES by 50%.",
                trueartsbreak: 2800
            },
        passive: 
            {
                ability1: "Increase DMG to Earth Enemies by 15%.",
                ability2: "All attacks ignore 20% of Enemy DEF."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat3amt: 2,
                    hover3: "Flogassa",
                    mat4: "/db/Icons/dungeon_drops/fragWIlkes.png",
                    mat4amt: 2,
                    hover4: "Wilkes",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Tami-nyan - Missing Lore, TW Image
        id: 102746212,
        name: "Tami-nyan",
        attribute: "Water",
        type: "Beast",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102745212.png",
                detailawk: "/db/Units/Detail/unit_detail_102746212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102745212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102746212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6750,
                hpplus: 999,
                atk: 2950,
                atkplus: 452,
                def: 2800,
                defplus: 430
            },
        skillset: 
            {
                skill: "7s CT - 1800% Water DMG (PHY). For 8s, reduce Enemies' Break RES by 30%.",
                skillbreak: 2000,
                arts: "17000% Water DMG (PHY). For 20s, reduce Enemies' Water and Freeze RES by 20%.",
                artsbreak: 4200,
                truearts: "35000% Water DMG (PHY). High chance to inflict Freeze. For 10s, increase Allies' Break PWR by 50%.",
                trueartsbreak: 8000
            },
        passive: 
            {
                ability1: "When near-death, increase ATK by 10%.",
                ability2: "Increase DMG to Enemies in BREAK by 100%.",
                ability3: "Increase DMG and Break PWR to Frozen Enemies by 100%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 1,
                    hover3: "Geo Zagnus",
                    mat4: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat4amt: 2,
                    hover4: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Azure Offering",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "60s CT - 3000% Water DMG (PHY). For 10s, increase own Break PWR by 70%.",
                skillbreak: 3500,
                passive: 
                    {
                        ability1: "When equipped by Tami-nyan, increase Break PWR by 30% and increase DMG to Enemies in BREAK by 30%.",
                        ability2: "Increase BE generation by 10%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Fen (Dark) - Missing Lore, TW Image
        id: 102756512,
        name: "Fen (Dark)",
        attribute: "Dark",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102755512.png",
                detailawk: "/db/Units/Detail/unit_detail_102756512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102755512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102756512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6260,
                hpplus: 949,
                atk: 2588,
                atkplus: 398,
                def: 2350,
                defplus: 362
            },
        skillset: 
            {
                skill: "10s CT - 2200% Dark DMG (MAG). For 5s, reduce Enemies' Dark RES by 10%.",
                skillbreak: 800,
                arts: "13000% Dark DMG (MAG). Increases DMG of this Arts by magnitude of accuracy buffs on self.",
                artsbreak: 1700,
                truearts: "31000% Dark DMG (MAG). High chance to inflict Blind. Increase Dark Allies' Arts by 20 + For 20s, increase Allies' Arts by 3/s, increase Allies' accuracy by 30%.",
                trueartsbreak: 3300
            },
        passive: 
            {
                ability1: "At the start of a Quest, increase Allies' Arts by 50. Does not stack with Abilities of the same name.",
                ability2: "Increases Critical Rate by 100% against Blinded Enemies."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 2,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 2,
                    hover4: "Code-XTF",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Stratega",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "45s CT - 8800% Dark DMG (MAG). For 10s, reduce Enemies' DMG RES by 30%.",
                skillbreak: 1100,
                passive: 
                    {
                        ability1: "When equipped by Dark Fen, increase Critical DMG by 50%.",
                        ability2: "Increase DMG to Giant Bosses by 20%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kane (Dark) - Missing Lore, TW Image
        id: 102766512,
        name: "Kane (Dark)",
        attribute: "Dark",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102765512.png",
                detailawk: "/db/Units/Detail/unit_detail_102766512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102765512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102766512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6800,
                hpplus: 999,
                atk: 2699,
                atkplus: 414,
                def: 2257,
                defplus: 348
            },
        skillset: 
            {
                skill: "10s CT - 2400% Dark DMG (PHY). For 3s, increase own Evasion by 20%.",
                skillbreak: 700,
                arts: "17700% Dark DMG (PHY). Chance to inflict Faint + For 15s, reduce Enemies' DMG RES by 20%.",
                artsbreak: 1900,
                truearts: "43000% Dark DMG (PHY). Increase Allies' DMG by 15% (max. 4 stacks (60% DMG increase)) + For 20s, increase Dark Allies' ATK by 100%.",
                trueartsbreak: 3800
            },
        passive: 
            {
                ability1: "Increase PHY Evasion by 20%.",
                ability2: "Increase DMG against Enemies in BREAK by 20%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 2,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat4amt: 2,
                    hover4: "Oldeus",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "NANASHI",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "70s CT - 12500% Dark DMG (PHY). If user is Dark, increase own DMG by 50% for 10s.",
                skillbreak: 1500,
                passive: 
                    {
                        ability1: "When equipped by Dark Kane, increase DMG by 30% and Arts Gauge by 1/s. Does not stack with Abilities of the same name.",
                        ability2: "Increase Critical Rate by 20%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sybil - Missing Lore
        id: 102776512,
        name: "Sybil",
        attribute: "Dark",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102775512.png",
                detailawk: "/db/Units/Detail/unit_detail_102776512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102775512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102776512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7011,
                hpplus: 999,
                atk: 2711,
                atkplus: 416,
                def: 2225,
                defplus: 343
            },
        skillset: 
            {
                skill: "8s CT - 2500% Dark DMG (PHY). Chance to inflict Blind.",
                skillbreak: 1000,
                arts: "20800% Dark DMG (PHY). Increase own Arts by [20 × # of Enemies killed by this Arts].",
                artsbreak: 1900,
                truearts: "36800% Dark DMG (PHY). DMG of own True Arts increases as the amount of HP the Enemy is missing increases (up to 200%). Increase accuracy of this True Arts against Blinded Enemies by 50%.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "Increase Curse RES by 50%.",
                ability2: "When near-death, increase Arts by 3/s."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat3amt: 4,
                    hover3: "Oldeus",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sai - Missing Lore
        id: 102786212,
        name: "Sai",
        attribute: "Water",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102785212.png",
                detailawk: "/db/Units/Detail/unit_detail_102786212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102785212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102786212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6777,
                hpplus: 999,
                atk: 2555,
                atkplus: 393,
                def: 2615,
                defplus: 402
            },
        skillset: 
            {
                skill: "7s CT - 1200% Water DMG (PHY). Permanently increase PHY evasion by 3%. (Maximum 30%).",
                skillbreak: 700,
                arts: "14800% Water DMG (PHY). For 15s, heal Allies' HP by 250/s, increase Allies' DEF by 50%.",
                artsbreak: 1200,
                truearts: "29800% Water DMG (PHY). If own HP is 60% or lower, for 20s, increase Allies' Healing Taken, increase own Equipment CT REC by 100%.",
                trueartsbreak: 2800
            },
        passive: 
            {
                ability1: "Heal own HP by 10/s.",
                ability2: "Increase Fire RES by 25%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 1,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat4amt: 2,
                    hover4: "Freydal",
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Cynthia - Missing Lore, TW Image
        id: 102796212,
        name: "Cynthia",
        attribute: "Water",
        type: "Beast",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102795212.png",
                detailawk: "/db/Units/Detail/unit_detail_102796212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102795212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102796212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6271,
                hpplus: 950,
                atk: 2555,
                atkplus: 393,
                def: 2499,
                defplus: 384
            },
        skillset: 
            {
                skill: "8s CT - 2400% Water DMG (PHY). During own Skill, increase Paralysis and Freeze RES by 100%.",
                skillbreak: 1200,
                arts: "12800% Water DMG (PHY). Permanently increase the Hit Counter cap to 198 + For 10s, increase Allies' ATK and DEF by 50%.",
                artsbreak: 2000,
                truearts: "34800% Water DMG (PHY). For 10s, increase own stats by 30%, increase own Arts by 3/s. When own Hit Counter is at 99 or higher: Reduce Hit Counter by 77 + For 20s, increase all Allies' stats by 30%, increase own Arts by 3/s.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "Add a Hit Counter that gains Count based on hits to enemies by own Skill, Arts and True Arts. Increase own accuracy and Critical Rate based on Hit Count. Hit Counter caps at 99 hits.",
                ability2: "Increase DMG to Giant Bosses by 30%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 1,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat4amt: 1,
                    hover4: "Freydal",
                    mat5: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat5amt: 2,
                    hover5: "Tonetaurus"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Saber Arm",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "40s CT - 9000% Water DMG (PHY). For 12s, reduce Enemies' Water and PHY RES by 20%.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Cynthia, increase DMG by 30% and Movement Speed by 10%.",
                        ability2: "Increase DMG to Giant Bosses by 20%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Melissa - Missing Lore, TW Image
        id: 102806412,
        name: "Melissa",
        attribute: "Light",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102805412.png",
                detailawk: "/db/Units/Detail/unit_detail_102806412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102805412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102806412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6791,
                hpplus: 999,
                atk: 2888,
                atkplus: 443,
                def: 2632,
                defplus: 404
            },
        skillset: 
            {
                skill: "7s CT - 2000% Light DMG (PHY). Increase own Arts by 15.",
                skillbreak: 1200,
                arts: "18000% Light DMG (PHY). Chance to inflict Paralysis. If Paralysis is inflicted by this Art, increase own Arts by 50.",
                artsbreak: 2500,
                truearts: "41800% Light DMG (PHY). Heal self by 3% of this True Arts' Critical DMG dealt.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase own Critical Rate by 50%.",
                ability2: "When a Dragon is in the party, increase own ATK by 50%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragWilkes.png",
                    mat3amt: 2,
                    hover3: "Wilkes",
                    mat4: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat4amt: 2,
                    hover4: "Mavroskia",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Alsol",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "40s CT - 10000% Light DMG (PHY). 70% chance to inflict Paralysis.",
                skillbreak: "?",
                passive: 
                    {
                        ability1: "When equipped by Melissa, increase Critical Rate by 20% and heal by an additional 2% of own True Arts' Critical DMG dealt.",
                        ability2: "Increase DMG by 15%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Barossa - Missing Lore, TW Image
        id: 102816512,
        name: "Barossa",
        attribute: "Dark",
        type: "Dragon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102815512.png",
                detailawk: "/db/Units/Detail/unit_detail_102816512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102815512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102816512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7211,
                hpplus: 999,
                atk: 2434,
                atkplus: 375,
                def: 2919,
                defplus: 447
            },
        skillset: 
            {
                skill: "15s CT - 5000% Dark DMG (PHY).",
                skillbreak: 1200,
                arts: "12800% Dark DMG (PHY). For 20s, increase Allies' Critical RES by 30%, Allies gain a DMG barrier that negates 3000 DMG.",
                artsbreak: 2000,
                truearts: "24200% Dark DMG (PHY). When activated against Enemies in Break, increase own DMG by 100% for 10 seconds and gain 100 Art from one hit.",
                trueartsbreak: 4500
            },
        passive: 
            {
                ability1: "When near-death, recover 50 HP/s.",
                ability2: "When a Dragon is in the party, increase DEF by 50%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 2,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat4amt: 2,
                    hover4: "Elpneumas",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Starisarta",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "45s CT - 10000% Dark DMG (PHY). For 10s, increase Allies' DEF by 50%.",
                skillbreak: 1800,
                passive: 
                    {
                        ability1: "When equipped by Barossa, increase own max HP by 20% and increase own Arts by 2/s. Does not stack with Abilities of the same name.",
                        ability2: "Increase Break PWR by 6%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mizuki - Missing Lore, TW Image
        id: 102826212,
        name: "Mizuki",
        attribute: "Water",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102825212.png",
                detailawk: "/db/Units/Detail/unit_detail_102826212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102825212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102826212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6892,
                hpplus: 999,
                atk: 2711,
                atkplus: 416,
                def: 2400,
                defplus: 370
            },
        skillset: 
            {
                skill: "8s CT - 2400% Water DMG (PHY). Increase DMG of this Skill by 100% against non-Boss Enemies.",
                skillbreak: 800,
                arts: "20000% Water DMG (PHY). Chance to inflict Freeze. Increase own Arts by 20.",
                artsbreak: 1500,
                truearts: "For 90s, enter Third Eye. During Third Eye: 50000% Water DMG (PHY). Increase own Arts by 50.",
                trueartsbreak: 3100
            },
        passive: 
            {
                ability1: "Increase Hellfire RES by 60%.",
                ability2: "When in Third Eye, increase DMG to Fire Enemies by 180%. Heal own HP by 2% of DMG dealt."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 1,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat4amt: 2,
                    hover4: "Freydal",
                    mat5: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat5amt: 1,
                    hover5: "Oldeus"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Demonic Seal",
                slot: "/db/Mines/thumbnail/suppLB.png",
                detail: "",
                skill: "25s CT - For 20s, increase own Arts by 3/s and increase own DMG by 40%.",
                skillbreak: 0,
                passive: 
                    {
                        ability1: "When equipped by Mizuki, increase own accuracy by 30% and increase Third Eye duration by 60s. Does not stack with Abilities of the same name.",
                        ability2: "Heal own HP by 10/s."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ginzo - Missing Lore, TW Image
        id: 102836512,
        name: "Ginzo",
        attribute: "Dark",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102835512.png",
                detailawk: "/db/Units/Detail/unit_detail_102836512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102835512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102836512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 7121,
                hpplus: 999,
                atk: 2870,
                atkplus: 440,
                def: 2190,
                defplus: 338
            },
        skillset: 
            {
                skill: "10s CT - 3500% Dark DMG (PHY). Increase own Arts by 10.",
                skillbreak: 900,
                arts: "17000% Dark DMG (PHY). For 15s, reduce Enemies' PHY RES by 30%.",
                artsbreak: 1600,
                truearts: "For 150s, enter Third Eye. During Third Eye: 45000% Dark DMG (PHY). For 15s, increase own DMG by 100% against Light Enemies.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "Increase DMG to Giant Bosses by 20%.",
                ability2: "Increase Arts by 100 when entering Third Eye. While in Third Eye, ignore 100% of Enemies' DEF and increase Arts by 1/s."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 2,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat4amt: 2,
                    hover4: "Oldeus",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Netherworld Silver",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "60s CT - 13000% Dark DMG (PHY). For 8s, increase own PHY DMG by 50%. Reduce Light Enemies' Dark RES by 20%.",
                skillbreak: 2000,
                passive: 
                    {
                        ability1: "When equipped by Ginzo, increase stats by 30% and increase own Arts by 2/s.",
                        ability2: "When near-death, increase own Skill CT REC by 20%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Shiki - Missing Lore, TW Image
        id: 102846412,
        name: "Shiki",
        attribute: "Light",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102845412.png",
                detailawk: "/db/Units/Detail/unit_detail_102846412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102845412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102846412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6888,
                hpplus: 999,
                atk: 2650,
                atkplus: 406,
                def: 2499,
                defplus: 386
            },
        skillset: 
            {
                skill: "10s CT - 1600% Light DMG (MAG). Chance to inflict Burn on first usage, Poison on second usage, Blind on third usage, and repeat",
                skillbreak: 300,
                arts: "14000% Light DMG (PHY). Increase DMG of this Arts against Enemies with Status Ailments by 35%. During Third Eye: 14000% Light DMG (PHY). Increase DMG of this Arts against Enemies with Status Ailments by 35%. Increase own Arts by 50.",
                artsbreak: 1100,
                truearts: "For 120s, enter Third Eye. During Third Eye: 30000% Light DMG (PHY). For 20s, increase Allies' Arts by 2/s, reduce Enemies' Status RES by 30%.",
                trueartsbreak: 1800
            },
        passive: 
            {
                ability1: "Increase Seal RES by 80%.",
                ability2: "Increase Arts by 200 when entering Third Eye. During Third Eye, increase Skill CT REC and accuracy by 100%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragWilkes.png",
                    mat3amt: 2,
                    hover3: "Wilkes",
                    mat4: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat4amt: 1,
                    hover4: "Radachne",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Mirage Kimono",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "50s CT - 7500% Light DMG (MAG). For 10s, increase Allies' BE generated by 50%. If user is Light, increase own DMG by 30%.",
                skillbreak: 1300,
                passive: 
                    {
                        ability1: "When equipped by Shiki, increase Duration of Status Ailments inflicted by own Skill by 2s.",
                        ability2: "When near-death, increase evasion by 20%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Shuri - Missing Lore, TW Image
        id: 102856512,
        name: "Shuri",
        attribute: "Dark",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102855512.png",
                detailawk: "/db/Units/Detail/unit_detail_102856512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102855512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102856512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 7401,
                hpplus: 999,
                atk: 3055,
                atkplus: 469,
                def: 2000,
                defplus: 312
            },
        skillset: 
            {
                skill: "12s CT - 3300% Dark DMG (PHY). For 6s, reduce Enemies' Faint RES by 30%.",
                skillbreak: 1000,
                arts: "18000% Dark DMG (PHY). 80% chance of inflicting Faint + For 10s, reduce Enemies' DMG RES by 25%, if an Enemy was Fainted by this Arts, reduce that Enemy's DMG RES by 50% instead.",
                artsbreak: 2200,
                truearts: "For 100s, enter Third Eye. During Third Eye: 56000% Dark DMG (PHY). For 10s, increase Allies' PHY DMG by 50% + increase own DMG by 50% until Third Eye ends (stackable).",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase Freeze and Paralysis RES by 100%.",
                ability2: "During Third Eye, increase own Arts by 3 for every 1% of max HP lost.",
                ability3: "Increase DMG to Enemies with 30% or less HP by 50%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 2,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 2,
                    hover4: "Code-XTF",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Crimson Talon",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "60s CT - 12500% Dark DMG (PHY). For 10s, increase own Arts by 4/s, reduce own DEF by 30%.",
                skillbreak: 2300,
                passive: 
                    {
                        ability1: "When equipped by Shuri, increase Arts by 80 when entering Third Eye.",
                        ability2: "When near-death, increase ATK by 30%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Amane - Missing Lore, TW Image
        id: 102866412,
        name: "Amane",
        attribute: "Light",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102865412.png",
                detailawk: "/db/Units/Detail/unit_detail_102866412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102865412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102866412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6812,
                hpplus: 999,
                atk: 2661,
                atkplus: 408,
                def: 2558,
                defplus: 386
            },
        skillset: 
            {
                skill: "9s CT - 1700% Light DMG (PHY). Increase own Arts by 10. Increase own Arts by 4 each time own Skill crits.",
                skillbreak: 800,
                arts: "16000% Light DMG (PHY). For 20s, increase Allies' Accuracy by 50%, own Critical DMG by 150%.",
                artsbreak: 1300,
                truearts: "For 120s, enter Third Eye. During Third Eye: 32000% Light DMG (PHY). For 20s, increase Light and Dark Allies' DMG by 120%.",
                trueartsbreak: 2400
            },
        passive: 
            {
                ability1: "While in Third Eye, increase own Skill CT REC, Accuracy and Critical Rate by 50%.",
                ability2: "Increase Evasion by 15%.",
                ability3: "Increase Critical Rate by 30%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat3amt: 2,
                    hover3: "Radachne",
                    mat4: "/db/Icons/dungeon_drops/fragWilkes.png",
                    mat4amt: 1,
                    hover4: "Wilkes",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Dual Thunberbolts",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "20s CT - 3800% Light DMG (PHY). For 5s, increase own Critical Rate by [# of times this equip has been used in quest x 25%] (up to 100%).",
                skillbreak: 500,
                passive: 
                    {
                        ability1: "When equipped by Amane, increase Critical DMG by 70%. Does not stack with Abilities of the same name.",
                        ability2: "Increase DMG to Human Enemies by 20%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kisaragi - Missing Lore, TW Image
        id: 102876112,
        name: "Kisaragi",
        attribute: "Fire",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102875112.png",
                detailawk: "/db/Units/Detail/unit_detail_102876112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102875112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102876112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6799,
                hpplus: 999,
                atk: 2888,
                atkplus: 443,
                def: 2115,
                defplus: 327
            },
        skillset: 
            {
                skill: "14s CT - 4100% Fire DMG (PHY). For 7s, increase own ATK by 10%.",
                skillbreak: 700,
                arts: "20000% Fire DMG (PHY). For 15s, increase own ATK by 50%, BE generation by 60%.",
                artsbreak: 1200,
                truearts: "For 120s, enter Third Eye. During Third Eye: 45000% Fire DMG (PHY). For 15s, increase Allies' ATK by 100%.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "Increase Poison RES by 20%.",
                ability2: "Increase Arts by 100 when entering Third Eye. During Third Eye, increase own ATK by 50%, and DMG by the same percentage of ATK buffs."
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
                    mat3amt: 1,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat4amt: 2,
                    hover4: "Flogassa",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Will-o'-the-Wisp",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "80s CT - 11000% Fire DMG (PHY). For 12s, increase own ATK by 80%. If user is Fire, increase ATK by 150% instead.",
                skillbreak: 2500,
                passive: 
                    {
                        ability1: "When equipped by Kisaragi, increase ATK by 50%. At the start of a Quest, increase own Arts by 100.",
                        ability2: "Increase PHY RES by 10%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Saku - Missing Lore, TW Image
        id: 102886312,
        name: "Saku",
        attribute: "Earth",
        type: "Human",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102885312.png",
                detailawk: "/db/Units/Detail/unit_detail_102886312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102885312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102886312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6844,
                hpplus: 999,
                atk: 2489,
                atkplus: 383,
                def: 2507,
                defplus: 386
            },
        skillset: 
            {
                skill: "10s CT - 1700% Earth DMG (PHY). Increase own Arts by 10.",
                skillbreak: 600,
                arts: "16400% Earth DMG (PHY). High chance to inflict Poison.",
                artsbreak: 1000,
                truearts: "For 150s, enter Third Eye. During Third Eye: 34000% Earth DMG (PHY). For 20s, increase Allies' Water RES by 30% and Freeze RES by 100%.",
                trueartsbreak: 2200
            },
        passive: 
            {
                ability1: "Increase Water RES by 20%.",
                ability2: "While in Third Eye, increase Skill CT REC by 200% and increase DMG to Water Enemies by 50%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat3amt: 1,
                    hover3: "Goldola",
                    mat4: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat4amt: 1,
                    hover4: "Flogassa",
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "TSUJI-KAZE",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "60s CT - 9000% Earth DMG (PHY). For 10s, increase Allies' Earth DMG by 40%.",
                skillbreak: 2200,
                passive: 
                    {
                        ability1: "When equipped by Saku, increase DMG by 30% and increase max HP by 20%.",
                        ability2: "Increase Skill CT REC by 10%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Tamae - Missing Lore, TW Image
        id: 102896112,
        name: "Tamae",
        attribute: "Fire",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102895112.png",
                detailawk: "/db/Units/Detail/unit_detail_102896112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102895112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102896112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6800,
                hpplus: 999,
                atk: 3099,
                atkplus: 474,
                def: 2560,
                defplus: 392
            },
        skillset: 
            {
                skill: "12s CT - 4400% Dark DMG (MAG). Chance to inflict Blind.",
                skillbreak: 600,
                arts: "16000% Dark DMG (MAG). For 35s, reduce Enemies' ATK, PHY RES, and Blind RES by 10% (stackable). For 15s, increase Dark Allies' Arts by 2/s.",
                artsbreak: 1300,
                truearts: "50000% Fire DMG (PHY). For 60s, reduce Enemies' Fire RES by 20% (stackable).",
                trueartsbreak: 2000
            },
        passive: 
            {
                ability1: "Increase Critical Rate by 100% against Blinded Enemies.",
                ability2: "Increase Critical DMG by 70%.",
                ability3: "Increase own Arts by 10 for each enemy killed."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat3amt: 2,
                    hover3: "Flogassa",
                    mat4: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat4amt: 1,
                    hover4: "Degilmagna",
                    mat5: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat5amt: 1,
                    hover5: "Ragsherum Phantom"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "Blood Moon",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "65s CT - 10,000% Fire DMG (MAG). For 10s, reduce Enemies' Fire and Dark RES by 40%.",
                skillbreak: 1800,
                passive: 
                    {
                        ability1: "When equipped by Tamae, increase own Critical DMG by 60%.",
                        ability2: "Increase ATK by 10%."
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Orgah - Missing Lore, Stats, slots, Evolution, True Weapon, TW Image
        id: 102906112,
        name: "Orgah",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102905112.png",
                detailawk: "/db/Units/Detail/unit_detail_102906112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102905112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102906112.png"
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
    { //Adele - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102916212,
        name: "Adele",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102915212.png",
                detailawk: "/db/Units/Detail/unit_detail_102916212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102915212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102916212.png"
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
    { //Vermilia - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102926112,
        name: "Vermilia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102925112.png",
                detailawk: "/db/Units/Detail/unit_detail_102926112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102925112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102926112.png"
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
    { //Firia - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102936212,
        name: "Firia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102935212.png",
                detailawk: "/db/Units/Detail/unit_detail_102936212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102935212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102936212.png"
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
    { //Garlan - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102946312,
        name: "Garlan",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102945312.png",
                detailawk: "/db/Units/Detail/unit_detail_102946312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102945312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102946312.png"
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
    { //Aluze - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102956412,
        name: "Aluze",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102955412.png",
                detailawk: "/db/Units/Detail/unit_detail_102956412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102955412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102956412.png"
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
    { //Veronica - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102966212,
        name: "Veronica",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102965212.png",
                detailawk: "/db/Units/Detail/unit_detail_102966212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102965212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102966212.png"
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
    { //Roy (Fire) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102976112,
        name: "Roy (Fire)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102975112.png",
                detailawk: "/db/Units/Detail/unit_detail_102976112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102975112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102976112.png"
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
    { //Cestina - Missing Lore, Stats, Slots, EVolution, True WEapon, TW Image
        id: 102986312,
        name: "Cestina",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102985312.png",
                detailawk: "/db/Units/Detail/unit_detail_102986312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102985312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102986312.png"
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
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak: 
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
    { //Radak - Missing Lore, Stats, Slots, Evolution
        id: 102996112,
        name: "Radak",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102995112.png",
                detailawk: "/db/Units/Detail/unit_detail_102996112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102995112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102996112.png"
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
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak: 
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
    { //Liza - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103006412,
        name: "Liza",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103005412.png",
                detailawk: "/db/Units/Detail/unit_detail_103006412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103005412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103006412.png"
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
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak:
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
    { //Cygnet - Missing Lore, Stats, Slots, Evolution
        id: 103016512,
        name: "Cygnet",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103015512.png",
                detailawk: "/db/Units/Detail/unit_detail_103016512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103015512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103016512.png"
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
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak: 
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
    { //Orvell - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103026412,
        name: "Orvell",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103025412.png",
                detailawk: "/db/Units/Detail/unit_detail_103026412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103025412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103026412.png"
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
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak: 
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
    { //Virago - Missing Lore, Stats, Slots, Evolution
        id: 103036212,
        name: "Virago",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103035212.png",
                detailawk: "/db/Units/Detail/unit_detail_103036212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103035212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103036212.png"
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
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak:
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
    { //Luahn - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103046512,
        name: "Luahn",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103045512.png",
                detailawk: "/db/Units/Detail/unit_detail_103046512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103045512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103046512.png"
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
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak: 
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
    { //Chloe - Missing Lore, Stats, Slots, Evolution
        id: 103056511,
        name: "Chloe",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103055511.png",
                detailawk: "/db/Units/Detail/unit_detail_103056511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103055511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103056511.png"
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
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak: 
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
    { //Angelas - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103066112,
        name: "Angelas",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103065112.png",
                detailawk: "/db/Units/Detail/unit_detail_103066112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103065112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103066112.png"
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
    { //Eagle - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103076312,
        name: "Eagle",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103075312.png",
                detailawk: "/db/Units/Detail/unit_detail_103076312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103075312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103076312.png"
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
    { //Bakoo - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103086512,
        name: "Bakoo",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103085512.png",
                detailawk: "/db/Units/Detail/unit_detail_103086512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103085512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103086512.png"
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
    { //Victoire - Missing Lore, Stats, Slots, Evolution, True WEapon, tW Image
        id: 103096412,
        name: "Victoire",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103095412.png",
                detailawk: "/db/Units/Detail/unit_detail_103096412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103095412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103096412.png"
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
    { //Forte - Missing Lore, Stats, Slots, Evolution, True WEapon, TW Image
        id: 103106512,
        name: "Forte",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103105512.png",
                detailawk: "/db/Units/Detail/unit_detail_103106512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103105512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103106512.png"
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
    { //Sumire - Missing Lore, Stats, Slots, Evolution
        id: 103116112,
        name: "Sumire",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103115112.png",
                detailawk: "/db/Units/Detail/unit_detail_103116112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103115112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103116112.png"
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
    { //Arcana - Missing Lore, Stats, Slots, Evolution
        id: 103126512,
        name: "Arcana",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_1031265512.png",
                detailawk: "/db/Units/Detail/unit_detail_103126512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103125512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103126512.png"
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
    { //Ashleigh - Missing Lore, Stats, Slots, EVolution, True Weapon, TW Image
        id: 103136112,
        name: "Ashleigh",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103135112.png",
                detailawk: "/db/Units/Detail/unit_detail_103136112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103135112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103136112.png"
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
    { //Salyssa - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103146312,
        name: "Salyssa",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103145312.png",
                detailawk: "/db/Units/Detail/unit_detail_103146312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103145312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103146312.png"
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
    { //Sharon - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103156412,
        name: "Sharon",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103155412.png",
                detailawk: "/db/Units/Detail/unit_detail_103156412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103155412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103156412.png"
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
    { //Rits - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103166412,
        name: "Rits",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103165412.png",
                detailawk: "/db/Units/Detail/unit_detail_103166412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103165412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103166412.png"
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
    { //Raine - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103176212,
        name: "Raine",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103175212.png",
                detailawk: "/db/Units/Detail/unit_detail_103176212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103175212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103176212.png"
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
    { //Alulu - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103186512,
        name: "Alulu",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103185512.png",
                detailawk: "/db/Units/Detail/unit_detail_103186512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103185512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103186512.png"
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
    { //Marika - Missing Lore, Stats, Slots, Evolution, True WeaponS, TW Images
        id: 103196112,
        name: "Marika",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103195112.png",
                detailawk: "/db/Units/Detail/unit_detail_103196112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103195112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103196112.png"
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
                true1: 
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
                true2: 
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
                }
                
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Noel - Missing Lore, Stats, Slots, Evolution, True WeaponS, TW Image
        id: 103206412,
        name: "Noel",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103205412.png",
                detailawk: "/db/Units/Detail/unit_detail_103206412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103205412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103206412.png"
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
                true1: 
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
                true2: 
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
                }
                
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Batiste - Missing Lore, STats, Slots, Evolution , True WeaponS, TW Images
        id: 103216512,
        name: "Batiste",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103215512.png",
                detailawk: "/db/Units/Detail/unit_detail_103216512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103215512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103216512.png"
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
                true1: 
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
                true2: 
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
                }
                
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Juno - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103226412,
        name: "Juno",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103225412.png",
                detailawk: "/db/Units/Detail/unit_detail_103226412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103225412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103226412.png"
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
    { //Liese (Dark) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103236512,
        name: "Liese (Dark)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103235512.png",
                detailawk: "/db/Units/Detail/unit_detail_103236512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103235512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103236512.png"
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
    { //Emmy - Missing Lore, Stats, Slots, Evolution, True Weapon, TW image
        id: 103246512,
        name: "Emmy",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103245512.png",
                detailawk: "/db/Units/Detail/unit_detail_103246512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103245512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103246512.png"
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
                true1: 
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
                true2: 
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
                }
                
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Groytz - Missing Lore, Stats, Slots, Evolution, True WeaponS, TW Images
        id: 103256312,
        name: "Groytz",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103255312.png",
                detailawk: "/db/Units/Detail/unit_detail_103256312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103255312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103256312.png"
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
                true1: 
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
                true2: 
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
                }
                
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Hart (Earth) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103276312,
        name: "Hart (Earth)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103275312.png",
                detailawk: "/db/Units/Detail/unit_detail_103276312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103275312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103276312.png"
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
    { //Hart (Dark) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103286512,
        name: "Hart (Dark)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103285512.png",
                detailawk: "/db/Units/Detail/unit_detail_103286512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103285512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103286512.png"
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
    { //Miranda - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103296412,
        name: "Miranda",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103295412.png",
                detailawk: "/db/Units/Detail/unit_detail_103296412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103295412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103296412.png"
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
    { //Simon - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103306512,
        name: "Simon",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103305512.png",
                detailawk: "/db/Units/Detail/unit_detail_103306512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103305512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103306512.png"
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
    { //Vultee (Earth) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103316312,
        name: "Vultee (Earth)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103315312.png",
                detailawk: "/db/Units/Detail/unit_detail_103316312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103315312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103316312.png"
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
    { //Priscilla (Fire) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103326112,
        name: "Priscilla (Fire)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103325112.png",
                detailawk: "/db/Units/Detail/unit_detail_103326112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103325112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103326112.png"
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
    { //Serah - Missing Lore, Stats, Slots, Evolution, True Weapon, TWImage
        id: 103346412,
        name: "Serah",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103345412.png",
                detailawk: "/db/Units/Detail/unit_detail_103346412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103345412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103346412.png"
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
    { //Airi - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103356312,
        name: "Airi",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103355312.png",
                detailawk: "/db/Units/Detail/unit_detail_103356312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103355312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103356312.png"
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
    { //Lyra - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103366412,
        name: "Lyra",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103365412.png",
                detailawk: "/db/Units/Detail/unit_detail_103366412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103365412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103366412.png"
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
    { //Summer Juno - Missing Lore, Stats, Slots, Evolution
        id: 103376212,
        name: "Summer Juno",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103375212.png",
                detailawk: "/db/Units/Detail/unit_detail_103376212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103375212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103376212.png"
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
    { //Summer Leone - Missing Lore, Stats, Slots, Evolution
        id: 103386312,
        name: "Summer Leone",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103385312.png",
                detailawk: "/db/Units/Detail/unit_detail_103386312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103385312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103386312.png"
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
    { //Elizabeth - Missing Lore, Stats, Slots, Evolution, True Weapon, tW Image
        id: 103396112,
        name: "Elizabeth",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103395112.png",
                detailawk: "/db/Units/Detail/unit_detail_103396112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103395112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103396112.png"
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
    { //Vultee (Water) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW IMage
        id: 103406212,
        name: "Vultee (Water)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103405212.png",
                detailawk: "/db/Units/Detail/unit_detail_103406212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103405212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103406212.png"
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
    { //Priscilla (Water) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103416212,
        name: "Priscilla (Water)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103415212.png",
                detailawk: "/db/Units/Detail/unit_detail_103416212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103415212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103416212.png"
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
    { //Emperor of Isliid - Missing Lore, Stats, Slots, Evolution, True WeaponS, TW Images
        id: 103426412,
        name: "Emperor of Isliid",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103425412.png",
                detailawk: "/db/Units/Detail/unit_detail_103426412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103425412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103426412.png"
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
                true1: 
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
                true2: 
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
                true3: 
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
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Beguiler Selia - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103436212,
        name: "Beguiler Selia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103435212.png",
                detailawk: "/db/Units/Detail/unit_detail_103436212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103435212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103436212.png"
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
    { //Rosetta (Earth) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103446312,
        name: "Rosetta (Earth)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103445312.png",
                detailawk: "/db/Units/Detail/unit_detail_103446312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103445312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103446312.png"
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
    { //Zinogre Armor Rayas - Missing Lore, Stats, Slots, Evolution
        id: 107006412,
        name: "Zinogre Armor Rayas",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107005412.png",
                detailawk: "/db/Units/Detail/unit_detail_107006412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107005412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107006412.png"
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
    { //Mizutsune Armor Roy - Missing Lore, Stats, Slots, Evolution
        id: 107016212,
        name: "Mizutsune Armor Roy",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107015212.png",
                detailawk: "/db/Units/Detail/unit_detail_107016212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107015212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107016212.png"
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
    { //Rathian Armor Iris - Missing Lore, Stats, Slots, Evolution
        id: 107026412,
        name: "Rathian Armor Iris",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107025412.png",
                detailawk: "/db/Units/Detail/unit_detail_107026412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107025412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107026412.png"
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
    { //Teostra Armor Ganan - Missing Lore, Stats, Slots,E volutiion
        id: 107036112,
        name: "Teostra Armor Ganan",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107035112.png",
                detailawk: "/db/Units/Detail/unit_detail_107036112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107035112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107036112.png"
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
    { //Kirin Armor Liese - Missing Lore, Stats, Slots, Evoluition
        id: 107046412,
        name: "Kirin Armor Liese",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107045412.png",
                detailawk: "/db/Units/Detail/unit_detail_107046412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107045412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107046412.png"
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
    { //Felyne Armor Sophie - Missing Lore, Stats, Slots, Evolution
        id: 107056112,
        name: "Felyne Armor Sophie",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107055112.png",
                detailawk: "/db/Units/Detail/unit_detail_107056112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107055112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107056112.png"
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
    { //Palico - Missing Lore, Stats, Slots, Evolution
        id: 107066112,
        name: "Palico",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107065112.png",
                detailawk: "/db/Units/Detail/unit_detail_107066112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107065112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107066112.png"
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
    { //Saitama - Missing Lore, Stats, Slots, Evolution
        id: 107076412,
        name: "Saitama",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107075412.png",
                detailawk: "/db/Units/Detail/unit_detail_107076412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107075412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107076412.png"
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
    { //Genos - Missing Lore, Stats, Slots, Evolution
        id: 107086512,
        name: "Genos",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107085512.png",
                detailawk: "/db/Units/Detail/unit_detail_107086512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107085512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107086512.png"
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
    { //Terrible Tornado - Missing Lore, Stats, Slots, Evolution
        id: 107096312,
        name: "Terrible Tornado",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107095312.png",
                detailawk: "/db/Units/Detail/unit_detail_107096312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107095312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107096312.png"
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
    { //Boros - Missing Lore, Stats, Slots, Evolution
        id: 107106511,
        name: "Boros",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107105511.png",
                detailawk: "/db/Units/Detail/unit_detail_107106511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107105511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107106511.png"
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
    { //Sugimoto - Missing Lore, Stats, Slots, Evolution
        id: 107116112,
        name: "Sugimoto",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107115112.png",
                detailawk: "/db/Units/Detail/unit_detail_107116112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107115112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107116112.png"
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
    { //Asirpa - Missing Lore, Stats, Slots, Evolution
        id: 107126412,
        name: "Asirpa",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107125412.png",
                detailawk: "/db/Units/Detail/unit_detail_107126412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107125412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107126412.png"
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
    { //Hijikata - Missing Lore, Stats, Slots, Evolution
        id: 107136512,
        name: "Hijikata",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107135512.png",
                detailawk: "/db/Units/Detail/unit_detail_107136512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107135512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107136512.png"
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
    { //Rimuru (Slime) - Missing Lore, Stats, Slots, Evolution
        id: 107146212,
        name: "Rimuru (Slime)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107145212.png",
                detailawk: "/db/Units/Detail/unit_detail_107146212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107145212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107146212.png"
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
    { //Rimuru (Human) - Missing Lore, Stats, Slots, Evolution
        id: 107156212,
        name: "Rimuru (Human)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107155212.png",
                detailawk: "/db/Units/Detail/unit_detail_107156212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107155212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107156212.png"
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
    { //Milim - Missing Lore, Stats, Slots, Evolution
        id: 107166112,
        name: "Milim",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107165112.png",
                detailawk: "/db/Units/Detail/unit_detail_107166112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107165112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107166112.png"
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
    { //Benimaru - Missing Lore, Stats, Slots, Evolution
        id: 107176112,
        name: "Benimaru",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107175112.png",
                detailawk: "/db/Units/Detail/unit_detail_107176112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107175112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107176112.png"
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
    { //Goblin Slayer - Missing Lore, Stats, Slots, Evolution
        id: 107186512,
        name: "Goblin Slayer",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107185512.png",
                detailawk: "/db/Units/Detail/unit_detail_107186512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107185512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107186512.png"
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
    { //PRiestess - Missing Lore, Stats, Slots, EVolution
        id: 107196412,
        name: "Priestess",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107195412.png",
                detailawk: "/db/Units/Detail/unit_detail_107196412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107195412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107196412.png"
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
    { //High Elf Archer - Missing Lore, Stats, Slots, Evolution
        id: 107206312,
        name: "High Elf Archer",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107205312.png",
                detailawk: "/db/Units/Detail/unit_detail_107206312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107205312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107206312.png"
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
    { //Sonic - Missing Lore, Stats, Slots, Evolution
        id: 107216512,
        name: "Sonic",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107215512.png",
                detailawk: "/db/Units/Detail/unit_detail_107216512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107215512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107216512.png"
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
    { //Hellish Blizzard - Missing Lore, Stats, Slots, Evolution
        id: 107226212,
        name: "Hellish Blizzard",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107225212.png",
                detailawk: "/db/Units/Detail/unit_detail_107226212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107225212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107226212.png"
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
    { //Garou - Missing Lore, Stats, Slots, Evolution
        id: 107236512,
        name: "Garou",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107235512.png",
                detailawk: "/db/Units/Detail/unit_detail_107236512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107235512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107236512.png"
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
    { //Naofumi - Missing Lore, Stats, Slots, Evolution, True WeaponS, TW Images
        id: 107256411,
        name: "Naofumi",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107255411.png",
                detailawk: "/db/Units/Detail/unit_detail_107256411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107255411.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107256411.png"
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
                true1: 
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
                true2: 
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
                }
                
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Raphtalia - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 107266412,
        name: "Raphtalia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107265412.png",
                detailawk: "/db/Units/Detail/unit_detail_107266412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107265412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107266412.png"
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
    { //Filo - Missing Lore, Stats, Slots, Evolution
        id: 107276312,
        name: "Filo",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107275312.png",
                detailawk: "/db/Units/Detail/unit_detail_107276312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107275312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107276312.png"
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
    { //Melty - Missing Lore, Stats, Slots, Evolution
        id: 107286212,
        name: "Melty",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107285212.png",
                detailawk: "/db/Units/Detail/unit_detail_107286212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107285212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107286212.png"
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
    { //Yusuke - Missing Lore, Stats, Slots, Evolution
        id: 107296212,
        name: "Yusuke",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107295212.png",
                detailawk: "/db/Units/Detail/unit_detail_107296212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107295212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107296212.png"
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
    { //Kazuma - Missing Lore, Stats, Slots, Evolution
        id: 107306412,
        name: "Kazuma",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107305412.png",
                detailawk: "/db/Units/Detail/unit_detail_107306412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107305412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107306412.png"
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
    { //Kurama - Missing Lore, Stats, Slots, Evolution
        id: 107316312,
        name: "Kurama",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107315312.png",
                detailawk: "/db/Units/Detail/unit_detail_107316312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107315312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107316312.png"
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
    { //Hiei - Missing Lore, Stats, Slots, Evolution
        id: 107326512,
        name: "Hiei",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107325512.png",
                detailawk: "/db/Units/Detail/unit_detail_107326512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107325512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107326512.png"
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
    { //Toguro - Missing Lore, Stats, Slots, Evolution
        id: 107336512,
        name: "Toguro",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107335512.png",
                detailawk: "/db/Units/Detail/unit_detail_107336512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107335512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107336512.png"
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
    { //Emilia - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 107346212,
        name: "Emilia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107345212.png",
                detailawk: "/db/Units/Detail/unit_detail_107346212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107345212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107346212.png"
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
    { //Rem (RE:ZERO) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 107356212,
        name: "Rem (RE:ZERO)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107355212.png",
                detailawk: "/db/Units/Detail/unit_detail_107356212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107355212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107356212.png"
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
    { //Ram - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 107366312,
        name: "Ram",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107365312.png",
                detailawk: "/db/Units/Detail/unit_detail_107366312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107365312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107366312.png"
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
    { //Beatrice - Missing Lore, Stats, Slots, Evolution, True Weapon , TW Image
        id: 107376512,
        name: "Beatrice",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107375512.png",
                detailawk: "/db/Units/Detail/unit_detail_107376512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107375512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107376512.png"
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
    { //Santa Rimuru - Missing Lore, Stats, Slots, Evolution
        id: 107396212,
        name: "Santa Rimuru",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107395212.png",
                detailawk: "/db/Units/Detail/unit_detail_107396212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107395212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107396212.png"
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
    { //Santa Shion - Missing Lore, Stats, Slots, Evolution
        id: 107416512,
        name: "Santa Shion",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107415512.png",
                detailawk: "/db/Units/Detail/unit_detail_107416512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107415512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107416512.png"
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
    { //New Years Rimuru - Missing Lore, Stats, Slots, Evolution
        id: 107426512,
        name: "New Years Rimuru",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107425512.png",
                detailawk: "/db/Units/Detail/unit_detail_107426512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107425512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107426512.png"
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
    { //New Years Milim - Missing Lore, Stats, Slots, Evolution
        id: 107436412,
        name: "New Years Milim",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107435412.png",
                detailawk: "/db/Units/Detail/unit_detail_107436412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107435412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107436412.png"
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
    { //Hatsune Miku - Missing Lore, Stats, Slots, Evolution
        id: 107456212,
        name: "Hatsune Miku",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107455212.png",
                detailawk: "/db/Units/Detail/unit_detail_107456212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107455212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107456212.png"
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
    { //Sakura Miku - Missing Lore, Stats, Slots, Evolution
        id: 107466312,
        name: "Sakura Miku",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107465312.png",
                detailawk: "/db/Units/Detail/unit_detail_107466312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107465312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107466312.png"
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
    { //Yoh - Missing Lore, Stats, Slots, Evolution
        id: 107476112,
        name: "Yoh",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107475112.png",
                detailawk: "/db/Units/Detail/unit_detail_107476112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107475112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107476112.png"
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
        id: 107486312,
        name: "Anna",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107485312.png",
                detailawk: "/db/Units/Detail/unit_detail_107486312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107485312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107486312.png"
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
    { //Ren - Missing Lore, Stats, Slots, Evolution
        id: 107496512,
        name: "Ren",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107495512.png",
                detailawk: "/db/Units/Detail/unit_detail_107496512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107495512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107496512.png"
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
    { //Hao - Missing Lore, Stats, Slots, Evolution
        id: 107506112,
        name: "Hao",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107505112.png",
                detailawk: "/db/Units/Detail/unit_detail_107506112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107505112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107506112.png"
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
    { //Rudeus - Missing Lore, Stats, Slots, Evolution
        id: 107516312,
        name: "Rudeus",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107515312.png",
                detailawk: "/db/Units/Detail/unit_detail_107516312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107515312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107516312.png"
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
    { //Roxy - Missing Lore, Stats, Slots, Evolution
        id: 107526212,
        name: "Roxy",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107525212.png",
                detailawk: "/db/Units/Detail/unit_detail_107526212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107525212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107526212.png"
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
    { //Sylphiette - Missing Lore, Stats, Slots, Evolution
        id: 107536412,
        name: "Sylphiette",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107535412.png",
                detailawk: "/db/Units/Detail/unit_detail_107536412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107535412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107536412.png"
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
    { //Eris - Missing Lore, Stats, Slots, Evolution
        id: 107546112,
        name: "Eris",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107545112.png",
                detailawk: "/db/Units/Detail/unit_detail_107546112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107545112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107546112.png"
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
    { //Natsu Dragneel - Missing Lore, Stats, Slots, Evolution
        id: 107556112,
        name: "Natsu Dragneel",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107555112.png",
                detailawk: "/db/Units/Detail/unit_detail_107556112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107555112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107556112.png"
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
    { //Lucy Heartfilia - Missing Lore, Stats, Slots, Evolution
        id: 107566412,
        name: "Lucy Heartfilia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_107565412.png",
                detailawk: "/db/Units/Detail/unit_detail_107566412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_107565412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_107566412.png"
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
    { //Gray Fullbuster - Missing Lore, Stats, Slots, Evolution, Images, ID
        id: ,
        name: "Gray Fullbuster",
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
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Erza Scarlet - Missing Lore, Stats, Slots, Evolution, Images, ID
        id: ,
        name: "Erza Scarlet",
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

