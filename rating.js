document.addEventListener('DOMContentLoaded',function(){
    const rating=document.querySelector('#rating');
    document.querySelector('form').addEventListener('submit',function(){
        const ratingValue= parseInt(rating.value);
        if(ratingValue===1 || ratingValue===2){
            alert("What should I do to improve");
        }else{
            alert("Thank you for the feedback");
        }
    });
});