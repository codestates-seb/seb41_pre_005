// import styled from "styled-components";

// const ModalContainer = styled.div`
//   // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
//   height: 15rem;
//   text-align: center;
//   margin: 120px auto;
// `;

// const ModalBackdrop = styled.div`
//   // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
//   position: fixed;
//   z-index: 999;
//   position: fixed;
//   z-index: 999;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background-color: rgba(0, 0, 0, 0.4);
//   display: grid;
//   place-items: center;
// `;

// const ModalBtn = styled.button`
//   background-color: var(--coz-purple-600);
//   text-decoration: none;
//   border: none;
//   padding: 20px;
//   color: white;
//   border-radius: 30px;
//   cursor: grab;
// `;

// const ModalView = styled.div.attrs((props) => ({
//   // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
//   role: "dialog",
// }))`
//   border-radius: 10px;
//   background-color: #ffffff;
//   width: 300px;
//   height: 100px;
//   > button.close-btn {
//     margin-top: 3px;
//     width: 30px;
//     height: 30px;
//     font-size: 10px;
//     cursor: pointer;
//   }
//   > div.desc {
//     margin-top: 10px;
//     color: #4000c7;
//   }
// `;

// const Modal = () => {
//   return;
// };

// export default Modal;

// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Button from "../common/Header";

function SiginUpModal({ open, setPopup, message, title, callback }) {
  const handleClose = () => {
    setPopup({ open: false });
    if (callback) {
      callback();
    }
  };

  return (
    <>
      <Modal show={open} onHide={handleClose} style={{ marginTop: "250px" }}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
      </Modal>
    </>
  );
}

export default SiginUpModal;

// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";

// function SiginUpModal({ open, setPopup, message, title, callback }) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default SiginUpModal;
