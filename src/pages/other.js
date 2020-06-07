import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../components/Page';
import { addCounts } from '../store/count/action';
import { wrapper } from '../store/store';
import { serverRenderClock, startClock } from '../store/tick/action';

const Other = props => {
  useEffect(() => {
    const timer = props.startClock();

    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return <Page title="Other Page" linkTo="/" />;
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(serverRenderClock(true));
  store.dispatch(addCounts());
});

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCounts, dispatch),
    startClock: bindActionCreators(startClock, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Other);
