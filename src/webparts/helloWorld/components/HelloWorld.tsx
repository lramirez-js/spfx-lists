import * as React from 'react';
import styles from './HelloWorld.module.scss';
import type { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import List from './List';

const HelloWorld: React.FC<IHelloWorldProps>  = (props) => {

  const {
    description,
    test,
    test1,
    test2,
    test3,
    isDarkTheme,
    environmentMessage,
    hasTeamsContext,
    userDisplayName,
    webTitle
  } = props;

  return (
    <section className={`${styles.helloWorld} ${hasTeamsContext ? styles.teams : ''}`}>
      <div className={styles.welcome}>
        <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
        <h2>Welcome, {escape(userDisplayName)}!</h2>
        <div>{environmentMessage}</div>
        <br />
      </div>
      <div>
        <div>Web part description: <strong>{escape(description)}</strong></div>
        <div>Web part test: <strong>{escape(test)}</strong></div>
        <div>Web part test1: <strong>{test1}</strong></div>
        <div>Web part test2: <strong>{escape(test2)}</strong></div>
        <div>Web part test3: <strong>{test3}</strong></div>
        <div>Loading from: <strong>{escape(webTitle)}</strong></div>
      </div>
      <List {...props} />
      <div id="spListContainer" />
    </section>
  )
}

export default HelloWorld 