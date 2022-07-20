export default class Widget {
  constructor() {
    this.constructWidget();
  }

  constructWidget() {
    const body = document.querySelector('body');

    const widgetField = document.createElement('div');
    widgetField.className = 'widget-field';
    body.append(widgetField);

    const widgetButton = document.createElement('div');
    widgetButton.className = 'widget-button';
    widgetButton.textContent = 'collapse';
    widgetField.append(widgetButton);

    const widgetTextField = document.createElement('div');
    widgetTextField.className = 'widget-text-field';
    widgetField.append(widgetTextField);

    const widgetText = document.createElement('p');
    widgetText.className = 'widget-text';
    widgetText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    widgetTextField.append(widgetText);

    const heightStart = widgetButton.offsetHeight + widgetButton.offsetTop + 15;
    const heightEnd = widgetTextField.offsetHeight + widgetTextField.offsetTop + 20;

    let height = heightStart;
    widgetField.style.height = `${height}px`;

    const fps = 60 / 1000;
    const duration = 1500;
    const framecount = fps * duration;
    const stepSize = (heightEnd - heightStart) / framecount;
    const frameDuration = 1 / fps;
    const widgetTail = document.createElement('p');
    widgetTail.className = 'widget-tail';
    widgetTail.textContent = 'Tail';
    body.append(widgetTail);

    widgetTail.style.top = `${height}px`;

    const left = widgetField.getBoundingClientRect().right - widgetTail.offsetWidth;
    console.log(left);
    widgetTail.style.left = `${left}px`;

    function step() {
      if (height > heightEnd) {
        widgetButton.removeEventListener('click', step);
        widgetButton.addEventListener('click', stepBack);
        return;
      }
      height += stepSize;
      widgetField.style.height = `${height}px`;
      widgetTail.style.top = `${height}px`;
      setTimeout(step, frameDuration);
    }

    function stepBack() {
      if (height < heightStart) {
        widgetButton.removeEventListener('click', stepBack);
        widgetButton.addEventListener('click', step);
        return;
      }
      height -= stepSize;
      widgetField.style.height = `${height}px`;
      widgetTail.style.top = `${height}px`;
      setTimeout(stepBack, frameDuration);
    }

    widgetButton.addEventListener('click', step);
  }
}
