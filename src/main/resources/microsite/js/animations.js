// We should wait until all assets on page gets loaded to trigger animations,
// by this way avoiding any FOUC problems. Since jQuery is on the page we
// take advantage of it.
$(window).on("load", function() {
    var injectionDuration = 300;

    var logoTimeline = anime.timeline({
      direction: 'reverse',
    });

    var indirectInjection = anime.timeline();
    
    // This timeline changes the elements general opacity as it is set to 0 on 
    // start to avoid logo/element flashing when loaded and then animated
    indirectInjection
      .add({
        targets: '.indirect-injection',
        opacity: 1,
        duration: injectionDuration,
        easing: 'easeInCubic',
      });

    // This timeline one is the proper logo and tag animation
    logoTimeline
      .add({
        targets: '#freestyle-tag',
        translateY: (-20),
        opacity: 0,
        duration: 1500,
        easing: 'easeInCubic',
        elasticity: 500,
        offset: '-=300',
      })
      .add({
        targets: '.piece-top',
        translateX: (-40),
        translateY: (40, 20),
        opacity: 0,
        duration: 1000,
        easing: 'easeInCubic',
        elasticity: 500,
        offset: 300,
      })
      .add({
        targets: '.piece-bottom',
        translateX: (40),
        translateY: (-40, -20),
        opacity: 0,
        duration: 1200,
        easing: 'easeInCubic',
        elasticity: 500,
        offset: 300,
      });
});
