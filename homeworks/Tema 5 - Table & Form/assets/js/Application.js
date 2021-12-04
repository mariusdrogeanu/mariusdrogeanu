function Application() {
  this.name = "Actors list";
  this.actorsList = [];
}

Application.prototype.init = function () {
  this.addEventListeners();
  this.loadActors();
};

Application.prototype.addEventListeners = function () {
  $("table").on("click", "#remove", function () {
    $(this).closest("tr").remove();
  });
  $("#add-crew").on("click", function () {
    $("form").toggle();
  });
  $("#save-button").on("click", this.addActor);
};

Application.prototype.loadActors = function () {
  $.ajax({
    method: "GET",
    url: "/data/actors.json",
    success: (actors) => this.onActorsloaded(actors),
    error: function (jqXhr, textStatus) {
      console.log("textStatus: ", textStatus);
    },
  });
};

Application.prototype.onActorsloaded = function (actors) {
  actors.forEach(({ id, characterName, actorName, pictureURL }) => {
    var actorToBeAdded = new Actor(id, characterName, actorName, pictureURL);
    this.actorsList.push(actorToBeAdded);
    var row = actorToBeAdded.getRow();
    $("tbody").append(row);
  });
};

Application.prototype.addActor = function () {
  var actorId = $("#actor-id").val();
  var characterName = $("#character-name").val();
  var actorName = $("#actor-name").val();
  var picture = $("#picture").val();
  console.log(actorId);
  var tableRow = `<tr><td>${actorId}</td><td>${characterName}</td><td>${actorName}</td><td><img src="${picture}"></td><td><button id="remove">Remove</button></td></tr>`;
  $("tbody").append(tableRow);
  $("form").slideUp();
  this.form.reset();
};
