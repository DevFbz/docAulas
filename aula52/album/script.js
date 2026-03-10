fetch('img/')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const gallery = document.getElementById('gallery');
        const links = doc.querySelectorAll('a');
        links.forEach(link => { 
            const img = document.createElement('img');
            img.src = "img/";
            img.alt = 'Foto do Álbum';
            gallery.appendChild(img);
          
        });
      });