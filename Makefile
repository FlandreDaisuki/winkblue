.phony: build
build: dist-package

dist-package:
	pnpm exec vite build

release-and-publish:
	pnpm exec bumpp
	pnpm exec vite build
	pnpm publish
