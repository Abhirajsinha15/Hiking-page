function changeIcon(){

$(".navbtn").on( "click",function(){
    $(".navbar-toggler-icon").toggleClass("close-icon")

})

}


// ____________________HERO SECTION-DATA__________________________________________________________
function hero() {
    let cont = $(".hero-theme");

    let datas = [{
        title: "IT'S TIME FOR HIKING",
        subHead: "LOREMIPSUM DOLOR",
        paragraph: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni
        aut, tempore
        doloremque enim incidunt inventore omnis consequatur beatae eos?"`,
    }]

    $.each(datas, function (index, item) {
        $(cont).append(`
        <div class="col-lg-6 col-md-6 col-sm-3  col-xl-6 text-left">
        <div class="content my-lg-5 px-lg-5">
            <h1>${item.title}</h1>
            <h5>${item.subHead}</h5>
            <button class="btn btn-light mt-5"><a href="" class=" text-dark">READ MORE</a></button>
            <p class="mt-3">${item.paragraph}</p>
        </div>
     </div>
        `)
    })

}


// ____________________CITY SECTION-DATA__________________________________________________________
function city() {
    let title = $(".location-title");
    let locationPara = $(".location-content");

    let data = [{
        title: "LET 'S GO",
        paragraph: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore minima ratione adipisci delectus
        nihil."`
    }]

    title.append(data[0].title)
    locationPara.append(data[0].paragraph)

    let itemContent = [{
            title: "Lorem ipsum",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing....",
            imgName: "card-1"
        },
        {
            title: "Lorem ipsum",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing....",
            imgName: "card-2"
        },
        {
            title: "Lorem ipsum",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing....",
            imgName: "card-3"
        },
    ]

    let itemWrapper = $(".location-wrapper");
    $.each(itemContent, function (index, item) {
        itemWrapper.append(`
        <div class="col-lg-4 col-md-12 col-xl-4">
            <div class="card border-0">
                <div class="card-img text-md-center text-xl-left">
                    <figure><img src="/IMAGES/${item.imgName}.png" class="img-fluid"></figure>
                     <div class="content py-lg-4 px-lg-2 px-md-5 py-md-3  text-light">
                        <h2>${item.title}</h2>
                         <p class="d-md-flex">${item.paragraph}</p>
                    </div>
                </div>
            </div>
        </div>
        `)
    })

}


// ____________________DISCOUNT SECTION-DATA__________________________________________________________
function discount(){
    
  let  itemContent =[
    {
        title:"Discount up to 50% All Excursion",
        paragraph:`"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        dolore,
        commodi hic omnis
        debitis voluptas autem fuga ab eos officia. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Adipisci vitae autem officia aut repudiandae dignissimos, accusantium
        magni blanditiis illo iure!"`,

  }
]

    let itemWrapper = $(".upper-class-wrapper");
    $.each(itemContent, function(index, item){
        itemWrapper.append(`
        <div class="col-lg-6 col-md-12 col-sm-12 discount-img">

        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 discount-content">
            <div class="contentpx-lg-3 w-75 text-light">
                <h2 class="my-lg-5">${item.title}</h2>
                <p class="my-lg-5 ">${item.paragraph}</p>

                <button class="btn py-lg-3 px-lg-5 my-lg-5 text-light"> READ MORE</button>
            </div>
        </div>
        `)
    })
}


// ____________________OFFER SECTION-DATA__________________________________________________________
function offer(){
    let itemContent =[
    {
        title:"January's Promo: Buy 1 Get 1 Free!",
        paragraph:`"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        dolore,
        commodi hic omnis
        debitis voluptas autem fuga ab eos officia. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Adipisci vitae autem officia aut repudiandae dignissimos, accusantium
        magni blanditiis illo iure!"`,
    }
]

    let itemWrapper = $(".lower-class-wrapper");
    $.each(itemContent,function(index,item){
        itemWrapper.append(`
        <div class="col-lg-6 col-md-12  col-sm-12 px-0 py-0 offer-img"></div>
        <div class="col-lg-6 col-md-12 col-sm-12 offer-content">
            <div class="content px-lg-5 pt-lg-1 mx-lg-5   text-light">
                <h2 class="my-lg-5">${item.title}</h2>
                <p class="my-lg-5">${item.paragraph}</p>

                <button class="btn py-lg-3 px-lg-5 my-lg-5 text-light"> READ MORE</button>
            </div>
        </div>

        `)
    })

}

// ____________________MOUNTAIN SECTION-DATA__________________________________________________________
function mountain() {
    let cont = $("#mountain-theme");

    let datas = [{
        title: "Hiking in the mountains",
        paragraph: `"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam reiciendis quia
        placeat
        ipsam fuga animi reprehenderit at amet delectus consequatur."`,
    }]

    $.each(datas, function (index, item) {
        cont.append(`
        <div class="col-lg-12 col-md-12 col-sm-3">
             <div class="content text-light text-lg-center">
                <h2 class="my-lg-5 my-sm-5">${item.title}</h2>
                    <p>${item.paragraph}</p>
            </div>
        </div>
        `)
    })
}

// ____________________CLIMBING SECTION-DATA__________________________________________________________
function climbing() {
    let cont = $("#climbing-theme");

    let datas = [{
        title: "EXPLORE <span>THE WORLD</span>",
    }]

    $.each(datas, function (index, item) {
        $(cont).append(`
        <div class="col-lg-7">

        </div>
        <div class="col-lg-5 py-lg-5 col-md-12">
            <div class="content my-lg-5 ">
                <h2>${item.title}</h2>
            </div>
        </div>
        `)
    })
}


// ____________________CARDS SECTION-DATA__________________________________________________________
function cards() {

    let itemContent = [{
            title: "lorem ipsum.",
            paragraph: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam nihil, 
            numquam est distinctio mollitia voluptatem."`,

        },
        {
            title: "lorem ipsum.",
            paragraph: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam nihil, 
            numquam est distinctio mollitia voluptatem."`,

        },
        {
            title: "lorem ipsum.",
            paragraph: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam nihil, 
            numquam est distinctio mollitia voluptatem."`,

        },
    ]

    let itemWrapper = $("#lorem-wrapper");
    $.each(itemContent, function (index, item) {
        itemWrapper.append(`
                   <div class="col-lg-4">
                        <div class="card border-0">
                            <div class="content">
                                <h2>${item.title}</h2>
                                <p>${item.paragraph}</p>
                            </div>
                        </div>
                    </div>
        `)
    })


}


// ____________________REGARDS SECTION-DATA__________________________________________________________
function regards() {

    let cont = $("#regards-content")

    let data = [{
        title: "Lorem Ipsum",
        paragraph: `"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia vero exercitationem
        saepe? Dicta, eveniet quod Lorem ipsum dolor sit amet.."`
    }]

    $.each(data, function (index, item) {
        $(cont).append(`
        <div class="col-lg-12">
        <div class="content ">
            <p>${item.paragraph}</p>
            <h5 class="my-5">${item.title}</h5>
        </div>
    </div> `)
    })


}


// ____________________EMAIL SECTION-DATA__________________________________________________________
function email(){

    let cont = $("#email-content")

    let data = [{
        title:"Title Here",
        paragraph:`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam nihil,
        numquam est distinctio mollitia voluptatem."`,
    }]

    $.each(data , function(index,item){
        $(cont).append(`
        <div class="col-lg-12">
        <div class="content text-lg-center ">
            <h2 class="my-5 text-light">${item.title}</h2>
            <p>${item.paragraph}</p>
            <form class="form-inline d-block my-2 my-5">
                <input class="form-control form-control-lg " type="email" placeholder="Your email" aria-label="Search">
                <button class="btn text-light">Subscribe</button>
            </form>
        </div>

    </div>
        `)
    })
}



// CALLING ALL FUNCTION
changeIcon();
hero();
city();
discount();
offer();
mountain();
climbing();
cards();
regards();
email();



