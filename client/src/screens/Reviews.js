import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import Rating from "../components/Rating";

const Reviews = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  console.log(productDetails);
  const { loading, error, product } = productDetails;

  console.log(product);

  useEffect(() => {

  }, [])

  return (
    <>
      <ListGroup variant="flush">
        {product.reviews.map((review) => (
          <ListGroup.Item key={review._id}>
            <strong>{review.name}</strong>
            <Rating value={review.rating} />
            <p>{review.createdAt.substring(0, 10)}</p>
            <p>{review.comment}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      ;
    </>
  );
};

export default Reviews;
