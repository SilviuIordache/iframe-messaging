function sendMessageToParent() {
  const message = document.getElementById('iFrameMessage').value;
  const targetOrigin = 'http://127.0.0.1:5500/index.html';
  window.parent.postMessage(message, targetOrigin);   
}