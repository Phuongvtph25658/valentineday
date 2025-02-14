// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn anh đã dành thời gian để nhìn những trò trẻ con của em và em có những điều muốn gởi gắm đến tình iu của em❤️. Cảm ơn anh đã dành thời gian của mình để yêu thương em. Em biết anh có thể làm mọi thứ khi không có em và em cũng vậy, nhưng em vẫn muốn được cùng với anh, 2 chúng ta đồng hành trên con đường tương lai. và hãy luôn tự tin anh nhé, anh rất đặc biệt đó. Em chẳng biết nói gì ngoài lời cảm ơn anh, yêu anh ^^💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 
 
// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})