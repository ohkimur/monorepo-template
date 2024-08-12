## TODO

@ohkimur

### Linting

- [x] root
- [x] packages
  - [x] react
  - [x] vue
  - [x] qwik
  - [x] solid
  - [x] svelte
  - [o] preact

### Icons

- [ ] integrate with meta frameworks
  - [ ] next
  - [ ] remix
  - [ ] nuxt
- [ ] fixes and improvements
  - [ ] migrate closer to pure ESM
    - [x] use default ESM everywhere
    - [x] compile default to js as ESM and .cjs for CJS
    - [x] internal packages should use ESM only
    - [ ] migrate eslint to v9 (esm config)
  - [x] create `vite-config` package
  - [x] fix `ref` types
  - [ ] `@monorepo-template/icons-shared`
    - [ ] fix/refactor exported props
    - [ ] make pure TypeScript?
  - [ ] fix `@monorepo-template/icons-svelte` bundling of `@monorepo-template/icons-shared` (if necessary after making it pure TypeScript)
  - [ ] refactor `@monorepo-template/icons-generator` templates
  - [ ] refactor `createSvgIcon` classes to kebab-case
    - [ ] react
    - [ ] vue
    - [ ] qwik
    - [ ] solid
    - [ ] svelte
    - [ ] preact
  - [ ] add dynamic imports tests
    - [ ] react
    - [ ] vue
    - [ ] qwik
    - [ ] solid
    - [ ] svelte?
    - [ ] preact
  - [ ] fix dynamic imports vite warnings
    - [ ] react
    - [ ] vue
    - [ ] qwik
    - [ ] solid
    - [ ] svelte
    - [ ] preact

### Components

- [ ] architecture
  - [ ] establish generic components API
  - [ ] break down the design system into composables
    - [ ] FSM (Finite State Machine)
    - [ ] headless
    - [ ] UI (Potentially integrated together with the headless into a single package)
      - [ ] primitives (variables?)
      - [ ] themes
- [ ] create packages
  - [ ] react
  - [ ] vue
  - [ ] qwik
  - [ ] solid
  - [ ] svelte
  - [ ] preact
- [ ] integrate with meta frameworks
  - [ ] next
  - [ ] remix
  - [ ] nuxt
