import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: ''
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,//spread operator  copy all or part of an existing array or object into another array or object.
      lastName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  return (
    <>
    <div className='flex flex-col  gap-5'>
      <label >
        First name :
        <input className='border border-solid'
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name :
        <input className='border border-solid'
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email :
        <input className='border border-solid'
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
    </div>

      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
