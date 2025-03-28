import React from "react"

//関数名は頭文字が大文字固定
function Hello({firstName="hiroshi", age="99", propArray=[{test:"000", test2:"999"}]}) {
    return (
        <div>
            <p>私は{firstName}です、年齢は{age}です</p>
            {
                //proparrayをループ表示
                propArray.map((value, index) => (
                    <p key={index}>
                        {value.test}{value.test2}
                    </p>
                ))}
        </div>
    )
}

//export defaultすることで他でimport可能
export default function propAdd() {
    return (
        <Hello 
            firstName={'taro'}
            age="20"
            propArray={[
                {test:'testの一つめ', test2:'testの2つめ'},
                {test:'rrrrr', test2:'eeeeeeee'}
            ]}
        />
    );
}
