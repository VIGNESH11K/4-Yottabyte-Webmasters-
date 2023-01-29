/**
* Template Name: eNno - v4.10.0
* Template URL: https://bootstrapmade.com/enno-free-simple-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()




// terminal
document.addEventListener('DOMContentLoaded', function () {

  document.getElementsByTagName('form')[0].onsubmit = function (evt) {
      evt.preventDefault();
      checkWord();
      // window.scrollTo(0, 150);
  }

  document.getElementById('terminalTextInput').focus();

  var textInputValue = document.getElementById('terminalTextInput').value.trim();

  var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;

  var clearInput = function () {
      document.getElementById('terminalTextInput').value = "";
  }

  var scrollToBottomOfResults = function () {
      var terminalResultsDiv = document.getElementById('terminalReslutsCont');
      terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  }

  scrollToBottomOfResults();

  var addTextToResults = function (textToAdd) {
      document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
      scrollToBottomOfResults();
  }

  var postHelpList = function () {
      var helpKeyWords = [
          "- Welcome to Inventrio , ",
          "1)What are the features?",
          "2)Built in how many hours?",
          "3)Whats your Team Name?",
          "4)Web/App Name?",
          "- 'Time' will display the current time.",
          "- 'Date' will display the current date.",
          "* There are many easter eggs on this terminal, find and tag us on instagram for exciting perks ;)"
      ].join('<br>');
      addTextToResults(helpKeyWords);
  }

  var getTimeAndDate = function (postTimeDay) {
      var timeAndDate = new Date();
      var timeHours = timeAndDate.getHours();
      var timeMinutes = timeAndDate.getMinutes();
      var dateDay = timeAndDate.getDate();
      console.log(dateDay);
      var dateMonth = timeAndDate.getMonth() + 1;
      var dateYear = timeAndDate.getFullYear();

      if (timeHours < 10) {
          timeHours = "0" + timeHours;
      }

      if (timeMinutes < 10) {
          timeMinutes = "0" + timeMinutes;
      }

      var currentTime = timeHours + ":" + timeMinutes;
      var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;

      if (postTimeDay == "time") {
          addTextToResults(currentTime);
      }
      if (postTimeDay == "date") {
          addTextToResults(currentDate);
      }
  }

  var openLinkInNewWindow = function (linkToOpen) {
      window.open(linkToOpen, '_blank');
      clearInput();
  }

  var textReplies = function () {
      switch (textInputValueLowerCase) {
          case "about":
              clearInput();
              addTextToResults("Crescendo 2023!");
              break;




              case "1":
              clearInput();
              addTextToResults("Easy Generate Reports, User friendly UI, Manage products and Mario's favourite ");
              break;




              case "2":
                clearInput();
                addTextToResults("16 HRS AND COUNTING ");
                break;


                case "3":
              clearInput();
              addTextToResults(" 4-Yottabyte ");
              break;

              case "4":
                clearInput();
                addTextToResults(" InventRio");
                break;



                case "GDSC":
                  clearInput();
                  addTextToResults(" First Hackathon ");
                  break;


                  case "Judges":
                    clearInput();
                    addTextToResults(" Awesome ");
                    break;

          case "chris":
          case "chris gracias":
              clearInput();
              addTextToResults("My Creator");
              break;

          case "vignesh":
              clearInput();
              addTextToResults("My Creator");
              break;

          case "i love you":
          case "love you":
          case "love":
              clearInput();
              addTextToResults("Aww! That's so sweet 😍. Here's some love for you too ❤ ❤ ❤ !");
              break;

          case "rick":
          case "rick roll":
          case "rickroll":
          case "do me a rickroll":
          case "fuck you":
              clearInput();
              addTextToResults(':)');
              openLinkInNewWindow('https://youtu.be/dQw4w9WgXcQ');
              break;

          case "hello":
          case "hi":
              clearInput();
              addTextToResults("Hello, it's me... I was wondering if after all these years you'd like to meet... 😍");
              break;

          case "time":
              clearInput();
              getTimeAndDate("time");
              break;

          case "date":
              clearInput();
              getTimeAndDate("date");
              break;

          case "help":
          case "?":
              clearInput();
              postHelpList();
              break;

          case "stuco rocks":
          case "stuco":
              clearInput();
              addTextToResults("STUCO ROCKS !!");
              break;

          default:
              clearInput();
              addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
              break;
      }
  }

  var checkWord = function () {
      textInputValue = document.getElementById('terminalTextInput').value.trim();
      textInputValueLowerCase = textInputValue.toLowerCase();

      if (textInputValue != "") {
          addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
          if (textInputValueLowerCase.substr(0, 9) == "register ") {
              openLinkInNewWindow('/register-' + textInputValueLowerCase.substr(9));
              addTextToResults("<i>The Registration link for " + "<b>" + textInputValue.substr(9) + "</b>" + " should be opened now.</i>");
          } else {
              textReplies();
          }
      }
  };

});


// terminal 