// anime({
//   targets: '.hidden-on-start',
//   opacity: 1,
//   duration: 200,
//   easing: 'linear',
//   elasticity: 0,
// });

//
// anime({
//   targets: '.leftSide',
//   translateX: (-50),
//   opacity: 0,
//   duration: 500,
//   // loop: 2,
//   easing: 'linear',
//   elasticity: 0,
//   direction: 'reverse'
// });

var basicTimeline = anime.timeline({
  direction: 'reverse',
  // loop: true
});

basicTimeline
  .add({
    targets: '#freestyle-tag',
    translateY: (-20),
    opacity: 0,
    duration: 500,
    easing: 'easeInCubic',
    elasticity: 500,
    offset: '-=300',
  })
  .add({
    targets: '#pathOne',
    translateX: (-15),
    translateY: (-15),
    opacity: 0,
    duration: 500,
    // loop: 2,
    easing: 'easeInCubic',
    elasticity: 500,
    // direction: 'reverse',
    offset: 100,
  })
  .add({
    targets: '#pathThree',
    translateX: (-40),
    translateY: (-40),
    opacity: 0,
    duration: 500,
    // loop: 2,
    easing: 'easeInCubic',
    elasticity: 500,
    // direction: 'reverse',
    offset: 150,
  })
  .add({
    targets: '#pathFour',
    translateX: (-60),
    translateY: (-60),
    opacity: 0,
    duration: 500,
    // loop: 2,
    easing: 'easeInCubic',
    elasticity: 500,
    // direction: 'reverse',
    offset: 250,
  })
  .add({
    targets: '#pathSix',
    translateX: (-10),
    translateY: (10),
    opacity: 0,
    duration: 500,
    // loop: 2,
    easing: 'easeInCubic',
    elasticity: 500,
    // direction: 'reverse',
    offset: 300,
  })
  .add({
    targets: '#pathTwo',
    translateX: (-25),
    translateY: (25),
    opacity: 0,
    duration: 500,
    // loop: 2,
    easing: 'easeInCubic',
    elasticity: 500,
    // direction: 'reverse',
    offset: 450,
  })
  .add({
    targets: '#pathFive',
    translateX: (-25),
    translateY: (25),
    opacity: 0,
    duration: 500,
    // loop: 2,
    easing: 'easeInCubic',
    elasticity: 500,
    // direction: 'reverse',
    offset: 550,
  })
  .add({
    targets: '#pathSeven',
    translateX: (25),
    translateY: (25),
    opacity: 0,
    duration: 500,
    // loop: 2,
    easing: 'easeInCubic',
    elasticity: 500,
    // direction: 'reverse',
    offset: 600,
    duration: 800
  });
