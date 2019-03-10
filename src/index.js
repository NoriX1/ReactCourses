import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>Are you sure you want to do this?</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 3:00PM" text="Lorem ipsum dolor sit." avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 4:00PM" text="Lorem ipsum dolor." avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 5:00PM" text="Lorem ipsum." avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));