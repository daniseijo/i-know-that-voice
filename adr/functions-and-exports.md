# ADR: Functions and Exports

## Decision

1. Functions: We will use functions instead of const for all components.

2. Export: We will use named exports for everything except files that NextJS would need to be default exported.

3. Index: We will use index.ts to mark the files exported in the folder.
