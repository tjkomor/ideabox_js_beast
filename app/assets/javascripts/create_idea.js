function createIdea(idea){
  $('#saveIdeaButton').click(function(){
    var ideaParams = {
      idea: {
        title: $('#titleIdea').val(),
        body: $('#bodyIdea').val()
      }
    }

    $.ajax({
      type: 'POST',
      url: 'api/v1/ideas',
      data: ideaParams,
      success: function(newIdea) {
        renderIdea(newIdea)
      },
      error: function(xhr){
        console.log(xhr.responseText)
      }

    })
  })
}
