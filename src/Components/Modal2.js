import React, { useState, useRef } from 'react'

export default function Modal(props) {

    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);
    const title = useRef();
    const rating = useRef();
    const disc = useRef();
    const ImgUrl = useRef();
 
    return (
        
        <>
        
            <button onClick={() => toggle()} className="add-movie">Add new Movie</button>
            {showModal &&
                <div className="container-background" style={{zIndex:"999"}}>
                    <div className="modal-container">
                        <i class="fas fa-times close" onClick={() => toggle()}></i>
                        <div className="modal-content">
                            <h1>Add New Movie</h1>
                            <div className="row">
                                <label htmlFor="title">Title :</label>
                                <input type="text" placeholder="Pick ur title please" id="title" ref={title} />
                            </div>
                            <div className="row">
                                <label htmlFor="rating">Rate :</label>
                                <input type="number" placeholder="Pick ur rating please" id="rating" ref={rating} />
                            </div>
                            <div className="row">
                                <label htmlFor="discription">Discription :</label>
                                <input type="text" placeholder="Pick ur discription please" id="discription" ref={disc} />
                            </div>
                            <div className="row">
                                <label htmlFor="imgUrl">Img Url :</label>
                                <input type="text" placeholder="Pick ur imgUrl please" id="imgUrl" ref={ImgUrl} />

                            </div>
                            <button type="submit" className="btn-submit" onClick={() => {
                                return (title.current.value && disc.current.value && ImgUrl.current.value && rating.current.value &&
                                    (props.newList([...props.movies,{
                                        title: title.current.value,
                                        description: disc.current.value,
                                        posterURL: ImgUrl.current.value,
                                        rating: rating.current.value,

                                    }])),
                                    toggle()

                                )

                            }}>Submit</button>

                        </div>
                    </div>
                </div>}

        </>

    )
}
