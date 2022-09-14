import { helper } from '@ember/component/helper';

export function url([type]) {
	switch (type) {
	case 'github':
		return 'https://github.com/surrealdb/surrealdb';
	case 'issues':
		return 'https://github.com/surrealdb/surrealdb/issues';
	case 'releases':
		return 'https://github.com/surrealdb/surrealdb/releases';
	case 'discussions':
		return 'https://github.com/surrealdb/surrealdb/discussions';
	case 'twitter':
		return 'https://twitter.com/surrealdb';
	case 'linkedin':
		return 'https://www.linkedin.com/company/surrealdb/';
	case 'youtube':
		return 'https://www.youtube.com/channel/UCjf2teVEuYVvvVC-gFZNq6w';
	case 'discord':
		return 'https://discord.gg/f9qZ7FCHAa';
	case 'dev':
		return 'https://dev.to/surrealdb';
	case 'stackoverflow':
		return 'https://stackoverflow.com/questions/tagged/surrealdb';
	case 'reddit':
		return 'https://www.reddit.com/r/surrealdb/';
	case 'license':
		return 'https://github.com/surrealdb/license';
	case 'docker':
		return 'https://hub.docker.com/r/surrealdb/surrealdb';
	}
}

export default helper(url);
