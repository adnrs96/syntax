###
comment block
###

# comment line

###
comment block
### with extra stuff

# Varibles
foo = bar
foo = foo.bar['a'][0]

# Services
service action
service action key:value
y = service action key : value
                   key : value
team/service action
team/service action key:value
team/service-slug1 action key : value key:value

# Lists
[(owner/repo action key:value), 1, 'a', true] # comment
[owner/repo action key:value]

# Maps
{
    "a": 1 == 2, # this is not commented out :(
    'c': 1, # domm
    'd': [123] #com
    "b": owner/repo action key:value # comment
}

# not valid
1d = x1d
ttrue = ttrue
astring = astring

# Valid
1d true (true)
x = 1d
service action a:1d1w b:true c:string

{"a": (owner/repo action key:value)}

# Operations
if a == thing
else if a == string
foreach a as y
while a

# Event Streaming
service action as client
  when client event as out
    # ...
  when client event as out
    # ...

service action
  when event as out
    # ....

when service action event
    # ....

# Regexp
[/a/, /a/i, /a/ig]

# Strings
'string'
'st{r}ing'
'st{ r }ing'
'st{  do this key:value  }in{foobar}g'

"""
Long {strings} \{ok}
\{escaped placeholder}
 \{hello}
"""

'''
Long {strings}
'''

# Constants
[true, false, null]
[1, 1.2, -1]

# Types
int string function null boolean map list object

# Keyword
and or
when return returns as foreach
while if else try catch finally
break continue

# Puncuation
((a) .y['1'])[1]
((a).y['1'])[1]

# Functions
function abc key:string key : int returns int 

function abc key:string  # comment
			 key : int
			 returns int 
	do this
	return 5

function abc key:string returns int 

function abc key:string

function abc
	return

function abc
