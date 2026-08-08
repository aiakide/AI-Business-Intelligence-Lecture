---
name: importing-slides
description: Import slides from external Markdown files
---

# Importing Slides

Import slides from external Markdown files into your main presentation.

## Basic Import

```md
---
src: ./pages/intro.md
---
```

## Import Specific Slides

Use slide numbers and ranges:

```md
---
src: ./other.md#2,5-7
---
```

Imports slides 2, 5, 6, and 7 from `other.md`.

## Frontmatter Merging

When importing, the main entry's frontmatter takes priority over the imported file's frontmatter for duplicate keys.

## Use Cases

- Reuse common slides across presentations
- Modularize long presentations
- Maintain shared slide libraries
- Include templates or boilerplates
