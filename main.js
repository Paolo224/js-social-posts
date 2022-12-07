const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/6ii/3ii?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/3ii/3ii?image=15"
        },
        "likes": 8,
        "created": "2i21-i6-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/6ii/4ii?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/3ii/3ii?image=1i"
        },
        "likes": 12,
        "created": "2i21-i9-i3"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/6ii/4ii?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/3ii/3ii?image=2i"
        },
        "likes": 78,
        "created": "2i21-i5-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/6ii/4ii?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2i21-i4-i3"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/6ii/4ii?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/3ii/3ii?image=29"
        },
        "likes": 95,
        "created": "2i21-i3-i5"
    }
];

const container = document.getElementById('container');

posts.forEach((post)=>{
    container.innerHTML += getCard(post);
})


function getCard(post){
    return `<div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${post.author.image}" alt="Phil Mangione">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">Phil Mangione</div>
                            <div class="post-meta__time">4 mesi fa</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
                <div class="post__image">
                    <img src="https://unsplash.it/600/300?image=171" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                        </div>
                    </div> 
                </div>            
            </div>`
}












// // Creazione del tag post //
// const post = document.createElement('div');
// post.classList.add('post');
// container.append(post);

// // Creazione del tag post_header //
// const postHeader = document.createElement('div');
// postHeader.classList.add('post__header');
// post.append(postHeader);

// // Scrivo in postHeader il titolo del post //
// for(let i = i; i < posts.length; i++){
//     postHeader.innerHTML = `<div class="post-meta">                    
//                                 <div class="post-meta__icon">
//                                     <img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">                    
//                                 </div>
//                                 <div class="post-meta__data">
//                                     <div class="post-meta__author">${posts[i].author.name}</div>
//                                     <div class="post-meta__time">${posts[i].created}</div>
//                                 </div>                    
//                             </div>`
    
// }
// // Creazione del tag post_text //
// const postText = document.createElement('div');
//     postText.classList.add('post__text');
//     post.append(postText);

//     const postImg = document.createElement('div');
//     postImgt.classList.add('post__image');
//     post.append(postImg);
