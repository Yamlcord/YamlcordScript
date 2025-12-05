# Yamlcord Script Milestone: Scripting Language Core

## Goals
Develop the core scripting language for Yamlcord, including lexer, parser and AST.

---

## 🤝 Contributing

Want to help improve the project?  
Please read our full contribution guide here:

👉 [CONTRIBUTING.md](CONTRIBUTING.md)

---

## Tasks

### 1. Lexer
- [x] Implement character-based lexer
- [x] Support single-character tokens (brackets, operators, equals)
- [ ] Support multi-character tokens (>=, <=, ==, identifiers, numbers)
- [ ] Handle strings and escape characters
- [ ] Support whitespace and comments

### 2. Parser
- [ ] Build AST from token stream
- [ ] Implement nodes for:
  - [ ] Identifiers
  - [ ] Literals (string, number, boolean)
  - [ ] Binary expressions
  - [ ] Conditional statements
  - [ ] Assignments
- [ ] Handle syntax errors gracefully with meaningful messages

### 3. AST & Evaluation
- [ ] Define AST node types and interfaces
- [ ] Implement evaluator / interpreter for the AST
- [ ] Support conditional expressions (`if`, `else`)
- [ ] Support simple expressions (`age > 18`, `state == 'success'`)

### 4. Utilities
- [ ] Implement helper to safely evaluate expressions
- [ ] Implement error handling and logging
- [ ] Implement optional caching of parsed scripts

### 5. Testing
- [ ] Unit tests for lexer
- [ ] Unit tests for parser
- [ ] Unit tests for evaluator / conditional rendering
- [ ] Edge case tests (empty scripts, invalid syntax, nested conditionals)

### 6. Documentation
- [ ] Markdown docs for scripting language syntax
- [ ] Examples of conditionals, assignments, and expressions
- [ ] Guidelines for extending the language with new nodes
