// Je select et stock la div posts 
const postsContainer = document.querySelector('.posts');

const posts = [
    {
    titre : "SEO, les bonnes pratiques",
    hashtag : "#SEO",
    extrait : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
    titre : "Bien débuter en réferencement payant",
    hashtag : "#réferencement",
    extrait : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
    titre : "Content Marketing, les bons arguments",
    hashtag : "#contentmarketing",
    extrait : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];
console.log(posts);

posts.forEach(item => {
    // console.log(item);
    const article = 
    `
        <div class="post">
            <div class="post-titre">${item.titre}</div>
            <div class="post-extrait">${item.extrait}</div>
            <div class="post-hashtag">${item.hashtag}</div>
        </div>
    `
    console.log(article);
    postsContainer.innerHTML += article;
});



// const t = post.titre;
// console.log(t)
