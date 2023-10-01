// JavaScript function to open the pop-up
function openPopup(profileUrl, popupImageId) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById(popupImageId);
    popupImage.src = profileUrl;
    popup.style.display = 'flex';
  }

  // JavaScript function to close the pop-up
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }

  // Attach a click event to each profile image
  const profileImage1 = document.getElementById('myImage1');
  profileImage1.addEventListener('click', () => {
    openPopup(profileImage1.src, 'myImage1');
  });

  const profileImage2 = document.getElementById('myImage2');
  profileImage2.addEventListener('click', () => {
    openPopup(profileImage2.src, 'myImage2');
  });

  const profileImage3 = document.getElementById('myImage3');
  profileImage3.addEventListener('click', () => {
    openPopup(profileImage3.src, 'myImage3');
  });

  const profileImage4 = document.getElementById('myImage4');
  profileImage4.addEventListener('click', () => {
    openPopup(profileImage4.src, 'myImage4');
  });
  const profileImage5 = document.getElementById('myImage5');
  profileImage5.addEventListener('click', () => {
    openPopup(profileImage5.src, 'myImage5');
  });
  const profileImage6 = document.getElementById('myImage6');
  profileImage6.addEventListener('click', () => {
    openPopup(profileImage6.src, 'myImage6');
  });
  const profileImage7 = document.getElementById('myImage7');
  profileImage7.addEventListener('click', () => {
    openPopup(profileImage7.src, 'myImage7');
  });
  const profileImage8 = document.getElementById('myImage8');
  profileImage8.addEventListener('click', () => {
    openPopup(profileImage8.src, 'myImage8');
  });
  const profileImage9 = document.getElementById('myImage9');
  profileImage9.addEventListener('click', () => {
    openPopup(profileImage9.src, 'myImage9');
  });
  const profileImage10 = document.getElementById('myImage10');
  profileImage10.addEventListener('click', () => {
    openPopup(profileImage10.src, 'myImage10');
  });
  const profileImage11 = document.getElementById('myImage11');
  profileImage11.addEventListener('click', () => {
    openPopup(profileImage11.src, 'myImage11');
  });
  const profileImage12 = document.getElementById('myImage12');
  profileImage12.addEventListener('click', () => {
    openPopup(profileImage12.src, 'myImage12');
  });
  const profileImage13 = document.getElementById('myImage13');
  profileImage13.addEventListener('click', () => {
    openPopup(profileImage13.src, 'myImage13');
  });
  const profileImage14 = document.getElementById('myImage14');
  profileImage14.addEventListener('click', () => {
    openPopup(profileImage14.src, 'myImage14');
  });

  // Attach a click event to close the pop-up when clicking anywhere on the document
  document.addEventListener('click', (event) => {
    if (event.target === document.getElementById('popup')) {
      closePopup();
    }
  });