'use strict';
module.exports = {
	structureComponents: {
		element: 'elements',
		composite: 'composites',
		screen: 'screens'
	},
	behaviourComponents: {
		state: 'state',
		channel: 'channel',
		link: 'link'
	},

  globalNames: {
    channels: 'Channels'
  },

	prefix: conventionalPrefix,
	composedName: composedName,
	ngModuleName: moduleName
};


// turn project name into conventional prefix
function conventionalPrefix(project) {
	project = project || 'default';

	return {
		upper: firstUpper(project),
		lower: firstLower(project)
	};
}

function firstUpper(string) {
	return string.charAt(0).toUpperCase() + string.substr(1);
}

function firstLower(string) {
	return string.charAt(0).toLowerCase() + string.substr(1);
}

function composedName(prefix, entity, component) {
	component = component || '';
	return [prefix, firstUpper(entity), firstUpper(component)].join('');
}

function moduleName(prefix, type, component) {
	return [prefix, type, component].join('.');
}