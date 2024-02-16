import React, { useState } from 'react'
import { saveProduct } from '../repository/repo';

function NewProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleSaveProduct = (event) => {
    event.preventDefault();
    let product = {name, price, checked}
    saveProduct(product).then((response) => {
      alert("Votre produit :" + JSON.stringify(response.data) + " a été ajouté avec succé");
    })

  }

  return (
    <div className='row p-1'>
      <div className='col-md-6 container'>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={handleSaveProduct}>
              <div className='mb-3'>
                <label className='form-label'>Name :</label>
                <input 
                  onChange={(e) => setName(e.target.value)}
                  value={name} 
                  className='form-control'>
                </input>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Price :</label>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price} 
                  className='form-control'>
                </input>
              </div>
              <div className="form-check">
                <input 
                  onChange={(e) => setChecked(e.target.checked)}
                  checked={checked} 
                  className="form-check-input" type="checkbox" />
                <label className="form-check-label">
                  Checked 
                </label>
              </div>
              <button className='btn btn-success mt-2'>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProduct