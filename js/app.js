$(window).scroll(function() {
    // Get the current scroll position
    let pixel = $(window).scrollTop();
  
    // Get the width of the viewport
    let viewportWidth = $(window).width();
  
    if (viewportWidth <= 768) {
      // Apply styles for viewports less than or equal to 768px wide
      cora.currentTime = pixel / 245;
    } else {
      // Apply styles for viewports greater than 768px wide
      cora.currentTime = pixel / 500;
    }
  });
