import React from 'react'
import { feedback } from '../constants/constants';

const Clients = () => {
  return (
    <div>
      <div>
        <h2>
          What people are <br /> saying about us
        </h2>
        <p>
          Everything you need to accept card payments <br/> and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div>
        {
          feedback.map((Element) => {
            return (
              <div>
                <img src=".././assets/quotes.svg" />
                <p>{Element.content}</p>
                <div>
                  <img src={Element.img} />
                  <div>
                    <p>{Element.name}</p>
                    <p>{Element.title}</p>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Clients