import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({news}) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{height: '45px'}} src={author?.img} roundedCircle />
                    <div className='ps-3 flex-grow-1'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small>{moment(author.published_date).format("YYYY-MM-DD")}</small></p>
                    </div>
                    <div>
                        <span><FaRegBookmark></FaRegBookmark></span>
                        <span className='ps-2'><FaShareAlt></FaShareAlt></span>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='mb-3'>{title}</Card.Title>
                    <Card.Img className='mb-3' variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details} <Link to={`/news/${_id}`} >Read More</Link></> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`} >Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center"> 
                    <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span className='ms-2'>{rating.number}</span>
                    </div>
                    <div><FaEye></FaEye> {total_view}</div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;