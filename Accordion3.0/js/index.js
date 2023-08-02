$('.head').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.arrow').toggleClass('arrow-animate');
    $(this).parent().find('.content').slideToggle(280);
});

// $('.head').click(function(){
//   console.log($(this));
//   $(this).find('i').attr('gato', 'true');
// });

// find the parent
// find the siblings
// find the children
// find the children of the siblings