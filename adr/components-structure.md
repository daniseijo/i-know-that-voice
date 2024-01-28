# ADR: Component Folder Structure

## Decision

We propose the following component structure for the NextJS project:

1. Root Components Folder: This folder will contain components that are shared across the entire codebase.

2. Page-Specific Components: Each page will have its own folder next to the `page.tsx` file. This folder will contain components that are only used in that specific page.

3. Nested Folders: If a page-specific component requires smaller components, nested folders can be used to organize them.

4. Name of the component file: We will use the name of the component for the folder and the file. (Q: Should we append `.component.tsx` to the file, use `index.tsx` or any other approach?)
