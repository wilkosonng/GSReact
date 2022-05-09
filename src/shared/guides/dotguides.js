const TrialGuides = [
    { // Floor 20
        id: 20,
        title: "Floor 20",
        article: `
            Put stuff here
        `
    },
    { //Floor 21
        id: 21,
        title: "Floor 21",
        article: `
            Put stuff here
        `
    },
    { //Floor 26
        id: 26,
        title: "Floor 26",
        article: `
            <center><h3>Overview</h3></center>
            <p>A rather tricky floor incorporating intense mechanics. 
            A complete counter to almost all of the Blood Knights; requiring more specific compositions 
            to tackle it's annoying niches. This floor isn't something you can just brute force, but is perfectly 
            clearable given you can counter her mechanics properly, though perhaps with a bit of luck if you're at the bare minimum.</p>
            <br />

            <b>Field Effect - Hellfire</b>
            <ul>
                <li>Hellfire reflect 5% of the damage you deal to the unit, <b>bypassing damage reduction, 
            damage redirection, and shields</b>. In other words, complete fixed damage that can't be 
            mitigated in any way.</li>
                <li>To visualize how massive this is, a single Vox TA slash will get him 
            killed instantly. 200,000 DMG will reflect 10k DMG to him after all. Because of this field mechanic, 
            it's paramount to control your DPS efficiently so as not to get your units killed quickly. 
            Evidently, it also disallows the use of a lot of meta units that deal too much damage (Even Thetis is likely to die from one TA!) </li>
                <li>Additionally, your units will lose 20% of their MAX HP every 5s. Very potent heals are required so as not to get overtaken by this constant damage.</li>
            </ul>

            <br />
            <b>Before you Begin...</b>
            <p> Proper equipment and team composition are essential for the floor. Here are some things to consider about the boss as you build up your team:</p>
            <ul>
                <li>You need Status RES! Ignis gains heavily increased DMG on units that are Burned. 
                Though she only applies the ailment on Arts/HP threshold, it's essential to bring Status RES unless you want to die really quick. 
                <b>Rimuru</b> works great for this. Alternatively, you can also use an equip like <b>Ganan's Sandals</b>, <b>Mira Hood</b>, 
                and <b>Raaz/Diaz Jade</b>, though you may need to bring one or two.</li>
                <li><b>Mizuki</b> makes this floor fairly braindead to deal with. Bring her if you have her for an easy clear as she's literally made for this quest</li>
                <li><b>Evasion - </b>This boss has very high evasion that can kill your DPS. Accuracy Up is recommended if you want to clear faster, 
                but ultimately not necessary. Not bringing Accuracy Up can also serve to control your DPS preventing higher DMG reflection on your units.</li>
                <li>It's necessary to bring at least one source of Freeze as it's required to stop Ignis 
                from enraging at certain thresholds(More info below.) It can be any kind of Freeze source either 
                from Equipment or a Unit as long as it can freeze; the chance infliction does not matter.</li>
            </ul>

            <br />
            <br />
            <b><h2><center>Featured Enemy - First Stage</center></h2></b>
            <center><img src="/db/Units/Thumbnail/unit_thumbnail_500111113.png" alt="Degilmagna" /></center>
            <p>You fight the Fire Dragon, Degilmagna, in the first stage. There isn't anything massive about this stage other 
            than it instant killing your team if you've stayed in it for too long(25s~.) Additionally, <b>Hellfire</b> will be in effect at the start of the stage.</p>
            <ul>
                <li>Degilmagna will <b>ONLY</b> take damage from Arts/True Arts.</li>
                <li>Degilmagna is exceedingly squishy. You can defeat him in one Arts for most units.</li>
            </ul>
            <br />
            <b><h2><center>Featured Enemy - Second Stage</center></h2></b>
            <center><img src="/db/Units/Thumbnail/unit_thumbnail_501281113.png" alt="Ignis" /></center>
            <p>Normal DPS isn't too severe, though as always, Hellfire will be in effect and really mess up your unit's HP. 
            Proper mitigations with the use of Shields will help to mitigate Ignis' normal damage, though don't forget to heal your units thoroughly against Hellfire!</p>

            <br />
            <b><h2><center>Thresholds and Other Mechanics:</center></h2></b>
            <ul>
                <li>Ignis will use Arts right at the start. As always, her Arts will inflict Burn, so don't forget to pop a Status RES Up so you don't get wiped.</li>
                <li>Along with her threshold nukes, Ignis will Arts as usual on a regular interval - inflicting Burn as always if not resisted with Status RES. 
                Always remember to proc at least one whenever she does!</li>
                <li>At <b>70% HP</b> - Ignis will <b>Enrage</b>, giving herself burn. This grants her heavily increased Heal over Time and Art Generation. 
                This must be canceled by hitting her with any source of Freeze ailment. It does not have to chance proc, it just has to hit.</li>
                <li>At <b>60% HP</b> - Ignis will nuke with her Arts again. Remember to proc a Status RES again to avoid getting burnt!</li>
                <li>At <b>50% HP</b> - Ignis gains increased Art Generation. Additionally, she burns herself and enrages yet again, gaining 
                increased DMG reflection on-top of other enraged buffs above if not canceled. Cancel with Freeze source as always.</li>
                <li>At <b>40% HP</b> - Ignis fills Arts Gauge to full and uses Arts. Same deal here; get some Status RES Up.</li>
                <li>At <b>30% HP</b> - Ignis self-applies Burn and enrages one more time. Freeze to cancel again. 
                Additionally, she gains a permanent DMG Up buff at this threshold.</li>
                <li>At <b>&lt;25% HP</b> - Ignis starts using her high damage Arts, Blazing Impact on a regular interval. This still inflicts burn, 
                just hurts way more. High Damage Reduction is recommended for this.</li>
                <li>At <b>10% HP</b> - Ignis fills Arts Gauge to full and uses an empowered Blazing Impact that deals much more than normal. 
                Recommended to try cancelling this my breaking her if you lack the necessary Damage Reduction to tank it. 
                There are no further thresholds after this, so just aim to defeat Ignis.</li>
            </ul>

            <br />
            <br />

            <b><h2><center>Recommended Units</center></h2></b>
            <a href="https://www.grandsummoners.info/units/Mizuki">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102826212.png" alt="Mizuki" class="unitThumb"/>
            </a>
            <p>Mizuki's passive is a complete and specific counter to Hellfire, making the reflection more bearable to herself, 
            allowing for more reckless damage without too much worry. Additionally, her potent increase DMG on Fire Enemies and 
            innate Accuracy Up with TW makes her a unit tailor-made to combat Floor 26's Ignis.</p>
            <br />
            <br />

            <a href="https://www.grandsummoners.info/units/Rimuru%20(Human)">
                <img src="/db/Units/Thumbnail/unit_thumbnail_107156212.png" alt="Rimuru Human" class="unitThumb"/>
            </a>
            <p>Rimuru's Status RES and general team utility lets you rely less on Status RES equipment. 
            He works well in any team composition whether Mono-Water or not as long as you let him do his job.</p>
            <p><b>NOTE: Why not Feena?</b> -  Feena's heal over time is typically unable to keep up with Hellfire on her own. 
            Using a second slot for a dedicated healer to remedy this is a wasted unit slot that could have gone for better 
            team support units. Rimuru offers a diverse amount of team utility, allowing him to be slotted-in with ease without the fear of losing out on team support. 
            As such, Feena isn't a "notable" unit for the quest. Note that it can still be possible to clear with Feena, just not recommended. 
            (Especially with OP supports like Asirpa/Mako or if used in Mono-Light with Asirpa.)</p>
            <br />
            <br />

            <a href="https://www.grandsummoners.info/units/Diaz">
                <img src="/db/Units/Thumbnail/unit_thumbnail_101966212.png" alt="Diaz" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Nies">
                <img src="/db/Units/Thumbnail/unit_thumbnail_101666212.png" alt="Nies" class="unitThumb"/>
            </a>
            <p>As Mono-water teams are very prominent for this quest, both Nies and Diaz are great supporting units for such compositions - 
            the former offering highly defensive utility for the boss and the latter greatly increasing the efficacy of your units with powerful ArtGen support.</p>
            <a href="https://www.grandsummoners.info/units/Mako">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102206412.png" alt="Mako" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Asirpa">
                <img src="/db/Units/Thumbnail/unit_thumbnail_107126412.png" alt="Asirpa" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Sylphiette">
                <img src="/db/Units/Thumbnail/unit_thumbnail_107536412.png" alt="Sylphiette" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Hart">
                <img src="/db/Units/Thumbnail/unit_thumbnail_103276312.png" alt="Hart Earth" class="unitThumb"/>
            </a>
            <p>They are just annoyingly good.</p>
            <br />
            <br />

            <a href="https://www.grandsummoners.info/units/Aristela">
                <img src="/db/Units/Thumbnail/unit_thumbnail_101296212.png" alt="Aristela" class="unitThumb"/>
            </a>
            <p>With very potent heals and great slots for the quest, this is the place where Aristela truly shines. 
            An extra DEF slot allows more Status RES equips, and her potent heals will essentially keep your units at 
            full 24/7 as long as you don't overdo it. A great budget pick</p>
            <br />
            <br />

            <a href="https://www.grandsummoners.info/units/Celia%20(Light)">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102046412.png" alt="Celia Light" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Naofumi">
                <img src="/db/Units/Thumbnail/unit_thumbnail_107256411.png" alt="Naofumi" class="unitThumb"/>
            </a>
            <p>Given enough support, these two can facetank most of Ignis' normal damage, 
            most especially when abusing their Heal Slots with revive equipment like Sounding 
            Staff and Blessed Necklace giving a great windfall if things slip up.</p>
            <br />
            <br />

            <a href="https://www.grandsummoners.info/units/Norn">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102066312.png" alt="Norn" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Weaver">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102446212.png" alt="Weaver" class="unitThumb"/>
            </a>
            <p>Honorable mentions for their general aptitude at team support still making them very much viable for this quest.</p>
            <br />
            <br />

            <b><center><h3>Sample Team Compositions</h3></center></b>
            <a href="https://www.grandsummoners.info/units/Mako">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102206412.png" alt="Mako" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Mizuki">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102826212.png" alt="Mizuki" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Norn">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102066312.png" alt="Norn" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Asirpa">
                <img src="/db/Units/Thumbnail/unit_thumbnail_107126412.png" alt="Asirpa" class="unitThumb"/>
            </a> 
            (NOTE: Mira Hood HIGHLY recommended for Burn RES)
            <br />
            <br />
            <a href="https://www.grandsummoners.info/units/Fen%20(Earth)">
                <img src="/db/Units/Thumbnail/unit_thumbnail_101056311.png" alt="Fen Earth" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Aristela">
                <img src="/db/Units/Thumbnail/unit_thumbnail_101296212.png" alt="Aristela" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Priestess">
                <img src="/db/Units/Thumbnail/unit_thumbnail_107196412.png" alt="Priestess" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Mizuki">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102826212.png" alt="Mizuki" class="unitThumb"/>
            </a>
            <br />
            <br />
            <a href="https://www.grandsummoners.info/units/Rimuru%20(Human)">
                <img src="/db/Units/Thumbnail/unit_thumbnail_107156212.png" alt="Rimuru Human" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Aristela">
                <img src="/db/Units/Thumbnail/unit_thumbnail_101296212.png" alt="Aristela" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Mizuki">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102826212.png" alt="Mizuki" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Diaz">
                <img src="/db/Units/Thumbnail/unit_thumbnail_101966212.png" alt="Diaz" class="unitThumb" />
            </a>
            `
    },
    { //Floor 27
        id: 27,
        title: "Floor 27",
        article: `
            <center><h3>Overview</h3></center>
            <p>Buffed Palamicia crest without her type-killers and more emphasis on her <b>Counterattack</b> mechanic. Disease is an absolutely essential ailment to clear the floor. 
            As usual with Palamicia bosses, her high damage Arts will necessitate barrier units and high-end Defense equipment.</p>
            <br/>

            <b><h2><center>Before you begin...</center></h2></b>
            <p>Disease is paramount for this floor as Palamicia will start healing 120% of damage dealt to her at a certain point. 
            The easiest units to procure for this are either <b>Nier</b> or <b>Aesis</b>. Others units you can use are <b>Kurama</b> and <b>Alvina</b>.
            <br/>
            Other than that, there isn’t a large requirement on Defence equipment or anything else. Look out for the rest of her counterattacks and Arts and you’ll be fine.</p>

            <br/>
            <br/>

            <b><h2><center>Featured Enemy</center></h2></b>
            <center><img src="/db/Units/Thumbnail/unit_thumbnail_500651213.png" /></center>

            <br/>
            <b><h2><center>Featured Enemy</center></h2></b>
            <ul>
                <li>Counterattack</li>
                    <ul>
                        <li>Randomly, Palamicia will conduct a Counterattack stance(Noticeable visually with a large blue shield appearing.)</li>
                        <li>During these periods, she will counterattack when attacked with either a Skill or an Equipment, and will be canceled when attacked with a True Arts/Arts. </li>
                        <li>Counterattack will deal damage and inflict ailments when triggered, so some form of Cleanse would be appreciated just in-case. </li>
                    </ul>
                <li>Status Effects</li>
                    <ul>
                        <li>Ailments are randomly inflicted and can be the following: Paralysis, Freeze, Burn(Very potent), Poison(Very potent), Curse, and Seal.</li>
                    </ul>
                <li>Passives</li>
                    <ul>
                        <li>Starts the battle with a passive healing her <b>80%</b> of damage taken. Increases to <b>120%</b> at 70% HP. Healing can be reduced with the use of the <span class="buffDebuff">Disease</span> ailment - an essential requirement for the floor.</li>
                        <li>Starts the battle with a <b>Shield Unit Killer</b> passive. Significantly increases damage against Taunt-Tanks when redirecting damage to themselves. Evidently, this means no using tanks for this floor.</li>
                        <li>Randomly inflicts your units with <span class="buffDebuff">Skill CT Recovery Down.</span> Additionally, inflicts herself with <span class="buffDebuff">Status Ailment RES Down</span> randomly.</li>
                        <li>Has an <span class="buffDebuff">ArtRegen Down</span> debuff that will slow down Art/sec buffs on your units inflicted on her Arts use. This will require you to bring a good amount of ArtGen, though it isn’t too potent to offset. This debuff <b>does not</b> affect Instant ArtsGen.</li>
                    </ul>
            </ul>
            <br />
            <br/>
            <b><h2><center>Thresholds and Other Mechanics:</center></h2></b>
            <ul>
                <li>At 80% HP - Uses True Arts</li>
                    <ul>
                        <li>As usual with Palamicia Arts, it deals significant damage, but it’s not too nasty at this stage.</li>
                        <li>Additionally passed this threshold, all attacks start to inflict <span class="buffDebuff">ArtRegen Down</span>.</li>
                    </ul>
                <li>At 70% HP - Increases heal from damage taken from 80% to <b>120%</b>. 
                    <ul>
                        <li> At this stage, <span class="buffDebuff">Disease</span> is essential to continue chipping down her health.
                    </ul>
                <li>At 60% HP - Gain <span class="buffDebuff">DMG Up</span></li>
                <li>At 50% HP - Gain Arts <span class="buffDebuff">Recovery Up</span></li>
                    <ul>
                        <li>This will drastically increase the frequency of her Arts</li>
                    </ul>
                <li>At 40% HP - Gain <span class="buffDebuff">DMG Up</span> and a slight <span class="buffDebuff">Critical Rate Up</span></li>
                <li>At 30~% HP - Gains <span class="buffDebuff">Action Speed Up</span></li>
                <li>At 20% HP - Uses True Arts</li>
                    <ul>
                        <li>Gains <span class="buffDebuff">DMG Up</span>, further <span class="buffDebuff">Critical Rate Up</span>, and <span class="buffDebuff">Accuracy Up</span> during the duration of the True Arts; otherwise, similar to the True Arts used at 80% HP. Inflicts <span class="buffDebuff">Critical DMG RES Down</span>. </li>
                        <li>Due to the amount of buffs Palamicia would have at this threshold along with the temporary buffs she gets, this TA would hurt a lot.</li>
                    </ul>
                <li>Below 20% HP - No more thresholds</li>
                    <ul>
                        <li>Attacks will be ferocious with the amount of buffs she has accumulated</li>
                        <li>It would be in your best interest to clear quickly passed this</li>
                    </ul>
            </ul>
            <b><h2><center>Strategy</center></h2></b>
            <ul>
                <li>Team compositions for this floor depend on building around your Disease inflicting unit. Both sustain and ArtsGen will be a large part of your composition; the former due to her high damage output passed 20% HP, and the latter to offset the ArtsRegen Down debuff.</li>
                <li>Disease</li>
                    <ul>
                        <li>A Unit that can inflict Disease is required</li>
                        <li>Recommended units include <b>Nier</b>, <b>Aesis</b>, <b>Kurama</b>, and <b>Alvina</b>
                            <br />
                            <b>NOTE:</b> Though it’s important to note that <b>Nier</b> is rather difficult to keep alive due to her inherent low base health and defence!</li>
                    </ul>
                <li>Other Recommendations</li>
                    <ul>
                        <li>Barrier Units - Will prove the most useful in parallel with a healer. <b>Favelle</b> is an easily accessible barrier unit. Any other unit at a similar potency works just as well.</li>
                        <li>Arts Gen Units - Allows your team to repeatedly use their Arts quickly</li>
                    </ul>
            </ul>

            <br/>
            <br/>

            <b><center><h3>Sample Team Compositions</h3></center></b>
            <center>
            <a href="https://www.grandsummoners.info/units/Fen">
                <img src="/db/Units/Thumbnail/unit_thumbnail_101056311.png" alt="Fen" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Mira%20(Earth)">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102396312.png" alt="Mira Earth" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Norn">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102066312.png" alt="Norn" class="unitThumb"/>
            </a>
            <span style="font-size: 40px" > + Disease Unit</span>

            <br/>
            <br/>

            <a href="https://www.grandsummoners.info/units/Favelle">
                <img src="/db/Units/Thumbnail/unit_thumbnail_101586312.png" alt="Favelle" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Celia%20(Dark)">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102546512.png" alt="Celia Dark" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Mako">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102206412.png" alt="Mako" class="unitThumb"/>
            </a>
            <span style="font-size: 40px" > + Disease Unit</span>

            <br/>
            <br/>

            <a href="https://www.grandsummoners.info/units/Priestess">
                <img src="/db/Units/Thumbnail/unit_thumbnail_107196412.png" alt="Priestess" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Celia%20(Dark)">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102546512.png" alt="Celia Dark" class="unitThumb"/>
            </a>
            <a href="https://www.grandsummoners.info/units/Mako">
                <img src="/db/Units/Thumbnail/unit_thumbnail_102206412.png" alt="Mako" class="unitThumb"/>
            </a>
            <span style="font-size: 40px" > + Disease Unit</span>
            </center>
            <br/>
            <br/>
            <p> Achieve a sufficient amount of sustain and ArtsGen along with your Disease unit, and you’ll be fine. Any player that can reach F27 should(?!) have basic team building knowledge, so have a go yourself at building a team that can fit the bill.</p>
        `
    }
]

export function getTrialGuides() {
    return TrialGuides;
}

//Using == instead of === to match string to num
export function getTrialGuidesById(id) {
    return TrialGuides.find(
        guide => guide.id == id
    );
}
