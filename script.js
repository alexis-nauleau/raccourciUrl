async function generateShortLkin() {

    const longUrl = document.getElementById("longUrl").value
    const apiUrl = 'https://tinyurl.com/api-create.php?url=' + encodeURIComponent(longUrl)

    try {
        const response = await fetch(apiUrl)
        const shortUrl = await response.text()
        if (shortUrl) { 
            document.getElementById('shortUrl').innerText=shortUrl

        } else { 
            throw new Error()
           

        }
    } catch (error) {
        console.error("erreur:", error)
        document.getElementById('shortUrl').innerText = 'Impossible'

    }
}
function copyLink() {
    const element = document.getElementById("shortUrl");
    const text = element.innerText; 
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Lien copié');
        })
        .catch(err => {
            console.error('Erreur lors de la copie :', err);
        });
}
