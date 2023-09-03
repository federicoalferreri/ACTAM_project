### Advanced Coding Tools and Methodologies [A.Y. 22/23 – Politecnico di Milano]

# {PROJECT_NAME} : a web-based music sequencer and synthesizer

Inspired by the launchpad technology, mainly used in electronic music production to create beats and playing loops, the following web application allows for the creation of musical loops either by using pre-loaded drum sound samples and / or a simple music synthesizer. 

The application has been developed using HTML, CSS and JS code. 


## GUI – User's Interface

<img width="1016" alt="image" src="https://github.com/federicoalferreri/ACTAM_project/assets/115798271/d6661182-481d-4fe6-8946-55feb9bcf5e6">


Overall view with which the application presents itself to the user. 

We're now gonna break down the different interface elements, providing a basic user's guide on how to get started creating your musical beat loop.

## BEATMAKER 

<img width="972" alt="image" src="https://github.com/federicoalferreri/ACTAM_project/assets/115798271/a6f923b8-e648-4dfd-8e24-83beff7a555a">

In this first section we’re able to create a sound loop developing over 4 bars using different imported pre-loaded drum sound samples (also uploaded in this github page).

For each kind of sound we can choose between 2 different audio samples (from the curtain menus on the left side). Activation of any of the samples in each bar will happen by clicking on any of the square buttons and the visual feedback will tell you which ones are playing and which are not. 

As for the tempo that the loop will follow, the slider on the top part of the launchpad-like console allows selecting a value between 30 and 200 BPM.

On the top-left corner, the 'RESET' button will reset the loop-station to default settings, clearing the sample pads from any previously activated beat. 

## MUSIC SYNTHESIZER 

**SAMPLE PAD KEYBOARD**

<img width="294" alt="image" src="https://github.com/federicoalferreri/ACTAM_project/assets/115798271/7df160ae-6603-42c2-9f0e-93629645676d">

- The ‘PLAY’ and ‘STOP’ buttons start and stop the playback of the sequencer, respectively. 

- Interactive keyboard: The code enables the triggering of specific samples by pressing keyboard keys corresponding to notes (e.g. 'e', 'r', 'y' and so on). When a key is pressed, the code is built to provide visual feedback simulating the pressing of said key.

- Waveform selector: allows choosing between a sine, square,  triangle or sawtooth wave for sound synthesis. We'll explain later what that implies in terms of music synthesis.

**SYNTH CONTROL parameters**


<img width="260" alt="image" src="https://github.com/federicoalferreri/ACTAM_project/assets/115798271/f1b4d827-ac4d-4c24-b07c-bddc8e95521c">

- Envelope Controls: the interface allows the user to adjust the attack time, release time, and note length, which affect how the synthesizer generates sound.

- Vibrato and Delay Controls: vibrato speed, vibrato amount, delay amount, time and feedback are included to add modulation and delay effects to the sound.


***We'll now provide some basic notions to better understand how digital Music Synthesis works*** 
## 
### SOUND BASICS

The frequency of a soundwave relates to the pitch of the sound we hear. Waveform oscillations can move at different speeds, or frequencies. The faster they move, the higher frequency they have. The higher the frequency, the higher pitched the resultant sound is to our ears.

Most musical sounds are not made up of just one frequency. Instead, sounds are a combination of many different frequencies, called partial tones. The lowest frequency is its fundamental frequency—this is what our ears perceive as the sound's "pitch," while all of the other partial tones combine to create a sense of timbre, or tone.

Each waveform has a spectrum of partials associated with it and lots of different sounds go into defining the quality of any resulting sound. The alteration of a waveform’s shape will result in the rearrangement of the partials, creating audible changes in the sound.


### The difference between waveforms

Waveforms are the starting point of synthesis—and of all sound. In a synthesizer, an oscillator creates a repeated signal of a waveform. This waveform is what gets altered through synthesis. Different waveforms have different characteristics, which results in different sounds. Listed below, the ones we chose to use and how they relate to sound synthesis.


<img width="1080" alt="image" src="https://github.com/federicoalferreri/ACTAM_project/assets/115798271/02d6d127-19be-416d-8698-4195f0464970">



- **Sine Wave**: The sound of a sine wave is only made up of the fundamental frequency alone and no partials are involved. It will result in a smooth and clean sound.

- **Square Wave**:  In addition to the fundamental, the square wave also contains harmonics, partial tones whole multiples of the fundamental frequency. In square waves, harmonics occur in whole odd-number multiples of the fundamental frequency resulting in a richer and buzzier sound.

- **Triangle Wave**: A triangle wave contains the same odd harmonics as a square wave but, unlike a square wave, they taper off as they get further away from the fundamental. The resulting is not as buzzy as the one generated by the square wave and sometimes it may also be clearer and brighter than the one of the sine wave. 

- **Sawtooth Wave**: Also called a saw wave. It generates the buzziest sound among all previously mentioned ones and that’s because it’s the richest in terms of harmonics. This means it can be a really appropriate choice for when you’re working with subtractive synthesis (filtering frequencies instead of adding them one of top of the other). 

## 

### ENVELOPE

In sound and music, an envelope describes how a sound changes over time. The most basic envelope generator is controlled with four parameters: attack, decay, sustain and release (ADSR).

![image](https://github.com/federicoalferreri/ACTAM_project/assets/115798271/d2e128d0-5018-4323-ae52-78243949f9db)

- Attack Time: time taken for the rise of the level from nil to peak.
- Decay Time: time taken for the level to reduce from the attack level to the sustain level.
- Sustain Level:level maintained until the key is released.
- Release Time: time taken for the level to decay to nil.

#
  
### MODULATION & DELAY EFFECTS

The *Vibrato* results in a change of pitch of the generated sound meanwhile the *Delay Effect* can be used to create echoes of said sound.

**Vibrato parameters**
- Amount: affects the amplitude of the LFO. This narrows or widens the amount of pitch variation the effect will produce.
- Speed / Rate: controls the frequency of the LFO and, therefore, the speed of the perceived pitch variation.

**Delay Effect parameters**
- Delay Time: time (in milliseconds) between the source signal and its echo.
- Delay Feedback: amount of the signal that you’d like to feed back into the input of your delay to create echoes. The more feedback, the greater the number of echoes.
- Delay Amount: gain parameter.










