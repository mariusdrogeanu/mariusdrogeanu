function Actor(actorId, characterName, actorName, picture) {
  this.id = actorId;
  this.characterName = characterName;
  this.actorName = actorName;
  this.picture = picture;
}

Actor.prototype.getRow = function () {
  return `<tr>
      <td>${this.id}</td>
      <td>${this.characterName}</td>
      <td>${this.actorName}</td>
      <td><img src="${this.picture}"></td>
      <td><button id="remove">Remove</button></td></tr></tr>`;
};
