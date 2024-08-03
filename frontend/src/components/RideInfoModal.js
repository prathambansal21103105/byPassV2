import ReactDom from 'react-dom';

const MODAL_STYLES={
    position:'fixed',
    top:'50%',
    left:'50%',
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
    backgroundColor:'rgba(0,0,0,.8)',
    zIndex:1000
}

const RideInfoModal=({open,children})=>{
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
    </>, document.getElementById('portal1')
    );
}
export default RideInfoModal;