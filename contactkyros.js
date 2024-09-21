document.getElementById('contact_form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche la soumission par défaut

    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('result').innerHTML = '<p>Merci pour votre message !</p>';
            this.reset(); // Réinitialiser le formulaire
        } else {
            document.getElementById('result').innerHTML = '<p>Une erreur est survenue. Veuillez réessayer.</p>';
        }
    }).catch(error => {
        document.getElementById('result').innerHTML = '<p>Une erreur est survenue. Veuillez réessayer.</p>';
    });
});
