import "./Banner.css";
import circuloColorido from "../../assets/circulo_colorido.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="apresentacao">
        <h1 className="titulo">Olá mundo!</h1>

        <p className="paragrafo">Eu sou o Mateus Henrique, mas pode me chamar de Alfatista ;)</p>
      </div>

      <div className="imagens">
        {" "}
        <img className="circuloColorido" src={circuloColorido} aria-hidden="true" alt="" />
        <img className="minhaFoto" src="https://github.com/alfatist.png" alt="foto do Mateus Henrique" />
      </div>
    </div>
  );
};

export default Banner;
