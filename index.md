---
layout: default
---

# PetitParser

PetitParser makes writing parsers fast, enjoyable, and fully type-safe.

Instead of configuring external code generators or writing cryptic regular expressions, PetitParser models grammars directly as composable objects in your programming language. Assemble small, specialized parsers as modular building blocks to model everything from configuration formats to full programming languages.

- **Composable**: Combine basic parsers using intuitive operators (`&`, `|`, `.optional()`, `.star()`) without separate grammar files.
- **Type-Safe**: Transform text directly into strongly typed models, syntax trees, records, and pattern-matched objects.
- **High Performance**: Optimized character predicates and dedicated fast-path parsing keep execution fast and memory-efficient.
- **Debuggable**: Step through parsers with your native IDE debugger, inspect tokens, and visualize execution trees with built-in tracing.

## Quick Look

Building a parser with PetitParser is straightforward and readable. Here is an example in Dart that recognizes key-value assignment pairs and maps them into a typed record:

```dart
import 'package:petitparser/petitparser.dart';

void main() {
  final key = letter().plus().flatten();
  final value = digit().plus().flatten().map(int.parse);
  final entry = key.trim().skip(after: char('=')).then(value.trim());

  final result = entry.parse('port = 8080');
  print(result.value); // ('port', 8080)
}
```

## Interactive Examples

Experience PetitParser live in your browser. Explore interactive grammar visualizers, programming languages, interpreters, and format parsers:

<div class="callout-box">
  <p>Run live parsers, inspect syntax trees, and experiment with complete grammars: Dart, Pascal, Smalltalk, Lisp, Prolog, Regular Expressions, JSON, XML, BibTeX, and more.</p>
  <a href="https://petitparser.github.io/examples/index.html" class="btn-cta">Explore Interactive Examples &rarr;</a>
</div>

## Supported Languages

PetitParser is available in many programming languages:

- [C#](https://github.com/RichoM/dotnet.PetitParser)
- [Clojure](https://github.com/RichoM/clj-petitparser)
- [Dart](https://github.com/petitparser/dart-petitparser)
- [Java](https://github.com/petitparser/java-petitparser)
- [Kotlin](https://github.com/petitparser/kotlin-petitparser)
- [PHP](https://github.com/mindplay-dk/petitparserphp)
- [Python](https://github.com/profMagija/py-petitparser)
- [Rust](https://github.com/toddobryan/rust-petitparser)
- [Smalltalk](https://www.lukas-renggli.ch/smalltalk/helvetia/petitparser)
- [Swift](https://github.com/philipparndt/swift-petitparser)
- [TypeScript](https://github.com/mindplay-dk/petitparser-ts)

## Background & Theory

PetitParser combines foundational concepts from computer science into an approachable object-oriented architecture:

- **[Scannerless Parsing](https://en.wikipedia.org/wiki/Scannerless_parsing)**: Lexing and parsing happen in a single unified phase, eliminating the impedance mismatch between lexer tokens and parser grammar rules.
- **[Parser Combinators](https://en.wikipedia.org/wiki/Parser_combinator)**: Grammars are built by composing primitive parser functions into complex parsers using higher-order combinators.
- **[Parsing Expression Grammars (PEG)](https://en.wikipedia.org/wiki/Parsing_expression_grammar)**: Unambiguous prioritized choices eliminate ambiguity and simplify grammar development.
- **[Packrat Parsing](https://en.wikipedia.org/wiki/Packrat_parser)**: Efficient memoization ensures linear parse time when needed.
- **Dynamic Reconfiguration**: Grammars and parsers are first-class runtime objects that can be dynamically inspected, transformed, extended, or rewritten.

PetitParser was originally created by **[Lukas Renggli](https://www.lukas-renggli.ch/)** as part of his research on the [Helvetia Language Workbench](https://www.lukas-renggli.ch/smalltalk/helvetia) at the University of Bern.

## Resources

- [PetitParser Organization on GitHub](https://github.com/petitparser)
- [SCG Research: PetitParser](https://scg.unibe.ch/research/helvetia/petitparser)
- [Helvetia Language Workbench](https://www.lukas-renggli.ch/smalltalk/helvetia)
