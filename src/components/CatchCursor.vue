<template>
  <div style="padding-top: 80px; background-color: transparent">

    <!--Page 1-->
    <b-container fluid style="height: 90vh">
      <b-row class="mb-3" align-h="center">
        <b-col xl="8" align-h="center">
          <div class="ratio ratio-16x9">
            <img :src="mainPic">
          </div>
        </b-col>
      </b-row>

      <b-row cols="3" class="justify-content-center">
        <b-col xl="2" style="background-color: transparent; text-align: center" v-for="mainInfo in mainInfos"
               :data="mainInfo" :key="mainInfo.title">
          <div class="t-tl-1">
            <a>{{mainInfo.title}}</a>
          </div>

          <div v-if="mainInfo.id <mainInfos.length-1" class="t-it-1">
            <a v-for="item in mainInfo.items" :data="item" :key="item.id">{{item}}<br></a>
          </div>
          <div v-else-if="mainInfo.id ===2">
            <b-row class="justify-content-center">
              <b-col cols="3" v-for="item in mainInfo.items" :data="item"
                     :key="item.id">
                <div style="height: 60px">
                  <img :src="require('../assets/img/draft/tool_icon/'+item)" style="height: 100%">
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <!--Page 2-->
    <b-container fluid style="height: 90vh">

      <!--Start of page-->
      <b-row>
        <b-col>
          <div style="height: 60px;background-color: transparent"></div>
          <div style="height: 120px;background-color: transparent"></div>
        </b-col>
      </b-row>
      <!---->

      <b-row class="justify-content-center">
        <b-col xl="3" align-self="center">
          <div v-for="mtvInfo in motivateInfos" :data="mtvInfo" :key="mtvInfo.id"
               style="background-color: transparent;">
            <div class="mb-3">
              <div class="t-it-1">{{mtvInfo.title}}</div>
              <div class="t-it-2">{{mtvInfo.sentence}}</div>
            </div>
          </div>
        </b-col>

        <b-col xl="3">
          <div class="ratio" style="--bs-aspect-ratio: 150%">
            <img :src="secondPic">
          </div>
        </b-col>
      </b-row>

      <!--End of page-->
      <b-row>
        <b-col>
          <div style="height: 60px;background-color: transparent"></div>
        </b-col>
      </b-row>
      <!---->
    </b-container>

    <!--Page 3-->
    <b-container fluid>
      <!--Start of page-->
      <b-row>
        <b-col>
          <div style="height: 60px;background-color: transparent"></div>
          <div style="height: 120px;background-color: transparent"></div>
        </b-col>
      </b-row>
      <!---->

      <b-row class="justify-content-center">
        <b-col xl="6">
          <b-row>
            <div style="background-color: transparent">
              <div class="t-tl-1">{{intro.title}}</div>
              <div class="t-it-1">{{intro.content}}</div>
            </div>
          </b-row>

          <b-row>
            <div style="height: 60px;background-color: transparent">
            </div>
          </b-row>

          <b-row>
            <div style="background-color: transparent">
              <div class="t-tl-1">{{process.title}}</div>
              <div style="height: 120px;background-color: lightblue">
                <img :src="process.img" style="height: 100%; width: 100%">
              </div>
            </div>
          </b-row>

        </b-col>
      </b-row>
    </b-container>

    <!--Page 4-->
    <b-container fluid>
      <!--Start of page-->
      <b-row>
        <b-col>
          <div style="height: 60px;background-color: transparent"></div>
        </b-col>
      </b-row>
      <!---->

      <b-row class="justify-content-center">
        <b-col xl="6">
          <b-row>
            <div style="background-color: transparent">
              <div class="t-tl-1">
                <a>Approach</a>
              </div>

              <!--Workflow-->
              <b-row class="justify-content-center mt-3 mb-3">
                <b-col col md="8">
                  <img :src="workflowPic">
                </b-col>
              </b-row>

              <!--Approach Content-->
              <b-row class="mt-3 mb-3">
                <div class="t-it-1">
                  <ul style="list-style-type: decimal">
                    <li>Receiving speech input from the user</li>
                    <li>Construct dataset and speech recognition module</li>
                    <li>Build speech recognition on Raspberry Pi server</li>
                    <li>Build cursor control client</li>
                  </ul>
                </div>

                <!--Receive speech input-->
                <b-row class="mt-3 mb-3">
                  <div class="t-tl-2 mb-3">
                    <a>Receiving speech input from the user</a>
                  </div>

                  <b-row class="t-it-1 mb-3">
                    <a>A Logitech C310 HD Webcam with built-in microphone is used to receive speech input from the user
                      since the built-in microphone supports 16000 Hz sampling rate which matched settings of the
                      dataset
                      and speech recognition module. The webcam is connected to the Raspberry Pi through USB port and
                      would be run by Python codes when the system launched.
                    </a>
                  </b-row>
                </b-row>

                <!--Dataset-->
                <b-row class="mt-3 mb-3">
                  <div class="t-tl-2 mb-3">
                    <a>Construct dataset and speech recognition module</a>
                  </div>

                  <b-row class="mb-3">
                    <div class="t-tl-3">
                      <a>Dataset Construction</a>
                    </div>
                    <div class="t-it-1">
                      <a>The dataset was composed with keywords in Google Speech Commands Datasets, and a customized
                        keyword.
                        The customized keyword was generated through Digi-key Python curator by blending self-recorded
                        keyword audio files with Google Speech Commands Datasets. The self-created audio resources,
                        which
                        were 1 second, 16kHz .wav file for each, were recorded by ourselves and managed by
                        Audacity.</a>
                    </div>
                  </b-row>

                  <!--Edge Impulse-->
                  <b-row class="mb-3">
                    <div class="t-tl-3">
                      <a>Speech Recognition Module</a>
                    </div>
                    <div class="t-it-1">
                      <a><img :src="edgeLogo" style="height: 26px">, a no-code machine learning web system, was selected
                        to construct the speech recognition module. First, an audio Edge Impulse project was created and
                        all the prepared keyword datasets were uploaded to the data acquisition in folder-base batches.
                        Next, the impulse was created with parameters: 16 kHz frequency, MFCC type, and Keras
                        classifier. The classifier was then trained with default MFCC and classifier parameters. 73.7%
                        accuracy was obtained after the module was trained.</a>
                    </div>

                  </b-row>
                  <b-row class="justify-content-center mt-3">
                    <b-col xl="6">
                      <img :src="edgeAccuracyPic" style="width: 100%">
                    </b-col>
                  </b-row>

                </b-row>


                <!--Raspberry server-->
                <b-row class="mt-3 mb-3">
                  <div class="t-tl-2 mb-3">
                    <a>Build speech recognition on Raspberry Pi server</a>
                  </div>
                  <b-row class="mb-3">
                    <div class="t-tl-3">
                      <a>Raspberry Pi Server</a>
                    </div>
                    <div class="t-it-1">
                      <a><img :src="raspberryPic" style="height: 30px">Raspberry Pi was used to run the Python server
                        script. The speech recognition module in Edge Impulse could be downloaded as a .eim file to
                        Raspberry Pi by Edge-Impulse-Linux-Runner. Then, the impulse could be imported into the Python
                        code with functions available. In the Python script, the Logitech webcam with a built-in
                        microphone was used as input, and speech recognition results would be returned from classifier
                        functions. A list of similarity rates for each keyword labels would be returned and the keyword
                        with rates over 0.6 would be identified. With the identification of the user input, we could
                        connect with the client-side Python code with socket communication to complete the task of
                        moving and clicking the cursor. A white LED was connected to GPIO 26 port to provide current
                        status of the server.</a>
                    </div>

                  </b-row>
                </b-row>

                <!--Client-->
                <b-row class="mt-3 mb-3">
                  <div class="t-tl-2 mb-3">
                    <a>Build cursor control client</a>
                  </div>
                  <b-row class="mb-3">
                    <div class="t-it-1">
                      <a>This client was constructed with Python script and run on the other device to communicate with
                        the server-end and to manipulate the cursor on this device. When the client receives the
                        triggering command, which is the customized keyword, the grids, generated by Tkinter, would
                        display and cover the screen. The grids function as references for the user to decide the
                        destination to move the cursor. After the user select the destination, the cursor would be moved
                        to the target place and click, using Pyautogui, which could simulate mouse actions with
                        Python.</a>
                    </div>
                    <b-row class="justify-content-center mt-3 mb-3">
                      <b-col xl="8">
                        <img :src="clientPic1" style="width: 100%">
                      </b-col>
                      <b-col x="2">
                        <img :src="clientPic2" style="width: 100%">
                      </b-col>
                    </b-row>
                  </b-row>
                </b-row>

              </b-row>

              <!--Demo-->
              <b-row class="mt-3 mb-3">
                <div class="t-tl-1">
                  <a>Demonstrations</a>
                </div>
                <b-row class="justify-content-center" v-for="demoVideo in demoVideos" :data="demoVideo"
                       :key="demoVideo.id">
                  <b-col>
                    <vimeo-player ref="player" :video-id="demoVideo.videoID" @ready="onReady(demoVideo)"
                                  :player-height="demoVideo.videoHeight" allow="allowfullscreen"
                                  allowfullscreen></vimeo-player>
                  </b-col>
                </b-row>
              </b-row>

            </div>
          </b-row>
        </b-col>
      </b-row>

      <!--End of page-->
      <b-row>
        <div style="height: 180px;background-color: transparent">
        </div>
      </b-row>
      <!---->
    </b-container>

    <!--Page 5-->
    <Copyrights/>

  </div>
</template>

<script>
  import Copyrights from '../components/Copyrights.vue'
  import {vueVimeoPlayer} from 'vue-vimeo-player'

  export default {
    name: 'CatchCursor',
    components: {
      Copyrights, vueVimeoPlayer
    },
    data() {
      return {
        mainPic: require('../assets/img/works/catchcursor/CatchCursor_main.jpg'),
        secondPic: require('../assets/img/works/catchcursor/CatchCursor_second.png'),
        workflowPic: require('../assets/img/works/catchcursor/workflow.jpg'),
        clientPic1: require('../assets/img/works/catchcursor/client_1.jpg'),
        clientPic2: require('../assets/img/works/catchcursor/client_2.jpg'),
        edgeLogo: require('../assets/img/works/catchcursor/edgeimpulse_logo.png'),
        edgeAccuracyPic: require('../assets/img/works/catchcursor/edgeimpulse_accuracy.jpg'),
        raspberryPic: require('../assets/img/draft/tool_icon/raspberry.png'),
        mainInfos: [{
          id: 0, title: 'Tags', items: ['Prototyping', 'UI/UX Develop', 'IoT Develop', 'Machine Learning']
        }, {
          id: 1, title: 'My Role', items: ['Main Developer', 'UI Developer', 'UX Researcher']
        }, {
          id: 2, title: 'Tools', items: ['raspberry.png', 'python.png', 'edgeimpulse.png']
        }],
        motivateInfos: [{
          id: 0,
          title: 'Prompt',
          sentence: 'Interface control could become hand-free to provide accessibility for people in hand-busy situations.'
        }, {
          id: 1,
          title: 'Problem',
          sentence: 'Construct Voice User Interface to allow the user to control devices with speech input.'
        }, {
          id: 2,
          title: 'Solution',
          sentence: 'Construct Voice User Interface to allow the user to control devices with speech input.'
        }],
        intro: {
          title: 'Introduction',
          content: 'The application of voice user interfaces in digital devices has been increasing significantly in recent times. Speech has been considered the most naturalistic and convenient way of communicating, thus enabling its use in operating different technological devices has become essential. One of the major motivations to implement it is to provide accessibility for people with motor impairments and disabilities. In this project, we present a model that helps in navigating the mouse and keyboard inputs by voice-based interaction system called ‘Catch-Cursor’ that navigates the cursor through voice commands on the digital screens. The voice commands are obtained using a speech module on Arduino, processed with machine learning on Edge Impulse, and controlled using the PyAutoGUI library on Python.'
        },
        process: {title: 'Process', img: require('../assets/img/photo/IMG_0601.jpg')},
        demoVideos: [{
          videoID: '759682871', videoHeight: 400, playerReady: false
        }, {
          videoID: '759683135', videoHeight: 400, playerReady: false
        }]
      }
    },
    methods: {
      onReady(val) {
        val.playerReady = true
      },
      play() {
        this.$refs.player.play()
      },
      stop() {
        this.$refs.player.stop()
      }
    },
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+SC|Merienda|Niconne|Nunito+Sans|Romanesco&display=swap');
  @import './../assets/css/text.css';


</style>
