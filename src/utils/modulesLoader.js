import * as api from '../managers/api/api';

export default function loadModules(router) {
	const modules = [{
		name: 'home',
		componentName: 'Home',
		title: 'Home',
		path: '/',
		icon: 'home',
		store: false,
		showInHome: false,
		menuItem: true
	}];

	modules.forEach(module => {
		router.addRoute({
			path: `${module.path}`,
			component: () => import(`../modules/${module.name}/${module.componentName}.vue`)
		});

		if (module.loadedMethod) {
			module.loadedMethod();
		}

		// Store.commit('UsersStore/setModules', processModules);
		// Store.commit('UsersStore/loaded');
		router.push('/');
	});
}