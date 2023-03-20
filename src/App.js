import React, { useState, useEffect } from 'react';
import { Tweet } from 'react-twitter-widgets';
//import LazyLoad from 'react-lazyload'
import axios from 'axios';

const serverUrl = 'http://localhost:3001';

const TweetDataDisplay = () => {
  const [tweetData] = useState({
    "comments": {
      "Raze9500": [
        {
          "comment": "It's hilarious seeing a bunch of thugs thinking they can beat a community of Gods...\n\nclearly voting for @MetaTattooClub 💪 https://t.co/Vqfmde8OvP",
          "id": "1636734477949911042"
        }
      ],
      "artsy_skulls": [
        {
          "comment": "Made this for the 1 year anniversary of @thugmonkez. Editions still available at FoFu if someone's interested :)\n\nhttps://t.co/zfK5X9fxGl https://t.co/yBohEV2fVq",
          "id": "1636734282751262722"
        },
        {
          "comment": "Honest vote, shameless shill. Will it count 2x? Or maybe a 3x as I'm a founder being a 1/1 artist :)",
          "id": "1636748101430984704"
        }
      ],
      "wiicoin15": [
        {
          "comment": "Let's do this for \n@MetaTattooClub\n ..\nwe recruit the best of the Best ! https://t.co/HDJrfwquto",
          "id": "1636734233430327296"
        },
        {
          "comment": "The best Creative, and Engaged community\nFor ever @MetaTattooClub ...🔥🤟🔥🤟\nTurn me ON THIS SOUND ! https://t.co/YbEOYOQWQV",
          "id": "1636742044503646209"
        },
        {
          "comment": "Who's can reply HADES ? \n@MetaTattooClub https://t.co/7zMTHI0Od2",
          "id": "1636735428341518336"
        },
        {
          "comment": "Maybe @MagicEden votre for \n@MetaTattooClub .. BRUHHHHH ! https://t.co/EiGzoPvcGM",
          "id": "1636767066689785856"
        },
        {
          "comment": "tell these minkuz ... to regenerate their art lol .\n&gt; @MetaTattooClub &lt; #LFGI https://t.co/5RsAEvLbHS",
          "id": "1636894550449946624"
        }
      ],
      "DavidBarlic": [
        {
          "comment": "@MetaTattooClub got this one in the bank!",
          "id": "1636734049115951105"
        }
      ],
      "glokchain": [
        {
          "comment": "Voting thugmonke reimagined glok 1/1 now give them the crown https://t.co/0MM09mwUAt",
          "id": "1636733800834031617"
        },
        {
          "comment": "VOTE THUG MONKEZ FUK META RUG TATTOO https://t.co/K4glje3ue7",
          "id": "1636743184171581443"
        },
        {
          "comment": "@RoveWorldApp @SolNFTs @MetaTattooClub @thugmonkez the glokchain DOESNT lie",
          "id": "1636752366895603713"
        },
        {
          "comment": "this round is over stop this abuse ROVE https://t.co/l6Ryct8rno",
          "id": "1636755542143123457"
        }
      ],
      "snegleg": [
        {
          "comment": "this is a vote for @thugmonkez . https://t.co/Cfii2xiVqm",
          "id": "1636733755481022464"
        }
      ],
      "realgoken": [
        {
          "comment": "NOTHING CAN MAKE ME SELL MY ZONK! @thugmonkez (this is clearly a vote for zonks) https://t.co/TIGWjew6BM",
          "id": "1636733648929013763"
        },
        {
          "comment": "A cameo is still a cameo right? https://t.co/qPZVrtLYlK",
          "id": "1636741166375813134"
        },
        {
          "comment": "@RoveWorldApp @GIOfortheWIN_ @MetaTattooClub @thugmonkez @Adagio_TV Bullish",
          "id": "1636880682700898306"
        },
        {
          "comment": "@RoveWorldApp @KnownAsNich @MetaTattooClub @thugmonkez Zroccie*",
          "id": "1636889480593387521"
        }
      ],
      "cryptosavage44": [
        {
          "comment": "@MetaTattooClub @MTCPantheonDAO #LGFI https://t.co/KpuBmWiRpF",
          "id": "1636733516741263367"
        },
        {
          "comment": "@RoveWorldApp @solhosty @MetaTattooClub @thugmonkez @realgoken @RoveWorldApp just for clarification, a founder vote must mention the name of their project? \n\nIf not then I am also a founder! https://t.co/hn42QHoSU3",
          "id": "1636761858530062337"
        }
      ],
      "Humblejohn316": [
        {
          "comment": "@iTrevorJohnston @TommyRayMTC @MetaTattooClub deserve the crown https://t.co/VN118XMKj8",
          "id": "1636733052725481472"
        }
      ],
      "FitNFT_Cap": [
        {
          "comment": "https://t.co/7ce4mMQ8bp",
          "id": "1636731534425178116"
        }
      ],
      "undervaluednfts": [
        {
          "comment": "@RoveWorldApp So pay to win by paying influencers on Cameo 🤷‍♂️",
          "id": "1636731366900465666"
        }
      ],
      "RoveWorldApp": [
        {
          "comment": "Talent Show (5): Flex a talent you have while repping your community in some way within the video. \n\nOne vote per account so choose wisely...\n\nGood luck and may the loudest community win 👀",
          "id": "1636729968376918017"
        },
        {
          "comment": "Founder Outreach (10): Have another founder from a different community vote for your community\n\nShoey (10): Self-explanatory… LOL \n\nPublic (12): Shill your bags to the public - grocery store, apple store, park, party, etc.",
          "id": "1636729967215095808"
        },
        {
          "comment": "(2/3) Make a TikTok (5): Create a TikTok vid pertaining to your NFT community.\n\nFlex your NFT (5): Print out a picture of your communities NFT and flex it IRL.\n\nReimagine Art (7): Recreate the art of your community in a different art style from the original.",
          "id": "1636729965864468483"
        },
        {
          "comment": "(1/3) Same rules as the previous - Comment vote(1), Meme(3)\n\nPLUS\n\nNFT freestyle (10): Record a freestyle/song about your community. \n\nCelebrity cameo (15): Use https://t.co/vJOMzeC8ib to have a celeb record themselves talking about your community. https://t.co/9s7NcsOsbQ",
          "id": "1636729962983043072"
        },
        {
          "comment": "Speaking of March Madness...\n\nWho's team would Sister Jean be on? https://t.co/IE8ROJGe54",
          "id": "1636882223335972864"
        }
      ],
      "mastaGinxx": [
        {
          "comment": "We up. Let’s get it. https://t.co/Fx9QU0yXXQ https://t.co/FY9tGBsmcL",
          "id": "1636745281013448707"
        }
      ],
      "naakojfa": [
        {
          "comment": "@RoveWorldApp @SolNFTs @MetaTattooClub @thugmonkez i had to come back from the dead to vote for @thugmonkez",
          "id": "1636745257047015424"
        }
      ],
      "0x366e": [
        {
          "comment": "From the founder of @RadarDGC , my vote goes to Thugmonkez",
          "id": "1636745226000769024"
        }
      ],
      "OutkastNFTs": [
        {
          "comment": "My founder vote goes to @thugmonkez 🔥 \n\nthey were the first OG community to make me feel welcomed and uncomfortable at the same time 💯",
          "id": "1636745090541531136"
        }
      ],
      "Slickione": [
        {
          "comment": "Lfggg, thugz for the win https://t.co/3E1uWNT0Q1",
          "id": "1636744947373158401"
        }
      ],
      "Easyliyf": [
        {
          "comment": "Thugga thugga https://t.co/2DG9kr3JJy",
          "id": "1636744822202458113"
        },
        {
          "comment": "@thugmonkez https://t.co/rO0WwRugG2",
          "id": "1636744415820619779"
        }
      ],
      "BonangSit": [
        {
          "comment": "#MTC https://t.co/xTnOJUi2na",
          "id": "1636744755748167686"
        }
      ],
      "realbarks": [
        {
          "comment": "You’re welcome for posting this Medusa that’s never been seen before. My vote is MTC @MetaTattooClub \n\nI’m the Founder of @realgratitude_ :) https://t.co/YfX1myoU7P",
          "id": "1636744695807381507"
        },
        {
          "comment": "@realgratitude_ @RoveWorldApp I need to learn more ab your project - I think there may be a partnership possibility",
          "id": "1636749776799805440"
        }
      ],
      "___sticks___": [
        {
          "comment": "Thugga life or bust https://t.co/Lt7kh0FYvN",
          "id": "1636744508888203265"
        }
      ],
      "HetismijMarco": [
        {
          "comment": "I use this different realistic art style of Zeus chilling in the Pantheon DAO. No freaking monkeys are allowed to get in. @MetaTattooClub all the way!! https://t.co/YlDhYl0da4",
          "id": "1636744345922551809"
        }
      ],
      "NnazimuzoO": [
        {
          "comment": "Thuga thuga!!! @thugmonkez https://t.co/HordsgQKQJ",
          "id": "1636744247884783616"
        }
      ],
      "gozinbae": [
        {
          "comment": "Whatever you say, will not make us weak https://t.co/t3nYxASe5O",
          "id": "1636744223415500800"
        }
      ],
      "pooleman7": [
        {
          "comment": "Founder of Omerta, my vote goes to @MetaTattooClub !!!🥃",
          "id": "1636743863929917441"
        }
      ],
      "DrJohnsDecals": [
        {
          "comment": "@thugmonkez My talent is making custom Rocket League decals. Here's my ThugMonkez decal! https://t.co/oJkGTuqdaW",
          "id": "1636743823819780097"
        }
      ],
      "SolanaJerry": [
        {
          "comment": "Dw he’s retired at 30, just a passion project\n\nVote for thugmonkez https://t.co/aTRkgB019F",
          "id": "1636743785685106690"
        }
      ],
      "trichomosapien": [
        {
          "comment": "@thugmonkez aka Mega Thonkz Club aka Over 9000 aka We Have Tattoos IRL aka Not Your Circus aka Why Tyson Face Tattoo tho? aka I mean i don't even think Tyson likes his face tattoo aka Real Imitation Crab Meat aka Farm Fresh Fertilizer aka Spirit Bomb Simps aka Your Dad. https://t.co/CEhMMt0IIF",
          "id": "1636743473352282112"
        }
      ],
      "leothearch": [
        {
          "comment": "lets go @MetaTattooClub https://t.co/X7R47FbnRa",
          "id": "1636743453982748677"
        },
        {
          "comment": "let goh @MetaTattooClub https://t.co/N9FsFiBrAO",
          "id": "1636758650164224000"
        },
        {
          "comment": "https://t.co/KjYHzzXl3Y",
          "id": "1636940207173017603"
        },
        {
          "comment": "https://t.co/6xj6IMngHU",
          "id": "1636940146913443840"
        },
        {
          "comment": "https://t.co/bWCvAMvs1n",
          "id": "1636937704138223616"
        },
        {
          "comment": "@MetaTattooClub to strong to slap it https://t.co/90fdp1kGRK",
          "id": "1636937612077432832"
        }
      ],
      "WayneNooten": [
        {
          "comment": "@thugmonkez and it’s really not even close https://t.co/XpQKH0QZjr",
          "id": "1636743341533429761"
        },
        {
          "comment": "cc: @Iamamystreet",
          "id": "1636777732087463965"
        }
      ],
      "_Nikamma_": [
        {
          "comment": "this is a vote for thugmonkez https://t.co/0bszAmzL9f",
          "id": "1636743333413376003"
        },
        {
          "comment": "@RoveWorldApp @realgoken @MetaTattooClub @thugmonkez bro review the raid to earners first 💀💀",
          "id": "1636741374165876737"
        }
      ],
      "paulmestes": [
        {
          "comment": "@MetaTattooClub https://t.co/lFAwykNIyW",
          "id": "1636743263465148416"
        }
      ],
      "vaf229": [
        {
          "comment": "https://t.co/06UmVBl56s",
          "id": "1636743038117761024"
        }
      ],
      "fuhadd_sol": [
        {
          "comment": "Won’t even flinch a bit,\nMy vote is for @thugmonkez https://t.co/teihzAEWBq",
          "id": "1636742835155136512"
        }
      ],
      "Hopiewan_Kenobi": [
        {
          "comment": "@MetaTattooClub for the W!! Smack these ugly little monkez!! https://t.co/cUFojyiH1V",
          "id": "1636742819145719808"
        }
      ],
      "DexterJWatts": [
        {
          "comment": "@thugmonkez are combos available? My talent is eating burritos in my printed TMZ hat! Thugmonkez#420 https://t.co/t37mFIcl3S",
          "id": "1636742664342126592"
        }
      ],
      "Proton_Valve": [
        {
          "comment": "https://t.co/4CLfFjvDo6",
          "id": "1636742535258226688"
        }
      ],
      "SOLTRAPPER305": [
        {
          "comment": "@thugmonkez https://t.co/qWqPE0czGL",
          "id": "1636742107569242112"
        }
      ],
      "Its_Eric20": [
        {
          "comment": "I didn’t choose the @thugmonkez life, it chose me",
          "id": "1636741846679588866"
        }
      ],
      "Devplexx": [
        {
          "comment": "@RoveWorldApp @realgoken @MetaTattooClub @thugmonkez Idk says exactly what he posted https://t.co/CB7moYTKQV",
          "id": "1636741749178617858"
        },
        {
          "comment": "IPad sketch of the king @SolNFTs vote for @thugmonkez ofc https://t.co/yhoj5lL9FS",
          "id": "1637065896291123201"
        }
      ],
      "JacksInTheBlock": [
        {
          "comment": "Okay, as both a founder and tattoo artist, my vote is for @thugmonkez",
          "id": "1636741702244503552"
        }
      ],
      "ILoveTrading02": [
        {
          "comment": "@thugmonkez are just superior",
          "id": "1636741683894448130"
        }
      ],
      "maxpwr3075": [
        {
          "comment": "Thugga Thugga. My vote is for @thugmonkez https://t.co/2T7VS0RBPC",
          "id": "1636741655087706112"
        }
      ],
      "TheGrimmersFam": [
        {
          "comment": "https://t.co/37EvGBI2aX",
          "id": "1636741444806246400"
        }
      ],
      "SolNFTs": [
        {
          "comment": "@RoveWorldApp @realgoken @MetaTattooClub @thugmonkez I believe the reply is using https://t.co/aWidNa50EF to have a celebrity talk about their community",
          "id": "1636741069902675968"
        },
        {
          "comment": "Chuck-E Cheese got me feeling some sort of way so I spit this freestyle as a vote for thugmonkez https://t.co/XKsuMuBNik",
          "id": "1636809905989402639"
        }
      ],
      "xdaylon": [
        {
          "comment": "As a founder, i gotta give ma vote to the @thugmonkez &lt;3 shoutout to the homie @realgoken",
          "id": "1636740779900039168"
        },
        {
          "comment": "@realgoken Fasho. GM from the Chain ⛓️ https://t.co/ScJ22sKR4B",
          "id": "1636759580695998467"
        }
      ],
      "ObiWan50665838": [
        {
          "comment": "@MetaTattooClub https://t.co/CpLc43rIZH",
          "id": "1636740522156109825"
        }
      ],
      "FBnot_V": [
        {
          "comment": "Gang fkn gang baby!! Y'all already know what's good, MTC for sure👊📈🔥\n@MetaTattooClub https://t.co/xmcyujV5Z3",
          "id": "1636740467764129793"
        }
      ],
      "SlippyTy": [
        {
          "comment": "MTC for the Win!!! https://t.co/BpR0wTHy9J",
          "id": "1636740075403739140"
        }
      ],
      "theindiecove": [
        {
          "comment": "Organic community &gt;&gt; https://t.co/v8BOStNkD3",
          "id": "1636740015295279107"
        }
      ],
      "flaviu_radu": [
        {
          "comment": "@MetaTattooClub 💯🔥",
          "id": "1636739761405677570"
        }
      ],
      "Iron_Pino": [
        {
          "comment": "@MetaTattooClub need to win! https://t.co/CP70FZVpZd",
          "id": "1636739644980068354"
        }
      ],
      "CheJohnsson": [
        {
          "comment": "@MetaTattooClub https://t.co/hUpZfnIyxE",
          "id": "1636739342897913856"
        }
      ],
      "LarsNFTs": [
        {
          "comment": "Thugmonkez 100% https://t.co/Bu5V7aO5R3",
          "id": "1636739021077348354"
        }
      ],
      "PeterOgink": [
        {
          "comment": "Ofcourse rooting for @MetaTattooClub !! Send those monkeys back to their cage https://t.co/Wn2jftD2CJ",
          "id": "1636738180924817409"
        }
      ],
      "AlexandruGRO": [
        {
          "comment": "This is what's going to happen. 🫡 @MetaTattooClub 🔥👑 https://t.co/fWHjvKZpPK",
          "id": "1636737808281874432"
        }
      ],
      "bitcoinrookie11": [
        {
          "comment": "@RoveWorldApp I am the founder/CEO of @NftNoahsArk and I am casting my vote for the @MetaTattooClub community!! Let’s go baby!!! https://t.co/cDqdEAotC8",
          "id": "1636737592610766850"
        }
      ],
      "Soulana_Raver23": [
        {
          "comment": "Here my vote again for the gang @MetaTattooClub ! Wow time to rock'n roll! #LGFI 🏛 https://t.co/QBHqu2I1B1 https://t.co/4MyAQAII6P",
          "id": "1636737423169187842"
        }
      ],
      "yuilang420": [
        {
          "comment": "this is a vote for @thugmonkez https://t.co/n77nuLepJj",
          "id": "1636736692018135041"
        },
        {
          "comment": "https://t.co/0t9js6qLCo",
          "id": "1636755879004626944"
        }
      ],
      "JustnSol": [
        {
          "comment": "@MetaTattooClub rolling in deep for the W https://t.co/JixKILEotF",
          "id": "1636736546018607106"
        }
      ],
      "mannyv_sol": [
        {
          "comment": "THUGZ HUGZ AND DRUGZ @thugmonkez https://t.co/tZ7Dxn9sbJ",
          "id": "1636736058296508417"
        }
      ],
      "Khaljr_sol_eth": [
        {
          "comment": "@thugmonkez https://t.co/DclZDzVYPv",
          "id": "1636736044988080132"
        }
      ],
      "OGShadowOG": [
        {
          "comment": "@MetaTattooClub LEEETS FUCKING GOOO! #MTC 🍻🔥 https://t.co/IEcneARO7i",
          "id": "1636735593425059840"
        }
      ],
      "cooler_thanmint": [
        {
          "comment": "@GordonRamsay knows @MetaTattooClub is the only way to go @MTCPantheonDAO https://t.co/Ht3Obw8N4W",
          "id": "1636735565344264193"
        },
        {
          "comment": "my third eye dusa can’t see a monkey winning @MTCPantheonDAO @MetaTattooClub #LGFI https://t.co/wrSbq8G78U",
          "id": "1636763123330830336"
        }
      ],
      "ChalkyJason": [
        {
          "comment": "@thugmonkez https://t.co/ky5Ubp6ORk",
          "id": "1636735557756698624"
        },
        {
          "comment": "@thugmonkez for sure!!",
          "id": "1636735299416883200"
        },
        {
          "comment": "As a hotdog I vote for @thugmonkez",
          "id": "1636757314710429697"
        },
        {
          "comment": "As a founder, my vote is for @thugmonkez 100%",
          "id": "1636756893141020675"
        }
      ],
      "Zeenyth_": [
        {
          "comment": "Thugga-Luggin 🔥 https://t.co/a4DR2Lxksx",
          "id": "1636735396523687938"
        },
        {
          "comment": "If @notbunjil voted for us in TMZ he would not cough and not die. 👀 #bullish",
          "id": "1636809605857808384"
        }
      ],
      "DDJZnft": [
        {
          "comment": "The NEW undisputed CHAMPION \n🏆👑@MetaTattooClub 👑🏆#MTC #LGFI🏛️ https://t.co/XrwnbTKMMU https://t.co/Fx7ihAqFoU",
          "id": "1636735306119487488"
        }
      ],
      "crypto_rosin": [
        {
          "comment": "https://t.co/yotV55KPBT",
          "id": "1636735098484555777"
        }
      ],
      "gettles": [
        {
          "comment": "Without a doubt \nMy founder vote goes to @thugmonkez",
          "id": "1636735078155034626"
        },
        {
          "comment": "My @thugmonkez reimagined... 🧡 https://t.co/J7hxH1hFbp",
          "id": "1636791920881172480"
        }
      ],
      "__Trap": [
        {
          "comment": "@thugmonkez got my vote https://t.co/H3mhcPqrtr",
          "id": "1636752809612947457"
        }
      ],
      "LethalKnowledge": [
        {
          "comment": "Made it to the finals baybee! https://t.co/95dSuGrs91",
          "id": "1636752657208561670"
        }
      ],
      "Hawleye11": [
        {
          "comment": "@MetaTattooClub let’s get it💪🏻 https://t.co/BZ9JMHJVNH",
          "id": "1636752604234407941"
        }
      ],
      "GingerJaede": [
        {
          "comment": "@RoveWorldApp @_itsme_E_ @MetaTattooClub @thugmonkez 🔥@metatattooclub 🔥 https://t.co/Eq1cqGLvzq",
          "id": "1636752579681210368"
        }
      ],
      "clubnft_dao": [
        {
          "comment": "As a founder I’m voting @MetaTattooClub \n\nThey know what is up and here to revolutionize web3 and tattoos. https://t.co/QeJY6RVXVb",
          "id": "1636752303997825032"
        }
      ],
      "luvjo187": [
        {
          "comment": "#MTC https://t.co/UoevdbjuMS",
          "id": "1636752102029664264"
        }
      ],
      "BeavisNFTs": [
        {
          "comment": "@MetaTattooClub https://t.co/mA2P1imeAO",
          "id": "1636751844474073088"
        }
      ],
      "obestheone": [
        {
          "comment": "MTC wants it more @iTrevorJohnston https://t.co/vbeIBrm39t",
          "id": "1636751585924775936"
        }
      ],
      "PuddingSkin": [
        {
          "comment": "MTC can't stop, won't stop! https://t.co/YVo8GqKOKt",
          "id": "1636751314678947840"
        }
      ],
      "ohthatsric": [
        {
          "comment": "@thugmonkez duh cc: @DexterJWatts",
          "id": "1636750977503211522"
        }
      ],
      "horigooby": [
        {
          "comment": "As a founder, my vote is for @thugmonkez 100%",
          "id": "1636750961585815554"
        }
      ],
      "NotNPH": [
        {
          "comment": "Let's go @thugmonkez! https://t.co/YKirKTkTiB",
          "id": "1636750541933142016"
        }
      ],
      "alphasqrl": [
        {
          "comment": "@RoveWorldApp @snegleg @MetaTattooClub @thugmonkez MTC is a garden gnome deriv. \n\nChange my mind. https://t.co/3qKYPmmvuz",
          "id": "1636750239838216200"
        },
        {
          "comment": "hey gnoooooomiiiiiiiiiies.......\n\nvote thugmonkez https://t.co/rmGNOCfT4i",
          "id": "1636763393704222720"
        }
      ],
      "BabyLightYear": [
        {
          "comment": "@thugmonkez stay thugged out always all through the millenium https://t.co/DCT7MTSzGu",
          "id": "1636750056928985088"
        }
      ],
      "SOLSweepa": [
        {
          "comment": "My vote is for @MetaTattooClub #LGFI🏛 https://t.co/8R4ilz0VHC",
          "id": "1636750000427286528"
        }
      ],
      "YourGlockness": [
        {
          "comment": "TMZ to the moon no derivative deserves to win this challenge https://t.co/h6ILR2RGCE",
          "id": "1636749958702419968"
        }
      ],
      "_itsme_E_": [
        {
          "comment": "@MetaTattooClub all the way! Thank you @Flack00oo! https://t.co/aZXMTkGgHO https://t.co/YqpUHX4Xmu",
          "id": "1636749925059788804"
        }
      ],
      "Wipers13": [
        {
          "comment": "@MetaTattooClub for the fucking win",
          "id": "1636749765332598785"
        }
      ],
      "ArtNftCreator": [
        {
          "comment": "@MetaTattooClub is dope af https://t.co/fAOeydeUZR",
          "id": "1636749655332495362"
        }
      ],
      "morgpng": [
        {
          "comment": "As a founder, I cast my vote for @thugmonkez",
          "id": "1636749421479182340"
        }
      ],
      "notpollux": [
        {
          "comment": "My founder vote goes to @thugmonkez \n\nThe community is something special and so much fun 🐒",
          "id": "1636749370757615617"
        }
      ],
      "_gadizzle": [
        {
          "comment": "MTC for life!!!! LFG!!!!!! https://t.co/NMUGkGv5Hq",
          "id": "1636748800596271104"
        }
      ],
      "wesbaby420": [
        {
          "comment": "@RoveWorldApp if i do a shoey with an mtc nft printed out taped to my shirt in a park will i get all points or just 10 for a shoey?",
          "id": "1636748707612721153"
        },
        {
          "comment": "my founders vote and first shoey goes to the fam over @MetaTattooClub these monke bozos are shot #LGFI https://t.co/dTqwt8gnO2",
          "id": "1636866707670159361"
        }
      ],
      "with_A_vision": [
        {
          "comment": "@MetaTattooClub babbbyyyyyyyy https://t.co/8gpnPxIQN6",
          "id": "1636748178618830849"
        }
      ],
      "alldegod": [
        {
          "comment": "pretend like im a founder and my vote goes to thuga thuga",
          "id": "1636748099912867840"
        },
        {
          "comment": "https://t.co/pA03Vptbjw",
          "id": "1636746637912723459"
        },
        {
          "comment": "down bad mtc https://t.co/e4W5B4wTqH",
          "id": "1636768463544029185"
        },
        {
          "comment": "metatattoo pussies 🌚",
          "id": "1636763433910833154"
        }
      ],
      "woshvad": [
        {
          "comment": "Thugger thugger, @thugmonkez all the wayyyy https://t.co/V1GHsyQUIb",
          "id": "1636748050533339136"
        }
      ],
      "Tobenna3": [
        {
          "comment": "Founder @CSWN_Dao , you have my vote https://t.co/2PyU1l3u4m",
          "id": "1636748047479717888"
        }
      ],
      "lt_profit": [
        {
          "comment": "Thugmonkez https://t.co/9Z5RsNuPnq",
          "id": "1636747777538682886"
        }
      ],
      "BLE77_ED": [
        {
          "comment": "Monkez",
          "id": "1636747597774999560"
        }
      ],
      "Od2real4ReaLL": [
        {
          "comment": "MTC sorry wenbag",
          "id": "1636747286595391491"
        }
      ],
      "angrybunny1979": [
        {
          "comment": "@MetaTattooClub https://t.co/vKMSkAE9PM",
          "id": "1636747151924445184"
        },
        {
          "comment": "Whatup Monke Thugz? \n\nOne BIG vote for @MetaTattooClub obviously. ✌🏻",
          "id": "1636746984491974657"
        }
      ],
      "JaboiRandy": [
        {
          "comment": "Thung monk",
          "id": "1636746876136439808"
        }
      ],
      "keeztxt": [
        {
          "comment": "I vote for Thug @thugmonkez\n\nNeed a new tattoo artist to cover up this sh!t https://t.co/0RjCqhqDwZ",
          "id": "1636746725254905857"
        }
      ],
      "XTRAP99": [
        {
          "comment": "https://t.co/VVhaUbQBQo",
          "id": "1636746676122656768"
        }
      ],
      "bmah03": [
        {
          "comment": "Thug thug thug.",
          "id": "1636746665758724096"
        }
      ],
      "project_ordo": [
        {
          "comment": "As supreme leader of ORDO, I cast my vote MTC. LFG BABY!!! Ain't nobody want a party at chucky cheese's. C'mon man! https://t.co/tgITvUV5uw",
          "id": "1636746518819401729"
        }
      ],
      "Jules77CWC": [
        {
          "comment": "LFG MTC https://t.co/WGoXbbd2A7",
          "id": "1636746185175355392"
        }
      ],
      "trongangdao": [
        {
          "comment": "#LGFI🏛️ MTC Baby! https://t.co/NpybYQLWNL https://t.co/Sxr0chcJOO",
          "id": "1636746171795533824"
        }
      ],
      "darktit33881690": [
        {
          "comment": "I got no talent, but @MetaTattooClub looks dope, and my G @cryptosavage44 is bullish on them, so bullish on them as \n\nHope I join them someday, but I'm broke lmao",
          "id": "1636745834275684352"
        }
      ],
      "Tim_369666": [
        {
          "comment": "To many 🐒 NFTs send the thugs collection to 🔥\nMy vote go to @MetaTattooClub https://t.co/lIeIaWIQsL",
          "id": "1636745637973598208"
        },
        {
          "comment": "If Thugmonkez loose? This is a great idea for your community! \nRebrand to Thongmonkez. \nA Web2 business and great merch to holders.\nThe Timeline when they get the merch and show it off would be priceless. https://t.co/5vadLTkb31",
          "id": "1636756787733880833"
        }
      ],
      "krtvdept": [
        {
          "comment": "thonzonz https://t.co/R8th66n2YU",
          "id": "1636745597871874048"
        }
      ],
      "junhyebin1": [
        {
          "comment": "#LGFI https://t.co/dsMKlmCYKD",
          "id": "1636745413884784640"
        }
      ],
      "MrBSN868": [
        {
          "comment": "$MTC @MetaTattooClub is taking over\nMy vote for MTC https://t.co/jPmZmkzKNk",
          "id": "1636761774476107781"
        }
      ],
      "SolanaWraith": [
        {
          "comment": "My vote goes to @MetaTattooClub does this count as a founder outreach vote?",
          "id": "1636760897761705985"
        }
      ],
      "Ayeeevian": [
        {
          "comment": "EZ https://t.co/ID2dGTp1Hs",
          "id": "1636760626075963407"
        }
      ],
      "DTXNFTs": [
        {
          "comment": "Didn’t know thugmonkez were such a strong community",
          "id": "1636760511852453893"
        }
      ],
      "spillink920": [
        {
          "comment": "@MetaTattooClub lfg https://t.co/pW1k6GEyNl",
          "id": "1636760120368549892"
        }
      ],
      "jsj_sol": [
        {
          "comment": "Of course my vote is MTC @MetaTattooClub https://t.co/23334Wvesn",
          "id": "1636760040286613504"
        }
      ],
      "darrendokz": [
        {
          "comment": "is this the fight? https://t.co/xknItGEb6d",
          "id": "1636759857507487744"
        }
      ],
      "blockchainwordl": [
        {
          "comment": "@MonkeRejects 1st but I will vote this time for @thugmonkez 😛 team Monke 🫂🐒",
          "id": "1636759768990711809"
        }
      ],
      "DegenDav3": [
        {
          "comment": "Hey kids, don't get a tattoo it causes cancer \n@thugmonkez lffffffgggggggggg 🔥",
          "id": "1636759217855152128"
        }
      ],
      "CharmsSol": [
        {
          "comment": "@MetaTattooClub https://t.co/Fa5RVEdqEs",
          "id": "1636759184992788480"
        }
      ],
      "SOLG00Dman": [
        {
          "comment": "@MetaTattooClub gang all the way baby 👊🏼 https://t.co/rDs6OXdYbG",
          "id": "1636759138356326406"
        }
      ],
      "BoredApe_Solana": [
        {
          "comment": "My vote is MTC \n@MetaTattooClub",
          "id": "1636759108228616192"
        }
      ],
      "LekstArie": [
        {
          "comment": "@MetaTattooClub for the win. Leave those monkeys at the zoo. https://t.co/rvZ0Rh1OS9",
          "id": "1636758938782777346"
        }
      ],
      "tworl_eth": [
        {
          "comment": "@MetaTattooClub 4 sure https://t.co/DrPWpwHwTj",
          "id": "1636758911914246146"
        }
      ],
      "kipolevs": [
        {
          "comment": "+7 vote for @thugmonkez ezpz https://t.co/kV5oVnMTUT",
          "id": "1636758377232752641"
        }
      ],
      "TheCoinesseur": [
        {
          "comment": "Appreciate it a lot 😂♥️",
          "id": "1636758068649160706"
        },
        {
          "comment": "My first Shoey ever!!! My vote is for @MetaTattooClub , I can't catch a breath with these mfers!!😤🐐👑 https://t.co/E3tppM1Av5",
          "id": "1637075665131302915"
        }
      ],
      "papasofrito": [
        {
          "comment": "@MetaTattooClub",
          "id": "1636757929914236928"
        }
      ],
      "SWATGoblin": [
        {
          "comment": "Good luck all https://t.co/Im4UAdPckl",
          "id": "1636757772975984641"
        }
      ],
      "T0K3NSTR0K1N": [
        {
          "comment": "Voting @thugmonkez for the homies",
          "id": "1636757690348195841"
        }
      ],
      "datgurltoria": [
        {
          "comment": "@thugmonkez https://t.co/Vxk22lVTfy",
          "id": "1636757670181912578"
        }
      ],
      "MazzisMazz": [
        {
          "comment": "@RoveWorldApp @MetaTattooClub  bruuuuuuh https://t.co/fCYEYot89F",
          "id": "1636757576149872644"
        },
        {
          "comment": "@MetaTattooClub 4 Life .\nGet back to your fuckin cage! https://t.co/fSNUomRdy7",
          "id": "1636822224689610766"
        }
      ],
      "McDooglesDAO": [
        {
          "comment": "its a me the mcdoogles founder and i want @thugmonkez https://t.co/6jcACC7lqK",
          "id": "1636757477797646336"
        }
      ],
      "Vish_NFT": [
        {
          "comment": "As a founder of VishDAO, i vote for @MetaTattooClub https://t.co/ijn857ZcLz",
          "id": "1636757431744118784"
        }
      ],
      "sensaishun": [
        {
          "comment": "I vote @thugmonkez!! Duhhhh https://t.co/nOOHblCPeA",
          "id": "1636757275770781698"
        }
      ],
      "wikhandbanan": [
        {
          "comment": "Let's go META TATTOO CLUB @MetaTattooClub",
          "id": "1636757220380790784"
        }
      ],
      "Absolem222": [
        {
          "comment": "@MetaTattooClub knows how to throw the best parties, and who doesn't love free tattoos!?!? https://t.co/0mGPmPeLbD",
          "id": "1636756981787631619"
        }
      ],
      "Artijah_CR": [
        {
          "comment": "@MetaTattooClub 💎",
          "id": "1636756764698767361"
        }
      ],
      "dao_bean": [
        {
          "comment": "As a founder of BeanDAO its a vote for thugmonkez https://t.co/A2dZuJ8mnP",
          "id": "1636756648336437250"
        }
      ],
      "godo_sol": [
        {
          "comment": "Opus Labs 🤝  MTC",
          "id": "1636756646503526402"
        }
      ],
      "1212carter": [
        {
          "comment": "yes. this is a vote for thugmonkez https://t.co/FkNON4n9VS",
          "id": "1636756395067428864"
        }
      ],
      "Tripp_fuX": [
        {
          "comment": "@LilDegens Alpha and my vote is for @MetaTattooClub",
          "id": "1636756310317203456"
        }
      ],
      "vladtoni": [
        {
          "comment": "my vote goes to @thugmonkez !!!\n\nas a founder",
          "id": "1636756287118778370"
        }
      ],
      "SHARKTHESEAL": [
        {
          "comment": "@BookCameo @thugmonkez https://t.co/WQCyp9b5Hb",
          "id": "1636756254738591744"
        },
        {
          "comment": "Freestyle (just a joke).\n@thugmonkez https://t.co/IVDpjv6Vd2",
          "id": "1636772316540485632"
        }
      ],
      "alex201907": [
        {
          "comment": "THIS IS A VOTE FOR THONZONZ https://t.co/gN9YEDJNyi",
          "id": "1636756163487232002"
        }
      ],
      "XicoSR": [
        {
          "comment": "GG well played 🫡",
          "id": "1636756129836302338"
        },
        {
          "comment": "Easy vote for @thugmonkez \nAnd I invoke my multiplier 😤",
          "id": "1636754636123131909"
        },
        {
          "comment": "@RoveWorldApp @alphasqrl @MetaTattooClub @thugmonkez What else Boss? https://t.co/XUByEt7VL8",
          "id": "1636803351055564827"
        }
      ],
      "notzibo": [
        {
          "comment": "Gotta be @thugmonkez https://t.co/inkeYWznMG",
          "id": "1636756111133900801"
        }
      ],
      "ACdegods": [
        {
          "comment": "+1 (million) for the @thugmonkez 💪 https://t.co/0gkt9fBuQ0",
          "id": "1636756002568560642"
        }
      ],
      "cryptoSh1nobi": [
        {
          "comment": "Its on. MTC!!! https://t.co/v3SsnSxvTo",
          "id": "1636755886315061250"
        }
      ],
      "MrkMrksol": [
        {
          "comment": "This is Lesson nr.1 mfrs Watch and learn👑 https://t.co/aiQLTqVG6l",
          "id": "1636755846305595397"
        },
        {
          "comment": "Just some facts.  Monkey pic is not even close to this..\nLFG @MetaTattooClub https://t.co/t4KtBcObJQ",
          "id": "1636824586271506459"
        },
        {
          "comment": "Statue of NFT  liberty! @MetaTattooClub https://t.co/bKKge5E4A1",
          "id": "1636842625125711873"
        },
        {
          "comment": "Let ´s drink  \nfor the @MetaTattooClub  \nhttps://t.co/f8xK8T9TfB",
          "id": "1636875116314259459"
        }
      ],
      "Matty726_ff": [
        {
          "comment": "@CyberFrogsNFT 🤝 @MetaTattooClub https://t.co/iuGcmqzlj5",
          "id": "1636755806942003200"
        }
      ],
      "SOLQueefQueen": [
        {
          "comment": "no, ser. I would not.... 1 vote for @thugmonkez plz https://t.co/9vX09XL8X4",
          "id": "1636755667980795904"
        }
      ],
      "solhosty": [
        {
          "comment": "my founder vote is for @thugmonkez 😈 https://t.co/NLxCM49s3g",
          "id": "1636755363239428096"
        }
      ],
      "Joobeer87": [
        {
          "comment": "LFG @MetaTattooClub https://t.co/P88uaVXmqr",
          "id": "1636755192900202496"
        }
      ],
      "cacheexe": [
        {
          "comment": "as the founder of @LilDegens @MetaTattooClub gets my vote 😈",
          "id": "1636754951358787587"
        }
      ],
      "VelosiFF": [
        {
          "comment": "@MetaTattooClub! https://t.co/JRDthcm4jh",
          "id": "1636754930919936000"
        }
      ],
      "m1msytv": [
        {
          "comment": "LFG \n\nM\nT\nC",
          "id": "1636754816058683393"
        }
      ],
      "DOXXEDsol": [
        {
          "comment": "🤝 @thugmonkez https://t.co/0tzHofuy5q",
          "id": "1636754646537494530"
        }
      ],
      "KryptoPartisan": [
        {
          "comment": "Voting for my MTC fam, hier ein pix version from my Medusa https://t.co/NkX5vri99u",
          "id": "1636754186086801413"
        }
      ],
      "chemists_": [
        {
          "comment": "AS A FOUNDER OF CHEMISTS ON @SUINETWORK, I VOTE FOR @THUGMONKEZ SO THEY HAVE A GOOD FUNCTION @ @OLIVEGARDEN https://t.co/5sbaQEYYyb",
          "id": "1636753804929667073"
        }
      ],
      "daniyyelaustine": [
        {
          "comment": "Thugmonkez!!! What is your profession!!\n@thugmonkez https://t.co/9q0hNrXhSg",
          "id": "1636753539035803649"
        }
      ],
      "MCB95_": [
        {
          "comment": "My vote goes to @MetaTattooClub LFG fam! https://t.co/duGNUS4Tul",
          "id": "1636772299515871241"
        }
      ],
      "NotGer0": [
        {
          "comment": "I vote @thugmonkez! https://t.co/BlUO9awe7h",
          "id": "1636772184113958912"
        }
      ],
      "Alan_Swift_": [
        {
          "comment": "There is only one 👑 @MetaTattooClub https://t.co/X1oCaaFMuL",
          "id": "1636771926214586368"
        },
        {
          "comment": "I hope those @thugmonkez can peel grapes!  That's gonna be their eternal penance for this ass whooping by the God's of MTC! 👑🙏☘️❤️",
          "id": "1636894035536408577"
        }
      ],
      "FlappyKW": [
        {
          "comment": "As a non-founder myself, I vote for @thugmonkez https://t.co/btRBH9rz4m",
          "id": "1636771889480896512"
        }
      ],
      "SolVisitors": [
        {
          "comment": "It's way too easy to overdose on Thugmonkez. Just a tiny bit is extremely dangerous, and potentially lethal. \n\nPenny for scale.\n\nVoting post here (video + bonus multipliers etc): https://t.co/TT94sDYZCC https://t.co/01GlVRkZBS",
          "id": "1636771732660047872"
        },
        {
          "comment": "As a project founder for both @SolVisitors and @Rizzibles, I have a tremendous amount of respect for both communities in this team. Gotta vote for @thugmonkez this time! https://t.co/SufJQsmSp9",
          "id": "1636770872215363584"
        }
      ],
      "Tobiornottobe9": [
        {
          "comment": "💪💪💪💪💪 https://t.co/L5Qp4Ur0Iz",
          "id": "1636771244224946177"
        }
      ],
      "H2NFTees": [
        {
          "comment": "LFG @MetaTattooClub https://t.co/VSbTBi5eOH",
          "id": "1636771096400887809"
        }
      ],
      "rumpti": [
        {
          "comment": "We out here repping the @MetaTattooClub fam! \n\nTime to take home the gold! https://t.co/XfWK0EWhTQ",
          "id": "1636770854716727300"
        }
      ],
      "Barrypoter2": [
        {
          "comment": "@MetaTattooClub @McDooi https://t.co/8TV7Zb8CER",
          "id": "1636770708771557377"
        }
      ],
      "forthepoorssol": [
        {
          "comment": "faafo, gnomes.\n\n+3 thugmonkez https://t.co/Z6XTYMXQOQ",
          "id": "1636770459655229440"
        }
      ],
      "zalez_ale": [
        {
          "comment": "As Zalez founder I vote @MetaTattooClub",
          "id": "1636770451283230743"
        }
      ],
      "laurenxnft": [
        {
          "comment": "Founder of @solnftradar checking in and voting for @thugmonkez",
          "id": "1636770366633787402"
        },
        {
          "comment": "@solnftradar Jaako made me do this",
          "id": "1636783140541984768"
        }
      ],
      "m1kobu": [
        {
          "comment": "Me and all my homies hate (respectfully) MTC. This is a vote for @thugmonkez if you couldn’t tell. https://t.co/JC0Sd5tCX1",
          "id": "1636770260228653059"
        },
        {
          "comment": "@RoveWorldApp @gm_duckz @MetaTattooClub @thugmonkez LFQ! 🦆",
          "id": "1636856742867861510"
        },
        {
          "comment": "@RoveWorldApp @KnownAsNich @MetaTattooClub @thugmonkez Zroccie*",
          "id": "1636889232768655360"
        }
      ],
      "Baenards": [
        {
          "comment": "Vote for MTC",
          "id": "1636770253706522624"
        }
      ],
      "TommyRayMTC": [
        {
          "comment": "@MetaTattooClub \nSt.Patty’s SHOEY!! https://t.co/LFMWjBkdqc",
          "id": "1636769654701170689"
        },
        {
          "comment": "Memes and milkshakes OR….Actual IRL utility and a team that throws some of the biggest web2 parties to ever hit social media….. who u want throwing this party? hmmmmm🤔🤷🏼‍♂️",
          "id": "1636963396615815169"
        }
      ],
      "Milukuu_": [
        {
          "comment": "Easy win for @MetaTattooClub even in the final 🫡📈 https://t.co/B9N0eQoNd7",
          "id": "1636769466125266944"
        }
      ],
      "MetaTattooClub": [
        {
          "comment": "@RoveWorldApp @thugmonkez weird... https://t.co/pFVncfOevF",
          "id": "1636768961017659405"
        },
        {
          "comment": "@RoveWorldApp @snegleg @thugmonkez The nerve... https://t.co/jJgpCm2mif",
          "id": "1636783093544632334"
        },
        {
          "comment": "@RoveWorldApp @thugmonkez when they need to go... https://t.co/8HoFtieHWB",
          "id": "1636785181259599873"
        }
      ],
      "0xJTx": [
        {
          "comment": "May the Gods be with you #MTC! https://t.co/ucU5iqUSNB",
          "id": "1636768804805185536"
        }
      ],
      "Tedisurgeon": [
        {
          "comment": "@MetaTattooClub\n all the way https://t.co/aH77cMf7Xi",
          "id": "1636768716494102529"
        }
      ],
      "IrffanAsiff": [
        {
          "comment": "thugmonkzzzzzz 👍",
          "id": "1636768345633726465"
        }
      ],
      "BreezyBoyzzz": [
        {
          "comment": "Breezy Boyz, the stable coin project of solana. Give our founder vote to the one and only MONKEZ @thugmonkez 😤😤🅱️🚹🫡",
          "id": "1636768010550792193"
        }
      ],
      "CjTheGreat210": [
        {
          "comment": "Put me down for @MetaTattooClub !! https://t.co/bBDNBjc6UO",
          "id": "1636767049249882112"
        }
      ],
      "CryptoNFTstocks": [
        {
          "comment": "@MetaTattooClub all the way!!! https://t.co/YiJB5Ogl8R",
          "id": "1636766876004147200"
        }
      ],
      "wayneink": [
        {
          "comment": "💉💉💉 https://t.co/7h4uwkU7Hz",
          "id": "1636766745686949901"
        }
      ],
      "DontRugMeBro": [
        {
          "comment": "We like the thugz https://t.co/f9NZxihauI",
          "id": "1636766730273058816"
        }
      ],
      "_dealership": [
        {
          "comment": "Woke up, mowed the law, unironic TikTok shoey in 624s, voted @thugmonkez \n\nhttps://t.co/yTFryPWinB",
          "id": "1636766203761815554"
        },
        {
          "comment": "@RoveWorldApp @skutsit @MetaTattooClub @thugmonkez Hello Brian",
          "id": "1636777409902166016"
        },
        {
          "comment": "@RoveWorldApp @artsy_skulls @MetaTattooClub @thugmonkez https://t.co/1MGFg8eO4j",
          "id": "1636772573160804352"
        },
        {
          "comment": "@RoveWorldApp @AFilmByHammer @MetaTattooClub @thugmonkez Our founder has founder friends.\n\nTheir founder… knows how to party?",
          "id": "1636863071695286272"
        }
      ],
      "CrpticProphet": [
        {
          "comment": "Well u know what it is MTC 🔥🔥 https://t.co/ht7kc7S8my",
          "id": "1636765971942891522"
        }
      ],
      "cncain": [
        {
          "comment": "https://t.co/0S79uFlHWo",
          "id": "1636765967454814216"
        }
      ],
      "pirate_fi": [
        {
          "comment": "#LGFI https://t.co/i8qyVUFwVi",
          "id": "1636765912119365639"
        }
      ],
      "tgotto95": [
        {
          "comment": "Shoenice and I vote for @thugmonkez 🫡 https://t.co/nVJ4GltqSB",
          "id": "1636765869199224832"
        }
      ],
      "rockernft1": [
        {
          "comment": "Derek here! Founder of Sonic City! LFG @MetaTattooClub",
          "id": "1636765841403543554"
        },
        {
          "comment": "@RoveWorldApp Hey hey! Derek here. Founder of Sonic City! Been rocking with MTC since November!  They get my vote! https://t.co/UPmb4THz0r",
          "id": "1636765705541660674"
        }
      ],
      "NlEdition": [
        {
          "comment": "LFG MTC!\n\nMake those Monkez fly home!\n\nShow them who's the leader! \n\n!FF https://t.co/HgwVJ2ZDAj",
          "id": "1636765392872808448"
        }
      ],
      "Nemthys9910": [
        {
          "comment": "look at this guy, imagine he in your town. my vote is for MTC @MetaTattooClub https://t.co/VpJnGoniKK",
          "id": "1636765367979868160"
        }
      ],
      "DIPthe2nd": [
        {
          "comment": "@thugmonkez never heard of @SolanaMBS ? The balls they have to call other collections derivatives lol\n💀😭😆",
          "id": "1636765257937965057"
        }
      ],
      "cryptosghetti": [
        {
          "comment": "@MetaTattooClub https://t.co/p2701Z3xcQ",
          "id": "1636765232331718656"
        }
      ],
      "Leveraged_Labs": [
        {
          "comment": "As a founder, I vote @thugmonkez",
          "id": "1636765164933615618"
        }
      ],
      "Arcticboi1": [
        {
          "comment": "My vote is for @MetaTattooClub https://t.co/3vIlFMfOae",
          "id": "1636764700993101826"
        }
      ],
      "bassie600": [
        {
          "comment": "My vote goes to @MetaTattooClub",
          "id": "1636764530532286464"
        }
      ],
      "ChaserBlk": [
        {
          "comment": "A vote for @MetaTattooClub 🖤 https://t.co/s8Nox4BO4M",
          "id": "1636764489885573120"
        }
      ],
      "Boxerman_85": [
        {
          "comment": "100% @MetaTattooClub #LGFI https://t.co/yXoL87sUTV",
          "id": "1636764247215554569"
        }
      ],
      "soltrain69": [
        {
          "comment": "It's always @thugmonkez There is no second best. 🐵 https://t.co/IQiDRSFffm",
          "id": "1636764098883993604"
        }
      ],
      "thedevfather": [
        {
          "comment": "what does a shoey on tik tok while holding a printed picture of MODIFIED original art get you? Cause that's like a quadra stack bonus IMO.",
          "id": "1636764063408570373"
        },
        {
          "comment": "Only one clear winner here! MTC!! https://t.co/JcBl9qpoLD",
          "id": "1636848046318256128"
        }
      ],
      "Hashishoo_": [
        {
          "comment": "@MetaTattooClub is the way. Not another internet monkey pic https://t.co/646SZCj5df",
          "id": "1636763826690351104"
        }
      ],
      "JustinTime4wl": [
        {
          "comment": "MTC has that timeless swag… https://t.co/ykltb6f41K",
          "id": "1636763453401763841"
        }
      ],
      "razion7": [
        {
          "comment": "Meta Tattoo Club is the place to be and always will be - get tatted up and print it!! https://t.co/4Ra1zp9YPB",
          "id": "1636763114514391043"
        }
      ],
      "RickyGoosaci": [
        {
          "comment": "We in there like swimwear 🔥🖤 https://t.co/eq34dVPSAT",
          "id": "1636763023594471426"
        }
      ],
      "AfroUnicorn87": [
        {
          "comment": "MTC!!! https://t.co/3x5GGrxmxM",
          "id": "1636763018372718593"
        }
      ],
      "hewasaskaterguy": [
        {
          "comment": "Here's a vote for Thugga Thugga, the nft that's for the people @thugmonkez https://t.co/mNvnqjgSv1",
          "id": "1636762656760827904"
        }
      ],
      "404zzzzzzzzz": [
        {
          "comment": "Thug monkes",
          "id": "1636762571436077056"
        }
      ],
      "kidonthephoenix": [
        {
          "comment": "@thugmonkez LFG!",
          "id": "1636779386870415373"
        }
      ],
      "Smawsh": [
        {
          "comment": "This was written in stone tablets long ago that MTC would arise victorious https://t.co/5zpKbcibBU",
          "id": "1636779053649739802"
        }
      ],
      "goldenpill1": [
        {
          "comment": "@MetaTattooClub 💯❤️‍🔥 https://t.co/aCZymvLVs1",
          "id": "1636778923148165134"
        }
      ],
      "Mygl80": [
        {
          "comment": "My Flounder vote goes to @thugmonkez . https://t.co/J9XZhwxxE0",
          "id": "1636778729291628558"
        }
      ],
      "0xErgonomic": [
        {
          "comment": "@RoveWorldApp @m1kobu @MetaTattooClub @thugmonkez BULLISH 😱",
          "id": "1636778684395798530"
        },
        {
          "comment": "We know who’s here for the long haul. Toly and thonzons  ARE SOLANA! @thugmonkez https://t.co/2dwIVfNqqP",
          "id": "1636777164405346304"
        }
      ],
      "nuforms_lab": [
        {
          "comment": "@MetaTattooClub https://t.co/Qqi4Dk2s8R",
          "id": "1636778524538290190"
        }
      ],
      "summ1cr0n": [
        {
          "comment": "Vote for thonnerzonnerdonks! https://t.co/o3C1H9VOM8",
          "id": "1636778190558617600"
        },
        {
          "comment": "@RoveWorldApp @skutsit @MetaTattooClub @thugmonkez Hello Brian",
          "id": "1636785121323003904"
        }
      ],
      "KelleyMyriah": [
        {
          "comment": "Here’s my recreated art, I vote MTC alll dayyyy 🔥🔥 https://t.co/84v3Q4GEOq",
          "id": "1636777908034482176"
        }
      ],
      "YFNERD_": [
        {
          "comment": "My founder vote goes to @MetaTattooClub \n\n@RolllDAO pullin up with the goods 😤🫡 https://t.co/gTxAK4s06j",
          "id": "1636777869853573125"
        }
      ],
      "Michel04329181": [
        {
          "comment": "@MetaTattooClub \n\nWe win this b****! https://t.co/2tlzWA5xiF",
          "id": "1636777560213274635"
        }
      ],
      "0xbarrelz": [
        {
          "comment": "Thug monke https://t.co/7s7OzLegSU",
          "id": "1636776940639252480"
        }
      ],
      "nateclassie": [
        {
          "comment": "@MetaTattooClub 🐐 https://t.co/0isCp0KfM1",
          "id": "1636776567073558528"
        }
      ],
      "Ernesto__Ness": [
        {
          "comment": "-Maury https://t.co/XItAXzcqzS",
          "id": "1636776152001056769"
        }
      ],
      "TripleXCoiner": [
        {
          "comment": "@MetaTattooClub ⚔️ 🛡️ https://t.co/QNuZ8Ewyds",
          "id": "1636775928230731776"
        }
      ],
      "DregztheMinter": [
        {
          "comment": "@MetaTattooClub https://t.co/ZPUndb5lGR",
          "id": "1636775683191087105"
        }
      ],
      "NostaIgicGareth": [
        {
          "comment": "I vote for ThugMonk",
          "id": "1636775562625847296"
        }
      ],
      "karimski_": [
        {
          "comment": "MTC all the way!!! https://t.co/3Xoti1TnmH",
          "id": "1636775508301193217"
        }
      ],
      "eliodefi": [
        {
          "comment": "I vote for @MetaTattooClub",
          "id": "1636775371235377168"
        },
        {
          "comment": "How do I maje my vote as a founder count??? I am from @GorillaeNFT \n\nMy vote goes to @MetaTattooClub",
          "id": "1636879341505380352"
        }
      ],
      "NotUrMommaBear": [
        {
          "comment": "@RoveWorldApp So basically almost everything my first 2 Tiktoks were in the first rounds 🤭🤘The second one is even a freestyle a musician made  about my Journey with @MetaTattooClub 👀🔥🤭🤣 https://t.co/QlgZaNvfsr",
          "id": "1636775142796951553"
        },
        {
          "comment": "@RoveWorldApp @mastaGinxx @MetaTattooClub @thugmonkez Outta nowhere",
          "id": "1636780780994150410"
        },
        {
          "comment": "My Vote for the Rove Competition.  @MetaTattooClub   #MTC #tattoos  #NFT #Family #community  #Contest #Doxxed #sous #familyreunion #DarkMisstressOfMedia @moodoonft #momsoftwitter #momsoftiktok #FortheLoveOfArt #OwnYourArt https://t.co/zIWvYdarsN",
          "id": "1636875638719094785"
        }
      ],
      "Dodgeysid": [
        {
          "comment": "@MetaTattooClub https://t.co/9edAIyKHCD",
          "id": "1636774741741817856"
        }
      ],
      "Lukas14301642": [
        {
          "comment": "This mofo eats monkeys for breakfast! Bring it on MTC 💀💀💀 https://t.co/o4DNf26IEX",
          "id": "1636774364719861760"
        }
      ],
      "everteensol": [
        {
          "comment": "NOTHING PERSONAL KID https://t.co/XzpqaiSWC9",
          "id": "1636774348898942996"
        },
        {
          "comment": "as the CEO of Sex and Money my vote is for @thugmonkez",
          "id": "1636807855536848896"
        }
      ],
      "BrokenLull": [
        {
          "comment": "My founder vote goes to \n@thugmonkez",
          "id": "1636774281857187850"
        }
      ],
      "dak_daze": [
        {
          "comment": "Cheers to a MTC victory 🍻 https://t.co/SKGUEjVY2O",
          "id": "1636774027766185984"
        }
      ],
      "Bunny_mikey": [
        {
          "comment": "MetaTattooClub should probably change their name to MetaGnomeClub after they take this L… Both names make no sense anyway \nJust to be clear this is a vote for @thugmonkez https://t.co/tCg3ItViLi",
          "id": "1636773926075285504"
        },
        {
          "comment": "Just name @thugmonkez winners already",
          "id": "1637089051550396417"
        }
      ],
      "DegenDeliMeat": [
        {
          "comment": "When in doubt\nThug it out https://t.co/9uI2AIBoZ9",
          "id": "1636773842243981312"
        }
      ],
      "PerttiBackman": [
        {
          "comment": "@thugmonkez https://t.co/DXKIbTP6tF",
          "id": "1636773551842754560"
        }
      ],
      "iam_arthur_king": [
        {
          "comment": "MTC 🤘 https://t.co/AzZpeScV6I",
          "id": "1636773539880771585"
        }
      ],
      "SteffBlurry": [
        {
          "comment": "@MetaTattooClub let’s crush these MFers!!! 😤 https://t.co/rjiU2fTgVP",
          "id": "1636773244932964357"
        }
      ],
      "GavinPacheco8": [
        {
          "comment": "@MetaTattooClub",
          "id": "1636772753549438977"
        },
        {
          "comment": "https://t.co/QUPmxi4py2",
          "id": "1636772726412316672"
        }
      ],
      "Di11187882272": [
        {
          "comment": "🔥 https://t.co/o3dzK7ttKc",
          "id": "1636772729339756562"
        }
      ],
      "0xFrisk": [
        {
          "comment": "gonna pull an old card here as i am TECHNICALLY a founder *cough* *cough*\n\nnothing but love and respect for both TM and MTC, but my vote goes to @thugmonkez https://t.co/P4Dkk5UddH",
          "id": "1636783431383384064"
        },
        {
          "comment": "-generated the art\n-went 10x floor price\n-traded on ME\n-built a discord for it\n-even had a community member take over it\n\ni see this as an absolute win 😌",
          "id": "1636784856167219208"
        }
      ],
      "darthpunk8": [
        {
          "comment": "LFG 🚀",
          "id": "1636783211182276616"
        }
      ],
      "aulialoveslily": [
        {
          "comment": "Me and my thugmonkez vote for @thugmonkez ☺️💜 https://t.co/JOYfPPvCNZ",
          "id": "1636783132606337024"
        }
      ],
      "shibzoids": [
        {
          "comment": "As a builder and a founder my Vote to @MetaTattooClub @iTrevorJohnston @TommyRayMTC Let’s Goooo https://t.co/tD2knT60pf",
          "id": "1636783021830422548"
        },
        {
          "comment": "https://t.co/OnrapIAnn5",
          "id": "1636780205325918210"
        },
        {
          "comment": "@MetaTattooClub LFG!!!",
          "id": "1636779918729134081"
        }
      ],
      "Trident_NFA": [
        {
          "comment": "As a founder I vote @thugmonkez",
          "id": "1636782323558662145"
        }
      ],
      "JCsSmugFace": [
        {
          "comment": "Gotta give my vote to @MetaTattooClub! Just made this mashup to spread the hype. (It's all in the... Logic yall). https://t.co/GgYMwPPEUQ",
          "id": "1636782299101511684"
        },
        {
          "comment": "love from the fam at @GhostKidDAO !!! https://t.co/bftmIss2sJ",
          "id": "1636786720334020614"
        }
      ],
      "SolSquatchNFT": [
        {
          "comment": "the fumilia is rolling with @thugmonkez https://t.co/2aDwv7rnac",
          "id": "1636782236769959961"
        },
        {
          "comment": "https://t.co/Wl0oKL4NRx",
          "id": "1636785734181855232"
        }
      ],
      "TAZDEVIL7578": [
        {
          "comment": "MTC up for the Challenge!!\nMTC for the Win https://t.co/IsNqe66Svd",
          "id": "1636782100631154689"
        }
      ],
      "AptosUSA": [
        {
          "comment": "@thugmonkez https://t.co/VQv3wuvsm8",
          "id": "1636782070570663968"
        }
      ],
      "playwithmarco": [
        {
          "comment": "https://t.co/4LzkvxX5JI",
          "id": "1636781884729602048"
        },
        {
          "comment": "For the win 🏆 https://t.co/9HYPb0le1P",
          "id": "1636781719104937984"
        }
      ],
      "Token_Froggo": [
        {
          "comment": "Lone wolf MTC + a hyper detailed god #LGFI https://t.co/9RrZRZJV6Q",
          "id": "1636781801652862979"
        }
      ],
      "ReplyGuuy": [
        {
          "comment": "@thugmonkez https://t.co/7fNEXpwrBD",
          "id": "1636781746749358080"
        }
      ],
      "AJ_11SIX": [
        {
          "comment": "I truly don't know how we're still doing these competitions, MTC has clearly shown they're the true powerhouse of Solana!💯🏛 https://t.co/0y5yWGpYFh https://t.co/hFX4hkvpNv",
          "id": "1636781566432034816"
        }
      ],
      "WAGMilli": [
        {
          "comment": "@thugmonkez https://t.co/Gsk94WTI7X",
          "id": "1636781551089336327"
        }
      ],
      "morgan_asling": [
        {
          "comment": "@MetaTattooClub 🏛️ !! https://t.co/UZCoqj0zuv",
          "id": "1636781430624886784"
        }
      ],
      "AGROFutureLabs": [
        {
          "comment": "@thugmonkez @RoveWorldApp https://t.co/dJKRPfkRXn",
          "id": "1636781255378321417"
        }
      ],
      "tara82228804": [
        {
          "comment": "@MetaTattooClub https://t.co/HlTC8t43ad",
          "id": "1636780921738375168"
        }
      ],
      "InfluencoorNFT": [
        {
          "comment": "My founder vote goes to @MetaTattooClub \n\nWe love @YFNERD_ and @SolanaRob and they love MTC so Lfg \n\n- @Yapybara",
          "id": "1636780873751187456"
        }
      ],
      "ThugCrypt0": [
        {
          "comment": "Here we go again MTC Gods still the best community A VOTE FOR THE GODS OF SOLANA @MTCPantheonDAO and @MetaTattooClub https://t.co/BUud6pDHIa",
          "id": "1636780859683487756"
        },
        {
          "comment": "@RoveWorldApp @gettles @MetaTattooClub @thugmonkez Which project are these ppl founders of ..I hope u guys have a system in place to varify those claims",
          "id": "1636845568772251649"
        }
      ],
      "Degen_G_sol": [
        {
          "comment": "@MetaTattooClub all the way bring it home! https://t.co/SvQefhxhly",
          "id": "1636780794994737166"
        }
      ],
      "SoyLahna": [
        {
          "comment": "this is why you boys/girls want the party??? smhhh not even if you offered me 100 FREE tattoos would i attend your party!! THIS IS A VOTE FOR @thugmonkez 🗣️🗣️🗣️🗣️ https://t.co/v5h0cBTdeA",
          "id": "1636780457105977346"
        },
        {
          "comment": "@RoveWorldApp @realgoken @MetaTattooClub @thugmonkez WWOOOOOWWWWWSERZ",
          "id": "1636884791252631552"
        }
      ],
      "Bad94Rob": [
        {
          "comment": "Boom amazing artwork 🔥🔥🔥 https://t.co/yvjJ8WS1rk",
          "id": "1636780275899285506"
        }
      ],
      "JuggaDbo665": [
        {
          "comment": "@MetaTattooClub ALL the way, special thanks to @xerocooler for the commissioned Art piece!! https://t.co/BMD9P12VO1",
          "id": "1636780234589585425"
        }
      ],
      "LemonScented_": [
        {
          "comment": "I am founder and I vote @thugmonkez 😈",
          "id": "1636780200838021152"
        }
      ],
      "TonySta98541693": [
        {
          "comment": "Yooooo this one is for my @MetaTattooClub family.\n\nWearing my As Blood Runs Black hoodie, cause that's $INK https://t.co/nGxfRralyK",
          "id": "1636780068251877389"
        }
      ],
      "0x_shake": [
        {
          "comment": "thug monke\n\n- a founder",
          "id": "1636779959606820867"
        }
      ],
      "Softy1431": [
        {
          "comment": "@MetaTattooClub  is going to be throwing a party worthy of the gods. Not just monkeying around. https://t.co/aKohwRIe4o",
          "id": "1636779873397096461"
        }
      ],
      "PlumpBagRob": [
        {
          "comment": "MTC PANTHEON CREW IS HERE, I LIKE THIS NFT",
          "id": "1636779630303793153"
        }
      ],
      "J3r0s11": [
        {
          "comment": "Mtc the community as strong as a pack of wolves. We got this fam. https://t.co/SmrCXCGIZe",
          "id": "1636779403354030113"
        }
      ],
      "JargettaSRFP": [
        {
          "comment": "Definitely a vote for @MetaTattooClub https://t.co/n1UrQtGGaT",
          "id": "1636789583508652032"
        }
      ],
      "js_nft": [
        {
          "comment": "As a founder my vote is for @thugmonkez https://t.co/m1i5KWhZuz",
          "id": "1636789466814881792"
        }
      ],
      "DavidBu88899674": [
        {
          "comment": "@MetaTattooClub https://t.co/I0iaMiplb7",
          "id": "1636789171455918084"
        }
      ],
      "tytyheath90": [
        {
          "comment": "@MetaTattooClub https://t.co/YIQYay4cXQ",
          "id": "1636789088060833792"
        }
      ],
      "NeonSolNFT": [
        {
          "comment": "As a founder, my vote goes to @MetaTattooClub",
          "id": "1636789074228023297"
        }
      ],
      "MickyBananas69": [
        {
          "comment": "So many rules wtf let's make this easy The trophy goes to @MetaTattooClub 🤜🤛 love you mfers https://t.co/hKvalmo9o6",
          "id": "1636789051477852160"
        }
      ],
      "dontchas29": [
        {
          "comment": "Let's go @MetaTattooClub ... modified art combined with @PSG_inside https://t.co/JosH9h73Wb",
          "id": "1636788911627173896"
        }
      ],
      "BakedBerserk": [
        {
          "comment": "@RoveWorldApp @CryptoAndDG @MetaTattooClub @thugmonkez Supporting @MetaTattooClub in this battle\nHeard that they got extra points if a founder from another project cast a vote.. Here it is! #LFGI #LFROW https://t.co/LGPzTGXMm8",
          "id": "1636788879788478464"
        }
      ],
      "halsybob09": [
        {
          "comment": "Let's GOOOO @MetaTattooClub \n@ShreddedApes have got your back!\n#LGFI 🏛️ https://t.co/l8h8b79BaN",
          "id": "1636788873346031616"
        }
      ],
      "KJeeKJee1": [
        {
          "comment": "Let’s go MTC !!\nYou are doing so good ! Keep pushing forward harder with this trophée 🏆\n@metatatooclub https://t.co/OzSvC5ihp9",
          "id": "1636788827376467969"
        }
      ],
      "DaniOnNFTs422": [
        {
          "comment": "@MetaTattooClub APxMTC",
          "id": "1636788731473428504"
        }
      ],
      "PogiYo83": [
        {
          "comment": "@MetaTattooClub 🔥🔥🔥🔥 https://t.co/4QPzwKUdPB",
          "id": "1636788330888331264"
        },
        {
          "comment": "Look at my tatted worm.. LFG @MetaTattooClub ! https://t.co/JDL9BChaZp",
          "id": "1636788020115554304"
        }
      ],
      "Nitric__": [
        {
          "comment": "https://t.co/RgC7nw9lfM",
          "id": "1636788288404213761"
        }
      ],
      "CryptoAndDG": [
        {
          "comment": "#LFGI @MetaTattooClub https://t.co/Qh7WpQOZB6",
          "id": "1636788286768427009"
        }
      ],
      "switch71Sol": [
        {
          "comment": "My heart to @MetaTattooClub \nCheers https://t.co/gHtPwM4v8a",
          "id": "1636788080064491520"
        }
      ],
      "celuloua": [
        {
          "comment": "@MetaTattooClub 🫶🏽 https://t.co/c2n801Q239",
          "id": "1636788040793489408"
        }
      ],
      "pixelpuffss": [
        {
          "comment": "Purr \n#tmz https://t.co/H5X1wqKcZo",
          "id": "1636787915358601218"
        }
      ],
      "ThirteenPsm": [
        {
          "comment": "This ain’t even close for a ram that builds like @MetaTattooClub to easy 🤌🏽🤌🏽🤌🏽 https://t.co/mD5AZ1dES4",
          "id": "1636787878910124032"
        }
      ],
      "Tochi_Suii": [
        {
          "comment": "@MetaTattooClub  is winning this one fo sureee https://t.co/wJmU5D8M79",
          "id": "1636787838216990721"
        }
      ],
      "kalebp999": [
        {
          "comment": "MTC for the win 🔥🔥#LGFI @MetaTattooClub https://t.co/smWFCJ7IKm",
          "id": "1636787785817378817"
        }
      ],
      "BrokeAssJoe": [
        {
          "comment": "Haha let’s go! @MetaTattooClub taking the CAKE! https://t.co/Snxjesh1IE",
          "id": "1636787755350097920"
        }
      ],
      "ppboiii69": [
        {
          "comment": "ayee @MetaTattooClub all the way to the top! https://t.co/rcKkiCWvJ3",
          "id": "1636787673279889423"
        }
      ],
      "ty_rar7": [
        {
          "comment": "@MetaTattooClub https://t.co/C2nbVsahtc",
          "id": "1636787672386502659"
        }
      ],
      "llOzoneMarket": [
        {
          "comment": "@MetaTattooClub https://t.co/FaIx3erDSU",
          "id": "1636787658004283399"
        }
      ],
      "CH4PPY5": [
        {
          "comment": "@MetaTattooClub https://t.co/sSKHoFyMG7",
          "id": "1636787568795865088"
        }
      ],
      "Big_Klem": [
        {
          "comment": "Respect for both the finalists. Gotta choose one and My vote is for @thugmonkez lfg! https://t.co/GIF9Sxlrb8",
          "id": "1636787562621566982"
        }
      ],
      "ChupapiMihalis": [
        {
          "comment": "@MetaTattooClub https://t.co/BlwqoVkJ55",
          "id": "1636787528228564992"
        }
      ],
      "LeetleMako": [
        {
          "comment": "Fuck it ⚡️⚡️\n@MetaTattooClub to the 🌕🏛 https://t.co/rKwGhvxY5j https://t.co/gWxw5L8JJ4",
          "id": "1636787478035038208"
        },
        {
          "comment": "Extra points for chick shoey? 😜",
          "id": "1636795296368689162"
        }
      ],
      "BrekkieVonBacon": [
        {
          "comment": "MTC 🏆 https://t.co/jIV3vFiTX5",
          "id": "1636787174808100864"
        }
      ],
      "xxshauniaxx": [
        {
          "comment": "LETS GO! @MetaTattooClub https://t.co/WQpmsiIbU0",
          "id": "1636786540482531330"
        }
      ],
      "useABUSE420": [
        {
          "comment": "Well it ain't printed out, but I been rocking my #MTC @MetaTattooClub  on the @Fossil Smartwatch 💪🔥 https://t.co/LcBz5apZcx",
          "id": "1636786514792452096"
        }
      ],
      "JJ_Staxxx": [
        {
          "comment": "Cant believe @thugmonkez gonna win this lol",
          "id": "1636785965879693312"
        }
      ],
      "deephhcrypto": [
        {
          "comment": "Thugga thugga https://t.co/am8ft7X9mf",
          "id": "1636785958723919872"
        }
      ],
      "SolRaikage": [
        {
          "comment": "@MetaTattooClub 💎 https://t.co/s5MfZBfKov",
          "id": "1636785775126642703"
        }
      ],
      "TBlasner": [
        {
          "comment": "@MetaTattooClub https://t.co/t2mbuEkM1A",
          "id": "1636785288428281857"
        }
      ],
      "RadCats_RockDAO": [
        {
          "comment": "our vote goes to @MetaTattooClub https://t.co/ZArlIiAukg",
          "id": "1636785187496263714"
        }
      ],
      "TheSolanaCowboy": [
        {
          "comment": "I believe, by definition, I'm a founder of @ABC123Community (or at least that's what HGE tells all of us holders)\n\nI vote for @thugmonkez!",
          "id": "1636785169536552960"
        }
      ],
      "sillen_": [
        {
          "comment": "@MetaTattooClub 🫡🇸🇪",
          "id": "1636784881308147714"
        }
      ],
      "Steve682049711": [
        {
          "comment": "My reimagined thonzon takes inspiration from abc, this a vote for thonzonz! https://t.co/RLNmKsEVDz",
          "id": "1636784740068884481"
        }
      ],
      "ChopperRobson": [
        {
          "comment": "My vote is for my @MetaTattooClub fam! Let’s see this through 💪 https://t.co/2Fd7i9fKYk",
          "id": "1636784445096095744"
        }
      ],
      "flo_navarr86": [
        {
          "comment": "Hey monkez ! @MetaTattooClub are more powerful than you !\nDon't get tired... https://t.co/uRL9zyPXQA",
          "id": "1636784338841792512"
        }
      ],
      "CitriqGMI": [
        {
          "comment": "@thugmonkez washes so hard, that i don't need to flex my freestyle abilities",
          "id": "1636784001078927360"
        }
      ],
      "thugmonkez": [
        {
          "comment": "@RoveWorldApp @SolSquatchNFT @MetaTattooClub thats a founder btw",
          "id": "1636783983911645186"
        }
      ],
      "Marcel__140": [
        {
          "comment": "lets gooo @MetaTattooClub https://t.co/5dcc4kqc6j",
          "id": "1636783813815832577"
        }
      ],
      "yea_nar_bro": [
        {
          "comment": "I founda you mama in my bed this morning, she's gonna be late for work... real late",
          "id": "1636783716201791488"
        }
      ],
      "GiorgioGiovanii": [
        {
          "comment": "@MetaTattooClub fam always goes hard! much love! https://t.co/FEI35f6mUB",
          "id": "1636794210266251268"
        }
      ],
      "andrewhayter": [
        {
          "comment": "thugmonkez https://t.co/elf6CbYV99",
          "id": "1636794206692966400"
        }
      ],
      "holasilkroad": [
        {
          "comment": "THUGGA THUGGA https://t.co/H0OhiZSVgV",
          "id": "1636793978279575556"
        }
      ],
      "RFMission": [
        {
          "comment": "@thugmonkez coming through in the clutch... https://t.co/7mhhn6GZGI",
          "id": "1636793748574334976"
        }
      ],
      "KakoiVostorg": [
        {
          "comment": "@MetaTattooClub is New Religion https://t.co/BO6zPdLjqQ",
          "id": "1636793642542313476"
        }
      ],
      "cryptobecc": [
        {
          "comment": "reimagined @thugmonkez art lfg https://t.co/ZExrnmmEIG",
          "id": "1636793386220032002"
        }
      ],
      "casanova_queenn": [
        {
          "comment": "Reimagined art = thugmonkez to da moOo0on 🐄🫣 @thugmonkez https://t.co/uBtQlNTzNL",
          "id": "1636793326920945664"
        }
      ],
      "0xIchigo": [
        {
          "comment": "Easiest vote of my life @thugmonkez https://t.co/mBLAD0hDFl",
          "id": "1636792851953594369"
        }
      ],
      "SwiftPilot420": [
        {
          "comment": "@RoveWorldApp It’s @MetaTattooClub all the way 👏🏼\n\n🏛️ https://t.co/0VmKDIRiy6",
          "id": "1636791914740449289"
        },
        {
          "comment": "Come on mfers! Let’s bring this W back home where ur deserves to be…with @MetaTattooClub #LGFI 💪🏼\n\nDid a pretty dope recreation of my pfp…I might have to use this thing 🤣\n\n🏛️🏛️🏛️ https://t.co/Ms5DV69D93",
          "id": "1636791729905975296"
        },
        {
          "comment": "@RoveWorldApp @realgoken @MetaTattooClub @thugmonkez Doesn’t count",
          "id": "1636790822183088128"
        },
        {
          "comment": "@RoveWorldApp @TommyRayMTC @MetaTattooClub @thugmonkez Insanely bullish",
          "id": "1636979578626355201"
        },
        {
          "comment": "@RoveWorldApp @Humblejohn316 @MetaTattooClub @thugmonkez @iTrevorJohnston @TommyRayMTC 💪🏼💪🏼💪🏼",
          "id": "1636983278082088960"
        }
      ],
      "ScoopySnax": [
        {
          "comment": "@SolNFTs Gave me an impossible task. https://t.co/N9H9A2av8B",
          "id": "1636791731034398721"
        },
        {
          "comment": "@RoveWorldApp If these Monkez can't convince you that we are the best. Then I'm not really sure what to do. These Monkez will shit all over tattoos and not bat an eye. https://t.co/360FuFGhcY",
          "id": "1636790559888244737"
        }
      ],
      "TonyFantano": [
        {
          "comment": "Keep voting @thugmonkez https://t.co/nGqf9EG2qM",
          "id": "1636791658762342401"
        }
      ],
      "kindaoldsol": [
        {
          "comment": "I don’t own either but following this comp how do you not vote for @thugmonkez ? The memes have been legendary.",
          "id": "1636791654467379200"
        }
      ],
      "bangerzNFT": [
        {
          "comment": "Hi Yes I am Founder and Indeed My Vote clearly goes to @thugmonkez",
          "id": "1636791506521694210"
        }
      ],
      "KrypteEau": [
        {
          "comment": "Here for the support of MTC . They are such a good team . growing constantly . @MetaTattooClub https://t.co/2ocXIWAbIL",
          "id": "1636791195983568896"
        }
      ],
      "SolanaRob": [
        {
          "comment": "Shoey for the gang. @MetaTattooClub https://t.co/ifcTYl6BbN",
          "id": "1636791072721444864"
        }
      ],
      "wildeatz": [
        {
          "comment": "From one owner/founder to the next. Go MTC!!! https://t.co/Rqivu4nctr",
          "id": "1636791011027595264"
        }
      ],
      "cuatro3s": [
        {
          "comment": "we stand for @thugmonkez 😤🫡 https://t.co/S6d6zfPnnC",
          "id": "1636790999782391813"
        },
        {
          "comment": "I stand with @thugmonkez 🫡 https://t.co/thBq6rtQEr",
          "id": "1636789982806568960"
        }
      ],
      "BigRandyRandal": [
        {
          "comment": "Reimagined @thugmonkez 🔫🐒 https://t.co/VMiCMysanw",
          "id": "1636790783146860544"
        }
      ],
      "Cardb00rd": [
        {
          "comment": "#LFG @thugmonkez ! Monks are bringing it home! https://t.co/OvchQMdciQ",
          "id": "1636790761474621445"
        }
      ],
      "PopeyeThe13th": [
        {
          "comment": "im a founder &amp; I’m voting for @thugmonkez ✨🚀",
          "id": "1636790458520317955"
        }
      ],
      "burmabay": [
        {
          "comment": "As a founder/owner we support and Vote MTC. https://t.co/VjilXZRDez",
          "id": "1636790314009788417"
        }
      ],
      "SolanaTrump": [
        {
          "comment": "THUGMONKEZ https://t.co/ZRze1IJDBM",
          "id": "1636790203842199552"
        }
      ],
      "inh4lethetruth": [
        {
          "comment": "@thugmonkez \n@thugmonkezdao has Emiles Vote✅️💚 https://t.co/9xIUm0Rurm",
          "id": "1636790005694877696"
        }
      ],
      "TonyBet_": [
        {
          "comment": "Did someone say @MetaTattooClub ! We show up ! https://t.co/8ExpaqQoVp",
          "id": "1636789965920129025"
        }
      ],
      "itsdexternft": [
        {
          "comment": "Vote for @MetaTattooClub LFG🔥 https://t.co/uugbOLoo3z",
          "id": "1636802373783027715"
        }
      ],
      "JpegShabba": [
        {
          "comment": "@MetaTattooClub all the way baby!! 🏛️🏛️🏛️ https://t.co/swrZue3bJb",
          "id": "1636801926615425024"
        }
      ],
      "AndrewD04001": [
        {
          "comment": "Final round 👏 I’m so excited to be here for this even if we don’t win glad we got this far but definitely got this LFG @MetaTattooClub 💜 https://t.co/Ct8kxGakCe",
          "id": "1636801655407509513"
        }
      ],
      "socknug": [
        {
          "comment": "I vote thug monkz they r better",
          "id": "1636801411580313600"
        }
      ],
      "0xGbrads": [
        {
          "comment": "@jasonmdesimone 🍺🍻 https://t.co/mn6FIseHgD",
          "id": "1636801398573780992"
        },
        {
          "comment": "@MetaTattooClub gotta be taking this home..\n\nMTC song, Shoeys for breakfast, little alpha on the screen 👀\n\n#LGFI 🏛 https://t.co/QLQSDWBwjn",
          "id": "1636797617761030144"
        }
      ],
      "Joey714sol": [
        {
          "comment": "My vote is for @MetaTattooClub",
          "id": "1636800834100146176"
        }
      ],
      "Kennyakins10": [
        {
          "comment": "Mtc owns it",
          "id": "1636800512719716354"
        }
      ],
      "bigC232": [
        {
          "comment": "Mtc won?!",
          "id": "1636800472450490368"
        },
        {
          "comment": "Mfers don’t know I be reppin @MetaTattooClub on da limo bus 🎉🍾 https://t.co/4YZRiFsuEy",
          "id": "1637078018052227072"
        }
      ],
      "Coffeeoholic": [
        {
          "comment": "Muahahahah 💀💀💀\n@MetaTattooClub will cook an ape 😝 https://t.co/CT12Hx4IEH",
          "id": "1636800123396030490"
        }
      ],
      "D3VIN_sol": [
        {
          "comment": "@RoveWorldApp @MetaTattooClub https://t.co/S59rRdoPjD",
          "id": "1636799741320368129"
        }
      ],
      "JayTerab": [
        {
          "comment": "We we’re going to take it easy on you but we’re only going to get this once chance…\n\nUr weak memes and sad rhymes will u devastated.\nWe’re chiseled by GOD’s ur freaking pixelated!\n\nMy vote is for @MetaTattooClub!!!  Love to the @thugmonkez and @RoveWorldApp ❤️🍀 https://t.co/KmrFQnrHvu",
          "id": "1636799531579736065"
        }
      ],
      "Mark_ZuckMyBerg": [
        {
          "comment": "https://t.co/4D9nA0VvXS",
          "id": "1636799221071216652"
        }
      ],
      "cryptoartrevi3w": [
        {
          "comment": "Let's do it for @thugmonkez #ChuckyCheeses https://t.co/cuycSYxNau",
          "id": "1636798906544820224"
        }
      ],
      "decircusmaster": [
        {
          "comment": "Wewww this is cool",
          "id": "1636797445912002561"
        }
      ],
      "Dr_Duc014": [
        {
          "comment": "@MetaTattooClub Represent!!💯 https://t.co/970XMsLTJU",
          "id": "1636797301627965442"
        }
      ],
      "Tythai_": [
        {
          "comment": "Thonzonz https://t.co/8XmadvYz74",
          "id": "1636797207360962560"
        },
        {
          "comment": "@Crocs They are a collab between croc x sperrys",
          "id": "1636928960431902721"
        },
        {
          "comment": "Thonzonz ain’t no bitches even if I choked a bit at the end 😅 #shoey @thugmonkez @Crocs (my audio is ass I’m sorry 🫣) https://t.co/mz6Ddc7HgN",
          "id": "1636927560016621569"
        }
      ],
      "DosukaSOL": [
        {
          "comment": "Ez @MetaTattooClub Win! https://t.co/waaV79ZvxB",
          "id": "1636796796948054048"
        }
      ],
      "Mn3_SOL": [
        {
          "comment": "@TheHenchmenNFT #hnch https://t.co/NnhAolVmKD",
          "id": "1636796704686231553"
        }
      ],
      "wallyballsss": [
        {
          "comment": "#LGFI @MetaTattooClub https://t.co/o56nrWaVaH",
          "id": "1636796176283447296"
        }
      ],
      "ARCE4SOL": [
        {
          "comment": "IM JUST A LONESOME FOUNDER HERE VOTING FOR MTC AND CHEF WILLS SO I DONT GET FINED... https://t.co/3KsOW4LpZO",
          "id": "1636796059031863297"
        }
      ],
      "iTrevorJohnston": [
        {
          "comment": "Mexico Shoey 🇲🇽 \n\n@MetaTattooClub got my vote. https://t.co/1sLr1EYkHq",
          "id": "1636795988173262848"
        },
        {
          "comment": "@RoveWorldApp @Humblejohn316 @MetaTattooClub @thugmonkez @TommyRayMTC We got the real founders on our sides. ✊",
          "id": "1636837067110899712"
        }
      ],
      "VTanchip": [
        {
          "comment": "Voting for Metatatoo 😁",
          "id": "1636795966086090752"
        }
      ],
      "Blu_Lem": [
        {
          "comment": "PARTY LIKE A ROCKSTAR @MetaTattooClub LFG https://t.co/CFJut11Vgj",
          "id": "1636795565735280644"
        }
      ],
      "SpaacePandaa": [
        {
          "comment": "Voting for @MetaTattooClub https://t.co/9U9gxnHU6D",
          "id": "1636795513407434752"
        }
      ],
      "angry__pacifist": [
        {
          "comment": "A REIMAGINED SNOW TIGER SHOWED UP!\nThis is a vote for @thugmonkez https://t.co/d0OGADUXoi",
          "id": "1636795114860183554"
        }
      ],
      "UnknownAsXYZ": [
        {
          "comment": "this is a vote for thugmonkez with some sicko mode reimagined art https://t.co/FeMcBEG4Ey",
          "id": "1636794704749826048"
        }
      ],
      "designedbyross": [
        {
          "comment": "durr durrr durr durrr @thugmonkez",
          "id": "1636811092688027654"
        }
      ],
      "ZenSol": [
        {
          "comment": "THUGGA THUGGA THUGGA https://t.co/iGVcIrn7lz",
          "id": "1636811046089535488"
        }
      ],
      "Jarvie95": [
        {
          "comment": "https://t.co/RdPowVTfgw",
          "id": "1636810956553568260"
        }
      ],
      "SOL_Playground": [
        {
          "comment": "LETS GO THUG MONKEZ!",
          "id": "1636810912631001089"
        }
      ],
      "DicksDegen": [
        {
          "comment": "We at the Dick Defenders support the Monkez.\nThey are the first deriv to do better than the original. https://t.co/GRVGm03uOz",
          "id": "1636810611421224961"
        }
      ],
      "hillsidechase": [
        {
          "comment": "Obviously going @MetaTattooClub - I mean look at the other option. https://t.co/SDprAvVrgZ",
          "id": "1636810419082805264"
        }
      ],
      "NFTBruv": [
        {
          "comment": "Once again voting for @thugmonkez cause @AngelaTNFT said so\n\nBrought the memes this time 🤝💜 https://t.co/p0vdVRkGfm",
          "id": "1636810066216009736"
        }
      ],
      "joonbvs": [
        {
          "comment": "\"As the founder of @SaintDegenNFT my vote goes to thugmonkez @realgoken",
          "id": "1636809435984085005"
        }
      ],
      "FishookTX": [
        {
          "comment": "This is for @thugmonkez kinda sloppy https://t.co/QNW2LDguWt",
          "id": "1636809037835563011"
        }
      ],
      "BigMothaTrucka": [
        {
          "comment": "@MetaTattooClub for the win baby!!!! #LGFI🏛️ https://t.co/YfLecbkkeV",
          "id": "1636807997383929858"
        }
      ],
      "itsbenti": [
        {
          "comment": "@MetaTattooClub https://t.co/tzmKDpgbWm",
          "id": "1636807986449399808"
        }
      ],
      "takashinft": [
        {
          "comment": "@MetaTattooClub LFG fam for the win 🔥🔥🔥🔥",
          "id": "1636807909911977984"
        }
      ],
      "0x_Kalam": [
        {
          "comment": "@thugmonkez https://t.co/P1XKTdrYCn",
          "id": "1636807877049368582"
        }
      ],
      "zbits33": [
        {
          "comment": "@MetaTattooClub",
          "id": "1636807530734034944"
        }
      ],
      "Dentonwright": [
        {
          "comment": "Vote for THUGMONKEZ",
          "id": "1636807007360434187"
        }
      ],
      "AngelaTNFT": [
        {
          "comment": "OBVIOUS ANSWER IS @thugmonkez https://t.co/iOQKGwVD2y",
          "id": "1636806867715338240"
        }
      ],
      "JonnyRedEyeZ": [
        {
          "comment": "@MetaTattooClub https://t.co/nWQ3u733PA",
          "id": "1636806760995631105"
        }
      ],
      "1HotFoxUSA": [
        {
          "comment": "It's the finals fam... Vote MTC! @theKnittables @BVDCAT_ @psydelve @IcedDao @ShreddedApes @Omerta_SOL @AlphaPharaohs @Gyris_official @soldrop_io @BigHeadBillions @BoredApeSolClub @rockernft1 @CrowdsurfNFT @BurritoBoyzDAO @DinodawgKingdom @TheFracture_ @solana @SolAquariums https://t.co/REAMjEfKNL",
          "id": "1636806402990538767"
        }
      ],
      "_BonViveur_": [
        {
          "comment": "@MetaTattooClub def! https://t.co/FI2xS39Yj8",
          "id": "1636806167560060935"
        }
      ],
      "GlitchStroke": [
        {
          "comment": "@RoveWorldApp @artsy_skulls @MetaTattooClub @thugmonkez // i place one vote for thugmonkes // and one vote against snarky comments about artists from an app looking for engagement //",
          "id": "1636806031849451520"
        }
      ],
      "JoshuaWilliment": [
        {
          "comment": "I am the founder of https://t.co/RW3JAu3UPJ Meta Tattoo has my vote",
          "id": "1636805103268003852"
        }
      ],
      "RogerDPaiz": [
        {
          "comment": "Obvious Voting Choice !!! @MetaTattooClub https://t.co/cYH347YQC2",
          "id": "1636804825097568278"
        }
      ],
      "CryptoRaiderMx": [
        {
          "comment": "LFG @thugmonkez https://t.co/JReNd2yDie",
          "id": "1636804472339824648"
        }
      ],
      "audiochroma": [
        {
          "comment": "I just got this message from Brian for all of the thugmonkez community👇\n\n(this is a cameo submission for @thugmonkez ) https://t.co/bBa6lldfAQ",
          "id": "1636804039152107525"
        }
      ],
      "mayhaveitall": [
        {
          "comment": "I recreated this today! Felt inspired @metatattooclub https://t.co/MrWnnTYAhk",
          "id": "1636804036845510656"
        }
      ],
      "Hobbskiip": [
        {
          "comment": "Let's get fawkn inked son!! https://t.co/Fj3kbp3NVc",
          "id": "1636820167207337984"
        }
      ],
      "Exnihiloaliqu": [
        {
          "comment": "Vote for @MetaTattooClub https://t.co/lUUFz2PhJu",
          "id": "1636820133531271181"
        }
      ],
      "PotirnicheBirdy": [
        {
          "comment": "There is only one winner @MetaTattooClub . They are  real chads , great community , great project",
          "id": "1636819898805436427"
        }
      ],
      "Truuth69": [
        {
          "comment": "Meta tattoo ftw https://t.co/GTFAVf8j7m",
          "id": "1636819659344232456"
        }
      ],
      "Pubgxyz2": [
        {
          "comment": "We are with @MetaTattooClub \n@MetaTattooClub is the best https://t.co/tAARmbxBQ2",
          "id": "1636819605464203264"
        }
      ],
      "ThorstenPauli7": [
        {
          "comment": "My vote is for @MetaTattooClub ❤️🔥🙌",
          "id": "1636819191096328199"
        }
      ],
      "bo_digi": [
        {
          "comment": "when the world ends and our eyes become hollow, consumed by the void and our skins crumble, unable to hold ink\n\n@thugmonkez will remain, copypasting the final words of civilization, by now a lost language considered sacred gibberish\n\n\"thonzonz\" https://t.co/euzQmfExwf",
          "id": "1636819105268523008"
        }
      ],
      "DGM_SOL": [
        {
          "comment": "Just so the know , nothing to get here \n@MetaTattooClub https://t.co/NkbUTLYrIN",
          "id": "1636819089803886599"
        }
      ],
      "LordKrako": [
        {
          "comment": "Just shilled @thugmonkez to half of lower manhattan 🤝\n\nIf you’re in nyc &amp; reading this:\n\nFind the thugmonke, take a pic with it &amp; vote @thugmonkez 🐒 https://t.co/o1kF8lBqz5",
          "id": "1636818042578452499"
        },
        {
          "comment": "https://t.co/i4p8Q3uVvJ",
          "id": "1636851292965335041"
        }
      ],
      "TufcatNFT": [
        {
          "comment": "Thugmonkez",
          "id": "1636817669708996608"
        }
      ],
      "Metadream23": [
        {
          "comment": "As a founder my vote goes to #MTC @MetaTattooClub",
          "id": "1636817348517584897"
        }
      ],
      "FX_Signal_Twon": [
        {
          "comment": "My vote is going to MTC! #LGFI🏛️ https://t.co/2SDiqou4sx",
          "id": "1636817308243902469"
        }
      ],
      "SunnyWng": [
        {
          "comment": "This vote is for @MetaTattooClub \n\n@UkiyoNFT_ 🤝MTC https://t.co/03fQF51tca",
          "id": "1636817201671057408"
        }
      ],
      "lagunacarta": [
        {
          "comment": "Sent the @thugmonkez through the pattern generator.\n\nShame someone only gave us 24 hours 👀🧶 https://t.co/UfLE5KSWSH",
          "id": "1636817145681133568"
        },
        {
          "comment": "It’s a cross stitch.\n\nIt could be a knitting pattern with more edits. \n\nIt could be a physical item with 100 hours and a couple colours of string.",
          "id": "1636822897334337547"
        }
      ],
      "n_a__a_r": [
        {
          "comment": "Vula Labs vote for the MTC family 🫡",
          "id": "1636817092044308502"
        }
      ],
      "biggie4me": [
        {
          "comment": "I'm here to submit my vote for @thugmonkez #Reimagined. Let's go for the win.. https://t.co/8F8EsaN8tb",
          "id": "1636817033433104387"
        }
      ],
      "juxtin4fitness": [
        {
          "comment": "As a project founder, I can’t wait to win the spiderweb covered PlayStation 3 at the @thugmonkez event 🥳 I vote TMZ https://t.co/j5UCGyRqR9",
          "id": "1636816738858967040"
        }
      ],
      "peterkende1": [
        {
          "comment": "https://t.co/euaoRtaJUV",
          "id": "1636816529160544256"
        }
      ],
      "aka_danz": [
        {
          "comment": "As a founder member my vote goes to #MTC #MetaTattooClub",
          "id": "1636815307477008426"
        }
      ],
      "LilGlitchyy": [
        {
          "comment": "My vote is mtc 🖤 https://t.co/eQ8LO3LYO4",
          "id": "1636815103315066897"
        }
      ],
      "pikelove2": [
        {
          "comment": "🚀 https://t.co/PHgsSPMY2U",
          "id": "1636815078811942914"
        }
      ],
      "ArtKasawa": [
        {
          "comment": "@MetaTattooClub all the way. https://t.co/jf079pJm12",
          "id": "1636814412022464516"
        }
      ],
      "Falagar77": [
        {
          "comment": "@TrueCryptonians are supporting MTC! LFG !",
          "id": "1636814277792153601"
        }
      ],
      "ChuckkieB": [
        {
          "comment": "MTC about kick those monkez into oblivion and take the 👑!!! #LGFI 🏛️ https://t.co/4mLT5EUzWt https://t.co/mUGQE7Axbl",
          "id": "1636813847511150592"
        }
      ],
      "footszy": [
        {
          "comment": "@thugmonkez https://t.co/9MAAUlNYTM",
          "id": "1636813442559660032"
        }
      ],
      "dominik_ei72430": [
        {
          "comment": "I was recreating this with inspiration of my Meta Tatoo Club ✨ https://t.co/ak9Cwr6QH4",
          "id": "1636813236342489089"
        }
      ],
      "j_strain1": [
        {
          "comment": "@MetaTattooClub good looking project https://t.co/zUCGlfsPDs",
          "id": "1636813195363926034"
        }
      ],
      "ExoidzSOL": [
        {
          "comment": "My vote goes to @MetaTattooClub ! Custom Golden God with the winning belt of March Madness. Drinking $INK all the way to victory LFG! https://t.co/CSBwmqmTQh",
          "id": "1636811950981038095"
        }
      ],
      "MooniesWTF": [
        {
          "comment": "As a founder, I vote for  @thugmonkez 🔝🔥",
          "id": "1636811621820506112"
        },
        {
          "comment": "We've got to put our projects out there 🚀✨️",
          "id": "1636823015211057189"
        }
      ],
      "mindpostban": [
        {
          "comment": "my vote goes for @Thugmonkez because they are solana's real gem",
          "id": "1636811583463596033"
        }
      ],
      "electro_perfect": [
        {
          "comment": "@MetaTattooClub https://t.co/QitRc0zEj3",
          "id": "1636811575385309188"
        }
      ],
      "JadonCohee12": [
        {
          "comment": "@MetaTattooClub easy https://t.co/RhiRijjRcv",
          "id": "1636811238247403521"
        }
      ],
      "MissingLinkzz": [
        {
          "comment": "Y’all already know my vote is for the mf Thugz 🤝",
          "id": "1636811205254975488"
        }
      ],
      "lemonlifelu": [
        {
          "comment": "MTC https://t.co/4X5fe4OeTT",
          "id": "1636825820583870469"
        }
      ],
      "cryptobean69": [
        {
          "comment": "Thug monkeys are best https://t.co/SS03njGOyu",
          "id": "1636825307201302528"
        }
      ],
      "nrxxtr": [
        {
          "comment": "@MetaTattooClub https://t.co/1WYlt1E53e",
          "id": "1636825306307915776"
        }
      ],
      "enjoy0r": [
        {
          "comment": "thugmonke https://t.co/2d0oFEsPWu",
          "id": "1636824546589196301"
        }
      ],
      "noiamsatoshi": [
        {
          "comment": "@RoveWorldApp Founder of @Gyris_official here reporting for duty. Voting for @MetaTattooClub because of our awesome crossover membership. Some of our fave community are big holders. @MaugieGames @mcaspinall81 one hof fox.",
          "id": "1636824395221188608"
        }
      ],
      "DegentlemanJohn": [
        {
          "comment": "found some rando in public (12 points) and asked him to weigh in. shocked to see he chose to vote for @thugmonkez https://t.co/AOwaaDcpxy",
          "id": "1636822892607582208"
        }
      ],
      "metasvibe": [
        {
          "comment": "I’m the founder of @DeFiDistrict and I’m heavily voting for my guys at @MetaTattooClub ❤️🙏🏾",
          "id": "1636822568501116929"
        }
      ],
      "0xPHeaD": [
        {
          "comment": "A vote for the Thuggaz https://t.co/I2BsLRVXHv",
          "id": "1636822317971181569"
        }
      ],
      "KushGo_": [
        {
          "comment": "LFG wen @UkiyoNFT_  x @MetaTattooClub https://t.co/YihhaEt1JA",
          "id": "1636822126194769924"
        }
      ],
      "brandalf23": [
        {
          "comment": "Meta tattoo club 🧙‍♂️ https://t.co/0JeZIttIsc",
          "id": "1636822109489106945"
        }
      ],
      "griftinggoddess": [
        {
          "comment": "my vote for THUGGA THUGGA @thugmonkez",
          "id": "1636821924243226651"
        }
      ],
      "F3L1X_SOL": [
        {
          "comment": "@MetaTattooClub",
          "id": "1636821870308671491"
        }
      ],
      "fatdothbar": [
        {
          "comment": "as the founder of Chuck E Cheeses my vote is for @thugmonkez https://t.co/QxS9pYraP6",
          "id": "1636821711667511304"
        }
      ],
      "billydotsol": [
        {
          "comment": "as the founder of comedy my vote is for @thugmonkez",
          "id": "1636821494943678464"
        }
      ],
      "DarkHaz84117963": [
        {
          "comment": "Come on @MetaTattooClub 🔥 https://t.co/SnyzXolY4u",
          "id": "1636821180857368596"
        }
      ],
      "lumi58": [
        {
          "comment": "@MetaTattooClub  got this for sure 🫡 https://t.co/w8McKFJ6T1",
          "id": "1636820740073766916"
        }
      ],
      "TommyBarbNFT": [
        {
          "comment": "Alpha Pharahos are the best !! @AlphaPharaohs https://t.co/7FIlowe0iy",
          "id": "1636820583064190981"
        }
      ],
      "Crypto_Adikt": [
        {
          "comment": "My vote is for @thugmonkez and the vibes are immaculate rn. https://t.co/5fefSlpwO9",
          "id": "1636820533265444866"
        }
      ],
      "Rajab23x": [
        {
          "comment": "🫶MTC 🫶",
          "id": "1636839840581926912"
        }
      ],
      "techysparks": [
        {
          "comment": "@SolapeFinance ape help ape. I give 🍌",
          "id": "1636839324875366400"
        },
        {
          "comment": "Monke monke return to monke. 🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌",
          "id": "1636836358009372673"
        }
      ],
      "MaugieGames": [
        {
          "comment": "I VOTE META TATTOO CLUB!!!\nLink to the YouTube Shoey: https://t.co/C4OXIcHtx4\nThe Vid is my submission ⤴️\nMTC! LFG!!! 🔥🔥🔥",
          "id": "1636838603920666624"
        }
      ],
      "rwillett99": [
        {
          "comment": "@MetaTattooClub Final Vote! https://t.co/VxNa6NtDMk",
          "id": "1636837825877245954"
        }
      ],
      "jcdwit": [
        {
          "comment": "LFG @MetaTattooClub ! https://t.co/jTAOKmzQgO",
          "id": "1636837613481914376"
        }
      ],
      "DJGizmo313": [
        {
          "comment": "Enough said 🤘 https://t.co/uxCw0tKZKt https://t.co/FdAgw3ss7f",
          "id": "1636837116155142145"
        }
      ],
      "JulyNovaPeralta": [
        {
          "comment": "My vote is for @MetaTattooClub  Here I present my art. #LFGI https://t.co/i54aaieWTr",
          "id": "1636836357074046976"
        }
      ],
      "ItsConndawg": [
        {
          "comment": "thugga thugga https://t.co/E8EveG47vW",
          "id": "1636836148394995712"
        }
      ],
      "Linkkzyy": [
        {
          "comment": "Founder here, pump @thugmonkez",
          "id": "1636835943218032640"
        }
      ],
      "RueTalamo": [
        {
          "comment": "We love the MTC fam at @onedopekids! \n\nReal recognizes real. 😉 https://t.co/YV7yB2werf",
          "id": "1636835064238551040"
        }
      ],
      "UkiyoNFT_": [
        {
          "comment": "I’m a founder and I’m voting for MTC 💪 @MetaTattooClub https://t.co/Fa1vdKfFRE",
          "id": "1636834754052907010"
        }
      ],
      "CrispyChris420": [
        {
          "comment": "As a founder of Aftermath Tattoo LLC my vote is for @MetaTattooClub https://t.co/1dFv6OtFvP",
          "id": "1636834708595126273"
        },
        {
          "comment": "@RoveWorldApp Looks like @MetaTattooClub too me https://t.co/5j9NaJo3Y2",
          "id": "1636934689763078144"
        }
      ],
      "rompitygrompity": [
        {
          "comment": "I vote for thugmonkes with the full support of @SolGrandmasNFT  behind me",
          "id": "1636833670446174209"
        }
      ],
      "ds944": [
        {
          "comment": "You know it @MetaTattooClub https://t.co/wZFmQCdcCa",
          "id": "1636833439520374784"
        }
      ],
      "notbunjil": [
        {
          "comment": "I vote for @thugmonkez",
          "id": "1636833002662801411"
        }
      ],
      "IncenseStack": [
        {
          "comment": "A vote for @thugmonkez https://t.co/VtPcR468Hj",
          "id": "1636832858244349954"
        }
      ],
      "chairszy": [
        {
          "comment": "https://t.co/EagsWKNJVX",
          "id": "1636832308215832576"
        }
      ],
      "shawtygmi": [
        {
          "comment": "Reimagined monkez baby 🥳 \n\n@thugmonkez party gonna be sick I want my pasta to be copied https://t.co/aBAi4NCIM9",
          "id": "1636831139439472641"
        }
      ],
      "chamber11611": [
        {
          "comment": "STAY META @MetaTattooClub",
          "id": "1636830582889132032"
        }
      ],
      "THR_Xulz": [
        {
          "comment": "Let's get inked and full of tattoos!!! @MetaTattooClub deserve it!! Following the project since early days, love the art and project. And community has grown beautifully!!",
          "id": "1636830198753624064"
        }
      ],
      "M3A5Mary": [
        {
          "comment": "My vote is @thugmonkez 🏆\nWhere a Thugmonk can be a Thugmonk\n\nThugga Thugga https://t.co/5Z8ZDHlsyd",
          "id": "1636830193112461316"
        }
      ],
      "SolNftChad": [
        {
          "comment": "@thugmonkez it's been a blast https://t.co/u09ZwKJzZI",
          "id": "1636829489383473157"
        }
      ],
      "ModeAssa_NFT": [
        {
          "comment": "Light Work\n@MetaTattooClub 🏛 #morethan https://t.co/Qmobvepi2P",
          "id": "1636829459213873155"
        }
      ],
      "Badjonkin": [
        {
          "comment": "@thugmonkez https://t.co/mMNyBtc3sY",
          "id": "1636828671922061346"
        }
      ],
      "wordslikerad": [
        {
          "comment": "@RoveWorldApp While I am the founder/artist of @MondaysNFT and @MurderIncNFT , I feel it might be a conflict of interest now that @thugmonkez named me head of finance",
          "id": "1636827945778987016"
        }
      ],
      "TrippinDeadGods": [
        {
          "comment": "Founder vote to thug monkez",
          "id": "1636851702014914560"
        }
      ],
      "Senora_Crypto": [
        {
          "comment": "As a Founder I vote for Thug Monkez \n\n🐒🔥",
          "id": "1636850905067802626"
        }
      ],
      "Sol__Truth": [
        {
          "comment": "This is a vote for @thugmonkez . Win or lose, we will still have our Lord and saviour @SolNFTs https://t.co/S1IGQHHWFC",
          "id": "1636850694882721799"
        }
      ],
      "StanDaily321": [
        {
          "comment": "@RoveWorldApp @MetaTattooClub https://t.co/AMyiyUEnIW",
          "id": "1636850416066371585"
        }
      ],
      "DontFadePrae": [
        {
          "comment": "This is a vote for @thugmonkez https://t.co/13c8zHh5wT",
          "id": "1636849728938803203"
        },
        {
          "comment": "Reimagined @thugmonkez for the Culture https://t.co/N6USOCmFcG",
          "id": "1636952007457009664"
        },
        {
          "comment": "Can’t wait for TMZ to win this so it can be over and done.",
          "id": "1637069361352519683"
        }
      ],
      "__DOrime__": [
        {
          "comment": "Cryptonians Worls is supporting MTC ❤️‍🔥 https://t.co/3HRcIxASj6",
          "id": "1636849636320198656"
        }
      ],
      "J_Eriiiksson": [
        {
          "comment": "Mtc",
          "id": "1636849093220737025"
        }
      ],
      "dvcky_sol": [
        {
          "comment": "Founder for @badcreatureSOC 😈\n\nMy vote is for @MetaTattooClub 🏛️🩸\n\nBCS 🤝 MTC",
          "id": "1636848942527782913"
        }
      ],
      "WebGrub": [
        {
          "comment": "@MetaTattooClub all day every day! LFG!!! https://t.co/hIVhi96N87",
          "id": "1636848890526986240"
        }
      ],
      "notyourbdayy": [
        {
          "comment": "*insert vote for @thugmonkez but make it aesthetic* 💅 https://t.co/3vTrAuE1hh",
          "id": "1636848362531221504"
        }
      ],
      "die4thugga": [
        {
          "comment": "my shoey vote goes to thug monkez, thugga thugga in this bitch! https://t.co/LR5Z6O3orL",
          "id": "1636848281949986816"
        }
      ],
      "sol_otherworld": [
        {
          "comment": "As a founder we vote for @MetaTattooClub! @PlanetOfDeApes as founders can you too please?!",
          "id": "1636847385782493185"
        }
      ],
      "ShearsonNaomi": [
        {
          "comment": "https://t.co/9Hd18Vl53S",
          "id": "1636846956268879872"
        },
        {
          "comment": "@thugmonkez 👏👏👏 https://t.co/TkPjjmOTEj",
          "id": "1637065717336907777"
        }
      ],
      "JubzDiVillin": [
        {
          "comment": "Wen @BlessedDogsPxL https://t.co/sG5JXUnpBN",
          "id": "1636846730388856834"
        }
      ],
      "Knownfelon1": [
        {
          "comment": "Here to support @MetaTattooClub on behalf of the @UkiyoNFT_ family!! We ride together",
          "id": "1636846558753726464"
        }
      ],
      "OkekenwaIfechu2": [
        {
          "comment": "A vote for @thugmonkez https://t.co/WzrBtTgYEx",
          "id": "1636846291031408641"
        }
      ],
      "JTABCDMakeParty": [
        {
          "comment": "THIS IS A VOTE FOR @thugmonkez https://t.co/AOZknTiuNb",
          "id": "1636845848108879872"
        }
      ],
      "GNightPunks": [
        {
          "comment": "As a founder my vote goes to #MTC Meta Tattoo Club 👍",
          "id": "1636845404506697729"
        }
      ],
      "0rionTrades": [
        {
          "comment": "Get it Thonzons.!\n\nVoting for them Thug Ass Monkez for the final. https://t.co/WHT6GAFQYN",
          "id": "1636844979745177602"
        }
      ],
      "eazy_livin_": [
        {
          "comment": "Founder for @badcreatureSOC here !!! My vote is for @MetaTattooClub !! Gotta represent MTC!!!",
          "id": "1636844472683167745"
        }
      ],
      "Riccirich808": [
        {
          "comment": "#LGFI\n\nMTC for the win!! 🏛️ https://t.co/7wdLTtp4j8",
          "id": "1636844161302401024"
        }
      ],
      "wtfxjeff": [
        {
          "comment": "AJSHDHEJNDJWHRKEBF https://t.co/znvte3Pdvg",
          "id": "1636843569309974528"
        }
      ],
      "SandOceanDreams": [
        {
          "comment": "Voting for @MetaTattooClub! https://t.co/x6dTudlKmE",
          "id": "1636843466314457089"
        }
      ],
      "AndyRewNFT": [
        {
          "comment": "Founder vote for MTC🍻",
          "id": "1636843262693580807"
        }
      ],
      "StevieRich247": [
        {
          "comment": "My vote goes to @MetaTattooClub https://t.co/RmldoOTbtM",
          "id": "1636842779895554051"
        }
      ],
      "static_types": [
        {
          "comment": "As the founder of Solana my vote goes to @thugmonkez https://t.co/XH0O9Yy9Z8",
          "id": "1636842062254571520"
        },
        {
          "comment": "You mfer @SolNFTs, you're lucky I like you. This one is for @thugmonkez! https://t.co/rj4ol0FtB5",
          "id": "1636884582774759425"
        }
      ],
      "Super_Pisk": [
        {
          "comment": "Casting my vote for @MetaTattooClub 🔥 https://t.co/rqXP1YLhxU",
          "id": "1636841481095847940"
        }
      ],
      "Gabadadi": [
        {
          "comment": "@MetaTattooClub LFG https://t.co/rOZj1QGWaB",
          "id": "1636840800511197184"
        }
      ],
      "Gimmemymoney23": [
        {
          "comment": "Rajab Family is bullish on MTC 💯🧨🔥",
          "id": "1636840129976254467"
        }
      ],
      "Abhyuddayy": [
        {
          "comment": "@MetaTattooClub we got this 🔥🔥 https://t.co/Ban0EjQj46",
          "id": "1636862496073195520"
        }
      ],
      "DazedDucks": [
        {
          "comment": "As a founder…no brainer. Ducks casts their vote for @thugmonkez",
          "id": "1636862399205502978"
        },
        {
          "comment": "Quack Quack 🦆!!",
          "id": "1636865078447226884"
        }
      ],
      "KnownAsNich": [
        {
          "comment": "@RoveWorldApp @AFilmByHammer @MetaTattooClub @thugmonkez he is founder of something else !",
          "id": "1636861402047725568"
        },
        {
          "comment": "😎",
          "id": "1636889069027483648"
        },
        {
          "comment": "THE ONLY SHOEY I WILL EVER DO. THONZONSS https://t.co/IYTJDdVimi",
          "id": "1636887761042161664"
        }
      ],
      "AFilmByHammer": [
        {
          "comment": "I as a FOUNDER vote for the gangstas @thugmonkez and BECAUSE I have big BAGS I matter MORE",
          "id": "1636860614210625537"
        }
      ],
      "0xsold1er": [
        {
          "comment": "ok i´ll vote for fellow monkez @thugmonkez \n\nas a foundooooor",
          "id": "1636859555668799488"
        }
      ],
      "LeeMajorKid": [
        {
          "comment": "@thugmonkez 🏆",
          "id": "1636859416791117824"
        }
      ],
      "AFoolsDream_": [
        {
          "comment": "What are we even talking about? The clear choice is @MetaTattooClub https://t.co/foViDdcDXg",
          "id": "1636859230299758593"
        }
      ],
      "kitsune_uk": [
        {
          "comment": "Good luck @MetaTattooClub all your homies over at @BoredApeSolClub look forward to raving it up and getting inked at the party! Some new art for the 7 points plus I'm one of the admins at BASC so there's another 10 points right!? https://t.co/gZN3zLoq7q",
          "id": "1636859174423330816"
        }
      ],
      "MichaelKinnon_": [
        {
          "comment": "extorted into voting for @thugmonkez but whatever its friday https://t.co/xu9zez1BZ4",
          "id": "1636858886530519043"
        }
      ],
      "hYpZz__": [
        {
          "comment": "This is obviously a vote for thugmonkez https://t.co/jzXTVOqbC3",
          "id": "1636858793576525824"
        }
      ],
      "0xRowan": [
        {
          "comment": "https://t.co/zMUrPrVleB",
          "id": "1636858496816758786"
        }
      ],
      "aalbyon1": [
        {
          "comment": "VOTE FOR MF THUGMONKEZ WE THE REAL MOTLEY CREW (NO TATTOOS) FREESTYLE LFG 💯🔥💪🏼 https://t.co/Qp9dS3MJTV",
          "id": "1636858171427004417"
        }
      ],
      "gm_duckz": [
        {
          "comment": "https://t.co/1bfC7MeS6n",
          "id": "1636856754167336966"
        },
        {
          "comment": "As the founder of GM Duckz I support Thug Monkez 💙\n\nMuch love to the community LFQ 🔥 https://t.co/JP3GFbC0Ik",
          "id": "1636855701208281094"
        }
      ],
      "Langers764": [
        {
          "comment": "Founder of @badcreatureSOC casting my vote for @MetaTattooClub",
          "id": "1636855994541121537"
        }
      ],
      "IcedKnife": [
        {
          "comment": "im voting thugmonkez",
          "id": "1636855248504463362"
        }
      ],
      "perescalador": [
        {
          "comment": "Meta Tattoo Club! 🫡",
          "id": "1636855146385756161"
        }
      ],
      "kingwacy": [
        {
          "comment": "Vote for @thugmonkez is a better love story thant twilight https://t.co/pE6KLqqPhu",
          "id": "1636855032636223489"
        }
      ],
      "Br3akoutHQ": [
        {
          "comment": "Gonna have to vote for @thugmonkez ❤️♥️ https://t.co/sGSmc5J5YV",
          "id": "1636853902858674178"
        }
      ],
      "Gotto____": [
        {
          "comment": "@thugmonkez https://t.co/rwGM3hksbp",
          "id": "1636853354277261312"
        }
      ],
      "AiSkulls": [
        {
          "comment": "Has an A.I. artist i had to vote for the finest art 🎨 \n\nMy vote for @MetaTattooClub https://t.co/lLTnu8MGWi",
          "id": "1636853210974494721"
        }
      ],
      "JGentYaBoi": [
        {
          "comment": "LFG!!! https://t.co/GztRQQ9A7r",
          "id": "1636872780317851648"
        }
      ],
      "enemkay": [
        {
          "comment": "Let's go @thugmonkez https://t.co/17GyykxWGL",
          "id": "1636872513950224385"
        }
      ],
      "VanMailman": [
        {
          "comment": "My vote is for all the Gods over at @MetaTattooClub Let's run it up! https://t.co/xhkWrspFDd",
          "id": "1636872391593984001"
        }
      ],
      "TheMoonMan_": [
        {
          "comment": "I just joined the club &amp; loving the vibes of @MetaTattooClub \n\nHere’s my reimagined art of this dope MTC I just sniped! https://t.co/Euf51FSMsR",
          "id": "1636871919394779142"
        },
        {
          "comment": "Thank you man s/o to @iTrevorJohnston he’s a solid ass founder!!!",
          "id": "1636904167145971714"
        }
      ],
      "therealcory15": [
        {
          "comment": "https://t.co/CrasYO5OO4",
          "id": "1636871654138675200"
        }
      ],
      "criticalhitSOL": [
        {
          "comment": "I'm a founder of @UndeadSolsWWFS and i vote for @MetaTattooClub https://t.co/xAwW6C2X1w",
          "id": "1636871102331797504"
        }
      ],
      "Mr_OscarGrouch": [
        {
          "comment": "Agreed.",
          "id": "1636870620075155456"
        },
        {
          "comment": "Well I’m not technically a founder so best I can do is make an Oscar @thugmonkez https://t.co/UlQyGTv4t3",
          "id": "1636869262043385856"
        }
      ],
      "tessera_labs": [
        {
          "comment": "I am the founder of Tessera Labs and my vote goes to @MetaTattooClub",
          "id": "1636870556220882944"
        }
      ],
      "grownfromsol": [
        {
          "comment": "thugmonkez no question",
          "id": "1636870047653146626"
        }
      ],
      "UndeadSolsWWFS": [
        {
          "comment": "I am the founder of @UndeadSolsWWFS and definitely vote for @MetaTattooClub https://t.co/GEmVBNpUwB",
          "id": "1636870013448585216"
        }
      ],
      "SuperUio": [
        {
          "comment": "This is a founder voting for @MetaTattooClub",
          "id": "1636869718983180288"
        }
      ],
      "biggiewalls75": [
        {
          "comment": "@JellyJointDAO is here to support @MetaTattooClub ❤️❤️🔥🔥",
          "id": "1636869538779111424"
        }
      ],
      "420heel": [
        {
          "comment": "Here's my official vote for the family @MetaTattooClub #MTC #LGFI  👞🍺 🏛 https://t.co/1MBEUL0qSO",
          "id": "1636869209765322755"
        }
      ],
      "stonerok": [
        {
          "comment": "Thugga thugga @thugmonkez this meme is great https://t.co/lAgaiBtWij",
          "id": "1636869136797057024"
        }
      ],
      "CptnPillageNFT": [
        {
          "comment": "Here a vote for @MetaTattooClub with this beautifully reimagined Medusa. I dunno how them monkeys gonna reimagine their art, they reimagined it in the first place didn’t they???  LGFI https://t.co/B3g1xRDnpd",
          "id": "1636869068069257217"
        }
      ],
      "MIAsoundmachine": [
        {
          "comment": "@RoveWorldApp @DazedDucks @MetaTattooClub @thugmonkez Why no ducks in contest @RoveWorldApp - we are supporters of the game changing stuff your team is doing https://t.co/vINzGvB0LU",
          "id": "1636868591545905153"
        }
      ],
      "DiamondPlateau": [
        {
          "comment": "A VOTE FOR @thugmonkez HERE https://t.co/zzlpbOh6qQ",
          "id": "1636868404614410241"
        }
      ],
      "Slim_Billions": [
        {
          "comment": "YKTV  @thugmonkez",
          "id": "1636868391272329216"
        }
      ],
      "L3kanOh": [
        {
          "comment": "Gib Crown https://t.co/iBW2RH9UO6",
          "id": "1636868336595218432"
        }
      ],
      "0x_DEON": [
        {
          "comment": ".@thugmonkezdao - what else ?! https://t.co/l53P9q6512",
          "id": "1636868194123087875"
        }
      ],
      "Brofan420": [
        {
          "comment": "@MTCPantheonDAO @MetaTattooClub https://t.co/jQ48gKTLWC",
          "id": "1636867567062224897"
        }
      ],
      "trexpile": [
        {
          "comment": "Beep boop",
          "id": "1636867279248867328"
        }
      ],
      "madcat2773": [
        {
          "comment": "#thugmonkez 4life https://t.co/NQPMUbhmh8",
          "id": "1636867238044086274"
        }
      ],
      "studiostassi": [
        {
          "comment": "THE ONLY COMMUNITY ILL EVER DO A SHOEY FOR @thugmonkez https://t.co/jrgnsUlbxn",
          "id": "1636866999623073792"
        }
      ],
      "Everything_SOL": [
        {
          "comment": "Can both projects win? 👉👈",
          "id": "1636865961243340800"
        }
      ],
      "DaliCommas": [
        {
          "comment": "As a founder and Solana OG, i have to go with @thugmonkez \n\nThey’re iconic! A derivative… but iconic!",
          "id": "1636865510305398787"
        }
      ],
      "Gravity_Stroke": [
        {
          "comment": "Thugmonkeyz FTW😎",
          "id": "1636865281493729280"
        }
      ],
      "calvo_ar": [
        {
          "comment": "Lets go @MetaTattooClub #LGFI. https://t.co/hVg4rGptf5",
          "id": "1636864916014391296"
        }
      ],
      "reject_hunter": [
        {
          "comment": "https://t.co/vFqRyFBANJ",
          "id": "1636864588741513218"
        }
      ],
      "OriginTrailKing": [
        {
          "comment": "easiest vote for thugmonkez https://t.co/TdO9ACw88w",
          "id": "1636864462995988485"
        }
      ],
      "SLACTHEDON": [
        {
          "comment": "https://t.co/liEJG4m7aZ",
          "id": "1636864099278639107"
        }
      ],
      "ishakmeisterMTC": [
        {
          "comment": "@MetaTattooClub  🔥🔥🔥🔥🔥🔥🔥 https://t.co/MaFNPOmRVw",
          "id": "1636863954541477888"
        },
        {
          "comment": "@RoveWorldApp @switch71Sol @MetaTattooClub @thugmonkez 🌹🌹🌹🌹🌹🌹🌹🌹",
          "id": "1636888821924077569"
        }
      ],
      "AnyanachoG": [
        {
          "comment": "@thugmonkez https://t.co/L1uOKTvUfr",
          "id": "1636863254017318913"
        }
      ],
      "supbaby21": [
        {
          "comment": "MTC ALL DAY!",
          "id": "1636862932603551745"
        }
      ],
      "tristonwestsol": [
        {
          "comment": "https://t.co/fWVI6Zjkg5",
          "id": "1636862500263059462"
        }
      ],
      "KitchenHereNFTs": [
        {
          "comment": "My vote once again goes to the amazing @MetaTattooClub https://t.co/bFKhFfni8h",
          "id": "1636880563150700544"
        }
      ],
      "NakaOuiLani": [
        {
          "comment": "Thugga dugga",
          "id": "1636880023620816897"
        }
      ],
      "RcklssRpblc_NFT": [
        {
          "comment": "Off course gonna go with @MetaTattooClub mate!! Pulling up for the Shoey train @TommyRayMTC and all the MTC fam out here..blessed and proud to be a part of the family!! LGFI!🏛🔥🖤🍻 https://t.co/r8RG0Fq4G7",
          "id": "1636879846054973440"
        },
        {
          "comment": "@TommyRayMTC 🖤🍻",
          "id": "1636930079438807041"
        }
      ],
      "SOLMutt": [
        {
          "comment": "@RoveWorldApp @thugmonkez",
          "id": "1636879611249426433"
        }
      ],
      "MikeIsNGMI": [
        {
          "comment": "1 beer as an appetizer, 2 for the main course, 1 for dessert. \n\n@thugmonkez mfers 🫡 https://t.co/UXcLlmMSij",
          "id": "1636879317811761159"
        }
      ],
      "TanmayKhatri7": [
        {
          "comment": "Yoo I vote @thugmonkez",
          "id": "1636877643672072192"
        }
      ],
      "iamextrasyrup": [
        {
          "comment": "MTC!!! MTC!!! MTC!!! MTC!!!",
          "id": "1636877366562631684"
        }
      ],
      "GupcciOfficial": [
        {
          "comment": "Not even close definitely @thugmonkez https://t.co/MB364Ge3vW",
          "id": "1636877060470714374"
        }
      ],
      "btc_cz": [
        {
          "comment": "ofc THUG MONKEZ",
          "id": "1636875964591292416"
        }
      ],
      "d00by_": [
        {
          "comment": "THUG MONKEZ",
          "id": "1636875885679722497"
        }
      ],
      "andy_nemi": [
        {
          "comment": "As an average bozo from bodoggos, I cast my vote for \n@thugmonkez",
          "id": "1636875546083688450"
        }
      ],
      "SXEIxNFT": [
        {
          "comment": "@thugmonkez is the only correct answer .",
          "id": "1636875352906579968"
        }
      ],
      "EasyEatsBodega": [
        {
          "comment": "as the founder of bodggos\nI STAND \n\nwith @thugmonkez https://t.co/q9U6oZY0ZE",
          "id": "1636874996600455169"
        }
      ],
      "NotSeanyTsunami": [
        {
          "comment": "THUGGA THUGGA, the people’s nft. My vote is for @thugmonkez https://t.co/yLqZo6BmoP",
          "id": "1636874753582706690"
        }
      ],
      "web4O": [
        {
          "comment": "Founder vote here and it’s @thugmonkez or bust. This isn’t even a question",
          "id": "1636874700751097856"
        }
      ],
      "vitomansillaa": [
        {
          "comment": "This shoey goes to @MetaTattooClub Let’s fucking Go! https://t.co/iefMaEER7O",
          "id": "1636874039561015298"
        }
      ],
      "NFT_Metaverz": [
        {
          "comment": "Took a break from posting alpha to rep MTC here.  Gotta respect their community for holding it down. 🏛 https://t.co/VasaHAWDbP",
          "id": "1636873847105372160"
        }
      ],
      "mjcalabro50": [
        {
          "comment": "#MTG @johnJkmi for the win. LFG. https://t.co/gMnxuKZoXt",
          "id": "1636873264487190528"
        }
      ],
      "Mi_Tion111": [
        {
          "comment": "@thugmonkez",
          "id": "1636889323998945281"
        }
      ],
      "BsleeGod": [
        {
          "comment": "Thug Life https://t.co/2mwMzmV03m",
          "id": "1636888495418675200"
        }
      ],
      "SOLbuckets": [
        {
          "comment": "as founder of @sandbar_io \n\nI rock with @thugmonkez \nthese mfers go HARD",
          "id": "1636887871389855753"
        }
      ],
      "johnJkmi": [
        {
          "comment": "@RoveWorldApp @AFilmByHammer @MetaTattooClub @thugmonkez It's getting ridiculous. 😆 https://t.co/oRDsY2lYeY",
          "id": "1636886630568177664"
        }
      ],
      "niborNFT": [
        {
          "comment": "This is where @MetaTattooClub shines #LFGI https://t.co/m5ph8TmZIS",
          "id": "1636886012281643008"
        }
      ],
      "JellyJointDAO": [
        {
          "comment": "@MetaTattooClub for the win ofcourse!",
          "id": "1636885753404833792"
        }
      ],
      "coreysh33han": [
        {
          "comment": "@MetaTattooClub, I lost my virginity to these savages… Best group of people I’ve had the pleasure of being pleasured by! Happy St. Patrick’s Day Mo Chara’s! @MetaTattooClub @MTCPantheonDAO",
          "id": "1636885255582887936"
        }
      ],
      "LesliBradley19": [
        {
          "comment": "@MetaTattooClub-all the wayyyyyy",
          "id": "1636884780959809536"
        }
      ],
      "DoggySwamp": [
        {
          "comment": "@MetaTattooClub gotta get that ink https://t.co/tgC2Da0Ili",
          "id": "1636884705415950336"
        }
      ],
      "Blklyon1": [
        {
          "comment": "Thug Monke for life! GAME OVER! @thugmonkez @thugmonkezdao @SolNFTs https://t.co/feWJrYsZm8",
          "id": "1636884470459506688"
        }
      ],
      "WyldeyCrypto": [
        {
          "comment": "Here are some reimagined versions of my smoking hot @MetaTattooClub Medusa. MTC gets my vote all day, every day. No contest. https://t.co/qmLvkejcIV",
          "id": "1636883655636422662"
        }
      ],
      "aarondegods": [
        {
          "comment": "I am the founder of @DeStables_ and I vote for @thugmonkez 🫡",
          "id": "1636883523817668610"
        }
      ],
      "GIOfortheWIN_": [
        {
          "comment": "@RoveWorldApp @realgoken @MetaTattooClub @thugmonkez @Adagio_TV https://t.co/gIMEK8xZQx",
          "id": "1636880767736508416"
        }
      ],
      "evil_egirl": [
        {
          "comment": ".@JamesCageWhite and I vote for @thugmonkez (with rizz) to win the pizza party at Chuck E Cheese https://t.co/eVvBr28Mmr",
          "id": "1636893573743357953"
        }
      ],
      "Professor420K": [
        {
          "comment": "@RoveWorldApp @patty_fi @KnownAsNich @MetaTattooClub @thugmonkez @dtfcity",
          "id": "1636891036352929793"
        }
      ],
      "patty_fi": [
        {
          "comment": "@RoveWorldApp @KnownAsNich @MetaTattooClub @thugmonkez Show the kids how to fkn party https://t.co/6OfHCjKY5u",
          "id": "1636890529676787721"
        }
      ],
      "AlphaSplash": [
        {
          "comment": "I vote @thugmonkez \nNot going to jump through rings of fire to engage but plz count this as 10 votes. Not doing a retard shoey",
          "id": "1636890369408335872"
        }
      ],
      "youlovejuice": [
        {
          "comment": "As a founder of @SolBookieNFT my vote goes to @MetaTattooClub LFG!!!",
          "id": "1636890107377782784"
        }
      ],
      "justinbradley31": [
        {
          "comment": "Shoey for the the boys @MetaTattooClub https://t.co/iOiGiMDHsK",
          "id": "1636889736228016129"
        }
      ],
      "Bigwangf": [
        {
          "comment": "@MetaTattooClub gets my vote LFG https://t.co/Xr5Zs3KvW2",
          "id": "1636902430968299520"
        }
      ],
      "wishhits11": [
        {
          "comment": "@MetaTattooClub https://t.co/JTeb7SGz1d",
          "id": "1636902045423923200"
        }
      ],
      "PersonOfWater": [
        {
          "comment": "Mf @thugmonkez",
          "id": "1636901861922856962"
        }
      ],
      "Jontybr": [
        {
          "comment": "@MetaTattooClub is taking this out for sure! https://t.co/u7hfqVg2Q7",
          "id": "1636899684211097600"
        }
      ],
      "LibertySquareHQ": [
        {
          "comment": "we said we would stay neutral. big fans of the founders and communities of both projects. \n\nalas, we must vote. and we must do so emphatically. with all of the love for MTC, their team, and their community, we are voting for @thugmonkez in this round. enjoy the video. https://t.co/foVOvF4N4I",
          "id": "1636899395278086145"
        }
      ],
      "RACMONEYSYMBOL": [
        {
          "comment": "Voting MTC!! Cause you know @MetaTattooClub had the most lit motherfuckezzz on the entire Solana  Ecosystem 💎💎💎 https://t.co/PhTjxXWGsI",
          "id": "1636897110359707648"
        },
        {
          "comment": "🫂",
          "id": "1637020068759629824"
        }
      ],
      "Margouilla_P": [
        {
          "comment": "https://t.co/SI0ayYDdqt",
          "id": "1636896113193021440"
        }
      ],
      "Mr_Cuddlez88": [
        {
          "comment": "And Cuddlez vote goes toooooo… https://t.co/Y3KF3NUNlY",
          "id": "1636895837191282689"
        }
      ],
      "TAZDEVIL603": [
        {
          "comment": "MTC No Doubt!! https://t.co/E7tWwkGVeG",
          "id": "1636910355547914241"
        }
      ],
      "Player1Taco": [
        {
          "comment": "@RoveWorldApp She looks like a @MetaTattooClub fan! You know she has ink!",
          "id": "1636908320089939970"
        },
        {
          "comment": "This #shootingTHEboot is for my @MetaTattooClub #family, (@LibertySquareHQ slightly disappointed in you❤️). #redbull #bang #shoottheboot #rugby #LFGinked!!!! Maybe some #PP power there! https://t.co/BlxMaWe8ft",
          "id": "1636908274585837569"
        },
        {
          "comment": "@aeyakovenko or @rajgokal I am doing this for #extra points for my family @MetaTattooClub! (@LibertySquareHQ shots fired! 2 more #redbulls down the hatch)! I give my points to #MTC! #LFGinked and I don't see any lil'thugmonks around... 👀 https://t.co/oiaYapV5nd",
          "id": "1636972653847224321"
        },
        {
          "comment": "Thug-who? @MetaTattooClub for the thug-you! #shootingMYshot at @LibertySquareHQ ❤️🤪🌮 #tropicalmango (I'll count that as 1, so 5 to ?) But I see you grinding still! https://t.co/pMGXkrPkQ7",
          "id": "1637015653017178113"
        }
      ],
      "WUB30": [
        {
          "comment": "This is Alpha team moving in. Thugmonkez 😤 https://t.co/lrAvMKSmBa",
          "id": "1636906961340887040"
        }
      ],
      "ChefWills33": [
        {
          "comment": "Here's some regenerative art of my Chef PFP which I vote MTC 💯💯💯 https://t.co/y02qe5P4op",
          "id": "1636906393306566656"
        }
      ],
      "2oldFoThis": [
        {
          "comment": "@MetaTattooClub",
          "id": "1636906332325306369"
        }
      ],
      "skutsit": [
        {
          "comment": "my twitter got hacked and my original vote got deleted... also im here for the points so my frens can get to chuck e cheese! this is a vote for @thugmonkez https://t.co/lDm3sZIy1x",
          "id": "1636906016653582337"
        }
      ],
      "PWC5": [
        {
          "comment": "@thugmonkez for the W",
          "id": "1636904734492700672"
        }
      ],
      "strangekoi": [
        {
          "comment": "this shoey and this vote is for MTC @MetaTattooClub 🏛 only for the gang 🦾 https://t.co/F08YnBACXJ",
          "id": "1636903628329082885"
        }
      ],
      "ramunas_jonikas": [
        {
          "comment": "I Vote 4 @MetaTattooClub just regenerated this piece of ART LFG https://t.co/Sc4ASssTTI",
          "id": "1636903358006013954"
        }
      ],
      "SteliosCharala8": [
        {
          "comment": "Sending love @MetaTattooClub from @CatsYardNFT \n\nMTC winner !? 👀",
          "id": "1636903064442470408"
        }
      ],
      "WiscoNft": [
        {
          "comment": "@thugmonkez are the only champions! https://t.co/okM4nfHlTF",
          "id": "1636902977012129793"
        }
      ],
      "SirFeralMayhem": [
        {
          "comment": "The one... the only... https://t.co/6pUmXtt6Cd",
          "id": "1636919326174224392"
        }
      ],
      "SomaMarton": [
        {
          "comment": "Thugga thugga thugga https://t.co/6kuFpmi4ud",
          "id": "1636918726053249026"
        }
      ],
      "BroadSwordBoy": [
        {
          "comment": "5 points for a back flip? and it supports @thugmonkez\nFuck ya! https://t.co/utWkJooYuJ",
          "id": "1636917324790874115"
        }
      ],
      "deuces_444": [
        {
          "comment": "Meta https://t.co/TqtRRBVKVd",
          "id": "1636916960641314817"
        }
      ],
      "theDoctor_24K": [
        {
          "comment": "🏛️Meta Tattoo Club🏛️ https://t.co/U0OhZjsz6m",
          "id": "1636916264382918657"
        }
      ],
      "shrimpgangsol": [
        {
          "comment": "I HAVE CAPITULATED. THIS IS FOR THE @thugmonkez , my first shoey was worse but here we are. TROLL ME IDC THIS IS FOR THE WIN. Also I hate you @LibertySquareHQ for making me capitulate https://t.co/vHvZiJzr7i",
          "id": "1636916198729236484"
        }
      ],
      "mcaspinall81": [
        {
          "comment": "@MetaTattooClub Family Strong AF 💯❤️🙌 #firsttimeshoey 🤣 #whateverittakes 🥇 https://t.co/TcSZ0GWRYJ",
          "id": "1636915751973187584"
        }
      ],
      "Pinapaan": [
        {
          "comment": "@RoveWorldApp @LibertySquareHQ @MetaTattooClub @thugmonkez @RoastUmber the real TOP G",
          "id": "1636915711091298305"
        },
        {
          "comment": "@LibertySquareHQ  sent me to vote for @thugmonkez",
          "id": "1636913304336728064"
        }
      ],
      "Burr_Ett": [
        {
          "comment": "@RoveWorldApp @LibertySquareHQ @MetaTattooClub @thugmonkez @RoastUmber goat fr",
          "id": "1636915531356987392"
        }
      ],
      "drippp_BTC": [
        {
          "comment": "https://t.co/JNkzKVWSVx",
          "id": "1636915109678428160"
        }
      ],
      "NiptoNft": [
        {
          "comment": "I'm a person who never stops looking for mega projects but I've never heard of @thugmonkez \n\nBut @MetaTattooClub  takes a big place in my heart and I owe it to this project ...\nMy vote to @MetaTattooClub 💯/💯 https://t.co/FgUJv89nTu",
          "id": "1636915089348481026"
        }
      ],
      "Tonystark5150": [
        {
          "comment": "https://t.co/k3i6TP3TUe",
          "id": "1636914603761229825"
        },
        {
          "comment": "Mtc gonna smash them thug what??",
          "id": "1636987162024615936"
        }
      ],
      "kunlerulz": [
        {
          "comment": "@LibertySquareHQ sent me to vote for @thugmonkez",
          "id": "1636913752611364864"
        }
      ],
      "JPEG_Alpha": [
        {
          "comment": "@MetaTattooClub all day!!!! https://t.co/KH42h2ITOf",
          "id": "1636913242898575360"
        }
      ],
      "cryptid_mom": [
        {
          "comment": "@Libertysquarehq sent me to vote for @thugmonkez ;)",
          "id": "1636913130109300741"
        }
      ],
      "Jawnxwick": [
        {
          "comment": "As a Founder of @Wick_Capital , I stand with @thugmonkez https://t.co/T1xsboC1H8",
          "id": "1636912997556731904"
        }
      ],
      "sandmansurfer": [
        {
          "comment": "https://t.co/hlMrA3gjOz",
          "id": "1636912642395717643"
        }
      ],
      "nonfungibleted": [
        {
          "comment": "@MetaTattooClub fashoooo",
          "id": "1636912493531656193"
        }
      ],
      "MarianoLM5": [
        {
          "comment": "Decided to submit a regenerated piece of my MTC for my vote. Love how this turned out. You can see the original in my twitter profile pic 🏛⚡️ https://t.co/xnL4Vchb22",
          "id": "1636912310454239232"
        }
      ],
      "cares4me": [
        {
          "comment": "ReImagine Art Submission… \n Here to vote for @thugmonkez this has been fun. LFG… https://t.co/GTMxp3MPjo",
          "id": "1636911460793085954"
        }
      ],
      "BeLikeHercules": [
        {
          "comment": "@MetaTattooClub all day baby\n\nHercules Characters are 🤌 https://t.co/tTyhOeMGZb",
          "id": "1636911206307975171"
        }
      ],
      "notok_nft_club": [
        {
          "comment": "My vote go for @MetaTattooClub ..\nWhere is #MEDUSA crew .. #LGFI https://t.co/lwEx6PpRcL",
          "id": "1636910948509253634"
        }
      ],
      "Sorcery_inc": [
        {
          "comment": "We can no longer stay watching this from the sidelines.\n\nWe’re getting INK’D TF UP with @MetaTattooClub https://t.co/YU75yAyhOB",
          "id": "1636910935519510528"
        }
      ],
      "mighty_luna": [
        {
          "comment": "technically heels, but hey, I rocked it lmao that was my first one ever! Was so amazing that it was a part of this competition &lt;3",
          "id": "1636934788878671873"
        }
      ],
      "MTNT_MX": [
        {
          "comment": "@Libertysquarehq sent me to vote for @thugmonkez\n\n🐿️⚔️🐵 #GITREKT https://t.co/toWwhTlGOn",
          "id": "1636930454925213697"
        }
      ],
      "Taco_Cats_NFT": [
        {
          "comment": "Founder of Taco Cats\n\nStanding with @thugmonkez 🤝 https://t.co/QtcP3yxmyc",
          "id": "1636929232881287169"
        }
      ],
      "thedavidk": [
        {
          "comment": "Much love for both projects, but when your boy, who you knew from your first days on Solana, hits you up, you show up for his team\n@MetaTattooClub https://t.co/6vYjMm4WSg",
          "id": "1636929129026125824"
        }
      ],
      "BrownBeardSol": [
        {
          "comment": "as a non founder, I vote for @thugmonkez",
          "id": "1636929081005559811"
        }
      ],
      "BaneRendflesh": [
        {
          "comment": "Thug monkez",
          "id": "1636928642109394944"
        }
      ],
      "NFTHeadCoach": [
        {
          "comment": "Freestyle +10 vote for THUGMONKEZ 😂😂😂🫡🫡 off tops 🤝🤝 no written 😂 https://t.co/mpes3jsA5N",
          "id": "1636927632788066305"
        }
      ],
      "PlanetOfDeApes": [
        {
          "comment": "As founders we the deape delegation vote for @MetaTattooClub",
          "id": "1636926865427546112"
        }
      ],
      "Charls020": [
        {
          "comment": "I vote MTC https://t.co/VDnq9PT1Uz",
          "id": "1636926168472473606"
        }
      ],
      "RichwaterNFT": [
        {
          "comment": "As a founder and purveyor of the finest H2O, I vote for @thugmonkez",
          "id": "1636925824304644098"
        }
      ],
      "w01f1492": [
        {
          "comment": "Absolutely supporting my @MetaTattooClub fam... here is a unreal engine version of my medusa!!! https://t.co/obtdvfQ4kc",
          "id": "1636925313727774720"
        }
      ],
      "JBGree1818": [
        {
          "comment": "I always felt thuggish with my MTC so I recreated it more real and on the streets of Brooklyn \n\nHere’s my vote for @metatattooclub https://t.co/QAFCLKcXpJ",
          "id": "1636924063057866756"
        }
      ],
      "fx_kiwi": [
        {
          "comment": "MTC Fam all day! https://t.co/hjhDESrvag",
          "id": "1636923158228770816"
        }
      ],
      "Cooph_": [
        {
          "comment": "thugga thugga",
          "id": "1636922843031293953"
        }
      ],
      "hevoiceofreason": [
        {
          "comment": "Me and the boys once @thugmonkez wins!\nWe got this, thugga thugga! https://t.co/sivn85pc5t",
          "id": "1636920028472672257"
        }
      ],
      "AFB505": [
        {
          "comment": "@LibertySquareHQ  sent me to vote for @thugmonkez",
          "id": "1636919704584593408"
        }
      ],
      "B_Creepinitreal": [
        {
          "comment": "I am the founder of @CreepyOGs and I am giving my vote to @MetaTattooClub🔥 \n\nI know a good amount of the people in the community and they are all amazing people who I am happy to call real friends.\n\nCan’t wait to see the results once all the votes are in!  ✊⚡️👀",
          "id": "1636948396350271489"
        }
      ],
      "devmedaddy": [
        {
          "comment": "Reimagined… 7pts please and thank you. https://t.co/ZI48rZpTcb",
          "id": "1636947882744991744"
        }
      ],
      "DreamingAboutC": [
        {
          "comment": "AI kicking monkey a$$... #mtc all day https://t.co/no60YwwDUw",
          "id": "1636947783646101504"
        }
      ],
      "Dragdropdev": [
        {
          "comment": "MTC ftw with this reimagined art! https://t.co/7jB4KvvFHn",
          "id": "1636947541848621057"
        }
      ],
      "belgardin": [
        {
          "comment": "One last time, @thugmonkez ! https://t.co/IDjQ20VDH8",
          "id": "1636947051505123330"
        }
      ],
      "AltierKennedy37": [
        {
          "comment": "Let’s go @MetaTattooClub",
          "id": "1636947016239464448"
        }
      ],
      "gzmessina": [
        {
          "comment": "My vote ir for MTC all the way with this regenerated art of my PFP!!! #LGFI https://t.co/j89T6W4J7N",
          "id": "1636946997696507904"
        }
      ],
      "the_dark_rite": [
        {
          "comment": "Founder here… like an actual one… casting my vote for @MetaTattooClub. The monkez f’d my sister so yeah… I’m voting for MTC.",
          "id": "1636946725930663938"
        }
      ],
      "Solana_BT": [
        {
          "comment": "@MetaTattooClub https://t.co/comrvowUg8",
          "id": "1636946573673525248"
        }
      ],
      "goodmooddudes": [
        {
          "comment": "We have our vote for @MetaTattooClub",
          "id": "1636946430572068864"
        }
      ],
      "_Jaagg": [
        {
          "comment": "Voting for @MetaTattooClub! WITH reimagined art. This piece called re-\"imagine\" by Joker Lennon. Oh and also a meme. https://t.co/FqHiYYi9rX",
          "id": "1636946386242396161"
        }
      ],
      "DaboDose": [
        {
          "comment": "I am the founder of project legacy and my vote goes to MTC.",
          "id": "1636946147892924416"
        }
      ],
      "Curticy_94": [
        {
          "comment": "Voting for @MetaTattooClub #LGFI $INK #Reimagined https://t.co/C6kDswc6UB",
          "id": "1636945781419839490"
        },
        {
          "comment": "Cheers MTC Fam! 🍻 @MetaTattooClub #LGFI $INK https://t.co/1n4jBj3TYv",
          "id": "1637063984665993218"
        }
      ],
      "BouwmaJoshua": [
        {
          "comment": "@MetaTattooClub for the win. \nThese guys work damn hard. #lfg",
          "id": "1636945115351482374"
        }
      ],
      "NFTArtFC": [
        {
          "comment": "I'm a founder (technically), calling thugmonkeyz.",
          "id": "1636942809046601731"
        }
      ],
      "Nicky_Blue_Eyez": [
        {
          "comment": "Love my MTC fam @MetaTattooClub https://t.co/Xa1ItjCJef",
          "id": "1636942391226822656"
        }
      ],
      "KryptoKacz": [
        {
          "comment": "@MetaTattooClub rulez this world while King Joker rulez his kingdom. #reimagined #LFGI 🏛 https://t.co/z4zb0wRFWe",
          "id": "1636941531771707392"
        }
      ],
      "Monkis74": [
        {
          "comment": "There’s really only one choice here. @thugmonkez https://t.co/jXlHi6hNBT",
          "id": "1636940757113159680"
        }
      ],
      "brandonauto93": [
        {
          "comment": "Meta Tattoo Club Freestyle + Shoey with the Boot!!! @MTCPantheonDAO this one's for @MTCPantheonDAO .. this one's for the boys! @iTrevorJohnston @0xGbrads @TommyRayMTC https://t.co/etxJFeKH4o",
          "id": "1636940323095220224"
        }
      ],
      "1EgaMage1": [
        {
          "comment": "For the @thugmonkez https://t.co/jzBySLpHGs",
          "id": "1636940259975114753"
        }
      ],
      "EmmarkGadgets": [
        {
          "comment": "Fuck it, made a freestyle for thug monkez  ( recorded on my phone at 4am so its not the best 🤣) https://t.co/KQpRJe6A5j",
          "id": "1636939754045333506"
        }
      ],
      "zachhsousaa": [
        {
          "comment": "@MetaTattooClub got my vote, it’s over for y’all https://t.co/5L1HkJ0TG8",
          "id": "1636939667517104128"
        }
      ],
      "b1rdbra1nz": [
        {
          "comment": "THUG MONKEZ FTW \n🐦 🤝 🙉",
          "id": "1636938817226563589"
        }
      ],
      "NFTRAPPAS": [
        {
          "comment": "THUG MONKEEEEEEEEZZZZZ",
          "id": "1636938607985410048"
        }
      ],
      "Sol_Juggernauts": [
        {
          "comment": "MTC!!! https://t.co/stPCoqAdeO",
          "id": "1636937174074441729"
        }
      ],
      "MortyMortem": [
        {
          "comment": "@iTrevorJohnston @TommyRayMTC @MetaTattooClub deserve the crown!! 👑 https://t.co/kS7vVMbhwN",
          "id": "1636936237637586947"
        }
      ],
      "Dufflebagboi92": [
        {
          "comment": "Vote=@MetaTattooClub #LGFI 🏛 https://t.co/xMOMtzyhlv",
          "id": "1636936024440930312"
        }
      ],
      "goneinthenight_": [
        {
          "comment": "This is a vote for @thugmonkez https://t.co/ndTJM3jCwF",
          "id": "1636961462852915200"
        }
      ],
      "RevProtocols": [
        {
          "comment": "MY VOTE FOR @MetaTattooClub \n\nRegenerative art 🎨 https://t.co/JQbjnVypaI https://t.co/6wk3eeGuUg",
          "id": "1636961074665644033"
        }
      ],
      "PapaTombb": [
        {
          "comment": "this is a vote for @thugmonkez https://t.co/c0JnTvOfnp",
          "id": "1636960818049994754"
        }
      ],
      "cryptosniper21": [
        {
          "comment": "Lets do it!",
          "id": "1636958636013686785"
        }
      ],
      "QLD_BlokeRKL": [
        {
          "comment": "Lets go MTC 💪🤙 @MetaTattooClub",
          "id": "1636956064590729217"
        }
      ],
      "gana_eleazer": [
        {
          "comment": "https://t.co/HYO1ORo7LJ",
          "id": "1636955676890087424"
        }
      ],
      "UncleWeez": [
        {
          "comment": "chalk another up for @thugmonkez https://t.co/imiBFkb203",
          "id": "1636955533910614016"
        }
      ],
      "RyanCGarland1": [
        {
          "comment": "Thugga thugga https://t.co/xNhDz3dQTa",
          "id": "1636954517748199424"
        }
      ],
      "JPEGGINGTON": [
        {
          "comment": "Here’s my reimagined art based off of my Zeus. My vote goes to MTC https://t.co/oTbsjYSMif",
          "id": "1636954225300377600"
        }
      ],
      "GorkyRubes": [
        {
          "comment": "Making each vote count so I decided to make these up with my Zeus as inspiration. My vote is  @MetaTattooClub https://t.co/63yFbcFsFB",
          "id": "1636951967695257600"
        }
      ],
      "homegirlcaro": [
        {
          "comment": "✨ Reimagine Art ✨\n@thugmonkez how'd I do? 🙈 https://t.co/vIvZTm2iwW",
          "id": "1636951837445332992"
        }
      ],
      "pocketnav": [
        {
          "comment": "MTC all the way and heres my dude reimagined https://t.co/LV3wQHWITl",
          "id": "1636951072450437120"
        }
      ],
      "RealHorseDC": [
        {
          "comment": "As the founder of @RealHorseDC I cast my vote for @MetaTattooClub. https://t.co/73vQmSLvai",
          "id": "1636950746884345858"
        }
      ],
      "AlphaTradersNFT": [
        {
          "comment": "MetaTattooClub!",
          "id": "1636950364162506753"
        }
      ],
      "MTCPantheonDAO": [
        {
          "comment": "On behalf of Pantheon DAO we 10000% vote for @MetaTattooClub ❤️💪🙌 https://t.co/npCohjCr78",
          "id": "1636950258075979777"
        }
      ],
      "thegodhimsefl": [
        {
          "comment": "My vote goes to thugmokez \nLfg 🏃🏃🏃 https://t.co/23NNNsXfsE",
          "id": "1636950234394923008"
        }
      ],
      "0xTrill": [
        {
          "comment": "WON VERT 4 THONGMONKOZ PLZ EXTRA CHEEZE\nWON VERT 4 THONGMONKOZ PLZ EXTRA CHEEZE\nWON VERT 4 THONGMONKOZ PLZ EXTRA CHEEZE\nWON VERT 4 THONGMONKOZ PLZ EXTRA CHEEZE\nWON VERT 4 THONGMONKOZ PLZ EXTRA CHEEZE\nWON VERT 4 THONGMONKOZ PLZ EXTRA CHEEZE\nWON VERT 4 THONGMONKOZ PLZ EXTRA CHEEZE https://t.co/GUQnJ73jOT",
          "id": "1636949757766815744"
        }
      ],
      "winterbeard42": [
        {
          "comment": "Vote is for @MetaTattooClub https://t.co/Y93BtBSyBY",
          "id": "1636949724057194497"
        }
      ],
      "MoonEkko33": [
        {
          "comment": "I’m a founder and I’d like to vote for MTC 💯💯💯 @MetaTattooClub",
          "id": "1636975676489191424"
        }
      ],
      "BurritoChills_": [
        {
          "comment": "This what we doing !? \n\nYop, the shoey ! \n\nTHUGGA THUGGA 💯\n\n@thugmonkez wilin’ out https://t.co/HnjH8zeDHk",
          "id": "1636975597707730945"
        }
      ],
      "madlimit7777": [
        {
          "comment": "again, i still remember when someone cried on a space because @thugmonkez hit 5 SOL. this is my vote for them.",
          "id": "1636975186863071233"
        }
      ],
      "IcebreakerNFT": [
        {
          "comment": "I vote for MTC! LFG!!! 🧊🧊🧊🧊 https://t.co/Ok42fgA4gO",
          "id": "1636974788726996992"
        }
      ],
      "SolanaMomma": [
        {
          "comment": "I VOTE META TATTOO CLUB! ❤️‍🔥 https://t.co/4ZjEOMk25J",
          "id": "1636973929708257281"
        }
      ],
      "Sandman47587119": [
        {
          "comment": "@MetaTattooClub  💯🏛🔥🍻 https://t.co/FZtYq4QlSf",
          "id": "1636973165011439618"
        }
      ],
      "mortenl97536920": [
        {
          "comment": "@MetaTattooClub #LGFI 🔥🔥 https://t.co/ozuKAZ2QTv",
          "id": "1636972190758207491"
        }
      ],
      "McDooi": [
        {
          "comment": "@bhaleyart hey bro, have you voted yet? 👀 🤝",
          "id": "1636970856663375872"
        },
        {
          "comment": "@MetaTattooClub ALL DAY nd NIGHT! 🔥🔥🚀 https://t.co/KDC7EXwA2C",
          "id": "1636978066227449857"
        }
      ],
      "veganlightbeam": [
        {
          "comment": "🗳️ @thugmonkez 🫡\nCan’t wait to party at @ChuckECheese https://t.co/3O8p6mrIwp",
          "id": "1636969356281380864"
        }
      ],
      "samj0oo": [
        {
          "comment": "mtc or nothing https://t.co/pgDrbK5o70",
          "id": "1636968869679046658"
        }
      ],
      "AMikeCMoon": [
        {
          "comment": "GTA: @thugmonkez city.\n2jakt4u. https://t.co/DyZ14dT35b",
          "id": "1636967810940256257"
        }
      ],
      "si_nfts": [
        {
          "comment": "MTC MTC MTC MTC\n🔥🔥🔥🔥🔥\nMy NFT reimagined!!\nPretty tough!!\n@MetaTattooClub \n#LGFI https://t.co/D406RqX5Xx",
          "id": "1636966022526713856"
        }
      ],
      "BigPoppaJerBear": [
        {
          "comment": "You already know i just drank out this shoe for the community @thugmonkez @cllctvSOL https://t.co/1UOjTnGTsJ",
          "id": "1636965839864832001"
        }
      ],
      "bennymax_": [
        {
          "comment": "fuck it we thugga thugga @thugmonkez https://t.co/O0iersHN97",
          "id": "1636965592463994883"
        }
      ],
      "Majkstah": [
        {
          "comment": "This is my vote for @MetaTattooClub with my reimagined art 😍 https://t.co/6jwJ4iPo6X",
          "id": "1636965472930340865"
        }
      ],
      "d_wylde": [
        {
          "comment": "My gold headdress Apollo reimagined as a mosaic to give my vote for @MetaTattooClub #LGFI https://t.co/0j2ZvBe58D",
          "id": "1636964371774701568"
        }
      ],
      "cryptokai_sol": [
        {
          "comment": "LFG https://t.co/ZwgG5XKb36",
          "id": "1636963901576208384"
        }
      ],
      "LilApeCapital": [
        {
          "comment": "Trevor from MTC is a real one gotta go with @MetaTattooClub here",
          "id": "1636981374333726722"
        }
      ],
      "STONEd_NFT": [
        {
          "comment": "How 2 buy votes\n\nClearly it’s @thugmonkez https://t.co/ilFWA6SYn8",
          "id": "1636981078866145282"
        }
      ],
      "notcouth": [
        {
          "comment": "https://t.co/QeGSEXt9hx",
          "id": "1636980116768149505"
        }
      ],
      "NotF_nTammed": [
        {
          "comment": "Its the final round and my votes will remain the same @MetaTattooClub  has my vote 1000% https://t.co/I89ytsxXGZ https://t.co/chUb0zBRVY",
          "id": "1636979166917820417"
        }
      ],
      "Talil_SOL": [
        {
          "comment": "I Vote For @MetaTattooClub 💪🏼💪🏼💪🏼",
          "id": "1636978829892763649"
        }
      ],
      "ark_ifact": [
        {
          "comment": "Vote @thugmonkez",
          "id": "1636978723034365952"
        }
      ],
      "AgentShockovsky": [
        {
          "comment": "Reimagine art for MTC!  LFG! https://t.co/MZUHkfgJwg",
          "id": "1636977975198470144"
        }
      ],
      "GarGanTuanBruh": [
        {
          "comment": "Reimagine Art for thugmonkez. Vote for thugmonkez https://t.co/P8SSi4HHfq",
          "id": "1636977924875374592"
        }
      ],
      "norm44855999": [
        {
          "comment": "100% Meta Tattoooo https://t.co/OmHORy9lJe",
          "id": "1636976502062616576"
        }
      ],
      "Android65O": [
        {
          "comment": "@MetaTattooClub is too good, they get my vote",
          "id": "1636976432587964417"
        }
      ],
      "Gyris_official": [
        {
          "comment": "I VOTE META TATTOO CLUB! 💪 https://t.co/cb62flxRRS",
          "id": "1636976359044964353"
        }
      ],
      "chainszy": [
        {
          "comment": "💫 https://t.co/D61sXXfi1s",
          "id": "1636976265436762112"
        }
      ],
      "DegenApePolice": [
        {
          "comment": "Our vote goes to MTC, 🫡🚔 An amazing community and team!",
          "id": "1636975979544338432"
        }
      ],
      "Josh_SOL444": [
        {
          "comment": "I just got this Twitter simply so I can help put these ThugMonkez to bed! \n\n10 points for @MetaTattooClub https://t.co/XabQwLF18a",
          "id": "1636975769204281344"
        }
      ],
      "nftreatyoself": [
        {
          "comment": "I’m voting @thugmonkez now. I was gunna just not vote but their approach is way more funny and mtc is taking this too serious imo. Some mfers have been pretty out of pocket. I love memes and I think their sense of humor and community is fuckin hilarious. \n\nSee you at Chuck E.… https://t.co/hguaQfnhzk https://t.co/Hdd7q9aEW5",
          "id": "1636975679454744578"
        }
      ],
      "dezineiscrtv": [
        {
          "comment": "@MetaTattooClub flexin the NFT irl, this babys going on the wall so all Can admite it’s glory 🙌👑 https://t.co/5P0gJGlgr9",
          "id": "1637003717898821639"
        }
      ],
      "PloucEth": [
        {
          "comment": "@LibertySquareHQ sent me to vote for @thugmonkez",
          "id": "1636999837387300865"
        }
      ],
      "Ai_velocity": [
        {
          "comment": "As the founder of Ai gaming I vote for the kings @MetaTattooClub",
          "id": "1636998138400772096"
        }
      ],
      "ShadoWoman888": [
        {
          "comment": "MTC 😍😍😍 https://t.co/jD2dSQH5EL",
          "id": "1636995709265227779"
        }
      ],
      "Anuolazim0": [
        {
          "comment": "GIF @thugmonkez",
          "id": "1636995403861090304"
        }
      ],
      "RippCorddd": [
        {
          "comment": "They still here? @thugmonkez for the W!",
          "id": "1636995218447925251"
        }
      ],
      "cepainter75": [
        {
          "comment": "my vote is for @MetaTattooClub https://t.co/6Xmz1JVLKG",
          "id": "1636993837058105345"
        }
      ],
      "ColeDegod": [
        {
          "comment": "Not a part of any but I just want to see @thugmonkez get the W",
          "id": "1636992842693480449"
        }
      ],
      "TR4UM4TIC_": [
        {
          "comment": "@MetaTattooClub every day of the week! 🥃",
          "id": "1636989557853032449"
        }
      ],
      "SlorgoftheSlugs": [
        {
          "comment": "Founder vote\n\non behalf of slugs, out of respect for @TxS0L i vote for @thugmonkez",
          "id": "1636989236590280704"
        }
      ],
      "nifemi369": [
        {
          "comment": "My vote goes to @thugmonkez \n\nThugga Thugga https://t.co/shaTKDcbnX",
          "id": "1636987450282106880"
        }
      ],
      "PeepoSports": [
        {
          "comment": "Our founder vote goes to MTC.  \nNO RAGRETS!! 😅 https://t.co/qllYwtulsc",
          "id": "1636986794813145088"
        }
      ],
      "Fuffiks": [
        {
          "comment": "My vote goes to @MetaTattooClub 🤙🤙🤙 https://t.co/isvPYKDV3V",
          "id": "1636986401609637892"
        }
      ],
      "DegodsShock": [
        {
          "comment": "Seals for MTC! https://t.co/8DfPh9XoVu",
          "id": "1636985815233429504"
        }
      ],
      "w3b5ter": [
        {
          "comment": "Felt like i had to try making unique art piece from my fav @MetaTattooClub  nft💪 for the win lets go! https://t.co/wtCxt9csiv",
          "id": "1636984503179657218"
        }
      ],
      "BitWinzz": [
        {
          "comment": "@MetaTattooClub for the win. Here’s a midjourney reimagine. #Medusa #LGFI 🏛️🏛️🏛️ https://t.co/tamINeCJd8",
          "id": "1636984181560360962"
        }
      ],
      "Trade_Centre_": [
        {
          "comment": "As a founder… we sticking with @thugmonkez 😎 OGs in the space",
          "id": "1636982714883772416"
        }
      ],
      "HOLDmySOL": [
        {
          "comment": "My MTC is immortalized and my Pantheon is staked. https://t.co/FSgyv7hFCh",
          "id": "1636982653449834497"
        }
      ],
      "mikeonchain": [
        {
          "comment": "As a founder of @danger_valley \nMy vote is for @MetaTattooClub! Good luck for you guys! 🔥🔥🔥",
          "id": "1636982055148945408"
        }
      ],
      "SapoNFTz": [
        {
          "comment": "I’m voting MTC because I love free shit https://t.co/dudiEK7gQW",
          "id": "1636981759094177792"
        }
      ],
      "FamousCloudzz": [
        {
          "comment": "The thuggs made me do it so here’s my vote…. @thugmonkez https://t.co/NmvH5bMuHs",
          "id": "1636981617683054592"
        }
      ],
      "Doxix93": [
        {
          "comment": "@MetaTattooClub All the way! https://t.co/eL86dxNb21",
          "id": "1637044177727811585"
        }
      ],
      "GuiguiLaDouille": [
        {
          "comment": "LFG FOR @MetaTattooClub https://t.co/GtefZ8aKMi",
          "id": "1637042550329470979"
        }
      ],
      "Takoyakiteisho9": [
        {
          "comment": "Worked 15 hours today, but had to cast my vote for @thugmonkez before passing out. All in, baby. For the culture. 🤙\n\nTHUGGA THUGGA https://t.co/V9hrxVHeAo",
          "id": "1637041428475019265"
        }
      ],
      "KoiSaysThings": [
        {
          "comment": "Daddy Long Neck and I support @thugmonkez https://t.co/BgOFxqgKK8",
          "id": "1637036605419540481"
        }
      ],
      "Thoth_NFT": [
        {
          "comment": "As the founder of @Overseers_Labs my vote is for Thug Monkez",
          "id": "1637035235601965056"
        }
      ],
      "BlancoMuyLoco": [
        {
          "comment": "Thugmonk till solami goes to 0 https://t.co/MeyLYGlcBU",
          "id": "1637034858533773313"
        }
      ],
      "SygnalBASC": [
        {
          "comment": "Hello I'm Sygnal. \nDerug Core Member from @BoredApeSolClub.\nCoreTeam for upcoming @SolgwaisNFT\nAdvisor for upcoming @RecklessRNFT \n\nObviously, I'm here for @MetaTattooClub. How many points did I get? https://t.co/5Fe4iC8N7E",
          "id": "1637029018989125632"
        }
      ],
      "NFTandC": [
        {
          "comment": "@MetaTattooClub 💪🏽✍🏼 https://t.co/hZRW6vsMpW",
          "id": "1637014189985394688"
        }
      ],
      "PerseTuho": [
        {
          "comment": "Gm! Fuck it! First try rappin and still stoned from last nights space cake overdose! \n\nVoting for @thugmonkez if u didn’t know now u know! 🔥 https://t.co/fqAC4MTZzI",
          "id": "1637013899491852290"
        }
      ],
      "Flack00oo": [
        {
          "comment": "Shooooooey ! 🔥\nLFG I vote for @MetaTattooClub https://t.co/Nv8Rxx0SK5",
          "id": "1637012246600601603"
        }
      ],
      "Brycesworld": [
        {
          "comment": "We all know who the real monkes on Sol are at this point, right? https://t.co/bcDjvTHiAy",
          "id": "1637011924650184705"
        }
      ],
      "Thew_jpg": [
        {
          "comment": "@MetaTattooClub #LGFI https://t.co/QMhDsPHXY8",
          "id": "1637009378715811841"
        }
      ],
      "AbominableBunch": [
        {
          "comment": "By the power vested in me as the sacred and founding member of the almighty Abominable Bunch (TAB) our vote is for, and only for, @thugmonkez as they are the thuggest chimps and chimpettes in town. \n\nYa heard’",
          "id": "1637007984407777281"
        }
      ],
      "Sebscryptopath": [
        {
          "comment": "My vote goes to @MetaTattooClub https://t.co/V8NQ2XpYwH",
          "id": "1637007729964244993"
        }
      ],
      "AnhurShayea": [
        {
          "comment": "BIG VOTE FOR MTC @MetaTattooClub https://t.co/qnjgmEtrtB",
          "id": "1637006860308946945"
        }
      ],
      "Tommy_B_LV": [
        {
          "comment": "Yo @iTrevorJohnston founders supporting founders 🫡 @MetaTattooClub has my vote",
          "id": "1637006028314382336"
        }
      ],
      "RmRoscar660": [
        {
          "comment": "MTC for the win from @sol_otherworld https://t.co/MYflEllDxV",
          "id": "1637075302680543232"
        }
      ],
      "bhaleyart": [
        {
          "comment": "Voting for MTC 🫡🔥 https://t.co/X0sQ9CZ3g6",
          "id": "1637074912786501633"
        }
      ],
      "DeadRocknCowboy": [
        {
          "comment": "The Captain proudly stands with @MetaTattooClub! Ballin MFers! Here is some reimagined MTC Captain art! LFG! https://t.co/tfCRZ5VyOo https://t.co/82y5zGyKJS",
          "id": "1637073924033855488"
        }
      ],
      "NotChinks": [
        {
          "comment": "Did we win yet? https://t.co/5dWAYmhg65",
          "id": "1637072740871028736"
        }
      ],
      "music_5x5": [
        {
          "comment": "Just scooped an MTC and reimagined with some little tweaks. My vote goes to MTC. https://t.co/WVDikcIKnl",
          "id": "1637072690530988034"
        }
      ],
      "adargnft": [
        {
          "comment": "There is only ever 1 out come with this contest you all no @MetaTattooClub and @TommyRayMTC throw the best parties in the space so just give the W now. We gods out here not toys or little pixel monkeys. #LGFI https://t.co/yRRFYc2SbZ",
          "id": "1637072451812184064"
        }
      ],
      "0x_Jeffrey": [
        {
          "comment": "@thugmonkez forever. I thought we made this clear",
          "id": "1637072336078749702"
        }
      ],
      "JokoInv_": [
        {
          "comment": "@MetaTattooClub is here to show to this Thugs what a real community is and what the power of Ancient Greek Gods actually is !! \nLet’s gooo!! https://t.co/rzN3w61807",
          "id": "1637071976324841472"
        }
      ],
      "Wardogs_NFT": [
        {
          "comment": "I vote for @MetaTattooClub \nI am the founder of wardogs and strongly vote for this range. https://t.co/xbyx2UagRE",
          "id": "1637069261817389063"
        }
      ],
      "Chutnyy": [
        {
          "comment": "For the MTC fam 🔥 #LGFI  @MetaTattooClub https://t.co/2Ny9RLyIJY",
          "id": "1637066877783638019"
        }
      ],
      "Cheddar_Block": [
        {
          "comment": "@Cheddar_Block is casting there vote to @MetaTattooClub https://t.co/P542veAGH8",
          "id": "1637066620882526208"
        }
      ],
      "OldRedfish": [
        {
          "comment": "Mtc",
          "id": "1637064495880187905"
        }
      ],
      "BOOTeng27": [
        {
          "comment": "@MetaTattooClub  all day!!",
          "id": "1637064048620580864"
        }
      ],
      "JustinLiu2": [
        {
          "comment": "Meta Tattoo Club all the way!",
          "id": "1637063731816349701"
        }
      ],
      "CryptHomeSchool": [
        {
          "comment": "@SolgwaisNFT Founder putting in my vote for @MetaTattooClub \n\nGet the Dub Fam!! We support you! https://t.co/t69mBBnlXh",
          "id": "1637063674434138112"
        }
      ],
      "Hakunoz": [
        {
          "comment": "My Thugmonkez with reimagined art https://t.co/W2TM2Kcspj",
          "id": "1637062248458747908"
        }
      ],
      "Mushin_BTC": [
        {
          "comment": "@RoveWorldApp @thugmonkez @thugmonkezdao https://t.co/ISaApnnZ2o",
          "id": "1637061669930119171"
        }
      ],
      "LegallyKiwi": [
        {
          "comment": "MTC kicks ass and taken names !! https://t.co/G9HamUEbcp",
          "id": "1637061621549002753"
        }
      ],
      "venturebox_xyz": [
        {
          "comment": "@MetaTattooClub https://t.co/1AUMSyGwDc",
          "id": "1637060691730264064"
        }
      ],
      "DWithersII": [
        {
          "comment": "https://t.co/xcmigzGjqf https://t.co/RXLUg5V25X",
          "id": "1637060053717995520"
        }
      ],
      "Sol_Dragon_": [
        {
          "comment": "@thugmonkez reimagined LFG https://t.co/nSfUnJOsQ6",
          "id": "1637059380855164931"
        }
      ],
      "CFilipNFT": [
        {
          "comment": "@MetaTattooClub no doubt, we DOMINATE https://t.co/OHuAvfTkDQ",
          "id": "1637056775995392001"
        }
      ],
      "spiritosanto47": [
        {
          "comment": "Metatattoclub 🔥\n@MetaTattooClub",
          "id": "1637056768978108419"
        }
      ],
      "toe_rip": [
        {
          "comment": "This God votes for @MetaTattooClub 🏛🍺👟 https://t.co/esrou0vDNW",
          "id": "1637054202269560832"
        }
      ],
      "AndreasFijn": [
        {
          "comment": "Shoey for the @MetaTattooClub i live this Competition so much 🤩😍 lets go MTC Fam 😍😍😍😍 #shoey #Solana #Competition #LFG https://t.co/VTtziNnZYE",
          "id": "1637052247983964169"
        }
      ],
      "HotSpringApes": [
        {
          "comment": "My founder vote goes to our ape brothers @thugmonkez (I’m not original founder Yogi)",
          "id": "1637050214652563456"
        }
      ],
      "mrobled0": [
        {
          "comment": "Vote @thugmonkez https://t.co/fKNcfzJBor",
          "id": "1637091652987760643"
        }
      ],
      "BoyWeb3": [
        {
          "comment": "I vote for @metatattooclub https://t.co/tuwiqjsI0J",
          "id": "1637091612797935622"
        }
      ],
      "solKDunk": [
        {
          "comment": "ThugMonkez for the W https://t.co/2dRNBVRvSC",
          "id": "1637091594586423299"
        }
      ],
      "SOLBluntz": [
        {
          "comment": "got lit and recorded this freestyle for tha @thugmonkez https://t.co/9rqomxGjyi",
          "id": "1637091338570321920"
        }
      ],
      "2shane420": [
        {
          "comment": "Casting vote for @MetaTattooClub absolutely love the team and the art and shit I’m at work using my work shoes I have to put back on💀 much love https://t.co/cARnUBpzJa",
          "id": "1637090752277749760"
        }
      ],
      "nixeniego": [
        {
          "comment": "Voting for @MetaTattooClub!! https://t.co/BBClV5CZiq",
          "id": "1637090716563439616"
        }
      ],
      "GOLDFlSHLOVER69": [
        {
          "comment": "Still not goldfish but Thugmonkez have my vote https://t.co/3rQmnACJji",
          "id": "1637090665317236738"
        }
      ],
      "FLMoonMan": [
        {
          "comment": "@thugmonkez 😤",
          "id": "1637090558026870786"
        }
      ],
      "alishadidthat": [
        {
          "comment": "@thugmonkez https://t.co/XZZmi25EFh",
          "id": "1637089898921439232"
        }
      ],
      "Charchuck1": [
        {
          "comment": "Here’s my reimagined art of this dope MTC I just sniped! https://t.co/FeYNOCu15J",
          "id": "1637089716859289601"
        }
      ],
      "MetaHostile": [
        {
          "comment": "Lfgggg https://t.co/Y5INCmFSvs",
          "id": "1637089392622817283"
        }
      ],
      "solcrackin": [
        {
          "comment": "I cast my vote for @MetaTattooClub love the art inspired me https://t.co/SnAhDuNcHQ",
          "id": "1637089145175564291"
        }
      ],
      "dumpling_sol": [
        {
          "comment": "As the founder of Launchlabs I vote for @MetaTattooClub 🫡",
          "id": "1637088648167407620"
        }
      ],
      "XBD__22": [
        {
          "comment": "MTC all the way!! https://t.co/JRExCI0adA https://t.co/XgLT9PruWj",
          "id": "1637087850070962179"
        }
      ],
      "BOSSANOVA1776": [
        {
          "comment": "MTC IS COMMUNITY!!! WE GOT THIS!!!! https://t.co/TLDi4bs5N3",
          "id": "1637085417617997826"
        }
      ],
      "g3_tech": [
        {
          "comment": "https://t.co/OyFzynLb9B",
          "id": "1637085043968589826"
        }
      ],
      "JoseVal88284437": [
        {
          "comment": "Vote for @MetaTattooClub https://t.co/kHis8mAubw",
          "id": "1637083916292231169"
        }
      ],
      "WhenBag": [
        {
          "comment": "My first sol nft was this ! Send us to the ball pit! https://t.co/05j0K4PKqH",
          "id": "1637083771986927617"
        }
      ],
      "MarioSSLove": [
        {
          "comment": "My vote goes to @MetaTattooClub with my reimagined NFT art 🏛️ https://t.co/RquSf7mv1k",
          "id": "1637083767696240641"
        }
      ],
      "Duachim_": [
        {
          "comment": "I dusted this creation from the archives inspired by @metatattooclub https://t.co/wm5L8IyfWB",
          "id": "1637083462514475016"
        }
      ],
      "nofuxdeluxe": [
        {
          "comment": "never even heard of @thugmonkez so I’m going with the tattooed fellas https://t.co/RfjemDi2j1",
          "id": "1637081986132049921"
        }
      ],
      "Cry4Dev": [
        {
          "comment": "@MetaTattooClub LFG!!",
          "id": "1637081361537290241"
        }
      ],
      "Tony_maldos": [
        {
          "comment": "I have reimagined my NFT to my favorite anime. Kakashi Hatake MTC god 🔥🔥🔥 @MarianoLM5 https://t.co/U5laeACzeF",
          "id": "1637080747453345792"
        }
      ],
      "CryptoKhan3": [
        {
          "comment": "@MetaTattooClub is the best club\nInspired by one of our Ink Gods https://t.co/4TNlbyJb5w",
          "id": "1637080363120881802"
        }
      ],
      "AyeM317": [
        {
          "comment": "My vote goes for @MetaTattooClub cause !ff",
          "id": "1637079228385484801"
        }
      ],
      "steelers8452": [
        {
          "comment": "This vote goes to @MetaTattooClub https://t.co/a6EV3AVkYd",
          "id": "1637078716751781889"
        }
      ],
      "EthMonster666": [
        {
          "comment": "This reimagined art piece is a vote for @MetaTattooClub https://t.co/4UtjKmHed5",
          "id": "1637077942038585344"
        }
      ]
    }
  });

  const [teamScores, setTeamScores] = useState({ MTC: 0, TMZ: 0 });
  const [tweetVotes, setTweetVotes] = useState({});
  const [selectedScores, setSelectedScores] = useState({});

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const { data } = await axios.get(`${serverUrl}/votes`);
        setTeamScores(data.teamScores);

        const fetchedTweetVotes = data.tweetVotes;
        setTweetVotes(fetchedTweetVotes);

        const fetchedSelectedScores = Object.fromEntries(
          Object.entries(fetchedTweetVotes).map(([id, vote]) => [id, vote.score])
        );
        setSelectedScores(fetchedSelectedScores);
      } catch (error) {
        console.error('Error fetching votes:', error);
      }
    };

    fetchVotes();
  }, []);



  const handleScoreButtonClick = async (tweetId, team, score) => {
    const newVote = { [tweetId]: { team, score } };
    setTweetVotes({ ...tweetVotes, ...newVote });

    const newSelectedScores = { ...selectedScores, [tweetId]: score };
    setSelectedScores(newSelectedScores);

    const newTeamScores = { ...teamScores, [team]: teamScores[team] + score };
    setTeamScores(newTeamScores);

    try {
      await axios.post(`${serverUrl}/votes`, {
        tweetVotes: newVote,
        teamScores: newTeamScores,
      });
    } catch (error) {
      console.error('Error updating votes:', error);
    }
  };

  const [embedTweets, setEmbedTweets] = useState({});
  const toggleEmbedTweet = (tweetId) => {
    setEmbedTweets((prevEmbedTweets) => ({
      ...prevEmbedTweets,
      [tweetId]: !prevEmbedTweets[tweetId],
    }));
  };

  return (
    <div style={{ paddingLeft: "2rem", paddingRight: "2rem", margin: "4rem", maxWidth: "100%", display: "flex", alignItems: "start", flexDirection: "column" }}>
      <div style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 100, padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>MTC: {teamScores.MTC}</h2>
        <h2 style={{ marginLeft: '2rem' }}>TMZ: {teamScores.TMZ}</h2>
      </div>
      <h1 style={{ textAlign: "center", width: "100%" }}>March Madness Votes<br />MTC vs TMZ</h1>
      {Object.entries(tweetData.comments).map(([username, comments]) => (
        <div key={username}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id={`userCheckbox-${username}`} style={{ marginRight: '1rem' }} />
            <h2>{username}'s comments:</h2>
          </div>
          <ul>
            {comments.map((comment, index) => (
              <li key={comment.id}>
                <label>
                  {comment.comment}
                </label>
                <button
                  style={{ marginLeft: '1rem' }}
                  onClick={() => toggleEmbedTweet(comment.id)}
                >
                  {embedTweets[comment.id] ? 'Hide tweet' : 'Show tweet'}
                </button>
                {embedTweets[comment.id] ? (
                  <div style={{ marginLeft: '1rem' }}>
                    <Tweet tweetId={comment.id} />
                  </div>
                ) : null}
                {index === comments.length - 1 && (
                  <>
                    <div style={{ marginTop: "1rem", marginBottom: "6px" }}>
                      <label>
                        <input
                          type="radio"
                          name={`team_${comment.id}`}
                          value="MTC"
                          checked={tweetVotes[comment.id]?.team === 'MTC'}
                          onChange={(e) => {
                            setTweetVotes({
                              ...tweetVotes,
                              [comment.id]: { ...tweetVotes[comment.id], team: e.target.value },
                            });
                          }}
                        /> MTC
                      </label>
                      <label>
                        <input
                          type="radio"
                          name={`team_${comment.id}`}
                          value="TMZ"
                          checked={tweetVotes[comment.id]?.team === 'TMZ'}
                          onChange={(e) => {
                            setTweetVotes({
                              ...tweetVotes,
                              [comment.id]: { ...tweetVotes[comment.id], team: e.target.value },
                            });
                          }}
                        /> TMZ
                      </label>
                    </div>
                    <div>
                      {[1, 3, 5, 7, 10, 12, 15, -1].map((score) => (
                        <button
                          key={score}
                          disabled={!!tweetVotes[comment.id]}
                          style={selectedScores[comment.id] === score ? { backgroundColor: 'yellow' } : {}}
                          onClick={async () => {
                            const team = document.querySelector(
                              `input[name="team_${comment.id}"]:checked`
                            )?.value;
                            if (team) {
                              await handleScoreButtonClick(comment.id, team, score);
                            }
                          }}
                        >
                          +{score}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default TweetDataDisplay;      
