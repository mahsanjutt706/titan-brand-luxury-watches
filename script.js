function showPage(pageId) {
  const pages = document.querySelectorAll(".watch-page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

const images = document.querySelectorAll("img");

images.forEach(img => {
  img.onerror = function () {
    this.src = "https://via.placeholder.com/600x400/000000/ffffff?text=TITAN+WATCHES";
  };
});

function orderNow(productName, price) {
  const phoneNumber = "923257173706";
  const message = `Hello, I want to order ${productName}. Price: ${price}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}