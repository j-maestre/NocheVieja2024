window.addEventListener("load", function(){
    alert("cargado");

    document.getElementById('start-camera').addEventListener('click', () => {

        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert('Tu navegador no soporta acceso a la cámara. Por favor, usa Chrome o Safari.');
          }
          
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            // Permiso otorgado
            document.getElementById('camera-permission').style.display = 'none';
            document.querySelector('a-scene').style.display = 'block';
            // Detenemos el stream porque AR.js manejará la cámara
            stream.getTracks().forEach(track => track.stop());
          })
          .catch((error) => {
            // Error al otorgar permiso
            alert('No se pudo acceder a la cámara. Por favor verifica los permisos.');
            console.error(error);
          });
      });
})