
  function seeded_stim_selection(stim,myvar,xPos,yPos){

    stim = ["Set1/001a.jpg","Set1/002a.jpg","Set1/003a.jpg","Set1/004a.jpg","Set1/005a.jpg","Set1/006a.jpg","Set1/007a.jpg","Set1/008a.jpg","Set1/009a.jpg","Set1/010a.jpg","Set1/011a.jpg","Set1/012a.jpg","Set1/013a.jpg","Set1/014a.jpg","Set1/015a.jpg","Set1/016a.jpg","Set1/017a.jpg","Set1/018a.jpg","Set1/019a.jpg","Set1/020a.jpg","Set1/021a.jpg","Set1/022a.jpg","Set1/023a.jpg","Set1/024a.jpg",
    "Set1/025a.jpg","Set1/026a.jpg","Set1/027a.jpg","Set1/028a.jpg","Set1/029a.jpg","Set1/030a.jpg","Set1/031a.jpg","Set1/032a.jpg","Set1/033a.jpg","Set1/034a.jpg","Set1/035a.jpg","Set1/036a.jpg","Set1/037a.jpg","Set1/038a.jpg","Set1/039a.jpg","Set1/040a.jpg","Set1/041a.jpg","Set1/042a.jpg","Set1/043a.jpg","Set1/044a.jpg","Set1/045a.jpg","Set1/046a.jpg","Set1/047a.jpg","Set1/048a.jpg","Set1/049a.jpg",
    "Set1/050a.jpg","Set1/051a.jpg","Set1/052a.jpg","Set1/053a.jpg","Set1/054a.jpg","Set1/055a.jpg","Set1/056a.jpg","Set1/057a.jpg","Set1/058a.jpg","Set1/059a.jpg","Set1/060a.jpg","Set1/061a.jpg","Set1/062a.jpg","Set1/063a.jpg","Set1/064a.jpg","Set1/065a.jpg","Set1/066a.jpg","Set1/067a.jpg","Set1/068a.jpg","Set1/069a.jpg","Set1/070a.jpg","Set1/071a.jpg","Set1/072a.jpg","Set1/073a.jpg","Set1/074a.jpg",
    "Set1/075a.jpg","Set1/076a.jpg","Set1/077a.jpg","Set1/078a.jpg","Set1/079a.jpg","Set1/080a.jpg","Set1/081a.jpg","Set1/082a.jpg","Set1/083a.jpg","Set1/084a.jpg","Set1/085a.jpg","Set1/086a.jpg","Set1/087a.jpg","Set1/088a.jpg","Set1/089a.jpg","Set1/090a.jpg","Set1/091a.jpg","Set1/092a.jpg","Set1/093a.jpg","Set1/094a.jpg","Set1/095a.jpg","Set1/096a.jpg","Set1/097a.jpg","Set1/098a.jpg","Set1/099a.jpg",
    "Set1/100a.jpg","Set1/101a.jpg","Set1/102a.jpg","Set1/103a.jpg","Set1/104a.jpg","Set1/105a.jpg","Set1/106a.jpg","Set1/107a.jpg","Set1/108a.jpg","Set1/109a.jpg","Set1/110a.jpg","Set1/111a.jpg","Set1/112a.jpg","Set1/113a.jpg","Set1/114a.jpg","Set1/115a.jpg","Set1/116a.jpg","Set1/117a.jpg","Set1/118a.jpg","Set1/119a.jpg","Set1/120a.jpg","Set1/121a.jpg","Set1/122a.jpg","Set1/123a.jpg","Set1/124a.jpg",
    "Set1/125a.jpg","Set1/126a.jpg","Set1/127a.jpg","Set1/128a.jpg","Set1/129a.jpg","Set1/130a.jpg","Set1/131a.jpg","Set1/132a.jpg","Set1/133a.jpg","Set1/134a.jpg","Set1/135a.jpg","Set1/136a.jpg","Set1/137a.jpg","Set1/138a.jpg","Set1/139a.jpg","Set1/140a.jpg","Set1/141a.jpg","Set1/142a.jpg","Set1/143a.jpg","Set1/144a.jpg","Set1/145a.jpg","Set1/146a.jpg","Set1/147a.jpg","Set1/148a.jpg","Set1/149a.jpg",
    "Set1/150a.jpg","Set1/151a.jpg","Set1/152a.jpg","Set1/153a.jpg","Set1/154a.jpg","Set1/155a.jpg","Set1/156a.jpg","Set1/157a.jpg","Set1/158a.jpg","Set1/159a.jpg","Set1/160a.jpg","Set1/161a.jpg","Set1/162a.jpg","Set1/163a.jpg","Set1/164a.jpg","Set1/165a.jpg","Set1/166a.jpg","Set1/167a.jpg","Set1/168a.jpg","Set1/169a.jpg","Set1/170a.jpg","Set1/171a.jpg","Set1/172a.jpg","Set1/173a.jpg","Set1/174a.jpg",
    "Set1/175a.jpg","Set1/176a.jpg","Set1/177a.jpg","Set1/178a.jpg","Set1/179a.jpg","Set1/180a.jpg","Set1/181a.jpg","Set1/182a.jpg","Set1/183a.jpg","Set1/184a.jpg","Set1/185a.jpg","Set1/186a.jpg","Set1/187a.jpg","Set1/188a.jpg","Set1/189a.jpg","Set1/190a.jpg","Set1/191a.jpg","Set1/192a.jpg"]

    var stim_select = chance.unique(chance.natural, 12, {min: 0, max: 191});

    var c;
    for (c = 0; c < 12; c++) {
       set_1_stim.push(stim[stim_select[c]])
     }


    //lists of x and y screen positions - using absolute positioning
    xPos = ["15%","25%","35%","45%","55%","65%","75%","15%","25%","35%","45%","55%","65%","75%","15%","25%","35%","45%","55%","65%","75%","15%","25%","35%",
    "45%","55%","65%","75%","15%","25%","35%","45%","55%","65%","75%","15%","25%","35%","45%","55%","65%","75%","15%","25%","35%","45%","55%","65%","75%",]

    yPos = ["10%","10%","10%","10%","10%","10%","10%","20%","20%","20%","20%","20%","20%","20%","30%","30%","30%","30%","30%","30%","30%","40%","40%","40%",
    "40%","40%","40%","40%","50%","50%","50%","50%","50%","50%","50%","60%","60%","60%","60%","60%","60%","60%","70%","70%","70%","70%","70%","70%","70%"]

    //generate 12 integers to use as indices into the above arrays
    var uniques = chance.unique(chance.natural, 12, {min: 0, max: 48});

    //loop over the indices to create the arrays of stimulus positions
    var j;
    for (j = 0; j < 12; j++) {
       xPosition.push(xPos[uniques[j]])
       yPosition.push(yPos[uniques[j]])
     }


    //loop over the arrays above to format into html strings
    var i;
    for (i = 0; i < 12; i++) {
      str1 = '\'<IMG STYLE="position:absolute; TOP:'
      str2 = '; LEFT:'
      str3 = '; WIDTH:150px; HEIGHT:150px" img src="'
      str4 =  '\" id=\"jspsych-spatial-updating-stimulus\"></img>\''

      var stim_html = str1+yPosition[i]+str2+xPosition[i]+str3+set_1_stim[i]+str4

      stimArray.push(stim_html)
    }

    console.log(myvar)
    var chance1 = new Chance(myvar); // you can choose a seed here, i chose 124

    console.log(chance1.shuffle(stim));


    // Array [ "alpha", "delta", "echo", "charlie", "bravo" ]
    // define the stimuli used in the study
    // probably not the most efficient or elegant way to do this, but it works.
    var trial_1 = {
    stimulus: stimArray[0],
    };

    var trial_2 = {
    stimulus: stimArray[1],
    };

    var trial_3 = {
    stimulus: stimArray[2],
    };
    var trial_4 = {
    stimulus: stimArray[3],
    };

    var trial_5 = {
    stimulus: stimArray[4],
    };

    var trial_6 = {
    stimulus: stimArray[5],
    };

    var trial_7 = {
    stimulus: stimArray[6],
    };

    var trial_8 = {
    stimulus: stimArray[7],
    };

    var trial_9 = {
    stimulus: stimArray[8],
    };

    var trial_10 = {
    stimulus: stimArray[9],
    };

    var trial_11 = {
    stimulus: stimArray[10],
    };

    var trial_12 = {
    stimulus: stimArray[11],
    };

    var myArray =  [trial_1, trial_2, trial_3,trial_4, trial_5, trial_6,trial_7, trial_8, trial_9,trial_10, trial_11, trial_12];

    //shuffle the stimulus array randomly
    shuffledArray = jsPsych.randomization.repeat(myArray, 1);
 return shuffledArray
}
