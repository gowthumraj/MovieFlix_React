import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";




function History() {
	const [historys, sethistory] = useState([]);

	useEffect(function () {
		async function getHistory() {
			try {
				const response = await axios.get("http://localhost:7070/history");
				sethistory(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getHistory();
	}, []);




    const navigate = useNavigate();
    function homepage() {
        navigate('/home');
        // console.log("At line 89 im home page working")
    }
    
    const [locationLocalStorage, location] = useState([]);
    function LocationIntilaizer() {

        useEffect(() => {
            //logic for getting a value from local storage stored under the key 'key'
            const locationLocalStorage = localStorage.getItem('location')
          console.log("At line 58 im home page working")
            console.log(locationLocalStorage)
            location(JSON.parse(locationLocalStorage))
        }, [])

    }
    LocationIntilaizer();


	return (
        <>	
        
        <nav className="navbar navbar-expand-sm navbar-light fixed-top bg-dark">
                <a className="navbar-brand" href="#"><img src="https://www.solu.co/wp-content/uploads/2022/09/Moviesflix-1024x576-1.webp" width="100" onClick={homepage} alt="" /></a>
                <form className="d-flex me-5">
                    <input className="form-control me -5 mr-sm-2" type="text" name="moviename" placeholder="Search for movies"></input>
                    <button className="xy bg-white me-5 rounded-"><img src="https://www.nicepng.com/png/detail/853-8539483_png-file-search-button-icon-png.png" alt=""
                        width="20"></img>
                    </button>
                </form>

                <NavLink className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </NavLink>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link text-light" onClick={homepage}>Movies <span className="sr-only">(current)</span></a>
                        </li>

                        <button type="button" className="btn " data-toggle="modal" data-target="#exampleModal">
                            {locationLocalStorage}
                        </button>


                        <NavLink className="  btn btn-danger mx-5" data-bs-toggle="modal" data-bs-target="#loginModal"
                        >SignIn</NavLink>

                    </ul>

                </div>

            </nav>



            <div className="top_space bg-light">
        <div className="container">
			<div style={{ textAlign: "center" }}>
                <h1 >Booking History</h1>
				<div className="d-flex flex-wrap">
					{historys.map((history) => {
						return (
							<div
								className="card"
								style={{ width: 250, margin: 30 }}
								key={history._id}
							>
								<div class="card-header">
									<h5 className="card-title">
										
											{history.historyId}
								
									</h5>
								</div>
								<div className="card-body">
									<h5 className="d-flex align-items-center">
                                    <i class="bi bi-film"></i>

											{history.movieName}
									
									</h5>
									<p className="card-text limit-char">
                                    <i class="bi bi-bag"></i>
                                        {history.theatreName}</p>
									<p className="card-text d-flex align-items-center">
									<i class="bi bi-currency-rupee"></i>
									
											{history.amountPaid}
										
									</p>
                                    
                                    <p className="card-text limit-char">
                                    <i class="bi bi-person-badge-fill"></i>
                                    {history.userName}</p>
								</div>
								
							</div>
						);
					})}
				</div>
			</div>
		</div>
        </div>
        </>
	
	);
}

export default History;