$('input').on('change', function () {
  $('body').toggleClass('blue');
});


// Wait for the document to be ready
$(document).ready(function () {
  $('.player').removeClass('hidden');
  // Read More/Less button functionality
  var b = $("#button");
  b.text("Read More");
  b.click(function () {
    var text = b.text();
    b.text(text === "Read Less" ? "Read More" : "Read Less");
  });

  // Description wrapper and initial state
  var w = $("#wrapper");
  var l = $("#description-of-event-5");
  w.height(0);
  w.addClass('close');

  // Toggle description visibility
  b.click(function () {
    if (w.hasClass('close')) {
      w.removeClass('close');
      w.height(l.outerHeight(true));
    } else {
      w.addClass('close');
      w.height(0);
    }
  });

  $('input[type="radio"]').change(function () {
    // Hide all description paragraphs
    $('.description-of-event').hide();

    // Show the corresponding description paragraph
    var itemId = $(this).attr('id');
    var descriptionId = '#description-of-event-' + itemId.split('-')[1];
    $(descriptionId).show();

    // Collapse all paragraphs
    $('.read-more').text('Read More');
    $('.description-of-event').removeClass('expanded');

    // Update registration button href
    var registrationButton = $('.registration a');
    var hrefMapping = {
      'item-1': 'https://www.google.com',
      'item-2': 'https://www.youtube.com',
      'item-3': 'https://www.geeksforgeeks.org',
      'item-4': 'https://web.whatsapp.com',
      'item-5': 'https://www.github.com',
    };
    registrationButton.attr('href', hrefMapping[itemId]);
  });

  // Get all radio buttons and their corresponding description elements
  const radioButtons = document.querySelectorAll('input[name="slider"]');
  const songInfoElements = document.querySelectorAll('.song-info');
  const descriptionElements = document.querySelectorAll('.description-of-event');

  // Add a change event listener to each radio button
  radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener('change', () => {
      // Hide all song info elements
      songInfoElements.forEach((songInfoElement) => {
        songInfoElement.style.display = 'none';
      });

      // Show the selected song info element
      songInfoElements[index].style.display = 'block';
    });
  });

  // Add a change event listener to each radio button
  radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener('change', () => {
      // Hide all description elements
      descriptionElements.forEach((descriptionElement) => {
        descriptionElement.style.display = 'none';
      });

      // Show the selected description element
      descriptionElements[index].style.display = 'block';
    });
  });
});
