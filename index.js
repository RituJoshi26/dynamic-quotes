const api="https://type.fit/api/quotes";

const quotedata = document.getElementById("content");
const authorname = document.getElementById("author");
const generatequote = document.getElementById("generatebtn");

const GenerateRandom=(length)=>{
    let randomNumber = Math.floor(Math.random() * (length - 0 + 1)) + 0;
    return randomNumber;

}

const generateQuotes=async()=>{
    const data =await fetch(api);
    const orgData = await data.json();
    let length = orgData.length;
    // console.log(orgData);
    // console.log(orgData[0].text);
    // let author= orgData[0].author.split(',');
    // console.log(author[0]);
   let randomNumber= GenerateRandom(Number(length));
   let newquote = orgData[randomNumber].text;
   let newauthor = orgData[randomNumber].author.split(',')[0];
//    console.log(newquote);
//    console.log(newauthor);
quotedata.innerText = newquote;
authorname.innerText = newauthor;
}

generatequote.addEventListener('click',generateQuotes);
