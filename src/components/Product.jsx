import React from 'react'

const Product = () => {
  return (
    <div>
      <div>
        <img src=".././assets/bill.png" />
      </div>
      <div>
        <h2 className='text-white font-bold text-5xl'>
          Easily control your <br /> billing & invoicing.
        </h2>
        <p className='text-gray-400'>
          Elit enim sed massa etiam. Mauris eu adipiscing <br /> ultrices
          ametodio aenean neque. Fusce ipsum orci <br /> rhoncus aliporttitor
          integer platea placerat.
        </p>
        <div className='flex'>
          <a>
            <img src='.././assets/apple.svg' />
          </a>
          <a>
            <img src='.././assets/google.svg' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product