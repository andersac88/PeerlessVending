import React from "react"
import {Modal} from "react-bootstrap"
import {Input, TextArea, FormButton} from "../Form"

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contact Us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form >
     <Input 
               name="name" 
               placeholder="Name" 
               value={props.contactname} 
               onChange={props.inputChange}/>
     <Input 
                name="email" 
                placeholder="E-mail" 
                value={props.email} 
                onChange={props.inputChange}/>
     <TextArea 
                name="message" 
                placeholder="Type message here..." 
                value={props.message} 
                onChange={props.inputChange}/>

    </form>
        </Modal.Body>
        <Modal.Footer>     
            <FormButton
                disabled={!(props.contactname && props.email && props.message)}
                onClick={(event) => {props.onHide(); props.formSubmit(event)}}
              >
                Submit
              </FormButton>
            
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal;