//This file will be for Crest Boss Guides
const CrestBossGuides = [
    {
        id: 0,
        title: "Temple of Heavenly Light",
        link: "temple-of-heavenly-light",
        banner: "/db/CrestGuides/Crest_Banner_Radachne.png",
        article: `
            <center>
                <b>Denial of the Pest Princess</b> [Pro] <br />
                <img src="/db/CrestGuides/Crest_Radachne.png" />
                <br />
                BOSS: Radachne <br />

                Playable 3 times daily <br/>
                HP: 5,000,000 <br />
                Element: Light <br />
                Race: God <br />
                50% Status RES <br />
                100% Faint RES <br />
            </center><br />
            <h3><center>Mechanics</center></h3>
            <h4><u>Special Mobs</u></h4>
            Mobs randomly spawned.<br/><br/>

            <b style="color: red;">Inferno Wyrm</b>:
            <ul>
                <li>Can only be damaged by Fire DMG</li>
                <li>Heat Haze: Chance to inflict Burn. This unit dies afterwards</li>
            </ul>

            <b style="color: green;">Gaia Wyrm</b>:
            <ul>
                <li>Can only be damaged by Earth DMG</li>
                <li>Heat Haze: Chance to inflict Poison. This unit dies afterwards</li>
            </ul>

            <b style="color: blue;">Aqua Wyrm</b>:
            <ul>
                <li>Can only be damaged by Water DMG</li>
                <li>Heat Haze: Chance to inflict Freeze. This unit dies afterwards</li>
            </ul>

            <b style="color: yellow;">Gold Wyrm</b>:
            <ul>
                <li>Can only be damaged by Light DMG</li>
                <li>Heat Haze: Chance to inflict Seal. This unit dies afterwards</li>
            </ul>

            <b style="color: purple;">Violet Wyrm</b>:
            <ul>
                <li>Can only be damaged by Dark DMG</li>
                <li>Heat Haze: Chance to inflict Curse. This unit dies afterwards</li>
            </ul>
            
            <b>Big Fraid</b>
            <ul>
                <li>Mega Gigantes: Reduces Enemies' Arts by (over 200). Deals enough DMG to wipe teams without appropriate mitigation</li>
            </ul>

            <p><b>NOTE:</b> The presence of the Wyrms means you need a way to manage Status effects. In addition, the Big Fraid’s Mega Gigantes may wipe your team if it isn’t killed quickly enough.</p>

            <h4><center><u>Gimmicks</u></center></h4>
            <ul>
                <li>At the start of Battle, gain invincibility for a few seconds and a DMG barrier that increases Evasion and heals the Boss’ HP by 5000 per second while present. This occurs again when she reaches 80% and 50% HP.</li>
                <ul>
                    <li>This mechanic makes it hard to nuke her unless it is done very quickly after destroying her first barrier. In addition, the Evasion causes runs to slow down greatly unless Accuracy buffs are present - which isn’t necessary to clear, but it will drastically increase the speed of the clear.</li>
                    <li>Note: If enough DMG is dealt to her such that she reaches 30% HP before she can apply her 50% DMG barrier, she will have the barrier during Enrage. It would be hard to survive during Enrage for most teams, so take care to avoid this unless you can survive during Enrage. </li>
                </ul>
                <li>When below 30% HP, increase DMG by 120% and movement speed by an unknown magnitude.</li>
                <ul>
                    <li>Most teams will not be able to survive this phase through sustain (the main exception are teams that include Thetis). As such, it is recommended to kill her as quickly as possible after she reaches Enrage.</li>
                </ul>
            </ul>

            <h4><center><u>Normal Attacks</u></center></h4>
            <ul>
                <li>Spear gains a dark aura, and Radachne stabs enemies with it. Chance to inflict Curse. During this Attack, increase DMG to Light Enemies by 200%.</li>
                <ul>
                    <li>The Curse this inflicts typically lasts for a very short period of time (though it shouldn’t matter if you have status management units in your team anyway).</li>
                    <li>This does discourage the use of Light Units, though.</li>
                </ul>
                <li>Spear gains a light aura, and Radachne stabs enemies with it. Chance to inflict Paralysis. During this Attack, increase DMG to Dark Enemies by 200%.</li>
                <ul>
                    <li>Same as above, except for Paralysis and Dark Units.</li>
                </ul>
                <li>Radachne slams the butt of her spear into the ground. Chance to inflict Burn. During this Attack, increase DMG to Earth Enemies by 200%.</li>
                <ul>
                    <li>Same as above, except for Burn and Earth Units.</li>
                </ul>
            </ul>

            <center>
                <h4><u>Arts</u></h4>
                <p>When Radachne reaches 5 orbs, she will activate one of two Arts written below, and also summon two random Wyrms.</p>
            </center>

            <ul>
                <li><b>Fallen Light</b> - Chance to inflict Paralysis. During this Arts, increase DMG to Dark Enemies by 200%.</li>
                <ul>
                    <li>Paralysis effect typically lasts only for the duration of her Arts (though, again, it shouldn’t matter if you have status management units).</li>
                    <li>This also discourages the usage of Dark units.</li>
                </ul>
                <li><b>Heaven's Shadow Needle "Rinne"</b> - Chance to inflict Curse. During this Arts, increase DMG to Light Enemies by 200%.</li>
                <ul>
                    <li>Same as above, but for Curse and Light units instead.</li>
                </ul>
            </ul>

            <h3><center>Strategy</center></h3>
            <p><center>
                The boss’ Element-killers makes the use of the targeted elements very difficult to manage without taunt-tanks to control damage. 
                Additionally, pesky ailments that require a form of cleanse or preferably Status RES leave less flexibility to your team most especially 
                when your unit box is already lacking or blocked by her element-killers. Non-light/dark taunt-tanks essentially make this crest extremely 
                easy as they’re easily capable of sucking up all the ailments and making the boss’ Element-killers redundant. Accuracy Up is also recommended 
                for the boss so as to clear it quicker, though not heavily needed.
            </p></center>

            <b><h4><u>Recommended Units</u></h4></b>
            <ul>
                <li>
                    <b>Thetis/Gerald</b> 
                    <p>Makes the quest very brain dead to deal with as just having them on the team completely negates all her scary 
                    gimmicks. In the case of Gerald who doesn’t have innate Status RES unlike Thetis(with TW), 
                    some sort of cleanse utility will still be necessary to wipe ailments off him.</p>
                </li>
                <li>
                    <b>Rimuru/Aristela &gt; Feena</b>
                    <p>Status RES completely negates the irritating ailments that the boss inflicts. 
                    Feena will be difficult to use without massive amounts of sustain or a taunt-tank to redirect 
                    damage away from her due to being Light-element. Normal cleanse units such as Aristela are more 
                    than capable of dealing with the boss’ ailments as long as you’re attentive and time her 
                    Arts properly(As Aristela’s Arts does have a delay making timing much easier!)</p>
                </li>
                <li>
                    <b>Juno/Simon/Vox/Sonije (Accuracy Up units and DMG)</b>
                    <p>Juno's one of, if not, the best unit for this stage, able to dish out noticeable damage with her Accuracy passive, 
                    while generating an impressive amount of Arts for the team, with her HP loss as a slight drawback. Meanwhile, 
                    Simon is a pure DPS with Accuracy buffs on his Phantom Bullet. Vox’s innate Accuracy Up to all units, and as usual 
                    his own DMG easily makes quick work of the boss. Sonije’s Accuracy Up as well as her role as an ArtGen fills a similar 
                    role, but as always with Light units, a taunt-tank or lots of sustain is needed to keep her health up consistently.</p>
                </li>
        `,
        author: "ebouliben#1234, Jeffers#7056"
    },
    {
        id: 1,
        title: "Shrine of Oblivion",
        link: "shrine-of-oblivion",
        banner: "/db/CrestGuides/Crest_Banner_Oldeus.png",
        article: `
            <center>
                <b>The Reaper's Smile</b> [Pro] <br />
                <img src="/db/CrestGuides/Crest_Oldeus.png" />
                <br/>
                BOSS: Oldeus <br />

                <b>Appears on Day: Monday [PST]</b> <br/>
                HP: 3,000,000 <br />
                Element: Dark <br />
                Race: Demon <br />
                100% RES to all status ailments<br />
            </center><br />
            <h3><center>Mechanics</center></h3>
            <h4><center><u>Gimmicks</u></center></h4>
            <ul>
                <li>Increase DMG to Light Enemies by 400%.</li>
                <ul>
                    <li>This makes sustaining using Light units in this Crest Boss very dangerous.</li>
                </ul>
                <li>Negates Dark DMG (Dark RES is set at a very high value).</li>
                <ul>
                    <li>This means that Dark-element units would be fairly useless damage wise in this Crest Boss, though they wouldn’t die as quickly as Light units.</li>
                </ul>
                <li>Evades all DMG until Broken (Evasion is set at a very high value).</li>
                <ul>
                    <li>This forces players to bring some way of breaking the boss quickly or surviving until they can fully chip down the break bar.</li>
                </ul>
            </ul>

            <h4><center><u>Normal Attacks</u></center></h4>
            <ul>
                <li>Swings his scythe upwards, then downwards. Removes Barriers. If Enemy had their Barrier removed, chance to inflict Faint on that Enemy.</li>
                <ul>
                    <li>This makes units that generate Barriers redundant for this stage.</li>
                </ul>
                <li>Swings his scythe downwards. Removes Barriers.</li>
                <ul>
                    <li>Same as above.</li>
                </ul>
                <li>Releases a purple mist. Chance to inflict Poison. Removes Barriers.</li>
                <ul>
                    <li>The poison makes status ailment management more valuable; otherwise, same as above.</li>
                </ul>
            </ul>

            <center><h4><u>Arts</u></h4></center>

            <ul>
                <li><b>Sengoku Resonance</b> - Chance to inflict Poison. Removes Barriers.</li>
                <ul>
                    <li>It is in your best interest to cleanse the poison, as it would make your team far easier to wipe.</li>
                </ul>
                <li><b>Violent Shaking</b> - Faints Enemies. Sets Enemy with the highest current HP to 1 HP (Note: This ignores taunts and all types of DMG RES effects).</li>
                <ul>
                    <li>Burst healing is recommended to get the 1 HP unit to safe levels of HP before the boss can deal damage to kill it.</li>
                </ul>
            </ul>

            <h3><center>Strategy</center></h3>
            <p><center>
                The innate mechanics of the boss makes using Light-element units very difficult, while Dark-element units are pure deadweight.
                If it’s simply to clear, a team of units focused on status management and sustain should clear with no trouble,
                though this boss is very easy to nuke compared to the other crest bosses.
            </p></center>

            <b><h4><u>Recommended Units</u></h4></b>
            <ul>
                <li>
                    <b>Est &gt;&gt; Duke &gt; Wargul</b> 
                    <p>If you’re looking to nuke this boss, you’d have to break-nuke it since it evades DMG until it is Broken.
                    As such, Est and Duke would be ideal considering their passives can halve the Boss’ Break Bar.
                    That said, Duke and Wargul are far from ideal as they cannot do any damage themselves, though they do provide significant DMG buffs.
                    As such, most break-nuke compositions for this boss feature Est paired with other nukers and nuke supports.</p>
                </li>
                <li>
                    <b>Any unit with Status Cleanse and/or burst healing</b>
                    <p>If you're looking to sustain through the fight, it’s relatively simple to sustain through the boss’ mechanics 
                    with good usage of status management and healing from units such as Rimuru and Aristela.</p>
                </li>
        `,
        author: "ebouliben#1234, Jeffers#7056"
    },
    {
        id: 2,
        title: "Shrine of the Burning Chains",
        link: "shrine-of-the-burning-chains",
        banner: "/db/CrestGuides/Crest_Banner_Ifrit.png",
        article: `
            <center>
                <b>The Raging Lord of All Flames</b> [Pro] <br />
                <img src="/db/CrestGuides/Crest_Ifrit.png" />
                <br/>
                BOSS: Ifrit <br />

                <b>Appears on Day: Tuesday [PST]</b> <br/>
                HP: 7,000,000 <br />
                Element: Fire <br />
                Race: God <br />
                150% Paralysis RES <br />
                100% Poison, Seal, Faint RES <br />
                70% Freeze RES <br />
                50% Blind RES <br />
            </center><br />
            <h3><center>Mechanics</center></h3>
            <h4><center><u>Gimmicks</u></center></h4>
            <ul>
                <li>Increase DMG to Machine and Spirit Enemies by 200%.</li>
                <ul>
                    <li>This means that Machine/Spirit-type units will take three times the DMG taken compared to non-Machine/Spirit-type units. As such, it is recommended to avoid using Machine/Spirit-type units.</li>
                </ul>
                <li>At the start of battle, reduce Enemies' HP to 15% of their current HP, and inflict Burn on self and Enemies.</li>
                <ul>
                    <li>Similar to Wilkes’s initial nuke. This move is extremely dangerous as Ifrit’s upcoming attacks & burn damage can potentially wipe your team if approached without an appropriate defensive countermeasure. Burst healing is recommended to get your HP back to safe levels.</li>
                </ul>
                <li>All attacks have a chance to inflict Burn.</li>
                <ul>
                    <li>Units that are able to manage status ailments are invaluable in preventing the Burn from inflicting too much damage onto the team.</li>
                </ul>
                <li>Reduce Water RES by 50%. While burning, increase Water RES by 100% and Movement Speed by an unknown magnitude.</li>
                <ul>
                    <li>The increase in Movement Speed while burning is undesirable, so units capable of inflicting Freeze that would cleanse the Burn on Ifrit are very much desirable. In addition, Water DPS units are especially useful in this stage if the Burn is dealt with, but less useful than other options if the Burn is not dealt with.</li>
                </ul>
                <li>Increase Evasion by ~20% to ~30%.</li>
                <ul>
                    <li>This isn’t a very potent Evasion buff, though it would still reduce your DPS by a bit.</li>
                </ul>
            </ul>

            <h4><center><u>Normal Attacks</u></center></h4>
            <ul>
                <li>Swings chain upwards, then slams it downwards. Reduces Enemies' Healing Taken by 80%.</li>
                <ul>
                    <li>This means that healing is quite ineffective for this Crest Boss; Pseudo-healing in the form of All Stats/HP Up would be more desirable as it is not affected by this debuff.</li>
                </ul>
                <li>Dives into Enemies. Chance to inflict Faint.</li>
                <ul>
                    <li>A bit annoying, as it may interrupt a units’ Arts. The duration is short, though, so there shouldn’t be much impact.</li>
                </ul>
                <li>Does an uppercut, and then slams the ground with his fist. Reduces Enemies' Burn RES.
                </li>
                <ul>
                    <li>The reduction in Burn RES means that units could get burned even with Feena's or Rimuru’s Status RES buff, and also that the Burn inflicted would last longer. This means that consistent cleansing of Burn would be ideal.</li>
                </ul>
            </ul>

            <center><h4><u>Arts</u></h4></center>

            <ul>
                <li><b>Latios Chain</b> - No special effects.</li>
                <ul>
                    <li>Well… there aren’t any special effects. Just survive through it.</li>
                </ul>
                <li><b>Loggis Rage</b> - Burns self (Note: Only used if Ifrit is not Burning).</li>
                <ul>
                    <li>Again, it’s recommended to have a unit that is capable of inflicting Freeze to cleanse the Boss’ Burn, to prevent the Water RES and Movement Speed buffs that it’d get.</li>
                </ul>
                <li><b>Vulkan Knuckle</b> - Reduces Enemies' Fire RES (Note: Only used if Ifrit is at Low HP).</li>
                <ul>
                    <li>A fairly powerful nuke that can easily wipe your team. Make sure to prepare for it with enough damage mitigation, freeze the boss before he flies up, or simply kill the boss before it can use this.</li>
                </ul>
            </ul>

            <h3><center>Strategy</center></h3>
            <p><center>
            Ifrit Crest isn’t that much different from his Giant Boss counterpart. Freeze will prove paramount to cleanse 
            his self-burn so as to reduce his high damage output from increased movement speed and to reduce the Water RES 
            he gains from it. Strong sustain and especially some form of cleanse is highly recommended, most especially against 
            <b>Vulkan Knuckle</b> if you’re unable to defeat Ifrit before he uses it. 
            </p></center>

            <b><h4><u>Recommended Units</u></h4></b>
            <ul>
                <li>
                    <b>Any consistent Freeze unit (Selia/Joker Selia >>> Alvina, etc.)</b> 
                    <p>As mentioned, cleansing Ifrit’s self-burn will ease stress on your team, allowing your Water Units
                    to deal much more damage than before. Selia/Joker Selia is the best unit for the job as she is able to 
                    consistently freeze, whilst also cleansing Burn for all allies. It’s also important to remember that Ifrit 
                    has a modestly high Freeze RES, so being prepared for a failed Freeze proc is essential through a properly 
                    made team composition.</p>
                </li>
                <li>
                    <b>Vox/Vernoica/Mizuki</b>
                    <p>Great Water DPS options for dealing with Ifrit. Vox provides teamwide crit whilst dealing considerable 
                    damage on his own, while Veronica also serves as a very competent DPS with the slight drawback of her increased 
                    damage taken. Mizuki is also a decent DPS option due to Ifrit being a Fire elemental boss.</p>
                </li>
                <li>
                    <b>Mako/Hart/Asirpa/Rimuru &gt; Nies</b>
                    <p>The units listed are great healers for this stage. Additionally, they are able to provide Arts alongside 
                    healing to all allies. Having 1-2 of them would ensure a smooth run. Do note that Nies’ Art Gen only applies 
                    to Water units, while the other units listed apply regardless of element.</p>
                </li>
                <li>
                <p><b><i><u>Note:</b></i></u> As long as you have a proper unit that can consistently inflict Freeze, any kind of team works provided 
                you still supply them with the minimal amount of sustain.</p>
                </li>
        `,
        author: "ebouliben#1234, Jeffers#7056"
    },
    {
        id: 3,
        title: "Shrine of Crimson Sea",
        link: "shrine-of-crimson-sea",
        banner: "/db/CrestGuides/Crest_Banner_Ignis.png",
        article: `
            <center>
                <b>Condemning Blaze</b> [Extreme] <br />
                <img src="/db/CrestGuides/Crest_Ignis.png" />
                <br/>
                BOSS: Ignis <br />

                <b>Appears on Day: Tuesday [PST]</b> <br/>
                HP: 3,000,000 <br />
                Element: Fire <br />
                Race: Spirit <br />
                300% Freeze, Burn RES <br />
                100% Seal RES <br />
                80% Poison RES <br />
                50% Paralysis RES <br />
                30% Blind/Disease RES <br />
            </center><br />
            <h3><center>Mechanics</center></h3>
            <h4><u>Special Mobs</u></h4>
            <b>Grovogg</b>: Chance to inflict Burn.
            <ul>
                <li>Fairly insignificant HP loss over time, can be outhealed easily. However, do note that the pre-boss mobs are also fairly tanky.</li>
            </ul>
            <h4><center><u>Gimmicks</u></center></h4>
            <ul>
                <li><b>Area Effect:</b> Nerfed Hellfire Effect.</li>
                <ul>
                    <li>This effect will reflect 2% of all DMG dealt back to the unit, bypassing all damage reduction, redirection and shields. In short, it is fixed damage which scales according to the magnitude of damage. In addition, all units lose 10% of their MAX HP every 5 seconds.</li>
                    <li>(<b>NOTE:</b> This effect is active throughout the battle, even before the boss wave)</li>
                </ul>
                <li>Negates DMG & Break from Fire Units.</li>
                <ul>
                    <li>Pretty self-explanatory. Avoid bringing along Fire units as they will not contribute to the team.</li>
                </ul>
                <li>Ignores DEF.</li>
                <ul>
                    <li>Avoid relying on DEF buffs. Instead, use DMG Resistance equips as they will reduce the damage output from Ignis.</li>
                </ul>
                <li>After 30% HP threshold, gain HP Auto-Recovery & DMG UP</li>
                <ul>
                    <li>The HP auto-recovery isn’t very significant and can be easily out-damaged. Do try to finish Ignis off as quickly as possible after this point as stretching the fight out will make the run harder.</li>
                </ul>
            </ul>

            <h4><center><u>Normal Attacks</u></center></h4>
            <ul>
                <li>Fires a barrage of lasers. Inficts Arts Gauge Down debuff for 4s.</li>
                <ul>
                    <li>Fairly insignificant as duration is very short, capable art gen units should render this debuff negligible.</li>
                </ul>
                <li>Slam. Inflicts Break Power Down on Enemies.</li>
                <ul>
                    <li>Fairly insignificant as Break isn’t needed.</li>
                </ul>
                <li>Slams the ground and moves forward. Chance to inflict Faint.</li>
                <ul>
                    <li>Nothing too significant as the Faint duration only lasts a few seconds. However, be aware that units may be cancelled out of their Arts by Faint.</li>
                </ul>
            </ul>

            <center><h4><u>Arts</u></h4></center>

            <ul>
                <li><b>Inferno Blast (MAG)</b> - Deals Moderate DMG. Inflicts Fire RES Down & Lights up an orb. After 3 orbs are lit, the next Arts used will be <b>Blazing Impact</b>.</li>
                <ul>
                    <li>Well… there aren’t any special effects. Just survive through it.</li>
                </ul>
                <li><b>Blazing Impact (MAG).</b> - Deals Massive DMG. Gains 100% Critical Rate UP & DMG UP. Resets lit orbs afterwards. <b>Used at the start of battle</b>.</li>
                <ul>
                    <li>Very powerful nuke, you will <b>need</b> some form of DMG RES to survive. Do keep in mind there is a wind up before Ignis’ slam that deals damage.</li>
                </ul>
            </ul>

            <h3><center>Strategy</center></h3>
            <p><center>
                This crest palace is not recommended for newer players due to its annoying gimmicks. Due to the Hellfire Effect, 
                lifesteal is important. Equips such as the true and farmable versions of Exceed Zechs and Goblin Slayer Dagger 
                have lifesteal passives which can be taken advantage of. A general sustain team would generally revolve around a 
                DPS with lifesteal, art gen units, and a competent healer. Additionally, bring decent DMG RES equipment such as 
                Little Red Riding Mira, True Flambardo, Ganan’s Sandals, etc. or a competent tank to survive her initial nuke.
            </p></center>
            <p><center>
                As for nuke comps, specific teams will not be included due to the vast amount of them. Instead, Duran’s mechanics 
                will be covered to elaborate on his unique kit as most nukes are built around him.
            </p></center>
            <b><h4><u>Recommended Units</u></h4></b>
            <ul>
                <li>
                    <b>Duran</b> (For Nukes) 
                    <p>Used in the majority of Ignis crest nukes, there is a reason why he is the undisputed DPS option for this 
                    crest palace. Duran’s kit centers around reflection. As Ignis always starts with a very powerful nuke, Duran 
                    can reflect that nuke back at her, essentially taking out all of her HP in the blink of an eye. The easiest 
                    way to take advantage of him is to use his Normal Arts on wave 2, kill the mobs as quickly as possible, then 
                    use his True Arts on wave 3. Duran’s reflect on both his Normal and True Arts will stack with each other, 
                    resulting in massive reflected damage. Do note, Duran would require 300 Arts to pull this off. Lifesteal is 
                    not required as Duran can reflect Ignis’ damage before dying. <i>tl;dr: 300 Arts required, Duran NA on wave 2, 
                    followed by TA on wave 3.</i>
                    </p>
                </li>
                <li>
                    <b>Miranda &gt; Gerald</b>
                    <p>Running a tank can be risky due to the initial slam from Ignis. However, Miranda’s passive 50% MAG RES 
                    helps tank the hit relatively easily with the help of her TW. Gerald can also be used as a substitute with 
                    his unique passive, allowing him to avoid death from the initial slam. However, he might have trouble taunting 
                    DMG from Ignis after that point without DMG RES help from other units.</p>
                </li>
                <li>
                    <b>Luahn/Veronica/Mizuki</b>
                    <p>These units are great DPS options for this crest palace. Luahn has the ability to hold Exceed Zechs for passive 
                    lifesteal, as well as inflicting Bleed stacks to not only increase his DMG output, but also gain more lifesteal. 
                    Veronica also has the ability to hold Exceed Zechs and/or Goblin Slayer Dagger for passive lifesteal, and deals great 
                    damage. Lastly, Mizuki has passive lifesteal during Third Eye and his unique passive also allows him to deal 
                    considerable damage towards Fire enemies such as Ignis.</p>
                </li>
                <li>
                    <b>Asirpa/Mako/Priestess/Hart/Rimuru/Aristela</b>
                    <p>Great healers to bring as they do not deal enough damage or have lifesteal to put them at risk of killing themselves 
                    due to reflection gimmick. Furthermore, with the exception of Aristela, these units also act as art genners, fulfilling 
                    2 key roles.</p>
                </li>
        `,
        author: "ebouliben#1234, Jeffers#7056"
    },
    {
        id: 4,
        title: "Shrine of the Azul Knight",
        link: "shrine-of-the-azul-knight",
        banner: "/db/CrestGuides/Crest_Banner_Palamicia.png",
        article: `
            <center>
                <b>The Solitude Silent Divine</b> [PRO] <br />
                <img src="/db/CrestGuides/Crest_Palamicia.png" />
                <br/>
                BOSS: Palamicia <br />

                <b>Appears on Day: Wednesday [PST]</b> <br/>
                HP: 4,000,000 <br />
                Element: Water <br />
                Race: God <br />
                100% Seal, Faint, Freeze, Burn RES <br />
                60% Paralysis RES <br />
                30% Blind RES <br />
                20% Poison RES <br />
                <b style="color: red;">Over 700% Critical Resistance</b> (Critical Resistance is set at a very high value)
            </center><br />
            <h3><center>Mechanics</center></h3>
            <h4><center><u>Gimmicks</u></center></h4>
            <ul>
                <li>Increase DMG to Human/God-type Enemies by 190%.</li>
                <ul>
                    <li>This means that Human/God-type units will take nearly three times the DMG taken by non-Human/God-type units. As such, it is recommended to avoid using Human/God-type units.</li>
                </ul>
                <li>From the start of the Battle until first activation of her Arts, heal own HP by 80% of DMG taken.</li>
                <ul>
                    <li>This mechanic makes her extremely hard to nuke before she Arts you at least once. Inflicting Disease on Palamicia will make it much easier, but it’ll still be extremely hard.</li>
                </ul>
                <li>Each Arts increases her HoT (heal over time) by 5000 (up to 30000).</li>
                <ul>
                    <li>This mechanic prolongs the fight a little bit. It shouldn’t be too hard to outdamage this healing.</li>
                </ul>
            </ul>

            <h4><center><u>Normal Attacks</u></center></h4>
            <ul>
                <li>Chance to inflict Skill CT REC debuff (Stackable).</li>
                <ul>
                    <li>Usually not that important as most Units’ Skills aren’t that relevant.</li>
                </ul>
            </ul>
            <h4><center><u>Counterattacks</u></center></h4>
            <p><i>When Palamicia enters one of two Stances, damaging her with Skills or Equipment will trigger its Counterattack. Damaging her with Arts or True Arts will dispel the Stance without triggering the Counterattack.</i></p>
            <ul>
                <li>Heavenly Water Stance (Counterattack: Heavenly Aqua Slash). Decrease Enemies ATK & DEF (Stackable, magnitude unknown).</li>
                <ul>
                    <li>The debuffs don’t affect most teams that significantly, though the DEF debuff may impact survivability a bit.</li>
                </ul>
                <li>Protective Water Stance (Counterattack: Heavenly Aqua Barrier). Decrease Enemies’ Accuracy. Reduce Enemies' Arts by 100.</li>
                <ul>
                    <li>While the Accuracy debuff is mostly trivial, what is important here is the loss of 100 Arts on all Allies hit by this counterattack. That’s a lot of Arts lost, which can make the difference between survival and death. Avoid triggering this as much as possible.</li>
                </ul>
            </ul>

            <center><h4><u>Arts</u></h4></center>

            <ul>
                <li><b>Divine Silent Sword "Saints”</b>. Decrease Enemies' DMG RES and Action Speed (Magnitude unknown). Removes Barriers. Only used when above 50% HP</li>
                <ul>
                    <li>A reduction in DMG RES makes this Arts hurt a lot. Additionally, you won’t be able to use barriers to mitigate her Arts, making tanks like Thetis much harder to play.</li>
                </ul>
                <li><b>Divine Silent Sword "Silent Finisher"</b>. Faints enemies. Removes barriers. Only used when below 50% HP</li>
                <ul>
                    <li>Deals less DMG as compared to her other Arts. While this does not apply any reduction in DMG RES, the Faint (which will last for the duration of the Arts) means that you won’t be able to heal during the duration of this Arts. Make sure you’re at full health before she activates this. Again, her Arts removes barriers, so tanks like Thetis are much harder to play.</li>
                </ul>
            </ul>

            <h3><center>Strategy</center></h3>
            <p><center>
                This Crest Palace essentially prohibits the use of Human/God units without the use of unconventional methods. As a 
                lot of very strong supports are of Human type, this may severely limit the amount of options the average player could 
                bring. Other than that, it’s only her high self-heal and immense damage output you have to deal with, arguably making 
                it the most straightforward Crest Palace as countering her Unit-Type Killers isn’t that hard.
            </p></center>
            <b><h4><u>Recommended Units</u></h4></b>
            <ul>
                <li>
                    <b>Juno &gt; Hart</b>
                    <p>Juno is by far the best unit to bring into Palamicia crest. Providing an impressive 7 arts/s to all allies after 
                    entering Demonic True Eclipse, she is able to consistently pump out arts. Furthermore, she does noticeable damage 
                    as well, fulfilling 2 key roles. Hart, although Human, can also be used with additional support. Due to Palamicia 
                    dealing additional damage to Humans, he would require DMG resistance from other allies such as Rem, Sanstone, 
                    Favelle, Ram, etc. With adequate support, he can also provide the team with a huge amount of arts, whilst dealing 
                    noticeable damage too.</i>
                    </p>
                </li>
                <li>
                    <b>Any Non-Human/God Art gen unit (Sakura Miku, Rimuru, Rosetta, etc.)</b>
                    <p>Pretty self-explanatory, as most support units are Humans, the units listed above are great counters to Palamicia’s 
                    Human & God Killer. Just make sure to not bring art gen units which don’t stack together.</p>
                </li>
                <li>
                    <b>Parlot/Favelle/Ram/Rem</b>
                    <p>The above listed units are great units to reduce Palamicia’s damage towards the team. Do consider using at least one 
                    of them if your team is taking too much damage.</p>
                </li>
                <li>
                    <b>Melia/Aqua Melia</b>
                    <p>The use of these two’s ability to Timestop with their Arts offers a rather cheesy way of countering her completely. 
                    As evident, being able to stop her from moving means she can hardly hit you, giving ample time to heal and deal damage 
                    whenever she gets a cheeky hit off in-between Arts uses. This also allows the use of any Human/God type units which may 
                    make your life easier knowing you can slot them in. This composition isn’t without its need for high support. Being able 
                    to spam Melia/Aqua Melia’s Arts requires very high ArtsGen which players may not have. Getting hit by her high-damage Arts 
                    on a Human/God type unit if you’ve slipped on Timestop may kill them instantly without a Blind ailment proc to lessen the 
                    damage.</p>
                </li>
                <li>
                    <b>Any kind of consistent Blind unit (Wargul, Dark Melia, Dark Fen, etc)</b>
                    <p>Due to Palamicia’s tremendous damage even on non-Human/God type units, abusing the use of the Blind ailment to cripple 
                    her damage output would prove extremely helpful given it’s proc’d consistently.</p>
                </li>
        `,
        author: "ebouliben#1234, Jeffers#7056"
    },
    {
        id: 5,
        title: "Shrine of Diamond Dust",
        link: "shrine-of-diamond-dust",
        banner: "/db/CrestGuides/Crest_Banner_Freydal.png",
        article: `
            <center>
                <b>Subzero Stormraptor</b> [EXTREME] <br />
                <img src="/db/CrestGuides/Crest_Freydal.png" />
                <br/>
                BOSS: Freydal <br />

                <b>Appears on Day: Wednesday [PST]</b> <br/>
                HP: 5,000,000 <br />
                Element: Water <br />
                Race: Beast <br />
                50% Resistance to Blind <br />
                1000% Resistance to Paralysis/Faint/Seal/Freeze <br />
            </center><br />
            <h4><center><u>Gimmicks</u></center></h4>
            <ul>
                <li><b>Area Effect</b>: Icicle Cage - Reduce all Stats by 30%. Reset Skill gauge and reduce Skill CT Speed by 80% every 10s.</li>
                <ul>
                    <li>The area effect essentially renders all unit skills useless as they will not be able to refresh in time. Furthermore, the 30% Stats DOWN debuff applied throughout leave most units at 6-7k HP.</li>
                </ul>
                <li>ATK & CRI DMG UP</li>
                <ul>
                    <li>Self-explanatory, Freydal will hit harder due to these buffs, which it gains at the start of the fight.</li>
                </ul>
                <li><b>Storm Mode</b>: - Evasion Rate UP & Break Negated, cancelled when Bar is broken by status ailment DMG</li>
                <ul>
                    <li>It is recommended to reduce Freydal’s Evasion by ~60% or increase unit(s)’ Accuracy rate by ~60%. </li>
                    <li>Alternatively, running a Poison/Burn inflictor will help damage Freydal’s bar. After its bar is broken, Freydal will lose its evasion buffs.</li>
                    <li><b>NOTE:</b>  Freydal will re-enter into Storm Mode after using Blau Vortex</li>
                </ul>
                <li>At 70% HP threshold, gains Action Speed UP & immediately uses a random Arts</li>
                <ul>
                    <li>Self-explanatory, Freydal will attack faster past this point. Do be prepared for one of its 3 Arts as well.</li>
                </ul>
                <li>After 50% HP threshold, enter <b>Ultra Storm Mode</b> Evasion Rate UP & Break Negated, cancelled when Bar is broken by status ailment DMG</li>
                <ul>
                    <li>Ultra Storm Mode is a stronger version of Storm Mode. </li>
                    <li>Units will require &gt;100% Accuracy buff to have a chance at landing a hit on Freydal past this point. </li>
                    <li>Running a Poison/Burn inflictor will still be able to damage Freydal’s bar, causing Freydal to lose its Evasion buffs after its bar is broken.</li>
                    <li><b>NOTE:</b> Freydal will re-enter into Ultra Storm Mode after using Blau Vortex
                </ul>
                <li>At 40% HP threshold, gains DMG UP buff, inflicts DMG RES DOWN debuff & immediately uses a random Arts</li>
                <ul>
                    <li>After this point, do not try to stall the fight longer than needed. The DMG UP buff gained by Freydal paired with the DMG RES debuff inflicted will cause units to take noticeable increased DMG. As such, its random Arts at this point will also be stronger than before, so make sure to be prepared.</li>
                </ul>
                <li>At 20% HP threshold, fills own Arts gauge at double the speed</li>
                <ul>
                    <li>Self-explanatory, Freydal now fills 2 orbs at a time.</li>
                </ul>
            </ul>

            <h4><center><u>Normal Attacks</u></center></h4>
            <b>Used during Storm/Ultra Strom Mode:</b>
            <ul>
                <li>Dives down using claws - Chance to Poison enemies</li>
                <ul>
                    <li>Coupled with the unique area effect reducing all allies’ Stats by 30%, leaving Poison DMG unchecked without adequate Healing will be very disastrous as the run progresses. As such, it is highly recommended to counter Freydal’s Poison with some form of healing.</li>
                </ul>
                <li>Flaps wings & fires ice projectiles - Chance to Freeze enemies</li>
                <ul>
                    <li>Although its Freeze only lasts for a few seconds, be wary that frozen units are unable to use any skills, arts or equipment.</li>
                </ul>
            </ul>
            <b>Used while not in Storm/Ultra Strom Mode:</b>
            <ul>
                <li>Howl - For 8s, Reduce Enemies' Evasion Rate</li>
                <ul>
                    <li>It is only used before Freydal re-enters into Storm/Ultra Storm Mode. It does moderate single-hit DMG and can be lethal, especially right after its hard-hitting Blau Vortex Arts.</li>
                </ul>
                <li>Peck - Gains lifesteal for a few seconds</li>
                <ul>
                    <li>Deals insignificant damage, HP gained is also quite negligible.</li>
                </ul>
                <li>Scream - For 4s, ignore enemies' DEF</li>
                <ul>
                    <li>Deals insignificant damage.</li>
                </ul>
                <li>Stomp - Chance to Faint enemies</li>
                <ul>
                    <li>Deals insignificant damage.</li>
                </ul>
            </ul>

            <center><h4><u>Arts</u></h4></center>

            <ul>
                <li><b>Raging Blizzard (PHY)</b> - Becomes invulnerable for a few seconds, disappears, and performs a dive attack</li>
                <ul>
                    <li>Deals moderate DMG. Nothing special about this Arts, besides the DMG dealt.</li>
                </ul>
                <li><b>Dart Wing (PHY)</b> - Chance to Poison enemies</li>
                <ul>
                    <li>Deals moderate DMG. Do note that this Poison is able to stack with the Poison inflicted from one of Freydal’s above mentioned normal attacks as well.</li>
                </ul>
                <li><b>Blau Vortex (MAG)</b> - Increases own CRI rate by 100% for the duration of this Arts, chance to Freeze at the end</li>
                <ul>
                    <li>Deals heavy DMG. Make sure to be prepared with some form of DMG RES and/or healing as the Freeze inflicted after might cause issues.</li>
                    <li>Additionally, Freydal will perform its Howl move after this Arts. From testing, this Arts will <b>always</b> be used when Freydal is out of Storm/Ultra Storm Mode.</li>
                </ul>
            </ul>

            <h3><center>Strategy</center></h3>
            <p><center>
            This crest boss is NOT recommended for newer players. Being one of the hardest currently available crest bosses in Global, 
            it requires a well developed unit and equipment box. A general tip would be to either use Accuracy buffs/Evasion debuffs 
            to counter Freydal’s high evasion or use a Burn/Poison unit to slowly chip away at its bar.
            Nuke compositions will not be detailed here due to the high requirements needed.
            </p></center>
            <b><h4><u>Recommended Units</u></h4></b>
            <ul>
                <li>
                    <b>Miranda/Thetis</b>
                    <p>The best tanks for this stage if you decide to run one. 
                    With Miranda’s MAG RES passive, it allows her to tank Freydal’s Blau 
                    Vortex Arts much easier. Additionally, with her TW equipped, she gains 
                    passive 100% Freeze RES, allowing her to be unaffected by Freydal’s Freeze. 
                    On the other hand, Thetis is also a great option. With his TW equipped, 
                    he also gains passive 100% Freeze RES, along with the added benefit of 
                    being able to cleanse Poison from himself using his TA. His only slight 
                    downside would be the extra Arts needed to get him into Magia Drive, 
                    however this can be easily managed with proper equipment.</i>
                    </p>
                </li>
                <li>
                    <b>Hart/Mako/Asirpa/Cestina &gt; Sakura Mira</b>
                    <p>These units are great ArtGen which also help provide safety to the team in various ways. 
                    Hart and Mako both have great ArtGen capabilities, while being able to provide consistent 
                    Healing over time to the team, with Mako having the added benefit of boosting teamwide DMG. 
                    Asirpa functions similarly to the earlier two, but also provides a nice DEF boost for 
                    extra safety. Cestina is able to provide great ArtGen, while having a 5☆ DEF slot and 
                    being able to put up a barrier for the team. Lastly, Sakura Mira also works fine, 
                    although she contributes by providing Healing over time and a barrier instead of ArtGen.</p>
                </li>
                <li>
                    <b>Juno &gt;&gt;&gt; Shion </b>
                    <p>As usual, Juno is the queen for this stage, gaining a whopping 100% 
                    Accuracy UP after entering Demonic True Eclipse. To add on, she is also 
                    able to generate a considerable amount of Arts for the team as long as she 
                    has sufficient support to counteract her HP drain over time. Shion, on the 
                    other hand, also gains 100% Accuracy UP on her TA. However, she is a pure DPS, 
                    and does not help generate Arts for the team unlike Juno, which makes her a much 
                    less desirable option. DO NOTE that additional Accuracy buffs and/or Evasion 
                    debuffs are needed to damage Freydal after its 50% threshold.</p>
                </li>
                <li>
                    <b>Victoire/Zeela</b>
                    <p>When running a DPS without enough innate Accuracy, additional Accuracy buffs/Evasion 
                    debuffs will be needed to damage Freydal past 50% HP. Considering the absence of equipment 
                    and/or units with teamwide Accuracy UP passives, these units are solid options for 
                    boosting Accuracy. Victoire requires the DPS to be a Light elemental in order to take 
                    full advantage of her buffs on True Arts. On the other hand, Zeela is able to provide 
                    teamwide CRI rate, Accuracy, and MAG DMG buffs from her NA.</p>
                </li>
                <li>
                    <b>Pola &gt; Angelas &gt; Keit </b>
                    <p>If you don’t want to deal with the annoying evasion gimmick of Freydal, 
                    these units are great picks for chipping away at its bar over time. Pola 
                    would be the best pick, dealing consistent and noticeable Poison DMG 
                    especially when Freydal’s HP is high. Angelas is also a decent pick, 
                    being able to inflict Burn from her skill and reduce Burn RES from her Arts. 
                    Lastly, Keit can also work, however, as he is an unawoken unit, more support 
                    will be required with him on the team.</p>
                </li>
        `,
        author: "ebouliben#1234, Jeffers#7056"
    },
    {
        id: 6,
        title: "Shrine of Aberration",
        link: "shrine-of-aberration",
        banner: "/db/CrestGuides/Crest_Banner_Goldola.png",
        article: `
            <center>
                <b>The Brutal Botanical Beast</b> [PRO] <br />
                <img src="/db/CrestGuides/Crest_Goldola.png" />
                <br/>
                BOSS: Gorondola <br />

                <b>Appears on Day: Thursday [PST]</b> <br/>
                HP: 5,200,000 <br />
                Element: Earth <br />
                Race: Spirit <br />
            </center><br />
            <h3><center>Mechanics</center></h3>
            <b><u>Special Mobs</b></u>
            <ul>
                <li>Dulah: Chance to inflict Seal with Skill.</li>
                <li>Logbord: Reduces Enemies’ DEF with Skill.</li>
                <li>Cocogran: Reduces Enemies’ Action Speed with Skill.</li>
                <li>Ragvelon: Reduces Enemies’ Arts by 20 with Skill.</li>
                <li>Moldola: Chance to inflict Poison with Skill.</li>
                <li>Spirit Meiol: Heal Allies’ HP by 20000 with Skill.</li>
                <li>King Mokyuon: Chance to inflict Curse with Skill.</li>
            </ul>
            <p>These mobs will appear in the pre-stages leading up to the boss, and the boss will summon them 
            throughout the battle. Ragvelon’s reduction of Enemies’ Arts by 20 makes taunt tanks incredibly useful 
            in this stage, while the mobs that inflict status ailments mean a way to mitigate status ailments is essential for clearing this boss.</p>

            <h4><center><u>Normal Attacks</u></center></h4>
            <b>Used during Storm/Ultra Strom Mode:</b>
            <ul>
                <li>Jumps up, lands, and releases a purple mist - Chance to Poison enemies</li>
                <ul>
                    <li>Not much of an issue unless you aren’t bringing a way to cleanse it.</li>
                </ul>
                <li>Sucks in air - Reduces Enemies’ Arts by 100</li>
                <ul>
                    <li>Without a taunt tank, this would take 100 Arts from every member of your team, once again reinforcing the usefulness of taunt tanks for this boss.</li>
                </ul>
            </ul>

            <center><h4><u>Arts</u></h4></center>

            <ul>
                <li><b>Chewing Rose</b> - Heals own HP by 350 each time this Arts hits an Enemy</li>
                <ul>
                    <li>The healing is fairly insignificant, so it’s simply a matter of not dying to the raw damage.</li>
                </ul>
            </ul>

            <h3><center>Strategy</center></h3>
            <p><center>
            An integral part of surviving through the boss stage is managing the large amount of ailments 
            Gorondola and his minions inflict on your party. This is preferably done with the use of 
            Taunt-Tanks, but units capable of applying Status RES are also more than capable given you 
            can properly loop them. It’s also important to remember that the boss deals rather potent damage, 
            so slacking on sustain would be highly detrimental.
            </p></center>
            <b><h4><u>Recommended Units</u></h4></b>
            <ul>
                <li>
                    <b>Thetis</b>
                    <p>An obvious top choice for your taunt-tank. Thetis is more than capable of 
                    redirecting all Ailments onto himself not to mention gaining immunity to the 
                    most irritating of them given he is equipped with his True Weapon. Proper use 
                    of DEF equipment will also allow him to tank all the damage no problem.</i>
                    </p>
                </li>
                <li>
                    <b>Gerald/Naofumi &gt; Celia &gt; Dark Zeorg</b>
                    <p>Similarly with Thetis, proper management with the use of the rest of the 
                    taunt-tanks is more than able of sustaining and eating all ailments inflicted 
                    by enemies. Though as they lack innate Seal(Silence) RES unlike Thetis with 
                    his True Weapon, you will need to bring additional units/equipment capable 
                    of cleansing ailments off them.</p>
                </li>
                <li>
                    <b>Feena/Rimuru</b>
                    <p>An alternative to taunt-tanks with the use of their Status RES buffs. 
                    It’s worth mentioning that while they’re capable of resisting ailments, 
                    they are unable to mitigate the Arts drain of Gorondola and Ragvelon. 
                    This leaves your whole team more susceptible to being disrupted, potentially 
                    when you require an Arts use the most. They are still, however, very strong 
                    units with a proper team comp.</p>
                </li>
        `,
        author: "ebouliben#1234, Jeffers#7056"
    }
]

export function getCrestBossGuides() {
    return CrestBossGuides;
}


export function getCrestByLink(link) {
    return CrestBossGuides.find(
        guide => guide.link === link
    );
}
