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
    { //Ragna - Missing Lore, Evolution, TW Image
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
                hp: 6300,
                hpplus: 955,
                atk: 3060,
                atkplus: 469,
                def: 2304,
                defplus: 355 
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
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
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
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
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
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Elfalla - Missing Lore, Evolution
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
    { //Rayas - Missing Lore, Evolution, TW Image
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
                evo2: "Missing Lore Information, please contact site owner",
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
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
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
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
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
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
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zeorg (Light) - Missing Lore, Evolution, TW Image
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
    { //Melia (Dark) - Missing Lore, Evolution, TW Image
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
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ragsherum - Missing Lore, Evolution, TW Image
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
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
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
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
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
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ganan - Missing Lore, Evolution, TW Image
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
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Gilliam - Missing Stats, Lore, Slots, Evolution, True Weapon, TW Image
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

