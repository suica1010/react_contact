const h1 = document.querySelector('#title')
const user = {
    firstname : 'jason',
    age : 30,
    content : "裁縫"
}

//課題1
//jsの場合、テンプレートリテラルを使用する場合`(バックオートで囲む)
const hello = (firstname, age, content) => 
    `「こんにちは、私は${age}歳の${firstname}です。趣味は${content}です。」`

//要素が存在する場合
if(h1){
    h1.innerHTML = hello(user.firstname, user.age, user.content)
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
    } else {
        console.log("要素countが存在しません")
    }
}
//id=countplusを取得
const ctn = document.querySelector("#countPlus")
//クリック時に第二引数の関数を起動
ctn.addEventListener('click', addCount, false)


//課題4
//非同期処理とapi通信
//URLを開く
let url = "https://jsonplaceholder.typicode.com/users"
let apiRtn = async ()=>{
    try{
        //fetchでurlにアクセス(awaitで読み込むまで次の行並行しない)
        const response = await fetch(url)
        //json形式へ変換
        const data = await response.json()
        //順番に値を出力
        data.forEach(data=>{
            console.log(`${data.name}:${data.email}:${data.address.city}`)
        })
    }catch(error){
        console.log(`API接続エラー:${error}`)
    }
}

ctn.addEventListener('click', apiRtn, false)
