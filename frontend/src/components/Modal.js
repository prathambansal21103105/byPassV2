import ReactDom from 'react-dom';

const MODAL_STYLES={
    position:'fixed',
    top:'94%',
    left:'80%',
    transform:'translate(-60%, -50%)',
    backgroundColor:'transparent',
    padding:'0px',
    zIndex:1000,
}

const OVERLAY_STYLES={
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,.7)',
    zIndex:1000
}

const Modal=({open,children})=>{
    if(!open){
        return null;
    }
    return ReactDom.createPortal(
    <>
    <div style={OVERLAY_STYLES}>
    <div style={MODAL_STYLES}>
        {children}
    </div>
    </div>
    </>, document.getElementById('portal')
    );
}
export default Modal;