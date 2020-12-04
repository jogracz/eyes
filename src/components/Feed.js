import clsx from "clsx";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Post from "./Post";

const Feed = () => {
  const postList = [
    {
      id: 0,
      title: "nibble on tuna ignore human bite",
      article:
        "Pelt around the house and up and down stairs chasing phantoms spend all night ensuring people don't sleep sleep all day see owner, run in terror. Lick the other cats i love cuddles 𝕄𝔼𝕆𝕎 so lick arm hair reward the chosen human with a slow blink weigh eight pounds but take up a full-size bed. You have cat to be kitten me right meow love me! do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life so have secret plans mrow so dead stare with ears cocked or oooo! dangly balls!",
    },
    {
      id: 1,
      title: "Give me some of your food",
      article:
        "Hide head under blanket so no one can see spread kitty litter all over house so refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am sleep on dog bed, force dog to sleep on floor yet if it smells like fish eat as much as you wish. Fish i must find my red catnip fishy fish push your water glass on the floor crash against wall but walk away like nothing happened mrow have secret plans, for take a deep sniff of sock then walk around with mouth half open.",
    },
    {
      id: 2,
      title: "Nyaa nyaa attack like a vicious monster",
      article:
        " 𝕄𝔼𝕆𝕎 attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back chase ball of string enslave the hooman check cat door for ambush 10 times before coming in. Annoy kitten brother with poking no, you can't close the door, i haven't decided whether or not i wanna go out but leave hair on owner's clothes.",
    },
    {
      id: 3,
      title: "mesmerizing birds",
      article:
        "Use lap as chair purr hide head under blanket so no one can see or cats making all the muffins. Paw at beetle and eat it before it gets away. Stare at imaginary bug. I am the best eat owner's food and lick the curtain just to be annoying carefully drink from water glass and then spill it everywhere and proceed to lick the puddle throwup on your pillow mesmerizing birds or scratch me there, elevator butt. I love cats i am one wake up scratch humans leg for food then purr then i have a and relax chew foot. Pose purrfectly to show my beauty drool if it fits i sits and spit up on light gray carpet instead of adjacent linoleum. Intently stare at the same spot morning beauty routine of licking self yet poop on floor and watch human clean up",
    },
    {
      id: 4,
      title: "must find my red catnip fishy fish",
      article:
        " Kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment who's the baby eat an easter feather as if it were a bird then burp victoriously, but tender yet demand to be let outside at once, and expect owner to wait for me as i think about it rub whiskers on bare skin act innocent stare at wall turn and meow stare at wall some more meow again continue staring make plans to dominate world and then take a nap. Go into a room to decide you didn't want to be in there anyway plan your travel eat grass, throw it back up hey! you there, with the hands so tweeting a baseball. Cat mojo hiding behind the couch until lured out by a feathery toy, or get my claw stuck in the dog's ear. Hack jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water, and shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff white cat sleeps on a black shirt. ",
    },
    {
      id: 5,
      title: "take a deep sniff of sock",
      article:
        "Meow hack up furballs. Nyaa nyaa attack like a vicious monster. Purr like an angel don't nosh on the birds or fight own tail yet get my claw stuck in the dog's ear chew the plant or i rule on my back you rub my tummy i bite you hard so i can haz. Human is in bath tub, emergency! drowning! meooowww! inspect anything brought into the house, and attack feet, but nya nya nyan asdflkjaertvlkjasntvkjn (sits on keyboard), litter box is life meow. Meow get scared by sudden appearance of cucumber so mark territory, so eat all the power cords yet meow so stare out cat door then go back inside what the heck just happened, something feels fishy. Damn that dog sugar, my siamese, stalks me (in a good way), day and night claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? make plans to dominate world and then take a nap, but has closed eyes but still sees you. Kitty power found somthing move i bite it tail. Scratch me there, elevator butt.",
    },
  ];
  const styles = useFeedSStyles();

  return (
    <div className={styles.feed}>
      {postList.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

const useFeedSStyles = makeStyles(() =>
  createStyles({
    feed: {
      marginTop: 250,
      margin: 50,
      padding: 100,
      width: "70%",
      display: "flex",
      alignSelf: "center",
      flexDirection: "column",
      justifySelf: "center",
      backgroundColor: "#ddd",
    },
  })
);

export default Feed;
