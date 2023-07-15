const image = document.getElementById('image');
const btn = document.getElementById('btn');
function loading() {
    const text = document.getElementById('text');
    text.classList.add('text');
    text.innerHTML = 'Loading...';
}

btn.addEventListener('click', () => {
    if (image.files.length === 0) {
        alert('Please select an image');
    } else {
        const textArea = document.getElementById('textarea');
        textArea.classList.add('hidden');
        const file = image.files[0];
    loading();
    Tesseract.recognize(file)
        .then(({ data: { text } }) => {
            const a = document.createElement('a');
            textArea.classList.remove('hidden');
            textArea.value = text;
            a.href = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
            a.setAttribute(image.files[0].name.split('.')[0] + '.txt');
            document.body.appendChild(a);
            a.click();
            const loadingText = document.getElementById('text');
            loadingText.classList.remove('text');
            loadingText.innerHTML = '';
        })
    }
})