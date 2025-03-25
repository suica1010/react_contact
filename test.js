console.log(document.querySelector('#title'))
const h1 = document.querySelector('#title')
let age = 30
let name = "jason"
let content = "裁縫"


const hello = (name, age, content) => 
    "「こんにちは、私は" + age + "歳の" + name + "です。趣味は" + content + "です。」"

h1.innerHTML = hello(name, age, content)