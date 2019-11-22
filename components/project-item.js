import React from 'react';
import propTypes from 'prop-types';
import ItemContainer from './item-container';
import classNames from './project-item.module.css';

function ProjectItem({ description, tags, title }) {
	return (
		<ItemContainer className={classNames.container}>
			<h3>{title}</h3>
			<p className={classNames.description}>{description}</p>
			<p className={classNames.tags}>
				<strong>Stikkord:</strong> {tags.join(', ')}
			</p>
		</ItemContainer>
	);
}

ProjectItem.propTypes = {
	description: propTypes.string.isRequired,
	tags: propTypes.array.isRequired,
	title: propTypes.string.isRequired,
};

export default ProjectItem;
