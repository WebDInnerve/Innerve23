(function ($) {
    $(function () {
      $(window).on('scroll', function () {
        fnOnScroll();
      });
      $(window).on('resize', function () {
        fnOnResize();
      });
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;

      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
  
          (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
        })
      }
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
    });
  })(jQuery);



// HEADING
function updateNavigationButtons() {
  const currentPage = window.location.pathname;
  const basePath = currentPage.substring(0, currentPage.lastIndexOf('/') + 1); // Extract the base path

  // Get the navigation buttons
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  // Hide ">" button on "day2.html"
  if (currentPage.endsWith('day2.html')) {
    nextButton.style.display = 'none';
  } 

  // Hide "<" button on "prefest.html"
  if (currentPage.endsWith('prefest.html')) {
    prevButton.style.display = 'none';
  } 
}

// Function to redirect to the next page
function nextPage() {
  const currentPage = window.location.pathname;
  const basePath = currentPage.substring(0, currentPage.lastIndexOf('/') + 1); // Extract the base path
  if (currentPage.endsWith('prefest.html')) {
    window.location.href = basePath + 'timeline.html';
  } else if (currentPage.endsWith('timeline.html')) {
    window.location.href = basePath + 'day2.html';
  }
  // Add more conditions for additional pages if needed
}

// Function to redirect to the previous page
function prevPage() {
  const currentPage = window.location.pathname;
  const basePath = currentPage.substring(0, currentPage.lastIndexOf('/') + 1); // Extract the base path
  if (currentPage.endsWith('day2.html')) {
    window.location.href = basePath + 'timeline.html';
  } else if (currentPage.endsWith('timeline.html')) {
    window.location.href = basePath + 'prefest.html';
  }
  // Add more conditions for additional pages if needed
}

// Add an event listener for when the page loads
window.addEventListener('load', () => {
  updateNavigationButtons(); // Initially update button visibility
});

// Event listeners for the navigation buttons
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

if (prevButton && nextButton) {
  prevButton.addEventListener('click', prevPage);
  nextButton.addEventListener('click', nextPage);
}

/*we can use path name to impliment same function in heading like this:
// Function to redirect to the next page
function nextPage() {
  const currentPage = window.location.pathname;
  if (currentPage === '/prefest.html') {
    window.location.href = '/timeline.html';
  } else if (currentPage === '/timeline.html') {
    window.location.href = '/day2.html';
  }
  // Add more conditions for additional pages if needed
}

// Function to redirect to the previous page
function prevPage() {
  const currentPage = window.location.pathname;
  if (currentPage === '/day2.html') {
    window.location.href = '/timeline.html';
  } else if (currentPage === '/timeline.html') {
    window.location.href = '/prefest.html';
  }
  // Add more conditions for additional pages if needed
}

// Add an event listener for when the page loads
window.addEventListener('load', () => {
  updateNavigationButtons(); // Initially update button visibility
});

// Event listeners for the navigation buttons
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

if (prevButton && nextButton) {
  prevButton.addEventListener('click', prevPage);
  nextButton.addEventListener('click', nextPage);
}


*/