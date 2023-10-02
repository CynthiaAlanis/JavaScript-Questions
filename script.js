
// # 1------------------------------------
function addWorld(){
  // this will select the divs with the class name 'hello'
  const helloDivs = document.querySelectorAll('div.hello');

  // this will loop through the divs with the class name 'hello' and it will add 'world' to their class lists
  helloDivs.forEach((div)=>{
    div.classList.add('world');

  });
}
// this will call the function so it can add the word 'world' to the class lists 
addWorld();

// # 2---------------------------------
function changeAnchor(){
  // this finds the anchor element with the id of "myAnchor"
  const anchorElement = document.getElementById('myAnchor');

  if (anchorElement){
    // this change the text to 'My fancy link'
    anchorElement.textContent = "My fancy link";
    // this will add 'btn' and 'btn-primary' to the classes. 
    anchorElement.classList.add('btn', 'btn-primary');
  }
}
changeAnchor();

// # 3---------------------------------
document.getElementById('subscriptionButton').addEventListener('click', function () {

  const subscriptionEvent = new Event('subscription-granted');
  document.dispatchEvent(subscriptionEvent);
});
function hideElementOnEvent(){
  //this finds the element with the id name "hider"
  const hiderElement = document.getElementById('hider');
  //this checks if the page has the element
  if (hiderElement){
  // this will hide the element when the "subscription-granted" button is clicked on
    document.addEventListener('subscription-granted', function () {
     hiderElement.style.display='none';
    });
  }
}
hideElementOnEvent();

// # 4--------------------------
function goToNews(){
  // this will grab the current URL
  const currentURL = window.location.href;

  //this splits the url into sections using the '/' symbol
  const segments =currentURL.split('/');

  // this will loop through the sections to see if it has a number
  for (const segment of segments){

  // the '/^\d+$/' expression checks to see if it only has numbers in eaach segment
    if (/^\d+$/.test(segment)) {
  // this will redirect to '/news' if the section contains a number.
  // window.location.href property in javascript will redirect the page to '/news' if the segment has only numbers. 
      window.location.href='/news';
  // return stops from continuing to check the code. 
      return;
  }
 }
}
goToNews();



