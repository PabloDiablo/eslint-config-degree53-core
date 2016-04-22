module.exports = {

	"extends": [
		"degree53-core/config/best-practices",
		"degree53-core/config/possible-errors",
		"degree53-core/config/stylistic-issues",
		"degree53-core/config/variables"
	],
	
	"parserOptions": {
		"ecmaFeatures": {
			"globalReturn": false
		}
	},
	
	"rules": {
		"strict": [ 2, "safe" ]
	}

};
