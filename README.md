# Лабораторная работа 4: GitHub Actions CI

В репозитории находятся два независимых варианта лабораторной работы.

- `ermakov-variant-7` - Node.js, ESLint, Mocha, `npm pack`.
- `morozov-variant-13` - Go, `go vet`, `go test`, `go build`.

Workflow-файлы находятся в `.github/workflows/`:

- `ermakov-node-ci.yml`
- `morozov-go-ci.yml`

Каждый workflow запускается при `push` в ветку `main` и при `pull_request` в `main`, но только при изменениях в своей папке или своем workflow-файле.
