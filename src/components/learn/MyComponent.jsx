import './style.css'

const MyComponent = () => {

    const hoangdung = {
        name: 'Hoang Dung',
        age: 20
    }

    return (

        <>
            <div className="child" 
            style={{color: 'red'}}>
                {JSON.stringify(hoangdung)} {hoangdung.name}

            </div>
        </>

    );
}

export default MyComponent;
