const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");


const checkPalindrome = () => {
    const cleanStr = textInput.value.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const isPalindrome = cleanStr === cleanStr.split("").reverse().join("");
    
    if (textInput.value === "") {
        return alert("Please input a value");
    } else if (isPalindrome) {
        const paragraph = document.createElement("p");
        paragraph.classList.add("user-input");
        paragraph.innerText = `${textInput.value} is a palindrome`;
        result.innerHTML = "";
        result.append(paragraph);
        return result.style.display = "block";
    } else {
        const paragraph = document.createElement("p");
        paragraph.classList.add("user-input");
        paragraph.innerText = `${textInput.value} is not a palindrome`;
        result.innerHTML = "";
        result.append(paragraph);
        return result.style.display = "block";
    }
}

checkButton.addEventListener("click", checkPalindrome);

// const inputCheck = () => {
//     if (textInput === "") {
//         return alert("Please input a value");
//     } else {
//         checkPalindrome;
//     }
// }