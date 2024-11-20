import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import styles from '../Estilos/componentes.css'; 

const Footer = () => {
  return (
    <MDBFooter className="footerContainer">
      <MDBContainer className='p-4 pb-0'>
        <section className="socialButtons">
          <MDBBtn outline color="light" floating className="socialBtn" href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className="socialBtn" href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className="socialBtn" href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className="socialBtn" href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className="socialBtn" href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className="socialBtn" href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className="footerText">
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
