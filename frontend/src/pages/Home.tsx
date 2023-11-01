import {
    Row,
    InputGroup,
    Button,
 } from "react-bootstrap";

const Home = ()=>{
    return (
        <>
            <section className="container pt-5 pb-5">
                <h1 className="text-center">Funcionários</h1>

                <InputGroup className="mt-5">
                    <input type="text" className="form-control" /> 
                    <Button className="rounded-0">Search</Button>
                </InputGroup>

            </section>

            <section className="container">
                <Row>
                    <div className="col-3">
                        <p>Teste</p>
                    </div>

                    <div className="col">
                        {/* <CardEmployee /> */}
                    </div>
                </Row>
            </section>
        </>
    );
};

export default Home;