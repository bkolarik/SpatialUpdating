/*
 * Example plugin template
 */

jsPsych.plugins["spatial-updating-test"] = (function() {

  var plugin = {};
  // stimulus list must be in the following format
  //{stimulus: "path_to_stimulus_folder/image_name.jpg", data: {stim_type:'condition', correct_response: 'if applicatble',xPos: screen coordinates of x position, yPos: screen position of y position}},
  jsPsych.pluginAPI.registerPreload('spatial-updating-test', 'stimulus', 'image');

  plugin.info = {
    name: "spatial-updating-test",
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.IMAGE, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: undefined,
        description: 'the image to be displayed'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        default: jsPsych.All_Keys,
        description: "the keys the subject is allowed to press to respond to the stimulus"
      },
      xPos: {
        type: jsPsych.plugins.parameterType.INT,
        default: null,
        description: 'X position of stimulus'
      },
      yPos: {
        type: jsPsych.plugins.parameterType.INT,
        default: null,
        description: 'Y position of the stimulus.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        default: null,
        description: 'How long to show trial before it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {
    //var new_html = '<img src="'+trial.stimulus+'" id="jspsych-spatial-updating-test-stimulus"></img>';
    var new_html = trial.stimulus




    // draw image
    display_element.innerHTML = new_html;

    // store response
    var response = {
      rt: null,
      key: null
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      //display_element.querySelector('#jspsych-html-keyboard-response-stimulus').className += ' responded';

      // only record the first response
      if (response.key == null) {
        response = info;
      }

      if (trial.response_ends_trial) {
        end_trial();
      }
    };
    // start the response listener
    if (trial.choices != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'date',
        persist: false,
        allow_held_key: false
      });
    }

    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "key_press": response.key
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // start the response listener
      if (trial.choices != jsPsych.NO_KEYS) {
        var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
          //callback_function: after_response,
          valid_responses: trial.choices,
          rt_method: 'date',
          persist: false,
          allow_held_key: false
        });
      }

      // hide stimulus if stimulus_duration is set
      if (trial.stimulus_duration !== null) {
        jsPsych.pluginAPI.setTimeout(function() {
          display_element.querySelector('#jspsych-spatial-updating-test-stimulus').style.visibility = 'hidden';
        }, trial.stimulus_duration);
      }

      // end trial if trial_duration is set
      if (trial.trial_duration !== null) {
        jsPsych.pluginAPI.setTimeout(function() {
          end_trial();
        }, trial.trial_duration);
      }

  };

  return plugin;
})();
