import React from 'react';
import styled from '@emotion/styled';

const TitleBlock = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #FFE8BF;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
`;

export const NewsItem = ({
	title,
	date,
	author,
	children,
}) => {
	return (
		<>
			<TitleBlock>
				<h1>{title}</h1>
				<i>{date}</i>
			</TitleBlock>
			<Content>
				{children}
			</Content>
		</>
	)
}
