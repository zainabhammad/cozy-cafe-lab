// Part 1
// The cafe’s title is a bit too long. Select the #main-title id element and change the text to 
// “Welcome to the Cozy Cafe”. Let’s also improve our page’s appearance by changing the text-align to center on the title as well.

document.querySelector('#main-title').textContent ='Welcome to the Cozy Cafe';
document.querySelector("#main-title").style.textAlign = 'center';

//Part 2
// Select the body element and change the background color to
// a soothing pastel shade of your choice. (If you can’t think of a color, bisque, lightsteelblue, and pink are good choices.)

document.querySelector('body').style.backgroundColor = 'bisque';

//Part 3 
// Select the <p> element which is meant to hold the quote of the day. Update it’s 
// content so that it displays a quote of your choice (or use this classic: “Life happens, coffee helps.”).

document.querySelector('p').textContent = 'The sky is the limit'; 

//Part 4 
// Select all elements with the class highlight-title and change their font-style to italic. 
// Remember, you might need to iterate through a collection of elements.

const highlightTitleClass = document.querySelectorAll('.highlight-title'); 
for (let i = 0 ; i < highlightTitleClass.length; i++){
    highlightTitleClass[i].style.fontStyle ='italic'
}


//Part 5
//Let’s add a new item to the Past Menu Items list. Create a new <li>
// element, set the text to “Rose Cake”, and append it to the list.


 document.querySelector('#past-menu-items').appendChild(document.createElement("li")).textContent = 'Rose Cake';



 //Part 6 
//  Select the list of Cafe Specialties and add a list item. Be sure to add content to your newly
//   created <li></li> tags (maybe Karak Tea is on offer now?).

document.querySelector('#cafe-specialties').appendChild(document.createElement('li')).textContent = 'Tea'

//Part 7 
// Create a new blog post for a recent cafe event. You will need to create a new <div> element with the class .blog-post,
//  a new <h3> with a relevant event title (e.g., “Karak Tea Tasting Event”), and a new <p> with some text describing the event. 
//  Make sure the new post matches the style and structure of the other blog posts. Think carefully about the order of element creation 
//  and appending.


const newDiv = document.createElement('div')

newDiv.classList.add('blog-post')

const title = document.createElement('h3')
title.textContent = ' Karak Tea Tasting Event' 
newDiv.appendChild(title)

const desc = document.createElement('p')
desc.textContent = 'You do not want to miss it!'
newDiv.appendChild(desc)

document.querySelector('#blogs').appendChild(newDiv)