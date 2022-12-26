import { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components'
import Button from '~/component/Button/Button';
import Input from '~/component/Input/Input';

interface addNewUserPropTypes {
    setIsAddNew:  React.Dispatch<React.SetStateAction<boolean>>
}

const AddNewUser:FC<addNewUserPropTypes> = (props) => {
    const { setIsAddNew } = props
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCF, setPasswordCF] = useState('')
    const [pwError, setPwError] = useState<string>('')

    const handleSubmitAdd = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(password !== passwordCF){
            return setPwError('Confirm password is not correct')
        }
        else{
            setPwError('')
            const data = {
                username: username,
                email: email,
                password: password,
                passwordCF: passwordCF,
            }

            console.log(data);
            
        }
       

        
    }

    return ( 
        <Container>
            <Layout />

            <form className="modal" onSubmit={handleSubmitAdd}>  

                <div className="header">
                    <h3>Add New User</h3>
                </div>

                <div className="content">

                    <Input id='username' 
                            setValue={setUsername} value={username} type='text' label='UserName' width={'100%'}/>
                    <Input id='email' 
                            setValue={setEmail} value={email} type='email' label='Email' width={'100%'}/>
                    <Input id='password' 
                            setValue={setPassword} value={password} type='password' label='Password' width={'100%'}/>
                    <Input id='password-confirm' 
                            error={pwError}
                            setValue={setPasswordCF} value={passwordCF} type='password' label='Password Confirm' width={'100%'}/>
                    

                </div>

                <div className="button-box">
                    <Button title='Cancel' cancel={true} handleOnClick={() => setIsAddNew(false)}>

                    </Button>

                    <Button title='Add New'>

                    </Button>
                </div>

            </form>

        </Container>
     );
}
 
export default AddNewUser;

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal{
        width: 400px;
        height: auto;
        background-color: white;
        z-index: 200;
        position: fixed;
        border-radius: 10px;
        padding: 20px;

        .header{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            width: 100%;
        }
        .content{
            /* display: flex;
            justify-content: center;
            align-items: center; */
            div + div {
                margin-top: 20px;
            }
        }
        .button-box{
            margin-top: 20px;
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }

    }

`
const Layout = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(16 16 16 / 20%);
`