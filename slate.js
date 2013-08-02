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

// Monitors
//var monLaptop = "1680x1050";
var monDell = "1920x1080";

//
// Operations
//

// Make the window full screen on the 2nd Monitor
var dellFull = S.op("move", {
        "screen" : monDell,
        "x" : "screenOriginX",
        "y" : "screenOriginY",
        "width" : "screenSizeX",
        "height" : "screenSizeY"
});
S.bnda({ "pad5:ctrl" : dellFull, "5:ctrl" : dellFull })

// Put the window in the middle of the screen and make it full height,
// and a minimal width.
//
// This is primarily used for Vim
var dellMid = dellFull.dup({ "x" : "screenSizeX/4", "width" : "screenSizeX/2" });
S.bnda({ "pad2:ctrl" : dellMid, "2:ctrl" : dellMid })

// Put the window in the middle of the screen and make it full height,
// and medium width.
//
// This is primarily used for iTerm
var dellMidWide = dellFull.dup({ "x" : "screenSizeX/6", "width" : "screenSizeX/1.5" });
S.bnda({ "pad3:ctrl" : dellMidWide, "3:ctrl" : dellMidWide })

// Put the window at the far left and make it 50% wide
var dellLeft = dellFull.dup({ "width" : "screenSizeX/2" });
S.bnda({ "pad4:ctrl" : dellLeft, "4:ctrl" : dellLeft })
var dellRight = dellLeft.dup({ "x" : "screenSizeX/2" });
S.bnda({ "pad6:ctrl" : dellRight, "6:ctrl" : dellRight })

// Throw windows onto another screen, making them full sized
var throwLeftFull = S.op("throw", { "screen" : "left", "width" : "screenSizeX", "height" : "screenSizeY" })
S.bnda({ "left:ctrl;alt;cmd" : throwLeftFull })
var throwRightFull = S.op("throw", { "screen" : "right", "width" : "screenSizeX", "height" : "screenSizeY" })
S.bnda({ "right:ctrl;alt;cmd" : throwRightFull })

// Open the grid window sizer
S.bnda({ "g:cmd;alt" : S.op("grid") })

S.bnda({
  // Layout Bindings
  //"padEnter:ctrl" : universalLayout,
  //"space:ctrl" : universalLayout,

  // Basic Location Bindings
  //"pad1:ctrl" : dellBottomLeft,
  //"1:ctrl" : dellBottomLeft,
  //"pad7:ctrl" : dellTopish,
  //"7:ctrl" : dellTopish,
  //"pad9:ctrl" : dellBottomish,
  //"9:ctrl" : dellBottomish,

  //// Resize Bindings
  //// NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  //"right:ctrl" : S.op("resize", { "width" : "+10%", "height" : "+0" }),
  //"left:ctrl" : S.op("resize", { "width" : "-10%", "height" : "+0" }),
  //"up:ctrl" : S.op("resize", { "width" : "+0", "height" : "-10%" }),
  //"down:ctrl" : S.op("resize", { "width" : "+0", "height" : "+10%" }),
  //// TODO - Find new bindings for these
  ////"right:alt" : S.op("resize", { "width" : "-10%", "height" : "+0", "anchor" : "bottom-right" }),
  ////"left:alt" : S.op("resize", { "width" : "+10%", "height" : "+0", "anchor" : "bottom-right" }),
  ////"up:alt" : S.op("resize", { "width" : "+0", "height" : "+10%", "anchor" : "bottom-right" }),
  ////"down:alt" : S.op("resize", { "width" : "+0", "height" : "-10%", "anchor" : "bottom-right" }),

  //// Push Bindings
  //// NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  //"right:ctrl;shift" : S.op("push", { "direction" : "right", "style" : "bar-resize:screenSizeX/3" }),
  //"left:ctrl;shift" : S.op("push", { "direction" : "left", "style" : "bar-resize:screenSizeX/3" }),
  //"up:ctrl;shift" : S.op("push", { "direction" : "up", "style" : "bar-resize:screenSizeY/2" }),
  //"down:ctrl;shift" : S.op("push", { "direction" : "down", "style" : "bar-resize:screenSizeY/2" }),

  //// Nudge Bindings
  //// NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  //"right:ctrl;alt" : S.op("nudge", { "x" : "+10%", "y" : "+0" }),
  //"left:ctrl;alt" : S.op("nudge", { "x" : "-10%", "y" : "+0" }),
  //"up:ctrl;alt" : S.op("nudge", { "x" : "+0", "y" : "-10%" }),
  //"down:ctrl;alt" : S.op("nudge", { "x" : "+0", "y" : "+10%" }),


  //// Focus Bindings
  //// NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
  //"right:cmd;alt" : S.op("focus", { "direction" : "right" }),
  //"left:cmd;alt" : S.op("focus", { "direction" : "left" }),
  ////"up:cmd;alt" : S.op("focus", { "direction" : "up" }),
  ////"down:cmd;alt" : S.op("focus", { "direction" : "down" }),
  ////"up:cmd;alt" : S.op("focus", { "direction" : "behind" }),
  ////"down:cmd;alt" : S.op("focus", { "direction" : "behind" }),

  //// Window Hints
  //"esc:cmd" : S.op("hint"),

  //// Switch currently doesn't work well so I'm commenting it out until I fix it.
  ////"tab:cmd" : S.op("switch"),

});
//var dellTop = dellFull.dup({ "height" : "screenSizeY/2" });
//var dellIsh = dellFull.dup({
        //"width" : "screenSizeX/1.2",
        //"height" : "screenSizeY/2.3",
        //"x" : "screenOriginX + screenSizeX/14"
    //});
//var dellTopish = dellIsh.dup({
        //"y" : "screenOriginY + screenSizeY/20"
    //});
//var dellBottomish = dellIsh.dup({
        //"y" : "screenOriginY + ((screenSizeY/22) * 11)"
    //});
//var dellTopLeft = dellTopish.dup({ "width" : "screenSizeX/1.2" });
//var dellTopRight = dellTopLeft.dup({ "x" : "screenOriginX+screenSizeX/2" });
//var dellBottomMid = dellBottomLeft.dup({ "x" : "screenOriginX+screenSizeX/3" });
//var dellBottomRight = dellBottomLeft.dup({ "x" : "screenOriginX+2*screenSizeX/3" });

//// common layout hashes
//var dellTopHash  = {
  //"operations" : [dellTop],
  //"repeat" : true
//};
//var mvimHash = {
  //"operations" : [dellTopLeft, dellTopRight],
  //"repeat" : true
//};
//var genBrowserHash = function(regex) {
  //return {
    //"operations" : [function(windowObject) {
      //var title = windowObject.title();
      //if (title !== undefined && title.match(regex)) {
        //windowObject.doOperation(hpRight);
      //} else {
        //windowObject.doOperation(lapMain);
      //}
    //}],
    //"ignore-fail" : true,
    //"repeat" : true
  //};
//}

// Defaults
//S.def([monDell, monLaptop], twoMonitorLayout);
//S.def([monLaptop], oneMonitorLayout);

// Layout Operations
//var twoMonitor = S.op("layout", { "name" : twoMonitorLayout });
//var oneMonitor = S.op("layout", { "name" : oneMonitorLayout });
//var universalLayout = function() {
  //// Should probably make sure the resolutions match but w/e
  //if (S.screenCount() === 2) {
    //twoMonitor.run();
  //} else if (S.screenCount() === 1) {
    //oneMonitor.run();
  //}
//};


// Test Cases
S.src(".slate.test", true);
S.src(".slate.test.js", true);

// Log that we're done configuring
S.log("[SLATE] -------------- Finished Loading Config --------------");


