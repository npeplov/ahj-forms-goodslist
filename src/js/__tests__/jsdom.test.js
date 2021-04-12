import Popover from '../widget.js';

beforeAll(() => {
  document.body.innerHTML = '<div class="widget"></div>';
});

test('render self', () => {
  const container = document.querySelector('.widget');
  const widget = new Popover(container);

  widget.bindToDOM();
  expect(container.innerHTML).toEqual(Popover.markup);
});
