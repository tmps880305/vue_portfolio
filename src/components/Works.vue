<template>
  <div style="padding-top: 80px; background-color: lightgray">

    <!--Page 1-->
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col col xl="8" style="background-color: lightblue; height: 720px">image</b-col>
      </b-row>
      <b-row class="justify-content-center" style="height: 175px">
        <b-col xl="2" style="background-color: lightpink; text-align: center">
          <div class="t-tl-1">
            <a>Tags</a>
          </div>
          <div class="t-it-1">
            <a>Accessibility</a><br>
            <a>UX Design</a><br>
            <a>Usability Test</a>
          </div>
        </b-col>
        <b-col xl="2" style="background-color: lightcyan; text-align: center">
          <div class="t-tl-1">
            <a>My Role</a>
          </div>
          <div class="t-it-1">
            <a>UI Developer</a><br>
            <a>UX Researcher</a><br>
            <a>System Developer</a>
          </div>
        </b-col>
        <b-col xl="2" style="background-color: lightpink; text-align: center">
          <div class="t-tl-1">
            <a>Tools</a>
          </div>
          <b-row class="justify-content-center">
            <b-col xl="1" offset-xl="1" style="background-color: lightblue; text-align: center">A</b-col>
            <b-col xl="1" offset-xl="1" style="background-color: lightblue; text-align: center">A</b-col>
            <b-col xl="1" offset-xl="1" style="background-color: lightblue; text-align: center">A</b-col>
            <b-col xl="1" offset-xl="1" style="background-color: lightblue; text-align: center">A</b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <!--Page 2-->
    <b-container fluid>

      <!--Start of page-->
      <b-row>
        <b-col>
          <div style="height: 60px;background-color: lightgoldenrodyellow"></div>
          <div style="height: 120px;background-color: lightgoldenrodyellow"></div>
        </b-col>
      </b-row>
      <!----------------->

      <b-row class="justify-content-center">
        <b-col xl="3" align-self="center">
          <div style="background-color: lightpink;">
            <div>
              <div class="t-it-1">
                <a>Prompt</a>
              </div>
              <div class="t-it-2">
                <a>Interface control could become hand-free to provide accessibility for people in hand-busy
                  situations.</a>
              </div>
            </div>
            <br>

            <div>
              <div class="t-it-1">
                <a>Problem</a>
              </div>
              <div class="t-it-2">
                <a>People with hand-related impairments or situational impairments would have a hard time applying
                  physical interface control.</a>
              </div>
            </div>
            <br>

            <div>
              <div class="t-it-1">
                <a>Solution</a>
              </div>
              <div class="t-it-2">
                <a>Construct Voice User Interface to allow the user to control devices with speech input.</a>
              </div>
            </div>
          </div>
        </b-col>
        <b-col xl="3">
          <div style="height: 720px;background-color: lightblue"><a>image</a></div>
        </b-col>
      </b-row>

      <!--End of page-->
      <b-row>
        <b-col>
          <div style="height: 60px;background-color: lightgoldenrodyellow"></div>
        </b-col>
      </b-row>
      <!----------------->
    </b-container>

    <!--Page 3-->
    <b-container fluid>
      <!--Start of page-->
      <b-row>
        <b-col>
          <div style="height: 60px;background-color: lightgoldenrodyellow"></div>
          <div style="height: 120px;background-color: lightgoldenrodyellow"></div>
        </b-col>
      </b-row>
      <!----------------->

      <b-row class="justify-content-center">
        <b-col xl="6">
          <b-row>
            <div style="background-color: lightpink">
              <div class="t-tl-1">
                <a>Introduction</a>
              </div>

              <div class="t-it-1">
                <a>Interface control could become hand-free to provide accessibility for people in hand-busy
                  situations.Interface control could become hand-free to provide accessibility for people in hand-busy
                  situations.Interface control could become hand-free to provide accessibility for people in hand-busy
                  situations.</a>
              </div>
            </div>
          </b-row>

          <b-row>
            <div style="height: 60px;background-color: lightgoldenrodyellow">
            </div>
          </b-row>

          <b-row>
            <div style="background-color: lightpink">
              <div class="t-tl-1">
                <a>Progress</a>
              </div>
              <div style="height: 120px;background-color: lightblue">
                image
              </div>
            </div>
          </b-row>

          <b-row>
            <div style="height: 60px;background-color: lightgoldenrodyellow">
            </div>
          </b-row>

          <b-row>
            <div style="background-color: lightpink">
              <div class="t-tl-1">
                <a>Approach</a>
              </div>

              <div class="t-it-1">
                <ul style="list-style-type: decimal">
                  <li>Receiving speech input from the user</li>
                  <li>Construct dataset and speech recognition module</li>
                  <li>Build speech recognition on Raspberry Pi server</li>
                  <li>Build cursor control client</li>
                </ul>
                <div class="mt-3 mb-3" style="height: 540px;background-color: lightblue">
                  image
                </div>

                <div class="t-tl-2 mt-3">
                  <a>Receiving speech input from the user</a>
                </div>

                <div class="t-it-1 mb-3">
                  <a>A Logitech C310 HD Webcam with built-in microphone is used to receive speech input from the user
                    since the built-in microphone supports 16000 Hz sampling rate which matched settings of the dataset
                    and speech recognition module. The webcam is connected to the Raspberry Pi through USB port and
                    would be run by Python codes when the system launched.
                  </a>
                </div>
                <div class="t-tl-2 mt-3 mb-3">
                  <a>Construct dataset and speech recognition module</a>
                </div>

                <div>
                  <div class="mt-3 mb-3">
                    <div class="t-tl-3">
                      <a>Dataset Construction</a>
                    </div>
                    <div class="t-it-1">
                      <a>The dataset was composed with keywords in Google Speech Commands Datasets, and a customized
                        keyword.
                        The customized keyword was generated through Digi-key Python curator by blending self-recorded
                        keyword audio files with Google Speech Commands Datasets. The self-created audio resources,
                        which
                        were 1 second, 16kHz .wav file for each, were recorded by ourselves and managed by Audacity.</a>
                    </div>
                  </div>

                  <div class="mt-3 mb-3">
                    <div class="t-tl-3">
                      <a>Speech Recognition Module</a>
                    </div>
                    <div class="t-it-1">
                      <a>Edge Impulse, a no-code machine learning web system, was selected to construct the speech
                        recognition module. First, an audio Edge Impulse project was created and all the prepared
                        keyword
                        datasets were uploaded to the data acquisition in folder-base batches. Next, the impulse was
                        created
                        with parameters: 16 kHz frequency, MFCC type, and Keras classifier. The classifier was then
                        trained
                        with default MFCC and classifier parameters. 73.7% accuracy was obtained after the module was
                        trained.</a>
                    </div>
                  </div>
                </div>

                <div class="t-tl-2 mt-3 mb-3">
                  <a>Build speech recognition on Raspberry Pi server</a>
                </div>
                <div class="mt-3 mb-3">
                  <div class="t-tl-3">
                    <a>Raspberry Pi Server</a>
                  </div>
                  <div class="t-it-1">
                    <a>Raspberry Pi was used to run the Python server script. The speech recognition module in Edge
                      Impulse
                      could be downloaded as a .eim file to Raspberry Pi by Edge-Impulse-Linux-Runner. Then, the impulse
                      could be imported into the Python code with functions available. In the Python script, the
                      Logitech
                      webcam with a built-in microphone was used as input, and speech recognition results would be
                      returned
                      from classifier functions. A list of similarity rates for each keyword labels would be returned
                      and
                      the keyword with rates over 0.6 would be identified.

                      With the identification of the user input, we could connect with the client-side Python code with
                      socket communication to complete the task of moving and clicking the cursor. A white LED was
                      connected
                      to GPIO 26 port to provide current status of the server.</a>
                  </div>
                </div>

                <div class="t-tl-2 mt-3 mb-3">
                  <a>Build cursor control client</a>
                </div>
                <div class="mt-3 mb-3">
                  <div class="t-it-1">
                    <a>This client was constructed with Python script and run on the other device to communicate with
                      the server-end and to manipulate the cursor on this device. When the client receives the
                      triggering command, which is the customized keyword, the grids, generated by Tkinter, would
                      display and cover the screen. The grids function as references for the user to decide the
                      destination to move the cursor. After the user select the destination, the cursor would be moved
                      to the target place and click, using Pyautogui, which could simulate mouse actions with
                      Python.</a>
                  </div>
                </div>

              </div>

            </div>
          </b-row>

          <b-row>
            <div style="height: 60px;background-color: lightgoldenrodyellow">
            </div>
          </b-row>

          <b-row>
            <div style="background-color: lightpink">
              <div class="t-tl-1">
                <a>Demo Video</a>
              </div>
              <div class="mt-3 mb-3" style="height: 540px;background-color: lightblue">
                video
              </div>
              <div class="mt-3 mb-3" style="height: 540px;background-color: lightblue">
                video
              </div>


            </div>
          </b-row>


          <b-row>
            <div style="height: 180px;background-color: lightgoldenrodyellow">
            </div>
          </b-row>

        </b-col>
      </b-row>

      <!--Copyright-->
      <b-row>
        <b-col>
          <div style="height: 80px;background-color: lavender"></div>
        </b-col>
      </b-row>
      <!----------------->
    </b-container>

  </div>

</template>

<script>
  export default {
    name: 'Works',
    data() {
      return {
        selectedCard: -1,
        mainPic: {
          id: '0',
          img: require('@/assets/img/IMG_0601.jpg'),
          topic: 'Traveling Boracay',
          subTopic: 'secret beach behind the island',
          artiLink: '/artiPhoto/mainPic'
        },
        toSeeMore: require('@/assets/img/toSeeMore.png'),
        works: [{
          id: '1', img: require('@/assets/img/works/personalWebsite/perWebTopPic.png'), name: 'perWebTopPic',
          info: 'Snowphfee'
        }, {
          id: '2',
          img: require('@/assets/img/works/oppoassign/opAsignTopPic.png'),
          name: 'opAsignTopPic', info: 'Dispatch System'
        }, {
          id: '3',
          img: require('@/assets/img/works/objectivec/objTopPic.png'), name: 'objTopPic', info: 'Objective-C APP'
        }, {id: '4', img: require('@/assets/img/works/conLab/robot.jpg'), name: 'robot', info: 'Arduino Robot'},
          //   {
          //   id: '5',
          //   img: require('@/assets/img/IMG_5261.jpg'), name: 'IMG_5261'
          // }, {id: '6', img: require('@/assets/img/IMG_1745.jpg'), name: 'IMG_1745'}, {
          //   id: '7',
          //   img: require('@/assets/img/IMG_0601.jpg'),
          //   name: 'IMG_0601'
          // }, {
          //   id: '8',
          //   img: require('@/assets/img/IMG_5608.jpg'),
          //   name: 'IMG_5608'
          // }
        ],
      }
    },
    methods: {
      goToArti(val) {
        switch (val) {
          case 0:
            this.$router.push("ArticleWorkMyweb")
            break
          case 1:
            this.$router.push("ArticleWorkAssign")
            break
          case 2:
            this.$router.push("ArticleWorkObjC")
            break
          case 3:
            this.$router.push("Works")
            break
          case 4:
            alert("To be continued...")
            break
        }
      },
      hoverCard(selectedIndex) {
        this.selectedCard = selectedIndex
      },
      isSelected(cardIndex) {
        return this.selectedCard === cardIndex
      }
    },
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+SC|Merienda|Niconne|Nunito+Sans|Romanesco&display=swap');
  @import './../assets/css/works.css';
  @import './../assets/css/imgHover.css';


  .t-tl-1 {
    font-family: 'Nunito Sans', 'sans-serif';
    font-size: 30px;
    /*letter-spacing: 2px;*/
    color: #000000;
    padding-bottom: 8px;
  }

  .t-tl-2 {
    font-family: 'Nunito Sans', 'sans-serif';
    font-size: 24px;
    /*letter-spacing: 2px;*/
    color: #000000;
  }

  .t-tl-3 {
    font-family: 'Nunito Sans', 'sans-serif';
    font-size: 18px;
    font-weight: bolder;
    /*letter-spacing: 2px;*/
    color: #000000;
  }

  .t-it-1 {
    font-family: 'Nunito Sans', 'sans-serif';
    font-size: 18px;
    letter-spacing: 2px;
    color: #000000;
  }

  .t-it-2 {
    font-family: 'Nunito Sans', 'sans-serif';
    font-size: 22px;
    /*letter-spacing: 2px;*/
    color: #000000;
  }

</style>
