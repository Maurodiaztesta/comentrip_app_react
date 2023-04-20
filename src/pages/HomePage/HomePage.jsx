import "./HomePage.scss";
import editar from "../../assets/img/editar.png";
import cerrar from "../../assets/img/cerrar.png";
import add from "../../assets/img/add.png";
import React, { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import { UserContext } from "../../contexts/UserContext";



const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {privilegios, setPrivilegios} = useContext(UserContext);
  const [places, setPlaces] = useState([
    {
      name: "Barcelona",
      rate: 1,
      img: "https://media.traveler.es/photos/63838947050e0f92cd80c982/master/pass/GettyImages-1392907424.jpg",
      comments: ["Comentario de prueba"],
      commentsClient: ["Una ciudad cosmopolita", "Puzzle arquitectónico"]
    },
    {
      name: "Madrid",
      rate: 1,
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/6a/f5/4c/caption.jpg?w=500&h=300&s=1",
      comments: ["Comentario de prueba 2"],
      commentsClient: ["Muy contaminado", "Cuidado con los taxistas"]
    },
    {
      name: "Candás",
      rate: 5,
      img: "https://www.turismoasturias.es/documents/11022/15334/VM_Candas1.jpg/a5046616-172f-482c-94f2-5773d88198d0?t=1440575498175",
      comments: ["Comentario de prueba 3"],
      commentsClient: ["Precioso", "Playa muy comoda"]
    },
    {
      name: "Oporto",
      rate: 4,
      img: "https://upload.wikimedia.org/wikipedia/commons/5/55/O_Porto_%28visto_da_Ponte_Dom_Luis_I%29.jpg",
      comments: ["Comentario de prueba 4"],
      commentsClient: ["Pequeño y bonito", "Buenos lugares para comer"]
    },
    {
      name: "New York",
      rate: 3,
      img: "https://media.cntraveler.com/photos/63483e15ef943eff59de603a/16:9/w_3000,h_1687,c_limit/New%20York%20City_GettyImages-1347979016.jpg",
      comments: ["Comentario de prueba 4"],
      commentsClient: ["Muy ruidoso"]
    },
    {
      name: "Vancouver",
      rate: 4,
      img: "https://www.civitatis.com/blog/wp-content/uploads/2020/12/vista-panoramica-vancouver.jpg",
      comments: ["Comentario de prueba 4"],
      commentsClient: ["Gente muy acogedora"]
    },
  ]);

  const añadir = () => {
    let ciudadValue = prompt("Ciudad");
    let imgValue = prompt("Image");
    let ratingValue = parseInt(prompt("Rating"));
    let newArray = [...places];
    newArray.push({
      name: ciudadValue,
      img: imgValue,
      rate: ratingValue,
      comments: [],
      commentsClient: []
    });
    setPlaces(newArray);
  };

  const eliminar = (place) => {
    const filteredPlaces = places.filter((p) => p !== place);
    setPlaces(filteredPlaces);
  };

  const edit = (index) => {
    const newPlaces = [...places];
    newPlaces[index].name = prompt("Nuevo nombre de la ciudad");
    newPlaces[index].img = prompt("Nueva imagen de la ciudad");
    newPlaces[index].rate = parseInt(prompt("Nuevo rating"));
    setPlaces(newPlaces);
  };

  return (
    <>
        <Header></Header>
        <div className="descripcion">
          {privilegios !== true && <h2 className="descripcion__texto">Comparte con la comunidad de COMENTRIP tus experiencias sobre los diferentes lugares a los que has viajado</h2>}
        </div>
        <div className="divPadre">
          {places.map((place, index) => (
            <div className="divPadre__hijo" key={index}>
              <div className="divPadre__hijo--caja">
                <div className={privilegios === true ? "divPadre__hijo--caja--imgs" : "divPadre__hijo--caja--imgsNON"}>
                  <img
                    onClick={() => edit(index)}
                    className="divPadre__hijo--caja--imgs--x"
                    src={editar}
                    alt="editar"
                  ></img>
                  <img
                    onClick={() => eliminar(place)}
                    className="divPadre__hijo--caja--imgs--x"
                    src={cerrar}
                    alt="cerrar"
                  ></img>
                </div>
                <h3 className="divPadre__hijo--caja--nombre">{place.name}</h3>
                <img className="divPadre__hijo--caja--imgCity" src={place.img} alt="city"></img>
                <p className="divPadre__hijo--caja--rate">Rate: {place.rate}</p>
              </div>
              <button
                onClick={() => setIsOpen(index)}
                className={privilegios === true ? "divPadre__hijo--buttonAdmin" : "divPadre__hijo--button"}
              >
                COMENTAR
              </button>
              {isOpen === index && (
                <Modal
                  array={places}
                  editArray={setPlaces}
                  index={index}
                  open={isOpen === index}
                  close={() => setIsOpen(false)}
                />
              )}
            </div>
          ))}
          {privilegios === true && <div onClick={añadir} className="divPadre__add">
            <img className="divPadre__add--img" src={add} alt="add"></img>
          </div>}
        </div>
    </>
  );
};

export default HomePage;


