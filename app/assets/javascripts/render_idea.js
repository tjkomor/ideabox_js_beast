function renderIdea(idea){
  $(".ideas").prepend(
      "<p class=" + idea.id + ">" + "<span class=title>" + idea.title + "</span>" + " " + "<span class=body>" + idea.body + "</span>" + "</p>"
  )
}
