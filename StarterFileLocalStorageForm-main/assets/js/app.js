//variables
const tweetList= document.getElementById(tweet-list);


//Event Listenrs
 eventListeners();

function eventListenerst() {
//Form submiss
document.querySelector ('#forn').addEventListener('submit', newTweet);

//remove tweet 
tweetList.addEventListener("click", removeTweet);

// Document
document.addEventListener('DOMContentLoaded'. localStorageontoad);
}


//functions

function newTweet(e){
e.preventDefault();

//Read the text area value
const tweet= document.getElementById('tweet').value;

//Create the remove bttn
const removeBtn= document.createElement('a');
 removeBtn.classList= 'remove-tweet';
 renoveBtn.textContent= 'X';

 //Create an <li> element
const li=document.createElement('li');
li.textContent= tweet;

//Add the remove bttn of each tweet 
li.appendChild(renovet);

//Add to the list 
tweetList.appendChild(li);

//add to local storage
addTweetLocalStorage(tweet);

//alert
alertt ('Tweet Added');

this.reset();
}

//Removes the tweets from DOM
function removetweet(e) {
if(e. target.classtist.contains('remove-tweet')) {
     e.target.parentElenent.remove();
}

//Remove from Storage
removeTweetLocalStorage (e.target.perentElement.textContent );
}

//Adds the tweets into the local storage 
function addTweetLocalStorage(tweet) {
     let tweets= getTweetsFromStorage();

//Add the tweet into the array 
tweets.push(tweet);

//Convert tweet array into string
localStorage.setItem('tweets', JSON.stringify (tweets ) );
}

function getTweetsFromStorage() {
let tweets;
const tweetsLS= localStorage.getItem ('tweets');
//Get the values, if null is returned then we create an empty array
if(tweetsLS === null){
    tweets=[];
} else {
tweets= JSON.parse( tweetsLS);
}
   return tweets;
}

    //Frints Local Storage Tweets on Load 
    function localStorageoninad() {
    let tweets= getTweetsFromStorage();
   
    //Loop throught storage and then print the values 
    tweets.forEach(function (tweet) {
    //Create the remove bttn
    const removeBtn= document.createElement('a'); 
    removeBtn.classtist= 'remove-tweet';
     removeBtn.textContent='X';
    
    //Create an <li> element
    const li= document.createElement('li'); 
    li.textContent= tweet;
    
    //Add the remove button of each tweets
    li.appendChild(removeBtn);

    //Add to the list 
    tweetList.appendChild(li);
    });
}
    
    //Removes the tweet from local storage
    
    function removetweettocalstorage(tweet) {
   //Get tweets from storage 
   let tweets= getTweetsFromStorage();
    
    //Remove the X from the tweet
    
    const tweetDelete= tweet.substring( 0, tweet.length-1);
    
    // Loop throught the tants and remove the topets that's equal
     tweets.forEach(function(tweetLS, index) {
    if(tweetDelete=== tweetLS) {
         tweets, splice(findex, 1);
    }
});
    
    // save the data
    localStorage.setItem ('tweets', JSON.stringify(tweets) );
}