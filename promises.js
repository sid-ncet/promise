let posts = [
    { title: 'post one', body: 'this is post one', createdAt: new Date().getTime() },
    { title: 'post two', body: 'this is post two', createdAt: new Date().getTime() }
];
function create4thPost() {
        var output = '';
        for (var i = 0; i < posts.length; i++) {

            output = output + `<li>${posts[i].title} last updated-${(new Date().getTime()-posts[i].createdAt)/1000}seconds ago</li>`;
            

        }
        document.body.innerHTML = output;
    
}
function createPost(post) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() })
            const error=false; //if true then all four post nothing to show
            if(!error){
                resolve()
            }else{
                reject('something went wrong')
            }
        }, 1000)
    })    
}
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                let lastElement=posts.pop()
                resolve(lastElement)
            }else{
                reject('aray is empty now')
            }
        },1000)
    })
    

}
//create4thPost()
createPost({ title: 'post three', body: 'this is post three' }).then(()=>{
    create4thPost()
    deletePost().then((deletedElement)=>{
        console.log(deletedElement)
        create4thPost()
        deletePost().then(()=>{
            create4thPost()
            deletePost().then(()=>{
                create4thPost()
                deletePost().then(()=>{}).catch((err)=>{
                    console.log(err,'You dont have to use for loop as there are only 3 posts ')
                })
            })
        })
    })
})
.catch(err=> console.log(err))