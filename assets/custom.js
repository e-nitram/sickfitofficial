$('.logo-list').slick({
		rows: 2,
		dots: false,
		arrows: false,
		infinite: true,
        loop:true,
		speed: 300,
		slidesToShow:4,
        autoplay: true,
        swipe: false,
        cssEase: 'linear',
        autoplaySpeed: 0,
        speed: 5000,
        responsive: [
             {
            breakpoint: 767,
            settings: {
              slidesToShow:3.1,
            }
          },
          {
        breakpoint: 991,
        settings: {
          slidesToShow:4,
        }
      }
        ]
});

//review page logo slider
$(document).ready(function(){
    $('.review-logo-list').slick({
        autoplay: true,
    autoplaySpeed: 0,
    loop:true,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 5,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
        responsive: [
            {
                breakpoint:767,
                settings: {
                  slidesToShow:3
                  }
            }
        ]
    });
});

//review-press section
$('.press-box').slick({
    arrows: false,
    dots: false,
	draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 200,
    loop:true,
    infinite: true,
});



//home banner
$(document).ready(function() {
    function handleClick() {
        // Remove any existing click handlers to prevent multiple bindings
        $('.circle').off('click');
        $(document).off('click');

        if ($(window).width() <= 766) { // Adjust this value based on your mobile breakpoint
            $('.circle').click(function() {
                // Get the index from the clicked element's class
                var index = $(this).attr('class').match(/circle(\d+)/)[1];

                // Check if the clicked item is already active
                if ($(this).hasClass('active')) {
                    // If active, remove the active class from the circle and the icon items, and hide the associated icon
                    $(this).removeClass('active');
                    $('.icon-items' + index).removeClass('active').fadeOut();
                } else {
                    // If not active, hide all icon items, remove active class from all circles and icon items
                    $('.circle').removeClass('active');
                    $('.icon-items').removeClass('active').fadeOut();

                    // Add active class to the clicked item and the corresponding icon items, and show the associated icon
                    $(this).addClass('active');
                    $('.icon-items' + index).addClass('active').fadeIn();
                }
            });

            // Click anywhere else to hide the icons
            $(document).click(function(e) {
                if (!$(e.target).closest('.circle').length) {
                    $('.circle').removeClass('active');
                    $('.icon-items').removeClass('active').fadeOut();
                }
            });
        } else {
            // On desktop, ensure all icon items are visible
            $('.icon-items').show();
        }
    }

    // Run on document ready
    handleClick();

    // Run on window resize to handle viewport changes
    $(window).resize(function() {
        handleClick();
    });
});




//contact form
document.addEventListener("DOMContentLoaded", function() {
    // Check if the URL contains the 'contact_posted=true' parameter
    if (window.location.search.includes('contact_posted=true')) {
        // Select the main div where you want to add the class
        const mainDiv = document.querySelector('.contact');
        
        if (mainDiv) {
            // Add the desired class to the main div
            mainDiv.classList.add('submitted');

            // Optionally, you can hide the success message or reset the form if necessary
            // Example: mainDiv.querySelector('.contact-form-success').style.display = 'block';
        }
    }
});



// customer review slider
    var swiper1 = new Swiper(".customer-profile", {
    spaceBetween: 18,
    freeMode: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      767: {
        slidesPerView: 3.5,
        slidesPerGroup: 3,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    thumbs: {
      swiper: swiper1,
    },
  });

  swiper1.on('slideChange', function () {
    swiper2.slideTo(swiper1.activeIndex);
  });

  swiper2.on('slideChange', function () {
    swiper1.slideTo(swiper2.activeIndex);
  });




//feature-collection-tab
$(document).ready(function() {
    $('ul.tabs').each(function(){
      var active, content, links = $(this).find('a');
      active = links.first().addClass('active');
      content = $(active.attr('href'));
      links.not(':first').each(function () {
        $($(this).attr('href')).hide();
      });
      $(this).find('a').click(function(e){
        active.removeClass('active');
        content.hide();
        active = $(this);
        content = $($(this).attr('href'));
        active.addClass('active');
        content.show();
        return false;
      });
    });
  });







//custom featured collection slider
 var swiper = new Swiper(".custom-product-slider", {
      spaceBetween: 34,
      keyboard: {
        enabled: true,
      },
      scrollbar: {
       el: ".swiper-scrollbar",
     },
     breakpoints: {
       320: {
           slidesPerView:1.3,
           spaceBetween:20,
           loop: true,
        },
        767: {
          slidesPerView:1.6,
          loop: true,
        },
        1023: {
          slidesPerView:3,
          loop: true,
        },
      },
    });


//gallery image slide
   var swiper = new Swiper(".gallery-slider", {
    slidesPerView: "1",
     spaceBetween: 30,
     speed:1500,
     loop: true,
     scrollbar: {
       el: ".swiper-scrollbar",
       hide: false,
     },
     autoplay: 
    {
      delay: 1500,
    },
   });


//feature collection tab

$(document).ready(function() {
  var $selector = $('#tab-selector');

  // On change event of select box
  $selector.on('change', function() {
    var selectedTab = $(this).val();
    $('.feature-collection-product > div').hide(); // Hide all tab content
    $(selectedTab).show(); // Show the selected tab content

    // Optionally scroll to the selected tab
    // $('html, body').animate({
    //   scrollTop: $(selectedTab).offset().top
    // }, 500);
  });

  // Trigger change event on page load to show the first tab
  if ($selector.length > 0) {
    $selector.val($selector.find('option').first().val()).change();
  }
});



//selct tab

$(document).ready(function() {
  const $trigger = $('.select-trigger');
  const $options = $('.select-options');
  const $optionItems = $options.find('.option');

  // Function to update the trigger text
  function updateTriggerText(selectedText) {
    $trigger.html(`${selectedText} <span class="arrow"></span>`);
  }

  // Set the initial selected option (always the first option)
  const $firstOption = $options.find('.option[data-selected="true"]');
  if ($firstOption.length) {
    const selectedText = $firstOption.data('tab-heading');
    updateTriggerText(selectedText);
  }

  // Toggle the options display
  $trigger.on('click', function() {
    $options.toggleClass('show');
  });

  // Update the trigger text and hide options when an option is selected
  $optionItems.on('click', function() {
    const selectedText = $(this).data('tab-heading');
    updateTriggerText(selectedText);
    $options.removeClass('show');
    
    // Optionally, you can do something with the selected value
    const selectedValue = $(this).attr('value');
    console.log('Selected Value:', selectedValue); // For example, logging the value
  });

  // Hide options when clicking outside of the select box
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.select-feature-tab').length) {
      $options.removeClass('show');
    }
  });
});





//faq section
$(document).ready(function() {
    // Make the first tab active by default
    $('.faq-menu .tab-faq:first').addClass('active');

    // Handle tab click event
    $('.faq-menu .tab-faq').click(function() {
        $('.faq-menu .tab-faq').removeClass('active'); // Remove active class from all tab links
        $(this).addClass('active'); // Add active class to the clicked tab link
    });

    // Handle smooth scroll to the tab content
    $('.faq-menu .tab-faq').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 50
        }, 50);
    });
});


//newsletter form






// country select footer
$(document).ready(function() {

$(".footer .default_option").click(function(){
  $(this).parent().toggleClass("active");
})

$(".footer .select_ul li").click(function(){
  var currentele = $(this).html();
  $(".footer .default_option li").html(currentele);
  $(this).parents(".footer .select_wrap").removeClass("active");
})
  
});



//product-details tab 
$(document).ready(function () {
    // Activate the first accordion item on page load
    var $firstAccordionItem = $('.accordion-item').first();
    $firstAccordionItem.addClass('active');
    $firstAccordionItem.find('.accordion-content').slideDown(); // Open the first tab
    
    $('.accordion-title').click(function () {
        var $accordionItem = $(this).closest('.accordion-item');
        
        // Toggle active class for the clicked item
        $accordionItem.toggleClass('active');
        
        // Slide toggle the content
        $accordionItem.find('.accordion-content').slideToggle();

        // Hide the content of other accordion items
        $('.accordion-item').not($accordionItem).removeClass('active');
        $('.accordion-item').not($accordionItem).find('.accordion-content').slideUp();
    });
});



