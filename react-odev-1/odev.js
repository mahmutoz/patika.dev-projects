import axios from "axios";

async function getData(num) {
    const {
        data: post1
    } = await axios("https://jsonplaceholder.typicode.com/users/" + num);
    const {
        data: post2
    } = await axios("https://jsonplaceholder.typicode.com/posts/?userId=" + num);
    let datas = [post1, post2[num]]
    console.log(datas);
}

export default getData;