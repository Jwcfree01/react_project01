import './assets/styles/app.css';
import { Modal } from './components/Modal';

const App = () => {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-4">
                <h2>
                  <b>CAR MANAGEMENT</b>
                </h2>
              </div>
              <div className="col-sm-4 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add Car
                </button>
              </div>
              <div className="col-sm-4">
                <div className="search-box">
                  <input type="text" className="form-control" placeholder="Search&hellip;" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal />
    </div>
  );
};

export default App;
