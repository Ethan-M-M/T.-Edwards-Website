import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

function TestimonialsEdit(props) {

    const { id } = useParams();
    const navigate = useNavigate();
    const [caption, setCaption] = useState('');
    const [name, setName] = useState('');
    const [association, setAssociation] = useState('');
    const [quote, setQuote] = useState('');

    const url = `http://localhost:4000/testimonialsindex/${id}`;

    const fetchTestimonials = async () => {
        
        const requestOptions = {
            method: "GET",
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
            console.log(data); 
            const {
                caption, name, association, quote
            } = data.testimonial

            setCaption(caption);
            setName(name);
            setAssociation(association);
            setQuote(quote);

        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        if(localStorage.getItem('token') !== null) {
            fetchTestimonials();
        }
    }, [props.token])

    async function handleSubmit(e) {
        e.preventDefault();

        let bodyObj = JSON.stringify({
            caption: caption,
            name: name,
            association: association,
            quote: quote
        })


        const requestOptions = {
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: bodyObj,
            method: 'PATCH'
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1 style={{color: "#cddee5",
                textAlign: "center", textDecoration: "underline"
            }}>Edit Testimonial</h1>
            <Container>
                <Row>
                    <Col md="4">
                        <p style={{color: "#cddee5"}}><b style={{color: "#cddee5"}}>Current Testimonial</b>: <br/>{caption} {name}, Thomas's {association}, said: {quote}. <br/> What should be edited?</p>
                            <Button
                                color='info'
                                outline
                                onClick={() => navigate('/testimonialsindex')}
                            >Back to Table</Button>
                    </Col>
                    <Col md="8">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Caption</Label>
                                <Input
                                    value={caption}
                                    onChange={e => setCaption(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Association</Label>
                                <Input
                                    value={association}
                                    onChange={e => setAssociation(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Quote</Label>
                                <Input
                                    value={quote}
                                    onChange={e => setQuote(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                                <Button color='success'>Update Testimonial</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )

}


export default TestimonialsEdit