// Event delegate and purpose of Event bubble

document.getElementById('add-newitem').addEventListener("click", function(){
    let itemParent = document.getElementById('item-parent');
    let newItem = document.createElement('li');
    newItem.innerText = "Lorem Ipsum new item added in here";
    itemParent.appendChild(newItem);
});

document.getElementById("item-parent").addEventListener("click", function(e){
    e.target.parentNode.removeChild(e.target);
});

/* let delegate = document.getElementsByClassName('item');

for (let i = 0; i < delegate.length; i++) {
    const element = delegate[i];
    element.addEventListener("click", function(e){
        e.target.parentNode.removeChild(e.target);
    });
    
} */