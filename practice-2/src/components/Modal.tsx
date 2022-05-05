// component
import { useEffect, useState } from 'react';
import { PostData } from '../services/MockApi';
import { ICar } from '../interfaces/ICar';
import { ERROR_MESSAGE } from '../constants/errorMessage';
import { carInfo } from '../constants/mockData';
import { LabelAndInput } from './common/LabelAndInput';

export const Modal = () => {
  const initialValues = { carNameErr: '', colorErr: '', brandNameErr: '', quantityErr: '' };
  const [carName, setCarName] = useState('');
  const [color, setColor] = useState('');
  const [brandName, setBrandName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const [err, setErr] = useState(initialValues);

  // useEffect(() => {
  //   // post data in db.json file
  //   if (
  //     err.carNameErr === '' &&
  //     err.brandNameErr === '' &&
  //     err.colorErr === '' &&
  //     err.quantityErr === ''
  //   ) {
  //     PostData({ carName, color, brandName, quantity });
  //     setCarName('');
  //     setColor('');
  //     setBrandName('');
  //     setQuantity(0);
  //   }
  // }, [err]);

  const validation = (car: ICar) => {
    const err = {
      carNameErr: '',
      colorErr: '',
      brandNameErr: '',
      quantityErr: ''
    };

    // validate
    if (!car.carName) {
      err.carNameErr = ERROR_MESSAGE.REQUIRE;
    }
    if (!car.color) {
      err.colorErr = ERROR_MESSAGE.REQUIRE;
    }
    if (!car.brandName) {
      err.brandNameErr = ERROR_MESSAGE.REQUIRE;
    }
    if (!car.quantity) {
      err.quantityErr = ERROR_MESSAGE.REQUIRE;
    }
    setErr(err);
  };

  const handleAddCar = () => {
    const car = {
      carName,
      color,
      brandName,
      quantity
    };
validation(car);

    // PostData(car);
  };

  const handleChange = (e: { target: { value: string } }, key: string) => {
    switch (key) {
      case 'carName':
        setCarName(e.target.value);
        break;
      case 'brandName':
        setBrandName(e.target.value);
        break;
      case 'color':
        setColor(e.target.value);
        break;
      case 'quantity':
        setQuantity(parseInt(e.target.value));
        break;
    }
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Adding Car
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              {carInfo.map((item) => (
                <LabelAndInput handleMessageErr={err.carNameErr} {...item} key={item.id} handleChange={handleChange} />
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleAddCar}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
