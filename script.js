const data = [
    {
        id: 1,
        feature: "Calculator",
        details: "calculator",
        attract: "fitness influencer",
        registerForAProduct: "https://dlvkyia8i4zmz.cloudfront.net/VdD8n4M5RCqfIbPL1dON_Group_645_1.jpg",
        registerForAService: "https://dlvkyia8i4zmz.cloudfront.net/oK0RiACpSkiMVp3VjAEQ_Frame_1__1_.png",
        attractFollowers: "https://dlvkyia8i4zmz.cloudfront.net/DPE15wZ6TOynTtD8k1Lc_Frame_454.png",

    },
    {
        id: 2,
        feature: "Assessment",
        details: "assessment",
        attract: "Fashion influencer",
        registerForAProduct: "https://dlvkyia8i4zmz.cloudfront.net/H6cYJM2lQnGaqMu2wEGG_Group_645_4.png",
        registerForAService: "https://dlvkyia8i4zmz.cloudfront.net/EoOkspAJSNKPhFKLWwpH_Frame_2__6_.png",
        attractFollowers: "https://dlvkyia8i4zmz.cloudfront.net/9XhV5yyHS4OA8hrIZQzr_Frame_455.png",

    },
    {
        id: 3,
        feature: "Recommendation",
        details: "recommendation",
        attract: "photoGraphers",
        registerForAProduct: "https://dlvkyia8i4zmz.cloudfront.net/duFn8RlhRPqFmsKMuogI_Group_645_1.png",
        registerForAService: "https://dlvkyia8i4zmz.cloudfront.net/MECBmnVlROiYMpdKWhyt_Frame_3__1_.png",
        attractFollowers: "https://dlvkyia8i4zmz.cloudfront.net/PGLViPyT3iGuN6sn12Qy_Frame_456.png",

    },
    {
        id: 4,
        feature: "Chatbot",
        details: "chatbot",
        attract: "tech influencer",
        registerForAProduct: "https://dlvkyia8i4zmz.cloudfront.net/xFFVV6KTD2vPlfkGAeiJ_Group_645_2.png",
        registerForAService: "https://dlvkyia8i4zmz.cloudfront.net/AT8DBIGWSl6BNV2JSPXe_Group_645_2.jpg",
        attractFollowers: "https://dlvkyia8i4zmz.cloudfront.net/qQ2zrw8hT4WbdsfaBdSg_Frame_457.png",

    },

    {
        id: 5,
        feature: "Quiz",
        details: "quiz",
        attract: "Dancers",
        registerForAProduct: "https://dlvkyia8i4zmz.cloudfront.net/w7ZHJrVqR1m2BnYsF45S_Group_645_3.png",
        registerForAService: "https://dlvkyia8i4zmz.cloudfront.net/cL9hWLhT1qeUfcakZdrM_Group_645_5.jpg",
        attractFollowers: "https://dlvkyia8i4zmz.cloudfront.net/nQUQtFqcSKW4eb0lgniu_Frame_458.png",

    },
]



//JS code 


const showdata = () => {
    data.map((tool) => {
        //console.log(tool)
        document.getElementById('menu1').innerHTML += `<li class="menu" id="selected-menu" onclick="GetID(${tool.id})">${tool.feature}</li>`
        document.getElementById('menu2').innerHTML += `<li class="menu" id="selected-menu" onclick="GetID(${tool.id})">${tool.feature}</li>`
        document.getElementById('menu3').innerHTML += `<li class="menu" id="selected-menu" onclick="GetID(${tool.id})">${tool.attract}</li>`
    })
}
showdata()

const GetID = (id) => {
    console.log(id)

    const filteredData = data.filter((filter) => {
        return filter.id == id
    })
    console.log(filteredData)
    document.getElementById('loadContent1').innerHTML = `<img src="${filteredData[0].registerForAProduct}" alt="">`
    document.getElementById('loadContent2').innerHTML = `<img src="${filteredData[0].registerForAService}" alt="">`
    document.getElementById('loadContent3').innerHTML = `<img src="${filteredData[0].attractFollowers}" alt="">`
    console.log(filteredData[0].registerForAProduct)

}
GetID(1)


let search = document.getElementById('search')

search.addEventListener('change', (event) => {

    let inputText = event.target.value
    let small = inputText.toLowerCase();
    console.log(small)

    let inputFilter = data.filter((filter) => {
        return filter.details === small
    })
    if (inputFilter.length !== 0) {
        console.log('filter is', inputFilter)
        document.getElementById('loadContent1').innerHTML = `<img src="${inputFilter[0].registerForAProduct}" alt="">`
    }
    else {
        alert('Not found')
    }

});


//Top Tabs

let tabs = document.querySelectorAll('.tab')
let tab1 = document.getElementById('tab1-content')
let tab2 = document.getElementById('tab2-content')
let tab3 = document.getElementById('tab3-content')

tabs.forEach(level => {
    level.addEventListener('click', function (ev) {
        tabs.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        console.log(this.id)
        if (this.id === 'tab1') {
            tab1.style.display = "flex"
            tab2.style.display = "none"
            tab3.style.display = "none"
        }
        if (this.id === 'tab2') {
            tab1.style.display = "none"
            tab2.style.display = "flex"
            tab3.style.display = "none"
        }
        if (this.id === 'tab3') {
            tab1.style.display = "none"
            tab2.style.display = "none"
            tab3.style.display = "flex"
        }
    });
});