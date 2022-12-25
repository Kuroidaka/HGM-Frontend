import styled from 'styled-components'

const AddUser = () => {
    return ( 
        <Container>
            <header>
                <div className="title">
                    CREATE USER
                </div>

                <div className="description">
                    Create a new user profile with new roles and permissions
                </div>
            </header>


            <form>
                <div className="body">
                    <label htmlFor="first-name" className="first-name" />
                    <input type="text" id='first-name' />

                </div>
            </form>


        </Container>
    );
}
 
export default AddUser;

const Container = styled.div`
    height: calc(100vh - var(--header-height));


    header {
        padding: 16px 20px;

        .title {
            font-size: 2rem;
            font-weight: 900;

        }

        .description {
            color: var(--secondary_admin);
            font-size: 1.4rem;
        }
    }

    form {
        margin: 16px 20px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
        background-color: #ffffff;
        border-radius: 10px;
        height: 500px;
        display: grid;

            .body{
                height: 100%;
                width: 100%;
                padding: 20px;
            }
    }
`