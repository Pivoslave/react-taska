import './note_adder.css'
function AddInfo(props){

    let inputText = '';

    return(

        <div className={'add-note' + (!props.active ? ' hidden' : '')}>
            <input type='text' id='input-text' onChange={(txt) => inputText = txt.target.value}></input>

            <div>
                <button onClick={() => {
                    addHandler(props.notes, props.noteHook, inputText);
                    document.getElementById('input-text').value='';
                    props.enableHook(!props.active)}}>
                    Add Note</button>

                <button onClick={() => {
                    document.getElementById('input-text').value='';
                    props.enableHook(!props.active);
                }}>
                    Cancel</button>

            </div>

        </div>

    )

    function addHandler(data, hook, text){
        hook([...data, {'active': true, 'text': text, 'date': new Date().toLocaleString(), 'id': (data.length === 0 ? 0 : data[data.length-1].id + 1)}]);
    }
}

export default AddInfo;