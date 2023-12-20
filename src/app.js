function handleSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-details");
    let cityElement=document.querySelector("#city");
    cityElement.innerHTML=searchInput.value;
}


let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSubmit);
