
import customerReviews from '../utilities/fakeDb';
const loadReviews = () => {
    const reviews = customerReviews()
    const someReviews = [...reviews.slice(0, 3)]
    return [reviews, someReviews]
};

export default loadReviews;