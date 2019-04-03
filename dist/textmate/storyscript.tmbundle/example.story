# comment

###
comment block
###

a = 1 # inline comment

###
comment block with annotations
@argument description
###

import 'folder/folder' as blanket

# types
int
string
regexp # ...? Regex patterns are expressed as strings, aren't they?
function
null
bool
map
list
object


# keywords
true
false
and
null
when
return
returns
as
foreach
while
if
else  # also used as else if
unless
try
catch

# future keywords
static
let

###
Call an object
`command` is required
`key` are unique and can be indented
`:lorem` is short for `lorem:lorem` 
###
object command key:value :lorem

object command key:value
               :lorem

# can also be assigned
foobar = object command key:value

# Service can also lead with `/`
foo/bar command

###
Mutation
`variable command *args`
###
a = "hello"
res = a split by:'hello'

###
Functions
`function name *args [returns type]?`
if returns then must return
###
function foobar key:'value' returns int
    return 1

# can return nothing
function foobar
    a = 1

###
Event context
object->command->event
###
object command foo:bar as client
	when client hello pattern:/foo/g as foobar
		# ...
	when client world key:value as foobar
		# ...

# inline
when object command event as foobar
    # ...

# Loops
foreach array as output
	# ...

while a > 1
    # ...

# Conditions
if 0.1 >= 1 and true or null: 
	# ...

if (a and b) or 1 > 2:
	# ...

# Map
map = {"foo": "bar"}
map = {
	key: value
}

# List
list = [0, 1, 3]
list = [
	0,
	1,
	2, 3
]

# Regexp
a = "/pattern/gim"

# Accessing properties
a = foo.bar    # object property
a = foo['bar'] # map attribute
a = foo[0]     # list item

# Objects are immutable. `foo.bar = 1` not allowed.

# Long Strings
a = """
Hello world
"""

# String variables
a = "... {something} ..."
