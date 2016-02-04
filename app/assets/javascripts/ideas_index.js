function ideasIndex(){

  $.ajax({
    type: "GET",
    url: '/api/v1/ideas',
    success: function(ideas){
      ideas.forEach(function(idea){
        renderIdea(idea)
      })
    },

    error: function(xhr){
      console.log(xhr.reponseText)
    }

  })
}
