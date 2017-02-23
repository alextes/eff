let vids = [];

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    /* eslint-disable no-param-reassign */
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    /* eslint-enable no-param-reassign */
  }

  return array;
}

fetch('eff/vid-list.json')
  .then(response => response.json())
  .then((vidList) => {
    vids = vidList;
    shuffle(vids);

    const [button] = document.getElementsByClassName('get-feels');
    button.removeAttribute('disabled');
  });

function startNextVid() {
  const [player] = document.getElementsByClassName('feels-player');
  const nextVid = vids.pop();

  // TODO: get next vid url
  player.setAttribute('src', `eff/vid/${nextVid}`);
  player.play();
}

window.onload = () => {
  const [button] = document.getElementsByClassName('get-feels');
  button.onclick = startNextVid;
};
