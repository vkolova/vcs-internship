### GitHub Actions

We already know how linters work and why do we need them.

To help us write clean code, and continuously check for issues, create a GitHub action that runs `flake8` and `eslint` checks on the repository whenever you create/modify a pull request. (`eslint` is a linter tool for JavaScript.)

Your workflow file should look something like this:
```yml
name: PR Linters Run

on: [ pull_request ]

jobs:
  run_js_linters:
    name: Run JS Linter Checks
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '14.x'
    - name: Install npm dependencies
      run: npm install eslint
    - name: Run eslint
      run: |
        npx eslint .

  run_python_linters:
    name: Run Python Linter Checks
    runs-on: ubuntu-latest
    timeout-minutes: 15
    strategy:
      matrix:
        python-version: [3.8]
    steps:
      - uses: actions/checkout@v2
      - name: Set up Python ${{ matrix.python-version }}
        uses: actions/setup-python@v1
        with:
          python-version: ${{ matrix.python-version }}
      - name: Install python dependencies
        run: pip install flake8
      - name: Run flake8
        run: flake8
```

- [Getting Started with ESLint](https://eslint.org/docs/user-guide/getting-started)

