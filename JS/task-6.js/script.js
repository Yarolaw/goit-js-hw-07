const inputRef = document.querySelector("#validation-input")

inputRef.addEventListener("blur", () => {
    
    console.log(inputRef.value.length);

    if (inputRef.getAttribute("data-length") == inputRef.value.length) {
        inputRef.classList.remove("invalid")
        inputRef.classList.add("valid")
    } else {
        inputRef.classList.remove("valid")
        inputRef.classList.add("invalid")
    }

})

