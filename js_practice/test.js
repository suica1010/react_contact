const h1 = document.querySelector('#title')
let age = 30
let firstname = "jason"
let content = "裁縫"

//課題1
//jsの場合、テンプレートリテラルを使用する場合`(バックオートで囲む)
const hello = (firstname, age, content) => 
    `「こんにちは、私は${age}歳の${firstname}です。趣味は${content}です。」`

//要素が存在する場合
if(h1){
    h1.innerHTML = hello(firstname, age, content)
}else{
    //要素が見つからない場合
    console.log("要素#titleが見つかりません")
}

//課題2
//要件・配列をひとつづつコンソールへ出力
const array = ["リンゴ","みかん","ブドウ","なし","ようかん","ファミチキ"]

//みかん以外の場合trueを返す
let mikanFilter = (value) =>{
    return value != "みかん"
}

//要素がnullではない　かつ　要素が配列の場合
if(array !== null && Array.isArray(array)){
    //項目をひとつづつ出力する
    array.forEach(value =>{
        console.log(value)
    })
    //みかんを削除
    console.log(array.filter(mikanFilter))
    //すべて大文字に変換して出力
    const enArray = ["test", "tttt", "setting"]
    const map1 = enArray.map((value) => value.toUpperCase()) 
    map1.forEach((value) => console.log(value))
}

//課題3:クリックカウンター(DOM操作)
const count = document.querySelector("#count")
const addCount = () => {
    let i = +count.innerHTML
    //カウント属性がある場合
    if(count !== null){
        count.innerHTML = i + 1
        console.log(count.innerHTML)
    } else {
        console.log("要素countが存在しません")
    }
}