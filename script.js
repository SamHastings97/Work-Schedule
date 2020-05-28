/* Sam Hastings WDD221 05/06/2020 */

// I made a restuarant weekly schedule using the accodion function in jQuery
$(".accordion").on("click", ".accordion-header", function() 
 {
    $(this).toggleClass("active").next().slideToggle()
      
 });