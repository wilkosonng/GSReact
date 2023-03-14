import React, { useState } from 'react';
import { Accordion, AccordionHeader, AccordionItem, AccordionBody, Card } from 'reactstrap';
import '../../App.css';

const accordionColor = {
    backgroundColor: "#202022", 
    color: "#e7f9fc", 
    padding: "0"
}

const accordiongHeader = {
    backgroundColor: "#22bbff", 
    color: "#292930", 
    padding: "0"
}

const accordionPColor = {
    color: "#e7f9fc", 
    padding: "0",
    margin: "0"
}

//Component to display FAQ
export default function FAQGuide () {
    //Change Accordion Content Color 
    //https://docs.google.com/document/d/1puFaDPDto9fra06t9P31AWBPUSJurGpUiBg9jsHaiG4/edit#
    //TODO: Figure out how to change overall accordion color, including Header
    return (
        <React.Fragment>
            <center style={{marginTop: "5rem"}}>
                <p>
                    <h1>FAQ</h1>
                    <h4>Click each question to show the answer.</h4>
                    <a href="/guides"><button style={{backgroundColor: "#22bbff", color: "#292930"}}>Return to Guides</button></a>
                </p>
            </center>
            <GettingStarted />
            <ImprovingYourAccount />
            <BattleMechanics />
            <Multiplayer />
            <Arena />
            <Events />
            <GiantBoss />
            <Miscellaneous />
            <Abbreviations />
            <center>
                <a href="/guides"><button style={{backgroundColor: "#22bbff", color: "#292930", marginTop: "2rem"}}>Return to Guides</button></a>
            </center>
        </React.Fragment>
    )
    
}

/*
//Toggle and Hook functions to activate Accordion
const [accordion, setAccordion] = useState("0");
const toggle = (id) => {
    accordion === id ? setAccordion() : setAccordion(id);
}


return (
    <Card style={{backgroundColor: "gray"}} >
        <h2><center>Category</center></h2>
        <Accordion flush open={accordion} toggle={toggle}>
            <AccordionHeader targetId="1">
                Header
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="1" style={accordionColor}>
                    Body
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    </Card>
)
*/

//Getting Started Section
function GettingStarted() {

    //Toggle and Hook functions to activate Accordion
    const [accordion, setAccordion] = useState("0");
    const toggle = (id) => {
        accordion === id ? setAccordion() : setAccordion(id);
    }

    return (
        <Card style={accordiongHeader}>
            <h2><center>Getting Started</center></h2>
            <Accordion flush open={accordion} toggle={toggle}>
                <AccordionHeader targetId="1" >
                    <p style={accordionPColor}>Q01. How do I download Grand Summoners?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="1" style={accordionColor}>
                    <p>You can download Grand Summoners from the relevant App Store for your device, or from downloading a .apk for the current update. 
                        If Grand Summoners is not available in your country, you can use <a href="https://www.qoo-app.com/en">QooApp</a> as a workaround.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="2">
                    <p style={accordionPColor}>Q02. Do I need to reroll to play this game? If so, how?</p>
                </AccordionHeader>
                <AccordionItem >
                    <AccordionBody accordionId="2" style={accordionColor}>
                        <p>While rerolling is not necessary to progress in Grand Summoners, taking the time to reroll and having strong units to start off with will make the early-game experience much more bearable and also opens up late-game content a lot sooner. 
                        To reroll in Grand Summoners, you'll first need to create an account. After creating an account you'll want to summon for the recommended units, listed <a href="https://docs.google.com/document/d/1PaPYoSolhO65HCUaU-SGtHZ8Y51MKndlUs4rjdfWxUs/edit">here.</a>;
                        If you did not get what you were rerolling for then you'll need to delete your account. Go to the ingame menu and scroll down to the account deletion menu, then select all the checkboxes to delete your account. Repeat process until you get your reroll targets.
                        Note that rerollers may encounter the "Server is Busy" Message, temporarily stopping them from rerolling. The "Server is Busy" message can be prevented by using a VPN or changing internet after it appears.
                        It should be noted that specific “reroll advice” (i.e. Units/equipment to reroll for) changes periodically based on currently ongoing limited-run units and events.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="3">
                    <p style={accordionPColor}>Q03. Which Starter should I choose?</p>
                </AccordionHeader>
                <AccordionItem >
                    <AccordionBody accordionId="3" style={accordionColor}>
                    The Starters (also sometimes referred to as the Blademasters) are more-or-less the same as each other: 
                    a high-damage unit with a specific gimmick depending on the Starter. <b>Arth</b>, the Earth Starter, has high BREAK values in his Skills and Arts. 
                    <b>Corsair</b>, the Water Starter, can inflict Freeze on enemies with many of her attacks. <b>Clyde</b>, 
                    the Fire Starter, can inflict Burn on enemies with many of 
                    his attacks.
                    <br /> <br/>
                    On the subject of which starter you should choose, the general consensus is that Corsair 
                    is the best choice, as Freeze is one of the more useful status ailments in the game as it 
                    can stop most enemy attacks, potentially saving your party.
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="4">
                    <p style={accordionPColor}>Q04. How do I get Crystals? How should I spend them in the beginning?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="4" style={accordionColor}>
                        <p>You get crystals from clearing certain objectives in missions (which can be seen by clicking the magnifying glass icon next to the level), 
                            from milestones in the Missions Tab (one daily and numerous in missions), winning a certain amount of battles in the Arena, from Daily Login 
                            bonuses (weekly, event, and cumulative), from the ‘First Friend’ bonus crystal campaign, from playing multi with 100 unique people (this count 
                            will be reset at dev team discretion), and from other one-off events like Facebook share challenges or compensation.</p>
                            <br />
                        <p>Starting out, your best use for your crystals will be to improve your account by summoning for strong units, 
                            summoning for equipment, or improving unit space in your Unit List. Refer to current summon banner info and advisors 
                            within the community to get an idea of what you should be pulling for.</p>
                        <br />
                        <p>
                            Do <b>NOT</b> use crystals for energy restores, reviving after a lost fight, or 
                            any summons past the first 10+1 on a new banner unless you have a specific reason for doing so (i.e. a game-breaking equip/unit).
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="5">
                    <p style={accordionPColor}>Q05. What should I do when I begin? What missions should I be doing?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="5" style={accordionColor}>
                        <p>When you begin playing Grand Summoners, you should be aiming to have a solid account for tackling time-limited content. This means you will be aiming for:</p>
                        <ol>
                            <li>A unit with 80+ Luck (see Q12).</li>
                            <li>A general-use team that is fully-leveled up and well-balanced.</li>
                            <li>A decent selection of equipment to choose from to gear your units.</li>
                        </ol>
                        <p>Most of this can be achieved by playing through the Story Quests (up to Ch. 5), going through the ‘Tower of Initiation’, and participating in ongoing events.</p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </Card>
    )
    
}

//Improving Your Account Section
function ImprovingYourAccount() {
    //Toggle and Hook functions to activate Accordion
    const [accordion, setAccordion] = useState("0");
    const toggle = (id) => {
        accordion === id ? setAccordion() : setAccordion(id);
    }


    return (
        <Card style={accordiongHeader}>
            <h2><center>Improving Your Account</center></h2>
            <Accordion flush open={accordion} toggle={toggle}>
                <AccordionHeader targetId="6">
                    <p style={accordionPColor}>Q06. How do I increase my Rank? Is it important?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="6" style={accordionColor}>
                        <p>Your Rank, which is effectively your account level, will go up as you complete levels solo or as a host in multiplayer lobbies (not by joining a multiplayer lobby) and gain experience. Ranking up is important for multiple reasons, mainly because you will have a larger maximum pool of Energy to fill before you 
                            need to spend it and Stamina Potions will provide more Energy on use. There are also some events that require a minimum rank to host, usually Rank 60.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="7">
                    <p style={accordionPColor}>Q07. When should I summon more units?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="7" style={accordionColor}>
                        <p>
                        It makes the most sense to summon for more units when doing so will likely improve your selection and diversity 
                        of units for content. The obvious times to summon for units are when a new summon banner comes out and you can do a 
                        10+1 pull on it, as the first 10+1 on a new banner will always guarantee a Hyper Rare as the 11th unit, regardless of 
                        whether or not this is explicitly stated. Using free crystals beyond the first 10+1 is a personal discretion decision, 
                        as it is unlikely to get a Hyper Rare and normally a poor choice.
                        </p>
                        <br />
                        <p>
                        Also note that the <b>very first</b> singular-unit summon on an account (this includes the Daily Summon you are 
                        prompted to do at the beginning of the game), regardless of banner, <b>will always guarantee a Hyper Rare unit,</b>
                        so be sure to use this to your advantage.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="8">
                    <p style={accordionPColor}>Q08. What are ‘Alchemy Stones’? What do I want to do with them?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="8" style={accordionColor}>
                    Alchemy Stones (often called “Alch Stones” or simply, “Alchs”) are materials received 
                    from selling units summoned from crystals, selling equipment, some quest missions, from playing 
                    multiplayer with friends, and as random gifts from events. They can be used for purchasing Limit 
                    Break stones, or for performing ‘Alch Summons’, taking 5000 Alchemy Stones for a guaranteed Hyper Rare 
                    unit from a given pool of units (this pool of pullable units is called the “Alch Pool”). 
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="9">
                    <p style={accordionPColor}>Q09. How do I increase my unit’s level? What does this do?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="9" style={accordionColor}>
                    You can increase your unit’s level by either using them in battles (not recommended) or by enhancing them in 
                    the Units tab with ‘Metal Chicken’-type units (recommended). Leveling a unit increases their stats, unlocks their 
                    passive abilities at certain levels, and when maxed can often enable an Evolution or Awakening to a higher level cap 
                    (with more stats and abilities). You can easily obtain Metal Chicken-type units from ‘Silver Bird of the Exploring’ 
                    missions in the ‘Boot Camp’ tab of Exploring, or by joining these levels in ‘Join Multi’; try to level your units up 
                    as much as possible before going on to complete levels.
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="10">
                    <p style={accordionPColor}>Q10. How do I evolve my units? What does this do?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="10" style={accordionColor}>
                    Evolving a unit takes materials that are most readily available from the 
                    dungeons found in the ‘Daily’ tab of the Exploring, and for the unit that 
                    is evolving to be at its current max level. Evolving a unit upgrades the unit’s 
                    Skills and Arts, while also allowing for a higher maximum level and consequently higher stats.
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="11">
                    <p style={accordionPColor}>Q11. What is Awakening? How do I do that?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="11" style={accordionColor}>
                    <p>Awakening a unit is very similar to evolving them, but instead of the materials being from 
                    ‘Daily’ dungeons they take Awakening Souls (limited material earned from daily/weekly missions and login bonuses) 
                    and Soul Fragments of certain Giant Bosses (usually found in the ‘Giant Boss’ tab of Exploring), as well as a Rainbow Dragon 
                    God “Paradisos” (rare Dragon God-type evolution material that can drop rarely from weekday unit-evolution material quests, 
                    is tradable for 5 of each Elemental Dragon God at the Alchemist or often given as an event login reward). 
                    <a href="https://docs.google.com/document/d/1xiDRtd7tnOditMbHqAP6HP69yGQEwRJQQVzvMPC5WEo/edit">Here</a> is a good guide detailing the basics of Awakening.</p>

                    <br />

                    <p>You can also awaken a unit using 150 awoken souls and no giant boss fragments but this is almost never a good option and should only be used as a 
                        last resort. There are helpful people in the discord able to help you through almost any giant boss fight.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="12">
                    <p style={accordionPColor}>Q12. What does Luck do? How do I increase my unit’s Luck?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="12" style={accordionColor}>
                        <p>Luck is the value which determines if and how many extra drops you earn after completing a battle. 
                            The game checks for each individual person’s highest luck value of the units they brought to the fight, 
                            and then calculates. 1-99 Luck give you that percent chance at a single drop, 100 Luck guarantees two drops, 
                            and every 20 luck beyond that guarantees another drop (100 Luck = 2 drops, 120 = 3 drops, etc.). 
                            <b>Only the host</b> can produce more than 2 luck drops in a single quest.</p>
                        <br />
                        <p>You can increase a unit’s luck temporarily by using luck-increasing food in a lobby or having a food bonus apply from 
                            using a specific combination of foods, and you can improve a unit’s luck permanently by Limit Breaking a unit with a 
                            duplicate copy and adding the two units’ luck values together. 4* units can go up to a maximum of 80 luck, 5* units 
                            can go to a maximum of 120 luck (if it’s a free/farmable unit) or 200 luck (if summoned using crystals).</p>
                        <br />
                        <p>Because these Luck Drops are something the entire party receives, 
                            having a host at 120 luck for farming events is very common. While those joining a 
                            lobby do not need more than 100 luck (or 80 luck and using food which gives the team a 
                            20 luck boost) many public lobbies do not understand this and will kick anyone below 120 luck that joins.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="13">
                    <p style={accordionPColor}>Q13. What is Limit Breaking? How do I do it? Do I need it?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="13" style={accordionColor}>
                        <p>
                        Limit Breaking is the mechanic by which you bring out a unit’s full potential, 
                        as Limit Breaking a unit allows them to equip stronger weapons and have more Tasmons 
                        applied to their stats. You do this by going to Units -> Limit Break and using duplicate 
                        units to Limit Break; you can use a ‘Unit LB Stone’ in the place of a duplicate unit.
                        </p>
                        <br />
                        <p>Most units reach Maximum Limit Break (MLB) at LB5, which takes 5 duplicates (for units 
                            summoned by crystals). Some farmable units obtained through quests require more than 5 
                            (usually 20) duplicates in order to reach MLB.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="14">
                    <p style={accordionPColor}>Q14. What are Tasmons? How do I use them?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="14" style={accordionColor}>
                        <p>
                        Tasmons (Tufmon, Kilmon, Defmon and their King and God versions) are enhance-material units 
                        that are used to provide extra stats onto a unit on top of their base stats. You can normally 
                        obtain them as drops from ‘Spirits of the Exploring’ in the ‘Boot Camp’ tab of Exploring or 
                        in Multiplayer. Units can have more Tasmons applied to them (through enhancing the base unit) 
                        as their Limit Break level increases, and are ‘maxed’ for the unit when the number next to the 
                        unit’s base stats stop flashing red and instead become a solid yellow. Due to the ease of 
                        acquiring Tasmons, it’s safe to say that a unit is not finished until you at least max their 
                        Tasmon values for their given Limit Break level.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="15">
                    <p style={accordionPColor}>Q15. How important is Equipment? How do I get more equipment?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="15" style={accordionColor}>
                        <p>
                        Equipment is very important in this game, often as important as 
                        the units holding them. You can acquire more equipment either through summoning 
                        with crystals, or from drops in levels that have equipment in them. Common levels 
                        that drop equipment are going to be Giant Bosses and time-limited events in 
                        the ‘Exploring’ tab in Exploring. Be sure to check out any stickied thread for 
                        info on event equipment and whether you should be farming them!
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="16">
                    <p style={accordionPColor}>Q16. How do I improve my Equipment? What does this do?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="16" style={accordionColor}>
                        <p>
                        You can improve your Equipment by going to Equips -> Enhance 
                        and selecting the gear you wish to enhance. Doing this takes 
                        weapon enhance materials (Ore, Crystals (elemental, not the currency) 
                        and Spirit Stones) mostly found in the ‘Daily’ dungeons in Exploring. 
                        Enhancing a Weapon increases its overall parameters, be it amount of 
                        damage dealt, percent effects from the weapon, and the stats the weapon 
                        provides to the equipped unit.
                        </p>
                        <br />
                        <p>Enhancing equipment should <b>always</b> be done to the best of your abilities, 
                            as it often makes the equipment more than twice as strong. Enhancing equipment 
                            is not the same as Limit Breaking equipment, which only lowers the Cooldown timer
                            of the equipment and is done similarly to Limit Breaking units (using Duplicates or specific equipment type LB stones.</p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </Card>
    )
}

//Battle Mechanics Section
function BattleMechanics () {
        //Toggle and Hook functions to activate Accordion
        const [accordion, setAccordion] = useState("0");
        const toggle = (id) => {
            accordion === id ? setAccordion() : setAccordion(id);
        }
    
    
        return (
            <Card style={accordiongHeader} >
                <h2><center>Battle Mechanics</center></h2>
                <Accordion flush open={accordion} toggle={toggle}>
                    <AccordionHeader targetId="17">
                        <p style={accordionPColor}>Q17. What are Arts? How do I use them?</p>
                    </AccordionHeader>
                    <AccordionItem>
                        <AccordionBody accordionId="17" style={accordionColor}>
                            <p>
                            Arts are a unit’s special attack that can be unleashed after filling up their 
                            Arts Gauge to 100 (when the unit’s portrait says “Arts” and glows yellow). 
                            The Arts Gauge can be filled up by BE, from using a Skill, or added directly 
                            as an effect of an attack or equipment. Arts can be used by swiping up on the 
                            unit’s icon just below the battle screen whenever the word “Arts” is displayed on said icon. 
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionHeader targetId="18">
                        <p style={accordionPColor}>Q18. What are True Arts? How do I use them?</p>
                    </AccordionHeader>
                    <AccordionItem>
                        <AccordionBody accordionId="18" style={accordionColor}>
                            <p>
                            True Arts are an alternative special attack that Awoken units can use, and is usually much 
                            stronger than the unit’s regular Arts. You can use a True Arts by swiping up twice on the 
                            unit’s icon when the words “True Arts” are displayed (at 200 Arts Gauge fill).
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionHeader targetId="19">
                        <p style={accordionPColor}>Q19. What is Battle Ether (BE)?</p>
                    </AccordionHeader>
                    <AccordionItem>
                        <AccordionBody accordionId="19" style={accordionColor}>
                            <p>
                            Battle Ether (BE) are the little orbs that come out when you hit the enemy for 
                            damage or knock an enemy out, and they are used to help fill your units’ Arts Gauges. 
                            Each orb that is produced is randomly distributed to your team and will fill 10% of your 
                            Arts Gauge per Orb. An Orb is produced roughly every 660% damage dealt.
                            </p>
                            <br />
                            <p>
                            <b>NOTE:</b> Battle Ether seems to distribute unevenly to a player who is lagging, so a poor connection can be linked to lesser Arts Gauge fill.
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionHeader targetId="20">
                        <p style={accordionPColor}>Q20. What is Breaking? What does it do? Is it important?</p>
                    </AccordionHeader>
                    <AccordionItem>
                        <AccordionBody accordionId="20" style={accordionColor}>
                            <p>
                            Every boss in the game has what is called a ‘Break Bar’, and when this bar is reduced 
                            to empty, the boss ‘Breaks’. During Break, the boss will be staggered and take extra 
                            damage; some bosses won’t even use their attacks while broken, and most will be unable 
                            to use arts. Breaking a boss isn’t related to the damage you deal but instead the 
                            ‘Break Power’ of an attack (identified by the gold ‘BREAK’ number on a Skill, Arts or Equipment). 
                            Breaking a boss is often important to prevent dying to certain attacks or to do enough damage in a timely manner.
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionHeader targetId="21">
                        <p style={accordionPColor}>Q21. How do buffs/debuffs work? Do they stack? Are they relevant?</p>
                    </AccordionHeader>
                    <AccordionItem>
                        <AccordionBody accordionId="21" style={accordionColor}>
                            <p>
                            Buffs and debuffs are temporary effects that can be applied to both your units and enemies through Skills, 
                            equipment, Arts, and Abilities. Taking advantage of buffs on your team and working to find a good combination 
                            is an important part of building a good team. Buffs will usually stack unless they come from a source with the 
                            same name (i.e. two ‘Keion’ Staves will not stack their buffs, activating Fen’s True Arts while it is still 
                            active will simply reset the timer). <b>There are exceptions to this</b>, however, so it helps to test yourself; 
                            if separate icons show up, that means that they stack.
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionHeader targetId="22">
                        <p style={accordionPColor}>Q22. What status effects are in this game? What do they do?</p>
                    </AccordionHeader>
                    <AccordionItem>
                        <AccordionBody accordionId="22" style={accordionColor}>
                            <p>
                            Status effects are in this game in the form of the following:
                            </p>
                            <ul>
                                <li><b>Freeze:</b> Afflicted unit is stunned and cannot use Skill, Arts, True Arts or Equipment for a few seconds, stops any currently ongoing action (Skill, Arts/True Arts).</li>
                                <li><b>Poison:</b> Afflicted unit is damaged over time, cannot lower units’ HP below 1.</li>
                                <li><b>Burn:</b> Same as Poison, but identified by a red-tinted unit portrait. Cancelled by Freeze/cancels Freeze upon infliction.</li>
                                <li><b>Paralysis:</b> Same as Freeze, but doesn’t interact with Burn.</li>
                                <li><b>Disease:</b> Massively lowers/negates the amount of healing that affected units receive when healed.</li>
                                <li><b>Faint:</b> Afflicted unit is stunned, hardest status to prevent or heal.</li>
                                <li><b>Curse:</b> Afflicted units cannot use any of their equipment while cursed.</li>
                                <li><b>Seal:</b> Afflicted units cannot use their Arts/True Arts or Skills.</li>
                                <li><b>Blind:</b> Afflicted units’ attacks have a 30% chance to miss.</li>
                            </ul>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionHeader targetId="23">
                        <p style={accordionPColor}>Q23. What does a basic team look like? What should it have?</p>
                    </AccordionHeader>
                    <AccordionItem>
                        <AccordionBody accordionId="23" style={accordionColor}>
                            <p>
                            Most difficult content will need a team tailored to the mechanics of the fight, 
                            but for 90-95% of content a ‘generic’ team will do just fine. A successful team is able to keep 
                            its members alive while receiving damage (defensive Arts/equipment, healing Arts/equipment) while 
                            dishing out decent damage (offensive equipment, Arts generation, etc.). If you’re unsure how to do 
                            this, feel free to check out the Team Help thread or ask on the official Discord for assistance in team building.
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionHeader targetId="24">
                        <p style={accordionPColor}>Q24. Is using Auto bad? Can I make Auto better for using?</p>
                    </AccordionHeader>
                    <AccordionItem>
                        <AccordionBody accordionId="24" style={accordionColor}>
                            <p>
                            This game has a lot of moving parts, so using Auto to help automate it is definitely worth 
                            getting used to. Some fights require more timing than Auto is capable of providing, so it 
                            shouldn’t be used all the time for every setting. You CAN modify your auto settings in the 
                            Menu -&gt; Options, so tinker it to your liking based on what you are facing. In the Options menu, 
                            you should set the “Use Arts/True Arts” option to “individual Settings” so you can customize 
                            whether or not certain units use their Arts or True Arts on Auto.
                            </p>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </Card>
        )
}

//Multiplayer Section
function Multiplayer() {
    //Toggle and Hook functions to activate Accordion
    const [accordion, setAccordion] = useState("0");
    const toggle = (id) => {
        accordion === id ? setAccordion() : setAccordion(id);
    }


    return (
        <Card style={accordiongHeader} >
            <h2><center>Category</center></h2>
            <Accordion flush open={accordion} toggle={toggle}>
                <AccordionHeader targetId="25">
                    <p style={accordionPColor}>Q25. How does Multiplayer work in this game? Why would I want to do it?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="25" style={accordionColor}>
                        <p>You can either host rooms of multiplayer-eligible levels (red fill in the stage-select screen) 
                            by selecting the Multiplayer option, or by clicking on the orange ‘Join Multi’ button on the 
                            home screen and joining someone else’s room. For these you will have a team comprised of units 
                            from 2-4 different players, and everyone fights the boss.</p>
                        <br />
                        <p>Only the host spends energy (or keys when they are required), but everyone gets loot from 
                            the fight so everyone benefits from doing multiplayer. Failing a battle does not cost 
                            either keys or energy and you are free to retry the fight as long as it is open and available.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="26">
                    <p style={accordionPColor}>Q26. Does everyone get the same loot in a multi lobby?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="26" style={accordionColor}>
                        <p>While everyone gets loot, not everyone gets the same drops. 
                            The drops that are above the line in the drops summary screen 
                            are (normally) different for each individual player, while drops 
                            below the line (the Luck drops) are the same for everyone, and 
                            everything you see on your screen is what you obtain.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="27">
                    <p style={accordionPColor}>Q27. Why do I get kicked from lobbies a lot?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="27" style={accordionColor}>
                        <p>If you find yourself being kicked from lobbies often, 
                            take a look at the unit you are using. Is it a good unit 
                            to use for this level? Is your equipment good, and are 
                            they levelled? Did you bring a non-luck unit to a lobby 
                            asking for luck? If you can answer all of these positively, 
                            remember public lobby hosts are free to kick whomever they 
                            please; it might help to ask around to see if you’re not using a good unit for the fight, though.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="28">
                    <p style={accordionPColor}>Q28. How does Luck work in multiplayer lobbies?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="28" style={accordionColor}>
                        <p>Luck is calculated by taking the highest luck value out of the 
                            units that a person brings, so in Multiplayer, each person’s 
                            highest-luck unit (being used for the quest) is used as the 
                            determiner for luck rewards. That means if 4 people are in the 
                            lobby, you make the luck calculation for all 4 units, separately.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="29">
                    <p style={accordionPColor}>Q29. I see a lot of people using the same food as one another, why is that?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="29" style={accordionColor}>
                        <p>In Multiplayer lobbies, if a certain combination of 
                            food is used (often just 4 of the same food) then you will 
                            get a bonus effect on top of the effect that the food brings. 
                            The most common is when you use 4 of the same cheese or event 
                            food item, or 4 different cheeses; this gives a +20 luck bonus 
                            to every unit in the party, so there are more drops for everyone.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="30">
                    <p style={accordionPColor}>Q30. What do friends do in this game? How do I get more friends?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="30" style={accordionColor}>
                        <p>Friends don’t do very much in this game compared to others, 
                            as all they do is let you join one another’s lobbies easier 
                            (there’s a setting where only friends can see your lobby) and 
                            if you do 100 separate lobbies with a single friend you can get for 100 Alch Stones.
                        </p>
                        <br />
                        <p>
                        You can check your progress until the 100 Alch Stones on 
                        that friend’s page, or after a quest that you go on with 
                        that friend on the friend request screen. This counter does 
                        not stop at 100 so you are free to keep farming with your 
                        friends and later claim 100 Alch Stones multiple times from them.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="31">
                    <p style={accordionPColor}>Q31. Does my leader affect anything?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="31" style={accordionColor}>
                        <p>The leader of your team determines who shows up when hosting a 
                            lobby (and your leader doesn’t even have to be one of the 2 units you bring) 
                            or who shows up on the friends list. Your leader will also be the 
                            one to receive a Crest when you get a Crest from a solo Crest quest.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="32">
                    <p style={accordionPColor}>Q32. What are the Stickers for? Can I change them?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="32" style={accordionColor}>
                        <p>Stickers are a way to communicate with the other people in your 
                            multiplayer lobby, either playfully or to pass on a message. 
                            You can change your sticker selection by going to ‘Join Multi’ 
                            from the home screen, then clicking ‘Manage Stickers’ in the 
                            bottom-right corner of the screen, or when selecting what team 
                            to use when opening a multiplayer lobby also in the bottom-right corner.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="33">
                    <p style={accordionPColor}>Q33. How do I invite friends to my multiplayer lobby?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="33" style={accordionColor}>
                        <p>There are 3 settings for how someone can join a room and the 
                            names can be deceiving. A Room starts at "Friends Public" 
                            and further unlocks as you click on the options. These 
                            setting changes only go one way, so if you accidentally 
                            make a room "Public" then you may need to close and recreate the room if that is not how you wanted it set.
                        </p>
                        <ul>
                            <li>Friends Public - Only someone with your lobby code can join this room</li>
                            <li>Make Public - Those with your lobby code or who are in your friends list can see and join your room</li>
                            <li>Public - Anyone can see and join this room</li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </Card>
    )
}

//Arena Section
function Arena() {
    //Toggle and Hook functions to activate Accordion
    const [accordion, setAccordion] = useState("0");
    const toggle = (id) => {
        accordion === id ? setAccordion() : setAccordion(id);
    }


    return (
        <Card style={accordiongHeader} >
            <h2><center>Arena</center></h2>
            <Accordion flush open={accordion} toggle={toggle}>
                <AccordionHeader targetId="34">
                    <p style={accordionPColor}>Q34. What is the Arena? How do I play in it?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="34" style={accordionColor}>
                        <p>The Arena is a place in the game where you can take a team 
                            of your units to face other player’s teams controlled by 
                            AI. You can get there either from clicking Arena on the home 
                            screen, or going to the Arena from Town. You cannot use duplicate units in the arena.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="35">
                    <p style={accordionPColor}>Q35. Is the Arena worth doing? What rewards do I get from it?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="35" style={accordionColor}>
                        <p>The Arena is definitely worth doing as there are multiple rewards 
                            that are worth getting. When you hit Masters rank (after going 
                            through the “Fighters” ranks), each victory will earn you some 
                            Arena Medals which can be used to buy items from the Arena Exchange 
                            store, which includes precious items such as Limit Break Stones, 
                            Stamina Potions, and Lucky Apples. Outside of the one-time purchase 
                            stickers, the Arena Exchange stock resets on the 1st of each month. 
                            There are also one-time rewards that are given based on cumulative 
                            wins, with some very powerful equipment being available only through 
                            this manner; you can find a list of the equipment by going to Arena -&gt; Help -&gt; Rewards.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="36">
                    <p style={accordionPColor}>Q36. I got to Masters and I keep dying. What kind of team do I need?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="36" style={accordionColor}>
                        <p>Odds are your team isn’t levelled or you are 
                            running a poorly-crafted team for Arena if you 
                            find yourself dying a lot. The basics of running 
                            arena are to run 4 units that have a lot of offensive 
                            equipment slots and run equipment that does a lot 
                            of damage and hits a nicely-sized area. If you’re 
                            unsure how to do so, feel free to ask for help 
                            in the Monthly Megathread in the Subreddit, on 
                            the Facebook group or in the #reroll-and-team-advice channel on Discord.</p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </Card>
    )
}

//Events Section
function Events() {
    //Toggle and Hook functions to activate Accordion
    const [accordion, setAccordion] = useState("0");
    const toggle = (id) => {
        accordion === id ? setAccordion() : setAccordion(id);
    }


    return (
        <Card style={accordiongHeader} >
            <h2><center>Events</center></h2>
            <Accordion flush open={accordion} toggle={toggle}>
                <AccordionHeader targetId="37">
                    <p style={accordionPColor}>Q37. How are events handled in this game? What do they normally bring?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="37" style={accordionColor}>
                        <p>Every maintenance (usually on Wednesdays at 7:00 PM PDT), 
                    GoodSmile will often add an event to the game that was 
                    announced late Monday/early Tuesday, and will often last 
                    from one week to 2-4 weeks depending on the type of event. 
                    Events can bring anything from unique equipment to free Hyper Rare units which you can farm to 120 Luck.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="38">
                    <p style={accordionPColor}>Q38. What are these drops that I am getting from the quests? What do they do?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="38" style={accordionColor}>
                        <p>Drops from events usually fall into one of three Currency categories:</p>
                        <ul>
                            <li>To buy Items from the event store, which contains unique equipment and often other goodies like Limit Break stones and equipment enhance materials.</li>
                            <li>Unique equipment that is only available from the event.</li>
                            <li>Enhance materials for the unique equipment that can only be acquired from the event.</li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="39">
                    <p style={accordionPColor}>Q39. What units should I bring to an event?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="39" style={accordionColor}>
                        <p>
                        Each event has different bosses that you will face, 
                        and each often require a different strategy to approach 
                        if your goal is to clear effectively. Keep an eye out for 
                        discussion on the event in the GS Subreddit or on the Discord’s 
                        #banner-and-event-advice channel if you need assistance finding 
                        out what units to bring for a specific event.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="40">
                    <p style={accordionPColor}>Q40. I can’t clear the highest level difficulty of the quest, should I bother farming?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="40" style={accordionColor}>
                        <p>
                        While the best place to farm in a given event is often the 
                        hardest difficulty, if you can’t farm it effectively you can 
                        run the earlier stages. If your rates are very poor, it might 
                        be worth figuring out why you can’t run the highest stage and 
                        get it resolved instead of potentially wasting time. If you 
                        are still unable to clear it, you could potentially bring a Luck unit to use to farm with other players.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="41">
                    <p style={accordionPColor}>Q41. How many of each equipment should I get from an event?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="41" style={accordionColor}>
                        <p>
                        Depending on how strong the equipment is, you’ll want to make sure you don’t miss out. 
                        Getting 1-2 MLB (Max Limit Break) of each equipment is a safe number, with more copies of the really good 
                        equipment not being a bad decision. Make sure you MLB any gear you plan on using as the gear 
                        is often designed to be MLB’d to compete with other equipment. In case you forgot, it takes 10 copies of a free item to MLB an equipment, so 11 copies per is required.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="42">
                    <p style={accordionPColor}>Q42. Why are there no Crystals when I clear this event’s missions? Where is the other loot that is normally in the store?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="42" style={accordionColor}>
                        <p>
                        When an event that has currency drops is reran, 
                        currency from the previous run of the event will 
                        be removed, the event will return with only the equipment 
                        in the currency store, and all of the crystal rewards from the missions will be replaced with L Pots.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="43">
                    <p style={accordionPColor}>Q43. Will every event return? I wasn’t able to get everything I wanted.</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="43" style={accordionColor}>
                        <p>
                        With the exception of Collaboration events, every event 
                        is likely to return at some point. It might be a few months before it returns, but it will eventually return.
                        </p>
                        <br />
                        <p>So far collaboration events have also been returning, but at a much slower 
                            schedule than regular events. We can never be certain a collaboration event will return in the future though.</p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </Card>
    )
}

//Giant Boss Section
function GiantBoss() {
    //Toggle and Hook functions to activate Accordion
    const [accordion, setAccordion] = useState("0");
    const toggle = (id) => {
        accordion === id ? setAccordion() : setAccordion(id);
    }


    return (
        <Card style={accordiongHeader} >
            <h2><center>Giant Bosses</center></h2>
            <Accordion flush open={accordion} toggle={toggle}>
                <AccordionHeader targetId="44">
                    <p style={accordionPColor}>Q44. What are Giant Bosses? What are they good for?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="44" style={accordionColor}>
                    <p>Giant Bosses are recurring boss fights that you can participate in from the 
                    ‘Giant Boss’ tab in Exploring. These bosses drop unique equipment and the 
                    materials required to enhance them, as well as soul fragments that are utilized in awakening a unit.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="45">
                    <p style={accordionPColor}>Q45. How do I defeat a Giant Boss? What units do I need to use?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="45" style={accordionColor}>
                    <p>
                        Each giant boss is different, so different units will be ideal for a 
                        smooth clear. You can find the general strategy that you would employ 
                        on each boss by clicking the ‘Hints’ button on the Giant Boss’s screen, 
                        then selecting units that do well for that type of strategy. 
                        <a href="https://docs.google.com/document/d/1LmEeMIsd4DLFML4ssHTzuAc5CCbu7mUYGJv1V3qPMNU/edit">Here</a> is a guide for farming Giant Bosses' PRO for keys.
                    </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="46">
                    <p style={accordionPColor}>Q46. Which level of the boss should I farm for a certain drop?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="46" style={accordionColor}>
                    <p>
                    If you are able to clear the level with consistency 
                    (and ideally with a few luck units), then you want to be 
                    farming the PRO level of a Giant Boss. That drops equipment 
                    at the highest rate and also drops more of the enhance materials you will need for the equipment.
                    </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="47">
                    <p style={accordionPColor}>Q47. How do I fight the Awoken version of a boss?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="47" style={accordionColor}>
                    <p>
                    When you fight the Giant Bosses, you may find certain keys in the loot. 
                    These are used to open the Awoken version of the boss (this is not the 
                    case with the timed hourly bosses). When you use 3 keys to open the awoken 
                    stage of a boss, you’ll unlock the ability to fight that stage for up to 
                    one hour. The stage will close when the hour is up OR you beat the fight 
                    once. You need to fight the Awoken version of the boss if you need more 
                    of the boss’s Fragment for awakening units (You get 3 for ‘free’ from mission clears of the previous levels, except for the timed hourly bosses).
                    </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="48">
                    <p style={accordionPColor}>Q48. I can’t find a certain Boss in the Giant Boss tab, where are they? When will they show up?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="48" style={accordionColor}>
                    <p>
                    If the boss you are looking for isn’t in the Giant Boss tab, 
                    it means they’re not on the schedule for that day. You can 
                    click on the ‘Schedule’ button in the Giant Boss tab and check 
                    to see which bosses will appear on a given day. It’ll usually 
                    give the dates up until the next update or maintenance, 
                    since events can throw the schedule off by having dungeons 
                    open for longer than normal. There are also <a href="https://cdn.discordapp.com/attachments/473204130433990671/595835839959924767/image0.png">hourly timed bosses</a> 
                    (Ifrit, Palamicia, Ragsherum Phantom, Goldola, Geo-Zagnas, and Wilkes) 
                    that take six hours to return and stay open for one hour each.
                    </p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </Card>
    )
}

//Misc Section
function Miscellaneous() {
    //Toggle and Hook functions to activate Accordion
    const [accordion, setAccordion] = useState("0");
    const toggle = (id) => {
        accordion === id ? setAccordion() : setAccordion(id);
    }


    return (
        <Card style={accordiongHeader} >
            <h2><center>Miscellaneous</center></h2>
            <Accordion flush open={accordion} toggle={toggle}>
                <AccordionHeader targetId="49">
                    <p style={accordionPColor}>Q49. Is this game Pay to Win? How far can I expect to get if I decide to play free?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="49" style={accordionColor}>
                        <p>
                        This game can be done completely free-to-play if you so desire, 
                        and if you are not wasting limited resources you can often complete 
                        even the hardest of content relatively soon after its release. 
                        The main factors that lead to a smooth play are rerolling for a 
                        decent starting roster of units and not wasting the limited 
                        resources you have access to (Limit Break stones and Awakening 
                        Souls mostly) and only using your Free Crystals on things that 
                        will likely benefit your account (first multi pulls on new banners and no more, not wasting on continues, etc.)
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="50">
                    <p style={accordionPColor}>Q50. What should I spend my energy on? Should I use my Stamina Potions?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="50" style={accordionColor}>
                        <p>
                        Your primary use of your energy should be to farm any current 
                        limited-time events until you are satisfied with the amount of 
                        loot you have gathered. Afterwards, you can farm Giant Bosses or 
                        Invasion events that you still need equipment for. If you are 
                        needing to spend energy after this, you can farm for secret 
                        weapons or farmable equipment. Stamina Potions are worth 
                        using to get more farming in on limited time events, especially 
                        if you only have a limited time to play or you found a great group 
                        of people to farm with; Stamina Potions are plentiful enough to not need to hoard them. 
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="51">
                    <p style={accordionPColor}>Q51. What are Rainbow Gems? How do I get them? Do I need them?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="51" style={accordionColor}>
                        <p>
                        Rainbow Gems are a very rare type of currency that is used for 
                        some of the strongest equipment in the game, “True” Weapons. 
                        You get them from a few sources, namely log-in bonuses for events, 
                        collaboration event milestones, as an exchange option from the hero 
                        crystals on certain banners, or by (the main way) using duplicate 
                        Hyper Rare units to Limit Break an already Max Limit Broken gacha unit. 
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="52">
                    <p style={accordionPColor}>Q52. What are ‘True’ Weapons? How do I get them? Do I need them?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="52" style={accordionColor}>
                        <p>
                        True Weapons are weapons that are either purchased 
                        with Rainbow Gems or summoned from exclusive equipment summon 
                        banners that advertise the ability to pull them. They are often 
                        more powerful versions of already available weapons or completely 
                        unique in how they operate, while also having special effects 
                        if they’re wielded by their “True” owner (ex. “True” Regracia has a bonus passive when equipped by Rayas).
                        </p>
                        <br />
                        <p>
                        True Weapons are extremely expensive in terms of limited resources and should usually only 
                        be bought if the unit it is equipped to becomes top-tier when equipped with their True Weapon; 
                        in these cases though, it often is one of the best purchases you can make.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="53">
                    <p style={accordionPColor}>Q53. What are Secret Weapons? Where do I get them?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="53" style={accordionColor}>
                        <p>
                        Secret Weapons are VERY rare drops that can be obtained from 
                        certain bosses within the game. They drop at a very low rate (current guess is 1/1000 or less) 
                        and often have unique passives attached to them. You can find a list of the current Secret 
                        Weapons and how to effectively farm them <a href="https://tinyurl.com/GSsecretweapons">here</a>.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="54">
                    <p style={accordionPColor}>Q54. What are ‘First Friends’? How can I benefit from this?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="54" style={accordionColor}>
                        <p>
                        ‘First Friends’ is a bonus within the game where the first person 
                        to run a multi lobby with a new player as a friend gets them to count 
                        as a ‘First Friend’, which has a few bonuses. Notably, you get 5 crystals 
                        for becoming someone’s first friend, and if your first friends log in 
                        a certain amount of days cumulatively you can get the 5 crystals from 
                        more first friends. More information can be found on the ‘First Friend’ banner in the Friends tab.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="55">
                    <p style={accordionPColor}>Q55. If I were to spend on this game, what is the best use of my money?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="55" style={accordionColor}>
                        <p>
                        If you are looking to get the most for your money, your best 
                        bets are to buy the $1 packs (literal best bang for your buck), 
                        the Master Summoner Pack (2 strong units, 3 great equipment, and 
                        5 unit LB stones is hard to beat for $30), and the MLB pack (crystals + 5 unit LB stones for $10). 
                        </p>
                        <br />
                        <p>
                        After that, it is good to ask in the Reddit’s 
                        Monthly Megathread or on Discord to ensure you get solid up-to-date information for any financial decisions.
                        </p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="56">
                    <p style={accordionPColor}>Q56. Where do I find the Battering Gale or Poison Ring?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="56" style={accordionColor}>
                        <p>
                        Adventurer’s Guild sub-quests have incorrect names for these two items.
                        </p>
                        <p>
                        Equipment Enhancement sub-quests:
                        </p>
                        <ul>
                            <li><b>Soul Recovery</b> - East Famelle -&gt; Lazelgia Mountains -&gt; Warrior of the Snowy Peak -&gt; Clear with only Earth Elements -&gt; Soul Recovery Recipe</li>
                            <li><b>Battering Gale</b> - West Famelle -&gt; Ancient Forest of Gonal -&gt; Lord of the Forest -&gt; Clear with only Fire Elements -&gt; Gale Crown Recipe (the craftable name is <b>Gale Headband</b>)</li>
                            <li><b>Poison Ring</b>  - Republic of Gramenia -&gt; Dara Desert -&gt; Princess of the Flaming Axe -&gt; Clear within 240 seconds -&gt; Antidote Ring Recipe (the craftable name is <b>Detox Ring</b>)</li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
                <AccordionHeader targetId="57">
                    <p style={accordionPColor}>Q57. How do I access different missions in the Materials tab in Exploring?</p>
                </AccordionHeader>
                <AccordionItem>
                    <AccordionBody accordionId="57" style={accordionColor}>
                        <p>
                        Each weekday has one set of element missions open for both the “The Path of Element” 
                        and “Materials in the ...” mission types. Weekends have Mysterious Materials open 
                        but this is rarely used compared to the weekday missions. You can pay 1 gem to open 
                        a mission on a different day but this is <b>NOT</b> recommended.
                        </p>
                        <br />
                        <p>
                            The Daily Elements are:
                        </p>
                        <ul>
                            <li><b>Monday:</b> Dark</li>
                            <li><b>Tuesday: </b> Fire</li>
                            <li><b>Wednesday: </b> Water</li>
                            <li><b>Thursday: </b> Earth</li>
                            <li><b>Friday: </b> Light</li>
                            <li><b>Saturday / Sunday: </b> All Elements</li>
                        </ul>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </Card>
    )
}

//Abbreviation Section
function Abbreviations() {
    //Toggle and Hook functions to activate Accordion
    const [accordion, setAccordion] = useState("0");
    const toggle = (id) => {
        accordion === id ? setAccordion() : setAccordion(id);
    }

    return (
        <Card style={accordiongHeader} >
        
        <Accordion flush open={accordion} toggle={toggle}>
            <h2><center>Common Abbreviations</center></h2>
            <AccordionHeader targetId="58">
                <p style={accordionPColor}>Show Abbreviations</p>
            </AccordionHeader>
            <AccordionItem>
                <AccordionBody accordionId="58" style={accordionColor}>
                    <center>
                    <table>
                        <tr>
                            <th><center><h3>Abbreviation</h3></center></th>
                            <th><center><h3>Definition</h3></center></th>
                            <th><center><h3>Description</h3></center></th>
                        </tr>
                        <tr>
                            <td>
                                <center><b>HR</b></center>
                            </td>
                            <td>
                                <center><b>Hyper Rare</b></center>
                            </td>
                            <td>
                                <center>A unit with a 5☆ evolution - typically referring to gacha units, not luck units.</center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center><b>MLB</b></center>
                            </td>
                            <td>
                                <center><b>Max Limit Break</b></center>
                            </td>
                            <td>
                                <center>A unit or equipment that has been Limit Broken to Limit break 5, the maximum something can be Limit Broken to.</center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center><b>GB</b></center>
                            </td>
                            <td>
                                <center><b>Giant Boss</b></center>
                            </td>
                            <td>
                                <center>Commonly refers to the boss battles that appear in Events. Rare chance that GB refers to "Gran Brave" (the unit)</center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center><b>LDH</b></center>
                            </td>
                            <td>
                                <center><b>Lesser Demonheart</b></center>
                            </td>
                            <td>
                                <center>A powerful, farmable Giant Boss equip from the “Caves of Deep Darkness” Giant Boss.</center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center><b>UoC</b></center>
                            </td>
                            <td>
                                <center><b>Unit of Choice</b></center>
                            </td>
                            <td>
                                <center>Refers to the Ultimate Hero Redeem Ticket. Lets you choose one Unit, from a selection of Units, to add to your roster.</center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center><b>Alch</b></center>
                            </td>
                            <td>
                                <center><b>Alchemy Stones</b></center>
                            </td>
                            <td>
                                <center>Currency used to summon on Alchemy Summon for Units</center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center><b>RG / RBG / RB</b></center>
                            </td>
                            <td>
                                <center><b>Rainbow Gems</b></center>
                            </td>
                            <td>
                                <center>Currency used to obtain a True Weapon from Rem's Shop</center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center><b>DPS</b></center>
                            </td>
                            <td>
                                <center><b>Damage per Second</b></center>
                            </td>
                            <td>
                                <center>Refers to any high-attack unit that can consistently keep their damage up.</center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center><b>DoT</b></center>
                            </td>
                            <td>
                                <center><b>Dungeon of Trials</b></center>
                            </td>
                            <td>
                                <center>A recurring event with multiple floors that progressively get harder as you complete each stage.</center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center><b>PotFG</b></center>
                            </td>
                            <td>
                                <center><b>Promise of the Funeral God</b></center>
                            </td>
                            <td>
                                <center>Name of the Boss-Specific Crest dropped by Oldeus in Crest Palace</center>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <center><b>Eq</b></center>
                            </td>
                            <td>
                                <center><b>Equip / Equipment</b></center>
                            </td>
                            <td>
                                <center>Refers to the items that Units can use in battle</center>
                            </td>
                        </tr>
                    </table>
                    </center>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    </Card>
    )
}