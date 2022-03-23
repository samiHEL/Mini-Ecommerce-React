import { useState, useEffect } from "react";
import { PanierListe } from "./PanierListe";

export const Accueil = () => {
  const [cart, setCart] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    adresse: "",
    commentaire: "",
  });

  const articles = [
    {
      id: 1,
      nom: "Produit 1",
      prix: 10,
      description:
        "Description Produit 1",
    },
    {
      id: 2,
      nom: "Produit 2",
      prix: 20,
      description:
        "Description Produit 2 ",
    },
    {
      id: 3,
      nom: "Produit 3",
      prix: 30,
      description:
        "Description Produit 3",
    },
    {
      id: 4,
      nom: "Produit 4",
      prix: 40,
      description:
        "Description Produit 4",
    },
    {
      id: 5,
      nom: "Produit  5",
      prix: 50,
      description:
        "Description Produit5",
    },
  ];
  

  const cartItems = cart;

  function getArticle(e, item, index) {
    e.preventDefault();
    console.log(item);
    console.log(index);
    setCart([...cart, item]);
    if (cart.length > 0) {
      setVisibility(visibility);
    } else {
      setVisibility(!visibility);
    }

  }

  function supprimerArticle(e, item) {
    debugger;
    e.preventDefault();
    console.log(item);
    
    let cloneCart = [...cart];
    cloneCart = cloneCart.filter((cartItems) => cartItems.id !== item.id);
    setCart(cloneCart);
    if (cloneCart.length === 0) {
      setVisibility(!visibility);
    }
  }

  function handleChange(e) {
   
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target;
 
    setForm({ ...form, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault(); 
    const { nom, email, adresse, commentaire } = form;
    if (
      nom.length > 0 && email.length > 0 && adresse.length > 0 && commentaire.length > 0
    ) {
   
      setForm({ nom: "", email: "", adresse: "", commentaire: "" }); 
    } else {
      alert("veuillez compléter les champs ");
    }
  }

  return (
    <div className="row">
      <h2>Catalogue</h2>
      {articles.map((item, index) => {
        return (
          <div className="col-sm-4">
            <div className="card">
              <h5 className="card-header" key={index}>
                {item.nom} - {item.prix}€
              </h5>
              <div className="card-body">
                <p className="card-text" key={index}>
                  {item.description}
                </p>
              </div>
              <div className="card-footer text-muted">
                <button
                  href="#"
                  onClick={(e) => getArticle(e, item, index)}
                  className="btn btn-primary"
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <hr className="my-3" />

<h2>Panier</h2>

{visibility ? (
  cartItems.map((item) => {
    return (
      <div className="col-sm-4 my-3">
        <div className="card">
          <h5 className="card-header" key={item.id}>
            {item.nom} - {item.prix}€
          </h5>
          <div className="card-body">
            <p className="card-text" key={item.id}>
              {item.description}
            </p>
          </div>
          <div className="card-footer text-muted">
            <button
              href="#"
              onClick={(e) => supprimerArticle(e, item)}
              className="btn btn-primary"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    );
    return <></>;
  })
) : (
  <h5>Votre panier est vide</h5>
)}

      







     
    </div>
  );
};
