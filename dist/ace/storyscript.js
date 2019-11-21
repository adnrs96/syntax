/*
* To try in Ace editor, copy and paste into the mode creator
* here : http://ace.c9.io/tool/mode_creator.html
*/

define(function(require, exports, module) {
   "use strict";
   var oop = require("../lib/oop");
   var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
   /* --------------------- START ----------------------------- */
   var StoryscriptHighlightRules = function() {
   this.$rules = {
   "start" : [
      {
         "token" : "comment",
         "regex" : "(###)",
         "push" : "multi_line_comment__1"
      },
      {
         "token" : "comment",
         "regex" : "(#.*)"
      },
      {
         "token" : "keyword.control.flow",
         "regex" : "((?!\\W)(break|as|to|catch|throw|returns?|continue|is|not|else|finally|if|then|try|when|while|foreach|and|or)(\\s|$))"
      },
      {
         "token" : "keyword.operator.assignment",
         "regex" : "(=)"
      },
      {
         "token" : "constant.character.punctuation",
         "regex" : "(\\()",
         "push" : "scope__1"
      },
      {
         "token" : "support.function",
         "regex" : "((?!\\W)(function)(?=\\s))",
         "push" : "function__1"
      },
      {
         "token" : "constant.numeric",
         "regex" : "\\b((0([box])[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?(e[+\\-]?[0-9]+)?))\\b"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\'{3})",
         "push" : "string_single_triple__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\"{3})",
         "push" : "string_double_triple__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\')",
         "push" : "string_single__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\")",
         "push" : "string_double__1"
      },
      {
         "token" : "punctuation.definition",
         "regex" : "(\\{)",
         "push" : "map__1"
      },
      {
         "token" : "support.type",
         "regex" : "((?!\\W)(int|float|string|boolean|Map|List|object|regex|any|time)((?=\\W)|$))"
      },
      {
         "token" : "support.constant",
         "regex" : "(null)"
      },
      {
         "token" : "punctuation.definition.array",
         "regex" : "(\\[)",
         "push" : "list__1"
      },
      {
         "token" : "source.regexp",
         "regex" : "(\\/(?![\\s=/*+{}?])(\\\\.|.)*?/[igmy]{0,4}(?![a-zA-Z0-9]))"
      },
      {
         "token" : "constant.other",
         "regex" : "((true|false)(?!(\\s*\\=|\\w)))"
      },
      {
         "token" : "comment",
         "regex" : "(#.*)"
      },
      {
         "token" : "variable.parameter",
         "regex" : "([\\w_]+(?=\\s*:))",
         "push" : "keyvalue__1"
      },
      {
         "token" : "variable.other",
         "regex" : "([\\w_]+[\\w_-]*/[\\w_]+[\\w_-]*)"
      },
      {
         "token" : "source.constant",
         "regex" : "((\\d+[smhdwqy])+)(?!(\\s*\\=|\\w))"
      },
      {
         "token" : "meta.identifier",
         "regex" : "([\\w_]+)"
      },
      {
         "token" : "meta.identifier",
         "regex" : "(\\.[\\w_]+)"
      },
      {
         "token" : "constant.character.punctuation",
         "regex" : "(\\()",
         "push" : "scope__1"
      },
      {
         "token" : "keyword.operator.comparison",
         "regex" : "(<\\=|>\\=|\\=\\=|<|>|\\!\\=)"
      },
      {
         "token" : "keyword.operator.arithmetic",
         "regex" : "(\\!|\\+|\\-|\\*|\\*\\*|/|//|%|<<|>>|&|\\||\\^|~|(?!^)@)"
      },
      {
         "token" : "invalid",
         "regex" : "([^\\s])"
      },
      {
         defaultToken : "text",
      }
   ], 
   "function__1" : [
      {
         "token" : "entity.name.function",
         "regex" : "((?!function\\s*)\\w+)",
         "next" : "pop"
      },
      {
         defaultToken : "support.function",
      }
   ], 
   "keytype__1" : [
      {
         "token" : "variable.parameter.function",
         "regex" : "((?!\\s*:\\s*(int|float|string|boolean|Map|List|object|regex|any|time)))",
         "next" : "pop"
      },
      {
         "token" : "support.type",
         "regex" : "((?!\\W)(int|float|string|boolean|Map|List|object|regex|any|time)((?=\\W)|$))"
      },
      {
         "token" : "constant.character.punctuation",
         "regex" : "(:)"
      },
      {
         defaultToken : "text",
      }
   ], 
   "keyvalue__1" : [
      {
         "token" : "constant.character.punctuation",
         "regex" : "(:)",
         "next" : "pop"
      },
      {
         defaultToken : "variable.parameter",
      }
   ], 
   "list__1" : [
      {
         "token" : "punctuation.definition.array",
         "regex" : "(\\])",
         "next" : "pop"
      },
      {
         "token" : "constant.character.punctuation",
         "regex" : "(\\,)"
      },
      {
         "token" : "constant.numeric",
         "regex" : "\\b((0([box])[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?(e[+\\-]?[0-9]+)?))\\b"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\'{3})",
         "push" : "string_single_triple__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\"{3})",
         "push" : "string_double_triple__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\')",
         "push" : "string_single__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\")",
         "push" : "string_double__1"
      },
      {
         "token" : "punctuation.definition",
         "regex" : "(\\{)",
         "push" : "map__1"
      },
      {
         "token" : "support.type",
         "regex" : "((?!\\W)(int|float|string|boolean|Map|List|object|regex|any|time)((?=\\W)|$))"
      },
      {
         "token" : "support.constant",
         "regex" : "(null)"
      },
      {
         "token" : "punctuation.definition.array",
         "regex" : "(\\[)",
         "push" : "list__1"
      },
      {
         "token" : "source.regexp",
         "regex" : "(\\/(?![\\s=/*+{}?])(\\\\.|.)*?/[igmy]{0,4}(?![a-zA-Z0-9]))"
      },
      {
         "token" : "constant.other",
         "regex" : "((true|false)(?!(\\s*\\=|\\w)))"
      },
      {
         "token" : "comment",
         "regex" : "(#.*)"
      },
      {
         "token" : "variable.parameter",
         "regex" : "([\\w_]+(?=\\s*:))",
         "push" : "keyvalue__1"
      },
      {
         "token" : "variable.other",
         "regex" : "([\\w_]+[\\w_-]*/[\\w_]+[\\w_-]*)"
      },
      {
         "token" : "source.constant",
         "regex" : "((\\d+[smhdwqy])+)(?!(\\s*\\=|\\w))"
      },
      {
         "token" : "meta.identifier",
         "regex" : "([\\w_]+)"
      },
      {
         "token" : "meta.identifier",
         "regex" : "(\\.[\\w_]+)"
      },
      {
         "token" : "constant.character.punctuation",
         "regex" : "(\\()",
         "push" : "scope__1"
      },
      {
         "token" : "keyword.operator.comparison",
         "regex" : "(<\\=|>\\=|\\=\\=|<|>|\\!\\=)"
      },
      {
         "token" : "keyword.operator.arithmetic",
         "regex" : "(\\!|\\+|\\-|\\*|\\*\\*|/|//|%|<<|>>|&|\\||\\^|~|(?!^)@)"
      },
      {
         "token" : "invalid",
         "regex" : "([^\\s])"
      },
      {
         defaultToken : "text",
      }
   ], 
   "map__1" : [
      {
         "token" : "punctuation.definition",
         "regex" : "(\\})",
         "next" : "pop"
      },
      {
         "token" : "constant.character.punctuation",
         "regex" : "(\\,)"
      },
      {
         "token" : "constant.character.punctuation",
         "regex" : "(\\:)"
      },
      {
         "token" : "constant.numeric",
         "regex" : "\\b((0([box])[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?(e[+\\-]?[0-9]+)?))\\b"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\'{3})",
         "push" : "string_single_triple__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\"{3})",
         "push" : "string_double_triple__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\')",
         "push" : "string_single__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\")",
         "push" : "string_double__1"
      },
      {
         "token" : "punctuation.definition",
         "regex" : "(\\{)",
         "push" : "map__1"
      },
      {
         "token" : "support.type",
         "regex" : "((?!\\W)(int|float|string|boolean|Map|List|object|regex|any|time)((?=\\W)|$))"
      },
      {
         "token" : "support.constant",
         "regex" : "(null)"
      },
      {
         "token" : "punctuation.definition.array",
         "regex" : "(\\[)",
         "push" : "list__1"
      },
      {
         "token" : "source.regexp",
         "regex" : "(\\/(?![\\s=/*+{}?])(\\\\.|.)*?/[igmy]{0,4}(?![a-zA-Z0-9]))"
      },
      {
         "token" : "constant.other",
         "regex" : "((true|false)(?!(\\s*\\=|\\w)))"
      },
      {
         "token" : "comment",
         "regex" : "(#.*)"
      },
      {
         "token" : "variable.parameter",
         "regex" : "([\\w_]+(?=\\s*:))",
         "push" : "keyvalue__1"
      },
      {
         "token" : "variable.other",
         "regex" : "([\\w_]+[\\w_-]*/[\\w_]+[\\w_-]*)"
      },
      {
         "token" : "source.constant",
         "regex" : "((\\d+[smhdwqy])+)(?!(\\s*\\=|\\w))"
      },
      {
         "token" : "meta.identifier",
         "regex" : "([\\w_]+)"
      },
      {
         "token" : "meta.identifier",
         "regex" : "(\\.[\\w_]+)"
      },
      {
         "token" : "constant.character.punctuation",
         "regex" : "(\\()",
         "push" : "scope__1"
      },
      {
         "token" : "keyword.operator.comparison",
         "regex" : "(<\\=|>\\=|\\=\\=|<|>|\\!\\=)"
      },
      {
         "token" : "keyword.operator.arithmetic",
         "regex" : "(\\!|\\+|\\-|\\*|\\*\\*|/|//|%|<<|>>|&|\\||\\^|~|(?!^)@)"
      },
      {
         "token" : "invalid",
         "regex" : "([^\\s])"
      },
      {
         defaultToken : "text",
      }
   ], 
   "multi_line_comment__1" : [
      {
         "token" : "comment",
         "regex" : "(###[^\\n]*)",
         "next" : "pop"
      },
      {
         defaultToken : "comment",
      }
   ], 
   "placeholder__1" : [
      {
         "token" : "string.punctuation",
         "regex" : "(\\s*\\})",
         "next" : "pop"
      },
      {
         "token" : "constant.numeric",
         "regex" : "\\b((0([box])[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?(e[+\\-]?[0-9]+)?))\\b"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\'{3})",
         "push" : "string_single_triple__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\"{3})",
         "push" : "string_double_triple__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\')",
         "push" : "string_single__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\")",
         "push" : "string_double__1"
      },
      {
         "token" : "punctuation.definition",
         "regex" : "(\\{)",
         "push" : "map__1"
      },
      {
         "token" : "support.type",
         "regex" : "((?!\\W)(int|float|string|boolean|Map|List|object|regex|any|time)((?=\\W)|$))"
      },
      {
         "token" : "support.constant",
         "regex" : "(null)"
      },
      {
         "token" : "punctuation.definition.array",
         "regex" : "(\\[)",
         "push" : "list__1"
      },
      {
         "token" : "source.regexp",
         "regex" : "(\\/(?![\\s=/*+{}?])(\\\\.|.)*?/[igmy]{0,4}(?![a-zA-Z0-9]))"
      },
      {
         "token" : "constant.other",
         "regex" : "((true|false)(?!(\\s*\\=|\\w)))"
      },
      {
         "token" : "comment",
         "regex" : "(#.*)"
      },
      {
         "token" : "variable.parameter",
         "regex" : "([\\w_]+(?=\\s*:))",
         "push" : "keyvalue__1"
      },
      {
         "token" : "variable.other",
         "regex" : "([\\w_]+[\\w_-]*/[\\w_]+[\\w_-]*)"
      },
      {
         "token" : "source.constant",
         "regex" : "((\\d+[smhdwqy])+)(?!(\\s*\\=|\\w))"
      },
      {
         "token" : "meta.identifier",
         "regex" : "([\\w_]+)"
      },
      {
         "token" : "meta.identifier",
         "regex" : "(\\.[\\w_]+)"
      },
      {
         "token" : "constant.character.punctuation",
         "regex" : "(\\()",
         "push" : "scope__1"
      },
      {
         "token" : "keyword.operator.comparison",
         "regex" : "(<\\=|>\\=|\\=\\=|<|>|\\!\\=)"
      },
      {
         "token" : "keyword.operator.arithmetic",
         "regex" : "(\\!|\\+|\\-|\\*|\\*\\*|/|//|%|<<|>>|&|\\||\\^|~|(?!^)@)"
      },
      {
         "token" : "invalid",
         "regex" : "([^\\s])"
      },
      {
         defaultToken : "text",
      }
   ], 
   "scope__1" : [
      {
         "token" : "constant.character.punctuation",
         "regex" : "(\\))",
         "next" : "pop"
      },
      {
         "token" : "constant.numeric",
         "regex" : "\\b((0([box])[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?(e[+\\-]?[0-9]+)?))\\b"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\'{3})",
         "push" : "string_single_triple__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\"{3})",
         "push" : "string_double_triple__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\')",
         "push" : "string_single__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\")",
         "push" : "string_double__1"
      },
      {
         "token" : "punctuation.definition",
         "regex" : "(\\{)",
         "push" : "map__1"
      },
      {
         "token" : "support.type",
         "regex" : "((?!\\W)(int|float|string|boolean|Map|List|object|regex|any|time)((?=\\W)|$))"
      },
      {
         "token" : "support.constant",
         "regex" : "(null)"
      },
      {
         "token" : "punctuation.definition.array",
         "regex" : "(\\[)",
         "push" : "list__1"
      },
      {
         "token" : "source.regexp",
         "regex" : "(\\/(?![\\s=/*+{}?])(\\\\.|.)*?/[igmy]{0,4}(?![a-zA-Z0-9]))"
      },
      {
         "token" : "constant.other",
         "regex" : "((true|false)(?!(\\s*\\=|\\w)))"
      },
      {
         "token" : "comment",
         "regex" : "(#.*)"
      },
      {
         "token" : "variable.parameter",
         "regex" : "([\\w_]+(?=\\s*:))",
         "push" : "keyvalue__1"
      },
      {
         "token" : "variable.other",
         "regex" : "([\\w_]+[\\w_-]*/[\\w_]+[\\w_-]*)"
      },
      {
         "token" : "source.constant",
         "regex" : "((\\d+[smhdwqy])+)(?!(\\s*\\=|\\w))"
      },
      {
         "token" : "meta.identifier",
         "regex" : "([\\w_]+)"
      },
      {
         "token" : "meta.identifier",
         "regex" : "(\\.[\\w_]+)"
      },
      {
         "token" : "constant.character.punctuation",
         "regex" : "(\\()",
         "push" : "scope__1"
      },
      {
         "token" : "keyword.operator.comparison",
         "regex" : "(<\\=|>\\=|\\=\\=|<|>|\\!\\=)"
      },
      {
         "token" : "keyword.operator.arithmetic",
         "regex" : "(\\!|\\+|\\-|\\*|\\*\\*|/|//|%|<<|>>|&|\\||\\^|~|(?!^)@)"
      },
      {
         "token" : "invalid",
         "regex" : "([^\\s])"
      },
      {
         defaultToken : "text",
      }
   ], 
   "string_double__1" : [
      {
         "token" : "storage.type.string",
         "regex" : "(\\\")",
         "next" : "pop"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\\{)"
      },
      {
         "token" : "string.punctuation",
         "regex" : "(\\{\\s*)",
         "push" : "placeholder__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(.)"
      },
      {
         defaultToken : "text",
      }
   ], 
   "string_double_triple__1" : [
      {
         "token" : "storage.type.string",
         "regex" : "(\\\"{3})",
         "next" : "pop"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\\{)"
      },
      {
         "token" : "string.punctuation",
         "regex" : "(\\{\\s*)",
         "push" : "placeholder__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(.)"
      },
      {
         defaultToken : "text",
      }
   ], 
   "string_single__1" : [
      {
         "token" : "storage.type.string",
         "regex" : "(\\')",
         "next" : "pop"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\\{)"
      },
      {
         "token" : "string.punctuation",
         "regex" : "(\\{\\s*)",
         "push" : "placeholder__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(.)"
      },
      {
         defaultToken : "text",
      }
   ], 
   "string_single_triple__1" : [
      {
         "token" : "storage.type.string",
         "regex" : "(\\'{3})",
         "next" : "pop"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(\\\\{)"
      },
      {
         "token" : "string.punctuation",
         "regex" : "(\\{\\s*)",
         "push" : "placeholder__1"
      },
      {
         "token" : "storage.type.string",
         "regex" : "(.)"
      },
      {
         defaultToken : "text",
      }
   ]
   };
   this.normalizeRules();
   };
   /* ------------------------ END ------------------------------ */
   oop.inherits(StoryscriptHighlightRules, TextHighlightRules);
   exports.StoryscriptHighlightRules = StoryscriptHighlightRules;
   });
   