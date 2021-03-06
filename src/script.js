let iFrameDocument;

// calling this function only when the iFrame is done loading
function initIFrameReference() {
  const iFrame = document.getElementById('my-iframe');
  iFrameDocument = iFrame.contentDocument;

  // listener for messages from the iFrame
  window.addEventListener('message', e => {
    const key = e.message ? 'message' : 'data';
    const data = e[key];

    const receivedMessage = document.getElementById('receivedMessage');
    receivedMessage.innerHTML = data;

    // reset input from iFrame
    iFrameDocument.getElementById('iFrameMessage').value = '';
  }, false);
}

// send message down to iFrame
function sendMessage() {
  const iFrameMessage = iFrameDocument.getElementById('receivedMessage');
  let newMessage = document.getElementById('windowMessage');
  iFrameMessage.innerHTML = newMessage.value;
  // reset input 
  newMessage.value = "";
}