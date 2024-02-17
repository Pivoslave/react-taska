import "./wrapper.css"
import trashbin from './../imgs/trashbin.svg';
import checkmark from './../imgs/white-check.svg'

function Wrapper(props){

    return(

        <div className={'list-wrapper'} style={props.notes.length === 0? {padding: 0} :{}}>

            {props.notes.map((el) => (
                <div className={'note' + (el.active ? '' : ' checked')} key={el.id}>

                    <div className='checkmark' onClick={() => checkTask(el)}>
                        <img className='checkBG' alt=''></img>
                        <img src={checkmark} alt='' className='hidden'></img>
                    </div>

                    <div className='note-text'>
                        <h4>{el.text}</h4>
                        <h4>{el.date}</h4>
                    </div>

                    <div>
                        <img src={trashbin} alt='' onClick={() => (props.hook(props.notes.filter(eel => eel.id !== el.id)))}></img>
                    </div>

                </div>
            ))}

        </div>

    )

    function checkTask(el){
        const a = props.notes.findIndex(eel => eel.id === el.id);
        let b = [...props.notes];
        b[a].active = !b[a].active;
        console.log(b);
        console.log(a);
        props.hook(b);
    }
}

export default Wrapper;