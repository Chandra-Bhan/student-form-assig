import React, { useState, useEffect } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isUpdated, SetIsUpdated] = useState(false);

  const local = localStorage.getItem('student')
    ? JSON.parse(localStorage.getItem('student'))
    : [];
  const handleSubmission = () => {
    if (name !== '' && email !== '' && phone !== '' && password !== '') {
      const temp = {
        name,
        email,
        phone,
        password,
      };
      localStorage.setItem('student', JSON.stringify([...local, temp]));
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      SetIsUpdated(!isUpdated);
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div>
      <div
        className="border p-5 mt-4 mb-4"
        style={{ width: '25rem', margin: 'auto' }}
      >
        <h1 className="text-success" style={{ textAlign: 'center' }}>
          Student Form!
        </h1>
        <input
          className="form-control"
          type="text"
          placeholder="What's your name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="form-control"
          type="number"
          placeholder="Mobile No"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn btn-primary mt-4 ps-5 pe-5"
          style={{ marginLeft: '5rem' }}
          onClick={handleSubmission}
        >
          Submit
        </button>
      </div>
      <div className="border p-5">
        <h1 className="text-info" style={{ textAlign: 'center' }}>
          Student Detail
        </h1>
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {local.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
