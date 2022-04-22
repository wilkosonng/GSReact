//This file will be for Crest Boss Guides
const CrestBossGuides = [
    {
        id: 0,
        title: "Temple of Heavenly Light",
        link: "temple-of-heavenly-light",
        article: `
            <center>
                <b>Denial of the Pest Princess</b> [Pro] <br />
                <img src="/db/CrestGuides/Crest_Radachne.png" />
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
        article: `
            <center>
                <b>The Reaper's Smile</b> [Pro] <br />
                <img src="/db/CrestGuides/Crest_Oldeus.png" />
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
                    <b>Est >> Duke > Wargul</b> 
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
        article: `
            <center>
                <b>The Raging Lord of All Flames</b> [Pro] <br />
                <img src="/db/CrestGuides/Crest_Ifrit.png" />
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
                    <b>Mako/Hart/Asirpa/Rimuru > Nies</b>
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
