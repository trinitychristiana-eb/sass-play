import '../styles/main.scss';
import classNames from 'classnames';
import feather from 'feather-icons';

const init = () => {
  console.warn(feather.icons.circle.toSvg());
  const DROPDOWN_ITEMS = [
    {
      title: 'Urban Activities',
      boxColor: 'ui-green',
      icon: feather.icons.heart.toSvg(),
    },
    {
      title: 'Rural Activities',
      boxColor: 'indigo-blue',
      icon: feather.icons.star.toSvg(),
    },
    {
      title: 'Emotional Activities',
      boxColor: 'rust-orange',
      icon: feather.icons.activity.toSvg(),
    },
    {
      title: 'Emotional Activities',
      boxColor: 'slime-green',
      icon: feather.icons.airplay.toSvg(),
    },
    {
      title: 'Emotional Activities',
      boxColor: 'reg-brown',
      icon: feather.icons.archive.toSvg(),
    },
    {
      title: 'Emotional Activities',
      boxColor: 'navy-blue',
      icon: feather.icons.anchor.toSvg(),
    },
  ];

  const domString = DROPDOWN_ITEMS.map((item) => {
    const classes = classNames('dropdown-item-icon-box', {
      [`dropdown-item-icon-box--${item.boxColor}`]: item.boxColor,
    });

    return `
    <div class="dropdown-item-container">
    <div class="${classes}">
       ${item.icon}
    </div>
    <div class="dropdown-item-title">${item.title}</div>
  </div>
  <br/>
    `;
  }).join('');

  document.querySelector('#app').innerHTML = domString;
};

init();
