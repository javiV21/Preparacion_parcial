/*Evento 1: alerta*/
function mostrarMensaje(mensaje) {
    alert(mensaje);
}
/*Evento 2: redirigir a página externa*/
function Redirigir() {
    window.location.href = "https://www.viator.com/es-ES/San-Salvador/d5585-ttd?m=27910&supag=1239150670968141&supsc=dat-2329246664725260&supai=77447050073344&supdv=c&supnt=nt:o&suplp=148528&supli=57&supti=dat-2329246664725260&tsem=true&supci=dat-2329246664725260&supkw=turismo%20en%20el%20salvador&msclkid=6357896fb6b916aac002eed248a865d5";
}
/*Custom element: mostrar video*/
class VideoTurismo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <div class="evento_2">
                <h2>Explora la belleza de El Salvador</h2>
                <iframe src="https://www.youtube.com/embed/nmoGUvCz8Jo" allowfullscreen></iframe>
            </div>

            <style>
                .evento_2 {
                    background-color: #fff;
                    padding: 20px;
                    text-align: center;
                    border-radius: 12px;
                    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);
                    flex: 1 1 calc(33.333% - 40px);
                    min-width: 280px;
                    max-width: 300px;
                    margin: 3% auto;
                    cursor: pointer;
                    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
                }
            </style>
        `;
    }
}
customElements.define("video-turismo", VideoTurismo);