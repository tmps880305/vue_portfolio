<template>
  <div style="padding-top: 80px; background-color: transparent">

    <!--Page 1-->
    <b-container fluid style="height: 90vh">
      <b-row class="mb-3 justify-content-center">
        <b-col xl="8">
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

              <!--Affinity Diagram-->:data="mtvInfo" :key="mtvInfo.id
              <b-row class="mt-3 mb-3">
                <div class="t-tl-2 ">
                  <a>Affinity Diagram Process</a>
                </div>
                <div>
                  <b-row class="justify-content-center mt-3">
                    <b-col col md="8">
                      <img :src="affinityDiagramPic1" style="width: 100%">
                    </b-col>
                  </b-row>
                </div>

                <div class="t-it-1 mt-3">
                  <ul style="list-style-type: decimal">
                    <li>Each team member posted more than 75 notes on Miro (image above), showing insights and answers
                      collected from participants in the interview we done to discover usability issues in Zoom. On
                      Miro, <a style="color: #EEDA1F;">yellow</a> labels were used to build our basic affinity diagram.
                    </li>
                    <li><a style="color: #EEDA1F;">Yellow</a> labels were separated into groups, and for each group a
                      bottom-level label (<a style="color: #31C0B5">blue</a>) were given by extracting our understanding
                      from all notes. (image above)
                    </li>
                    <li>Temporary top-level labels (<a style="color: #B1E93F;">green</a>) were created according to
                      bottom-level labels (blue), and all the notes were reorganized into groups under temporary
                      top-level labels (<a style="color: #B1E93F;">green</a>). After all notes fit into groups,
                      temporary top-level labels were concluded to top-level labels
                      (<a style="color: #B1E93F;">green</a>).
                    </li>
                    <li>By discovering thoughts and opinions from users, middle-level labels (<a style="color: #FFB1CC">pink</a>)
                      were added into groups.
                    </li>
                    <li>Top-level labels (<a style="color: #B1E93F;">green</a>) were re-defined for serveral times and
                      the affinity diagram was completed after the top-level was finalized.
                    </li>
                  </ul>
                </div>

                <div>
                  <b-row class="justify-content-center mt-3">
                    <b-col col md="8">
                      <img :src="affinityDiagramPic2" style="width: 100%">
                    </b-col>
                  </b-row>
                </div>

              </b-row>

              <!--Contextual Inquiry-->
              <b-row class="mt-3 mb-3">
                <div class="t-tl-2 mb-3">
                  <a>Contextual Inquiry Process</a>
                </div>

                <div class="t-it-1">
                  <ul>
                    <li>Our group conducted interviews for the contextual inquiry. Some members conducted a group
                      interview where an online class via Zoom was simulated, while other members individually
                      interviewed users.
                    </li>
                    <li>For the interview questions, we brainstormed 12 questions in total based on three parts:
                      <ul>
                        <li>Before the meeting</li>
                        <li>During the meeting</li>
                        <li>After the meeting</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </b-row>

              <!--Creating Persona-->
              <b-row class="mt-3 mb-3">
                <div class="t-tl-2 mt-3 mb-3">
                  <a>Persona</a>
                </div>

                <b-row class="mt-3 mb-3">
                  <b-col xl="6" v-for="persona in personaPics" :data="persona" :key="persona.id">
                    <div>
                      <img :src="require('../assets/img/works/zoomredesign/persona/'+persona)" style="width: 100%">
                    </div>
                  </b-col>
                </b-row>

                <div class="mt-3 mb-3">
                  <div class="t-tl-3">
                    <a>Summarizing the interviews and give the subjects code names</a>
                  </div>

                  <!--Code names-->
                  <b-row class="t-it-1">
                    <b-col>
                      <ul>
                        <li v-for="codename in personaCodeNames" :data="codename" :key="codename.name">{{codename.name}}
                          <ul>
                            <li v-for="sentence in codename.codes" :data="sentence" :key="sentence.id">{{sentence}}</li>
                          </ul>
                        </li>
                      </ul>
                    </b-col>
                  </b-row>

                  <!--Step1-->
                  <b-row class="mt-3 mb-3">
                    <div class="t-tl-3">
                      <a>Step 1: Figure out the roles and group the subjects to those roles</a>
                    </div>
                    <div class="t-it-1">
                      <ul>
                        <li>Role 1: Person who participates in the class meeting by zoom (P2, P3, R1, R2, J1, S1, S2,
                          S3)
                        </li>
                        <li>Role 2: Person who is reluctant to use zoom as a tool for online class</li>
                        <li>Role 3: Person who initiate zoom meeting for a class (P1)</li>
                        <li>ole 4: Person who uses zoom for personal meetings (J2)</li>
                      </ul>
                    </div>
                  </b-row>

                  <!--Step2-->
                  <b-row class="mt-3 mb-3">
                    <div class="t-tl-3">
                      <a>Step 2: Identifying behavioral variables</a>
                    </div>
                    <b-col>
                      <div class="t-it-1">
                        <ul>
                          <li>Activities: What the user does and how often (How often do users use zoom)</li>
                          <li>Attitude: How the user thinks about the product domain and technology</li>
                          <li>Aptitudes: What education the user has (or ability to learn)</li>
                          <li>Motivation: Why the user is using this product</li>
                          <li>Skills: Abilities to use the product</li>
                        </ul>
                      </div>
                    </b-col>
                  </b-row>

                  <!--Step3+4-->
                  <b-row class="mt-3 mb-3">
                    <div class="t-tl-3">
                      <a>Step 3+4: Mapping behavioral variables and rewrite the map</a>
                    </div>
                    <div>
                      <b-row class="justify-content-center mt-3">
                        <b-col col md="8">
                          <img :src="behavioralVarPic" style="width: 100%">
                        </b-col>
                      </b-row>
                    </div>
                  </b-row>

                  <!--Step5-->
                  <b-row class="mt-3 mb-3">
                    <div class="t-tl-3">
                      <a>Step 5: Synthesize the characteristics and define their goals</a>
                    </div>
                    <div class="t-it-1">
                      <a></a>
                    </div>
                  </b-row>

                  <!--Step6-->
                  <b-row class="mt-3 mb-3">
                    <div class="t-tl-3">
                      <a>Step 6: Distribute personas to the corresponding types</a>
                    </div>
                    <div class="t-it-1">
                      <a></a>
                    </div>
                  </b-row>

                  <!--Reference-->
                  <b-row class="mt-3 mb-3">
                    <div class="t-tl-3">
                      <a>Reference: Resources used for creating persona</a>
                    </div>
                    <div class="t-it-1">
                      <ul>
                        <li>http://random-name-generator.info/</li>
                        <li>https://www.pexels.com/</li>
                        <li>https://www.gettyimages.com/</li>
                        <li>https://unsplash.com/</li>
                      </ul>
                    </div>
                  </b-row>

                </div>

              </b-row>

              <!--Lo-fi-->
              <b-row class="mt-3 mb-3">
                <div class="t-tl-2 mt-3 mb-3">
                  <a>Lo-fi Prototype</a>
                </div>
                <div>
                  <b-row class="justify-content-center mt-3">
                    <b-col col md="8">
                      <img :src="lofiPic" style="width: 100%">
                    </b-col>
                  </b-row>
                </div>
              </b-row>

              <!--Hi-fi-->
              <b-row class="mt-3 mb-3">
                <div class="t-tl-2 mt-3 mb-3">
                  <a>Hi-fi Prototype</a>
                </div>
                <div>
                  <b-row class="justify-content-center mt-3">
                    <b-col col md="8">
                      <img :src="hifiPic" style="width: 100%">
                    </b-col>
                  </b-row>
                </div>
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
  export default {
    name: 'ZoomRedesign',
    components:{
      Copyrights
    },
    data() {
      return {
        mainPic: require('../assets/img/works/zoomredesign/ZoomRedesign_main.jpg'),
        secondPic: require('../assets/img/works/zoomredesign/ZoomRedesign_second.jpg'),
        affinityDiagramPic1: require('../assets/img/works/zoomredesign/AffinityDiagram_1.jpg'),
        affinityDiagramPic2: require('../assets/img/works/zoomredesign/AffinityDiagram_2.jpg'),
        behavioralVarPic: require('../assets/img/works/zoomredesign/BehavioralVariables.jpg'),
        lofiPic: require('../assets/img/works/zoomredesign/Lo-fi_schedule.jpg'),
        hifiPic: require('../assets/img/works/zoomredesign/Hi-fi.png'),
        mainInfos: [{
          id: 0, title: 'Tags', items: ['Prototyping', 'UI Design', 'UX Design']
        }, {
          id: 1, title: 'My Role', items: ['UX Researcher', 'UI Developer']
        }, {
          id: 2, title: 'Tools', items: ['figma.png', 'miro.png']
        }],
        motivateInfos: [{
          id: 0,
          title: 'Prompt',
          sentence: 'Zoom has become a popular courses meeting application since the rise of remote teaching.'
        }, {
          id: 1,
          title: 'Problem',
          sentence: 'Zoom could be improved to be more usable for online courses.'
        }, {
          id: 2,
          title: 'Solution',
          sentence: 'Redesign the user interface for Zoom after conducting usability survey and analysis.'
        }],
        intro: {
          title: 'Introduction',
          content: 'Interface control could become hand-free to provide accessibility for people in hand-busy situations.Interface control could become hand-free to provide accessibility for people in hand-busy situations.Interface control could become hand-free to provide accessibility for people in hand-busy situations.'
        },
        process: {title: 'Process', img: require('../assets/img/photo/IMG_0601.jpg')},
        personaCodeNames: [{
          name: 'Leah',
          codes: ['P1:  A TA who is working at UCSD that needs to take some online tutoring for the students via Zoom. He complained about the screen and file sharing problems when he conducted with multiple students during his teaching. Also he couldn’t find how to quickly set up a discussion room for separating the students when he distributed some tasks for them.', 'P2: A graduate student with visual communication background at CCA and currently taking online courses through Zoom. She found some interaction problems both with students and the TA during the zoom meeting.', 'P3: An ex computer science background graduate student who was taking online courses via Zoom meeting. However, he only used Zoom while he was required to. Due to some privacy concerns like the mute function, he will keep worrying about if he has been mute or not during the whole meeting. So that he doesn\'t have much good feelings about this app.']
        }, {
          name: 'Litong',
          codes: ['L1: A male graduate student of VCD in RIT. He lives in Rochester now but he does not like going to school to have a class. He took most of his class through Zoom. ', 'L2: A male graduate student of Computer Science in RIT. He also lives in Rochester now. But he is not a fan of Zoom. If he has a chance to be in class he does not like to use Zoom. Because he thinks communicating using Zoom is not as close to classmates and professors as face to face.']
        }, {
          name: 'Jiaxuan',
          codes: ['S1: A graduate student with computer science background at CMU who is taking online classes at home now. She used zoom only for classes, and really liked the recording function, because she could use it to record her presentation. She complained about the difficulty of using her school account to log in to zoom, and that her professors often ignored the “hand raising” function used by her classmates. ', 'S2: A graduate student with metal and jewelry design background at RIT. She likes virtual background very much, especially when she just gets up and doesn\'t have time to clean up her room. And she only uses it for classes and group meetings. She thinks there are too few emoji in the chat box.', 'S3: A graduate student with visual communication design background at RIT. He used zoom for classes and attended school webinars. When others share the screen, he can mark and doodle on it so that others can better understand what he means, but he also said that the function of the brush is hidden too deeply, which is not easy to find.']
        }, {
          name: 'Juliann',
          codes: ['J1: A graduate student at RIT who is studying remotely at home. Finds that the interface isn’t customizable enough, and wishes there were more organizational options available for different group zoom meetings. Only uses zoom for educational purposes, and is somewhat tech savvy.', 'J2: an ex student who experienced using zoom in an academic setting in the spring of 2020 when RIT switched to online. Has graduated since, and has found other alternatives in the workplace to be more convenient (Microsoft teams) because of the ease of scheduling a meeting with workers. Only uses zoom for personal reasons, such as connecting with family and friends during these times. Used zoom to present her final senior project, and found interacting with fellow students to be difficult.']
        }, {
          name: 'Jeni',
          codes: ['R1: An RIT graduate student who has to take courses remotely. He complains about the interface and some functions. The chat box covers the main screen and reactions are not enough for him. Also, he wishes that the mute function could be improved. However, he still relies on Zoom, so  it’s not easy for him to change to another platform.  ', 'R2: An RIT undergraduate student who takes courses remotely. She is satisfied with most      parts of Zoom now, but if there is another platform more attractive to her, she will try to use it. For Zoom, she personally wants the chat box to be placed at the bottom of the screen.']
        }],
        personaPics: ['p1_PrimaryPersona.jpg', 'p2_SecondaryPersona.jpg', 'p3_SecondaryPersona.jpg', 'p4_AntiPersona.jpg'],
      }
    },
    methods: {},
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+SC|Merienda|Niconne|Nunito+Sans|Romanesco&display=swap');
  @import './../assets/css/text.css';

</style>
