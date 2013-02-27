// Configs
S.cfga({
  "defaultToCurrentScreen" : true,
  "secondsBetweenRepeat" : 0.1,
  "checkDefaultsOnLoad" : true,
  "focusCheckWidthMax" : 3000,
  "windowHintsShowIcons" : true,
  "windowHintsIgnoreHiddenWindows" : false,
  "windowHintsDuration" : 5,
  "windowHintsSpread" : true
});

# Resize Bindings
#
# TODO - Find new bindings for these
#bind right:alt       resize +10% +0
#bind left:alt        resize -10% +0
#bind up:alt          resize +0   -10%
#bind down:alt        resize +0   +10%
#
bind right:ctrl;alt  resize -10% +0 bottom-right
bind left:ctrl;alt   resize +10% +0 bottom-right
bind up:ctrl;alt     resize +0   +10% bottom-right
bind down:ctrl;alt   resize +0   -10% bottom-right

# Push Bindings
# Move/resize the window to a side of the screen
bind right:ctrl;cmd  push right bar-resize:screenSizeX/2
bind left:ctrl;cmd   push left  bar-resize:screenSizeX/2
bind up:ctrl;cmd     push up    bar-resize:screenSizeY/2
bind down:ctrl;cmd   push down  bar-resize:screenSizeY/2

# Nudge Bindings
# Move the window without resizing
# TODO - Find new bindings for these
#bind right:shift;alt nudge +10% +0
#bind left:shift;alt  nudge -10% +0
#bind up:shift;alt    nudge +0   -10%
#bind down:shift;alt  nudge +0   +10%

# Throw Bindings
# Move a window to a monitor, and go all screen
# Very useful for moving Spotify over to another screen
bind 1:ctrl;alt         throw 0 resize
bind 2:ctrl;alt         throw 1 resize
bind 3:ctrl;alt         throw 2 resize
bind right:ctrl;alt;cmd throw right resize
bind left:ctrl;alt;cmd  throw left  resize
#bind down:ctrl;alt;cmd screenOriginX;screenOriginY screenSizeX;screenSizeY

# Focus Bindings
# TODO - Find new bindings for these
bind right:cmd;alt      focus right
bind left:cmd;alt       focus left
#bind up:cmd       focus up
#bind down:cmd     focus down
#bind up:cmd;alt   focus behind
#bind down:cmd;alt focus behind

# Window Hints
bind e:cmd hint ASDFGHJKLQWERTYUIOPCVBN

# Resize a window by drawing on a grid
bind g:alt;cmd grid
