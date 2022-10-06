import React from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { render } from '@testing-library/react';
export default function MyVerticallyCenteredModal(props) {

  const [visible, setVisible] = React.useState(false);
  useEffect(()=>{
    let pop_status = localStorage.getItem('pop_status');
    if(!pop_status){
      setVisible(true);
      localStorage.setItem('pop_status',1);
    }
  },[])
  if(!visible) return null;
  
  return (
    <div> 
    
    <Modal className='popuppagee'
      {...props}
      size="small"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      
      </Modal.Header>

      <div className='bodyclr'>
      <Modal.Body style={{ backgroundImage:`url(${"blob:https://web.whatsapp.com/ba801ef7-36ec-4cdb-aa86-e88b121ab553"})`, 
    height:"100%",width:"100%"
    }} >
        
        
        <h1 className='contentpopup'><b>Hii healthy Friends !!! </b> </h1>
         <h3 className='overwhelmed'> overwhelmed to see you here. 
          </h3> 
          <h3 className='overwhelmed2'>  
          Sending Our Love 
          </h3> <h3 className='hrtclr'>♥️</h3>
          <h3 className='overwhelmed1'>  
          (Special Discount Coupon)
          </h3>
        
          <form class="popup">

<div class="form-group row">
<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg "></label>
<div class="col-sm-10">
<input type="text"  class="form-control namecontrol form-control-lg" id="name" placeholder="Enter Your Name" />
</div>
</div>

<div class="form-group row">
<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg "></label>
<div class="col-sm-10">
<input type="text"  class="form-control namecontrol form-control-lg" id="name" placeholder="Enter Your Email" />
</div>
</div>

<div class="form-group row">
<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg "></label>
<div class="col-sm-10">
<input type="number"  class="form-control namecontrol form-control-lg" id="name" placeholder="Enter Your Mobile" />
</div>
<button type="button"  class=" btn btm1  loginfont send-button">Get Your Discount</button>
</div>
</form>

      </Modal.Body>
      </div>

    </Modal>
    </div>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(true);
  return (
    <div>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

render(<App />);