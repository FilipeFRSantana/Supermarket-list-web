import { useState, useEffect } from "react";
import "./index.css";
import { getList } from "../../services/request";
import { ListCard } from "../../components";

export const ListScreen = () => {
  const [loading, setloading] = useState(true);
  const [listData, setListData] = useState([]);
  const loadListItem = async () => {
    setloading(true);
    const result = await getList();
    console.log({ result });
    setListData(result);
    setloading(false);
  };

  useEffect(() => {
    loadListItem();
  }, []);
  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <img
            className="image-logo"
            src="/images/logo.png"
            alt="imagem logo"
          />
          <h1>Lista Supermercado</h1>
        </div>
        <div className="list-screen-list-container">
          {loading && <h3>Carregando...</h3>}
          {
            !loading && listData?.length > 0 ? listData.map(item => <ListCard key={item._id} item={item} />) : <h3>Sua lista está vazia, adicione um novo item clicando no botão de "ADICIONAR"!</h3>
          }
        </div>
      </div>
    </div>
  );
};
