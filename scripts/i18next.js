import i18next from 'https://raw.githubusercontent.com/i18next/i18next/master/src/index.js';

await i18next.init({
	lng: 'en', // if you're using a language detector, do not define the lng option
	debug: true,
	resources: {
		en: {
			translation: {
				key: 'hello world',
			},
		},
	},
});
// initialized and ready to go!
document.getElementById('output').innerHTML = i18next.t('key');
