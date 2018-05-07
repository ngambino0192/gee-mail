var test = "test";
console.log(test);

// below function provided by DevLeage

(function(){
  /*This is the mail generator file that will generate initial mail messages and expose methods for creating new messages in your project. Do not make any modifications to this file for your solution. Happy coding!*/


//Gee Mail message stub data 

  var subject = ['Call Your Mother', 'Cheap Online Meds', 'Change Your Life Today', 'Sppoky Stories', 'Meet Singles In Your Area', 'Have You Heard?', 'Yo', 'RE: Looking for a three legged cat', 'Get Rich Quick!', 'FW: Token Chain Email'];

  var sender = ['Mary Monster', 'Dave Danger', 'Spam Master', 'Spike Spurner', 'Ray Ranger', 'Catherine Chaos', 'Van Pire', 'Andy Argye', 'Rick Roger', 'Sue Mee'];

  var body = ['I am never gonna see a merman, ever. You haven\'t seen my drawer of inappropriate starches?','I\'ll kill a man in a fair fight. Or if I think he\'s gonna start a fair fight. Or if he bothers me. Or if there\'s a woman. Or if I\'m getting paid. Mostly when I\'m getting paid. I thought all children despise effort and enjoy cartoons. Don\'t be ridiculous. Martha Stewart isn\'t a demon. She\'s a witch. Someone else\'s loss is my chocolatey goodness. I don\'t want to use the word genius, but I\'d be ok if you wanted to. What did I say to you about barging into my shuttle? Now you can luxuriate in a nice jail cell, but if your hand touches metal, I swear by my pretty floral bonnet: I will end you. Oh Spike, devour me! You\'re gonna die screaming but you won\'t be heard. Eyeballs to entrails, my sweet.','We need to save Buffy from Hansel and Gretel. Well, you were busy trying to get yourself lit on fire. The only thing Willow was ever good for, the only thing I ever had going for me were those moments, just moments, where Tara would look at me and I was wonderful. Everyone\'s a hero in their own way, in their own not that heroic way. Planet\'s coming up a mite fast.','Better to cut you down to size, grandma. I\'m the one who brings about the thought-pocalypse. Yeah, it was sexy the way she touched me real hard with her fists. I dislike that Anya. She\'s newly human and strangely literal.','Yeah, well, I\'m not the one who wanted Wind Beneath My Wings for the first dance. She\'s a truck-driving magic mama! And I\'m a huge fan of the way you lose control and turn into an enormous green rage monster. We\'re outlaws with hearts of gold. Or even worse, a sneezure.','Oh my god! Did it sing? Turns out I suddenly find myself needing to know the plural of apocalypse. It\'s about women. It was like the Heimlich, with stripes! First of all, Feng Shui up the yin yang, also I designed parts of it but I did not design the stone cold foxes in the small clothes and the ample massage facilities. That girl will rain destruction down on you and your ship. Sweetie, if he had a tussle with that Sasquatch, we\'d be in the dirt right about now, scooping up the Captain\'s teeth. You can\'t spend the rest of your life waiting for Xander to wake up and smell the hottie. Either blow us all up or rub soup in our hair. It\'s a toss-up. I think calling him that is an insult to the psychotic lowlife community.','Xander, that\'s not the North Star, it\'s an airplane. You can\'t open the book of my life and jump in the middle. What do they need such good eyesight for anyway? Well we could grind our enemies into talcum powder with a sledgehammer but, gosh, we did that last night. The gentlemen are coming by. You can\'t take the sky from me. Okay, at this point you\'re abusing sarcasm. Well, I haven\'t been to a hell dimension just of late, but I do know a thing or two about torment.','And now the one person who should be here is gone, and a waste like you gets to live. The human mind is like Van Halen; if you just pull out one piece and keep replacing it, it just degenerates. Turns out I suddenly find myself needing to know the plural of apocalypse. It\'s a real burn, being right so often. Who\'s calling me? Everybody I know lives here.','Looking in windows, knocking on doors. Well, look at me. I\'m all fuzzy. And what\'s with all the carrots? That girl will rain destruction down on you and your ship. If I could make you purtier, I would. I wanna hurt you, but I can\'t resist the sinister attraction of your cold and muscular body! Seems odd you\'d name your ship after a battle you were on the wrong side of.','I\'m a comfortador also. You\'re a hell of a woman. Passion rules us all. You\'re gonna die screaming but you won\'t be heard. How did your brain even learn human speech? I\'m just so curious. Occasionally, I\'m callous and strange.'];

// mail generator functions

  function loadGeeMails(subject){
    for (var i = 0; i < 10; i++){
    var message = generateMessage();
    window.geemails.push(message);
    }
  }

  function generateMessage(date){
    var message = {};
    message.date = date || getRandomDate();
    message.subject = getRandomElement(subject);
    message.sender = getRandomElement(sender);
    message.body = getRandomElement(body);
    return message;
  }

  function getRandomElement(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getNewMessage(){
    var now = new Date();
    return generateMessage(now);
  }

  function getRandomDate(){
    var year = 2017;
    var month = Math.floor(Math.random() * 12) + 1;
    var day = Math.floor(Math.random() * 30) + 1;
    var hours = Math.floor(Math.random() * 12) + 1;
    var minutes = Math.floor(Math.random() * 59) + 1;
    return new Date(year, month, day, hours, minutes);
  }
  getRandomDate();


//load intial GeeMail data to window object

  window.geemails = [];
  // console.log(window.geemails);
  window.getNewMessage = getNewMessage;
  loadGeeMails();

// email structure

  var inboxWrapper = document.createElement("div");
    inboxWrapper.id = "inboxWrapperId";
    document.body.appendChild(inboxWrapper);

  var emailHeader = document.createElement("div");
    emailHeader.id = "emailHeaderId";
    emailHeader.innerHTML = "INBOX";
    inboxWrapper.appendChild(emailHeader);

  var emailWrapper = document.createElement("div");
    emailWrapper.id = "col-5 emailWrapperId";
    inboxWrapper.appendChild(emailWrapper);

  function renderGeemails(data){
    for (var i=0; i<geemails.length; i++){
      
      var emailLine = document.createElement("div");
      emailLine.className = "col-6 emailLineClass";
      emailLine.addEventListener("click", showMessage);
      emailWrapper.appendChild(emailLine);

      var carrotRight = document.createElement("div");
      carrotRight.className = "col-1 carrotClassRight";
      carrotRight.innerHTML = "<img src=\"images/right_carrot.svg\"/>";
      emailLine.appendChild(carrotRight);

      var carrotDown = document.createElement("div");
      carrotDown.className = "col-1 carrotClassDown";
      carrotDown.innerHTML = "<img src=\"images/down_carrot.svg\"/>";
      emailLine.appendChild(carrotDown);

      var senderLine = document.createElement("div");
      senderLine.className = "col-2 senderLineClass";
      senderLine.innerHTML = "From: " + data[i].sender;
      emailLine.appendChild(senderLine);

      var subjectLine = document.createElement("div");
      subjectLine.className = "col-3 subjectLineClass";
      subjectLine.innerHTML = "Subject: " + data[i].subject;
      emailLine.appendChild(subjectLine);

      var dateLine = document.createElement("div");
      dateLine.className = "col-4 dateLineClass";
      dateLine.innerHTML = "Date: " + data[i].date;
      emailLine.appendChild(dateLine);

      var bodyLine = document.createElement("div");
      bodyLine.className = "col-5 emailBodyContent";
      bodyLine.innerHTML = data[i].body;
      emailLine.appendChild(bodyLine);

      var line = document.createElement("hr");
      line.className = "hrClass";
      emailWrapper.appendChild(line);

    }
  }
  renderGeemails(geemails);

  // toggle body content

  function showMessage(){
    var toggle = this.querySelectorAll(".emailBodyContent")[0];
      if(toggle.style.display === "none"){
        toggle.style.display = "block";
      }else{
        toggle.style.display = "none";
      }
    var toggleCarrot1 = this.querySelectorAll(".carrotClassRight")[0];
      if(toggleCarrot1.style.display === "block"){
        toggleCarrot1.style.display = "none";
      }else{
        toggleCarrot1.style.display = "block";
      }
    var toggleCarrot2 = this.querySelectorAll(".carrotClassDown")[0];
      if(toggleCarrot1.style.display === "none"){
        toggleCarrot2.style.display = "block";
      }else{
        toggleCarrot2.style.display = "none";
      }
  }

})();
