document.getElementById("callmain").addEventListener("click",()=>{
    main();
})
let imgContainer = document.getElementById('img-container');
function main(){
    const url = "https://api.unsplash.com/photos/?client_id=5l8ObLo0MCtEz86fhXJR2GVZOPa_fOxhr4O_rphhbDw"
    const unsplash = fetch(url).then((response)=>response.json()).then((data)=>{
    console.log(data);
    data.forEach(obj => {
        let img  = document.createElement('img');
        img.src = obj.urls.regular
        img.style.width = "300px"
        img.style.height = "auto"
        img.style.objectFit = "cover"
        img.style.borderRadius = "12px"
        
        imgContainer.appendChild(img)
    })

}).catch((error)=>{
    console.log(error, ":", "error fetching from unsplash API")
    alert("Error: Tray again Later.")
})
}
