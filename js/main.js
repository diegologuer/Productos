function getData(){
    let promesa = fetch("https://fakestoreapi.com/products/", {
        method: "GET"
    });
    promesa.then((response)=>{
        response.json()
        .then(
            (data)=>{
                createCards(data);
            }

        ).catch(
            (error)=>{
            console.error("Problema en el JSON", error);
        });
    }

    ).catch((error)=>{
        console.error(error, "Ocurrió un error en la solicitud");
    });
}

getData();

let container = document.getElementById("productosPrincipales");

function createCards(data){
    
    data.forEach(producto =>{
        container.insertAdjacentHTML("beforeend",
            `
            <div class="card col-3 m-3" style="width: 18rem;">
                <img src="${producto.image}" class="card-img-top" height="200px" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.description.slice(0,100)+" ..."}</p>
                   

                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"                       data-bs-target="#${producto.id}">
                      Mostrar más
                    </button>
                        
                    <!-- Modal -->
                    <div class="modal fade" id="${producto.id}" data-bs-backdrop="static"                      data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"                   aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">${producto.title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"                        aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            ${producto.description}
                            <br>
                            <br>
                            <p><strong>Price: $${producto.price} </strong></p>
                          </div>
                          
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"                        data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div> 
            
            `
        )
    })
};


