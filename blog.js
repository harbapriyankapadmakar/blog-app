async function addUsers(event)
{

try {
    
    event.preventDefault();
    const author=document.getElementById('authorid').value;
    const description=document.getElementById('desid').value;
    const title=document.getElementById('titleid').value;
    console.log(author,description,title);
    const expense={
        author:author,description:description,title:title
    }

    console.log(expense);
    
    
    const res =await axios.post('http://localhost:3000/expense/add-expense',expense);
          
             console.log(res.data.newExpense);
             showUserOnScreen(res.data.newExpense);
             document.getElementById('titleid').value='';
             document.getElementById('desid').value='';
             document.getElementById('authorid').value='';
} catch (error) {
    document.body.innerHTML=document.body.innerHTML+'<h4>Something Went Wrong</h4>';
    console.log(error);
}

}

window.addEventListener('DOMContentLoaded',async ()=>{
   try {
     const res =await axios.get('http://localhost:3000/expense/get-expense')     
     
     console.log(res.data.allExpenses);

     for(let i=0;i<res.data.allExpenses.length;i++)
     {
        showUserOnScreen(res.data.allExpenses[i]);
        // console.log('reached');

     }
     
   } catch (error) {
    document.body.innerHTML=document.body.innerHTML+'<h4>Something Went Wrong</h4>';
    console.log(error);
   }

})


function showUserOnScreen(user)
{
    let parentNode=document.getElementById('listofexpenses');


    const childNode=`<li id=${user.id}>${user.title}-${user.description}-${user.author}
                        <button onclick=deleteUser('${user.id}')>Delete</button>
                     <button onclick=comment('${user.id}')>addcomment</button></li>`

    parentNode.innerHTML=parentNode.innerHTML+childNode;
}

async function deleteUser(userid)
{
  console.log('comes');

    try {
        await axios.delete(`http://localhost:3000/expense/delete-expense/${userid}`);
        console.log('axios');
        removeFromScreen(userid);
        console.log('complete');
    } catch (err) {
        document.body.innerHTML= document.body.innerHTML+"<h4>Something Went Wrong</h4>"
    console.log(err);
    }          
         
}

function removeFromScreen(id)
 {
     let parent=document.getElementById('listofexpenses');
    const childNodeDeleted=document.getElementById(id);

    parent.removeChild(childNodeDeleted)
}

function comment() {
    var my_comment = document.getElementById('comments');
    my_comment.innerHTML = "<textarea id='user_comment'> </textarea> <button onclick='addNewItem()'>Post Comment</button>";
  }
  function addNewItem() {
    var thediv = document.getElementById("comments_and_replies");
    var listItem = document.createElement("ul");
    var replyBox = document.createElement("textbox");
    var commentSpan = document.createElement("span");
    var user_comment = document.getElementById('user_comment');
    var replyButton = document.createElement("button");
  
    listItem.className = "comments-list";
    replyButton.innerText = "Reply";
    replyButton.className = "reply";
    replyButton.addEventListener("click", function() {
      var g = document.getElementById('comments_and_replies');
      for (var i = 0, len = g.children.length; i < len; i++) {
  
        (function(index) {
          g.children[i].onclick = function() {
            listItem.insertAdjacentText(replyBox, listItem.children[index]);
            
        }
        })(i);
    }
})

commentSpan.textContent = user_comment.value;

var documentFragment = document.createDocumentFragment();
documentFragment.appendChild(listItem);
listItem.appendChild(commentSpan);
listItem.appendChild(replyButton);
thediv.appendChild(documentFragment);
}