
import { Link } from 'react-router-dom';

export default function RestroomInfo({ name, street, city, state, directions, comments, country }) {
    return (
        <div className="d-flex justify-content-center">
            <form className="row g-3 w-50 p-3 d-flex justify-content-center">
                <div className="col-md-10">
                    <label htmlFor="inputName" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputName" placeholder={name} />
                </div>

                <div className="col-10">
                    <label htmlFor="inputStreet" className="form-label">Calle</label>
                    <input type="text" className="form-control" id="inputStreet" placeholder={street} />
                </div>

                <div className="col-10">
                    <label htmlFor="inputCity" className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="inputCity" placeholder={city} />
                </div>

                <div className="col-10">
                    <label htmlFor="inputState" className="form-label">Estado</label>
                    <input type="text" className="form-control" id="inputState" placeholder={state} />
                </div>

                <div className="col-10">
                    <label htmlFor="inputDirections" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="inputDirections" placeholder={directions} />
                </div>

                <div className="col-10">
                    <label htmlFor="inputCountry" className="form-label">País</label>
                    <input type="text" className="form-control" id="inputCountry" placeholder={country} />
                </div>

                <div className="col-10">
                    <label htmlFor="inputComments" className="form-label">Comentarios</label>
                    <input type="text" className="form-control" id="inputComments" placeholder={comments} />
                </div>

                <div className="d-flex justify-content-evenly gap-5">
                    <Link to='/add'><button className='btn btn-dark rounded-lg' type="submit">Añadir</button></Link>
                    <Link to='/home'><button className='btn btn-dark rounded-lg' type="submit">Home</button></Link>
                </div>
            </form>
        </div>
    )
}
