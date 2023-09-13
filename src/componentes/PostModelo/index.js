import "./PostModelo.css";

const PostModelo = (props) => {
  return (
    <article className="postModeloContainer">
      <div className="fotoCapa" style={{ backgroundImage: `url(${props.fotoCapa})` }}>
        <h2 className="titulo"> {props.titulo}</h2>
      </div>
      <div className="postConteudoContainer">{props.children}</div>
    </article>
  );
};

export default PostModelo;
