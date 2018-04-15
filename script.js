  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

// Demo code for scrolling to the top of the header after click
//   $('.collapsible').collapsible({
//     accordion : false 
//   }).on('click.collapse', 'li > .collapsible-header', function(e) {
//       var $this = $(e.currentTarget), //or $(this)
//           $body = $this.siblings('.collapsible-body'),
//           $parent = $this.parent(),
//           //Change this to your desired max height
//           //of one .collabsible-body
//           maxHeight = 700 
  
//       //Wait for slide animation to complete
//       //which is 350ms
//       setTimeout(function(){
//         if ($parent.is(':first-child')) return
  
//         if ($body.height() > maxHeight)
//             $('html, body').animate({
//                 scrollTop: $this.offset().top
//             }, 500)
//       }, 350)
//   });