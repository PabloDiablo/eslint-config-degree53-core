module.exports = {

	"rules": {
		"array-bracket-spacing": 0,
		"block-spacing": 0,
		"brace-style": [ 2, "1tbs", {
			"allowSingleLine": false
		}],
		"camelcase": [ 2, {
			"properties": "always"
		}],
		"comma-spacing": [ 2, {
			"after": true,
			"before": false
		}],
		"comma-style": [ 2, "last" ],
		"computed-property-spacing": [ 2, "never" ],
		"consistent-this": [ 2, "self" ],
		"eol-last": 0, //review
		"func-names": 0, // review
		"func-style": 0,
		"id-blacklist": [ "data" ],
		"id-length": 0, // review
		"id-match": 0, // review
		"indent": [ 2, "tab", {
			"SwitchCase": 1,
			"VariableDeclarator": 1
		}],
		"jsx-quotes": [ 2, "prefer-double" ],
		"key-spacing": [ 2, {
			"afterColon": true,
			"beforeColon": false,
			"mode": "strict"
		}],
		"keyword-spacing": [ 2, {
			"after": true,
			"before": true,
			"overrides": {}
		}],
		"linebreak-style": 0, // review
		"lines-around-comment": 0, // review
		"max-depth": 0, // review
		"max-len": 0, // review
		"max-nested-callbacks": 0, // review
		"max-params": 0, // review
		"max-statements": 0, // review
		"max-statements-per-line": 0, // review
		"new-cap": [ 2, {
			"capIsNew": true,
			"capIsNewExceptions": [],
			"newIsCap": true,
			"newIsCapExceptions": [],
			"properties": true
		}],
		"new-parens": 2,
		"newline-after-var": 0, // review
		"newline-before-return": 0, // review
		"newline-per-chained-call": [ 2, {
			"ignoreChainWithDepth": 3
		}],
		"no-array-constructor": 0,
		"no-bitwise": 0, // review
		"no-continue": 0, // review
		"no-inline-comments": 0,
		"no-lonely-if": 2,
		"no-mixed-spaces-and-tabs": 2,
		"no-multiple-empty-lines": 0, // review
		"no-negated-condition": 2,
		"no-nested-ternary": 2,
		"no-new-object": 2,
		"no-plusplus": 0,
		"no-restricted-syntax": 0, // review
		"no-spaced-func": 2,
		"no-ternary": 0,
		"no-trailing-spaces": [ 2, {
			"skipBlankLines": true
		}],
		"no-underscore-dangle": 0,
		"no-unneeded-ternary": 2,
		"no-whitespace-before-property": 2,
		"object-curly-spacing": 0,
		"one-var": 0,
		"one-var-declaration-per-line": 0,
		"operator-assignment": 0, // review
		"operator-linebreak": [ 2, "after" ],
		"padded-blocks": 0,
		"quote-props": [ 2, "as-needed", {
			"keywords": true,
			"numbers": true,
			"unnecessary": true
		}],
		"quotes": [ 2, "single" ],
		"require-jsdoc": 0,
		"semi": [ 2 , "always" ],
		"semi-spacing": [ 2, {
			"after": true,
			"before": false
		}],
		"sort-imports": [ 2, {
			"ignoreCase": false,
			"ignoreMemberSort": false,
			"memberSyntaxSortOrder": [ "none", "single", "mutiple", "all" ]
		}],
		"sort-vars": 0,
		"space-before-blocks": [ 2, "always" ],
		"space-before-function-paren": [ 2, "always" ], // review
		"space-in-parens": [ 2, "never" ],
		"space-infix-ops": [ 2, {
			"int32Hint": false
		}],
		"space-unary-ops": [ 2, {
			"nonwords": false,
			"overrides": {},
			"words": true
		}],
		"spaced-comment": [ 2, "always" ],
		"wrap-regex": 0 // review
	}

};
