import {useState, useEffect} from 'react'
// import {useEffect} from 'react'

function Signup(){
    const [newUser, setNewUser] = useState({name: '', email: '', phoneNumber: '', phoneType: '', staff: '', bio: '', notification: true})
    const [isChecked, setIsChecked] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [validationErrors, setValidationErrors] = useState({})
    const handleChange = () => {
        setIsChecked(!isChecked);
      };

    const handleChangeCreator = attribute => {
        return e => {
            setNewUser(prev => ({...prev, [attribute]: e.target.value}))
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        setNewUser({name: '', email: '', phoneNumber: '', phoneType: '', staff: '', bio: '', notification: true})
    } 

    useEffect(() => {
        if (isSubmitted) {
          const errors = {};
          if (!newUser.name.length) errors['name']='Please enter your Name';
          if (!newUser.email.includes('@')) errors['email']='Please provide a valid Email';
          if (newUser.phoneNumber && newUser.phoneNumber.length !== 10) errors['phoneNumber']='Please provide a valid phone number';
          if (newUser.phoneNumber && !newUser.phoneType) errors['phoneType']='Must include phone type'
          if (newUser.bio.length > 280) errors['bio']='Too many characters'
          setValidationErrors(errors);
        }
    }, [newUser.name, newUser.email, newUser.phoneNumber, newUser.phoneType, newUser.bio])

    return (
        <div>
            <h2>Sign Up!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                        id='name'
                        type='text'
                        value={newUser.name}
                        onChange={handleChangeCreator('name')}
                    ></input>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        id='email'
                        type='text'
                        value={newUser.email}
                        onChange={handleChangeCreator('email')}
                    ></input>
                </div>
                <div>
                    <label htmlFor='phonenumber'>Phone Number:</label>
                    <input
                        id='phonenumber'
                        type='text'
                        value={newUser.phoneNumber}
                        onChange={handleChangeCreator('phoneNumber')}
                    ></input>
                </div>
                <div>
                    <label htmlFor='phonetype'>Phone Type:</label>
                    <select 
                        id='phonetype'
                        onChange={handleChangeCreator('phoneType')}>
                        <option value='home'>Home</option>
                        <option value='work'>Work</option>
                        <option value='mobile'>Mobile</option>
                        
                    </select>
                </div>
                <div>
                    <label htmlFor='staff'>Staff:</label>
                    <br></br>
                    <label>Instructor:<input id='staff' type='radio' value='Instructor' name='staff' onChange={handleChangeCreator('staff')}></input></label>
                    <label>Student:<input id='staff' type='radio' value='Student' name='staff' onChange={handleChangeCreator('staff')}></input></label>
                </div>
                <div>
                    <label htmlFor='bio'>Bio:</label>
                    <textarea
                        id='bio'
                        name='bio'
                        value={newUser.bio}
                        onChange={handleChangeCreator('bio')}
                    />
                </div>
                <div>
                    <label htmlFor='notification'>Notifications:</label>
                    <input id='notification' type='checkbox' checked={isChecked} onChange={handleChange} value={newUser.notification}></input>
                </div>
                <button id='submit' type='submit'>Register</button>
            </form>
        </div>
    )
    
}

export default Signup;