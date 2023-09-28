let translatorText, quoteText
const translatorUrl = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
const quoteUrl = 'https://quotes15.p.rapidapi.com/quotes/random/';

async function translator(url) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '120bfe53bamshae1f7ef19e8ffe9p14b3e6jsnb7e5b2fc1f82',
                'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
            },
            body: new URLSearchParams({
                from: 'auto',
                to: 'ru',
                text: quoteText[0]
            })
        });
        let result = await response.json();
        return result.trans
    } catch (error) {
        console.error(error);
    }
}

async function quote(url) {
    try {
        let response = await fetch(url,{
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '120bfe53bamshae1f7ef19e8ffe9p14b3e6jsnb7e5b2fc1f82',
                'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
            }
        });
        let result = await response.json();
        console.log;
        return [result.content, result.originator.name]
    } catch (error) {
        console.error(error);
    }
}
async function translatorQuote() {
    quoteText = await quote(quoteUrl)
    translatorText = await translator(translatorUrl)
    console.log(quoteText);
    console.log(translatorText);
    document.querySelector('.translator').innerHTML += translatorText
    document.querySelector('.original').innerHTML += quoteText[0]
    document.querySelector('.avtor').innerHTML += quoteText[1]
}

translatorQuote()
