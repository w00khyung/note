import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';

const Home = () => {
	const { isLoggedIn } = useSelector((state) => state.user);
	const { mainPosts } = useSelector((state) => state.post);
	return (
		<AppLayout>
			{isLoggedIn && <PostForm />}
			{mainPosts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</AppLayout>
	);
};

export default Home;
