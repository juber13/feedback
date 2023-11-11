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
    console.log(reviewdValue)
    let emoji = "";
    switch(reviewdValue){
        case "unhappy":
         emoji = "😒";
         break;

         case "natural":
         emoji = "😐";
         break;

         case "satiesfied":
         emoji = "🙂";
         break;
    }


   feedbackContainer.children[1].textContent = "Feedback :  " + reviewdValue.toUpperCase() +" "+emoji;
   feedbackContainer.classList.add('opacity');
})

