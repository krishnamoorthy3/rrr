let apartment_Details = [
    {
        title: "1 BED (793 sq.ft)",
        price: "₹ 83 Lacs Onwards*",
        image: "./images/apartment/one.png",
        buttonText: "Check plan",
        formTitle: "SEND FLOOR PLAN DETAILS :",
        formType: "floor-plan"
    },
    {
        title: "2 BED (1126 - 1176 sq.ft)",
        price: "₹ 1.18 CR Onwards*",
        image: "./images/apartment/two.png",
        buttonText: "Check plan",
        formTitle: "SEND FLOOR PLAN DETAILS :",
        formType: "floor-plan"
    },
    {
        title: "3 BED+2T (1343 -1395 sq.ft)",
        price: "₹ 1.41 CR Onwards**",
        image: "./images/apartment/three.png",
        buttonText: "Check plan",
        formTitle: "SEND FLOOR PLAN DETAILS :",
        formType: "floor-plan"
    },
    {
        title: "3 BED+3T  (1743 -1833 sq.ft)",
        price: "₹ 1.83 CR Onwards*",
        image: "./images/apartment/four.png",
        buttonText: "Check plan",
        formTitle: "SEND FLOOR PLAN DETAILS :",
        formType: "floor-plan"
    },
    {
        title: "3.5 BED  (2045 sq.ft)",
        price: "₹ 1.83 CR Onwards*",
        image: "./images/apartment/five.png",
        buttonText: "Check plan",
        formTitle: "SEND FLOOR PLAN DETAILS :",
        formType: "floor-plan"
    },
    {
        title: "3 BED DUPLEX  (2207 sq.ft)",
        price: "₹ 2.31 CR Onwards*",
        image: "./images/apartment/six.png",
        buttonText: "Check plan",
        formTitle: "SEND FLOOR PLAN DETAILS :",
        formType: "floor-plan"
    },
    {
        title: "4 BED + STAFF  (2504 sq.ft)",
        price: "₹ 2.62 CR Onwards*",
        image: "./images/apartment/seven.png",
        buttonText: "Check plan",
        formTitle: "SEND FLOOR PLAN DETAILS :",
        formType: "floor-plan"
    },
    {
        title: "Cost Sheet",
        image: "./images/apartment/costing.png",
        buttonText: "Get cost sheet",
        formTitle: "DOWNLOAD COST SHEET",
        formType: "cost-sheet"
    }
];

let villaments_Details = [
    {
        title: "3 BED  (2200 - 2400 sq.ft)",
        price: "",
        image: "./images/villaments/one.png",
        buttonText: "Check plan",
        formTitle: "SEND FLOOR PLAN DETAILS :",
        formType: "floor-plan"
    },
    {
        title: "4 BED (3100 - 3400 sq.ft)",
        price: "",
        image: "./images/villaments/two.png",
        buttonText: "Check plan",
        formTitle: "SEND FLOOR PLAN DETAILS :",
        formType: "floor-plan"
    },



    {
        title: "Cost Sheet",
        image: "./images/villaments/costing.png",
        buttonText: "Get cost sheet",
        formTitle: "DOWNLOAD COST SHEET",
        formType: "cost-sheet"
    }
];

let rowvilla = [
    {
        title: "3 BED VILLA (2900 sq.ft)",
        price: "",
        image: "./images/rowvilla/one.png",
        buttonText: "Check plan",
        formTitle: "SEND FLOOR PLAN DETAILS :",
        formType: "floor-plan"
    },
    {
        title: "4 BED VILLA (3200 sq.ft)",
        price: "",
        image: "./images/rowvilla/two.png",
        buttonText: "Check plan",
        formTitle: "SEND FLOOR PLAN DETAILS :",
        formType: "floor-plan",
        
    },
    {
        title: "Cost Sheet",
        image: "./images/villaments/costing.png",
        buttonText: "Get cost sheet",
        formTitle: "DOWNLOAD COST SHEET",
        formType: "cost-sheet"
    }
];




    for (let i = 0; i < apartment_Details.length; i++) {
        let data = apartment_Details[i];
        let innerHTML = "";

        if (data.formType === "cost-sheet") {
            innerHTML = `
                <div class="col-lg-4 col-md-6 sec-4-card text-center">
                    <h3 class="sec4-card-t my-4">${data.title}</h3>
                    <div class="sec4-card-img">
                    <img src="${data.image}" width="100%" alt="">
                    <div class="my-4">
                        <button class="btn-secondary btn open-form-btn"
                        data-index="${i}"
                        data-formdata='${'Apartment '+data.title}'
                        data-form-title="${data.formTitle}"
                        data-form-type="${data.formType}">${data.buttonText}<i class="fa-solid fa-download"></i></button>
                    </div>
                    </div>
                </div>`;
        } else {
            innerHTML = `
                    <div class="col-lg-4 col-md-6 sec-4-card">
                        <div class="sec-4-card-t-box">
                        <h3 class="sec4-card-t">${data.title} <br/> ${data.price}</h3>
                        </div>
                        <div class="sec4-card-img">
                        <img src="${data.image}" width="100%" alt="">
                        <div class="sec4-card-btn-over">
                            <button class="btn-secondary btn open-form-btn"
                            data-formdata='${'Apartment '+data.title}'
                            data-index="${i}"
                            data-form-title="${data.formTitle}"
                            data-form-type="${data.formType}">${data.buttonText}<i class="fa-solid fa-download"></i></button>
                        </div>
                        </div>
                    </div>`;
        }

        $(".sec-4-card-wrap").append(innerHTML);
    }


    for (let i = 0; i < villaments_Details.length; i++) {
        let data = villaments_Details[i];
        let innerHTML = "";

        if (data.formType === "cost-sheet") {
            innerHTML = `
                <div class="col-lg-4 col-md-6 sec-4-card text-center">
                    <h3 class="sec4-card-t my-4">${data.title}</h3>
                    <div class="sec4-card-img">
                    <img src="${data.image}" width="100%" alt="">
                    <div class="my-4">
                        <button class="btn-secondary btn open-form-btn"
                        data-formdata='${'VILLAMENTS '+data.title}'
                        data-index="${i}"
                        data-form-title="${data.formTitle}"
                        data-form-type="${data.formType}">${data.buttonText}<i class="fa-solid fa-download"></i></button>
                    </div>
                    </div>
                </div>`;
        } else {
            innerHTML = `
                <div class="col-lg-4 col-md-6 sec-4-card">
                    <div class="sec-4-card-t-box">
                    <h3 class="sec4-card-t">${data.title} <br/> ${data.price}</h3>
                    </div>
                    <div class="sec4-card-img">
                    <img src="${data.image}" width="100%" alt="">
                    <div class="sec4-card-btn-over">
                        <button class="btn-secondary btn open-form-btn"
                        data-formdata='${'VILLAMENTS '+data.title}'
                        data-index="${i}"
                        data-form-title="${data.formTitle}"
                        data-form-type="${data.formType}">${data.buttonText}<i class="fa-solid fa-download"></i></button>
                    </div>
                    </div>
                </div>`;
        }

        $(".sec-5-card-wrap").append(innerHTML);
    }


    for (let i = 0; i < rowvilla.length; i++) {
        let data = rowvilla[i];
        let innerHTML = "";

        if (data.formType === "cost-sheet") {
            innerHTML = `
                <div class="col-lg-4 col-md-6 sec-4-card text-center">
                    <h3 class="sec4-card-t my-4">${data.title}</h3>
                    <div class="sec4-card-img">
                    <img src="${data.image}" width="100%" alt="">
                    <div class="my-4">
                        <button class="btn-secondary btn open-form-btn"
                        data-formdata='${'ROW VILLAS ' +data.title}'
                        data-index="${i}"
                        data-form-title="${data.formTitle}"
                        data-form-type="${data.formType}">${data.buttonText} <i class="fa-solid fa-download"></i></button>
                    </div>
                    </div>
                </div>`;
        } else {
            innerHTML = `
                <div class="col-lg-4 col-md-6 sec-4-card">
                    <div class="sec-4-card-t-box">
                    <h3 class="sec4-card-t">${data.title} <br/> ${data.price}</h3>
                    </div>
                    <div class="sec4-card-img">
                    <img src="${data.image}" width="100%" alt="">
                    <div class="sec4-card-btn-over">
                        <button class="btn-secondary btn open-form-btn"
                        data-formdata='${'ROW VILLAS ' +data.title}'
                        data-index="${i}"
                        data-form-title="${data.formTitle}"
                        data-form-type="${data.formType}">${data.buttonText}<i class="fa-solid fa-download"></i></button>
                    </div>
                    </div>
                </div>`;
        }

        $(".sec-6-card-wrap").append(innerHTML);
    }


    $(document).on("click", ".open-form-btn", function () {
        const formTitle = $(this).data("form-title");
        const formType = $(this).data("form-type");
        const index = $(this).data("index");
        const formdata=$(this).data("formdata")

        $("#popupFormTitle").text(formTitle);
        $("#popupFormTitleInput").val(formTitle);
        $("#popupFormType").val(formType);
        $("#popupFormIndex").val(index);
        $("#popupFormData").val(formdata);
        $("#brouchure_popup").fadeIn();
    });

