const { styler, spring, listen, pointer, value } = window.popmotion;

const dog = document.querySelector('#logo');
const divStyler = styler(dog);
const dogXY = value({ x: 0, y: 0 }, divStyler.set);

listen(dog, 'mousedown touchstart').start((e) => {
  e.preventDefault();
  pointer(dogXY.get()).start(dogXY);
});

listen(document, 'mouseup touchend').start(() => {
  spring({
    from: dogXY.get(),
    velocity: dogXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200,
    // mass: 1,
    // damping: 10
  }).start(dogXY);
});
