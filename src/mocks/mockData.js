const arrProds = [
  {
    id: "1",
    tittle: "Everything Everywhere All at Once",
    description:
      "An aging Chinese immigrant is    swept up in an insane adventure, where she alone can save what’s important to her by connecting with the lives she could have led in other universes.",
    price: 200,
    genre: "action",
    src: "https://i.postimg.cc/9z3WdLPJ/Todo-a-la-vez-en-todas-partes-245462960-large.jpg",
    stock: 15,
  },
  {
    id: "2",
    tittle: "American Ultra",
    description:
      "American Ultra is a fast-paced action comedy about Mike, a seemingly hapless and unmotivated stoner whose small-town life with his live-in girlfriend, Phoebe, is suddenly turned upside down. Unbeknownst to him, Mike is actually a highly trained, lethal sleeper agent. In the blink of an eye, as his secret past comes back to haunt him, Mike is thrust into the middle of a deadly government operation and is forced to summon his inner action-hero in order to survive.",
    price: 500,
    genre: "action",
    src: "https://i.postimg.cc/HnwZbbFt/p-800x1200-American-Ultra-En-070616.jpg",
    stock: 30,
  },
  {
    id: "3",
    tittle: "Bad Boys II",
    description:
      "Out-of-control, trash-talking buddy cops Marcus Burnett and Mike Lowrey of the Miami Narcotics Task Force reunite, and bullets fly, cars crash and laughs explode as they pursue a whacked-out drug lord from the streets of Miami to the barrios of Cuba. But the real fireworks result when Marcus discovers that playboy Mike is secretly romancing Marcus’ sexy sister.",
    price: 700,
    genre: "action",
    src: "https://i.postimg.cc/kXkz6FGL/y8-Gogsh-Y1-Pgzm3y-EJ2-ECngucgds.jpg",
    stock: 10,
  },
  {
    id: "4",
    tittle: "Step Brothers",
    description:
      "Brennan Huff and Dale Doback might be grown men. But that doesn’t stop them from living at home and turning into jealous, competitive stepbrothers when their single parents marry. Brennan’s constant competition with Dale strains his mom’s marriage to Dale’s dad, leaving everyone to wonder whether they’ll ever see eye to eye.",
    price: 600,
    genre: "comedy",
    src: "https://i.postimg.cc/yNDNLw2p/890928221653464917.jpg",
    stock: 6,
  },
  {
    id: "5",
    tittle: "Vacation",
    description:
      "Hoping to bring his family closer together and to recreate his childhood vacation for his own kids, a grown up Rusty Griswold takes his wife and their two sons on a cross-country road trip to the coolest theme park in America, Walley World. Needless to say, things don’t go quite as planned.",
    price: 350,
    genre: "comedy",
    src: "https://i.postimg.cc/wB8rrNrK/413863131653466553.jpg",
    stock: 9,
  },
  {
    id: "6",
    tittle: "A Million Ways to Die in the West",
    description:
      "As a cowardly farmer begins to fall for the mysterious new woman in town, he must put his new-found courage to the test when her husband, a notorious gun-slinger, announces his arrival.",
    price: 1500,
    genre: "comedy",
    src: "https://i.postimg.cc/VNKVkh6w/be0c263f-eb49-49b0-8716-7ed27f99143c.jpg",
    stock: 12,
  },
  {
    id: "7",
    tittle: "Rec",
    description:
      "A television reporter and cameraman follow emergency workers into a dark apartment building and are quickly locked inside with something terrifying.",
    price: 900,
    genre: "horror",
    src: "https://i.postimg.cc/XJ31x0z9/829633431653464906.jpg",
    stock: 7,
  },
  {
    id: "8",
    tittle: "Halloween II",
    description:
      "After failing to kill stubborn survivor Laurie and taking a bullet or six from former psychiatrist Dr. Sam Loomis, Michael Myers has followed Laurie to the Haddonfield Memorial Hospital, where she’s been admitted for Myers’ attempt on her life. The institution proves to be particularly suited to serial killers, however, as Myers cuts, stabs and slashes his way through hospital staff to reach his favorite victim.",
    price: 700,
    genre: "horror",
    src: "https://i.postimg.cc/br2hfPqd/poster-0-3-1.webp",
    stock: 8,
  },
  {
    id: "9",
    tittle: "Midsommar",
    description:
      "Several friends travel to Sweden to study as anthropologists a summer festival that is held every ninety years in the remote hometown of one of them. What begins as a dream vacation in a place where the sun never sets, gradually turns into a dark nightmare as the mysterious inhabitants invite them to participate in their disturbing festive activities.",
    price: 1200,
    genre: "horror",
    src: "https://i.postimg.cc/T12tnq4x/midsommar-poster-684087.webp",
    stock: 13,
  },
];

const promiseProds = new Promise((res) => {
  res(arrProds);
});

export default promiseProds;
