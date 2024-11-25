function toggleFavorite() {
    const icon = document.querySelector(".favorite-icon");
    // Basculer entre favori activé (rouge) et non activé (blanc)
    icon.classList.toggle("fa-heart"); // Cœur vide
    icon.classList.toggle("fa-heart-broken"); // Cœur plein (cassé ou retiré)
    
    // Changer la couleur du cœur
    if (icon.classList.contains("fa-heart-broken")) {
      icon.style.color = "red";
    } else {
      icon.style.color = "white";
    }
  }
  