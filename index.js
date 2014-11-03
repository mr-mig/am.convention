'use strict';
var conventions = {};

conventions.structureComponents = {
  element: 'elements',
  composite: 'composites',
  screen: 'screens'
};
conventions.behaviourComponents = {
  state: 'state',
  channel: 'channel',
  link: 'link'
};

conventions.globalNames = {
  channels: 'Channels'
};

conventions.names = {
  element: composeName(firstLower),
  state: composeName(firstLower, conventions.behaviourComponents.state),
  composite: composeName(firstLower),
  screen: composeName(firstLower),
  ngModule: composeName(firstLower, '.')
};

function firstUpper(string) {
  return string.charAt(0).toUpperCase() + string.substr(1);
}

function firstLower(string) {
  return string.charAt(0).toLowerCase() + string.substr(1);
}

function composeName(firstWordTransformer, component, separator) {
  separator = separator || '';
  firstWordTransformer = firstWordTransformer || firstLower;
  component = component || '';

  return function (entity) {
    return [firstWordTransformer(entity), firstUpper(component)].join(separator);
  };
}

module.exports = conventions;