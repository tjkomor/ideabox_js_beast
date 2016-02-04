function editIdea(){
  $(".ideas").delegate(".editIdeaButton", "click", function(){
    var ideaObject = $(this).closest("p")
    var ideaId = ideaObject.data("id")


    ideaObject.find('.title')[0].contentEditable = true;
    ideaObject.find('.body')[0].contentEditable = true;

    $(ideaObject).append("<button class='saveIdeaButton'>Save</button>")

    $(".saveIdeaButton").click(function(){
      ideaObject.find('.title, .body')[0].contentEditable = false;

      $(".saveIdeaButton").remove();
      var ideaParams = {
        idea: {
          id: ideaId,
          title: ideaObject.find('.title')[0].innerText,
          body:  ideaObject.find('.body')[0].innerText
        }}

        $.ajax({
          type: "PUT",
          url: "/api/v1/ideas/" + ideaId,
          data: ideaParams,
          success: function(){},

          error: function(){
            console.log('this didnt work')
          }
        })
      })
    })
  }
