function editIdea(){
  $(".ideas").delegate(".editIdeaButton", "click", function(){
    var idea = $(this).closest("p")
    var ideaId = idea.data("id")

    document.getElementById(ideaId).contentEditable = true;

    $(idea).append("<button class='saveIdeaButton'>Save</button>")

    $(".saveIdeaButton").click(function(){
      document.getElementById(ideaId).contentEditable = false;

      $(".saveIdeaButton").remove();
      var ideaParams = {
        idea: {
          id: ideaId,
          title: $("#" + ideaId + " > .title").text(),
          body:  $("#" + ideaId + " > .body").text()
        }}

        $.ajax({
          type: "PUT",
          url: "/api/v1/ideas/" + ideaId,
          data: ideaParams,
          success: function(){},

          error: function(xhr){
            console.log(xhr.reponseType)
          }
        })
      })
    })
  }
