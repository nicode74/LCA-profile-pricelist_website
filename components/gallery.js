// Array of images in the assets/images directory
const images = [
    "WhatsApp Image 2026-04-24 at 7.31.21 PM (1).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.21 PM (2).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.21 PM.jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.22 PM (1).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.22 PM (2).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.22 PM.jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.23 PM.jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (1).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (10).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (11).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (12).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (13).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (14).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (15).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (16).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (17).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (18).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (19).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (2).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (20).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (21).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (22).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (23).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (3).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (4).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (5).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (6).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (7).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (8).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM (9).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.24 PM.jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (1).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (10).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (11).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (12).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (13).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (14).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (15).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (16).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (17).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (18).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (19).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (2).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (20).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (3).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (4).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (5).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (6).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (7).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (8).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM (9).jpeg",
    "WhatsApp Image 2026-04-24 at 7.31.25 PM.jpeg"
];

// Generate gallery cards
document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery-container');
    
    if (galleryContainer) {
        images.forEach((image, index) => {
            const imageCard = `
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card h-100 shadow-sm gallery-card" style="overflow: hidden; transition: transform 0.3s ease;">
                        <img src="assets/images/${encodeURIComponent(image)}" class="card-img-top" alt="Project ${index + 1}" style="height: 250px; object-fit: cover;" />
                        <div class="card-body text-center">
                            <h6 class="card-title">Project ${index + 1}</h6>
                        </div>
                    </div>
                </div>
            `;
            galleryContainer.innerHTML += imageCard;
        });

        // Add hover effect
        const cards = document.querySelectorAll('.gallery-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
});
