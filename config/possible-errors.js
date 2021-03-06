module.exports = {

	"rules": {
		"comma-dangle": [ 2, "never" ],
		"no-cond-assign": [ 2, "always" ],
		"no-console": 0,
		"no-constant-condition": 2,
		"no-control-regex": 2,
		"no-debugger": 2,
		"no-dupe-args": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-empty": 2,
		"no-empty-character-class": 2,
		"no-ex-assign": 2,
		"no-extra-boolean-cast": 2,
		"no-extra-parens": 0,
		"no-extra-semi": 2,
		"no-func-assign": 2,
		"no-inner-declarations": [ 2, "both" ],
		"no-invalid-regexp": [ 2, {
			"allowConstructorFlags": []
		}],
		"no-irregular-whitespace": [ 2, {
			"skipComments": false
		}],
		"no-negated-in-lhs": 2,
		"no-obj-calls": 2,
		"no-regex-spaces": 2,
		"no-sparse-arrays": 2,
		"no-unexpected-multiline": 2,
		"no-unreachable": 2,
		"use-isnan": 2,
		"valid-jsdoc": [ 2, {
			"matchDescription": "^[A-Z][A-Za-z0-9\\s]*[.]$",
			"prefer": {},
			"preferType": {},
			"requireParamDescription": true,
			"requireReturn": false,
			"requireReturnDescription": true,
			"requireReturnType": true
		}],
		"valid-typeof": 2
	}

};
