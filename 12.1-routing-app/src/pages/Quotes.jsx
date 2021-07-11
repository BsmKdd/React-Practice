import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Person1',
        text: 'The first quote',
    },
    {
        id: 'q2',
        author: 'Person2',
        text: 'The second quote',
    },
    {
        id: 'q3',
        author: 'Person3',
        text: 'The third quote',
    },
];

const Quotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
