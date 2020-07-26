export async function fetchText(url) {
    let response = await fetch(url);
    let data = await response.text();
    console.log(data);
    return data;
}