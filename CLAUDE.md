# Development Guide for Claude Code

This guide defines working rules, code style, and communication preferences for Claude Code when working on projects.

## Project Documentation

### Always Check for Project Plans
- Look for project plan documents in the root directory
- Follow any documented architecture decisions
- Refer to existing documentation before making changes
- Ask if unclear about project direction

## Communication & Working Style

### General Working Rules
1. **Always explain first** - Describe what you're doing BEFORE making changes
2. **Wait for approval** - Get confirmation before executing changes
3. **Explain WHY** - Not just what you're changing, but why it's needed
4. **Show code snippets** - Display the exact code before applying it
5. **Work slower** - Take time to ensure accuracy and clarity

### Communication Approach
- Break down complex tasks into smaller steps
- Ask for confirmation at each step
- Explain technical decisions in simple terms
- Don't assume understanding - always clarify
- Respond at a pace that allows the human to follow along
- **Avoid abbreviations without explanation** - Always explain technical terms and acronyms on first use (e.g., "VPS (Virtual Private Server)" not just "VPS")

## Code Style & Standards

### Naming Conventions
- **camelCase only** for variables and function names
- Clear, descriptive names that convey purpose
- Follow existing patterns in the codebase

### File Organization
- **Add file header comments** - Concise explanation of file purpose
- **Inline comments** - Help with code reading, explain non-obvious logic
- **Keep files modular** - Extract to separate files when >300 lines
- **Single responsibility** - Each file has one clear purpose
- **Component organization** - Use dedicated folders for related components

### TypeScript Standards

**Type Safety (CRITICAL):**
- **NEVER use `any` type** - Always use specific types or `unknown` with type guards
- **NEVER use `as any` casting** - This defeats TypeScript's purpose and hides bugs
- **Always run `npx tsc --noEmit`** or `npm run typecheck` before offering solutions
- **Always prefer `type` over `interface`** for type definitions
- Use strict type checking - enable all strict compiler options

**Coding Principles:**
- **Always prefer functional programming approaches** - Immutability, pure functions
- **Always write pure functions without side effects** - Predictable, testable code
- **Always make minimal changes necessary** - Don't over-engineer solutions
- **ONLY make changes that are explicitly requested** - Don't refactor, optimize, or change implementation approaches unless asked. When removing a feature, only remove that specific feature - keep all other implementation details identical (same material types, same structure, same approach)
- Use type inference when TypeScript can infer types correctly
- Validate external data at boundaries (API responses, user input)

**Code Style:**
- Follow existing code patterns
- Keep code clean and readable
- Use Google ESLint configuration
- 2-space indentation
- 80-character line limit (when possible)
- Double quotes for strings

## Git Workflow (Solo Developer)

### Branch Management
1. **Never change main directly** - Always create feature branches
2. **Branch naming** - `feature/add-express-backend`, `fix/image-upload`, `docs/update-readme`
3. **Create branches immediately** - When starting work, create branch right away

### Commit Practices
4. **Commit often** - After each small working part (function complete, bug fixed, etc.)
5. **Clear commit messages** - "Add content API endpoints", "Remove Firebase dependencies"
6. **Test before merging** - Run `npm run build` and basic tests
7. **Merge when complete** - Checkout main, merge feature, delete feature branch

### Push Strategy
8. **Push less frequently** - When complete feature merged, or end of work session
9. **Keep main deployable** - Main should always be in working state
10. **Sync workflow** - Pull main before creating new branch (multi-machine work)

## Best Practices

### Testing & Validation
- Test changes before committing
- Run build commands to check for errors
- Test both happy path and error cases
- Verify changes don't break existing features

### Environment & Configuration
- Use `.env` files for configuration
- **NEVER commit secrets** to git
- Document required environment variables
- Provide .env.example template

### Documentation
- Update README when adding new features
- Document API endpoints when adding routes
- Comment complex business logic
- Keep documentation up to date
