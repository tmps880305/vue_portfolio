<template>
  <div>
    <div align="center">
      <img :src="mainPic" style="width: 1905px;height: 540px;"><br>
    </div>
    <div class="myArtcontainer">
      <router-link to="/works"><img :src="goBack" style="margin-bottom: 10px;"></router-link>
      <br>
      <label class="ftTopic">Oppo Dispatch System</label><br><br>

      <label class="ftArti">I design and developed this system when I worked at Open Power. It is a website base
        dispatch system for connections between departments of my company. Before this
        system, we used to work on paper works. It had low efficiency and we usually
        misunderstood demands from other departments. Therefore, I was assign to develop
        this system.
      </label><br><br>

      <label class="ftSubtopic">Design Concept</label><br><br>

      <label class="ftArti">The main idea I design this system is clear. I want to allow users understand the
        function at the time they saw it. Besides, I tried to reduce redirection. Many websites
        will redirect when user do anything, such as press a button, pop out a window or fill in
        a search input box. It is not necessary! Those 'big moves' would probably waste users'
        time and make them feel annoyed. Therefore, I used some programming skills to
        reduce those them on this system. </label><br><br>

      <label class="ftSubtopic">Function Introduction</label><br><br>

      <label class="ftArti">This system has three main functions, member profiles, assignment and search
        service.</label>
      <img :src="picAddMember" style="width: 810px;margin-left: 75px;margin-top: 10px;margin-bottom: 10px;"><br>

      <label class="ftSubSubtopic">Member Profiles:</label><br>

      <label class="ftArti">First, like many other sites, this system has members, which are actually employee of our
        company. To log in to the system, all members have their account and password. Email,
        team, authority, and many other detail informations are also registered. Therefore, this
        function is to manage all member profiles.</label><br>

      <img :src="picEditMember" style="width: 810px;margin-left: 75px;margin-top: 10px;margin-bottom: 10px;"><br>

      <label class="ftArti">In this function, I design edit buttons on hover, allowing user to manage member profiles
        directly without any pop-out windows or website redirect. In addition, one can press "+"
        at the bottom to add a member. The green "Add" button will not enable unless users
        match limited formats. </label><br><br>

      <label class="ftSubSubtopic">Assignment service:</label><br>

      <label class="ftArti">Second, the assignment part is the main function of this system. It allows the sales
        department to dispatch assignments to the engineer department and progress
        management for the engineer department.
      </label><br><br>

      <img :src="picSalesAssign" style="width: 810px;margin-left: 75px;margin-top: 10px;margin-bottom: 10px;"><br>

      <label class="ftArti">The assignment function could be separated into three part by different users. The first
        part is for the sales department. When sales receive a project from customers, they fill
        in these informations with limited formats. Same as the "Add" button of member profiles,
        the "Send" button at the right corner will not enable unless users fill in informations
        correctly.</label><br><br>

      <img :src="topPic" style="width: 810px;height: 540px;margin-left: 75px;margin-top: 10px;"><br>

      <label class="ftArti">One function must be highlighted here is this text input box. It might be common to see
        this kind of text box on other websites, however, this one is unique!
      </label><br>


      <img :src="picTextBox" style="width: 540px;height: 360px;float: right;">
      <label class="ftArti">The words and lines in the box are limited.
        I could even control how many words
        separately in every lines in this
        text box. There are many tutorials on
        the Internet teaching how to limit
        words OR lines in a text box.
        Nonetheless, it's hard to find one who
        has BOTH of them. Maybe it looks
        simple to a senior developer, but I think
        I did a hard work and feel satisfied
        with it on this site.
      </label><br><br>

      <label class="ftArti">The birth of this special text box was contribute to feedbacks from users. I initially
        design the
        box with only lines limitation, but the sales team wanted to have a more free input box.
        Nevertheless, as an engineer, I have to control datas input from users. The more freedom
        users have, the more difficulty for me to control. After many times communicated with them,
        this controllable text box with free limitation finally born.
      </label><br><br>

      <img :src="picDispatch" style="width: 810px;margin-left: 75px;margin-top: 10px;margin-bottom: 10px;"><br>

      <label class="ftArti">After the project being assigned, technical managers has to dispatch it to their engineers
        by
        using the second part of the assignment service. Managers simply click on the project they
        wish to dispatch, select the engineer, and send it. As the project being dispatched, engineers
        could see them in the third part of the assignment service. Here, they can manage their
        project depend on the progress. All functions follow the main design concept, clear.
      </label><br><br>

      <img :src="picManagePro" style="width: 900px;margin-left: 30px;margin-top: 10px;margin-bottom: 10px;"><br>

      <label class="ftSubSubtopic">Search service:</label><br>

      <label class="ftArti">At this part, users can search for any project existed. By inputing project name,
        conditions, or
        many detail informations, users can find projects that are conform to them. Results will show
        simultaneously when users input informations. There are no redirect, search button, or any
        unnecessary moves. Also, the input could be vague. For example, if a project is created in
        October 22, 2019, it would show on results no matter the user input October, 22, or 2019.
        Last but no least, every input could exist at the same time, and all of them will be considered.
        We called this multi-query search function and it is really convenient.
      </label><br><br>

      <img :src="picSearch" style="margin-top: 10px;margin-bottom: 10px;"><br>

      <label class="ftSubtopic">About Codes</label><br><br>

      <label class="ftArti">To develop this system, I usse the popular and powerful JavaScript framework - Vue as the
        front end. Vue allows me easily control doms, and use light codes to present the data. Take
        'v-for' for example. I don't have to write an abundance of html code to show member profiles
        one by one. A simple line of div could complete it. Also, I don't have to redirect the site most of
        the time. Elements in Vue response when data change.

        <br>At the back end, I use Java to connect to MySQL database. After arranging datas acquire from
        DB, Java send them through web-api to the front end. The front could mainly focus on displaying
        datas due to the management of Java.

        <br>It took a lot of time learning new techniques and solving problems when developing, but I always
        feel delighted even just finish a tiny part.
      </label><br><br>


      <label class="ftSubtopic">Summary</label><br><br>

      <label class="ftArti">This system is not a very fancy design, but it match a lot of demands and feedbacks from users.
        I believe the simple looking of it make users clear and relax when they use it. I feel satisfied
        although I confronted some technical problems while modifying for user feedbacks.</label><br><br>


    </div>

    <div style="background-color: #FFFFFF;width: 960px;height: 120px;"></div>
  </div>
</template>


<script>
  export default {
    name: 'ArticleWorkAssign',
    data() {
      return {
        toSeeMore: require('../assets/img/toSeeMore.png'),
        topPic: require('../assets/img/works/oppoassign/opAsignTopPic.png'),
        mainPic: require('../assets/img/works/oppoassign/oppo_mainpic.jpg'),
        picAddMember: require('../assets/img/works/oppoassign/memberProfile/addMember.gif'),
        picEditMember: require('../assets/img/works/oppoassign/memberProfile/editMember.gif'),
        picSalesAssign: require('../assets/img/works/oppoassign/assignment/salesAssign.jpg'),
        picTextBox: require('../assets/img/works/oppoassign/assignment/textBox.jpg'),
        picDispatch: require('../assets/img/works/oppoassign/assignment/dispatch.jpg'),
        picManagePro: require('../assets/img/works/oppoassign/assignment/managePro.gif'),
        picSearch: require('../assets/img/works/oppoassign/search/search.gif'),
        artPic1: require('../assets/img/coffee/handdrip/instruments.jpg'),
        goBack: require('../assets/img/goback.png'),
      }
    },
    methods: {
      goToArti(val) {
        alert(val)
      },
    },
  }
</script>
<style scoped>
  @import './../assets/css/article.css';
</style>
