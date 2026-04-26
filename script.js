const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const header = document.querySelector("header");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle) menuToggle.checked = false;
    document.body.classList.remove("menu-open");
  });
});

if (menuToggle) {
  menuToggle.addEventListener("change", () => {
    document.body.classList.toggle("menu-open", menuToggle.checked);
  });
}

window.addEventListener("scroll", () => {
  if (!header) return;
  header.style.boxShadow =
    window.scrollY > 20 ? "0 4px 14px rgba(0, 0, 0, 0.28)" : "none";
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

const revealElements = document.querySelectorAll(".animate-fade-in");
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.88;
  revealElements.forEach((el) => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const search = document.getElementById("search");
if (search) {
  search.addEventListener("input", () => {
    const value = search.value.trim().toLowerCase();
    document.querySelectorAll("[data-search-card]").forEach((card) => {
      card.style.display = card.innerText.toLowerCase().includes(value)
        ? ""
        : "none";
    });
  });
}

const inquiryForm = document.querySelector("[data-whatsapp-form]");
if (inquiryForm) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(inquiryForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (phone.replace(/\D/g, "").length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (message.length < 5) {
      alert("Please add a few details about your requirement.");
      return;
    }

    const text = `Hello Valar Express,%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0ARequirement: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/919905852803?text=${text}`, "_blank", "noopener");
  });
}
