.phony: build
build: dist-package

dist-package:
	pnpm exec vite build

dist-dts:
	# https://www.typescriptlang.org/docs/handbook/compiler-options.html
	pnpm --package=typescript dlx tsc src/index.js \
	  --allowJS \
		--declaration \
		--emitDeclarationOnly \
		--outDir '@types' \
		--lib 'esnext,dom'
	mv @types/index.d.ts @types/winkblue.d.mts

release-and-publish:
	pnpm exec bumpp
	pnpm exec vite build
	pnpm publish
