import cerrar from "../../assets/img/cerrar.png";
import { UserContext } from "../../contexts/UserContext";
import './Modal.scss'
import React, { useContext, useState } from 'react'

const Modal = ({open, close, array, editArray, index}) => {

    const {privilegios, setPrivilegios} = useContext(UserContext);

    const [comment, setComment] = useState('');

    const handleCommentChange = (event) => {
        setComment(event.target.value);
      };

      const addComment = () => {
        const newPlaces = [...array];
        newPlaces[index].comments.push(comment);
        editArray(newPlaces);
        setComment('');
      };

      const addComment2 = () => {
        const newPlaces = [...array];
        newPlaces[index].commentsClient.push(comment);
        editArray(newPlaces);
        setComment('');
        
      };

    if(!open) return null

    console.log(array);

  return (
        <>
            <div className="overlay" onClick={close}></div>
            <div className='modal'>
                <div className='modal__hijo'>
                    <div className='modal__hijo--header'>
                        <h2 className='modal__hijo--header--h2'>COMENTARIOS</h2>
                        <img className='modal__hijo--header--img' onClick={close} src={cerrar} alt="cerrar"></img>
                    </div>
                    <div className='modal__hijo--body'>
                        {privilegios === true && <ul className='modal__hijo--body--ul'>
                            {array[index].comments.map((comment, index) => <li key={index}>{comment}</li>)}
                        </ul>}
                        {privilegios === false && <ul>
                            {array[index].commentsClient.map((comment, index) => <li key={index} className='modal__hijo--body--ul--li'>{comment}</li>)}
                        </ul>}
                    </div>
                    <div className='modal__hijo--formulario'>
                        <input className='modal__hijo--formulario--input' type="text" placeholder='Escribir un comentario...' value={comment} onChange={handleCommentChange}></input>
                        {privilegios === true ? <button className='modal__hijo--formulario--button' onClick={addComment}>Añadir</button> : <button className='modal__hijo--formulario--button' onClick={addComment2}>Añadir</button>}
                    </div>
                </div>
            </div>
        </>
  )
}

export default Modal


