const db = [
  {
    _id: '1',
    category: 'cinema', // cinema, theatre, tvshows, music
    level: 'easy', // easy, medium, hard
    question: 'What iconic accessory did Audrey Hepburn wear in the film "Breakfast at Tiffanys?"',
    answers: {
      a: 'Blueish headband',
      b: 'Pearl necklace',
      c: 'Little red dress',
      d: 'Oversized coat',
    },
    correctAnswer: 'b',
    feedback: 'Audrey Hepburns character, Holly Golightly, wore the pearl necklace in the film "Breakfast at Tiffanys" as a symbol of her aspiration to attain a more glamorous and sophisticated lifestyle.',
    delete: false,
  },
  {
    _id: '2',
    category: 'theatre', // cinema, theatre, tvshows, music
    level: 'hard', // easy, medium, hard
    question: 'Who is considered one of the prominent playwrights associated with the Theatre of the Absurd?',
    answers: {
      a: 'William Shakespeare',
      b: 'Anton Chéjov',
      c: 'Samuel Beckett',
      d: 'Arthur Miller',
    },
    correctAnswer: 'c',
    feedback: 'Samuel Beckett is a pioneering playwright known for his influential works in the Theatre of the Absurd, exploring themes of human existence, isolation, and meaninglessness.',
    delete: false,
  },
  {
    _id: '3',
    category: 'tvshows', // cinema, theatre, tvshows, music
    level: 'hard', // easy, medium, hard
    question: 'What is the name of Ross and Monicas dog when they were kids on Friends?',
    answers: {
      a: 'Buddy',
      b: 'Fido',
      c: 'Fluffy',
      d: 'Chi-Chi',
    },
    correctAnswer: 'a',
    delete: false,
  },
  {
    _id: '4',
    category: 'cinema', // cinema, theatre, tvshows, music
    level: 'medium', // easy, medium, hard
    question: 'What was the iconic character that Charles Chaplin portrayed in many of his films?',
    answers: {
      a: 'The Tramp',
      b: 'The Businessman',
      c: 'The Detective',
      d: 'The Artist',
    },
    correctAnswer: 'a',
    delete: false,
  },
];
export default db;
