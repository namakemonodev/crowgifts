//EXPORT CROWS TO JAVA.JS


//Murata 3 gifts
const murataGifts = [{
    gift: 'You got a USB thumb drive',
    reaction1: 'What kind of secrets are on this?',
    reaction2: 'Is this yours, or some poor sap\’s?',
},
{
    gift: 'You got a key fob',
    reaction1: 'Are you giving me a car?',
    reaction2: 'You gonna tell me what this belongs to, or…?',
   },
   {
    gift: 'You got a magical girl transformation pen',
    reaction1: 'I KNEW I WAS A MAGICAL GIRL!!',
    reaction2: 'So… how do I activate this?',
}];

   //Gary 6 gifts
   const garyGifts = [{
    gift: 'You got a used facemask... with lipstick on it',
    reaction1: 'Not sure if you\’re trying to give or protect me from COVID…',
    reaction2: 'This is gross, dude.',
   },
   {
    gift: 'You got a SUICA card',
    reaction1: 'I wonder how much is on this…',
    reaction2: 'Someone is in trouble…',
   },
   {
    gift: 'You got a pack of Sudafed',
    reaction1: 'You know this is illegal in Japan, right?',
    reaction2: 'Are you a dealer?',
   },
   {
    gift: 'You got a cold, moldy French fry',
    reaction1: 'Giving me your leftovers?',
    reaction2: 'Oh, no, I\’m on a diet.',
   },
   {
    gift: 'You got a rusty nail',
    reaction1: 'I don\’t wanna get tetanus, dude.',
    reaction2: 'Oh, rusty nail...',
   },
   {
    gift: 'You got a mukade',
    reaction1: '…I\’m gonna kill you.',
    reaction2: 'RUN AWAY!!'
}];


   //Bartholomew 8 gifts
   const bartholomewGifts = [{
    gift: 'You got a Famichiki wrapper',
    reaction1: 'I\’m not sure the message you\’re trying to send here.',
    reaction2: 'I prefer Karaage-kun…',
   },
   {
    gift: 'You got a page ripped out of a porno mag',
    reaction1: 'I didn\’t know you were into this kinda thing.',
    reaction2: 'Not gonna kink-shame, but… ',
   },
   {
    gift: 'You got a cheki of a bandman',
    reaction1: 'I didn\’t take you for a Sena guy, Bart.',
    reaction2:  'You know, VK kinda suits you…',
   },
   {
    gift: 'You got a used hyperdermic needle', 
    reaction1: 'Ah… what kind of people do you hang out with, Bart??',
    reaction2: 'I\’m not touching that.',
   },
   {
    gift: 'You got a cicada skin', 
    reaction1: 'This is gross… but kinda cool.',
    reaction2: 'Do you collect these kinds of things?',
   },
   {
    gift: 'You got one half of a "Best Friends Forever" necklace',
    reaction1: 'Are you... keeping the other half?',
    reaction2: 'Aw, Bart, I didn\’t know you cared!',
   },
   {
    gift: 'You got a cockroach trap', 
    reaction1: 'Are you trying to tell me something?',
    reaction2: 'I guess this is useful…',
   },
   {
    gift: 'You got a diamond earring',
    reaction1: 'Is this real?',
    reaction2: 'I hope you didn\’t rip this off of someone\’s ear…',
}];

   //Ciara 8 gifts
const ciaraGifts = [{
    gift: 'You got a pull tab from a soda can',
    reaction1: 'Seriously? I\’m dying of thirst, here, man.',
    reaction2: 'Give me about 20 more and I can make us matching bracelets.',
   },
   {
    gift: 'You got a 500 yen coin',
    reaction1: 'Cool! Time to go to the game center!',
    reaction2: 'I\’m rich! Yay!',
  },
  {
    gift: 'You got a phone strap of Billiken',
    reaction1: 'Did you bring this all the way from Osaka?',
    reaction2: 'Do people even use phone straps anymore?',
  },
  {
    gift: 'You got a ball of tinfoil',
    reaction1: 'Is this from your tinfoil hat?',
    reaction2: 'Is anything inside?',
  },
  {
    gift: 'You got an extra-large safety pin',
    reaction1: 'What\’s this for?',
    reaction2: 'Now I want to eat In-n-Out.',
  },
  {
    gift: 'You got a pair of tweezers',
    reaction1: 'Are you trying to say I need to pluck my eyebrows?',
    reaction2: 'I guess this is useful.',
   },
   {
    gift: 'You got a needle threader',
    reaction1: 'Do I look like I sew?',
    reaction2: 'What is this even used for?',
  },
  {
    gift: 'You got a mattress spring',
    reaction1: 'Boing! Boing! Boing!',
    reaction2: 'This slinky sucks.',
}];

   //Myra 8 gifts
   const myraGifts = [{
    gift: 'You got an iPhone charger',
    reaction1: 'How did you know I needed a new one?',
    reaction2: 'Where did you get this?',
  },
  {
    gift: 'You got a tire pressure gauge',
    reaction1: 'I don\’t even own a car?',
    reaction2: 'How do I use this?',
  },
  {
    gift: 'You got an omamori',
    reaction1: 'What\’s this for… getting a lover? Hey!',
    reaction2: 'I… I needed this. Thanks.',
   },
   {
    gift: 'You got an oversized trash sticker',
    reaction1: 'Now I can finally throw out that treadmill I never use!',
    reaction2: 'Now if I can only remember to put it out on the right day.',
  },
  {
    gift: 'You got a kid\'s emergency buzzer',
    reaction1: 'Are you stealing from kids now?',
    reaction2: 'Am I in danger?',
  },
  {
    gift: 'You got a mosquito repellent band',
    reaction1: 'Now I\’m not gonna get eaten alive!',
    reaction2: 'Smelling this makes me feel ill… AM I A MOSQUITO?? Excuse me while I have an existential crisis…',
  },
  {
    gift: 'You got a full stamp card for a free massage',
    reaction1: 'Oh man, I could really go for this.',
    reaction2: 'What kind of “massage” are we talking, here?',
  },
  {
    gift: 'You got a coin locker key',
    reaction1: 'What\’s in the coin locker?',
    reaction2: 'Is this a setup? I\’m not gonna be your patsy!',
  }
  ];


function Crow (name, img, personality, gifts) {
    this.name = name;
    this.img = img;
    this.personality = personality;
    this.gifts = gifts;
}

const murata = new Crow('Murata', 'murata.png', 'He\'s the king of the crows! What a lucky day!', murataGifts);
const gary = new Crow('Gary', 'gary.png', 'Oh... Gary... He\'s an asshole. Be wary of his gifts.', garyGifts);
const bartholomew = new Crow('Bartholomew', 'bart.png', 'Oh, Bartholomew... he certainly does try...', bartholomewGifts);
const ciara = new Crow('Ciara', 'ciara.png', 'She loves shiny things, like most crows.', ciaraGifts);
const myra = new Crow('Myra', 'myra.png', 'Her gifts are usually rather useful!', myraGifts);

//Crow, gift, and reaction randomizer variables
const a = Math.floor(Math.random() * 101);
const b = Math.floor(Math.random() * 101);
const c = Math.floor(Math.random() * 2);