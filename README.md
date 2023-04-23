# Monorepo_Js

Repository for demo purpose in Tech Talk "Monorepo with JS":

<https://www.thecognizanthub.com/eventos/advices-to-start-a-project-from-the-scratch-monorepo-with-js/>

Execution list (npm run):

- update = run-s init-commons build-dep update-packages
- dev = lerna run dev --parallel
- lint = eslint packages --ext .ts,.tsx
- e2e = lerna run cypress:run
- e2e-dev = lerna run cypress:open
- clean = rimraf packages/commons/*.tgz && rimraf packages/commons/dist
- init-commons = lerna bootstrap --scope @demo/commons
- update-packages = lerna bootstrap
- build-dep = lerna run build-dep
- check-prettier = prettier --check packages/_/\*\*/_.{ts,tsx}
- prettier = prettier --write packages/_/\*\*/_.{ts,tsx}
- prepare = husky install
- build = lerna run build
- unit-test = lerna run test --stream
- unit-test:watch = lerna run test:watch --stream
