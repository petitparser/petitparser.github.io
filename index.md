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

## Examples & Grammars

Explore interactive browser playgrounds and example grammars:

### Programming Languages

- **Dart**: Comprehensive grammar and AST visualizer for modern Dart supporting records, pattern matching, switch expressions, class modifiers, and enhanced enums ([demo](/examples/dart/dart.html), [source](https://github.com/petitparser/dart-petitparser-examples/blob/main/lib/src/dart/grammar.dart)).
- **Pascal**: Classic Pascal language grammar and AST visualizer implementing the 1978 Apple Pascal Standard ([demo](/examples/pascal/pascal.html), [source](https://github.com/petitparser/dart-petitparser-examples/blob/main/lib/pascal.dart)).
- **Smalltalk**: Complete Smalltalk-80 grammar and AST visualizer, ported from the original Helvetia implementation ([demo](/examples/smalltalk/smalltalk.html), [source](https://github.com/petitparser/dart-petitparser-examples/blob/main/lib/smalltalk.dart)).

### Interpreters & Engines

- **Lisp Interpreter**: Scheme-like evaluator supporting lexical scoping, lambda closures, macros, and native functions ([demo](/examples/lisp/lisp.html), [source](https://github.com/petitparser/dart-petitparser-examples/blob/main/lib/lisp.dart)).
- **Prolog Interpreter**: Logic programming inference engine featuring knowledge base parsing, SLD-resolution search, and unification ([demo](/examples/prolog/prolog.html), [source](https://github.com/petitparser/dart-petitparser-examples/blob/main/lib/prolog.dart)).
- **Regular Expressions**: Automata compiler that parses regex syntax, compiles to Non-deterministic Finite Automata (NFA), and steps through matching with an interactive visualizer ([demo](/examples/regexp/regexp.html), [source](https://github.com/petitparser/dart-petitparser-examples/blob/main/lib/regexp.dart)).

### Mathematics & Expressions

- **Math Evaluator**: Arithmetic expression evaluator built with `ExpressionBuilder`, handling operator precedence, associativity, functions, and variables ([demo](/examples/math/eval.html), [source](https://github.com/petitparser/dart-petitparser-examples/blob/main/lib/math.dart)).
- **Expression Plotter**: Parses mathematical expressions and plots function curves across coordinates on an HTML5 canvas ([demo](/examples/math/plot.html), [source](https://github.com/petitparser/dart-petitparser-examples/blob/main/lib/math.dart)).

### Formats & Protocols

- **URI Parser**: RFC-3986 parser deconstructing URIs into scheme, authority, credentials, host, port, path, query parameters, and fragments ([demo](/examples/uri/uri.html), [source](https://github.com/petitparser/dart-petitparser-examples/blob/main/lib/uri.dart)).
- **BibTeX**: Extracts bibliographic entries, citation keys, tags, and key-value fields from BibTeX database files ([demo](/examples/bibtex/bibtex.html), [source](https://github.com/petitparser/dart-petitparser-examples/blob/main/lib/bibtex.dart)).
- **Tabular Text (CSV / TSV)**: Configurable delimited text parser with support for custom separators, quotes, and escaped values ([demo](/examples/tabular/tabular.html), [source](https://github.com/petitparser/dart-petitparser-examples/blob/main/lib/tabular.dart)).
- **JSON**: RFC-8259 parser comparing PetitParser against native platform JSON parsing throughput and mapping ([demo](/examples/json/json.html), [source](https://github.com/petitparser/dart-petitparser-examples/blob/main/lib/json.dart)).
- **XML & XPath**: Parses XML event streams, produces traversable DOM syntax trees, formats XML, and executes XPath queries ([demo](/examples/xml/xml.html), [source](https://github.com/petitparser/dart-petitparser-examples/tree/main/lib)).

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
