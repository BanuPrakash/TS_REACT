import { useRef } from "react"
import { connect } from "react-redux"
import ContactView from "./ContactView";

function App(props) {  
  let emailRef = useRef();
  let nameRef = useRef();
  function doSubmit() {
    let contact = {
      email: emailRef.current.value,
      name: nameRef.current.value
    }
    props.add(contact);
  }
  return (
    <div>
        <h1> Welcome {props.user}</h1>
        <form>
          Email : <input type="email" ref={emailRef}/> <br />
          Name : <input type="text" ref={nameRef} /> <br />
          <button type="button" onClick={doSubmit}>Add Contact</button>
          <button type="button" onClick={()=> props.clear()}>Clear Contacts</button>
        </form>
        <ContactView contacts={props.contactList} delEvent={props.remove}/>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pic: state.profile.avatar,
    user: state.profile.name,
    contactList: state.contacts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: contact => dispatch({type:'ADD_CONTACT', payload: contact}),
    clear: () => dispatch({type:'CLEAR_CONTACT'}),
    remove: email => dispatch({type:'REMOVE_CONTACT', payload: email})
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
