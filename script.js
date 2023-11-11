// const unhappy = document.getElementById('unhappy');
// const natural = document.getElementById('natural');
// const satiesfied = document.getElementById('satiesfied');
const feedbackBox = document.querySelectorAll('.feedback-box');
const feedbackContainer =  document.querySelector('.feedback-container');
const sendReviewBtn =  document.getElementById('review-btn');
console.log(feedbackContainer)



// choiceSelected.addEventListener('click' , (e) => {
//     Array.from(choiceSelected.children).forEach(chil => chil.classList.remove('active'));
//       if(e.target.nodeName == "DIV") e.target.classList.add('active');
// })

let isReviewdSelected =  false;
let reviewdValue;
feedbackBox.forEach((box) => {
    box.addEventListener('click' , (e) => {
        feedbackBox.forEach(box => box.classList.remove('active'));
        e.currentTarget.classList.add('active');
        isReviewdSelected = true;
        reviewdValue = e.currentTarget.dataset.value;
        console.log(reviewdValue)
    })
})

sendReviewBtn.addEventListener('click', () => {
    if(!isReviewdSelected) return;
    let emoji = "";
    switch(reviewdValue){
        case "Unhappy":
         emoji = "😒";
         break;

         case "Natural":
         emoji = "😐";
         break;

         case "Satiesfied":
         emoji = "🙂";
         break;
    }

   feedbackContainer.children[1].textContent = "Feedcack:  " + reviewdValue +" "+emoji;
   feedbackContainer.classList.add('opacity');
})

