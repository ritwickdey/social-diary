import React from 'react';

const styles = {
  formatedText: {
    display: 'flex',
    height: '75vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2.4rem'
  }
};
const NotFoundPage = () => (
  <div style={styles.formatedText}>404! Not Found</div>
);

export default NotFoundPage;
