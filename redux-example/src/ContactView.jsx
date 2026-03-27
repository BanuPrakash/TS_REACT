import React from 'react'

export default function ContactView({contacts, delEvent}) {
  return (
    <div>
        {
            contacts.map(contact => (
                <div key={contact.email}>
                    {contact.email}, {contact.name}
                    <button onClick={() => delEvent(contact.email)}>
                        &times;
                    </button>
                </div>
            ))
        }
    </div>
  )
}
