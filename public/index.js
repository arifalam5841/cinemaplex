let banner_container = document.getElementById("slides_container")

var counter = 0;

function scroll_forward() {
  banner_container.scrollBy(50, 0)
  counter++
  // console.log(counter)

  if (counter > 3) {
    banner_container.scrollBy(-200000, 0)
    counter = 0
  }

}

setInterval(scroll_forward, 2000);


let trending_movies_container = document.getElementById('trendingmovies-cont')
trending_movies_container.nnerHTML = ''


// NAV 

let mainnav = document.getElementById('main-nav')

let home_btn = document.getElementById('homebtn')
let movies_btn = document.getElementById('moviebtn')
let series_btn = document.getElementById('seriesbtn')
let scifi_btn = document.getElementById('scifibtn')

let searchbtn = document.getElementById('search')
let logo = document.getElementById('logosing')
let navleft = document.getElementById('leftside')
let navul = document.getElementById('menucont')
let menubtn = document.getElementById('menu')

let searchcont = document.getElementById('searchcont')
let searchinput = document.getElementById('search-input')
let main_search_btn = document.getElementById('main-search')
let removebtn = document.getElementById('remove-btn')

// PAGES 

let homepage = document.getElementById('home')
let movie_series_page = document.getElementById('movie-series-cont')
let download_page = document.getElementById('download-page')

// DOWNLOAD PAGE 
let dname = document.getElementById('dname')
let dimg = document.getElementById('d-img')
let d_discription = document.getElementById('d-discription')
let d_age = document.getElementById('dage')
let d_quality = document.getElementById('dhd')
let d_category = document.getElementById('dcatog')
let d_watch = document.getElementById('d-watch')
let d_download = document.getElementById('d-download')
let d_episode_primary = document.getElementById('episode-cont')
let d_episode_secondary = document.getElementById('secondary-cont')
let d_back_btn = document.getElementById('d-backbtn')
let related_movies = document.getElementById('relatedmovies')




let navbtns = [home_btn, movies_btn, series_btn, scifi_btn]


function navbtnclick(btn, npage, bpage, display, postition) {
  for (i = 0; i < navbtns.length; i++) {
    navbtns[i].style.color = 'white'
  }

  btn.style.color = '#00c2ec'

  npage.style.display = 'none'
  bpage.style.display = display
  mainnav.style.position = postition
}


home_btn.addEventListener('click', function (e) {
  e.preventDefault()
  navbtnclick(home_btn, movie_series_page, homepage, 'block', 'fixed')
})
movies_btn.addEventListener('click', function (e) {
  e.preventDefault()
  navbtnclick(movies_btn, homepage, movie_series_page, 'grid', 'relative')
})
series_btn.addEventListener('click', function (e) {
  e.preventDefault()
  navbtnclick(series_btn, homepage, movie_series_page, 'grid', 'relative')
})
scifi_btn.addEventListener('click', function (e) {
  e.preventDefault()
  navbtnclick(scifi_btn, homepage, movie_series_page, 'grid', 'relative')
})



// SEARCH BTN FUNTION

searchbtn.addEventListener('click', function () {
  navleft.style.display = 'none'
  logo.style.display = 'none'
  navul.style.display = 'none'

  searchcont.style.display = 'flex'

})

removebtn.addEventListener('click', function () {
  navleft.style.display = 'flex'
  logo.style.display = 'block'
  navul.style.display = 'flex'

  searchcont.style.display = 'none'

})

// MENU BTN FUNCTION

menubtn.addEventListener('click', () => {

  if (navul.style.right == '-520px') {
    navul.style.right = '5px'
  }

  else {
    navul.style.right = '-520px'
  }

})


// APPENDING MOVIES 

// ALL MOVIES AND SERIES -----------------------

let movie_series_array = [
  // Category "m" = movie and "s"= series

  // {name:"",link:"",img:"",category:"", underage:"", gener:"", discription:"",year:"",quality:"" },


  // { name: "Movie name", category: "m", img: "", underage: "18+", gener: "sci-fi", discription: "", link: "dlkaskldsjds", year: "2022", quality: "" },

  // { name: "", category: "s", underage: "", gener: "", discription: "", year: "2023", quality: "",
  //   episodes: [
  //     { link: 'sdffdafsa', season : "1", enumber: '1' },
  //     { link: 'sdffdafsa', season : "1", enumber: '2' },
  //     { link: 'sdffdafsa', season : "1", enumber: '3' },
  //     { link: 'sdffdafsa', season : "1", enumber: '4' },
  //   ]
  // },

  { name: "GRAN TURISMO", link: "https://teraboxapp.com/s/1sF_5Bm5Bse1LCfYh7TGETw", img: "e2.jpg", category: "m", underage: "13", gener: "Action, Drama", discription: "Based on the true story of Jann Mardenborough, the film is the ultimate wish fulfillment tale of a teenage Gran Turismo player whose gaming skills won a series of Nissan competitions to become an actual professional racecar driver.", year: "2023", quality: "HD" },

  { name: "Gadar 2", link: "https://teraboxapp.com/s/1wl3v7EtLvURh6VHLwF09Mw", img: "e3.jpeg", category: "m", underage: "14", gener: "Drama, Action", discription: "During the Indo-Pakistani War of 1971, Tara Singh returns to Pakistan to bring his son, Charanjeet, back home.", year: "2023", quality: "HD" },

  { name: "The Nun II", link: "https://teraboxapp.com/s/1q6EUlpPmBbmAVv6swc5JZw", img: "p3.jpg", category: "m", underage: "16", gener: "Horror", discription: "1956 -- France. A priest is murdered. An evil is spreading. The sequel to the worldwide smash hit follows Sister Irene as she once again comes face-to-face with Valak, the demon nun.", year: "2023", quality: "HD" },

  { name: "Jawan", link: "https://teraboxapp.com/s/1SbkVAT2eRYn9zmleHt3G3g", img: "p6.jpg", category: "m", underage: "14", gener: "Action Thriller", discription: "An emotional journey of a man who is set to rectify the wrongs in the society, in an attempt to get even with his past, driven by a personal vendetta while keeping up to a promise made years ago.", year: "2023", quality: "HD" },

  { name: "GUARDIANS OF THE GALAXY VOL.3", link: "https://teraboxapp.com/s/1HHYr2sQHXnxb2GqKCwwHfg", img: "e4.jpg", category: "m", underage: "13", gener: "sci-fi", discription: "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.", year: "2023", quality: "HD" },

  { name: "The Super Mario", link: "https://teraboxapp.com/s/1fZTumYZ0qKauMdDlnSRt3g", img: "e5.jpg", category: "m", underage: "3", gener: "Animation", discription: "Mario and Luigi go on a whirlwind adventure through Mushroom Kingdom, uniting with a cast of familiar characters to defeat Bowser.", year: "2023", quality: "HD" },



  {
    name: "The peripheral", category: "s", img: "e7.jpg", underage: "18", gener: "sci-fi", discription: "Set in the future when technology has subtly altered society, a woman discovers a secret connection to an alternate reality as well as a dark future of her own.", year: "2022", quality: "HD",
    episodes: [
      { link: 'https://teraboxapp.com/s/1fsCizgYFv4_AJpuYvwqqsA', season: "1", enumber: '1' },

      { link: 'https://teraboxapp.com/s/1glVGBDdLipfWDTa-VUcHvg', season: "1", enumber: '2' },

      { link: 'https://teraboxapp.com/s/10CHRUCIOqr5oDAliFh4Jhg', season: "1", enumber: '3' },

      { link: 'https://teraboxapp.com/s/1Zu6deffNbDnkbfdZfRGxPQ', season: "1", enumber: '4' },

      { link: 'https://teraboxapp.com/s/1ayS_2i494F82vZjAgZ9a8g', season: "1", enumber: '5' },

      { link: 'https://teraboxapp.com/s/1ECKxxTGzvxoFy0VwGWAhjQ', season: "1", enumber: '6' },

      { link: 'https://teraboxapp.com/s/1iX9vxwvdXgl_iBD8gHgqCw', season: "1", enumber: '7' },

      { link: 'https://teraboxapp.com/s/1IaqAJa03x_N8KB3NTZgNNQ', season: "1", enumber: '8' },

    ]
  },

  {
    name: "Sweet Home", category: "s", img: "e8.jpg", underage: "16", gener: "darama", discription: "As humans turn into savage monsters, one troubled teenager and his neighbors fight to survive and to hold onto their humanity.", year: "2020", quality: "HD",
    episodes: [
      { link: 'https://teraboxapp.com/s/1vzLzcTgy60rPiJ2C1HdXhQ', season: "1", enumber: '1-5' },
      { link: 'https://teraboxapp.com/s/1-CNKNc_Y4HshUcsOYE1uRA', season: "1", enumber: '6-10' },
    ]
  },

]

// TRENDING MOVIES -------------------------


let trending_movies_array = [

  { name: "Gadar 2", link: "https://teraboxapp.com/s/1wl3v7EtLvURh6VHLwF09Mw", img: "e3.jpeg", category: "m", underage: "14", gener: "Drama, Action", discription: "During the Indo-Pakistani War of 1971, Tara Singh returns to Pakistan to bring his son, Charanjeet, back home.", year: "2023", quality: "HD" },

  {
    name: "Sweet Home", category: "s", img: "e8.jpg", underage: "16", gener: "darama", discription: "As humans turn into savage monsters, one troubled teenager and his neighbors fight to survive and to hold onto their humanity.", year: "2020", quality: "HD",
    episodes: [
      { link: 'https://teraboxapp.com/s/1vzLzcTgy60rPiJ2C1HdXhQ', season: "1", enumber: '1-5' },
      { link: 'https://teraboxapp.com/s/1-CNKNc_Y4HshUcsOYE1uRA', season: "1", enumber: '6-10' },
    ]
  },

  { name: "GUARDIANS OF THE GALAXY VOL.3", link: "https://teraboxapp.com/s/1HHYr2sQHXnxb2GqKCwwHfg", img: "e4.jpg", category: "m", underage: "13", gener: "sci-fi", discription: "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.", year: "2023", quality: "HD" },

  { name: "The Super Mario", link: "https://teraboxapp.com/s/1fZTumYZ0qKauMdDlnSRt3g", img: "e5.jpg", category: "m", underage: "3", gener: "Animation", discription: "Mario and Luigi go on a whirlwind adventure through Mushroom Kingdom, uniting with a cast of familiar characters to defeat Bowser.", year: "2023", quality: "HD" },

  { name: "The Nun II", link: "https://teraboxapp.com/s/1q6EUlpPmBbmAVv6swc5JZw", img: "p3.jpg", category: "m", underage: "16", gener: "Horror", discription: "1956 -- France. A priest is murdered. An evil is spreading. The sequel to the worldwide smash hit follows Sister Irene as she once again comes face-to-face with Valak, the demon nun.", year: "2023", quality: "HD" },
]

// // TRENDING SERIES -------------------------


let trending_series_array = [
  {
    name: "The peripheral", category: "s", img: "e7.jpg", underage: "18", gener: "sci-fi", discription: "Set in the future when technology has subtly altered society, a woman discovers a secret connection to an alternate reality as well as a dark future of her own.", year: "2022", quality: "HD",
    episodes: [
      { link: 'https://teraboxapp.com/s/1fsCizgYFv4_AJpuYvwqqsA', season: "1", enumber: '1' },

      { link: 'https://teraboxapp.com/s/1glVGBDdLipfWDTa-VUcHvg', season: "1", enumber: '2' },

      { link: 'https://teraboxapp.com/s/10CHRUCIOqr5oDAliFh4Jhg', season: "1", enumber: '3' },

      { link: 'https://teraboxapp.com/s/1Zu6deffNbDnkbfdZfRGxPQ', season: "1", enumber: '4' },

      { link: 'https://teraboxapp.com/s/1ayS_2i494F82vZjAgZ9a8g', season: "1", enumber: '5' },

      { link: 'https://teraboxapp.com/s/1ECKxxTGzvxoFy0VwGWAhjQ', season: "1", enumber: '6' },

      { link: 'https://teraboxapp.com/s/1iX9vxwvdXgl_iBD8gHgqCw', season: "1", enumber: '7' },

      { link: 'https://teraboxapp.com/s/1IaqAJa03x_N8KB3NTZgNNQ', season: "1", enumber: '8' },

    ]
  },
  { name: "The Super Mario", link: "https://teraboxapp.com/s/1fZTumYZ0qKauMdDlnSRt3g", img: "e5.jpg", category: "m", underage: "3", gener: "Animation", discription: "Mario and Luigi go on a whirlwind adventure through Mushroom Kingdom, uniting with a cast of familiar characters to defeat Bowser.", year: "2023", quality: "HD" },

  { name: "The Nun II", link: "https://teraboxapp.com/s/1q6EUlpPmBbmAVv6swc5JZw", img: "p3.jpg", category: "m", underage: "16", gener: "Horror", discription: "1956 -- France. A priest is murdered. An evil is spreading. The sequel to the worldwide smash hit follows Sister Irene as she once again comes face-to-face with Valak, the demon nun.", year: "2023", quality: "HD" },

  { name: "Gadar 2", link: "https://teraboxapp.com/s/1wl3v7EtLvURh6VHLwF09Mw", img: "e3.jpeg", category: "m", underage: "14", gener: "Drama, Action", discription: "During the Indo-Pakistani War of 1971, Tara Singh returns to Pakistan to bring his son, Charanjeet, back home.", year: "2023", quality: "HD" },

  {
    name: "Sweet Home", category: "s", img: "e8.jpg", underage: "16", gener: "darama", discription: "As humans turn into savage monsters, one troubled teenager and his neighbors fight to survive and to hold onto their humanity.", year: "2020", quality: "HD",
    episodes: [
      { link: 'https://teraboxapp.com/s/1vzLzcTgy60rPiJ2C1HdXhQ', season: "1", enumber: '1-5' },
      { link: 'https://teraboxapp.com/s/1-CNKNc_Y4HshUcsOYE1uRA', season: "1", enumber: '6-10' },
    ]
  },

  { name: "GUARDIANS OF THE GALAXY VOL.3", link: "https://teraboxapp.com/s/1HHYr2sQHXnxb2GqKCwwHfg", img: "e4.jpg", category: "m", underage: "13", gener: "sci-fi", discription: "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.", year: "2023", quality: "HD" },

]

// // NEW RELEASED MOVIES AND SERIES -------------------------


let new_released_movies_series_array = [
  { name: "Jawan", link: "https://teraboxapp.com/s/1SbkVAT2eRYn9zmleHt3G3g", img: "p6.jpg", category: "m", underage: "14", gener: "Action Thriller", discription: "An emotional journey of a man who is set to rectify the wrongs in the society, in an attempt to get even with his past, driven by a personal vendetta while keeping up to a promise made years ago.", year: "2023", quality: "HD" },
  {
    name: "Sweet Home", category: "s", img: "e8.jpg", underage: "16", gener: "darama", discription: "As humans turn into savage monsters, one troubled teenager and his neighbors fight to survive and to hold onto their humanity.", year: "2020", quality: "HD",
    episodes: [
      { link: 'https://teraboxapp.com/s/1vzLzcTgy60rPiJ2C1HdXhQ', season: "1", enumber: '1-5' },
      { link: 'https://teraboxapp.com/s/1-CNKNc_Y4HshUcsOYE1uRA', season: "1", enumber: '6-10' },
    ]
  },

  { name: "The Super Mario", link: "https://teraboxapp.com/s/1fZTumYZ0qKauMdDlnSRt3g", img: "e5.jpg", category: "m", underage: "3", gener: "Animation", discription: "Mario and Luigi go on a whirlwind adventure through Mushroom Kingdom, uniting with a cast of familiar characters to defeat Bowser.", year: "2023", quality: "HD" },

  { name: "The Nun II", link: "https://teraboxapp.com/s/1q6EUlpPmBbmAVv6swc5JZw", img: "p3.jpg", category: "m", underage: "16", gener: "Horror", discription: "1956 -- France. A priest is murdered. An evil is spreading. The sequel to the worldwide smash hit follows Sister Irene as she once again comes face-to-face with Valak, the demon nun.", year: "2023", quality: "HD" },

  { name: "Gadar 2", link: "https://teraboxapp.com/s/1wl3v7EtLvURh6VHLwF09Mw", img: "e3.jpeg", category: "m", underage: "14", gener: "Drama, Action", discription: "During the Indo-Pakistani War of 1971, Tara Singh returns to Pakistan to bring his son, Charanjeet, back home.", year: "2023", quality: "HD" },

  {
    name: "The peripheral", category: "s", img: "e7.jpg", underage: "18", gener: "sci-fi", discription: "Set in the future when technology has subtly altered society, a woman discovers a secret connection to an alternate reality as well as a dark future of her own.", year: "2022", quality: "HD",
    episodes: [
      { link: 'https://teraboxapp.com/s/1fsCizgYFv4_AJpuYvwqqsA', season: "1", enumber: '1' },

      { link: 'https://teraboxapp.com/s/1glVGBDdLipfWDTa-VUcHvg', season: "1", enumber: '2' },

      { link: 'https://teraboxapp.com/s/10CHRUCIOqr5oDAliFh4Jhg', season: "1", enumber: '3' },

      { link: 'https://teraboxapp.com/s/1Zu6deffNbDnkbfdZfRGxPQ', season: "1", enumber: '4' },

      { link: 'https://teraboxapp.com/s/1ayS_2i494F82vZjAgZ9a8g', season: "1", enumber: '5' },

      { link: 'https://teraboxapp.com/s/1ECKxxTGzvxoFy0VwGWAhjQ', season: "1", enumber: '6' },

      { link: 'https://teraboxapp.com/s/1iX9vxwvdXgl_iBD8gHgqCw', season: "1", enumber: '7' },

      { link: 'https://teraboxapp.com/s/1IaqAJa03x_N8KB3NTZgNNQ', season: "1", enumber: '8' },

    ]
  },

  { name: "GUARDIANS OF THE GALAXY VOL.3", link: "https://teraboxapp.com/s/1HHYr2sQHXnxb2GqKCwwHfg", img: "e4.jpg", category: "m", underage: "13", gener: "sci-fi", discription: "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.", year: "2023", quality: "HD" },

]

// // BANNER MOVIES -------------------------
let banner_movies_array = [
  { name: "Gadar 2", link: "https://teraboxapp.com/s/1wl3v7EtLvURh6VHLwF09Mw", img: "bg2.jpg", category: "m", underage: "14", gener: "Drama, Action", discription: "During the Indo-Pakistani War of 1971, Tara Singh returns to Pakistan to bring his son, Charanjeet, back home.", year: "2023", quality: "HD" },


  { name: "GUARDIANS OF THE GALAXY VOL.3", link: "https://teraboxapp.com/s/1HHYr2sQHXnxb2GqKCwwHfg", img: "bg1.jpg", category: "m", underage: "13", gener: "sci-fi", discription: "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.", year: "2023", quality: "HD" },

  {
    name: "The peripheral", category: "s", img: "bg4.jpg", underage: "18", gener: "sci-fi", discription: "Set in the future when technology has subtly altered society, a woman discovers a secret connection to an alternate reality as well as a dark future of her own.", year: "2022", quality: "HD",
    episodes: [
      { link: 'https://teraboxapp.com/s/1fsCizgYFv4_AJpuYvwqqsA', season: "1", enumber: '1' },

      { link: 'https://teraboxapp.com/s/1glVGBDdLipfWDTa-VUcHvg', season: "1", enumber: '2' },

      { link: 'https://teraboxapp.com/s/10CHRUCIOqr5oDAliFh4Jhg', season: "1", enumber: '3' },

      { link: 'https://teraboxapp.com/s/1Zu6deffNbDnkbfdZfRGxPQ', season: "1", enumber: '4' },

      { link: 'https://teraboxapp.com/s/1ayS_2i494F82vZjAgZ9a8g', season: "1", enumber: '5' },

      { link: 'https://teraboxapp.com/s/1ECKxxTGzvxoFy0VwGWAhjQ', season: "1", enumber: '6' },

      { link: 'https://teraboxapp.com/s/1iX9vxwvdXgl_iBD8gHgqCw', season: "1", enumber: '7' },

      { link: 'https://teraboxapp.com/s/1IaqAJa03x_N8KB3NTZgNNQ', season: "1", enumber: '8' },

    ]
  },

  { name: "The Nun II", link: "https://teraboxapp.com/s/1q6EUlpPmBbmAVv6swc5JZw", img: "bg5.jpg", category: "m", underage: "16", gener: "Horror", discription: "1956 -- France. A priest is murdered. An evil is spreading. The sequel to the worldwide smash hit follows Sister Irene as she once again comes face-to-face with Valak, the demon nun.", year: "2023", quality: "HD" },

]

let related_movie_detail = ''
// 0 = not clicked | 1 = clicked
let movie_li_clicked_status = 0


function appending_movie(givenarray, givencontainer) {
  let movie_li = document.createElement('li')
  let movie_card = document.createElement('div')
  let movie_poster = document.createElement('div')
  let movie_img = document.createElement('img')
  let movie_details = document.createElement('div')
  let movie_name = document.createElement('h3')
  let movie_other_detail = document.createElement('div')
  let movie_gener = document.createElement('span')
  let movie_year = document.createElement('span')
  let movie_quality = document.createElement('a')
  let movie_category = document.createElement('p')
  let movie_discription = document.createElement('p')

  movie_category.style.display = 'none'
  movie_discription.style.display = 'none'

  movie_li.append(movie_card)
  movie_card.append(movie_poster, movie_details)
  movie_poster.append(movie_img)
  movie_details.append(movie_name, movie_other_detail, movie_quality, movie_category, movie_discription)
  movie_other_detail.append(movie_gener, movie_year)

  movie_card.setAttribute('class', 'movie-card')
  movie_poster.setAttribute('id', 'movie-poster')
  movie_details.setAttribute('id', 'movie-details')
  movie_other_detail.setAttribute('id', 'otherdetail')
  movie_gener.setAttribute('id', 'gener')
  movie_year.setAttribute('id', 'year')

  movie_img.src = `img/${givenarray.img}`
  movie_name.innerHTML = givenarray.name
  movie_gener.innerHTML = givenarray.gener
  movie_year.innerHTML = givenarray.year
  movie_quality.innerHTML = givenarray.quality
  movie_category.innerHTML = givenarray.category
  movie_discription.innerHTML = givenarray.discription

  movie_li.addEventListener('click', () => {
    //  console.log('clicked')

    for (a = 0; a < movie_series_array.length; a++) {
      if (movie_name.innerHTML == movie_series_array[a].name) {


        dimg.src = `img/${movie_series_array[a].img}`
        dname.innerHTML = movie_series_array[a].name
        d_discription.innerHTML = movie_series_array[a].discription
        d_age.innerHTML = `PG ${movie_series_array[a].underage}+`
        d_quality.innerHTML = movie_series_array[a].quality
        d_category.innerHTML = movie_series_array[a].gener


        if (movie_series_array[a].category == 'm') {
          d_episode_primary.style.display = 'none'
          d_watch.href = movie_series_array[a].link
          d_download.href = movie_series_array[a].link
          d_watch.style.display = 'unset'
          d_download.style.display = 'unset'

        }

        else {
          d_episode_primary.style.display = 'block'
          d_watch.style.display = 'none'
          d_download.style.display = 'none'

          d_episode_secondary.innerHTML = ''
          for (e = 0; e < movie_series_array[a].episodes.length; e++) {
            let episode_cont = document.createElement('a')

            episode_cont.innerHTML = `S${movie_series_array[a].episodes[e].season}     Episode ${movie_series_array[a].episodes[e].enumber}`

            episode_cont.href = movie_series_array[a].episodes[e].link

            d_episode_secondary.append(episode_cont)
          }
        }
      }
    }



    related_movies.innerHTML = ''

    related_movie_detail = movie_gener.innerHTML
    movie_li_clicked_status = 1

    for (i = 0; i < movie_series_array.length; i++) {
      if (movie_series_array[i].gener == movie_gener.innerHTML) {
  
        appending_movie(movie_series_array[i], related_movies)
  
      }
    }

    console.log(related_movie_detail)
    homepage.style.display = 'none'
    movie_series_page.style.display = 'none'
    mainnav.style.display = 'none'
    download_page.style.display = 'block'

   console.log(related_movie_detail)
  })

  givencontainer.append(movie_li)
}






d_back_btn.addEventListener('click', () => {
  download_page.style.display = 'none'
  movie_series_page.style.display = 'none'
  mainnav.style.display = 'block'
  mainnav.style.position = 'fixed'
  homepage.style.display = 'block'
  related_movie_detail = ''

  for (i = 0; i < navbtns.length; i++) {
    navbtns[i].style.color = 'white'
  }

  home_btn.style.color = '#00c2ec'
})


movies_btn.addEventListener('click', () => {
  movie_series_page.innerHTML = ''

  for (i = 0; i < movie_series_array.length; i++) {
    if(movie_series_array[i].category == 'm'){
    appending_movie(movie_series_array[i], movie_series_page)
  
    }
  }

})

series_btn.addEventListener('click', ()=>{

movie_series_page.innerHTML = ''
for (i = 0; i < movie_series_array.length; i++) {
  if(movie_series_array[i].category == 's'){
  appending_movie(movie_series_array[i], movie_series_page)

  }
}

})
scifi_btn.addEventListener('click', ()=>{

movie_series_page.innerHTML = ''
for (i = 0; i < movie_series_array.length; i++) {
  if(movie_series_array[i].gener == 'sci-fi'){
  appending_movie(movie_series_array[i], movie_series_page)

  }
}

})


// HOME MOVIES AND SERIES CONTAINER 



let trending_series_container = document.getElementById('trendingseries-cont')
let released_container = document.getElementById('released-cont')


trending_movies_container.innerHTML = ''
for (i = 0; i < trending_movies_array.length; i++) {

  // not putting any contion for movie or series because in trending movies array only movies will be there
  appending_movie(trending_movies_array[i], trending_movies_container)


}

trending_series_container.innerHTML = ''

for (i = 0; i < trending_series_array.length; i++) {

  // not putting any contion for movie or series because in trending movies array only movies will be there
  appending_movie(trending_series_array[i], trending_series_container)


}

released_container.innerHTML = ''

for (i = 0; i < new_released_movies_series_array.length; i++) {

  // not putting any contion for movie or series because in trending movies array only movies will be there
  appending_movie(new_released_movies_series_array[i], released_container)


}


// BANNER CODE -------------------------------------------------

banner_container.innerHTML = ''
 

for (i = 0; i < banner_movies_array.length; i++) {
  let b_slide = document.createElement('div')
  let b_img = document.createElement('img')
  let b_slideinfo = document.createElement('div')
  let b_name = document.createElement('h1')
  let b_discription = document.createElement('p')
  let b_otherinfocont = document.createElement('div')
  let b_age = document.createElement('span')
  let b_quality = document.createElement('span')
  let b_gener = document.createElement('span')
  let b_watchbtn = document.createElement('a')
  let b_downloadbtn = document.createElement('a')
  let b_viewbtn = document.createElement('a')

  b_slide.setAttribute('class', 'slide')
  b_slideinfo.setAttribute('id', 'slideinfo')
  b_age.setAttribute('id', 'age')
  b_quality.setAttribute('id', 'hd')
  b_gener.setAttribute('id', 'catog')
  b_viewbtn.setAttribute('id', 'viewbtn')

  b_slide.append(b_img, b_slideinfo)
  b_slideinfo.append(b_name, b_discription, b_otherinfocont, b_watchbtn, b_downloadbtn, b_viewbtn)
  b_otherinfocont.append(b_age, b_quality, b_gener)

  b_viewbtn.style.display = 'none'

  b_img.src = `img/${banner_movies_array[i].img}`
  b_name.innerHTML = banner_movies_array[i].name
  b_discription.innerHTML = banner_movies_array[i].discription
  b_age.innerHTML = `PG ${banner_movies_array[i].underage}+`
  b_quality.innerHTML = banner_movies_array[i].quality
  b_gener.innerHTML = banner_movies_array[i].gener
  b_watchbtn.innerHTML = 'WATCH'
  b_downloadbtn.innerHTML = 'DOWNLOAD'
  b_viewbtn.innerHTML = 'VIEW'

  if (banner_movies_array[i].category == 's') {
    b_watchbtn.style.display = 'none'
    b_downloadbtn.style.display = 'none'
    b_viewbtn.style.display = 'unset'

    b_viewbtn.addEventListener('click', function () {

      dimg.src = b_img.src
      dname.innerHTML = b_name.innerHTML
      d_discription.innerHTML = b_discription.innerHTML
      d_age.innerHTML = b_age.innerHTML
      d_quality.innerHTML = b_quality.innerHTML
      d_category.innerHTML = b_gener.innerHTML




      d_episode_primary.style.display = 'block'
      d_watch.style.display = 'none'
      d_download.style.display = 'none'

      d_episode_secondary.innerHTML = ''
      for (a = 0; a < banner_movies_array.length; a++) {
        if (b_name.innerHTML == banner_movies_array[a].name) {
          for (e = 0; e < banner_movies_array[a].episodes.length; e++) {
            let episode_cont = document.createElement('a')

            episode_cont.innerHTML = `S${banner_movies_array[a].episodes[e].season}     Episode ${banner_movies_array[a].episodes[e].enumber}`

            episode_cont.href = banner_movies_array[a].episodes[e].link

            d_episode_secondary.append(episode_cont)
          }

          related_movies.innerHTML = ''



          for (m = 0; m < movie_series_array.length; m++) {
            if (movie_series_array[m].category == banner_movies_array[a].category) {

              appending_movie(movie_series_array[m], related_movies)

            }
          }

        }

      }




      homepage.style.display = 'none'
      movie_series_page.style.display = 'none'
      mainnav.style.display = 'none'
      download_page.style.display = 'block'
    })
  }
  b_watchbtn.href = banner_movies_array[i].link
  b_downloadbtn.href = banner_movies_array[i].link


  banner_container.append(b_slide)
}

// SEARCHING CODE ================================================


main_search_btn.addEventListener('click', function(){
movie_series_page.innerHTML = ''

let searched_name = searchinput.value.toUpperCase()

for(i=0; i<movie_series_array.length;i++){
  let name = movie_series_array[i].name.toUpperCase()

  let result = name.includes(searched_name)

  if(result == true){
    appending_movie(movie_series_array[i],movie_series_page)
  }
}


  homepage.style.display = 'none'
  movie_series_page.style.display = 'grid'
  mainnav.style.position = 'unset'
})

removebtn.addEventListener('click', function(){
  homepage.style.display = 'block'
  movie_series_page.style.display = 'none'
  mainnav.style.position = 'fixed'
  navbtnclick(home_btn, movie_series_page, homepage, 'block', 'fixed')


})


// MESSAGE CODE ---------------------------------------

let messagebox = document.getElementById('message-box')
setTimeout(() => {
  messagebox.style.display = 'block'

  if(messagebox.style.display == 'block'){
    setTimeout(() => {
      messagebox.style.display = 'none'
      
    }, 6000);
  }
  
}, 5000);

