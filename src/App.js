import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Panel } from 'react-bootstrap';
import './App.css';
import placeholder from './64px-Icon_Portrait_Shanna.png';

function MatchSummary({ match }) {
  function percent(prob) {
    return Math.round(prob*100) + '%';
  };
  return (
    <Panel className="MatchSummary">
      <Row>
        <Col xs={5}>
          <div className="MatchSummary-pic">
            <img src={placeholder} alt={match.left.name} />
          </div>
        </Col>
        <Col xs={5} xsOffset={2}>
          <div className="MatchSummary-pic">
            <img src={placeholder} alt={match.right.name} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <div className="MatchSummary-name">{match.left.name}</div>
        </Col>
        <Col xs={2}>
          <div className="MatchSummary-vs">VS</div>
        </Col>
        <Col xs={5}>
          <div className="MatchSummary-name">{match.right.name}</div>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <div className="MatchSummary-winprob">{percent(match.left.winprob)}</div>
        </Col>
        <Col xs={5} xsOffset={2}>
          <div className="MatchSummary-winprob">{percent(match.right.winprob)}</div>
        </Col>
      </Row>
    </Panel>
  );
}

class App extends Component {
  render() {
    // TODO make it look reasonable in later rounds when there are fewer matches
    let match_summaries = this.props.data.match_summaries.map((match) => (
      <Col sm={6} lg={3}>
        <MatchSummary match={match} />
      </Col>
    ));
    console.log(match_summaries.length);
    return (
      <div className="App">
        <Navbar inverse>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">FEH Voting Gauntlet Score Predictions</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Grid>
          <Row>{match_summaries}</Row>
        </Grid>
      </div>
    );
  }
}

export default App;
