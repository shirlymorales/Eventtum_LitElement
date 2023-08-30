import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

class Eventtum extends LitElement {
  static styles = css`
  .card {
    background-image: linear-gradient(to bottom, black, gray);
    color: white;
  }
  
  .card2 {
    background-color: white;
    color: black;
  }
  
  header {
    background-color: rgb(0, 0, 0);
    align-items: center;
    padding: 20px;
    width: 25%;
    border-bottom-right-radius: 60px 50px;
  }
  
  .xd {
    background-color: rgb(0, 0, 0);
    padding: 1px;
    width: 88%;
    border-bottom-right-radius: 240px;
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
  }
  
  .logo {
    height: 60px;
    display: flex;
    justify-content: flex-start;
    margin-right: 10px;
    border-radius: 200%;
  }
  
  .logo img {
    margin-top: -10px;
    margin-left: -10px;
    height: 80px;
    border-radius: 100%;
  }`;

  render() {
    return html`
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

      <header class="sticky-top">
        <nav class="navbar navbar-dark bg-black sticky-top">
          <div class="container-fluid">
            <img src="img/ventana.png" alt="Bootstrap" width="100" height="74">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </header>

      <div>
        <div class="row h-100">
          <div class="col-6 text-white text-center mt-5 mb-5">
            <img src="img/1Even.png" alt="">
            <h2 class="text-dark">Crea, sueña, realizalo</h2>
            <button type="button" class="btn btn-warning text-dark">CONOCENOS</button>
          </div>
          <div class="col-6 bg-secondary text-white text-center d-flex flex-column justify-content-center">
            <h2>YA ERES CLIENTE?</h2>
            <button type="button" class="btn btn-warning text-dark w-50 h-2 mx-auto rounded-lg">INGRESA</button>
          </div>
        </div>
      </div>


      <footer class="bg-dark text-center text-white">
        <div class="container p-4 pb-0">
        </div>
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          <img src="img/footer.png" alt="">
          <a class="text-white" href="">
          </a>
        </div>
      </footer>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    `;
  }
}

customElements.define('Eventtum-element', Eventtum);
