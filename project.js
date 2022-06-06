/*dropdown menu for navigation after media none*/
let a = document.getElementById('click').addEventListener('click', function run() {
    let nav = document.getElementById('nav-list')
    let nav1 = document.getElementById('search-bar')
    let nav2 = document.getElementById('logo1')

    if (nav.style.display == "none") {


        nav.style.display = "block";
    }
    else {
        nav.style.display = "none";
    }
    



    if (nav1.style.display == "none") {


        nav1.style.display = "block";
    }
    else {
        nav1.style.display = "none";
    }




    if (nav2.style.display == "none") {


        nav2.style.display = "block";
    }
    else {
        nav2.style.display = "none";
    }
});