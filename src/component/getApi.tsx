import { useState } from "react";


export default async function ApiGet() {
    const url = "https://jsonplaceholder.typicode.com/users"
    //urlからデータ取得
    const data = await fetch(url, 
        {
            method: "GET",
            "content-type": "application/json"
        }
    )
    //

    return(
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}


