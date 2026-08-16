# Slidev Skill for Claude Code

Claude Code skill that provides comprehensive knowledge about [Slidev](https://sli.dev) presentations.

## What's Included

The Slidev skill equips Claude Code with understanding of:

- **Core Syntax** - Markdown syntax, slide separators, frontmatter, presenter notes
- **Animations** - Click animations, transitions, motion effects, v-click
- **Code Features** - Line highlighting, Monaco editor, code groups, magic-move
- **Diagrams** - Mermaid, PlantUML, LaTeX math rendering
- **Layouts** - Built-in layouts, slots, global layers, two-column layouts
- **Presenter Mode** - Recording, timer, remote access, presentation features
- **Exporting** - PDF, PPTX, PNG, static SPA hosting
- **Styling** - Scoped CSS, global layers, theme customization
- **Components** - Built-in Vue components, custom components

## Usage

Once this skill is loaded, Claude Code automatically applies Slidev knowledge when:

- Creating or editing presentations
- Adding slides with code examples and syntax highlighting
- Setting up animations and click-based interactions
- Configuring themes, layouts, and styling
- Exporting presentations to PDF or hosting as SPA
- Working with diagrams (Mermaid, LaTeX)
- Setting up presenter notes and recording features

### Example Prompts

```
Create a Slidev presentation about Statistik basics with code examples
```

```
Add a two-column slide with a flowchart on the left and explanation on the right
```

```
Set up click animations to reveal bullet points and code snippets one by one
```

```
Configure the presentation for PDF export with speaker notes and timing
```

## Common Commands

```bash
pnpm run dev      # Start dev server at http://localhost:3030
pnpm run build    # Build static SPA
pnpm run export   # Export to PDF (requires playwright-chromium)
```

## Key Reference Files

See `SKILL.md` for complete reference of:
- **Core References**: Syntax, animations, headmatter, frontmatter, CLI, components, layouts, exporting, hosting
- **Feature Reference**: Code highlighting, diagrams, math, styling, animation, syntax extensions, presenter features
- **Common Layouts**: cover, center, two-cols, image, quote, section, fact, intro/end

## Resources

- [Slidev Documentation](https://sli.dev)
- [Theme Gallery](https://sli.dev/resources/theme-gallery)
- [Showcases](https://sli.dev/resources/showcases)
- [GitHub Repository](https://github.com/slidevjs/slidev)
