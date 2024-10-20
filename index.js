const body = document.querySelector('.body');
const width= window.innerWidth;
const height= window.innerHeight;
var contents = [
    'Tràn bộ nhớ!', 
    'Chúc 20-10, xinh đẹp', 
    'Chúc sẽ giàu', 
    'Mọi thứ thuận lợi', 
    'Chúc ẻ bình an!', 
    'Chúc ẻ thuận lợi!', 
    'Tối em đi chơi ở đâu chưa??', 
    '6868 mãi đỉnh mãi đỉnh']
var c = contents.length - 1;
for (let index = 0; index < 5000; index++) {
    setTimeout(() => {
        var contentClass = `dialog${index}`; 
        var t = Math.random() * height;
        var l = Math.random() * width - width/2;
        var index = Math.round(Math.random() * c, 0)
        var contentTag = `<dialog class="dialog ${contentClass}" style="Top:${t}px; Left: ${l}px;" open><p>${contents[index]}</p><form method="dialog"><button>NHỚ</button></form></dialog>`;
        body.innerHTML += contentTag;

    }, Math.random() * 1000);
}