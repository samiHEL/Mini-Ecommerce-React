import { useState, useEffect } from "react";
import { Accueil } from "./Accueil"
import {handleSubmit} from "./Accueil"
import {form} from "./Accueil"
import {handleChange} from "./Accueil"

export const PanierListe = () => {
  const [cart, setCart] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    adresse: "",
    commentaire: "",
  });
  const cartItems = cart;
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
      nom.length > 0 &&
      email.length > 0 &&
      adresse.length > 0 &&
      commentaire.length > 0
    ) {
     
      setForm({ nom: "", email: "", adresse: "", commentaire: "" }); 
    } else {
      alert("veuillez compléter les champs ");
    }
  }
  return <>
     

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

<hr className="my-3" />
      <div className="col-sm-17">
        <h2>Votre profil</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control my-3"
            name="nom"
            value={form.nom}
            placeholder="votre nom"
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control my-3"
            name="email"
            value={form.email}
            placeholder="votre email"
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control my-3"
            name="adresse"
            value={form.adresse}
            placeholder="votre rue/code postal/ville"
            onChange={handleChange}
          />
          <textarea
            id=""
            cols="30"
            rows="5"
            className="form-control my-3"
            name="commentaire"
            onChange={handleChange}
            value={form.commentaire}
            placeholder="commentaire"
          ></textarea>
          <input type="submit" className="btn btn-warning" value="Commander" />
        </form>
      </div>
  
  
  </>;
};
