const key = "mLQnoSB_tPul7H-kUBnpxWE-qTlhw-Ihr2pLy0qMcfo";
let page = 1;

document.getElementById("callmain").addEventListener("click", () => {
    fetchphotos();  // Load photos on button click
});

let imgContainer = document.getElementById('img-container');

// Function to fetch photos
function fetchphotos() {
    const url = `https://api.unsplash.com/photos?page=${page}&per_page=15&order_by=latest&client_id=${key}`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);  // Logs the fetched data
            
            // Append the fetched images to the imgContainer
            data.forEach((obj) => {
                let img = document.createElement('img');
                img.src = obj.urls.regular;
                img.style.width = "380px";
                img.style.height = "480px";
                img.style.objectFit = "cover";
                img.style.borderRadius = "9px";
                imgContainer.appendChild(img);
            });
            
            page++;  // Increment page number after each successful fetch
        })
        .catch((error) => {
            console.log(error, ":", "Error fetching from Unsplash API");
            alert("Error: Try again later.");
        });
}

// Function to increment page and fetch more photos
function fetchmore() {
    page++;  // Increment page number for the next set of photos
    fetchphotos();  // Fetch more photos
}

// Scroll event listener to fetch more photos when near the bottom of the page
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        fetchmore();  // Fetch more photos when nearing the bottom
    }
});
