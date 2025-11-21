import {Container, Row, Col,} from 'react-bootstrap';
import { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import './Filmslide.css';

class Filmslide extends Component {
    state = { 
        films: [],
        loading: true,
    
        }
    filmSearch = () =>{
        const URL = "http://www.omdbapi.com/?apikey=423714f2&s="
        fetch (URL+ this.props.film)
        .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Errore nel recupero del film" + res.status);
        }
        })
        .then((objfilm) => {
            console.log(objfilm);
            this.setState({films: objfilm.Search
            , loading: false
            })
        }
        )
        .catch((err) => {
            this.setState({loading: false});
                console.log("Error:" + err);
        })
    }
    componentDidMount(){
        this.filmSearch();
    }
    
    render() {
        return (
            <>
            <Container fluid className="text-white p-2 my-3">
                <h2 className="mb-3">{this.props.title}</h2>
                {this.state.loading && (
                <div><Spinner animation="border" variant="danger" style={{width: "3rem", height: "3rem"}}/></div>
                )}
                <Row>
                    {this.state.films.slice(0, 6).map((movie) => (
                    <Col xs={6} md={4} lg={2} className="mb-4" key={movie.imdbID}>
                    <div className="film-slide-item p-1 rounded">
                        <img src={movie.Poster} alt={movie.Title} className="img-fluid rounded mb-2 img-hover" />
                    </div>
                </Col>
                ))}
                </Row>
        </Container>
            </>
        );
}
}
export default Filmslide;