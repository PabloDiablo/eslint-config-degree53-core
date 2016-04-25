module.exports = {

	"rules": {
		"init-declarations": 0, // review
		"no-catch-shadow": 0,
		"no-delete-var": 2,
		"no-label-var": 2,
		"no-restricted-globals": 0, // review
		"no-shadow": [ 2, { // review
			"allow": [],
			"builtinGlobals": true,
			"hoist": "functions"
		}],
		"no-shadow-restricted-names": 2,
		"no-undef": [ 2, {
			"typeof": false
		}],
		"no-undef-init": 2,
		"no-undefined": 2,
		"no-unused-vars": [ 2, {
			"args": "after-used",
			"argsIgnorePattern": "",
			"caughtErrors": "none",
			"caughtErrorsIgnorePattern": "",
			"vars": "all",
			"varsIgnorePattern": ""
		}],
		"no-use-before-define": [ 2, {
			"classes": true,
			"functions": true
		}]
	}

};
