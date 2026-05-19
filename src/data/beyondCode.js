/** Update race stats and gallery src paths when you have final numbers and photos. */

export const beyondHero = {
  imageSrc: '/gallery/marathon-hero.jpg',
  fallbackLabel: 'Marathon hero photo — add marathon-hero.jpg to public/gallery/',
  alt: 'Ashok More on a marathon course',
};

export const beyondIntro = {
  title: 'Beyond the Code',
  lead: 'Long before I treated a production deploy like race day, I was learning the same lessons on the road: respect the distance, trust your training, and keep moving when it gets quiet and hard.',
  body: 'Running marathons didn’t make me an engineer—but it sharpened how I show up for hard problems, for teammates, and for the long arc of a career. This page is that overlap: the personal side of someone who builds systems for a living.',
};

export const engineeringParallels = [
  {
    title: 'Consistency beats heroics',
    running:
      'The weeks nobody posts about—easy runs in the rain, foam rolling, bed before midnight—are what make mile 20 possible.',
    engineering:
      'The same is true in code: steady reviews, small tested changes, and documentation that saves the next person an hour. Flashy pushes fade; habits compound.',
  },
  {
    title: 'Pushing through the hard miles',
    running:
      'There’s always a stretch where your legs argue and your head wants a shortcut. You don’t negotiate—you shorten the stride and stay in motion.',
    engineering:
      'Incidents, gnarly bugs, and refactors that touch half the repo feel like that stretch. I’ve learned to breathe, reduce scope, and keep one foot in front of the other until the path opens up.',
  },
  {
    title: 'Pacing for the long game',
    running:
      'Go out too fast and the finish owns you. Hold back early and you finish with something left to give.',
    engineering:
      'Products and platforms are marathons too: ship the right MVP, leave room to learn, and avoid burning the team on a sprint that was supposed to be a season. I’d rather arrive strong than arrive early.',
  },
];

export const raceStats = [
  { label: 'Marathons completed', value: '—' },
  { label: 'Cities run in', value: '—' },
  { label: 'Personal best', value: '—' },
];

export const photoGallery = [
  {
    id: 'bc-1',
    src: null,
    caption: 'Where the training happens—early miles before the city wakes up.',
    aspect: 'wide',
  },
  {
    id: 'bc-2',
    src: null,
    caption: 'Race morning. Nerves, coffee, and the same checklist every time.',
    aspect: 'tall',
  },
  {
    id: 'bc-3',
    src: null,
    caption: 'The finish chute—tired, grateful, already thinking about the next build.',
    aspect: 'square',
  },
  {
    id: 'bc-4',
    src: null,
    caption: 'Recovery walk. The work isn’t done when you cross the line.',
    aspect: 'tall',
  },
  {
    id: 'bc-5',
    src: null,
    caption: 'Boston streets—home course energy.',
    aspect: 'square',
  },
  {
    id: 'bc-6',
    src: null,
    caption: 'Off the road, on the trail—space to think without a screen.',
    aspect: 'wide',
  },
];
