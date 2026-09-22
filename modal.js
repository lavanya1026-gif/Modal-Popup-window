const submitBtn=document.getElementById("submitBtn");
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = function() {
    modal.style.display = "block";
};

closeBtn.onclick = function() {
    modal.style.display = "none";
};
// Close modal when clicking outside the popup
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
submitBtn.onclick = function()
{
    alert("Thank you!");
};