import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const { _id, title, details, image_url, category_id } = news;
    return (
        <div className='mt-4'>
            <Card style={{  }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title  className='mb-3'>{title}</Card.Title>
                    <Card.Text  className='mb-3'>
                    {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger">All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;