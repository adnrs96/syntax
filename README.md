# Storyscript Syntax

<img width="796" alt="Screen Shot 2019-04-04 at 11 14 16" src="https://user-images.githubusercontent.com/2041757/55544177-d34e0900-56ca-11e9-9c90-56e008eaf107.png">

## Usage
This package is distributed with various Asyncy IDE extensions. It uses Iro, a DSL for generating cross-platform syntax highlighting.

## Development
1. Navigate to [Iro][0] in your prefered web browser.
1. Copy and paste the contents of [`storyscript.iro`](https://github.com/storyscript/syntax-highlighter/blob/master/storyscript.iro) into Iro, the left most pannel.
1. Copy the contents of [`syntax.story`](https://github.com/storyscript/syntax-highlighter/blob/master/syntax.story) to get a complete example of Storyscript syntax for testing.
1. Make changes to the Iro file.
1. Tap `cntr-s` to save and preview changes on the bottom right.

## Contributing
Thank you for your contributions. Once you have fixed an issue in our `storyscript.iro` please make a pull request for request.
Once a pull request is accepted we will go through the distribution steps below. This makes pull requests much easier to review and create. :heart:

## Distributing
Follow the directions in Development above. Once the `storyscript.iro` file is loaded into Iro, save it once more, then copy-paste the contents of each tab into their respective `./dist` locations in the repository.

The following files must be updated:
1. [TextMate][1]
1. [Ace][2]
1. [Atom][3]
1. [Pygments][4]
1. [Sublime][5]

[1]: https://github.com/storyscript/syntax/blob/master/dist/textmate/storyscript.tmbundle/Syntaxes/Storyscript.tmLanguage
[2]: https://github.com/storyscript/syntax/blob/master/dist/ace/storyscript.js
[3]: https://github.com/storyscript/syntax/blob/master/dist/atom/grammars/storyscript.cson
[4]: https://github.com/storyscript/syntax/blob/master/dist/pygments/storyscript/lexer.py
[5]: https://github.com/storyscript/syntax/blob/master/dist/sublime/Syntaxes/Storyscript.sublime-syntax

## Resources
- [TextMate Language Grammer](https://macromates.com/manual/en/language_grammars)
- [Regexp Online Matcher](https://regex101.com/)
