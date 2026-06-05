/** Update race stats and gallery src paths when you have final numbers and photos. */

export const beyondHero = {
  imageSrc: '/gallery/marathon-hero.png',
  fallbackLabel: 'Marathon hero photo: add marathon-hero.png to public/gallery/',
  alt: 'Ashok More at a half marathon',
};

export const beyondIntro = {
  title: 'Beyond the Code',
  lead: 'Long before I treated a production deploy like race day, I was learning the same lessons on the road: respect the distance, trust your training, and keep moving when it gets quiet and hard.',
  body: 'Running half marathons didn’t make me an engineer, but it sharpened how I show up for hard problems, for teammates, and for the long arc of a career. This page is that overlap: the personal side of someone who builds systems for a living.',
};

export const engineeringParallels = [
  {
    title: 'Consistency beats heroics',
    running:
      'The weeks nobody posts about (easy runs in the rain, foam rolling, bed before midnight) are what make the final 5K possible.',
    engineering:
      'The same is true in code: steady reviews, small tested changes, and documentation that saves the next person an hour. Flashy pushes fade; habits compound.',
  },
  {
    title: 'Pushing through the hard miles',
    running:
      'There’s always a stretch where your legs argue and your head wants a shortcut. You don’t negotiate; you shorten the stride and stay in motion.',
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
  { label: 'Half marathons completed', value: '10+' },
  { label: 'Cities run in', value: 'Boston, NY, Mumbai' },
  { label: 'Half marathon PR', value: '2:05' },
];

/**
 * Gallery photos: set `src` to `/gallery/your-file.jpeg` in public/gallery/.
 * Uncomment placeholders below when you add more images.
 */
export const photoGallery = [
  // 1 - Training / on the course
  {
    id: 'bc-trail',
    src: '/gallery/trail-run.jpeg',
    caption: 'Off the road, on the trail: space to think without a screen.',
    location: 'B.A.A. Half Marathon',
    aspect: 'tall',
  },
  // 2 - Finish
  {
    id: 'bc-finish',
    src: '/gallery/finish-line.jpeg',
    caption: 'The finish chute: tired, grateful, already thinking about the next build.',
    location: 'Half marathon finish',
    aspect: 'wide',
  },
  // 3 - Post-race
  {
    id: 'bc-recovery',
    src: '/gallery/recovery-walk.jpeg',
    caption: 'Recovery walk. The work isn’t done when you cross the line.',
    location: 'Post-race',
    aspect: 'tall',
  },

  // --- Placeholders (uncomment when photos are ready) ---
  // {
  //   id: 'bc-1',
  //   src: null,
  //   caption: 'Where the training happens: early miles before the city wakes up.',
  //   location: 'Charles River, Boston',
  //   aspect: 'wide',
  // },
  // {
  //   id: 'bc-2',
  //   src: null,
  //   caption: 'Race morning. Nerves, coffee, and the same checklist every time.',
  //   location: 'Start line',
  //   aspect: 'tall',
  // },
  // {
  //   id: 'bc-5',
  //   src: null,
  //   caption: 'Boston streets: home course energy.',
  //   location: 'Boston, MA',
  //   aspect: 'square',
  // },
];
