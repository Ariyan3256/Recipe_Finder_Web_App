/*sub_btn.addEventListener('click', dish_search);
const dish_search=async()=>{
    
}*/
//let namasteBtn=document.querySelector('button');
sub_btn.addEventListener('click',showMsg);

function showMsg(){
    //alert("Namaste World");
    var i=0;
    const dish=document.getElementById('input');
    //alert(dish);
    const dishName=dish.value;
    if(dishName=='chicken'){
        window.open('chicken.html','newwindow');
        let p=fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772");
        p.then((response)=>{
            console.log(response.status);
            console.log()
            return response.json()
        }).then((completedata)=>{
            //console.log(values);
            let data1="";
            completedata.map((values)=>{
                data1+= `<div class="card">
                <h1 class="title">${values.meals}</h1>
                //<img src="" alt="img" class="images">
                <p></p>
                <p></p>
                <p></p>
                console.log(${values.meals});
            </div>`
            })
        }).catch((err)=>{
            console.log(err);
        })
        let q=fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        q.then((response)=>{
            console.log(response.status);
            console.log()
            return response.json()
        }).then((completedata)=>{
            console.log(completedata)
            //console.log(values);
            let data1="";
            completedata.map((values)=>{
                data1+= `<div class="card">
                <h1 class="title">${values.meals}</h1>
                //<img src="" alt="img" class="images">
                <p></p>
                <p></p>
                <p></p>
                console.log(${values.categories[2]});
            </div>`
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    else if(dishName=='dessert'){
        window.open('dessert.html','newwindow');
        let p=fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
        p.then((response)=>{
            console.log(response.status);
            console.log()
            return response.json()
        }).then((completedata)=>{
            //console.log(values);
            let data1="";
            completedata.map((values)=>{
                data1+= `<div class="card">
                <h1 class="title">${values.meals}</h1>
                //<img src="" alt="img" class="images">
                <p></p>
                <p></p>
                <p></p>
                console.log(${values.meals});
            </div>`
            })
        }).catch((err)=>{
            console.log(err);
        })
        let q=fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        q.then((response)=>{
            console.log(response.status);
            console.log()
            return response.json()
        }).then((completedata)=>{
            //console.log(values);
            let data1="";
            completedata.map((values)=>{
                data1+= `<div class="card">
                <h1 class="title">${values.meals}</h1>
                //<img src="" alt="img" class="images">
                <p></p>
                <p></p>
                <p></p>
                console.log(${values.meals});
            </div>`
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    else if(dishname=='vegeterian'){
        let p=fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
        p.then((response)=>{
            console.log(response.status);
            console.log()
            return response.json()
        }).then((completedata)=>{
            //console.log(values);
            let data1="";
            completedata.map((values)=>{
                data1+= `<div class="card">
                <h1 class="title">${values.meals}</h1>
                //<img src="" alt="img" class="images">
                <p></p>
                <p></p>
                <p></p>
                console.log(${values.meals});
            </div>`
            })
        }).catch((err)=>{
            console.log(err);
        })
        let q=fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        q.then((response)=>{
            console.log(response.status);
            console.log()
            return response.json()
        }).then((completedata)=>{
            //console.log(values);
            let data1="";
            completedata.map((values)=>{
                data1+= `<div class="card">
                <h1 class="title">${values.meals}</h1>
                //<img src="" alt="img" class="images">
                <p></p>
                <p></p>
                <p></p>
                console.log(${values.categories[2]});
            </div>`
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    console.log();
    alert(dishName);
}


let p=fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
p.then((response)=>{
    console.log(response.status);
    console.log()
    return response.json()
}).then((completedata)=>{
    console.log(completedata);
    let data1="";
    completedata.map((values)=>{
        data1+= `<div class="card">
        <h1 class="title">${values.meals}</h1>
        //<img src="" alt="img" class="images">
        <p></p>
        <p></p>
        <p></p>
        console.log(${values.meals});
    </div>`
    })
}).catch((err)=>{
    console.log(err);
})