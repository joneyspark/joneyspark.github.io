import React from 'react';
import {Card} from 'react-bootstrap';
const Headnews = (props) => {
    const {title, description, publishedAt, url, source} = props.article;
    return (
        <div>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Card.Text>
                    {publishedAt}
                    </Card.Text>
                    <Card.Text>
                    {source.name}
                    </Card.Text>
                    <a href={url}>Click Details</a>
                </Card.Body>
                </Card>
        </div>
    );
};

export default Headnews;