const MyTitle = function(props) {
  return React.createElement('div', null, React.createElement('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return React.createElement(
    'div',
    null,
    React.createElement(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    React.createElement(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
    React.createElement(MyTitle, { title: 'Rick and Morty', color: 'LimeGreen' }),
    React.createElement(MyTitle, { title: 'Silicon Valley', color: 'Peru' })
  );
};

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
