module.exports = {

	"rules": {
		"accessor-pairs": [ 2, {
			"getWithoutSet": false,
			"setWithoutGet": true
		}],
		"block-scoped-var": 2,
		"complexity": [ 2, 3 ],
		"consistent-return": 2,
		"curly": [ 2, "all" ],
		"default-case": 2,
		"dot-location": [ 2, "property" ],
		"dot-notation": [ 2, {
			"allowKeywords": true,
			"allowPattern": ""
		}],
		"eqeqeq": [ 2, "smart" ],
		"guard-for-in": 2,
		"no-alert": 2,
		"no-caller": 2,
		"no-case-declarations": 2,
		"no-div-regex": 0,
		"no-else-return": 2,
		"no-empty-pattern": 2,
		"no-eq-null": 2,
		"no-eval": 2,
		"no-extend-native": [ 2, {
			"exceptions": []
		}],
		"no-extra-bind": 2,
		"no-fallthrough": 2,
		"no-floating-decimal": 2,
		"no-implicit-coercion": [ 2, {
			"boolean": true,
			"number": true,
			"string": true
		}],
		"no-implied-eval": 2,
		"no-invalid-this": 2,
		"no-iterator": 2,
		"no-labels": {
			"allowLoop": false,
			"allowSwitch": false
		},
		"no-lone-blocks": 2,
		"no-loop-func": 2,
		"no-magic-numbers": [ 2, {
			"detectObjects": false,
			"enforceConst": false,
			"ignore": [ 0, 1 ]
		}],
		"no-multi-spaces": 2,
		"no-multi-str": 2,
		"no-native-reassign": [ 2, {
			"exceptions": []
		}],
		"no-new-func": 2,
		"no-new-wrappers": 2,
		"no-new": 2,
		"no-octal-escape": 2,
		"no-octal": 2,
		"no-param-reassign": [ 2, {
			"props": true
		}],
		"no-process-env": 2,
		"no-proto": 2,
		"no-redeclare": [ 2, {
			"builtinGlobals": true
		}],
		"no-return-assign": [ 2, "always" ],
		"no-script-url": 2,
		"no-self-compare": 2,
		"no-sequences": 2,
		"no-throw-literal": 2,
		"no-unused-expressions": [ 2, {
			"allowShortCircuit": false,
			"allowTernary": false
		}],
		"no-useless-call": 2,
		"no-useless-concat": 2,
		"no-void": 2,
		"no-warning-comments": [ 2, {
			"location": "start",
			"terms": [ "todo", "fixme", "xxx" ]
		}],
		"no-with": 2,
		"radix": 0,
		"vars-on-top": 0,
		"wrap-iife": [2, "inside"],
		"yoda": [ 2, "never" ]
	}
};
