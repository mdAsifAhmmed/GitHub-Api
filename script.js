fetch("https://api.github.com/users")
.then(Response => Response.json())
.then(Api=>{
    Api.forEach((value)=>{

        const app=`
        
             <div class="col-3">
                <div class="card my-3" style="background: rgb(0, 5, 19);color:#fff;">
                  <div class="card-body">
                      <img src=${value.avatar_url} alt="ApiImg" class="img-fluid w-100"/>
   
                      <h6>Name: ${value.login}</h6>
                      <h6>Id: ${value.id}</h6>
   
                    </div>
                </div>
             </div>
        

        `;

        const show=document.querySelector('#show')
        show.insertAdjacentHTML("Beforebegin",app)
    })
})
