// JavaScript for the popup
function openPopup(index) {
    const titles = [
      "Reader Meetup in Amman",
      "Book Signing at Ramallah",
      // Add more titles as needed
    ];
  
    const descriptions = [
      "A wonderful event with readers sharing stories in Amman.",
      "An exciting book signing session held in Ramallah with enthusiastic readers.",
      // Add more descriptions as needed
    ];
  
    document.getElementById("popup-title").innerText = titles[index - 1];
    document.getElementById("popup-description").innerText = descriptions[index - 1];
    document.getElementById("popup-modal").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup-modal").style.display = "none";
  }
  