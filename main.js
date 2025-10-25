
   let image=document.getElementById("img")
   let body=document.querySelector("body")
   let logo=document.getElementsByClassName("logo1")[0]
   let isDark = false   
   image.addEventListener("click", () => {
       if (!isDark) {
           image.src = "photo2.jpg";
           image.style.width = "30px";
           image.style.height = "30px";
           body.style.backgroundColor = "white";
           body.style.color = "black";
           logo.src="logo2.jpg"
        } else {
           image.src = "photo.jpg";
           body.style.backgroundColor = "black";
           body.style.color = "white";
           logo.src="logo1.jpg"
           
        }
    isDark = !isDark;
    });
let textarea = document.getElementById("myText");
let countDisplay = document.getElementById("count");
let wordCount = document.getElementById("camelCase");
let sentenceCount = document.getElementById("sentenceCount");
let tableBody = document.getElementById("tableBody"); 

textarea.addEventListener("input", () => {
  let text = textarea.value;
  countDisplay.textContent = text.length;

  let espaces = text.match(/\s+/g);
  wordCount.textContent = espaces ? espaces.length: 0;

  let sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
  sentenceCount.textContent = sentences ? sentences.length : 0;

  const letters = {};
  const cleanText = textarea.value.toLowerCase().replace(/[^a-z]/g, "");

  for (let ch of cleanText) {
    letters[ch] = (letters[ch] || 0) + 1;
  }

  const entries = Object.entries(letters).sort((a, b) => b[1] - a[1]);
  const totalLetters = cleanText.length;

  tableBody.innerHTML = "";

  for (let [letter, count] of entries) {
    const percent = ((count / totalLetters) * 100).toFixed(1);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <div><td>${letter.toUpperCase()}</td>
      <td>
      <div style="
        
          height:8px;
          width:${percent}%;background:#6366f1;
          border-radius:4px;">
        </div>
       </div>
      </td>
      <td>${percent}%</td>
      
    `;
    tableBody.appendChild(tr);
  }
});
