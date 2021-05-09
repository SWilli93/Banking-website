// const h1 = document.querySelector("h1");

// // const alertH1 = function(e) {
// //   alert('blah blah')
// // }

// // h1.addEventListener('mouseenter', alertH1)

// // settimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

// // scrolling
// // window.scrollTo(
// //   s1coords.left + window.pageXOffset,
// //   s1coords.top + window.pageYOffset
// // );

// // window.scrollTo({
// //   left: s1coords.left + window.pageXOffset,
// //   top: s1coords.top + window.pageYOffset,
// //   behavior: "smooth",
// // });

// console.log(s1coords);

// console.log(e.target.getBoundingClientRect());

// // to find the place we desire to scroll to
// console.log("current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

// const s1coords = section1.getBoundingClientRect();
// console.log(
//   "height/width viewport",
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );

// // with this we add 30 more pixels to the height using the parse float function

// // universal way of setting properties and styles
// // document.documentElement.style.setProperty('--color-primary', 'orangered')

// // attributes only works for standard attributes
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
// // we can also set  elements from here
// logo.alt = "beautiful minimalist logo";

// // to read non standard attributes
// console.log(logo.getAttribute("designer"));
// // to set attributes
// logo.setAttribute("company", "Bankist");

// // Data Attributes
// console.log(logo.dataset.versionNumber);

// // Classe methods without interfering with other classes already established
// logo.classList.add("c");
// logo.classList.remove("c");
// logo.classList.toggle("c");
// logo.classList.contains("c");

// // dont use it overides everything
// // logo.className = 'blah'

// // header.append(message.cloneNode(true))
// // header.before(message)
// // header.after(message)
// // header.prepend(message);

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// // Creating and inserting elements
// // .insertAdjacentHTML


// Event Bubbling and Capturing
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(randomColor())
});

document.querySelector(".nav__link").addEventListener("click", function (e) {});
document.querySelector(".nav").addEventListener("click", function (e) {});