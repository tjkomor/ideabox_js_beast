function deleteIdea(){
  $('.ideas').delegate('.deleteIdeaButton', 'click', function(){
    var idea = $(this).closest("p")

    $.ajax({
      type: "DELETE",
      url: '/api/v1/ideas/' + idea.data("id"),
      data: idea,
      success: function(){
        idea.remove();
      },
      error: function(xhr){
        console.log(xhr.responseText)
      }
    })

  })

}
