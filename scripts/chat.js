document.querySelector('.chatbox-open').addEventListener('click', () => {
  const chatBoxClose = document.querySelector('.chatbox-close');
  chatBoxClose.style.display = "inline";

  const chatBoxPopUp = document.querySelector('.chatbox-popup');
  chatBoxPopUp.style.display = "inline";

  const chatBoxOpen = document.querySelector('.chatbox-open');
  chatBoxOpen.style.display = "none";

  const chatTextRobo = document.querySelector('.robo-chat-container');
  chatTextRobo.style.display = "none";

  chatBoxClose.addEventListener('click', () => {
    chatBoxClose.style.display = "none";
    chatBoxPopUp.style.display = "none";
    const chatBoxOpen = document.querySelector('.chatbox-open');
    chatBoxOpen.style.display = 'inline';
  })
});
