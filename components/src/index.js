import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {


	return (
		<div className='ui container comments'>
		<ApprovalCard>
			Are you really ready to do this?
		</ApprovalCard>
		<ApprovalCard>
			<CommentDetail
			 	author="Sam"
			 	timeAgo="Today at 4:20 PM"
			 	content="Great blog!"
			 	avatar={faker.image.avatar()} />
		</ApprovalCard>
		<ApprovalCard>
			<CommentDetail 
			 	author="Alexus"
			 	timeAgo="Today at 4:21 PM" 
			 	content="Nice article!"
			 	avatar={faker.image.avatar()}/>
		</ApprovalCard>
		<ApprovalCard>
			<CommentDetail
				author="kleine Alexus"
				timeAgo="Yesterday at 5:00 PM"
				content="I love this subject!"
				avatar={faker.image.avatar()}/>
		</ApprovalCard>
		<ApprovalCard>
			<CommentDetail 
				author="Jane" 
				timeAgo="Today at 4:44 PM" 
				content="I'll start to research"
				avatar={faker.image.avatar()}/>
		</ApprovalCard>			
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));