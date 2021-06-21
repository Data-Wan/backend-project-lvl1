install:
	npm ci


brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

package-install:
	npm link

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

format:
	npx prettier . --write


.PHONY: install test lint format