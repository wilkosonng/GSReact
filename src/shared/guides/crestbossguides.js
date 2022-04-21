//This file will be for Crest Boss Guides
const CrestBossGuides = [
    {
        id: 0,
        title: "Temple of Heavenly Light",
        link: "temple-of-heavenly-light",
        article: `
            <center>
                <b>Denial of the Pest Princess</b> [Pro] <br />

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

            <h3><center><u>Gimmicks</u></center></h3>
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

            <h3><center><u>Normal Attacks</u></center></h3>
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
                <h3><u>Arts</u></h3>
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

            <b><center><u>Recommended Units</u></center></b>
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
                    <b>Vox/Sonije (Accuracy Up units and DMG)</b>
                    <p>Vox’s innate Accuracy Up to all units, and as usual his own DMG easily makes quick work of the boss. 
                    Sonije’s Accuracy Up as well as her role as an ArtGen fills a similar role, but as always with 
                    Light units, a taunt-tank or lots of sustain is needed to keep her health up consistently.</p>
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
