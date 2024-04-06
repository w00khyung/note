import React, { useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
	const dispatch = useDispatch();
	const onLogOut = useCallback(() => {
		dispatch(logoutAction());
	}, []);
	return (
		<Card
			actions={[
				<div key='twit'>
					짹짹
					<br />
				</div>,
				<div key='followings'>
					팔로윙
					<br />
				</div>,
				<div key='followers'>
					팔로워
					<br />
				</div>,
			]}>
			<Card.Meta avatar={<Avatar>HR</Avatar>} title='horizon' />
			<Button onClick={onLogOut}>로그아웃</Button>
		</Card>
	);
};

UserProfile.propTypes = {
	setIsLoggedIn: PropTypes.func.isRequired,
};

export default UserProfile;
