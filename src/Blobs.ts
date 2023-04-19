import { card, challenge, curse, power, secretChallenge, secretPower } from './Types';

export const cards = [
    power("Cult Leader", "Set a secret symbol action such as touching your nose or putting your foot on the table. Whenever you do this symbol everyone else must follow. The last one to do so must drink."),
    power("Hold Person", "You can freeze people into a position for 30 seconds."),
    power("Fireball", "You now have the ability to cast a fireball. When you shout fireball everyone have to take cover or jump to the floor. Last person to do so drinks"),
    curse("Bag of Holding", "You must get into the bag of holding and stay there."),
    secretChallenge("Copycat", "Choose a random stranger and copy his movements for 5 minutes without them noticing. Get caught and you have to drink."),
    power("Otto's Irresistible Dance", "When you draw this card you become the dance master. You start dancing and everyone has to copy you, last to start dancing loses and drinks"),
    curse("French", "You are now French and must speak in a French accent (or speak French)."),
    curse("Good Manners", "You can't swear (in any language). If you do then you have to drink."),
    curse("Don't Say the “D” word", "You can't say “drink”. If you do then you have to d****"),
    secretPower("Deflect Magic", " If you become the target of another player's power, curse or challenge then you can rebound the effect on to someone else. Return this card to the deck after use."),
    challenge("Never split the party", "You are duct taped to another person for an hour. You have to go everywhere together, break the tape you drink."),
    challenge("Dragon egg", "You are now the mother of dragons. You must protect the egg. If you lose or the egg is destroyed, you drink."),
    challenge("The Rogue", "You have an hour to try and steal something from another stag member."),
    curse("The Druid", "Every so often you are told to turn into an animal. You have to pretend to be that animal for 30 seconds."),
    power("The Paladin", "You can cast Lay on Hands once to cure someone of their curse card. Return this card to the deck once used."),
    curse("It's a Crit!", "You've just lost a limb - tape one arm behind your back. You are unable to use this arm until healed."),
    power("DM's Blessing", "You can create one rule that must be followed under penalty of drink. Return this card to the deck. Drawing this card again nullifies previous rules made with it."),
    challenge("Lich's Potion", "Drink a shot of Unicum Zwack. Return this card to the deck."),
    curse("Armour Addiction", "You must wear a suit of armour made from tin foil."),
    card("Group", "Honour and Prestige", "The player assigns the following titles amongst the group. If anyone is referred to with the wrong title, or their title is omitted, then the speaker must drink: Baron, Lord, High Priest, Prince, Admiral, Ayotolla, Prime Minister, Senator, Praetor"),
    curse("Lefty", "You can't turn right. If you do then you must drink."),
    curse("Rhyme and Rhythm", "You must speak in rhyming couplets for 10 minutes. If you fail to rhyme then you must drink."),
    curse("Puny Human", "You become so weak that you can only drink using both hands at once. If you fail to do so then you must drink."),
    curse("Lies, Damn Lies and Lies", "For the next hour you can only answer questions with a lie."),
    power("The Great Narrator", "Pick 2 other people. The first person narrates the actions of the second for 20 minutes."),
    curse("Echoself", "For the next 30 minutes you must twice repeat the last word of each sentence you speak. Failure to do so means that you must drink."),
    curse("Edward Spoonhands", "You must tape several spoons to each of your hands (like Wolverine, but spoons)."),
    card("Group", "The Fellowship", "You must lead the entire group on an epic quest of your choosing.")
    //secretChallenge("Treasure Hoard", "You must collect ."),
];