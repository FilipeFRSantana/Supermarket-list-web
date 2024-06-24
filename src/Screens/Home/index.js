import { useState } from "react";
import "./index.css";
import { Button, Input } from "../../components";

export const HomeScreen = () => {
  const [username, setUsername] = useState("");
  return (
    <div className="home-screen-container">
      <div className="home-screen-content-container">
        <img
          className="shopping-bag-image"
          src="/images/shopping-bag.svg"
          alt="imagem shopping bag"
        />
        <h1 className="home-screen-title">
          Sua lista de supermercado mais fácil do que nunca
        </h1>
        <h3 className="home-screen-subtitle">
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </h3>
        <h3 className="home-screen-subtitle-description">
          Digite abaixo seu usuário para ter acesso a sua lista de compras
        </h3>
        <Input
          onChange={(text) => setUsername(text)}
          value={username}
          label="UserName"
          placeholder="Ex: usuario1"
        />
        <div className="home-screen-button-container">
          <Button>Acessar</Button>
        </div>
      </div>
    </div>
  );
};
