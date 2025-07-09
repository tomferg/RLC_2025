/****************** 
 * Rlc2_Exp3 Test *
 ******************/

import { core, data, sound, util, visual } from './lib/psychojs-2022.1.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'RLC2_Exp3';  // from the Builder filename that created this script
let expInfo = {'participantID': 'UofA'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 0.7412), (- 0.7412), (- 0.7412)]),
  units: 'norm',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(blocksRoutineBegin());
flowScheduler.add(blocksRoutineEachFrame());
flowScheduler.add(blocksRoutineEnd());
const instrControllerLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instrControllerLoopBegin(instrControllerLoopScheduler));
flowScheduler.add(instrControllerLoopScheduler);
flowScheduler.add(instrControllerLoopEnd);
flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
flowScheduler.add(blankRoutineBegin());
flowScheduler.add(blankRoutineEachFrame());
flowScheduler.add(blankRoutineEnd());
flowScheduler.add(demographicsQuestRoutineBegin());
flowScheduler.add(demographicsQuestRoutineEachFrame());
flowScheduler.add(demographicsQuestRoutineEnd());
flowScheduler.add(Space_StartRoutineBegin());
flowScheduler.add(Space_StartRoutineEachFrame());
flowScheduler.add(Space_StartRoutineEnd());
const icontrolLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(icontrolLoopBegin(icontrolLoopScheduler));
flowScheduler.add(icontrolLoopScheduler);
flowScheduler.add(icontrolLoopEnd);
flowScheduler.add(pracBlockInstRoutineBegin());
flowScheduler.add(pracBlockInstRoutineEachFrame());
flowScheduler.add(pracBlockInstRoutineEnd());
flowScheduler.add(countdownRoutineBegin());
flowScheduler.add(countdownRoutineEachFrame());
flowScheduler.add(countdownRoutineEnd());
const pracTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(pracTrialsLoopBegin(pracTrialsLoopScheduler));
flowScheduler.add(pracTrialsLoopScheduler);
flowScheduler.add(pracTrialsLoopEnd);
flowScheduler.add(pracBlockCompleteRoutineBegin());
flowScheduler.add(pracBlockCompleteRoutineEachFrame());
flowScheduler.add(pracBlockCompleteRoutineEnd());
flowScheduler.add(rewardSetUpRoutineBegin());
flowScheduler.add(rewardSetUpRoutineEachFrame());
flowScheduler.add(rewardSetUpRoutineEnd());
const condTypeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(condTypeLoopBegin(condTypeLoopScheduler));
flowScheduler.add(condTypeLoopScheduler);
flowScheduler.add(condTypeLoopEnd);
flowScheduler.add(taskEnd_1RoutineBegin());
flowScheduler.add(taskEnd_1RoutineEachFrame());
flowScheduler.add(taskEnd_1RoutineEnd());
flowScheduler.add(blankRoutineBegin());
flowScheduler.add(blankRoutineEachFrame());
flowScheduler.add(blankRoutineEnd());
flowScheduler.add(questNextRoutineBegin());
flowScheduler.add(questNextRoutineEachFrame());
flowScheduler.add(questNextRoutineEnd());
flowScheduler.add(taskEnd_2RoutineBegin());
flowScheduler.add(taskEnd_2RoutineEachFrame());
flowScheduler.add(taskEnd_2RoutineEnd());
flowScheduler.add(blankRoutineBegin());
flowScheduler.add(blankRoutineEachFrame());
flowScheduler.add(blankRoutineEnd());
flowScheduler.add(questNextRoutineBegin());
flowScheduler.add(questNextRoutineEachFrame());
flowScheduler.add(questNextRoutineEnd());
flowScheduler.add(curiosityQuestRoutineBegin());
flowScheduler.add(curiosityQuestRoutineEachFrame());
flowScheduler.add(curiosityQuestRoutineEnd());
flowScheduler.add(blankRoutineBegin());
flowScheduler.add(blankRoutineEachFrame());
flowScheduler.add(blankRoutineEnd());
flowScheduler.add(questNextRoutineBegin());
flowScheduler.add(questNextRoutineEachFrame());
flowScheduler.add(questNextRoutineEnd());
flowScheduler.add(cogQuestRoutineBegin());
flowScheduler.add(cogQuestRoutineEachFrame());
flowScheduler.add(cogQuestRoutineEnd());
flowScheduler.add(blankRoutineBegin());
flowScheduler.add(blankRoutineEachFrame());
flowScheduler.add(blankRoutineEnd());
flowScheduler.add(questNextRoutineBegin());
flowScheduler.add(questNextRoutineEachFrame());
flowScheduler.add(questNextRoutineEnd());
flowScheduler.add(riskQuestRoutineBegin());
flowScheduler.add(riskQuestRoutineEachFrame());
flowScheduler.add(riskQuestRoutineEnd());
flowScheduler.add(blankRoutineBegin());
flowScheduler.add(blankRoutineEachFrame());
flowScheduler.add(blankRoutineEnd());
flowScheduler.add(questNextRoutineBegin());
flowScheduler.add(questNextRoutineEachFrame());
flowScheduler.add(questNextRoutineEnd());
const debriefControllerLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(debriefControllerLoopBegin(debriefControllerLoopScheduler));
flowScheduler.add(debriefControllerLoopScheduler);
flowScheduler.add(debriefControllerLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'conditions/rewardSb12_Exp1.csv', 'path': 'conditions/rewardSb12_Exp1.csv'},
    {'name': 'slides/instructions/2.png', 'path': 'slides/instructions/2.png'},
    {'name': 'slides/instructions/7.png', 'path': 'slides/instructions/7.png'},
    {'name': 'slides/debrief/2.png', 'path': 'slides/debrief/2.png'},
    {'name': 'conditions/rewardNSb8_Exp1.csv', 'path': 'conditions/rewardNSb8_Exp1.csv'},
    {'name': 'conditions/rewardNSb6_Exp1.csv', 'path': 'conditions/rewardNSb6_Exp1.csv'},
    {'name': 'conditions/rewardNSb2_Exp1.csv', 'path': 'conditions/rewardNSb2_Exp1.csv'},
    {'name': 'conditions/rewardVb7.csv', 'path': 'conditions/rewardVb7.csv'},
    {'name': 'conditions/rewardVb8.csv', 'path': 'conditions/rewardVb8.csv'},
    {'name': 'conditions/rewardNSb1_Exp1.csv', 'path': 'conditions/rewardNSb1_Exp1.csv'},
    {'name': 'conditions/vol_conds_win.csv', 'path': 'conditions/vol_conds_win.csv'},
    {'name': 'slides/instructions/i2_2.png', 'path': 'slides/instructions/i2_2.png'},
    {'name': 'conditions/rewardNSb4_Exp1.csv', 'path': 'conditions/rewardNSb4_Exp1.csv'},
    {'name': 'slides/instructions/5.png', 'path': 'slides/instructions/5.png'},
    {'name': 'conditions/rewardSb7_Exp1.csv', 'path': 'conditions/rewardSb7_Exp1.csv'},
    {'name': 'conditions/rewardVb4.csv', 'path': 'conditions/rewardVb4.csv'},
    {'name': 'conditions/rewardVb12.csv', 'path': 'conditions/rewardVb12.csv'},
    {'name': 'conditions/rewardVb11.csv', 'path': 'conditions/rewardVb11.csv'},
    {'name': 'slides/instructions/4.png', 'path': 'slides/instructions/4.png'},
    {'name': 'conditions/rewardSb11_Exp1.csv', 'path': 'conditions/rewardSb11_Exp1.csv'},
    {'name': 'slides/instructions/consentCheck.png', 'path': 'slides/instructions/consentCheck.png'},
    {'name': 'conditions/stat_conds_win.csv', 'path': 'conditions/stat_conds_win.csv'},
    {'name': 'instr5.xlsx', 'path': 'instr5.xlsx'},
    {'name': 'slides/instructions/3.png', 'path': 'slides/instructions/3.png'},
    {'name': 'conditions/rewardVb2.csv', 'path': 'conditions/rewardVb2.csv'},
    {'name': 'conditions/rewardSb2_Exp1.csv', 'path': 'conditions/rewardSb2_Exp1.csv'},
    {'name': 'slides/instructions/i1_1.png', 'path': 'slides/instructions/i1_1.png'},
    {'name': 'conditions/rewardSb3_Exp1.csv', 'path': 'conditions/rewardSb3_Exp1.csv'},
    {'name': 'conditions/rewardSb8_Exp1.csv', 'path': 'conditions/rewardSb8_Exp1.csv'},
    {'name': 'slides/instructions/i1_3.png', 'path': 'slides/instructions/i1_3.png'},
    {'name': 'slides/instructions/1.png', 'path': 'slides/instructions/1.png'},
    {'name': 'conditions/nonstat_conds_win.csv', 'path': 'conditions/nonstat_conds_win.csv'},
    {'name': 'slides/debrief/1.png', 'path': 'slides/debrief/1.png'},
    {'name': 'slides/debrief/3.png', 'path': 'slides/debrief/3.png'},
    {'name': 'conditions/rewardNSb11_Exp1.csv', 'path': 'conditions/rewardNSb11_Exp1.csv'},
    {'name': 'conditions/rewardVb1.csv', 'path': 'conditions/rewardVb1.csv'},
    {'name': 'slides/debrief/4.png', 'path': 'slides/debrief/4.png'},
    {'name': 'conditions/rewardVb6.csv', 'path': 'conditions/rewardVb6.csv'},
    {'name': 'instr6.xlsx', 'path': 'instr6.xlsx'},
    {'name': 'conditions/rewardSb9_Exp1.csv', 'path': 'conditions/rewardSb9_Exp1.csv'},
    {'name': 'slides/instructions/i1_2.png', 'path': 'slides/instructions/i1_2.png'},
    {'name': 'slides/debrief/5.png', 'path': 'slides/debrief/5.png'},
    {'name': 'conditions/rewardSb10_Exp1.csv', 'path': 'conditions/rewardSb10_Exp1.csv'},
    {'name': 'conditions/rewardNSb12_Exp1.csv', 'path': 'conditions/rewardNSb12_Exp1.csv'},
    {'name': 'conditions/rewardSb5_Exp1.csv', 'path': 'conditions/rewardSb5_Exp1.csv'},
    {'name': 'conditions/rewardVb10.csv', 'path': 'conditions/rewardVb10.csv'},
    {'name': 'conditions/rewardSb6_Exp1.csv', 'path': 'conditions/rewardSb6_Exp1.csv'},
    {'name': 'slides/debrief/debrief.xlsx', 'path': 'slides/debrief/debrief.xlsx'},
    {'name': 'conditions/rewardNSb5_Exp1.csv', 'path': 'conditions/rewardNSb5_Exp1.csv'},
    {'name': 'conditions/rewardNSb10_Exp1.csv', 'path': 'conditions/rewardNSb10_Exp1.csv'},
    {'name': 'slides/instructions/i2_1.png', 'path': 'slides/instructions/i2_1.png'},
    {'name': 'conditions/rewardNSb9_Exp1.csv', 'path': 'conditions/rewardNSb9_Exp1.csv'},
    {'name': 'conditions/rewardVb5.csv', 'path': 'conditions/rewardVb5.csv'},
    {'name': 'slides/instructions/i2_3.png', 'path': 'slides/instructions/i2_3.png'},
    {'name': 'conditions/rewardVb3.csv', 'path': 'conditions/rewardVb3.csv'},
    {'name': 'conditions/rewardVb9.csv', 'path': 'conditions/rewardVb9.csv'},
    {'name': 'slides/instructions/instr.xlsx', 'path': 'slides/instructions/instr.xlsx'},
    {'name': 'conditions/prac_conditions_win.csv', 'path': 'conditions/prac_conditions_win.csv'},
    {'name': 'conditions/rewardNSb3_Exp1.csv', 'path': 'conditions/rewardNSb3_Exp1.csv'},
    {'name': 'slides/instructions/6.png', 'path': 'slides/instructions/6.png'},
    {'name': 'conditions/rewardSb1_Exp1.csv', 'path': 'conditions/rewardSb1_Exp1.csv'},
    {'name': 'conditions/rewardNSb7_Exp1.csv', 'path': 'conditions/rewardNSb7_Exp1.csv'},
    {'name': 'conditions/rewardSb4_Exp1.csv', 'path': 'conditions/rewardSb4_Exp1.csv'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.1.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participantID"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://docs.google.com/document/d/1BbaksLJAaqA3zrqHnxBJxNQrtsoBsYjKnjnCehWT7jE/', 'https://docs.google.com/document/d/1BbaksLJAaqA3zrqHnxBJxNQrtsoBsYjKnjnCehWT7jE/');

  return Scheduler.Event.NEXT;
}


var blocksClock;
var numBlocks;
var currentBlock;
var pointPosition;
var trialPosition;
var blockPosition;
var squarePos;
var s1pos;
var s2pos;
var s3pos;
var s4pos;
var randomVal;
var instrLoc;
var expVal;
var pracCond;
var stationary;
var randint;
var welcomeClock;
var instrControlKey;
var image;
var instrPrepClock;
var currRowInstr;
var consentClock;
var image_3;
var consentCheck;
var mouse;
var blankClock;
var blank1;
var demographicsQuestClock;
var Space_StartClock;
var key_resp;
var Space_Cont4;
var instructClock;
var instrControlKey_2;
var image_4;
var controlClock;
var currRowInstr2;
var pracBlockInstClock;
var pracInstr;
var S1_1;
var S2_1;
var S3_1;
var S4_1;
var spaceCont_2;
var S1Text_1;
var S2Text_1;
var S3Text_1;
var S4Text_1;
var spaceContText_2;
var pracInstructText;
var countdownClock;
var countdownText;
var pracChoiceClock;
var S1_2;
var S2_2;
var S3_2;
var S4_2;
var pracChoiceKey;
var pracTrialCounter;
var pracPoints_Choice;
var pracSelectClock;
var S1_3;
var S2_3;
var S3_3;
var S4_3;
var pracTrialCounter_2;
var pracPointsTotal_2;
var pracSelectOutline_1;
var pracFeedClock;
var S1_4;
var S2_4;
var S3_4;
var S4_4;
var pracSelectOutline_2;
var pracPointsTotal_3;
var pracTrialCounter_3;
var pracPointFeedbackText;
var pracUpdateClock;
var pracBlockCompleteClock;
var pracCompleteText;
var spaceCont_3;
var condVal;
var startVal;
var rewardSetUpClock;
var spaceContText;
var spaceCont;
var summaryText;
var realBlockInstrClock;
var instr;
var S1_5;
var S2_5;
var S3_5;
var S4_5;
var spaceCont_4;
var S1Key_5;
var S2Key_5;
var S3Key_5;
var S4Key_5;
var spaceContText_3;
var ReminderBlock;
var realChoiceClock;
var S1_6;
var S2_6;
var S3_6;
var S4_6;
var choiceKey;
var trialCounter_1;
var pointsTotal_1;
var blockCounter_1;
var realSelectClock;
var S1_7;
var S2_7;
var S3_7;
var S4_7;
var trialCounter_2;
var pointsTotal_2;
var blockCounter_2;
var selectOutline_1;
var realFeedClock;
var S1_8;
var S2_8;
var S3_8;
var S4_8;
var selectOutline_2;
var pointsTotal_3;
var trialCounter_3;
var blockCounter_3;
var pointFeedbackText;
var realUpdateClock;
var blockUpdateClock;
var blockEndText;
var spaceContText_4;
var spaceCont_5;
var blockEndQuestClock;
var contRoutineClock;
var spaceCont_7;
var text;
var rewardChangeClock;
var rewardChangeText;
var spaceContText_5;
var spaceCont_6;
var taskEnd_1Clock;
var questNextClock;
var spaceCont_9;
var text_3;
var taskEnd_2Clock;
var curiosityQuestClock;
var cogQuestClock;
var riskQuestClock;
var experimentEndClock;
var debriefControlKey;
var image_2;
var debriefPrepClock;
var currRowDebrief;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "blocks"
  blocksClock = new util.Clock();
  numBlocks = 9;
  currentBlock = 1;
  pointPosition = [0, (- 0.5)];
  trialPosition = [0, (- 0.55)];
  blockPosition = [0, (- 0.6)];
  squarePos = [[0.1, 0.1], [(- 0.1), 0.1], [0.1, (- 0.1)], [(- 0.1), (- 0.1)]];
  util.shuffle(squarePos);
  s1pos = squarePos[0];
  s2pos = squarePos[1];
  s3pos = squarePos[2];
  s4pos = squarePos[3];
  
  randomVal = Math.random()
  
  if ((randomVal > 0.25)) {
      instrLoc = "instr5.xlsx";
      expVal = 1;
      pracCond = "conditions/prac_conditions_win.csv"
      stationary = false;
  } else {
      instrLoc = "instr6.xlsx";
      expVal = 2;
      pracCond = "conditions/prac_conditions_win.csv"
      stationary = true;
  }
  
  // Stationary
  //instrLoc = "instr6.xlsx";
  //expVal = 2;
  //pracCond = "conditions/prac_conditions_win.csv"
  //stationary = true;
  randint = function(min, maxplusone) {
    return Math.floor(Math.random() * (maxplusone - min) ) + min;
  }
  
  
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  instrControlKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.3, 1.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "instrPrep"
  instrPrepClock = new util.Clock();
  currRowInstr = 0;
  
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'slides/instructions/consentCheck.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.3, 1.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  consentCheck = new visual.Rect ({
    win: psychoJS.window, name: 'consentCheck', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "blank"
  blankClock = new util.Clock();
  blank1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "demographicsQuest"
  demographicsQuestClock = new util.Clock();
  // Initialize components for Routine "Space_Start"
  Space_StartClock = new util.Clock();
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Space_Cont4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Space_Cont4',
    text: 'Press Space To Continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.08,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instruct"
  instructClock = new util.Clock();
  instrControlKey_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.3, 1.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "control"
  controlClock = new util.Clock();
  currRowInstr2 = 0;
  
  // Initialize components for Routine "pracBlockInst"
  pracBlockInstClock = new util.Clock();
  pracInstr = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracInstr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.5], height: 0.05,  wrapWidth: 2.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  S1_1 = new visual.Rect ({
    win: psychoJS.window, name: 'S1_1', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [(- 0.1), 0.1],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  S2_1 = new visual.Rect ({
    win: psychoJS.window, name: 'S2_1', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.1, 0.1],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  S3_1 = new visual.Rect ({
    win: psychoJS.window, name: 'S3_1', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [(- 0.1), (- 0.1)],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  S4_1 = new visual.Rect ({
    win: psychoJS.window, name: 'S4_1', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.1, (- 0.1)],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  spaceCont_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  S1Text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'S1Text_1',
    text: 'R',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.1), 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  S2Text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'S2Text_1',
    text: 'I',
    font: 'Arial',
    units: 'height', 
    pos: [0.1, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  S3Text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'S3Text_1',
    text: 'F',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.1), (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  S4Text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'S4Text_1',
    text: 'J',
    font: 'Arial',
    units: 'height', 
    pos: [0.1, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  spaceContText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'spaceContText_2',
    text: 'Press SPACE to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.5)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  pracInstructText = "Try to find the option that gives the most points";
  
  // Initialize components for Routine "countdown"
  countdownClock = new util.Clock();
  countdownText = new visual.TextStim({
    win: psychoJS.window,
    name: 'countdownText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
   function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
   
   for (let i = 0; i < 3; i++) {
      const pick = getRandomInt(i+1,3);
      [squarePos[i], squarePos[pick]] = [squarePos[pick], squarePos[i]];
  }
  
  s1pos = squarePos[0];
  s2pos = squarePos[1];
  s3pos = squarePos[2];
  s4pos = squarePos[3];
  // Initialize components for Routine "pracChoice"
  pracChoiceClock = new util.Clock();
  S1_2 = new visual.Rect ({
    win: psychoJS.window, name: 'S1_2', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 0.7333), 0.0667, (- 0.6)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  S2_2 = new visual.Rect ({
    win: psychoJS.window, name: 'S2_2', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.8667, (- 0.2), (- 0.0667)]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  S3_2 = new visual.Rect ({
    win: psychoJS.window, name: 'S3_2', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 0.4667), (- 0.0667), 0.3333]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  S4_2 = new visual.Rect ({
    win: psychoJS.window, name: 'S4_2', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.6, 0.4667, (- 0.4667)]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  pracChoiceKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  pracTrialCounter = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracTrialCounter',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: trialPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  pracPoints_Choice = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracPoints_Choice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: pointPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "pracSelect"
  pracSelectClock = new util.Clock();
  S1_3 = new visual.Rect ({
    win: psychoJS.window, name: 'S1_3', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 0.7333), 0.0667, (- 0.6)]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  S2_3 = new visual.Rect ({
    win: psychoJS.window, name: 'S2_3', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.8667, (- 0.2), (- 0.0667)]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  S3_3 = new visual.Rect ({
    win: psychoJS.window, name: 'S3_3', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 0.4667), (- 0.0667), 0.3333]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  S4_3 = new visual.Rect ({
    win: psychoJS.window, name: 'S4_3', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.6, 0.4667, (- 0.4667)]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  pracTrialCounter_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracTrialCounter_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: trialPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  pracPointsTotal_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracPointsTotal_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: pointPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  pracSelectOutline_1 = new visual.Rect ({
    win: psychoJS.window, name: 'pracSelectOutline_1', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 5.0, lineColor: new util.Color([1.0, 0.6941, (- 1.0)]),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  // Initialize components for Routine "pracFeed"
  pracFeedClock = new util.Clock();
  S1_4 = new visual.Rect ({
    win: psychoJS.window, name: 'S1_4', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 0.7333), 0.0667, (- 0.6)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  S2_4 = new visual.Rect ({
    win: psychoJS.window, name: 'S2_4', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.8667, (- 0.2), (- 0.0667)]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  S3_4 = new visual.Rect ({
    win: psychoJS.window, name: 'S3_4', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 0.4667), (- 0.0667), 0.3333]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  S4_4 = new visual.Rect ({
    win: psychoJS.window, name: 'S4_4', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.6, 0.4667, (- 0.4667)]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  pracSelectOutline_2 = new visual.Rect ({
    win: psychoJS.window, name: 'pracSelectOutline_2', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 5.0, lineColor: new util.Color([1.0, 0.6941, (- 1.0)]),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  pracPointsTotal_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracPointsTotal_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  pracTrialCounter_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracTrialCounter_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: trialPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  pracPointFeedbackText = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracPointFeedbackText',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -7.0 
  });
  
  // Initialize components for Routine "pracUpdate"
  pracUpdateClock = new util.Clock();
  // Initialize components for Routine "pracBlockComplete"
  pracBlockCompleteClock = new util.Clock();
  pracCompleteText = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracCompleteText',
    text: 'You have completed the practice blocks! Next you will start the real task. \n\nPress SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  spaceCont_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  condVal = Math.random()
  
  if ((condVal > 0.5)) {
      startVal = 1;
  } else {
      startVal = 0;
  }
  
  // Initialize components for Routine "rewardSetUp"
  rewardSetUpClock = new util.Clock();
  spaceContText = new visual.TextStim({
    win: psychoJS.window,
    name: 'spaceContText',
    text: 'Press Space to Continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  spaceCont = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  summaryText = new visual.TextStim({
    win: psychoJS.window,
    name: 'summaryText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.1,  wrapWidth: 1.5, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "realBlockInstr"
  realBlockInstrClock = new util.Clock();
  instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr',
    text: 'Below is a reminder of the keys to press to select a square:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.06,  wrapWidth: 2.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  S1_5 = new visual.Rect ({
    win: psychoJS.window, name: 'S1_5', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [(- 0.1), 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  S2_5 = new visual.Rect ({
    win: psychoJS.window, name: 'S2_5', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.1, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  S3_5 = new visual.Rect ({
    win: psychoJS.window, name: 'S3_5', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [(- 0.1), (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  S4_5 = new visual.Rect ({
    win: psychoJS.window, name: 'S4_5', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.1, (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  spaceCont_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  S1Key_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'S1Key_5',
    text: 'R',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.1), 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  S2Key_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'S2Key_5',
    text: 'I',
    font: 'Arial',
    units: 'height', 
    pos: [0.1, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  S3Key_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'S3Key_5',
    text: 'F',
    font: 'Arial',
    units: 'height', 
    pos: [(- 0.1), (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  S4Key_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'S4Key_5',
    text: 'J',
    font: 'Arial',
    units: 'height', 
    pos: [0.1, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  spaceContText_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'spaceContText_3',
    text: 'Press SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.65)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  ReminderBlock = new visual.TextStim({
    win: psychoJS.window,
    name: 'ReminderBlock',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.6], height: 0.08,  wrapWidth: 2.0, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -13.0 
  });
  
  // Initialize components for Routine "realChoice"
  realChoiceClock = new util.Clock();
  S1_6 = new visual.Rect ({
    win: psychoJS.window, name: 'S1_6', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  S2_6 = new visual.Rect ({
    win: psychoJS.window, name: 'S2_6', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  S3_6 = new visual.Rect ({
    win: psychoJS.window, name: 'S3_6', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  S4_6 = new visual.Rect ({
    win: psychoJS.window, name: 'S4_6', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  choiceKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trialCounter_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialCounter_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: trialPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  pointsTotal_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pointsTotal_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: pointPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  blockCounter_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blockCounter_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: blockPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "realSelect"
  realSelectClock = new util.Clock();
  S1_7 = new visual.Rect ({
    win: psychoJS.window, name: 'S1_7', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  S2_7 = new visual.Rect ({
    win: psychoJS.window, name: 'S2_7', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  S3_7 = new visual.Rect ({
    win: psychoJS.window, name: 'S3_7', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  S4_7 = new visual.Rect ({
    win: psychoJS.window, name: 'S4_7', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  trialCounter_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialCounter_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: trialPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  pointsTotal_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pointsTotal_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: pointPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  blockCounter_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blockCounter_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: blockPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  selectOutline_1 = new visual.Rect ({
    win: psychoJS.window, name: 'selectOutline_1', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 5.0, lineColor: new util.Color([1.0, 0.6941, (- 1.0)]),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  // Initialize components for Routine "realFeed"
  realFeedClock = new util.Clock();
  S1_8 = new visual.Rect ({
    win: psychoJS.window, name: 'S1_8', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  S2_8 = new visual.Rect ({
    win: psychoJS.window, name: 'S2_8', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  S3_8 = new visual.Rect ({
    win: psychoJS.window, name: 'S3_8', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  S4_8 = new visual.Rect ({
    win: psychoJS.window, name: 'S4_8', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  selectOutline_2 = new visual.Rect ({
    win: psychoJS.window, name: 'selectOutline_2', units : 'height', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 5.0, lineColor: new util.Color([1.0, 0.6941, (- 1.0)]),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  pointsTotal_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'pointsTotal_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  trialCounter_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialCounter_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: trialPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  blockCounter_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blockCounter_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: blockPosition, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  pointFeedbackText = new visual.TextStim({
    win: psychoJS.window,
    name: 'pointFeedbackText',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -8.0 
  });
  
  // Initialize components for Routine "realUpdate"
  realUpdateClock = new util.Clock();
  // Initialize components for Routine "blockUpdate"
  blockUpdateClock = new util.Clock();
  blockEndText = new visual.TextStim({
    win: psychoJS.window,
    name: 'blockEndText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  spaceContText_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'spaceContText_4',
    text: 'Press SPACE to continue to the questionnaire.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  spaceCont_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blockEndQuest"
  blockEndQuestClock = new util.Clock();
  // Initialize components for Routine "contRoutine"
  contRoutineClock = new util.Clock();
  spaceCont_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "rewardChange"
  rewardChangeClock = new util.Clock();
  rewardChangeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'rewardChangeText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.1,  wrapWidth: 1.5, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  spaceContText_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'spaceContText_5',
    text: 'Press SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  spaceCont_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "taskEnd_1"
  taskEnd_1Clock = new util.Clock();
  // Initialize components for Routine "questNext"
  questNextClock = new util.Clock();
  spaceCont_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "taskEnd_2"
  taskEnd_2Clock = new util.Clock();
  // Initialize components for Routine "curiosityQuest"
  curiosityQuestClock = new util.Clock();
  // Initialize components for Routine "cogQuest"
  cogQuestClock = new util.Clock();
  // Initialize components for Routine "riskQuest"
  riskQuestClock = new util.Clock();
  // Initialize components for Routine "experimentEnd"
  experimentEndClock = new util.Clock();
  debriefControlKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.3, 1.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "debriefPrep"
  debriefPrepClock = new util.Clock();
  currRowDebrief = 0;
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var blocksComponents;
function blocksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'blocks'-------
    t = 0;
    blocksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    blocksComponents = [];
    
    for (const thisComponent of blocksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function blocksRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'blocks'-------
    // get current time
    t = blocksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blocksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blocksRoutineEnd() {
  return async function () {
    //------Ending Routine 'blocks'-------
    for (const thisComponent of blocksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "blocks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instrController;
var currentLoop;
function instrControllerLoopBegin(instrControllerLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instrController = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instrController'
    });
    psychoJS.experiment.addLoop(instrController); // add the loop to the experiment
    currentLoop = instrController;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstrController of instrController) {
      const snapshot = instrController.getSnapshot();
      instrControllerLoopScheduler.add(importConditions(snapshot));
      const instrLoopLoopScheduler = new Scheduler(psychoJS);
      instrControllerLoopScheduler.add(instrLoopLoopBegin(instrLoopLoopScheduler, snapshot));
      instrControllerLoopScheduler.add(instrLoopLoopScheduler);
      instrControllerLoopScheduler.add(instrLoopLoopEnd);
      instrControllerLoopScheduler.add(instrPrepRoutineBegin(snapshot));
      instrControllerLoopScheduler.add(instrPrepRoutineEachFrame());
      instrControllerLoopScheduler.add(instrPrepRoutineEnd());
      instrControllerLoopScheduler.add(endLoopIteration(instrControllerLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var instrLoop;
function instrLoopLoopBegin(instrLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instrLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'slides/instructions/instr.xlsx', currRowInstr.toString()),
      seed: undefined, name: 'instrLoop'
    });
    psychoJS.experiment.addLoop(instrLoop); // add the loop to the experiment
    currentLoop = instrLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstrLoop of instrLoop) {
      const snapshot = instrLoop.getSnapshot();
      instrLoopLoopScheduler.add(importConditions(snapshot));
      instrLoopLoopScheduler.add(welcomeRoutineBegin(snapshot));
      instrLoopLoopScheduler.add(welcomeRoutineEachFrame());
      instrLoopLoopScheduler.add(welcomeRoutineEnd());
      instrLoopLoopScheduler.add(endLoopIteration(instrLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instrLoopLoopEnd() {
  psychoJS.experiment.removeLoop(instrLoop);

  return Scheduler.Event.NEXT;
}


async function instrControllerLoopEnd() {
  psychoJS.experiment.removeLoop(instrController);

  return Scheduler.Event.NEXT;
}


var icontrol;
function icontrolLoopBegin(icontrolLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    icontrol = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'icontrol'
    });
    psychoJS.experiment.addLoop(icontrol); // add the loop to the experiment
    currentLoop = icontrol;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisIcontrol of icontrol) {
      const snapshot = icontrol.getSnapshot();
      icontrolLoopScheduler.add(importConditions(snapshot));
      const iloopLoopScheduler = new Scheduler(psychoJS);
      icontrolLoopScheduler.add(iloopLoopBegin(iloopLoopScheduler, snapshot));
      icontrolLoopScheduler.add(iloopLoopScheduler);
      icontrolLoopScheduler.add(iloopLoopEnd);
      icontrolLoopScheduler.add(controlRoutineBegin(snapshot));
      icontrolLoopScheduler.add(controlRoutineEachFrame());
      icontrolLoopScheduler.add(controlRoutineEnd());
      icontrolLoopScheduler.add(endLoopIteration(icontrolLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var iloop;
function iloopLoopBegin(iloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    iloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, instrLoc, currRowInstr2.toString()),
      seed: undefined, name: 'iloop'
    });
    psychoJS.experiment.addLoop(iloop); // add the loop to the experiment
    currentLoop = iloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisIloop of iloop) {
      const snapshot = iloop.getSnapshot();
      iloopLoopScheduler.add(importConditions(snapshot));
      iloopLoopScheduler.add(instructRoutineBegin(snapshot));
      iloopLoopScheduler.add(instructRoutineEachFrame());
      iloopLoopScheduler.add(instructRoutineEnd());
      iloopLoopScheduler.add(endLoopIteration(iloopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function iloopLoopEnd() {
  psychoJS.experiment.removeLoop(iloop);

  return Scheduler.Event.NEXT;
}


async function icontrolLoopEnd() {
  psychoJS.experiment.removeLoop(icontrol);

  return Scheduler.Event.NEXT;
}


var pracTrials;
function pracTrialsLoopBegin(pracTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    pracTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: pracCond,
      seed: undefined, name: 'pracTrials'
    });
    psychoJS.experiment.addLoop(pracTrials); // add the loop to the experiment
    currentLoop = pracTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPracTrial of pracTrials) {
      const snapshot = pracTrials.getSnapshot();
      pracTrialsLoopScheduler.add(importConditions(snapshot));
      pracTrialsLoopScheduler.add(pracChoiceRoutineBegin(snapshot));
      pracTrialsLoopScheduler.add(pracChoiceRoutineEachFrame());
      pracTrialsLoopScheduler.add(pracChoiceRoutineEnd());
      pracTrialsLoopScheduler.add(pracSelectRoutineBegin(snapshot));
      pracTrialsLoopScheduler.add(pracSelectRoutineEachFrame());
      pracTrialsLoopScheduler.add(pracSelectRoutineEnd());
      pracTrialsLoopScheduler.add(pracFeedRoutineBegin(snapshot));
      pracTrialsLoopScheduler.add(pracFeedRoutineEachFrame());
      pracTrialsLoopScheduler.add(pracFeedRoutineEnd());
      pracTrialsLoopScheduler.add(pracUpdateRoutineBegin(snapshot));
      pracTrialsLoopScheduler.add(pracUpdateRoutineEachFrame());
      pracTrialsLoopScheduler.add(pracUpdateRoutineEnd());
      pracTrialsLoopScheduler.add(endLoopIteration(pracTrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function pracTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(pracTrials);

  return Scheduler.Event.NEXT;
}


var condType;
function condTypeLoopBegin(condTypeLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    condType = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'condType'
    });
    psychoJS.experiment.addLoop(condType); // add the loop to the experiment
    currentLoop = condType;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCondType of condType) {
      const snapshot = condType.getSnapshot();
      condTypeLoopScheduler.add(importConditions(snapshot));
      const blockLoopLoopScheduler = new Scheduler(psychoJS);
      condTypeLoopScheduler.add(blockLoopLoopBegin(blockLoopLoopScheduler, snapshot));
      condTypeLoopScheduler.add(blockLoopLoopScheduler);
      condTypeLoopScheduler.add(blockLoopLoopEnd);
      condTypeLoopScheduler.add(rewardChangeRoutineBegin(snapshot));
      condTypeLoopScheduler.add(rewardChangeRoutineEachFrame());
      condTypeLoopScheduler.add(rewardChangeRoutineEnd());
      condTypeLoopScheduler.add(endLoopIteration(condTypeLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var blockLoop;
function blockLoopLoopBegin(blockLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blockLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: conds,
      seed: undefined, name: 'blockLoop'
    });
    psychoJS.experiment.addLoop(blockLoop); // add the loop to the experiment
    currentLoop = blockLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlockLoop of blockLoop) {
      const snapshot = blockLoop.getSnapshot();
      blockLoopLoopScheduler.add(importConditions(snapshot));
      blockLoopLoopScheduler.add(realBlockInstrRoutineBegin(snapshot));
      blockLoopLoopScheduler.add(realBlockInstrRoutineEachFrame());
      blockLoopLoopScheduler.add(realBlockInstrRoutineEnd());
      const realTrialsLoopScheduler = new Scheduler(psychoJS);
      blockLoopLoopScheduler.add(realTrialsLoopBegin(realTrialsLoopScheduler, snapshot));
      blockLoopLoopScheduler.add(realTrialsLoopScheduler);
      blockLoopLoopScheduler.add(realTrialsLoopEnd);
      blockLoopLoopScheduler.add(blockUpdateRoutineBegin(snapshot));
      blockLoopLoopScheduler.add(blockUpdateRoutineEachFrame());
      blockLoopLoopScheduler.add(blockUpdateRoutineEnd());
      blockLoopLoopScheduler.add(blockEndQuestRoutineBegin(snapshot));
      blockLoopLoopScheduler.add(blockEndQuestRoutineEachFrame());
      blockLoopLoopScheduler.add(blockEndQuestRoutineEnd());
      blockLoopLoopScheduler.add(blankRoutineBegin(snapshot));
      blockLoopLoopScheduler.add(blankRoutineEachFrame());
      blockLoopLoopScheduler.add(blankRoutineEnd());
      blockLoopLoopScheduler.add(contRoutineRoutineBegin(snapshot));
      blockLoopLoopScheduler.add(contRoutineRoutineEachFrame());
      blockLoopLoopScheduler.add(contRoutineRoutineEnd());
      blockLoopLoopScheduler.add(endLoopIteration(blockLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var realTrials;
function realTrialsLoopBegin(realTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    realTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: cond_file,
      seed: undefined, name: 'realTrials'
    });
    psychoJS.experiment.addLoop(realTrials); // add the loop to the experiment
    currentLoop = realTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRealTrial of realTrials) {
      const snapshot = realTrials.getSnapshot();
      realTrialsLoopScheduler.add(importConditions(snapshot));
      realTrialsLoopScheduler.add(realChoiceRoutineBegin(snapshot));
      realTrialsLoopScheduler.add(realChoiceRoutineEachFrame());
      realTrialsLoopScheduler.add(realChoiceRoutineEnd());
      realTrialsLoopScheduler.add(realSelectRoutineBegin(snapshot));
      realTrialsLoopScheduler.add(realSelectRoutineEachFrame());
      realTrialsLoopScheduler.add(realSelectRoutineEnd());
      realTrialsLoopScheduler.add(realFeedRoutineBegin(snapshot));
      realTrialsLoopScheduler.add(realFeedRoutineEachFrame());
      realTrialsLoopScheduler.add(realFeedRoutineEnd());
      realTrialsLoopScheduler.add(realUpdateRoutineBegin(snapshot));
      realTrialsLoopScheduler.add(realUpdateRoutineEachFrame());
      realTrialsLoopScheduler.add(realUpdateRoutineEnd());
      realTrialsLoopScheduler.add(endLoopIteration(realTrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function realTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(realTrials);

  return Scheduler.Event.NEXT;
}


async function blockLoopLoopEnd() {
  psychoJS.experiment.removeLoop(blockLoop);

  return Scheduler.Event.NEXT;
}


async function condTypeLoopEnd() {
  psychoJS.experiment.removeLoop(condType);

  return Scheduler.Event.NEXT;
}


var debriefController;
function debriefControllerLoopBegin(debriefControllerLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    debriefController = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'debriefController'
    });
    psychoJS.experiment.addLoop(debriefController); // add the loop to the experiment
    currentLoop = debriefController;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisDebriefController of debriefController) {
      const snapshot = debriefController.getSnapshot();
      debriefControllerLoopScheduler.add(importConditions(snapshot));
      const debriefLoopLoopScheduler = new Scheduler(psychoJS);
      debriefControllerLoopScheduler.add(debriefLoopLoopBegin(debriefLoopLoopScheduler, snapshot));
      debriefControllerLoopScheduler.add(debriefLoopLoopScheduler);
      debriefControllerLoopScheduler.add(debriefLoopLoopEnd);
      debriefControllerLoopScheduler.add(debriefPrepRoutineBegin(snapshot));
      debriefControllerLoopScheduler.add(debriefPrepRoutineEachFrame());
      debriefControllerLoopScheduler.add(debriefPrepRoutineEnd());
      debriefControllerLoopScheduler.add(endLoopIteration(debriefControllerLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var debriefLoop;
function debriefLoopLoopBegin(debriefLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    debriefLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'slides/debrief/debrief.xlsx', currRowDebrief.toString()),
      seed: undefined, name: 'debriefLoop'
    });
    psychoJS.experiment.addLoop(debriefLoop); // add the loop to the experiment
    currentLoop = debriefLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisDebriefLoop of debriefLoop) {
      const snapshot = debriefLoop.getSnapshot();
      debriefLoopLoopScheduler.add(importConditions(snapshot));
      debriefLoopLoopScheduler.add(experimentEndRoutineBegin(snapshot));
      debriefLoopLoopScheduler.add(experimentEndRoutineEachFrame());
      debriefLoopLoopScheduler.add(experimentEndRoutineEnd());
      debriefLoopLoopScheduler.add(endLoopIteration(debriefLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function debriefLoopLoopEnd() {
  psychoJS.experiment.removeLoop(debriefLoop);

  return Scheduler.Event.NEXT;
}


async function debriefControllerLoopEnd() {
  psychoJS.experiment.removeLoop(debriefController);

  return Scheduler.Event.NEXT;
}


var _instrControlKey_allKeys;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'welcome'-------
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instrControlKey.keys = undefined;
    instrControlKey.rt = undefined;
    _instrControlKey_allKeys = [];
    image.setImage(instr_slide2);
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(instrControlKey);
    welcomeComponents.push(image);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'welcome'-------
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrControlKey* updates
    if (t >= 0.0 && instrControlKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrControlKey.tStart = t;  // (not accounting for frame time here)
      instrControlKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instrControlKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instrControlKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instrControlKey.clearEvents(); });
    }

    if (instrControlKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = instrControlKey.getKeys({keyList: ['right', 'left', 'space'], waitRelease: false});
      _instrControlKey_allKeys = _instrControlKey_allKeys.concat(theseKeys);
      if (_instrControlKey_allKeys.length > 0) {
        instrControlKey.keys = _instrControlKey_allKeys[_instrControlKey_allKeys.length - 1].name;  // just the last key pressed
        instrControlKey.rt = _instrControlKey_allKeys[_instrControlKey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd() {
  return async function () {
    //------Ending Routine 'welcome'-------
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instrControlKey.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instrPrepComponents;
function instrPrepRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instrPrep'-------
    t = 0;
    instrPrepClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((instrControlKey.keys === "right")) {
        if ((currRowInstr !== 6)) {
            currRowInstr += 1;
        }
    } else {
        if ((instrControlKey.keys === "left")) {
            if ((currRowInstr !== 0)) {
                currRowInstr -= 1;
            }
        } else {
            if ((instrControlKey.keys === "space")) {
                if ((currRowInstr === 6)) {
                    instrController.finished = true;
                }
            }
        }
    }
    
    // keep track of which components have finished
    instrPrepComponents = [];
    
    for (const thisComponent of instrPrepComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrPrepRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instrPrep'-------
    // get current time
    t = instrPrepClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrPrepComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrPrepRoutineEnd() {
  return async function () {
    //------Ending Routine 'instrPrep'-------
    for (const thisComponent of instrPrepComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instrPrep" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'consent'-------
    t = 0;
    consentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(image_3);
    consentComponents.push(consentCheck);
    consentComponents.push(mouse);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function consentRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'consent'-------
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    
    // *consentCheck* updates
    if (t >= 0.0 && consentCheck.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentCheck.tStart = t;  // (not accounting for frame time here)
      consentCheck.frameNStart = frameN;  // exact frame index
      
      consentCheck.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [consentCheck]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd() {
  return async function () {
    //------Ending Routine 'consent'-------
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
    if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
    if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
    if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
    if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
    if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
    if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
    
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blankComponents;
function blankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'blank'-------
    t = 0;
    blankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blankComponents = [];
    blankComponents.push(blank1);
    
    for (const thisComponent of blankComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function blankRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'blank'-------
    // get current time
    t = blankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank1* updates
    if (t >= 0.0 && blank1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank1.tStart = t;  // (not accounting for frame time here)
      blank1.frameNStart = frameN;  // exact frame index
      
      blank1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blank1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blankRoutineEnd() {
  return async function () {
    //------Ending Routine 'blank'-------
    for (const thisComponent of blankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var params;
var continue_routine;
var demographicsQuestComponents;
function demographicsQuestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'demographicsQuest'-------
    t = 0;
    demographicsQuestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // This routine should not start straight away or the screen width and height
    // may be incorrect.
    
    expInfo['xRes'] = screen.width;
    expInfo['yRes'] = screen.height;
    console.log("screen xRes",expInfo['xRes']);
    console.log("screen yRes",expInfo['yRes']);
    
    //let src = ('demographics.html?xRes='+expInfo['xRes']+'&yRes='+expInfo['yRes']);
    let src = ('questionnaires/demographics.html');
    
    params = {};  // Results added here after form is submitted
    continue_routine = true; // Routines can't be ended from within Begin Routine
    $(document).ready(function() {
        // Add custom contents from html file using an iframe:
        $('body').append('<div id="iframe-o" style="visibility: hidden; position: relative; display: table; margin: auto; overflow-x: hidden; overflow-y: scroll !important; -webkit-overflow-y-scrolling:touch !important;"><div id="iframe-m" style="display: table-cell; vertical-align: middle;"><div id="iframe-i" style="display: inline-block; width:100%; overflow-y: hidden; overflow-x: hidden;"><iframe id="iframe" src="'+src+'" frameborder="0" style="width: 100%; overflow-y: hidden; overflow-x: hidden; "></iframe></div></div></div>');
        $('#iframe').on('load',function(iframe){
            // Auto-adjust iframe size:
            $(this).contents().find('html').css({ 'display': 'table', 'width': '100%', 'overflow-x': 'hidden' });
            $('#iframe-o').height($(window).height()-20, true);
            $('#iframe-m').width($(this).contents().find('html').width()+100);
           $('#iframe-i').height ( Math.max ( $(this).contents().find('html').height()+20, $(window).height()-20 ), true );
            $(this).height($(this).contents().find('html').height());
            $('#iframe-o').css('visibility','visible');
    
            // If iframe contains a form, then capture its output:
            $(this).contents().find('form').on('submit',function(e){
                e.preventDefault();
                $.each($(this).serializeArray(),function(i, param){
                    params[param.name] = param.value;
                    psychoJS.experiment.addData(param.name, param.value);
                });
                console.log ( 'DEBUG:FRM', params );
                // Remove iframe and continue to next routine when done:
                $('#iframe-o').remove();
                continue_routine = false;
            });
        });
    });
    //$('#iframe').attr( 'src', function(i,val){ return val;} );
    // keep track of which components have finished
    demographicsQuestComponents = [];
    
    for (const thisComponent of demographicsQuestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function demographicsQuestRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'demographicsQuest'-------
    // get current time
    t = demographicsQuestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = continue_routine;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demographicsQuestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demographicsQuestRoutineEnd() {
  return async function () {
    //------Ending Routine 'demographicsQuest'-------
    for (const thisComponent of demographicsQuestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // expInfo variables appear on every line in the data file
    // after they are created.
    expInfo['age'] = psychoJS.experiment._currentTrialData['Qage'];
    expInfo['gender'] = psychoJS.experiment._currentTrialData['Qgender'];
    expInfo['gender_text'] = psychoJS.experiment._currentTrialData['Qgender_text'];
    expInfo['hand'] = psychoJS.experiment._currentTrialData['Qhand'];
    expInfo['education'] = psychoJS.experiment._currentTrialData['Qeducation'];
    expInfo['english'] = psychoJS.experiment._currentTrialData['Qenglish'];
    // the Routine "demographicsQuest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var Space_StartComponents;
function Space_StartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Space_Start'-------
    t = 0;
    Space_StartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    Space_StartComponents = [];
    Space_StartComponents.push(key_resp);
    Space_StartComponents.push(Space_Cont4);
    
    for (const thisComponent of Space_StartComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Space_StartRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Space_Start'-------
    // get current time
    t = Space_StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp.clock.reset();
      key_resp.start();
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Space_Cont4* updates
    if (t >= 0.0 && Space_Cont4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Space_Cont4.tStart = t;  // (not accounting for frame time here)
      Space_Cont4.frameNStart = frameN;  // exact frame index
      
      Space_Cont4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Space_StartComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Space_StartRoutineEnd() {
  return async function () {
    //------Ending Routine 'Space_Start'-------
    for (const thisComponent of Space_StartComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Space_Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instrControlKey_2_allKeys;
var instructComponents;
function instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruct'-------
    t = 0;
    instructClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instrControlKey_2.keys = undefined;
    instrControlKey_2.rt = undefined;
    _instrControlKey_2_allKeys = [];
    image_4.setImage(instr_slide);
    // keep track of which components have finished
    instructComponents = [];
    instructComponents.push(instrControlKey_2);
    instructComponents.push(image_4);
    
    for (const thisComponent of instructComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruct'-------
    // get current time
    t = instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrControlKey_2* updates
    if (t >= 0.0 && instrControlKey_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrControlKey_2.tStart = t;  // (not accounting for frame time here)
      instrControlKey_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instrControlKey_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instrControlKey_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instrControlKey_2.clearEvents(); });
    }

    if (instrControlKey_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = instrControlKey_2.getKeys({keyList: ['right', 'left', 'space'], waitRelease: false});
      _instrControlKey_2_allKeys = _instrControlKey_2_allKeys.concat(theseKeys);
      if (_instrControlKey_2_allKeys.length > 0) {
        instrControlKey_2.keys = _instrControlKey_2_allKeys[_instrControlKey_2_allKeys.length - 1].name;  // just the last key pressed
        instrControlKey_2.rt = _instrControlKey_2_allKeys[_instrControlKey_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructRoutineEnd() {
  return async function () {
    //------Ending Routine 'instruct'-------
    for (const thisComponent of instructComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instrControlKey_2.stop();
    // the Routine "instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var controlComponents;
function controlRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'control'-------
    t = 0;
    controlClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((instrControlKey_2.keys === "right")) {
        if ((currRowInstr2 !== 2)) {
            currRowInstr2 += 1;
        }
    } else {
        if ((instrControlKey_2.keys === "left")) {
            if ((currRowInstr2 !== 0)) {
                currRowInstr2 -= 1;
            }
        } else {
            if ((instrControlKey_2.keys === "space")) {
                if ((currRowInstr2 === 2)) {
                    icontrol.finished = true;
                }
            }
        }
    }
    
    // keep track of which components have finished
    controlComponents = [];
    
    for (const thisComponent of controlComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function controlRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'control'-------
    // get current time
    t = controlClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of controlComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function controlRoutineEnd() {
  return async function () {
    //------Ending Routine 'control'-------
    for (const thisComponent of controlComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "control" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _spaceCont_2_allKeys;
var pracPoints;
var pracTrialNum;
var pracBlockInstComponents;
function pracBlockInstRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pracBlockInst'-------
    t = 0;
    pracBlockInstClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    pracInstr.setText(pracInstructText);
    spaceCont_2.keys = undefined;
    spaceCont_2.rt = undefined;
    _spaceCont_2_allKeys = [];
    pracPoints = 0;
    pracTrialNum = 1;
    
    // keep track of which components have finished
    pracBlockInstComponents = [];
    pracBlockInstComponents.push(pracInstr);
    pracBlockInstComponents.push(S1_1);
    pracBlockInstComponents.push(S2_1);
    pracBlockInstComponents.push(S3_1);
    pracBlockInstComponents.push(S4_1);
    pracBlockInstComponents.push(spaceCont_2);
    pracBlockInstComponents.push(S1Text_1);
    pracBlockInstComponents.push(S2Text_1);
    pracBlockInstComponents.push(S3Text_1);
    pracBlockInstComponents.push(S4Text_1);
    pracBlockInstComponents.push(spaceContText_2);
    
    for (const thisComponent of pracBlockInstComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pracBlockInstRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pracBlockInst'-------
    // get current time
    t = pracBlockInstClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pracInstr* updates
    if (t >= 0.0 && pracInstr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracInstr.tStart = t;  // (not accounting for frame time here)
      pracInstr.frameNStart = frameN;  // exact frame index
      
      pracInstr.setAutoDraw(true);
    }

    
    // *S1_1* updates
    if (t >= 0.0 && S1_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S1_1.tStart = t;  // (not accounting for frame time here)
      S1_1.frameNStart = frameN;  // exact frame index
      
      S1_1.setAutoDraw(true);
    }

    
    // *S2_1* updates
    if (t >= 0.0 && S2_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S2_1.tStart = t;  // (not accounting for frame time here)
      S2_1.frameNStart = frameN;  // exact frame index
      
      S2_1.setAutoDraw(true);
    }

    
    // *S3_1* updates
    if (t >= 0.0 && S3_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S3_1.tStart = t;  // (not accounting for frame time here)
      S3_1.frameNStart = frameN;  // exact frame index
      
      S3_1.setAutoDraw(true);
    }

    
    // *S4_1* updates
    if (t >= 0.0 && S4_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S4_1.tStart = t;  // (not accounting for frame time here)
      S4_1.frameNStart = frameN;  // exact frame index
      
      S4_1.setAutoDraw(true);
    }

    
    // *spaceCont_2* updates
    if (t >= 0.0 && spaceCont_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceCont_2.tStart = t;  // (not accounting for frame time here)
      spaceCont_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spaceCont_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_2.clearEvents(); });
    }

    if (spaceCont_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = spaceCont_2.getKeys({keyList: ['space'], waitRelease: false});
      _spaceCont_2_allKeys = _spaceCont_2_allKeys.concat(theseKeys);
      if (_spaceCont_2_allKeys.length > 0) {
        spaceCont_2.keys = _spaceCont_2_allKeys[_spaceCont_2_allKeys.length - 1].name;  // just the last key pressed
        spaceCont_2.rt = _spaceCont_2_allKeys[_spaceCont_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *S1Text_1* updates
    if (t >= 0.0 && S1Text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S1Text_1.tStart = t;  // (not accounting for frame time here)
      S1Text_1.frameNStart = frameN;  // exact frame index
      
      S1Text_1.setAutoDraw(true);
    }

    
    // *S2Text_1* updates
    if (t >= 0.0 && S2Text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S2Text_1.tStart = t;  // (not accounting for frame time here)
      S2Text_1.frameNStart = frameN;  // exact frame index
      
      S2Text_1.setAutoDraw(true);
    }

    
    // *S3Text_1* updates
    if (t >= 0.0 && S3Text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S3Text_1.tStart = t;  // (not accounting for frame time here)
      S3Text_1.frameNStart = frameN;  // exact frame index
      
      S3Text_1.setAutoDraw(true);
    }

    
    // *S4Text_1* updates
    if (t >= 0.0 && S4Text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S4Text_1.tStart = t;  // (not accounting for frame time here)
      S4Text_1.frameNStart = frameN;  // exact frame index
      
      S4Text_1.setAutoDraw(true);
    }

    
    // *spaceContText_2* updates
    if (t >= 0.0 && spaceContText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceContText_2.tStart = t;  // (not accounting for frame time here)
      spaceContText_2.frameNStart = frameN;  // exact frame index
      
      spaceContText_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pracBlockInstComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pracBlockInstRoutineEnd() {
  return async function () {
    //------Ending Routine 'pracBlockInst'-------
    for (const thisComponent of pracBlockInstComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    spaceCont_2.stop();
    // the Routine "pracBlockInst" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var startTime;
var countdownComponents;
function countdownRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'countdown'-------
    t = 0;
    countdownClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    startTime = new Date();
    countdownText.text = ''
    // keep track of which components have finished
    countdownComponents = [];
    countdownComponents.push(countdownText);
    
    for (const thisComponent of countdownComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var leftTime;
var timeelapsed;
function countdownRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'countdown'-------
    // get current time
    t = countdownClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *countdownText* updates
    if (t >= 0.0 && countdownText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      countdownText.tStart = t;  // (not accounting for frame time here)
      countdownText.frameNStart = frameN;  // exact frame index
      
      countdownText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (countdownText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      countdownText.setAutoDraw(false);
    }
    
    if (countdownText.status === PsychoJS.Status.STARTED){ // only update if being drawn
      countdownText.setText('', false);
    }
    leftTime = new Date();
    timeelapsed = (startTime - leftTime)/1000
    countdownText.text = Math.round(3+timeelapsed)
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of countdownComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function countdownRoutineEnd() {
  return async function () {
    //------Ending Routine 'countdown'-------
    for (const thisComponent of countdownComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _pracChoiceKey_allKeys;
var pracChoiceComponents;
function pracChoiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pracChoice'-------
    t = 0;
    pracChoiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    S1_2.setPos(s1pos);
    S2_2.setPos(s2pos);
    S3_2.setPos(s3pos);
    S4_2.setPos(s4pos);
    pracChoiceKey.keys = undefined;
    pracChoiceKey.rt = undefined;
    _pracChoiceKey_allKeys = [];
    pracTrialCounter.setText(("Current Trial: " + pracTrialNum.toString()));
    pracPoints_Choice.setText(("Current Points: " + pracPoints.toString()));
    // keep track of which components have finished
    pracChoiceComponents = [];
    pracChoiceComponents.push(S1_2);
    pracChoiceComponents.push(S2_2);
    pracChoiceComponents.push(S3_2);
    pracChoiceComponents.push(S4_2);
    pracChoiceComponents.push(pracChoiceKey);
    pracChoiceComponents.push(pracTrialCounter);
    pracChoiceComponents.push(pracPoints_Choice);
    
    for (const thisComponent of pracChoiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pracChoiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pracChoice'-------
    // get current time
    t = pracChoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *S1_2* updates
    if (t >= 0.0 && S1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S1_2.tStart = t;  // (not accounting for frame time here)
      S1_2.frameNStart = frameN;  // exact frame index
      
      S1_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S1_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S1_2.setAutoDraw(false);
    }
    
    // *S2_2* updates
    if (t >= 0.0 && S2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S2_2.tStart = t;  // (not accounting for frame time here)
      S2_2.frameNStart = frameN;  // exact frame index
      
      S2_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S2_2.setAutoDraw(false);
    }
    
    // *S3_2* updates
    if (t >= 0.0 && S3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S3_2.tStart = t;  // (not accounting for frame time here)
      S3_2.frameNStart = frameN;  // exact frame index
      
      S3_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S3_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S3_2.setAutoDraw(false);
    }
    
    // *S4_2* updates
    if (t >= 0.0 && S4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S4_2.tStart = t;  // (not accounting for frame time here)
      S4_2.frameNStart = frameN;  // exact frame index
      
      S4_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S4_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S4_2.setAutoDraw(false);
    }
    
    // *pracChoiceKey* updates
    if (t >= 0.0 && pracChoiceKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracChoiceKey.tStart = t;  // (not accounting for frame time here)
      pracChoiceKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pracChoiceKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pracChoiceKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pracChoiceKey.clearEvents(); });
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pracChoiceKey.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pracChoiceKey.status = PsychoJS.Status.FINISHED;
  }

    if (pracChoiceKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = pracChoiceKey.getKeys({keyList: ['r', 'i', 'f', 'j'], waitRelease: false});
      _pracChoiceKey_allKeys = _pracChoiceKey_allKeys.concat(theseKeys);
      if (_pracChoiceKey_allKeys.length > 0) {
        pracChoiceKey.keys = _pracChoiceKey_allKeys[_pracChoiceKey_allKeys.length - 1].name;  // just the last key pressed
        pracChoiceKey.rt = _pracChoiceKey_allKeys[_pracChoiceKey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *pracTrialCounter* updates
    if (t >= 0.0 && pracTrialCounter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracTrialCounter.tStart = t;  // (not accounting for frame time here)
      pracTrialCounter.frameNStart = frameN;  // exact frame index
      
      pracTrialCounter.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pracTrialCounter.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pracTrialCounter.setAutoDraw(false);
    }
    
    // *pracPoints_Choice* updates
    if (t >= 0.0 && pracPoints_Choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracPoints_Choice.tStart = t;  // (not accounting for frame time here)
      pracPoints_Choice.frameNStart = frameN;  // exact frame index
      
      pracPoints_Choice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pracPoints_Choice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pracPoints_Choice.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pracChoiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pracChoiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'pracChoice'-------
    for (const thisComponent of pracChoiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    pracChoiceKey.stop();
    return Scheduler.Event.NEXT;
  };
}


var textCol;
var textSize;
var selectPos;
var feedbackPos;
var sq;
var feedback;
var pracSelectComponents;
function pracSelectRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pracSelect'-------
    t = 0;
    pracSelectClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.300000);
    // update component parameters for each repeat
    textCol = [1, 1, 1];
    textSize = 0.05;
    
    pracSelectOutline_1.setFillColor(undefined) 
    
    if ((pracChoiceKey.keys === "r")) {
        selectPos = [(- 0.1), 0.1];
        feedbackPos = [(- 0.1), 0.1];
        sq = util.index(squarePos, selectPos);
        feedback = ("square" + (sq + 1).toString());
    } else {
        if ((pracChoiceKey.keys === "i")) {
            selectPos = [0.1, 0.1];
            feedbackPos = [0.1, 0.1];
            sq = util.index(squarePos, selectPos);
            feedback = ("square" + (sq + 1).toString());
        } else {
            if ((pracChoiceKey.keys === "f")) {
                selectPos = [(- 0.1), (- 0.1)];
                feedbackPos = [(- 0.1), (- 0.1)];
                sq = util.index(squarePos, selectPos);
                feedback = ("square" + (sq + 1).toString());
            } else {
                if ((pracChoiceKey.keys === "j")) {
                    selectPos = [0.1, (- 0.1)];
                    feedbackPos = [0.1, (- 0.1)];
                    sq = util.index(squarePos, selectPos);
                    feedback = ("square" + (sq + 1).toString());
                } else {
                    selectPos = [(- 10), (- 10)];
                    feedbackPos = [0, 0];
                    feedback = "invalid";
                }
            }
        }
    }
    
    S1_3.setPos(s1pos);
    S2_3.setPos(s2pos);
    S3_3.setPos(s3pos);
    S4_3.setPos(s4pos);
    pracTrialCounter_2.setText(("Current Trial: " + pracTrialNum.toString()));
    pracPointsTotal_2.setText(("Current Points: " + pracPoints.toString()));
    pracSelectOutline_1.setPos(selectPos);
    // keep track of which components have finished
    pracSelectComponents = [];
    pracSelectComponents.push(S1_3);
    pracSelectComponents.push(S2_3);
    pracSelectComponents.push(S3_3);
    pracSelectComponents.push(S4_3);
    pracSelectComponents.push(pracTrialCounter_2);
    pracSelectComponents.push(pracPointsTotal_2);
    pracSelectComponents.push(pracSelectOutline_1);
    
    for (const thisComponent of pracSelectComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pracSelectRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pracSelect'-------
    // get current time
    t = pracSelectClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *S1_3* updates
    if (t >= 0.0 && S1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S1_3.tStart = t;  // (not accounting for frame time here)
      S1_3.frameNStart = frameN;  // exact frame index
      
      S1_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S1_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S1_3.setAutoDraw(false);
    }
    
    // *S2_3* updates
    if (t >= 0.0 && S2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S2_3.tStart = t;  // (not accounting for frame time here)
      S2_3.frameNStart = frameN;  // exact frame index
      
      S2_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S2_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S2_3.setAutoDraw(false);
    }
    
    // *S3_3* updates
    if (t >= 0.0 && S3_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S3_3.tStart = t;  // (not accounting for frame time here)
      S3_3.frameNStart = frameN;  // exact frame index
      
      S3_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S3_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S3_3.setAutoDraw(false);
    }
    
    // *S4_3* updates
    if (t >= 0.0 && S4_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S4_3.tStart = t;  // (not accounting for frame time here)
      S4_3.frameNStart = frameN;  // exact frame index
      
      S4_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S4_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S4_3.setAutoDraw(false);
    }
    
    // *pracTrialCounter_2* updates
    if (t >= 0.0 && pracTrialCounter_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracTrialCounter_2.tStart = t;  // (not accounting for frame time here)
      pracTrialCounter_2.frameNStart = frameN;  // exact frame index
      
      pracTrialCounter_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pracTrialCounter_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pracTrialCounter_2.setAutoDraw(false);
    }
    
    // *pracPointsTotal_2* updates
    if (t >= 0.0 && pracPointsTotal_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracPointsTotal_2.tStart = t;  // (not accounting for frame time here)
      pracPointsTotal_2.frameNStart = frameN;  // exact frame index
      
      pracPointsTotal_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pracPointsTotal_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pracPointsTotal_2.setAutoDraw(false);
    }
    
    // *pracSelectOutline_1* updates
    if (t >= 0.0 && pracSelectOutline_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracSelectOutline_1.tStart = t;  // (not accounting for frame time here)
      pracSelectOutline_1.frameNStart = frameN;  // exact frame index
      
      pracSelectOutline_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pracSelectOutline_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pracSelectOutline_1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pracSelectComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pracSelectRoutineEnd() {
  return async function () {
    //------Ending Routine 'pracSelect'-------
    for (const thisComponent of pracSelectComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var pracFeedComponents;
function pracFeedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pracFeed'-------
    t = 0;
    pracFeedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.750000);
    // update component parameters for each repeat
    S1_4.setPos(s1pos);
    S2_4.setPos(s2pos);
    S3_4.setPos(s3pos);
    S4_4.setPos(s4pos);
    pracSelectOutline_2.setPos(selectPos);
    pracPointsTotal_3.setColor(new util.Color('white'));
    pracPointsTotal_3.setText(("Current Points: " + pracPoints.toString()));
    pracPointsTotal_3.setHeight(0.05);
    pracTrialCounter_3.setText(("Current Trial: " + pracTrialNum.toString()));
    pracPointFeedbackText.setColor(new util.Color(textCol));
    pracPointFeedbackText.setPos(feedbackPos);
    pracPointFeedbackText.setText(eval(feedback).toString());
    pracPointFeedbackText.setHeight(textSize);
    pracSelectOutline_2.setFillColor(undefined);
    
    // keep track of which components have finished
    pracFeedComponents = [];
    pracFeedComponents.push(S1_4);
    pracFeedComponents.push(S2_4);
    pracFeedComponents.push(S3_4);
    pracFeedComponents.push(S4_4);
    pracFeedComponents.push(pracSelectOutline_2);
    pracFeedComponents.push(pracPointsTotal_3);
    pracFeedComponents.push(pracTrialCounter_3);
    pracFeedComponents.push(pracPointFeedbackText);
    
    for (const thisComponent of pracFeedComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pracFeedRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pracFeed'-------
    // get current time
    t = pracFeedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *S1_4* updates
    if (t >= 0.0 && S1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S1_4.tStart = t;  // (not accounting for frame time here)
      S1_4.frameNStart = frameN;  // exact frame index
      
      S1_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S1_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S1_4.setAutoDraw(false);
    }
    
    // *S2_4* updates
    if (t >= 0.0 && S2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S2_4.tStart = t;  // (not accounting for frame time here)
      S2_4.frameNStart = frameN;  // exact frame index
      
      S2_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S2_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S2_4.setAutoDraw(false);
    }
    
    // *S3_4* updates
    if (t >= 0.0 && S3_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S3_4.tStart = t;  // (not accounting for frame time here)
      S3_4.frameNStart = frameN;  // exact frame index
      
      S3_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S3_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S3_4.setAutoDraw(false);
    }
    
    // *S4_4* updates
    if (t >= 0.0 && S4_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S4_4.tStart = t;  // (not accounting for frame time here)
      S4_4.frameNStart = frameN;  // exact frame index
      
      S4_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S4_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S4_4.setAutoDraw(false);
    }
    
    // *pracSelectOutline_2* updates
    if (t >= 0.0 && pracSelectOutline_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracSelectOutline_2.tStart = t;  // (not accounting for frame time here)
      pracSelectOutline_2.frameNStart = frameN;  // exact frame index
      
      pracSelectOutline_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pracSelectOutline_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pracSelectOutline_2.setAutoDraw(false);
    }
    
    // *pracPointsTotal_3* updates
    if (t >= 0.0 && pracPointsTotal_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracPointsTotal_3.tStart = t;  // (not accounting for frame time here)
      pracPointsTotal_3.frameNStart = frameN;  // exact frame index
      
      pracPointsTotal_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pracPointsTotal_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pracPointsTotal_3.setAutoDraw(false);
    }
    
    if (pracPointsTotal_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      pracPointsTotal_3.setPos(pointPosition, false);
    }
    
    // *pracTrialCounter_3* updates
    if (t >= 0.0 && pracTrialCounter_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracTrialCounter_3.tStart = t;  // (not accounting for frame time here)
      pracTrialCounter_3.frameNStart = frameN;  // exact frame index
      
      pracTrialCounter_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pracTrialCounter_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pracTrialCounter_3.setAutoDraw(false);
    }
    
    // *pracPointFeedbackText* updates
    if (t >= 0.0 && pracPointFeedbackText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracPointFeedbackText.tStart = t;  // (not accounting for frame time here)
      pracPointFeedbackText.frameNStart = frameN;  // exact frame index
      
      pracPointFeedbackText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pracPointFeedbackText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pracPointFeedbackText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pracFeedComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pracFeedRoutineEnd() {
  return async function () {
    //------Ending Routine 'pracFeed'-------
    for (const thisComponent of pracFeedComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var pracUpdateComponents;
function pracUpdateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pracUpdate'-------
    t = 0;
    pracUpdateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    if ((feedback !== "invalid")) {
        pracPoints += eval(feedback);
        psychoJS.experiment.addData("currPoints", eval(feedback));
    } else {
        psychoJS.experiment.addData("currPoints", "None");
    }
    psychoJS.experiment.addData("totalPoints", pracPoints);
    psychoJS.experiment.addData("trialBlock", "prac");
    psychoJS.experiment.addData("square", feedback);
    pracTrialNum = (pracTrialNum + 1);
    
    // for (let i = 0; i < 3; i++) {
    //    const pick = getRandomInt(i+1,3);
    //    [squarePos[i], squarePos[pick]] = [squarePos[pick], squarePos[i]];
    //}
    
    //s1pos = squarePos[0];
    //s2pos = squarePos[1];
    //s3pos = squarePos[2];
    //s4pos = squarePos[3];
    
    // keep track of which components have finished
    pracUpdateComponents = [];
    
    for (const thisComponent of pracUpdateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pracUpdateRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pracUpdate'-------
    // get current time
    t = pracUpdateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pracUpdateComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pracUpdateRoutineEnd() {
  return async function () {
    //------Ending Routine 'pracUpdate'-------
    for (const thisComponent of pracUpdateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "pracUpdate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _spaceCont_3_allKeys;
var pracBlockCompleteComponents;
function pracBlockCompleteRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pracBlockComplete'-------
    t = 0;
    pracBlockCompleteClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    spaceCont_3.keys = undefined;
    spaceCont_3.rt = undefined;
    _spaceCont_3_allKeys = [];
    // keep track of which components have finished
    pracBlockCompleteComponents = [];
    pracBlockCompleteComponents.push(pracCompleteText);
    pracBlockCompleteComponents.push(spaceCont_3);
    
    for (const thisComponent of pracBlockCompleteComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pracBlockCompleteRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pracBlockComplete'-------
    // get current time
    t = pracBlockCompleteClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pracCompleteText* updates
    if (t >= 0.0 && pracCompleteText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracCompleteText.tStart = t;  // (not accounting for frame time here)
      pracCompleteText.frameNStart = frameN;  // exact frame index
      
      pracCompleteText.setAutoDraw(true);
    }

    
    // *spaceCont_3* updates
    if (t >= 0.0 && spaceCont_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceCont_3.tStart = t;  // (not accounting for frame time here)
      spaceCont_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spaceCont_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_3.clearEvents(); });
    }

    if (spaceCont_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = spaceCont_3.getKeys({keyList: ['space'], waitRelease: false});
      _spaceCont_3_allKeys = _spaceCont_3_allKeys.concat(theseKeys);
      if (_spaceCont_3_allKeys.length > 0) {
        spaceCont_3.keys = _spaceCont_3_allKeys[_spaceCont_3_allKeys.length - 1].name;  // just the last key pressed
        spaceCont_3.rt = _spaceCont_3_allKeys[_spaceCont_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pracBlockCompleteComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pracBlockCompleteRoutineEnd() {
  return async function () {
    //------Ending Routine 'pracBlockComplete'-------
    for (const thisComponent of pracBlockCompleteComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    spaceCont_3.stop();
    // the Routine "pracBlockComplete" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var firstCond;
var volEnviro;
var conds;
var condTxt;
var s1_col;
var s2_col;
var s3_col;
var s4_col;
var _spaceCont_allKeys;
var rewardSetUpComponents;
function rewardSetUpRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'rewardSetUp'-------
    t = 0;
    rewardSetUpClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    firstCond = true;
    
    if ((startVal === 0)) {
        volEnviro = false;
        if ((expVal === 1)) {
            stationary = false;
            conds = "conditions/nonstat_conds_win.csv";
            condTxt = "In this environment, the best option (the option which gives the most amount of points) will change throughout a block. There will be a total of 3 blocks with 100 trials each.";
            numBlocks = 3;
            } else {
        if ((expVal === 2)) {
            stationary = true;
            conds = "conditions/stat_conds_win.csv";
            condTxt = "In this environment, the best option (the option which gives the most amount of points on AVERAGE) will stay consistent across a block. Of course, there will be some variation in the points given by an option (the points given by an option will go up and down slightly on a trial by trial basis).  There will be a total of 6 blocks with 50 trials each.";
            numBlocks = 6;
                   }
        }
    } else {
        volEnviro = true;
        stationary = false
        conds = "conditions/vol_conds_win.csv";
        condTxt = "In this environment, the best option (the option which gives the most amount of points) will change suddenly  throughout a block. There will be a total of 3 blocks with 100 trials each.";
        numBlocks = 3;
        
    }
    
    s1_col = "#44AA99";
    s2_col = "#882255";
    s3_col = "#332288";
    s4_col = "#DDCC77";
    
    //const generateRewards = () => {
    //    const mean = 0;
    //    const stdev = 1;
    //    const arms = 4;
    //    const decay = 0.1;
    //
    //    let means;
    //    let walkSize;
    //    let noise;
    //
    //    // https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
    //    // Standard Normal variate using Box-Muller transform.
    //    function gaussianRandom(mean=0, stdev=1) {
    //        const u = 1 - Math.random(); // Converting [0,1) to (0,1]
    //        const v = Math.random();
    //        const z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    //        // Transform to the desired mean and standard deviation:
    //        return z * stdev + mean;
    //    }
    //
    //    function reset() {
    //        means = new Array(arms).fill(0).map(() => gaussianRandom());
    //        means = updateArms();
    //        return means
    //    }
    //
    //    function updateArms() {
    //        for (let i=0; i<arms; i++) {
    //            walkSize = gaussianRandom();
    //            means[i] += walkSize * decay;
    //        }
    //        return means;
    //    }
    //
    //    function getAllRewards(trials, means) {
    //        let trueRewards = new Array(trials).fill(0).map(() => new Array(arms).fill(0));
    //        for (let trial=0; trial<trials; trial++) {
    //            if (!stationary) {
    //                updateArms();
    //            }
    //        for (let i=0; i<arms; i++) {
    //            if (stationary) {
    //                noise = gaussianRandom(stdev=0.05);
    //            } else {
    //                noise = 0;
    //            }
    //            trueRewards[trial][i] += means[i]
    //            trueRewards[trial][i] = Math.floor(trueRewards[trial][i] * 10)
    //            }
    //        }
    //        return trueRewards;
    //    }
    //
    //    means = reset();
    //    let rewards = getAllRewards(5, means);
    //    return rewards;
    //}
    //
    //rewardsList = generateRewards();
    spaceCont.keys = undefined;
    spaceCont.rt = undefined;
    _spaceCont_allKeys = [];
    summaryText.setText(condTxt);
    // keep track of which components have finished
    rewardSetUpComponents = [];
    rewardSetUpComponents.push(spaceContText);
    rewardSetUpComponents.push(spaceCont);
    rewardSetUpComponents.push(summaryText);
    
    for (const thisComponent of rewardSetUpComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rewardSetUpRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'rewardSetUp'-------
    // get current time
    t = rewardSetUpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *spaceContText* updates
    if (t >= 0.0 && spaceContText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceContText.tStart = t;  // (not accounting for frame time here)
      spaceContText.frameNStart = frameN;  // exact frame index
      
      spaceContText.setAutoDraw(true);
    }

    
    // *spaceCont* updates
    if (t >= 0.0 && spaceCont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceCont.tStart = t;  // (not accounting for frame time here)
      spaceCont.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spaceCont.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spaceCont.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spaceCont.clearEvents(); });
    }

    if (spaceCont.status === PsychoJS.Status.STARTED) {
      let theseKeys = spaceCont.getKeys({keyList: ['space'], waitRelease: false});
      _spaceCont_allKeys = _spaceCont_allKeys.concat(theseKeys);
      if (_spaceCont_allKeys.length > 0) {
        spaceCont.keys = _spaceCont_allKeys[_spaceCont_allKeys.length - 1].name;  // just the last key pressed
        spaceCont.rt = _spaceCont_allKeys[_spaceCont_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *summaryText* updates
    if (t >= 0.0 && summaryText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      summaryText.tStart = t;  // (not accounting for frame time here)
      summaryText.frameNStart = frameN;  // exact frame index
      
      summaryText.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rewardSetUpComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rewardSetUpRoutineEnd() {
  return async function () {
    //------Ending Routine 'rewardSetUp'-------
    for (const thisComponent of rewardSetUpComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    spaceCont.stop();
    // the Routine "rewardSetUp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _spaceCont_4_allKeys;
var points;
var trialNum;
var blockIntroText;
var realBlockInstrComponents;
function realBlockInstrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'realBlockInstr'-------
    t = 0;
    realBlockInstrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    spaceCont_4.keys = undefined;
    spaceCont_4.rt = undefined;
    _spaceCont_4_allKeys = [];
    points = 0;
    trialNum = 1;
    psychoJS.experiment.addData("conditionsFile", cond_file);
    
    if ((volEnviro === true)) {
        blockIntroText = `In this environment, the best option (that gives the most points) WILL CHANGE SUDDENLY across a block.`;
    } else {
        if ((expVal === 1)) {
            blockIntroText = `In this environment, the best option (that gives the most points) WILL CHANGE throughout a block.`;
        } else {
            blockIntroText = `In this environment, the best option (that gives the most points) WILL STAY CONSISTENT across a block.`;
        }
    }
    
    ReminderBlock.setText(blockIntroText);
    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    for (let i = 0; i < 3; i++) {
        const pick = getRandomInt(i+1,3);
        [squarePos[i], squarePos[pick]] = [squarePos[pick], squarePos[i]];
    }
    s1pos = squarePos[0];
    s2pos = squarePos[1];
    s3pos = squarePos[2];
    s4pos = squarePos[3];
    // keep track of which components have finished
    realBlockInstrComponents = [];
    realBlockInstrComponents.push(instr);
    realBlockInstrComponents.push(S1_5);
    realBlockInstrComponents.push(S2_5);
    realBlockInstrComponents.push(S3_5);
    realBlockInstrComponents.push(S4_5);
    realBlockInstrComponents.push(spaceCont_4);
    realBlockInstrComponents.push(S1Key_5);
    realBlockInstrComponents.push(S2Key_5);
    realBlockInstrComponents.push(S3Key_5);
    realBlockInstrComponents.push(S4Key_5);
    realBlockInstrComponents.push(spaceContText_3);
    realBlockInstrComponents.push(ReminderBlock);
    
    for (const thisComponent of realBlockInstrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function realBlockInstrRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'realBlockInstr'-------
    // get current time
    t = realBlockInstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr* updates
    if (t >= 0.0 && instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr.tStart = t;  // (not accounting for frame time here)
      instr.frameNStart = frameN;  // exact frame index
      
      instr.setAutoDraw(true);
    }

    
    // *S1_5* updates
    if (t >= 0.0 && S1_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S1_5.tStart = t;  // (not accounting for frame time here)
      S1_5.frameNStart = frameN;  // exact frame index
      
      S1_5.setAutoDraw(true);
    }

    
    // *S2_5* updates
    if (t >= 0.0 && S2_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S2_5.tStart = t;  // (not accounting for frame time here)
      S2_5.frameNStart = frameN;  // exact frame index
      
      S2_5.setAutoDraw(true);
    }

    
    // *S3_5* updates
    if (t >= 0.0 && S3_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S3_5.tStart = t;  // (not accounting for frame time here)
      S3_5.frameNStart = frameN;  // exact frame index
      
      S3_5.setAutoDraw(true);
    }

    
    // *S4_5* updates
    if (t >= 0.0 && S4_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S4_5.tStart = t;  // (not accounting for frame time here)
      S4_5.frameNStart = frameN;  // exact frame index
      
      S4_5.setAutoDraw(true);
    }

    
    // *spaceCont_4* updates
    if (t >= 0.0 && spaceCont_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceCont_4.tStart = t;  // (not accounting for frame time here)
      spaceCont_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spaceCont_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_4.clearEvents(); });
    }

    if (spaceCont_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = spaceCont_4.getKeys({keyList: ['space'], waitRelease: false});
      _spaceCont_4_allKeys = _spaceCont_4_allKeys.concat(theseKeys);
      if (_spaceCont_4_allKeys.length > 0) {
        spaceCont_4.keys = _spaceCont_4_allKeys[_spaceCont_4_allKeys.length - 1].name;  // just the last key pressed
        spaceCont_4.rt = _spaceCont_4_allKeys[_spaceCont_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *S1Key_5* updates
    if (t >= 0.0 && S1Key_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S1Key_5.tStart = t;  // (not accounting for frame time here)
      S1Key_5.frameNStart = frameN;  // exact frame index
      
      S1Key_5.setAutoDraw(true);
    }

    
    // *S2Key_5* updates
    if (t >= 0.0 && S2Key_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S2Key_5.tStart = t;  // (not accounting for frame time here)
      S2Key_5.frameNStart = frameN;  // exact frame index
      
      S2Key_5.setAutoDraw(true);
    }

    
    // *S3Key_5* updates
    if (t >= 0.0 && S3Key_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S3Key_5.tStart = t;  // (not accounting for frame time here)
      S3Key_5.frameNStart = frameN;  // exact frame index
      
      S3Key_5.setAutoDraw(true);
    }

    
    // *S4Key_5* updates
    if (t >= 0.0 && S4Key_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S4Key_5.tStart = t;  // (not accounting for frame time here)
      S4Key_5.frameNStart = frameN;  // exact frame index
      
      S4Key_5.setAutoDraw(true);
    }

    
    // *spaceContText_3* updates
    if (t >= 0.0 && spaceContText_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceContText_3.tStart = t;  // (not accounting for frame time here)
      spaceContText_3.frameNStart = frameN;  // exact frame index
      
      spaceContText_3.setAutoDraw(true);
    }

    
    // *ReminderBlock* updates
    if (t >= 0.0 && ReminderBlock.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ReminderBlock.tStart = t;  // (not accounting for frame time here)
      ReminderBlock.frameNStart = frameN;  // exact frame index
      
      ReminderBlock.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of realBlockInstrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function realBlockInstrRoutineEnd() {
  return async function () {
    //------Ending Routine 'realBlockInstr'-------
    for (const thisComponent of realBlockInstrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    spaceCont_4.stop();
    // the Routine "realBlockInstr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _choiceKey_allKeys;
var realChoiceComponents;
function realChoiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'realChoice'-------
    t = 0;
    realChoiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    S1_6.setFillColor(new util.Color(s1_col));
    S1_6.setPos(s1pos);
    S2_6.setFillColor(new util.Color(s2_col));
    S2_6.setPos(s2pos);
    S3_6.setFillColor(new util.Color(s3_col));
    S3_6.setPos(s3pos);
    S4_6.setFillColor(new util.Color(s4_col));
    S4_6.setPos(s4pos);
    choiceKey.keys = undefined;
    choiceKey.rt = undefined;
    _choiceKey_allKeys = [];
    trialCounter_1.setText(("Current Trial: " + trialNum.toString()));
    pointsTotal_1.setText(("Current Points: " + points.toString()));
    blockCounter_1.setText(("Current Block: " + currentBlock.toString()));
    // keep track of which components have finished
    realChoiceComponents = [];
    realChoiceComponents.push(S1_6);
    realChoiceComponents.push(S2_6);
    realChoiceComponents.push(S3_6);
    realChoiceComponents.push(S4_6);
    realChoiceComponents.push(choiceKey);
    realChoiceComponents.push(trialCounter_1);
    realChoiceComponents.push(pointsTotal_1);
    realChoiceComponents.push(blockCounter_1);
    
    for (const thisComponent of realChoiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function realChoiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'realChoice'-------
    // get current time
    t = realChoiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *S1_6* updates
    if (t >= 0.0 && S1_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S1_6.tStart = t;  // (not accounting for frame time here)
      S1_6.frameNStart = frameN;  // exact frame index
      
      S1_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S1_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S1_6.setAutoDraw(false);
    }
    
    // *S2_6* updates
    if (t >= 0.0 && S2_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S2_6.tStart = t;  // (not accounting for frame time here)
      S2_6.frameNStart = frameN;  // exact frame index
      
      S2_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S2_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S2_6.setAutoDraw(false);
    }
    
    // *S3_6* updates
    if (t >= 0.0 && S3_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S3_6.tStart = t;  // (not accounting for frame time here)
      S3_6.frameNStart = frameN;  // exact frame index
      
      S3_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S3_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S3_6.setAutoDraw(false);
    }
    
    // *S4_6* updates
    if (t >= 0.0 && S4_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S4_6.tStart = t;  // (not accounting for frame time here)
      S4_6.frameNStart = frameN;  // exact frame index
      
      S4_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S4_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S4_6.setAutoDraw(false);
    }
    
    // *choiceKey* updates
    if (t >= 0.0 && choiceKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choiceKey.tStart = t;  // (not accounting for frame time here)
      choiceKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { choiceKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { choiceKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { choiceKey.clearEvents(); });
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (choiceKey.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      choiceKey.status = PsychoJS.Status.FINISHED;
  }

    if (choiceKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = choiceKey.getKeys({keyList: ['r', 'i', 'f', 'j'], waitRelease: false});
      _choiceKey_allKeys = _choiceKey_allKeys.concat(theseKeys);
      if (_choiceKey_allKeys.length > 0) {
        choiceKey.keys = _choiceKey_allKeys[0].name;  // just the first key pressed
        choiceKey.rt = _choiceKey_allKeys[0].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *trialCounter_1* updates
    if (t >= 0.0 && trialCounter_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialCounter_1.tStart = t;  // (not accounting for frame time here)
      trialCounter_1.frameNStart = frameN;  // exact frame index
      
      trialCounter_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialCounter_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialCounter_1.setAutoDraw(false);
    }
    
    // *pointsTotal_1* updates
    if (t >= 0.0 && pointsTotal_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pointsTotal_1.tStart = t;  // (not accounting for frame time here)
      pointsTotal_1.frameNStart = frameN;  // exact frame index
      
      pointsTotal_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pointsTotal_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pointsTotal_1.setAutoDraw(false);
    }
    
    // *blockCounter_1* updates
    if (t >= 0.0 && blockCounter_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blockCounter_1.tStart = t;  // (not accounting for frame time here)
      blockCounter_1.frameNStart = frameN;  // exact frame index
      
      blockCounter_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blockCounter_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blockCounter_1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of realChoiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function realChoiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'realChoice'-------
    for (const thisComponent of realChoiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(choiceKey.corr, level);
    }
    psychoJS.experiment.addData('choiceKey.keys', choiceKey.keys);
    if (typeof choiceKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('choiceKey.rt', choiceKey.rt);
        routineTimer.reset();
        }
    
    choiceKey.stop();
    return Scheduler.Event.NEXT;
  };
}


var feedbackPoints;
var realSelectComponents;
function realSelectRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'realSelect'-------
    t = 0;
    realSelectClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.300000);
    // update component parameters for each repeat
    textCol = [1, 1, 1];
    textSize = 0.05;
    selectOutline_1.setFillColor(undefined);
    if ((choiceKey.keys === "r")) {
        selectPos = [(- 0.1), 0.1];
        feedbackPos = [(- 0.1), 0.1];
        sq = util.index(squarePos, selectPos);
        feedback = ("square" + (sq + 1).toString());
    } else {
        if ((choiceKey.keys === "i")) {
            selectPos = [0.1, 0.1];
            feedbackPos = [0.1, 0.1];
            sq = util.index(squarePos, selectPos);
            feedback = ("square" + (sq + 1).toString());
        } else {
            if ((choiceKey.keys === "f")) {
                selectPos = [(- 0.1), (- 0.1)];
                feedbackPos = [(- 0.1), (- 0.1)];
                sq = util.index(squarePos, selectPos);
                feedback = ("square" + (sq + 1).toString());
            } else {
                if ((choiceKey.keys === "j")) {
                    selectPos = [0.1, (- 0.1)];
                    feedbackPos = [0.1, (- 0.1)];
                    sq = util.index(squarePos, selectPos);
                    feedback = ("square" + (sq + 1).toString());
                } else {
                    selectPos = [(- 10), (- 10)];
                    feedbackPos = [0, 0];
                    feedback = "invalid";
                }
            }
        }
    }
    
    if (feedback != "invalid") {
        feedbackPoints = util.round(eval(feedback));
    } else {
        feedbackPoints = eval(feedback).toString();
    }
    S1_7.setFillColor(new util.Color(s1_col));
    S1_7.setPos(s1pos);
    S2_7.setFillColor(new util.Color(s2_col));
    S2_7.setPos(s2pos);
    S3_7.setFillColor(new util.Color(s3_col));
    S3_7.setPos(s3pos);
    S4_7.setFillColor(new util.Color(s4_col));
    S4_7.setPos(s4pos);
    trialCounter_2.setText(("Current Trial: " + trialNum.toString()));
    pointsTotal_2.setText(("Current Points: " + points.toString()));
    blockCounter_2.setText(("Current Block: " + currentBlock.toString()));
    selectOutline_1.setPos(selectPos);
    // keep track of which components have finished
    realSelectComponents = [];
    realSelectComponents.push(S1_7);
    realSelectComponents.push(S2_7);
    realSelectComponents.push(S3_7);
    realSelectComponents.push(S4_7);
    realSelectComponents.push(trialCounter_2);
    realSelectComponents.push(pointsTotal_2);
    realSelectComponents.push(blockCounter_2);
    realSelectComponents.push(selectOutline_1);
    
    for (const thisComponent of realSelectComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function realSelectRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'realSelect'-------
    // get current time
    t = realSelectClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *S1_7* updates
    if (t >= 0.0 && S1_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S1_7.tStart = t;  // (not accounting for frame time here)
      S1_7.frameNStart = frameN;  // exact frame index
      
      S1_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S1_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S1_7.setAutoDraw(false);
    }
    
    // *S2_7* updates
    if (t >= 0.0 && S2_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S2_7.tStart = t;  // (not accounting for frame time here)
      S2_7.frameNStart = frameN;  // exact frame index
      
      S2_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S2_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S2_7.setAutoDraw(false);
    }
    
    // *S3_7* updates
    if (t >= 0.0 && S3_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S3_7.tStart = t;  // (not accounting for frame time here)
      S3_7.frameNStart = frameN;  // exact frame index
      
      S3_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S3_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S3_7.setAutoDraw(false);
    }
    
    // *S4_7* updates
    if (t >= 0.0 && S4_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S4_7.tStart = t;  // (not accounting for frame time here)
      S4_7.frameNStart = frameN;  // exact frame index
      
      S4_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S4_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S4_7.setAutoDraw(false);
    }
    
    // *trialCounter_2* updates
    if (t >= 0.0 && trialCounter_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialCounter_2.tStart = t;  // (not accounting for frame time here)
      trialCounter_2.frameNStart = frameN;  // exact frame index
      
      trialCounter_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialCounter_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialCounter_2.setAutoDraw(false);
    }
    
    // *pointsTotal_2* updates
    if (t >= 0.0 && pointsTotal_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pointsTotal_2.tStart = t;  // (not accounting for frame time here)
      pointsTotal_2.frameNStart = frameN;  // exact frame index
      
      pointsTotal_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pointsTotal_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pointsTotal_2.setAutoDraw(false);
    }
    
    // *blockCounter_2* updates
    if (t >= 0.0 && blockCounter_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blockCounter_2.tStart = t;  // (not accounting for frame time here)
      blockCounter_2.frameNStart = frameN;  // exact frame index
      
      blockCounter_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blockCounter_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blockCounter_2.setAutoDraw(false);
    }
    
    // *selectOutline_1* updates
    if (t >= 0.0 && selectOutline_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selectOutline_1.tStart = t;  // (not accounting for frame time here)
      selectOutline_1.frameNStart = frameN;  // exact frame index
      
      selectOutline_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (selectOutline_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      selectOutline_1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of realSelectComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function realSelectRoutineEnd() {
  return async function () {
    //------Ending Routine 'realSelect'-------
    for (const thisComponent of realSelectComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var realFeedComponents;
function realFeedRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'realFeed'-------
    t = 0;
    realFeedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.750000);
    // update component parameters for each repeat
    S1_8.setFillColor(new util.Color(s1_col));
    S1_8.setPos(s1pos);
    S2_8.setFillColor(new util.Color(s2_col));
    S2_8.setPos(s2pos);
    S3_8.setFillColor(new util.Color(s3_col));
    S3_8.setPos(s3pos);
    S4_8.setFillColor(new util.Color(s4_col));
    S4_8.setPos(s4pos);
    selectOutline_2.setPos(selectPos);
    pointsTotal_3.setColor(new util.Color('white'));
    pointsTotal_3.setText(("Current Points: " + points.toString()));
    pointsTotal_3.setHeight(0.05);
    trialCounter_3.setText(("Current Trial: " + trialNum.toString()));
    blockCounter_3.setText(("Current Block: " + currentBlock.toString()));
    pointFeedbackText.setColor(new util.Color(textCol));
    pointFeedbackText.setPos(feedbackPos);
    pointFeedbackText.setText(feedbackPoints.toString());
    pointFeedbackText.setHeight(textSize);
    selectOutline_2.setFillColor(undefined);
    
    // keep track of which components have finished
    realFeedComponents = [];
    realFeedComponents.push(S1_8);
    realFeedComponents.push(S2_8);
    realFeedComponents.push(S3_8);
    realFeedComponents.push(S4_8);
    realFeedComponents.push(selectOutline_2);
    realFeedComponents.push(pointsTotal_3);
    realFeedComponents.push(trialCounter_3);
    realFeedComponents.push(blockCounter_3);
    realFeedComponents.push(pointFeedbackText);
    
    for (const thisComponent of realFeedComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function realFeedRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'realFeed'-------
    // get current time
    t = realFeedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *S1_8* updates
    if (t >= 0.0 && S1_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S1_8.tStart = t;  // (not accounting for frame time here)
      S1_8.frameNStart = frameN;  // exact frame index
      
      S1_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S1_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S1_8.setAutoDraw(false);
    }
    
    // *S2_8* updates
    if (t >= 0.0 && S2_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S2_8.tStart = t;  // (not accounting for frame time here)
      S2_8.frameNStart = frameN;  // exact frame index
      
      S2_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S2_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S2_8.setAutoDraw(false);
    }
    
    // *S3_8* updates
    if (t >= 0.0 && S3_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S3_8.tStart = t;  // (not accounting for frame time here)
      S3_8.frameNStart = frameN;  // exact frame index
      
      S3_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S3_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S3_8.setAutoDraw(false);
    }
    
    // *S4_8* updates
    if (t >= 0.0 && S4_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S4_8.tStart = t;  // (not accounting for frame time here)
      S4_8.frameNStart = frameN;  // exact frame index
      
      S4_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (S4_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S4_8.setAutoDraw(false);
    }
    
    // *selectOutline_2* updates
    if (t >= 0.0 && selectOutline_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selectOutline_2.tStart = t;  // (not accounting for frame time here)
      selectOutline_2.frameNStart = frameN;  // exact frame index
      
      selectOutline_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (selectOutline_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      selectOutline_2.setAutoDraw(false);
    }
    
    // *pointsTotal_3* updates
    if (t >= 0.0 && pointsTotal_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pointsTotal_3.tStart = t;  // (not accounting for frame time here)
      pointsTotal_3.frameNStart = frameN;  // exact frame index
      
      pointsTotal_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pointsTotal_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pointsTotal_3.setAutoDraw(false);
    }
    
    if (pointsTotal_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      pointsTotal_3.setPos(pointPosition, false);
    }
    
    // *trialCounter_3* updates
    if (t >= 0.0 && trialCounter_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialCounter_3.tStart = t;  // (not accounting for frame time here)
      trialCounter_3.frameNStart = frameN;  // exact frame index
      
      trialCounter_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trialCounter_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trialCounter_3.setAutoDraw(false);
    }
    
    // *blockCounter_3* updates
    if (t >= 0.0 && blockCounter_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blockCounter_3.tStart = t;  // (not accounting for frame time here)
      blockCounter_3.frameNStart = frameN;  // exact frame index
      
      blockCounter_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blockCounter_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blockCounter_3.setAutoDraw(false);
    }
    
    // *pointFeedbackText* updates
    if (t >= 0.0 && pointFeedbackText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pointFeedbackText.tStart = t;  // (not accounting for frame time here)
      pointFeedbackText.frameNStart = frameN;  // exact frame index
      
      pointFeedbackText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pointFeedbackText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pointFeedbackText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of realFeedComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function realFeedRoutineEnd() {
  return async function () {
    //------Ending Routine 'realFeed'-------
    for (const thisComponent of realFeedComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var realUpdateComponents;
function realUpdateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'realUpdate'-------
    t = 0;
    realUpdateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    if ((feedback !== "invalid")) {
        points += feedbackPoints;
        psychoJS.experiment.addData("currPoints", feedbackPoints);
    } else {
        psychoJS.experiment.addData("currPoints", "None");
    }
    psychoJS.experiment.addData("totalPoints", points);
    psychoJS.experiment.addData("trialBlock", block);
    psychoJS.experiment.addData("square", feedback);
    trialNum += 1;
    
    //for (let i = 0; i < 3; i++) {
    //    const pick = getRandomInt(i+1,3);
    //    [squarePos[i], squarePos[pick]] = [squarePos[pick], squarePos[i]];
    //}
    //s1pos = squarePos[0];
    //s2pos = squarePos[1];
    //s3pos = squarePos[2];
    //s4pos = squarePos[3];
    
    // keep track of which components have finished
    realUpdateComponents = [];
    
    for (const thisComponent of realUpdateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function realUpdateRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'realUpdate'-------
    // get current time
    t = realUpdateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of realUpdateComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function realUpdateRoutineEnd() {
  return async function () {
    //------Ending Routine 'realUpdate'-------
    for (const thisComponent of realUpdateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "realUpdate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blocksLeft;
var blocksLeftText;
var _spaceCont_5_allKeys;
var blockUpdateComponents;
function blockUpdateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'blockUpdate'-------
    t = 0;
    blockUpdateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    blocksLeft = (numBlocks - currentBlock);
    if ((blocksLeft === 1)) {
        blocksLeftText = `You have completed block ${currentBlock}. There is 1 block left.`;
    } else {
        blocksLeftText = `You have completed block ${currentBlock}. There are ${blocksLeft} blocks left.`;
    }
    if (((stationary === false) && (currentBlock === 3))) {
        blockLoop.finished = true;
    }
    if ((stationary && (currentBlock === 6))) {
        blockLoop.finished = true;
    }
    currentBlock += 1;
    
    blockEndText.setText(blocksLeftText);
    spaceCont_5.keys = undefined;
    spaceCont_5.rt = undefined;
    _spaceCont_5_allKeys = [];
    // keep track of which components have finished
    blockUpdateComponents = [];
    blockUpdateComponents.push(blockEndText);
    blockUpdateComponents.push(spaceContText_4);
    blockUpdateComponents.push(spaceCont_5);
    
    for (const thisComponent of blockUpdateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function blockUpdateRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'blockUpdate'-------
    // get current time
    t = blockUpdateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blockEndText* updates
    if (t >= 0.0 && blockEndText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blockEndText.tStart = t;  // (not accounting for frame time here)
      blockEndText.frameNStart = frameN;  // exact frame index
      
      blockEndText.setAutoDraw(true);
    }

    
    // *spaceContText_4* updates
    if (t >= 0.0 && spaceContText_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceContText_4.tStart = t;  // (not accounting for frame time here)
      spaceContText_4.frameNStart = frameN;  // exact frame index
      
      spaceContText_4.setAutoDraw(true);
    }

    
    // *spaceCont_5* updates
    if (t >= 0.0 && spaceCont_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceCont_5.tStart = t;  // (not accounting for frame time here)
      spaceCont_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spaceCont_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_5.clearEvents(); });
    }

    if (spaceCont_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = spaceCont_5.getKeys({keyList: ['space'], waitRelease: false});
      _spaceCont_5_allKeys = _spaceCont_5_allKeys.concat(theseKeys);
      if (_spaceCont_5_allKeys.length > 0) {
        spaceCont_5.keys = _spaceCont_5_allKeys[_spaceCont_5_allKeys.length - 1].name;  // just the last key pressed
        spaceCont_5.rt = _spaceCont_5_allKeys[_spaceCont_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blockUpdateComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blockUpdateRoutineEnd() {
  return async function () {
    //------Ending Routine 'blockUpdate'-------
    for (const thisComponent of blockUpdateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    spaceCont_5.stop();
    // the Routine "blockUpdate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blockEndQuestComponents;
function blockEndQuestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'blockEndQuest'-------
    t = 0;
    blockEndQuestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // This routine should not start straight away or the screen width and height
    // may be incorrect.
    
    expInfo['xRes'] = screen.width;
    expInfo['yRes'] = screen.height;
    console.log("screen xRes",expInfo['xRes']);
    console.log("screen yRes",expInfo['yRes']);
    
    //let src = ('demographics.html?xRes='+expInfo['xRes']+'&yRes='+expInfo['yRes']);
    let src = ('questionnaires/blockEnd.html');
    
    params = {};  // Results added here after form is submitted
    continue_routine = true; // Routines can't be ended from within Begin Routine
    $(document).ready(function() {
        // Add custom contents from html file using an iframe:
        $('body').append('<div id="iframe-o" style="visibility: hidden; position: relative; display: table; margin: auto; overflow-x: hidden; overflow-y: scroll !important; -webkit-overflow-y-scrolling:touch !important;"><div id="iframe-m" style="display: table-cell; vertical-align: middle;"><div id="iframe-i" style="display: inline-block; width:100%; overflow-y: hidden; overflow-x: hidden;"><iframe id="iframe" src="'+src+'" frameborder="0" style="width: 100%; overflow-y: hidden; overflow-x: hidden; "></iframe></div></div></div>');
        $('#iframe').on('load',function(iframe){
            // Auto-adjust iframe size:
            $(this).contents().find('html').css({ 'display': 'table', 'width': '100%', 'overflow-x': 'hidden' });
            $('#iframe-o').height($(window).height()-20, true);
            $('#iframe-m').width($(this).contents().find('html').width()+100);
           $('#iframe-i').height ( Math.max ( $(this).contents().find('html').height()+20, $(window).height()-20 ), true );
            $(this).height($(this).contents().find('html').height());
            $('#iframe-o').css('visibility','visible');
    
            // If iframe contains a form, then capture its output:
            $(this).contents().find('form').on('submit',function(e){
                e.preventDefault();
                $.each($(this).serializeArray(),function(i, param){
                    params[param.name] = param.value;
                    psychoJS.experiment.addData(param.name, param.value);
                });
                console.log ( 'DEBUG:FRM', params );
                // Remove iframe and continue to next routine when done:
                $('#iframe-o').remove();
                continue_routine = false;
            });
        });
    });
    //$('#iframe').attr( 'src', function(i,val){ return val;} );
    // keep track of which components have finished
    blockEndQuestComponents = [];
    
    for (const thisComponent of blockEndQuestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function blockEndQuestRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'blockEndQuest'-------
    // get current time
    t = blockEndQuestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = continue_routine;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blockEndQuestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blockEndQuestRoutineEnd() {
  return async function () {
    //------Ending Routine 'blockEndQuest'-------
    for (const thisComponent of blockEndQuestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // expInfo variables appear on every line in the data file
    // after they are created.
    expInfo['confidence'] = psychoJS.experiment._currentTrialData['Qconfidence'];
    expInfo['bestSquare'] = psychoJS.experiment._currentTrialData['QbestSquare'];
    expInfo['tryMultiple'] = psychoJS.experiment._currentTrialData['QtryMultiple'];
    expInfo['squareChange'] = psychoJS.experiment._currentTrialData['QsquareChange'];
    // the Routine "blockEndQuest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _spaceCont_7_allKeys;
var contText;
var contRoutineComponents;
function contRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'contRoutine'-------
    t = 0;
    contRoutineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    spaceCont_7.keys = undefined;
    spaceCont_7.rt = undefined;
    _spaceCont_7_allKeys = [];
    blocksLeft = (numBlocks - currentBlock);
    if ((blocksLeft === (- 1))) {
        contText = "Press SPACE to continue.";
    } else {
        contText = "Press SPACE to move on to the next block.";
    }
    
    text.setText(contText);
    // keep track of which components have finished
    contRoutineComponents = [];
    contRoutineComponents.push(spaceCont_7);
    contRoutineComponents.push(text);
    
    for (const thisComponent of contRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function contRoutineRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'contRoutine'-------
    // get current time
    t = contRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *spaceCont_7* updates
    if (t >= 0.0 && spaceCont_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceCont_7.tStart = t;  // (not accounting for frame time here)
      spaceCont_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spaceCont_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_7.clearEvents(); });
    }

    if (spaceCont_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = spaceCont_7.getKeys({keyList: ['space'], waitRelease: false});
      _spaceCont_7_allKeys = _spaceCont_7_allKeys.concat(theseKeys);
      if (_spaceCont_7_allKeys.length > 0) {
        spaceCont_7.keys = _spaceCont_7_allKeys[_spaceCont_7_allKeys.length - 1].name;  // just the last key pressed
        spaceCont_7.rt = _spaceCont_7_allKeys[_spaceCont_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of contRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function contRoutineRoutineEnd() {
  return async function () {
    //------Ending Routine 'contRoutine'-------
    for (const thisComponent of contRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    spaceCont_7.stop();
    // the Routine "contRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var condChangeTxt;
var _spaceCont_6_allKeys;
var rewardChangeComponents;
function rewardChangeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'rewardChange'-------
    t = 0;
    rewardChangeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((startVal === 0)) {
        startVal = 1;
    } else {
        startVal = 0;
    }
    if ((startVal === 0)) {
        volEnviro = false;
        if ((expVal === 1)) {
            conds = "conditions/nonstat_conds_win.csv";
            numBlocks = 3;
            condChangeTxt = "You are now entering a new environment - your goal is to win as many points as possible. The best option will change throughout a block. There will be a total of 3 blocks with 100 trials each. Please take a moment before entering the new environment.";
        } else {
            if ((expVal === 2)) {
                stationary = true;
                numBlocks = 6;
                conds = "conditions/stat_conds_win.csv";
                condChangeTxt = "You are now entering a new environment - your goal is to win as many points as possible. The best option will stay consistent across a block. There will be a total of 6 blocks with 50 trials each. Please take a moment before entering the new environment.";
            }
        }
    } else {
        volEnviro = true;
        stationary = false;
        conds = "conditions/vol_conds_win.csv";
        numBlocks = 3;
        condChangeTxt = "You are now entering a new environment - your goal is to win as many points as possible. The best option will change suddenly throughout a block. There will be a total of 3 blocks with 100 trials each. Please take a moment before entering the new environment.";
    }
    if ((! firstCond)) {
        condChangeTxt = "You have completed the task! Now, you will complete a series of questionnaries.";
    }
    currentBlock = 1;
    firstCond = false;
    s1_col = "#009E73";
    s2_col = "#CC79A7";
    s3_col = "#56B4E9";
    s4_col = "#E69F00";
    
    rewardChangeText.setText(condChangeTxt);
    spaceCont_6.keys = undefined;
    spaceCont_6.rt = undefined;
    _spaceCont_6_allKeys = [];
    // keep track of which components have finished
    rewardChangeComponents = [];
    rewardChangeComponents.push(rewardChangeText);
    rewardChangeComponents.push(spaceContText_5);
    rewardChangeComponents.push(spaceCont_6);
    
    for (const thisComponent of rewardChangeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rewardChangeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'rewardChange'-------
    // get current time
    t = rewardChangeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rewardChangeText* updates
    if (t >= 0.0 && rewardChangeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rewardChangeText.tStart = t;  // (not accounting for frame time here)
      rewardChangeText.frameNStart = frameN;  // exact frame index
      
      rewardChangeText.setAutoDraw(true);
    }

    
    // *spaceContText_5* updates
    if (t >= 0.0 && spaceContText_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceContText_5.tStart = t;  // (not accounting for frame time here)
      spaceContText_5.frameNStart = frameN;  // exact frame index
      
      spaceContText_5.setAutoDraw(true);
    }

    
    // *spaceCont_6* updates
    if (t >= 0.0 && spaceCont_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceCont_6.tStart = t;  // (not accounting for frame time here)
      spaceCont_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spaceCont_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_6.clearEvents(); });
    }

    if (spaceCont_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = spaceCont_6.getKeys({keyList: ['space'], waitRelease: false});
      _spaceCont_6_allKeys = _spaceCont_6_allKeys.concat(theseKeys);
      if (_spaceCont_6_allKeys.length > 0) {
        spaceCont_6.keys = _spaceCont_6_allKeys[_spaceCont_6_allKeys.length - 1].name;  // just the last key pressed
        spaceCont_6.rt = _spaceCont_6_allKeys[_spaceCont_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rewardChangeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function rewardChangeRoutineEnd() {
  return async function () {
    //------Ending Routine 'rewardChange'-------
    for (const thisComponent of rewardChangeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    spaceCont_6.stop();
    // the Routine "rewardChange" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var taskEnd_1Components;
function taskEnd_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'taskEnd_1'-------
    t = 0;
    taskEnd_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // This routine should not start straight away or the screen width and height
    // may be incorrect.
    
    expInfo['xRes'] = screen.width;
    expInfo['yRes'] = screen.height;
    console.log("screen xRes",expInfo['xRes']);
    console.log("screen yRes",expInfo['yRes']);
    
    //let src = ('demographics.html?xRes='+expInfo['xRes']+'&yRes='+expInfo['yRes']);
    let src = ('questionnaires/taskEnd_1.html');
    
    params = {};  // Results added here after form is submitted
    continue_routine = true; // Routines can't be ended from within Begin Routine
    $(document).ready(function() {
        // Add custom contents from html file using an iframe:
        $('body').append('<div id="iframe-o" style="visibility: hidden; position: relative; display: table; margin: auto; overflow-x: hidden; overflow-y: scroll !important; -webkit-overflow-y-scrolling:touch !important;"><div id="iframe-m" style="display: table-cell; vertical-align: middle;"><div id="iframe-i" style="display: inline-block; width:100%; overflow-y: hidden; overflow-x: hidden;"><iframe id="iframe" src="'+src+'" frameborder="0" style="width: 100%; overflow-y: hidden; overflow-x: hidden; "></iframe></div></div></div>');
        $('#iframe').on('load',function(iframe){
            // Auto-adjust iframe size:
            $(this).contents().find('html').css({ 'display': 'table', 'width': '100%', 'overflow-x': 'hidden' });
            $('#iframe-o').height($(window).height()-20, true);
            $('#iframe-m').width($(this).contents().find('html').width()+100);
           $('#iframe-i').height ( Math.max ( $(this).contents().find('html').height()+20, $(window).height()-20 ), true );
            $(this).height($(this).contents().find('html').height());
            $('#iframe-o').css('visibility','visible');
    
            // If iframe contains a form, then capture its output:
            $(this).contents().find('form').on('submit',function(e){
                e.preventDefault();
                $.each($(this).serializeArray(),function(i, param){
                    params[param.name] = param.value;
                    psychoJS.experiment.addData(param.name, param.value);
                });
                console.log ( 'DEBUG:FRM', params );
                // Remove iframe and continue to next routine when done:
                $('#iframe-o').remove();
                continue_routine = false;
            });
        });
    });
    //$('#iframe').attr( 'src', function(i,val){ return val;} );
    // keep track of which components have finished
    taskEnd_1Components = [];
    
    for (const thisComponent of taskEnd_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function taskEnd_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'taskEnd_1'-------
    // get current time
    t = taskEnd_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = continue_routine;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of taskEnd_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function taskEnd_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'taskEnd_1'-------
    for (const thisComponent of taskEnd_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // expInfo variables appear on every line in the data file
    // after they are created.
    expInfo['T1_1_1'] = psychoJS.experiment._currentTrialData['QT1_1_1'];
    expInfo['T1_1_2'] = psychoJS.experiment._currentTrialData['QT1_1_2'];
    expInfo['T1_1_3'] = psychoJS.experiment._currentTrialData['QT1_1_3'];
    expInfo['T1_1_4'] = psychoJS.experiment._currentTrialData['QT1_1_4'];
    expInfo['T1_1_5'] = psychoJS.experiment._currentTrialData['QT1_1_5'];
    expInfo['T1_1_5_text'] = psychoJS.experiment._currentTrialData['QT1_1_5_text'];
    expInfo['T1_2_1'] = psychoJS.experiment._currentTrialData['QT1_2_1'];
    expInfo['T1_2_2'] = psychoJS.experiment._currentTrialData['QT1_2_2'];
    expInfo['T1_2_3'] = psychoJS.experiment._currentTrialData['QT1_2_3'];
    expInfo['T1_2_4'] = psychoJS.experiment._currentTrialData['QT1_2_4'];
    expInfo['T1_2_5'] = psychoJS.experiment._currentTrialData['QT1_2_5'];
    expInfo['T1_2_6'] = psychoJS.experiment._currentTrialData['QT1_2_6'];
    expInfo['T1_2_6_text'] = psychoJS.experiment._currentTrialData['QT1_2_6_text'];
    expInfo['T2_3_1'] = psychoJS.experiment._currentTrialData['QT2_3_1'];
    expInfo['T2_3_2'] = psychoJS.experiment._currentTrialData['QT2_3_2'];
    expInfo['T2_3_3'] = psychoJS.experiment._currentTrialData['QT2_3_3'];
    expInfo['T2_3_4'] = psychoJS.experiment._currentTrialData['QT2_3_4'];
    expInfo['T2_3_4_text'] = psychoJS.experiment._currentTrialData['QT2_3_4_text'];
    expInfo['T2_1_1'] = psychoJS.experiment._currentTrialData['QT2_1_1'];
    expInfo['T2_1_2'] = psychoJS.experiment._currentTrialData['QT2_1_2'];
    expInfo['T2_1_3'] = psychoJS.experiment._currentTrialData['QT2_1_3'];
    expInfo['T2_1_4'] = psychoJS.experiment._currentTrialData['QT2_1_4'];
    expInfo['T2_1_5'] = psychoJS.experiment._currentTrialData['QT2_1_5'];
    expInfo['T2_1_5_text'] = psychoJS.experiment._currentTrialData['QT2_1_5_text'];
    expInfo['T2_2_1'] = psychoJS.experiment._currentTrialData['QT2_2_1'];
    expInfo['T2_2_2'] = psychoJS.experiment._currentTrialData['QT2_2_2'];
    expInfo['T2_2_3'] = psychoJS.experiment._currentTrialData['QT2_2_3'];
    expInfo['T2_2_4'] = psychoJS.experiment._currentTrialData['QT2_2_4'];
    expInfo['T2_2_5'] = psychoJS.experiment._currentTrialData['QT2_2_5'];
    expInfo['T2_2_6'] = psychoJS.experiment._currentTrialData['QT2_2_6'];
    expInfo['T2_2_6_text'] = psychoJS.experiment._currentTrialData['QT2_2_6_text'];
    expInfo['T2_3_1'] = psychoJS.experiment._currentTrialData['QT2_3_1'];
    expInfo['T2_3_2'] = psychoJS.experiment._currentTrialData['QT2_3_2'];
    expInfo['T2_3_3'] = psychoJS.experiment._currentTrialData['QT2_3_3'];
    expInfo['T2_3_4'] = psychoJS.experiment._currentTrialData['QT2_3_4'];
    expInfo['T2_3_4_text'] = psychoJS.experiment._currentTrialData['QT2_3_4_text'];
    // the Routine "taskEnd_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _spaceCont_9_allKeys;
var questNextComponents;
function questNextRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'questNext'-------
    t = 0;
    questNextClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    spaceCont_9.keys = undefined;
    spaceCont_9.rt = undefined;
    _spaceCont_9_allKeys = [];
    text_3.setText('Press SPACE to continue.');
    // keep track of which components have finished
    questNextComponents = [];
    questNextComponents.push(spaceCont_9);
    questNextComponents.push(text_3);
    
    for (const thisComponent of questNextComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function questNextRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'questNext'-------
    // get current time
    t = questNextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *spaceCont_9* updates
    if (t >= 0.0 && spaceCont_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spaceCont_9.tStart = t;  // (not accounting for frame time here)
      spaceCont_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spaceCont_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spaceCont_9.clearEvents(); });
    }

    if (spaceCont_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = spaceCont_9.getKeys({keyList: ['space'], waitRelease: false});
      _spaceCont_9_allKeys = _spaceCont_9_allKeys.concat(theseKeys);
      if (_spaceCont_9_allKeys.length > 0) {
        spaceCont_9.keys = _spaceCont_9_allKeys[_spaceCont_9_allKeys.length - 1].name;  // just the last key pressed
        spaceCont_9.rt = _spaceCont_9_allKeys[_spaceCont_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of questNextComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function questNextRoutineEnd() {
  return async function () {
    //------Ending Routine 'questNext'-------
    for (const thisComponent of questNextComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    spaceCont_9.stop();
    // the Routine "questNext" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var taskEnd_2Components;
function taskEnd_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'taskEnd_2'-------
    t = 0;
    taskEnd_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // This routine should not start straight away or the screen width and height
    // may be incorrect.
    
    expInfo['xRes'] = screen.width;
    expInfo['yRes'] = screen.height;
    console.log("screen xRes",expInfo['xRes']);
    console.log("screen yRes",expInfo['yRes']);
    
    //let src = ('demographics.html?xRes='+expInfo['xRes']+'&yRes='+expInfo['yRes']);
    let src = ('questionnaires/taskEnd_2.html');
    
    params = {};  // Results added here after form is submitted
    continue_routine = true; // Routines can't be ended from within Begin Routine
    $(document).ready(function() {
        // Add custom contents from html file using an iframe:
        $('body').append('<div id="iframe-o" style="visibility: hidden; position: relative; display: table; margin: auto; overflow-x: hidden; overflow-y: scroll !important; -webkit-overflow-y-scrolling:touch !important;"><div id="iframe-m" style="display: table-cell; vertical-align: middle;"><div id="iframe-i" style="display: inline-block; width:100%; overflow-y: hidden; overflow-x: hidden;"><iframe id="iframe" src="'+src+'" frameborder="0" style="width: 100%; overflow-y: hidden; overflow-x: hidden; "></iframe></div></div></div>');
        $('#iframe').on('load',function(iframe){
            // Auto-adjust iframe size:
            $(this).contents().find('html').css({ 'display': 'table', 'width': '100%', 'overflow-x': 'hidden' });
            $('#iframe-o').height($(window).height()-20, true);
            $('#iframe-m').width($(this).contents().find('html').width()+100);
           $('#iframe-i').height ( Math.max ( $(this).contents().find('html').height()+20, $(window).height()-20 ), true );
            $(this).height($(this).contents().find('html').height());
            $('#iframe-o').css('visibility','visible');
    
            // If iframe contains a form, then capture its output:
            $(this).contents().find('form').on('submit',function(e){
                e.preventDefault();
                $.each($(this).serializeArray(),function(i, param){
                    params[param.name] = param.value;
                    psychoJS.experiment.addData(param.name, param.value);
                });
                console.log ( 'DEBUG:FRM', params );
                // Remove iframe and continue to next routine when done:
                $('#iframe-o').remove();
                continue_routine = false;
            });
        });
    });
    //$('#iframe').attr( 'src', function(i,val){ return val;} );
    // keep track of which components have finished
    taskEnd_2Components = [];
    
    for (const thisComponent of taskEnd_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function taskEnd_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'taskEnd_2'-------
    // get current time
    t = taskEnd_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = continue_routine;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of taskEnd_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function taskEnd_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'taskEnd_2'-------
    for (const thisComponent of taskEnd_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // expInfo variables appear on every line in the data file
    // after they are created.
    expInfo['T1_1_1'] = psychoJS.experiment._currentTrialData['QT1_1_1'];
    expInfo['T1_1_2'] = psychoJS.experiment._currentTrialData['QT1_1_2'];
    expInfo['T1_1_3'] = psychoJS.experiment._currentTrialData['QT1_1_3'];
    expInfo['T1_1_4'] = psychoJS.experiment._currentTrialData['QT1_1_4'];
    expInfo['T1_1_5'] = psychoJS.experiment._currentTrialData['QT1_1_5'];
    expInfo['T1_1_5_text'] = psychoJS.experiment._currentTrialData['QT1_1_5_text'];
    expInfo['T1_2_1'] = psychoJS.experiment._currentTrialData['QT1_2_1'];
    expInfo['T1_2_2'] = psychoJS.experiment._currentTrialData['QT1_2_2'];
    expInfo['T1_2_3'] = psychoJS.experiment._currentTrialData['QT1_2_3'];
    expInfo['T1_2_4'] = psychoJS.experiment._currentTrialData['QT1_2_4'];
    expInfo['T1_2_5'] = psychoJS.experiment._currentTrialData['QT1_2_5'];
    expInfo['T1_2_6'] = psychoJS.experiment._currentTrialData['QT1_2_6'];
    expInfo['T1_2_6_text'] = psychoJS.experiment._currentTrialData['QT1_2_6_text'];
    expInfo['T2_3_1'] = psychoJS.experiment._currentTrialData['QT2_3_1'];
    expInfo['T2_3_2'] = psychoJS.experiment._currentTrialData['QT2_3_2'];
    expInfo['T2_3_3'] = psychoJS.experiment._currentTrialData['QT2_3_3'];
    expInfo['T2_3_4'] = psychoJS.experiment._currentTrialData['QT2_3_4'];
    expInfo['T2_3_4_text'] = psychoJS.experiment._currentTrialData['QT2_3_4_text'];
    expInfo['T2_1_1'] = psychoJS.experiment._currentTrialData['QT2_1_1'];
    expInfo['T2_1_2'] = psychoJS.experiment._currentTrialData['QT2_1_2'];
    expInfo['T2_1_3'] = psychoJS.experiment._currentTrialData['QT2_1_3'];
    expInfo['T2_1_4'] = psychoJS.experiment._currentTrialData['QT2_1_4'];
    expInfo['T2_1_5'] = psychoJS.experiment._currentTrialData['QT2_1_5'];
    expInfo['T2_1_5_text'] = psychoJS.experiment._currentTrialData['QT2_1_5_text'];
    expInfo['T2_2_1'] = psychoJS.experiment._currentTrialData['QT2_2_1'];
    expInfo['T2_2_2'] = psychoJS.experiment._currentTrialData['QT2_2_2'];
    expInfo['T2_2_3'] = psychoJS.experiment._currentTrialData['QT2_2_3'];
    expInfo['T2_2_4'] = psychoJS.experiment._currentTrialData['QT2_2_4'];
    expInfo['T2_2_5'] = psychoJS.experiment._currentTrialData['QT2_2_5'];
    expInfo['T2_2_6'] = psychoJS.experiment._currentTrialData['QT2_2_6'];
    expInfo['T2_2_6_text'] = psychoJS.experiment._currentTrialData['QT2_2_6_text'];
    expInfo['T2_3_1'] = psychoJS.experiment._currentTrialData['QT2_3_1'];
    expInfo['T2_3_2'] = psychoJS.experiment._currentTrialData['QT2_3_2'];
    expInfo['T2_3_3'] = psychoJS.experiment._currentTrialData['QT2_3_3'];
    expInfo['T2_3_4'] = psychoJS.experiment._currentTrialData['QT2_3_4'];
    expInfo['T2_3_4_text'] = psychoJS.experiment._currentTrialData['QT2_3_4_text'];
    // the Routine "taskEnd_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var curiosityQuestComponents;
function curiosityQuestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'curiosityQuest'-------
    t = 0;
    curiosityQuestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // This routine should not start straight away or the screen width and height
    // may be incorrect.
    
    expInfo['xRes'] = screen.width;
    expInfo['yRes'] = screen.height;
    console.log("screen xRes",expInfo['xRes']);
    console.log("screen yRes",expInfo['yRes']);
    
    //let src = ('demographics.html?xRes='+expInfo['xRes']+'&yRes='+expInfo['yRes']);
    let src = ('questionnaires/curiosity.html');
    
    params = {};  // Results added here after form is submitted
    continue_routine = true; // Routines can't be ended from within Begin Routine
    $(document).ready(function() {
        // Add custom contents from html file using an iframe:
        $('body').append('<div id="iframe-o" style="visibility: hidden; position: relative; display: table; margin: auto; overflow-x: hidden; overflow-y: scroll !important; -webkit-overflow-y-scrolling:touch !important;"><div id="iframe-m" style="display: table-cell; vertical-align: middle;"><div id="iframe-i" style="display: inline-block; width:100%; overflow-y: hidden; overflow-x: hidden;"><iframe id="iframe" src="'+src+'" frameborder="0" style="width: 100%; overflow-y: hidden; overflow-x: hidden; "></iframe></div></div></div>');
        $('#iframe').on('load',function(iframe){
            // Auto-adjust iframe size:
            $(this).contents().find('html').css({ 'display': 'table', 'width': '100%', 'overflow-x': 'hidden' });
            $('#iframe-o').height($(window).height()-20, true);
            $('#iframe-m').width($(this).contents().find('html').width()+100);
           $('#iframe-i').height ( Math.max ( $(this).contents().find('html').height()+20, $(window).height()-20 ), true );
            $(this).height($(this).contents().find('html').height());
            $('#iframe-o').css('visibility','visible');
    
            // If iframe contains a form, then capture its output:
            $(this).contents().find('form').on('submit',function(e){
                e.preventDefault();
                $.each($(this).serializeArray(),function(i, param){
                    params[param.name] = param.value;
                    psychoJS.experiment.addData(param.name, param.value);
                });
                console.log ( 'DEBUG:FRM', params );
                // Remove iframe and continue to next routine when done:
                $('#iframe-o').remove();
                continue_routine = false;
            });
        });
    });
    //$('#iframe').attr( 'src', function(i,val){ return val;} );
    // keep track of which components have finished
    curiosityQuestComponents = [];
    
    for (const thisComponent of curiosityQuestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function curiosityQuestRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'curiosityQuest'-------
    // get current time
    t = curiosityQuestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = continue_routine;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of curiosityQuestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function curiosityQuestRoutineEnd() {
  return async function () {
    //------Ending Routine 'curiosityQuest'-------
    for (const thisComponent of curiosityQuestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // expInfo variables appear on every line in the data file
    // after they are created.
    expInfo['CUR1'] = psychoJS.experiment._currentTrialData['QCUR1'];
    expInfo['CUR2'] = psychoJS.experiment._currentTrialData['QCUR2'];
    expInfo['CUR3'] = psychoJS.experiment._currentTrialData['QCUR3'];
    expInfo['CUR4'] = psychoJS.experiment._currentTrialData['QCUR4'];
    expInfo['CUR5'] = psychoJS.experiment._currentTrialData['QCUR5'];
    expInfo['CUR6'] = psychoJS.experiment._currentTrialData['QCUR6'];
    expInfo['CUR7'] = psychoJS.experiment._currentTrialData['QCUR7'];
    expInfo['CUR8'] = psychoJS.experiment._currentTrialData['QCUR8'];
    expInfo['CUR9'] = psychoJS.experiment._currentTrialData['QCUR9'];
    expInfo['CUR10'] = psychoJS.experiment._currentTrialData['QCUR10'];
    // the Routine "curiosityQuest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var cogQuestComponents;
function cogQuestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'cogQuest'-------
    t = 0;
    cogQuestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // This routine should not start straight away or the screen width and height
    // may be incorrect.
    
    expInfo['xRes'] = screen.width;
    expInfo['yRes'] = screen.height;
    console.log("screen xRes",expInfo['xRes']);
    console.log("screen yRes",expInfo['yRes']);
    
    //let src = ('demographics.html?xRes='+expInfo['xRes']+'&yRes='+expInfo['yRes']);
    let src = ('questionnaires/cognition.html');
    
    params = {};  // Results added here after form is submitted
    continue_routine = true; // Routines can't be ended from within Begin Routine
    $(document).ready(function() {
        // Add custom contents from html file using an iframe:
        $('body').append('<div id="iframe-o" style="visibility: hidden; position: relative; display: table; margin: auto; overflow-x: hidden; overflow-y: scroll !important; -webkit-overflow-y-scrolling:touch !important;"><div id="iframe-m" style="display: table-cell; vertical-align: middle;"><div id="iframe-i" style="display: inline-block; width:100%; overflow-y: hidden; overflow-x: hidden;"><iframe id="iframe" src="'+src+'" frameborder="0" style="width: 100%; overflow-y: hidden; overflow-x: hidden; "></iframe></div></div></div>');
        $('#iframe').on('load',function(iframe){
            // Auto-adjust iframe size:
            $(this).contents().find('html').css({ 'display': 'table', 'width': '100%', 'overflow-x': 'hidden' });
            $('#iframe-o').height($(window).height()-20, true);
            $('#iframe-m').width($(this).contents().find('html').width()+100);
           $('#iframe-i').height ( Math.max ( $(this).contents().find('html').height()+20, $(window).height()-20 ), true );
            $(this).height($(this).contents().find('html').height());
            $('#iframe-o').css('visibility','visible');
    
            // If iframe contains a form, then capture its output:
            $(this).contents().find('form').on('submit',function(e){
                e.preventDefault();
                $.each($(this).serializeArray(),function(i, param){
                    params[param.name] = param.value;
                    psychoJS.experiment.addData(param.name, param.value);
                });
                console.log ( 'DEBUG:FRM', params );
                // Remove iframe and continue to next routine when done:
                $('#iframe-o').remove();
                continue_routine = false;
            });
        });
    });
    //$('#iframe').attr( 'src', function(i,val){ return val;} );
    // keep track of which components have finished
    cogQuestComponents = [];
    
    for (const thisComponent of cogQuestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function cogQuestRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'cogQuest'-------
    // get current time
    t = cogQuestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = continue_routine;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cogQuestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cogQuestRoutineEnd() {
  return async function () {
    //------Ending Routine 'cogQuest'-------
    for (const thisComponent of cogQuestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // expInfo variables appear on every line in the data file
    // after they are created.
    expInfo['C1'] = psychoJS.experiment._currentTrialData['QC1'];
    expInfo['C2'] = psychoJS.experiment._currentTrialData['QC2'];
    expInfo['C3'] = psychoJS.experiment._currentTrialData['QC3'];
    expInfo['C4'] = psychoJS.experiment._currentTrialData['QC4'];
    expInfo['C5'] = psychoJS.experiment._currentTrialData['QC5'];
    expInfo['C6'] = psychoJS.experiment._currentTrialData['QC6'];
    expInfo['C7'] = psychoJS.experiment._currentTrialData['QC7'];
    expInfo['C8'] = psychoJS.experiment._currentTrialData['QC8'];
    expInfo['C9'] = psychoJS.experiment._currentTrialData['QC9'];
    expInfo['C10'] = psychoJS.experiment._currentTrialData['QC10'];
    // the Routine "cogQuest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var riskQuestComponents;
function riskQuestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'riskQuest'-------
    t = 0;
    riskQuestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // This routine should not start straight away or the screen width and height
    // may be incorrect.
    
    expInfo['xRes'] = screen.width;
    expInfo['yRes'] = screen.height;
    console.log("screen xRes",expInfo['xRes']);
    console.log("screen yRes",expInfo['yRes']);
    
    //let src = ('demographics.html?xRes='+expInfo['xRes']+'&yRes='+expInfo['yRes']);
    let src = ('questionnaires/risk.html');
    
    params = {};  // Results added here after form is submitted
    continue_routine = true; // Routines can't be ended from within Begin Routine
    $(document).ready(function() {
        // Add custom contents from html file using an iframe:
        $('body').append('<div id="iframe-o" style="visibility: hidden; position: relative; display: table; margin: auto; overflow-x: hidden; overflow-y: scroll !important; -webkit-overflow-y-scrolling:touch !important;"><div id="iframe-m" style="display: table-cell; vertical-align: middle;"><div id="iframe-i" style="display: inline-block; width:100%; overflow-y: hidden; overflow-x: hidden;"><iframe id="iframe" src="'+src+'" frameborder="0" style="width: 100%; overflow-y: hidden; overflow-x: hidden; "></iframe></div></div></div>');
        $('#iframe').on('load',function(iframe){
            // Auto-adjust iframe size:
            $(this).contents().find('html').css({ 'display': 'table', 'width': '100%', 'overflow-x': 'hidden' });
            $('#iframe-o').height($(window).height()-20, true);
            $('#iframe-m').width($(this).contents().find('html').width()+100);
           $('#iframe-i').height ( Math.max ( $(this).contents().find('html').height()+20, $(window).height()-20 ), true );
            $(this).height($(this).contents().find('html').height());
            $('#iframe-o').css('visibility','visible');
    
            // If iframe contains a form, then capture its output:
            $(this).contents().find('form').on('submit',function(e){
                e.preventDefault();
                $.each($(this).serializeArray(),function(i, param){
                    params[param.name] = param.value;
                    psychoJS.experiment.addData(param.name, param.value);
                });
                console.log ( 'DEBUG:FRM', params );
                // Remove iframe and continue to next routine when done:
                $('#iframe-o').remove();
                continue_routine = false;
            });
        });
    });
    //$('#iframe').attr( 'src', function(i,val){ return val;} );
    // keep track of which components have finished
    riskQuestComponents = [];
    
    for (const thisComponent of riskQuestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function riskQuestRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'riskQuest'-------
    // get current time
    t = riskQuestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = continue_routine;
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of riskQuestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function riskQuestRoutineEnd() {
  return async function () {
    //------Ending Routine 'riskQuest'-------
    for (const thisComponent of riskQuestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // expInfo variables appear on every line in the data file
    // after they are created.
    expInfo['RISK1'] = psychoJS.experiment._currentTrialData['QRISK1'];
    expInfo['RISK2'] = psychoJS.experiment._currentTrialData['QRISK2'];
    expInfo['RISK3'] = psychoJS.experiment._currentTrialData['QRISK3'];
    expInfo['RISK4'] = psychoJS.experiment._currentTrialData['QRISK4'];
    expInfo['RISK5'] = psychoJS.experiment._currentTrialData['QRISK5'];
    expInfo['RISK6'] = psychoJS.experiment._currentTrialData['QRISK6'];
    expInfo['RISK7'] = psychoJS.experiment._currentTrialData['QRISK7'];
    // the Routine "riskQuest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _debriefControlKey_allKeys;
var experimentEndComponents;
function experimentEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'experimentEnd'-------
    t = 0;
    experimentEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    debriefControlKey.keys = undefined;
    debriefControlKey.rt = undefined;
    _debriefControlKey_allKeys = [];
    image_2.setImage(debrief_slide);
    // keep track of which components have finished
    experimentEndComponents = [];
    experimentEndComponents.push(debriefControlKey);
    experimentEndComponents.push(image_2);
    
    for (const thisComponent of experimentEndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function experimentEndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'experimentEnd'-------
    // get current time
    t = experimentEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debriefControlKey* updates
    if (t >= 0.0 && debriefControlKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debriefControlKey.tStart = t;  // (not accounting for frame time here)
      debriefControlKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { debriefControlKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { debriefControlKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { debriefControlKey.clearEvents(); });
    }

    if (debriefControlKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = debriefControlKey.getKeys({keyList: ['right', 'left', 'space'], waitRelease: false});
      _debriefControlKey_allKeys = _debriefControlKey_allKeys.concat(theseKeys);
      if (_debriefControlKey_allKeys.length > 0) {
        debriefControlKey.keys = _debriefControlKey_allKeys[_debriefControlKey_allKeys.length - 1].name;  // just the last key pressed
        debriefControlKey.rt = _debriefControlKey_allKeys[_debriefControlKey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of experimentEndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function experimentEndRoutineEnd() {
  return async function () {
    //------Ending Routine 'experimentEnd'-------
    for (const thisComponent of experimentEndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    debriefControlKey.stop();
    // the Routine "experimentEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var debriefPrepComponents;
function debriefPrepRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'debriefPrep'-------
    t = 0;
    debriefPrepClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((debriefControlKey.keys === "right")) {
        if ((currRowDebrief !== 4)) {
            currRowDebrief += 1;
        }
    } else {
        if ((debriefControlKey.keys === "left")) {
            if ((currRowDebrief !== 0)) {
                currRowDebrief -= 1;
            }
        } else {
            if ((debriefControlKey.keys === "space")) {
                if ((currRowDebrief === 4)) {
                    debriefController.finished = true;
                }
            }
        }
    }
    
    // keep track of which components have finished
    debriefPrepComponents = [];
    
    for (const thisComponent of debriefPrepComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function debriefPrepRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'debriefPrep'-------
    // get current time
    t = debriefPrepClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of debriefPrepComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debriefPrepRoutineEnd() {
  return async function () {
    //------Ending Routine 'debriefPrep'-------
    for (const thisComponent of debriefPrepComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "debriefPrep" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
