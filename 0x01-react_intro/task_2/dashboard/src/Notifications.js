import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
// creates a notification element

export default function Notifications() {
	return (
		<div className="Notifications">
			<p>Here is the list of notifications</p>
			<ul>
				<li data-priority="default">New course available</li>
				<li data-priority="urgent">New resume available</li>
				<li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
			</ul>
			<button style={{ position: 'absolute', top: 30, right: 30 }} aria-label="Close" onClick={() => console.log('close button clicked')}>x</button>
		</div>
	)
}
