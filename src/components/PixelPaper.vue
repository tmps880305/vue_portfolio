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
          <b-row style="background-color: transparent">
            <b-row class="t-tl-1">
              <a>Approach</a>
            </b-row>

            <b-row class="mt-3 mb-3">
              <div class="t-tl-2 mt-3">
                <a>Kickoff Meeting with Pixel Paper</a>
              </div>
              <div class="t-it-1">
                <a>We went through a kickoff meeting with our client to understand their needs and what we could
                  help.</a>
              </div>

              <div class="t-tl-3 mt-3">
                <a>Agenda</a>
              </div>
              <div class="t-it-1 mb-3">
                <ul>
                  <li>Introduction – Brief introduction between the client and our team.</li>
                  <li>Client Project – First understanding of the project – Pixel Paper.</li>
                  <li>Client Goals – Realize goals our client expected to approach.</li>
                  <li>Project Scope – Insight the current state of Pixel Paper.</li>
                  <li>Participant Profile – Target type of participants that our client would like to reach out.</li>
                  <li>Company Concerns and Disclosures – Determine consent forms considering client company’s
                    requirements.
                  </li>
                </ul>
              </div>

              <div class="t-tl-3">
                <a>Report</a>
              </div>
              <div class="t-it-1 mb-3">
                <a>We concluded the meeting and created a report for the kickoff meeting, making sure
                  that we have the same vision with the client. The below sections were included in the report:</a>
                <ul>
                  <li>Introduction</li>
                  <li>Client Project</li>
                  <li>Client Goals</li>
                  <li>Project Scope</li>
                  <li>Participant Profile</li>
                  <li>Company Concerns and/or Disclosures</li>
                </ul>
              </div>
            </b-row>

            <b-row class="mt-3 mb-3">
              <div class="t-tl-2">
                <a>Hiring Usability Test Participants – Flyer and Screener</a>
              </div>


              <b-row class="mt-3 mb-3">
                <b-col>
                  <div class="t-tl-3">
                    <a>Flyer</a>
                  </div>
                  <div class="t-it-1">
                    <ul>
                      <li>Introduction – Brief introduction between the client and our team.</li>
                      <li>Client Project – First understanding of the project – Pixel Paper.</li>
                      <li>Client Goals – Realize goals our client expected to approach.</li>
                      <li>Project Scope – Insight the current state of Pixel Paper.</li>
                      <li>Participant Profile – Target type of participants that our client would like to reach out.
                      </li>
                      <li>Company Concerns and Disclosures – Determine consent forms considering client company’s
                        requirements.
                      </li>
                    </ul>
                  </div>
                </b-col>

                <b-col class="ratio" style="--bs-aspect-ratio: 130%;">
                  <img :src="flyerPic">
                </b-col>
              </b-row>

              <b-row>
                <div class="t-tl-3">
                  <a>Screener</a>
                </div>
                <div xs="4" class="t-it-1">
                  <a>A Google form survey that examines participants’ demographics to match the client needs.</a>
                </div>
              </b-row>
            </b-row>

            <b-row>
              <b-col>
                <div style="height: 32px;background-color: transparent"></div>
              </b-col>
            </b-row>

            <b-row class="mt-3 mb-3">
              <b-row class="t-tl-2">
                <a>Heuristic Evaluation</a>
              </b-row>
              <div class="t-it-1">
                <a>By going through Heuristic Evaluation, several issues were concluded (main issues listed
                  here):</a>
                <ul>
                  <li>External Consistency</li>
                  <li>Widgets And Labels Near Targets</li>
                  <li>Frequently Used Functions Optimized</li>
                  <li>Frequently Used Functions Optimized</li>
                  <li>Speak The User’s Language</li>
                  <li>Perceptibility Of Feedback</li>
                </ul>
              </div>
            </b-row>

            <b-row class="mt-3 mb-3">
              <b-row class="t-tl-2">
                <a>Test Plan and Test Materials</a>
              </b-row>
              <b-row>
                <div class="t-tl-3">
                  <a>Test Plan</a>
                </div>
                <div class="t-it-1">
                  <a>A test plan report was constructed to determine the preparation of process and contents of the
                    usability test.</a>
                </div>
                <div class="t-tl-3 mt-3">
                  <a>Test Materials</a>
                </div>
                <div class="t-it-1">
                  <a>A test materials report to list forms, questionnaires, and materials to be used in the
                    usability
                    test.</a>
                </div>
              </b-row>

            </b-row>

            <b-row class="mt-3 mb-3">
              <div class="t-tl-2">
                <a>Pilot Test</a>
              </div>
              <div class="t-it-1">
                <a>A pilot test was launched to examine the completeness of the test plan before testing with
                  participants. Several issues were found to be improved.</a>
                <ul>
                  <li>The participant might need to be reminded about the ‘Think out loud’ action.</li>
                  <li>The system was unstable since it was a Hi-fi prototype.</li>
                </ul>
              </div>
            </b-row>

            <b-row class="mt-3 mb-3">
              <div class="t-tl-2">
                <a>Usability Test</a>
              </div>
              <div class="mb-3">
                <div class="t-it-1 mb-3">
                  <a>A formal usability test was launched after improving problems in the pilot test.</a>
                </div>

                <b-row class="justify-content-center mb-3">
                  <b-col col md="8" class="ratio-16x9">
                    <img :src="UsabilityTestPic" style="width: 100%">
                  </b-col>
                </b-row>
              </div>
            </b-row>

            <b-row class="mt-3 mb-3">
              <div class="t-tl-2">
                <a>Results</a>
              </div>

              <div class="t-it-1">
                <a>Improvements that we suggested after the usability tests:</a>
              </div>
              <div class="t-tl-3 mt-3">
                <a>Design</a>
              </div>
              <div class="t-it-1">
                <ul>
                  <li>Improve the completeness of the interaction.</li>
                  <li>Message looks like email page instead of chat page, and not maintain consistency with similar
                    products.
                  </li>
                  <li>Dashboard more looks like the home page.</li>
                </ul>
              </div>

              <div class="t-tl-3 mt-3">
                <a>Functionality</a>
              </div>
              <div class="t-it-1">
                <ul>
                  <li>Participants features interest: Dark mode, Due date</li>
                </ul>
              </div>

              <div class="t-tl-3 mt-3">
                <a>Future Study</a>
              </div>
              <div class="t-it-1">
                <ul>
                  <li>Testing the usability of the app version for iOS platform.</li>
                  <li>Test under different environments.
                    <ul>
                      <li>Visibility under different ambient lights</li>
                      <li>Usability under various using condition (like standing, walking, etc)</li>
                    </ul>
                  </li>
                  <li>If the system could be developed into a more complete version, more detail tests could be done:
                    <ul>
                      <li>Free to search and browse papers, and add to collections</li>
                      <li>Create actual documents or files in the Locker</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </b-row>

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
    name: 'PixelPaper',
    components: {
      Copyrights
    },
    data() {
      return {
        mainPic: require('../assets/img/works/pixelpaper/PixelPaper_main_2.jpg'),
        secondPic: require('../assets/img/works/pixelpaper/PixelPaper_second.png'),
        flyerPic: require('../assets/img/works/pixelpaper/Flyer.jpg'),
        UsabilityTestPic: require('../assets/img/works/pixelpaper/UsabilityTest.jpg'),
        mainInfos: [{
          id: 0, title: 'Tags', items: ['Usability Test', 'UX Research', 'Heuristic Evaluation']
        }, {
          id: 1, title: 'My Role', items: ['UX Researcher', 'Usability Tester']
        }, {
          id: 2, title: 'Tools', items: ['miro.png', 'figma.png']
        }],
        motivateInfos: [{
          id: 0,
          title: 'Prompt',
          sentence: 'Evaluate usability and user experience for our customer – Pixel Paper.'
        }, {
          id: 1,
          title: 'Problem',
          sentence: 'Is Pixel Paper usable enough for students with/without experience using online course system?'
        }, {
          id: 2,
          title: 'Solution',
          sentence: 'Prorvide suggestions by going through Heuristic Evaluation and usability tests.'
        }],
        intro: {
          title: 'Introduction',
          content: 'Pixel Paper is an education system prototype which provides online learning resources, including functions like: Library, Dashboard, Bookshelf, Locker, Messages, and Help.'
        },
        process: {title: 'Process', img: require('../assets/img/photo/IMG_0601.jpg')},
      }
    },
    methods: {},
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+SC|Merienda|Niconne|Nunito+Sans|Romanesco&display=swap');
  @import './../assets/css/text.css';

</style>
