// ===============================
// MOBILE MENU AUTO CLOSE
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
  });
});


// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});


// ===============================
// STICKY NAV SHADOW
// ===============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
  } else {
    header.style.boxShadow = "none";
  }
});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const revealElements = document.querySelectorAll(".animate-fade-in");

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===============================
// CONTACT FORM VALIDATION
// ===============================
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {

    const phone = form.querySelector("input[name='phone']").value;
    const part = form.querySelector("input[name='part']").value;

    if (phone.length < 10) {
      alert("Please enter valid phone number");
      e.preventDefault();
      return;
    }

    if (part.length < 3) {
      alert("Please describe spare part properly");
      e.preventDefault();
      return;
    }

    alert("Inquiry sent successfully! Valar Express will contact you soon.");
  });
}
// PRODUCT SEARCH
const search = document.getElementById("search");
if (search){
  search.addEventListener("keyup", function(){
    const value = this.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card=>{
      card.style.display =
        card.innerText.toLowerCase().includes(value)
        ? "block" : "none";
    });
  });
}

// SEND TO WHATSAPP
const form2 = document.querySelector("form");

if(form2){
form2.addEventListener("submit", function(e){
e.preventDefault();

const name = form2.name.value;
const phone = form2.phone.value;
const part = form2.part.value;
const message = form2.message.value;

const text =
`Hello Valar Express,
Name: ${name}
Phone: ${phone}
Part Needed: ${part}
Details: ${message}`;

window.open(
`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(text)}`,
"_blank"
);
});
}
// ===============================
// ACTIVE NAV LINK HIGHLIGHT
// ===============================
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#c40000";
    link.style.fontWeight = "700";
  }
});


const sections = document.querySelectorAll("section");

function reveal(){
sections.forEach(sec=>{
const top = sec.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
sec.classList.add("visible");
}
});
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);