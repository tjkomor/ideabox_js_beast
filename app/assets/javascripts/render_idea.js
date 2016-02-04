function renderIdea(idea){
  $(".ideas").prepend(
      "<p data-id=" + idea.id + ">" + "<span class=title>" + idea.title + "</span>" + " " +
      "<span class=body>" + idea.body + "</span>" + "<button type='button' class='deleteIdeaButton'>" + "Delete" + "</button>" + "</p>"
  )
}
