function sendMessageToParent() {
  const message = document.getElementById('iFrameMessage').value;
  //grab url of parent window
  const targetOrigin = window.parent.location.origin;
  window.parent.postMessage(message, targetOrigin);
}