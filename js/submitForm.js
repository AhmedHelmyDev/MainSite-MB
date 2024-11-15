function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    const form = document.getElementById('subscribeForm');
    const formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbyUygYVjzbfGlK8x4fh6b5bFn9ea5nV9Cy4KIJlDle0nPz-bfRhjEXa5hLSl8cQCKLh/exec', { // Update this with your actual URL
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(result => {
        console.log(result); // You can display a success message here
        form.reset(); // Reset the form
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
